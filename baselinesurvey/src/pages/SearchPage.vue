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
        :incomeFromKharif="incomeKharif"
        :incomeFromRabhi="incomeRabhi"
        :livestock="livestockdetails"
        :migrations="migrationdetails"
        :landless="landlessdetails"
        :govtbenefits="govtbenefitdetails"
        :manurechemicaldetails="manurechemical"
        :pestdiseasedetails="pestdisease"
        :loanparticular="loanparticulars"
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
      incomeKharif: [],
      incomeRabhi: [],
      livestockdetails: [],
      migrationdetails: [],
      landlessdetails: [],
      govtbenefitdetails: [],
      manurechemical: [],
      pestdisease: [],
      loanparticulars: [],
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
        if (response.data) {
          this.landparticulars = response.data;
        } else {
          this.landparticulars = id;
        }
        console.log("landparticulars from search page", this.landparticulars);
      } catch (error) {
        console.error(error);
      }
    },
    async getIncomeCropKharif() {
      const id = this.selectedItem.id;
      try {
        const response = await axios.get(
          `http://183.82.109.39:5000/items/incomecropsfromkharif`,
          {
            params: { id: id },
          }
        );
        this.incomeKharif = response.data;
        console.log("income kharif data", response.data);
        console.log("income from kharif from search page", this.incomeKharif);
      } catch (error) {
        console.log("Error is Getting from Income Kharif", error);
      }
    },
    async getIncomeCropRabhi() {
      const id = this.selectedItem.id;
      try {
        const response = await axios.get(
          `http://183.82.109.39:5000/items/incomecropsfromrabhi`,
          {
            params: { id: id },
          }
        );
        this.incomeRabhi = response.data;
        console.log("income rabhi data", response.data);
        console.log("income from rabhi from search page", this.incomeRabhi);
      } catch (error) {
        console.log("Error is Getting from Income rabhi", error);
      }
    },
    async getLiveStockDetails() {
      const id = this.selectedItem.id;
      try {
        const response = await axios.get(
          `http://183.82.109.39:5000/items/livestockdetails`,
          {
            params: { id: id },
          }
        );
        this.livestockdetails = response.data;
        console.log("income rabhi data", response.data);
        console.log("livestockdetails from search page", this.livestockdetails);
      } catch (error) {
        console.log("Error is Getting from livestockdetails", error);
      }
    },
    async getMigrationDetails() {
      const id = this.selectedItem.id;
      try {
        const response = await axios.get(
          `http://183.82.109.39:5000/items/migrationdetails`,
          {
            params: { id: id },
          }
        );
        this.migrationdetails = response.data;
        console.log("migrationdetails rabhi data", response.data);
        console.log(
          " migrationdetails from search page",
          this.migrationdetails
        );
      } catch (error) {
        console.log("Error is Getting from migrationdetails", error);
      }
    },
    async getLandLessDetails() {
      const id = this.selectedItem.id;
      try {
        const response = await axios.get(
          `http://183.82.109.39:5000/api/landlessdetails`,
          {
            params: { id: id },
          }
        );
        this.landlessdetails = response.data;
        console.log("landless data", response.data);
        console.log(" landless from search page", this.landlessdetails);
      } catch (error) {
        console.log("Error is Getting from landless details", error);
      }
    },
    async getGovtBenefitDetails() {
      const id = this.selectedItem.id;
      try {
        const response = await axios.get(
          `http://183.82.109.39:5000/api/govtbenefitdetails`,
          {
            params: { id: id },
          }
        );
        this.govtbenefitdetails = response.data;
        console.log("govtbenefits data", response.data);
        console.log(" govtbenefits from search page", this.govtbenefitdetails);
      } catch (error) {
        console.log("Error is Getting from govtbenefits details", error);
      }
    },
    async getManureChemicalDetails() {
      const id = this.selectedItem.id;
      try {
        const response = await axios.get(
          `http://183.82.109.39:5000/api/manurechemicaldetails`,
          {
            params: { id: id },
          }
        );
        this.manurechemical = response.data;
        console.log("manurechemical data", response.data);
        console.log(" manurechemical from search page", this.manurechemical);
      } catch (error) {
        console.log("Error is Getting from manurechemical details", error);
      }
    },
    async getPestDiseaseDetails() {
      const id = this.selectedItem.id;
      try {
        const response = await axios.get(
          `http://183.82.109.39:5000/api/pestdiseasedetails`,
          {
            params: { id: id },
          }
        );
        this.pestdisease = response.data;
        console.log("pestdiseasedetails data", response.data);
        console.log(" pestdiseasedetails from search page", this.pestdisease);
      } catch (error) {
        console.log("Error is Getting from pestdiseasedetails details", error);
      }
    },
    async getLoanParticularsDetails() {
      const id = this.selectedItem.id;
      try {
        const response = await axios.get(
          `http://183.82.109.39:5000/api/loanparticulardetails`,
          {
            params: { id: id },
          }
        );
        this.loanparticulars = response.data;
        console.log("pestdiseasedetails data", response.data);
        console.log(
          " pestdiseasedetails from search page",
          this.loanparticulars
        );
      } catch (error) {
        console.log("Error is Getting from pestdiseasedetails details", error);
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
      this.getIncomeCropKharif();
      this.getIncomeCropRabhi();
      this.getLiveStockDetails();
      this.getMigrationDetails();
      this.getLandLessDetails();
      this.getGovtBenefitDetails();
      this.getManureChemicalDetails();
      this.getPestDiseaseDetails();
      this.getLoanParticularsDetails();
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
