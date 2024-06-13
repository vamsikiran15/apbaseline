<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title style="font-size: 1.5vh">
          <ion-img :src="RsiLogo" class="imgsize"></ion-img
        ></ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
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
          {{ item.name }}
        </ion-item>
      </ion-list>
      <!-- <edit-item
        v-if="selectedItem"
        :item="selectedItem"
        @item-updated="onItemUpdated"
      ></edit-item> -->
      <survey-page
        v-if="selectedItem"
        :item="selectedItem"
        @item-updated="onItemUpdated"
      ></survey-page>
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
} from "@ionic/vue";
import axios from "axios";
import EditItem from "@/pages/editPage.vue";
import SurveyPage from "@/pages/surveyPage.vue";
import Logo from "../assets/img/Rsilogo.png";
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
    SurveyPage,
    IonImg,
  },
  data() {
    return {
      query: "",
      items: [],
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
          `http://192.168.1.111:5000/items/search`,
          {
            params: { query: this.query },
          }
        );
        this.items = response.data;
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
  height: 5vh;
  width: 25vh;
}
</style>
