<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="tertiary">
        <ion-title class="header" style="font-size: 1.5vh"
          ><strong>HOUSEHOLD SOCIO-ECONOMIC SURVEY</strong></ion-title
        >
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-searchbar
        v-model="query"
        @ionInput="searchInfo"
        debounce="500"
        placeholder="Custom Placeholder"
      ></ion-searchbar>
      <ion-list>
        <ion-item v-for="item in items" :key="item.id">
          <ion-label>
            <h2>{{ item.name }}</h2>
            <p>{{ item.description }}</p>
          </ion-label>
        </ion-item>
      </ion-list>
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
} from "@ionic/vue";
import axios from "axios";

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
  },
  data() {
    return {
      query: "",
      items: [],
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
  },
};
</script>
