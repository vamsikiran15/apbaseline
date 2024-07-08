<template>
  <ion-card>
    <ion-card-header class="ion-text-center" color="tertiary"
      ><strong
        >13.Availability of Drinking Water(Drinking Water requirement @ 5Litres
        per Day/Person)</strong
      ></ion-card-header
    >
  </ion-card>
  <ion-card>
    <ion-card-header color="tertiary"
      ><strong>Present Availability of Drinking Water</strong></ion-card-header
    >
  </ion-card>
  <ion-card>
    <ion-card-content>
      <ion-select
        class="ion-margin-top"
        aria-label="Source of Drinking Water"
        interface="popover"
        label="Drinking Water Item"
        label-placement="floating"
        placeholder="Select Drinking Water Item"
        fill="outline"
        v-model="drinkingWaterAvailabilityRows.drinkingwateritem"
      >
        <ion-select-option value="presentavailability"
          >Present Availability of Drinking Water</ion-select-option
        >
      </ion-select>
      <ion-select
        class="ion-margin-top"
        aria-label="Source of Drinking Water"
        interface="popover"
        label="Drinking Water Units"
        label-placement="floating"
        placeholder="Select Drinking Water Units"
        fill="outline"
        v-model="drinkingWaterAvailabilityRows.drinkingwaterunits"
      >
        <ion-select-option value="litres">Litres/Day</ion-select-option>
        <ion-select-option value="months"
          >No of Months in a Year</ion-select-option
        >
      </ion-select>
      <ion-input
        class="ion-margin-top"
        placeholder="Enter Quantity"
        fill="outline"
        label="Quantity"
        label-placement="floating"
        v-model="drinkingWaterAvailabilityRows.litresPerDay"
      ></ion-input>
      <ion-select
        class="ion-margin-top"
        aria-label="Source of Drinking Water"
        interface="popover"
        label="Source of Drinking Water"
        label-placement="floating"
        placeholder="Select source of drinking water"
        fill="outline"
        v-model="drinkingWaterAvailabilityRows.sourceDrinkingWater"
      >
        <ion-select-option value="borewell">Borewell</ion-select-option>
        <ion-select-option value="tank">Tank</ion-select-option>
        <ion-select-option value="publictank">Public Tap</ion-select-option>
        <ion-select-option value="openwell">Open Well</ion-select-option>
        <ion-select-option value="canalwater">Canal Water</ion-select-option>
      </ion-select>
    </ion-card-content>
  </ion-card>
  <ion-button
    class="ion-margin"
    expand="block"
    color="primary"
    @click="addDrinkingWaterAvailabilityRows()"
    ><ion-icon
      class="ion-margin-end"
      name="add-circle"
      slot="icon-only"
    ></ion-icon
    >Add Availability of Drinking Water Details</ion-button
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
      drinkingwateritem: "",
      drinkingwaterunits: "",
      litresPerDay: "",
      sourceDrinkingWater: "",
      drinkingWaterAvailabilityRows: {
        drinkingwateritem: "",
        drinkingwaterunits: "",
        litresPerDay: "",
        sourceDrinkingWater: "",
      },
      drinkingWaterAvailabilityRowsData: [],
    };
  },
  methods: {
    async availabilityofDrinkingWaterData(id) {
      try {
        const data = { id: id, rows: this.drinkingWaterAvailabilityRowsData };
        await axios.post(
          "http://183.82.109.39:5000/api/bulkinsertiondrinkingwater",
          data
        );
      } catch (error) {
        console.error(
          "error in availabilityofDrinkingWaterData function",
          error
        );
      }
    },
    addDrinkingWaterAvailabilityRows() {
      this.drinkingWaterAvailabilityRowsData.push({
        ...this.drinkingWaterAvailabilityRows,
      });
      console.log(
        "^^^^^^^^^^^^^DATA&&&&&&&&&&&&&&&",
        this.drinkingWaterAvailabilityRowsData
      );
      this.clearDrinkingWaterRows();
    },
    clearDrinkingWaterRows() {
      this.drinkingWaterAvailabilityRows = {
        drinkingwateritem: "",
        drinkingwaterunits: "",
        litresPerDay: "",
        sourceDrinkingWater: "",
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
