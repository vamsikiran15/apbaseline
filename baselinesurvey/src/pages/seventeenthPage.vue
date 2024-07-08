<template>
  <ion-card>
    <ion-card-header color="tertiary"
      ><strong>17.Fodder and Feed Availability</strong></ion-card-header
    >
  </ion-card>
  <ion-card>
    <ion-card-content>
      <ion-select
        class="ion-margin-top"
        interface="popover"
        label="Item"
        label-placement="floating"
        placeholder="Select Item"
        fill="outline"
        v-model="fodderandFeedAvailability.item"
      >
        <ion-select-option value="ExistingAreaUnderFodder"
          >Existing Area Under Fodder</ion-select-option
        >
        <ion-select-option value="GreenFodder">Green Fodder</ion-select-option>
        <ion-select-option value="DryFodder">Dry Fodder</ion-select-option>
        <ion-select-option value="Concentrates">Concentrates</ion-select-option>
      </ion-select>
      <ion-select
        class="ion-margin-top"
        interface="popover"
        label="Unit"
        label-placement="floating"
        placeholder="Select Unit"
        fill="outline"
        v-model="fodderandFeedAvailability.unit"
      >
        <ion-select-option value="ha">Ha</ion-select-option>
        <ion-select-option value="tons">Tons/Year</ion-select-option>
        <ion-select-option value="kg">Kg/day</ion-select-option>
      </ion-select>
      <ion-input
        class="ion-margin-top"
        placeholder="Enter Area/Quantity"
        fill="outline"
        label="Area/Quantity"
        label-placement="floating"
        v-model="fodderandFeedAvailability.area"
      ></ion-input>
      <ion-input
        class="ion-margin-top"
        placeholder="Enter value of Production Tons/year"
        fill="outline"
        label="Production(Tonnes/Year)"
        label-placement="floating"
        v-model="fodderandFeedAvailability.production"
      ></ion-input>
    </ion-card-content>
  </ion-card>
  <ion-button
    class="ion-margin"
    expand="block"
    color="primary"
    @click="addFodderandFeedAvailabilityRows()"
    ><ion-icon
      class="ion-margin-end"
      name="add-circle"
      slot="icon-only"
    ></ion-icon
    >Add Government Scheme Details</ion-button
  >
</template>
<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonLabel,
  IonRadioGroup,
  IonRadio,
  IonList,
} from "@ionic/vue";
import axios from "axios";
export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonRow,
    IonCol,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonInput,
    IonSelect,
    IonSelectOption,
    IonLabel,
    IonRadioGroup,
    IonRadio,
    IonList,
  },

  data() {
    return {
      item: "",
      unit: "",
      area: "",
      production: "",
      fodderandFeedAvailability: {
        item: "",
        unit: "",
        area: "",
        production: "",
      },
      fodderandFeedAvailabilityRowsData: [],
    };
  },

  methods: {
    async fodderFeedAvailabilityData(id) {
      try {
        const data = { id: id, rows: this.fodderandFeedAvailabilityRowsData };
        await axios.post(
          "http://183.82.109.39:5000/api/bulkinsertionfodder",
          data
        );
      } catch (error) {
        console.error("error in fodderFeedAvailabilityData function", error);
      }
    },
    addFodderandFeedAvailabilityRows() {
      this.fodderandFeedAvailabilityRowsData.push({
        ...this.fodderandFeedAvailability,
      });
      console.log(
        "%%%%%%%%%%%%%DATA%%%%%%%%%%%%%",
        this.fodderandFeedAvailabilityRowsData
      );
      this.clearFodderFeedRows();
    },
    clearFodderFeedRows() {
      this.fodderandFeedAvailability = {
        item: "",
        unit: "",
        area: "",
        production: "",
      };
    },
  },
};
</script>
<style>
ion-card {
  border-radius: 8px;
  box-shadow: 1px 1px 6px rgb(96, 96, 161);
}
</style>
