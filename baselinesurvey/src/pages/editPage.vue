<template>
  <ion-content>
    <ion-card v-if="editedItem">
      <ion-card-header>
        <ion-card-title>Edit Item</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <ion-item>
          <ion-label position="floating">Name</ion-label>
          <ion-input v-model="editedItem.name"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Description</ion-label>
          <ion-textarea v-model="editedItem.description"></ion-textarea>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Aadhaar Number</ion-label>
          <ion-textarea v-model="editedItem.aadharNumber"></ion-textarea>
        </ion-item>
        <ion-button expand="full" @click="updateItem">Save</ion-button>
      </ion-card-content>
    </ion-card>
  </ion-content>
</template>

<script>
import axios from "axios";
import {
  IonContent,
  IonItem,
  IonLabel,
  IonCardContent,
  IonInput,
  IonTextarea,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/vue";
export default {
  props: {
    item: Object,
  },
  data() {
    return {
      editedItem: null,
    };
  },
  components: {
    IonContent,
    IonItem,
    IonLabel,
    IonCardContent,
    IonInput,
    IonTextarea,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
  },
  watch: {
    item: {
      immediate: true,
      handler(newVal) {
        // Ensure to make a deep copy of the received item
        this.editedItem = newVal ? { ...newVal } : null;
      },
    },
  },
  methods: {
    async updateItem() {
      try {
        const response = await axios.put(
          `http://183.82.109.39:5000/items/${this.editedItem.id}`,
          this.editedItem
        );
        console.log("Item updated:", response.data);
        this.$emit("item-updated", response.data); // Emit event with updated item
      } catch (error) {
        console.error("Error updating item:", error);
      }
    },
  },
};
</script>

<style>
/* Add your styles here */
</style>
