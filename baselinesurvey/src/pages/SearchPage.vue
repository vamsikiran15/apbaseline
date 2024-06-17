<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-img :src="RsiLogo" class="imgsize"></ion-img>
        <ion-title style="font-size: 1.5vh"> </ion-title>
        <ion-buttons slot="start">
          <ion-back-button default-href="/" />
        </ion-buttons>
        <!-- <div class="ion-text-center">
          <h4>RSI LLP</h4>
        </div> -->
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-row>
        <ion-col>
          <ion-card>
            <div class="ion-text-center">
              <h4>HOUSEHOLD SOCIO - ECONOMIC SURVEY</h4>
            </div>
            <ion-searchbar
              v-model="query"
              @ionInput="searchInfo"
              @ionClear="clearSearch"
              debounce="500"
              placeholder="Enter Aadhar Number"
            ></ion-searchbar>
            <ion-list>
              <ion-item
                v-for="item in items"
                :key="item.id"
                @click="selectItem(item)"
              >
                {{ item.head_of_the_family }}
                {{ item.household_door_no }}
                {{ item.aadhar_number }}
              </ion-item>
            </ion-list>
          </ion-card>
        </ion-col>
      </ion-row>

      <!-- <edit-item
        v-if="selectedItem"
        :item="selectedItem"
        @item-updated="onItemUpdated"
      ></edit-item> -->
      <edit-survey
        v-if="selectedItem"
        :item="selectedItem"
        :household="householdinfo"
        :landparticular="landparticulars"
        @item-updated="onItemUpdated"
      ></edit-survey>
    </ion-content>
  </ion-page>
</template>
<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSearchbar,
  IonList,
  IonItem,
  IonLabel,
  IonImg,
  IonCard,
  IonText,
  IonCardTitle,
  IonRow,
  IonCol,
  IonBackButton,
  IonButtons,
} from "@ionic/vue";
import axios from "axios";
import EditItem from "@/pages/editPage.vue";
import EditSurvey from "@/pages/editSurvey.vue";
import Logo from "../assets/img/rsilogotwo.jpg";
export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonSearchbar,
    IonList,
    IonItem,
    IonLabel,
    EditItem,
    EditSurvey,
    IonImg,
    IonCard,
    IonText,
    IonCardTitle,
    IonRow,
    IonCol,
    IonBackButton,
    IonButtons,
  },
  data() {
    return {
      query: "",
      items: [],
      householdinfo: [],
      landparticulars: [],
      selectedItem: null,
      RsiLogo: Logo,
    };
  },
  methods: {
    async searchInfo() {
      if (this.query.trim() === "") {
        this.items = [];
        return;
      }
      try {
        const response = await axios.get(
          `http://183.82.109.39:5000/items/searchByName`,
          {
            params: { query: this.query },
          }
        );
        this.items = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async getHouseHoldInfo() {
      const id = this.selectedItem.id;
      console.log("pring the id", id);
      // if (id.trim() === "") {
      //   this.items = [];
      //   return;
      // }
      try {
        const response = await axios.get(
          `http://183.82.109.39:5000/items/householdinfo`,
          {
            params: { id: id },
          }
        );
        this.householdinfo = response.data;
        console.log("house hold info from search page", this.householdinfo);
      } catch (error) {
        console.error(error);
      }
    },
    async getLandPerticularsInfo() {
      const id = this.selectedItem.id;
      console.log("pring the id", id);
      // if (id.trim() === "") {
      //   this.items = [];
      //   return;
      // }
      try {
        const response = await axios.get(
          `http://183.82.109.39:5000/items/landparticulars`,
          {
            params: { id: id },
          }
        );
        this.landparticulars = response.data;
        console.log("landparticulars from search page", this.landparticulars);
      } catch (error) {
        console.error(error);
      }
    },
    clearSearch() {
      this.query = ""; // Clear the search bar
      this.items = []; // Clear the item list
      this.selectedItem = null; // Clear the selected item
    },
    selectItem(item) {
      this.selectedItem = { ...item }; // Copy the selected item
      this.getHouseHoldInfo();
      this.getLandPerticularsInfo();
      this.items = []; // Clear the item list
    },
    onItemUpdated(updatedItem) {
      // Optionally update the items list with the updated item
      const index = this.items.findIndex((item) => item.id === updatedItem.id);
      if (index !== -1) {
        this.items.splice(index, 1, updatedItem);
      }
      this.selectedItem = null; // Close the edit component
    },
  },
};
</script>
<style>
.imgsize {
  height: 6vh;
  width: 28vh;
}
</style>
