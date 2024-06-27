<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-img :src="RsiLogo" class="imgsize"></ion-img>
        <!-- <ion-title style="font-size: 1.5vh"> </ion-title> -->
        <!-- <ion-buttons slot="start">
          <ion-back-button default-href="/" />
        </ion-buttons> -->
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

            <ion-searchbar
              v-if="selectedProject"
              v-model="query"
              @ionClear="clearSearch"
              debounce="500"
              placeholder="Enter Aadhar Number"
            ></ion-searchbar>
            <ion-list>
              <ion-item
                v-for="item in sortedFilteredfilteredNames"
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
        :familyexpendituredetails="familyexpenditure"
        :differentsourcedetails="differentsource"
        :availabledrinkingwaterdetails="availabledrinkingwater"
        :sourcequalitywaterdetails="sourcequalitywater"
        :agricultureimplementsdetails="agricultureimplements"
        :horticulturedetails="horticulture"
        :fodderfeeddetails="fodderfeed"
        :fodderfueldetails="fodderfuel"
        :grazecattlecommunitydetails="grazecattlecommunity"
        :householdassetdetails="householdasset"
        :awarenessadoptiontechnologydetails="awarenessadoptiontechnology"
        :membershipdetails="membership"
        :participationcommunityprogramdetails="participationcommunityprogram"
        :anyschemepreviousprojectdetails="anyschemepreviousproject"
        :awarewatershedstatusdetails="awarewatershedstatus"
        :receivedtrainingwatershedstatusdetails="
          receivedtrainingwatershedstatus
        "
        :dateserveyornamedetails="dateserveyorname"
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
import Logo from "../assets/img/RSIWHITEL_Logo.png";
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
      projectquery: "",
      items: [],
      projects: [],
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
      familyexpenditure: [],
      differentsource: [],
      availabledrinkingwater: [],
      sourcequalitywater: [],
      agricultureimplements: [],
      horticulture: [],
      fodderfeed: [],
      fodderfuel: [],
      grazecattlecommunity: [],
      householdasset: [],
      participationcommunityprogram: [],
      awarenessadoptiontechnology: [],
      membership: [],
      anyschemepreviousproject: [],
      awarewatershedstatus: [],
      receivedtrainingwatershedstatus: [],
      dateserveyorname: [],
      selectedItem: null,
      selectedProject: null,
      RsiLogo: Logo,
    };
  },
  computed: {
    filteredProjects() {
      return this.projects.filter((project) =>
        project.project_name
          .toLowerCase()
          .includes(this.projectquery.toLowerCase())
      );
    },
    filteredNames() {
      if (!this.selectedProject) return [];
      return this.items.filter((item) =>
        item.head_of_the_family.toLowerCase().includes(this.query)
      );
    },
    sortedFilteredfilteredNames() {
      return this.filteredNames.sort((a, b) =>
        a.head_of_the_family.localeCompare(b.head_of_the_family)
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
          `http://localhost:5000/items/searchByProject`,
          {
            params: { query: this.projectquery },
          }
        );
        this.projects = response.data;
        console.log("^^^^^^^^^^^^^^^^^^^^^", this.selectedProject);
      } catch (error) {
        console.error(error);
      }
    },

    async fetchItemsForProject(id) {
      console.log("filster name for project", id);
      try {
        const response = await axios.get(
          `http://localhost:5000/items/searchAadharByProject`,
          {
            params: { query: id },
          }
        );
        this.items = response.data;
        console.log("name filter ", this.items);
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
          `http://localhost:5000/items/householdinfo`,
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
          `http://localhost:5000/items/landparticulars`,
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
          `http://localhost:5000/items/incomecropsfromkharif`,
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
          `http://localhost:5000/items/incomecropsfromrabhi`,
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
          `http://localhost:5000/items/livestockdetails`,
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
          `http://localhost:5000/items/migrationdetails`,
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
          `http://localhost:5000/api/landlessdetails`,
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
          `http://localhost:5000/api/govtbenefitdetails`,
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
          `http://localhost:5000/api/manurechemicaldetails`,
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
          `http://localhost:5000/api/pestdiseasedetails`,
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
          `http://localhost:5000/api/loanparticulardetails`,
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
    async getFamilyExpenditureDetails() {
      const id = this.selectedItem.id;
      try {
        const response = await axios.get(
          `http://localhost:5000/api/familyexpendituredetails`,
          {
            params: { id: id },
          }
        );
        this.familyexpenditure = response.data;
        console.log("familyexpendituredetails data", response.data);
        console.log(
          " familyexpendituredetails from search page",
          this.familyexpenditure
        );
      } catch (error) {
        console.log(
          "Error is Getting from familyexpendituredetails details",
          error
        );
      }
    },
    async getDifferentSourceDetails() {
      const id = this.selectedItem.id;
      try {
        const response = await axios.get(
          `http://localhost:5000/api/differentsourceincomedetails`,
          {
            params: { id: id },
          }
        );
        this.differentsource = response.data;
        console.log("getAvailableDrinkingWaterDetails data", response.data);
        console.log(
          " getAvailableDrinkingWaterDetails from search page",
          this.differentsource
        );
      } catch (error) {
        console.log(
          "Error is Getting from getAvailableDrinkingWaterDetails details",
          error
        );
      }
    },
    async getAvailableDrinkingWaterDetails() {
      const id = this.selectedItem.id;
      try {
        const response = await axios.get(
          `http://localhost:5000/api/drinkingwaterdetails`,
          {
            params: { id: id },
          }
        );
        this.availabledrinkingwater = response.data;
        console.log("availabledrinkingwater data", response.data);
        console.log(
          " availabledrinkingwater from search page",
          this.availabledrinkingwater
        );
      } catch (error) {
        console.log(
          "Error is Getting from availabledrinkingwater details",
          error
        );
      }
    },
    async getSourceQualityWaterDetails() {
      const id = this.selectedItem.id;
      try {
        const response = await axios.get(
          `http://localhost:5000/api/sourcequalitywaterdetails`,
          {
            params: { id: id },
          }
        );
        this.sourcequalitywater = response.data;
        console.log("sourcequalitywaterdetails data", response.data);
        console.log(
          " sourcequalitywaterdetails from search page",
          this.sourcequalitywater
        );
      } catch (error) {
        console.log(
          "Error is Getting from sourcequalitywaterdetails details",
          error
        );
      }
    },
    async getAgriImplements() {
      const id = this.selectedItem.id;
      try {
        const response = await axios.get(
          `http://localhost:5000/api/agricultureimplementsdetails`,
          {
            params: { id: id },
          }
        );
        this.agricultureimplements = response.data;
        console.log("agricultureimplementsdetails data", response.data);
        console.log(
          " agricultureimplementsdetails from search page",
          this.agricultureimplements
        );
      } catch (error) {
        console.log(
          "Error is Getting from agricultureimplementsdetails details",
          error
        );
      }
    },
    async getHorticulture() {
      const id = this.selectedItem.id;
      try {
        const response = await axios.get(
          `http://localhost:5000/api/horticulturedetails`,
          {
            params: { id: id },
          }
        );
        this.horticulture = response.data;
        console.log("horticulturedetails data", response.data);
        console.log(
          " horticulturedetails from search page",
          this.horticulturedetails
        );
      } catch (error) {
        console.log("Error is Getting from horticulturedetails details", error);
      }
    },
    async getFodderAndFeed() {
      const id = this.selectedItem.id;
      try {
        const response = await axios.get(
          `http://localhost:5000/api/fodderfeeddetails`,
          {
            params: { id: id },
          }
        );
        this.fodderfeed = response.data;
        console.log("fodderfeed data", response.data);
        console.log(" fodderfeed from search page", this.fodderfeed);
      } catch (error) {
        console.log("Error is Getting from fodderfeed details", error);
      }
    },
    async getFodderAndFuel() {
      const id = this.selectedItem.id;
      try {
        const response = await axios.get(
          `http://localhost:5000/api/fodderfueldetails`,
          {
            params: { id: id },
          }
        );
        this.fodderfuel = response.data;
        console.log("fodderfueldetails data", response.data);
        console.log(" fodderfueldetails from search page", this.fodderfuel);
      } catch (error) {
        console.log("Error is Getting from fodderfueldetails details", error);
      }
    },
    async getGrazeCattleAnimal() {
      const id = this.selectedItem.id;
      try {
        const response = await axios.get(
          `http://localhost:5000/api/grazecattlecommunitydetails`,
          {
            params: { id: id },
          }
        );
        this.grazecattlecommunity = response.data;
        console.log("grazecattlecommunitydetails data", response.data);
        console.log(
          " grazecattlecommunitydetails from search page",
          this.grazecattlecommunity
        );
      } catch (error) {
        console.log(
          "Error is Getting from grazecattlecommunitydetails details",
          error
        );
      }
    },
    async getHouseHoldAssets() {
      const id = this.selectedItem.id;
      try {
        const response = await axios.get(
          `http://localhost:5000/api/grazecattlecommunitydetails`,
          {
            params: { id: id },
          }
        );
        this.householdasset = response.data;
        console.log("householdassetdetails data", response.data);
        console.log(
          " householdassetdetails from search page",
          this.householdasset
        );
      } catch (error) {
        console.log(
          "Error is Getting from householdassetdetails details",
          error
        );
      }
    },
    async getParticipationCommunity() {
      const id = this.selectedItem.id;
      try {
        const response = await axios.get(
          `http://localhost:5000/api/participationcommunityprogramdetails`,
          {
            params: { id: id },
          }
        );
        this.participationcommunityprogram = response.data;
        console.log("participationcommunityprogram data", response.data);
        console.log(
          " participationcommunityprogram from search page",
          this.participationcommunityprogram
        );
      } catch (error) {
        console.log(
          "Error is Getting from participationcommunityprogram details",
          error
        );
      }
    },
    async getAwarenessAdoption() {
      const id = this.selectedItem.id;
      try {
        const response = await axios.get(
          `http://localhost:5000/api/awarenessadoptiontechnologydetails`,
          {
            params: { id: id },
          }
        );
        this.awarenessadoptiontechnology = response.data;
        console.log("awarenessadoptiontechnologydetails data", response.data);
        console.log(
          " awarenessadoptiontechnologydetails from search page",
          this.awarenessadoptiontechnology
        );
      } catch (error) {
        console.log(
          "Error is Getting from awarenessadoptiontechnologydetails details",
          error
        );
      }
    },
    async getMembership() {
      const id = this.selectedItem.id;
      try {
        const response = await axios.get(
          `http://localhost:5000/api/membershipdetails`,
          {
            params: { id: id },
          }
        );
        this.membership = response.data;
        console.log("membershipdetails data", response.data);
        console.log(" membershipdetails from search page", this.membership);
      } catch (error) {
        console.log("Error is Getting from membershipdetails details", error);
      }
    },
    async getAnyScheme() {
      const id = this.selectedItem.id;
      try {
        const response = await axios.get(
          `http://localhost:5000/api/anyschemepreviousprojectdetails`,
          {
            params: { id: id },
          }
        );
        this.anyschemepreviousproject = response.data;
        console.log("anyschemepreviousprojectdetails data", response.data);
        console.log(
          " anyschemepreviousprojectdetails from search page",
          this.anyschemepreviousprojectdetails
        );
      } catch (error) {
        console.log(
          "Error is Getting from anyschemepreviousprojectdetails details",
          error
        );
      }
    },
    async getAwareWaterShedStatus() {
      const id = this.selectedItem.id;
      try {
        const response = await axios.get(
          `http://localhost:5000/api/awarewatershedstatusdetails`,
          {
            params: { id: id },
          }
        );
        this.awarewatershedstatus = response.data;
        console.log("awarewatershedstatusdetails data", response.data);
        console.log(
          " awarewatershedstatusdetails from search page",
          this.awarewatershedstatus
        );
      } catch (error) {
        console.log(
          "Error is Getting from awarewatershedstatusdetails details",
          error
        );
      }
    },
    async getReceivedTrainingWaterShedStatus() {
      const id = this.selectedItem.id;
      try {
        const response = await axios.get(
          `http://localhost:5000/api/receivedtrainingwatershedstatusdetails`,
          {
            params: { id: id },
          }
        );
        this.receivedtrainingwatershedstatus = response.data;
        console.log(
          "receivedtrainingwatershedstatusdetails data",
          response.data
        );
        console.log(
          " receivedtrainingwatershedstatusdetails from search page",
          this.awarewatershedstatus
        );
      } catch (error) {
        console.log(
          "Error is Getting from receivedtrainingwatershedstatusdetails details",
          error
        );
      }
    },
    async getDateServeyorName() {
      const id = this.selectedItem.id;
      try {
        const response = await axios.get(
          `http://localhost:5000/api/dateserveyornamedetails`,
          {
            params: { id: id },
          }
        );
        this.dateserveyorname = response.data;
        console.log("dateserveyornamedetails data", response.data);
        console.log(
          " dateserveyornamedetails from search page",
          this.dateserveyorname
        );
      } catch (error) {
        console.log(
          "Error is Getting from dateserveyornamedetails details",
          error
        );
      }
    },
    searchInfo() {
      // Additional logic for info search can go here
    },
    clearSearch() {
      this.query = ""; // Clear the search bar
      this.items = []; // Clear the item list
      this.selectedItem = null; // Clear the selected item
    },

    selectProject(item) {
      // this.selectedProject = { ...item };
      // console.log("selected project is ", this.selectedProject);
      // this.projects = [];

      this.selectedProject = { ...item };
      console.log("asdfjlkasjdfkdsajklf", this.selectedProject.id);
      this.fetchItemsForProject(this.selectedProject.id);
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
      this.getFamilyExpenditureDetails();
      this.getDifferentSourceDetails();
      this.getAvailableDrinkingWaterDetails();
      this.getSourceQualityWaterDetails();
      this.getAgriImplements();
      this.getHorticulture();
      this.getFodderAndFeed();
      this.getFodderAndFuel();
      this.getGrazeCattleAnimal();
      this.getHouseHoldAssets();
      this.getParticipationCommunity();
      this.getAwarenessAdoption();
      this.getMembership();
      this.getAnyScheme();
      this.getAwareWaterShedStatus();
      this.getReceivedTrainingWaterShedStatus();
      this.getDateServeyorName();
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
  width: 15vh;
}
</style>
