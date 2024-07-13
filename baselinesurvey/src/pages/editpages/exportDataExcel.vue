<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button class="backButton" defaultHref="/landingpage"
            >Back</ion-back-button
          >
          <div v-if="latitude && longitude">
            <p>Latitude: {{ latitude }} / Longitude: {{ longitude }}</p>
          </div>
        </ion-buttons>
        <!-- <ion-img :src="RsiLogo" class="imgsize"></ion-img> -->
        <!-- <ion-title style="font-size: 1.5vh"> </ion-title> -->
        <!-- <ion-buttons slot="start">
          <ion-back-button default-href="/" />
        </ion-buttons> -->
        <!-- <div class="ion-text-center">
          <h4>RSI LLP</h4>
        </div> -->
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-row>
        <ion-col>
          <ion-card>
            <ion-searchbar
              v-model="projectquery"
              @ionInput="searchProject"
              @ionClear="clearSearch"
              debounce="500"
              placeholder="Enter Project Name"
            ></ion-searchbar>
            <ion-list>
              <ion-item
                v-for="item in filteredProjects"
                :key="item.id"
                @click="selectProject(item)"
              >
                {{ item.project_name }}
              </ion-item>
            </ion-list>

            <ion-button
              v-if="selectedProject"
              class="ion-margin"
              expand="block"
              color="primary"
              @click="fetchAndExportData"
              ><ion-icon
                class="ion-margin-end"
                name="add-circle"
                slot="icon-only"
              ></ion-icon
              >Export Data to Excel</ion-button
            >
          </ion-card>
        </ion-col>
      </ion-row>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCol,
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonPage,
  IonRow,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import axios from "axios";
import * as XLSX from "xlsx";
// @ts-ignore
import { saveAs } from "file-saver";
import { Capacitor } from "@capacitor/core";
import {
  Filesystem,
  FilesystemDirectory,
  FilesystemEncoding,
} from "@capacitor/filesystem";

import { Browser } from "@capacitor/browser";

export default {
  name: "ExportToExcelPage",
  data() {
    return {
      projectquery: "",
      projects: [],
      houseHoldInfo: [],
      selectedProject: null,
    };
  },
  components: {
    IonButton,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonSearchbar,
    IonRow,
    IonCol,
    IonCard,
    IonList,
    IonItem,
  },
  computed: {
    filteredProjects() {
      return this.projects.filter((project) =>
        project.project_name
          .toLowerCase()
          .includes(this.projectquery.toLowerCase())
      );
    },
  },
  methods: {
    async searchProject() {
      if (this.projectquery.trim() === "") {
        this.projects = [];
        return;
      }
      try {
        const response = await axios.get(
          `http://183.82.109.39:5000/items/searchByProject`,
          {
            params: { query: this.projectquery },
          }
        );
        this.projects = response.data;
        console.log("^^^^^^^^^^^^^^^^^^^^^", this.projects);
      } catch (error) {
        console.error(error);
      }
    },
    async getHouseHoldInfo(id) {
      console.log("filster name for project", id);
      try {
        const response = await axios.get(
          `http://183.82.109.39:5000/items/getDataByProjectforExcel`,
          {
            params: { query: id },
          }
        );
        this.houseHoldInfo = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async fetchAndExportData() {
      try {
        const data = this.houseHoldInfo;

        // Convert data to worksheet
        const worksheet = XLSX.utils.json_to_sheet(data);

        // Create a new workbook
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

        // Generate Excel file as a binary string
        const workbookBinary = XLSX.write(workbook, {
          bookType: "xlsx",
          type: "binary",
        });

        // Convert binary string to Uint8Array in chunks
        const CHUNK_SIZE = 1024; // Adjust the chunk size if necessary
        const binaryLen = workbookBinary.length;
        const buffer = new ArrayBuffer(binaryLen);
        const view = new Uint8Array(buffer);

        for (let i = 0; i < binaryLen; i += CHUNK_SIZE) {
          const chunk = workbookBinary.slice(i, i + CHUNK_SIZE);
          for (let j = 0; j < chunk.length; j++) {
            view[i + j] = chunk.charCodeAt(j) & 0xff;
          }
        }

        if (Capacitor.isNativePlatform()) {
          try {
            const fileName = "exported_data.xlsx";

            // Convert Uint8Array to a Blob
            const blob = new Blob([buffer], {
              type: "application/octet-stream",
            });

            // Write the blob to Filesystem
            const result = await Filesystem.writeFile({
              path: fileName,
              data: blob,
              directory: FilesystemDirectory.Documents,
              encoding: FilesystemEncoding.UTF8,
            });

            console.log("File written to:", result.uri);

            // Notify user about file saved
            alert("File saved successfully!");
          } catch (error) {
            console.error("Error writing file:", error);
            alert("Error saving file: " + error.message); // Show error message
          }
        } else {
          // On desktop, use file-saver to save the file
          const blob = new Blob([buffer], { type: "application/octet-stream" });
          saveAs(blob, "exported_data.xlsx");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        alert("Error fetching data");
      }
    },
    async openFile(path) {
      await Browser.open({ url: "file://" + path });
    },
    selectProject(item) {
      this.selectedProject = { ...item };
      console.log("asdfjlkasjdfkdsajklf", this.selectedProject.id);
      this.getHouseHoldInfo(this.selectedProject.id);

      this.projectquery = this.selectedProject.project_name;
      this.projects = []; // Clear the item list
    },
    clearSearch() {
      this.projects = [];
      this.selectedProject = null;
    },
  },
};
</script>

<style scoped>
/* Add any styles you need here */
</style>
