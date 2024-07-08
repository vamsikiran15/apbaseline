<template>
  <ion-card>
    <ion-card-header color="tertiary"
      ><strong>16.Horticulture Details</strong></ion-card-header
    >
  </ion-card>
  <ion-card>
    <ion-card-content>
      <ion-select
        class="ion-margin-top"
        interface="popover"
        label="Details"
        label-placement="floating"
        placeholder="Select Details"
        fill="outline"
        v-model="horticultureDetailsRows.details"
      >
        <ion-select-option value="HorticulturePlantsTrees"
          >Horticulture Plants/Trees</ion-select-option
        >
        <ion-select-option value="mango">Mango</ion-select-option>
        <ion-select-option value="Coconut">Coconut</ion-select-option>
        <ion-select-option value="guava">Guava</ion-select-option>
        <ion-select-option value="sapota">Sapota</ion-select-option>
        <ion-select-option value="custardapple"
          >Custard Apple</ion-select-option
        >
        <ion-select-option value="lemon">Lemon</ion-select-option>
        <ion-select-option value="sweetlime">Sweet Lime</ion-select-option>
        <ion-select-option value="foresttrees">Forest Trees</ion-select-option>
        <ion-select-option value="cashew">Cashew</ion-select-option>
        <ion-select-option value="teak">Teak</ion-select-option>
        <ion-select-option value="neem">Neem</ion-select-option>
        <ion-select-option value="nilgiri">Nilgiri</ion-select-option>
        <ion-select-option value="acacia">Acacia</ion-select-option>
        <ion-select-option value="pongamia">Pongamia</ion-select-option>
        <ion-select-option value="tamarind">Tamarind</ion-select-option>
      </ion-select>
      <ion-input
        class="ion-margin-top"
        placeholder="Enter number of details"
        fill="outline"
        label="Number of Details"
        label-placement="floating"
        v-model="horticultureDetailsRows.numberofDetails"
      ></ion-input>
    </ion-card-content>
  </ion-card>
  <ion-button
    class="ion-margin"
    color="primary"
    expand="block"
    @click="addHorticultureRows()"
    ><ion-icon
      class="ion-margin-end"
      name="add-circle"
      slot="icon-only"
    ></ion-icon
    >Add Horticulture Details</ion-button
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
      details: "",
      numberofDetails: "",
      horticultureDetailsRows: {
        details: "",
        numberofDetails: "",
      },
      horticultureDetailsRowsData: [],
    };
  },
  methods: {
    async horticultureDetailsData(id) {
      try {
        const data = { id: id, rows: this.horticultureDetailsRowsData };
        await axios.post(
          "http://183.82.109.39:5000/api/bulkinsertionhorticulture",
          data
        );
      } catch (error) {
        console.error("error in horticultureDetailsData function", error);
      }
    },
    addHorticultureRows() {
      this.horticultureDetailsRowsData.push({
        ...this.horticultureDetailsRows,
      });
      console.log(
        "%%%%%%%%%%%DATA%%%%%%%%%%",
        this.horticultureDetailsRowsData
      );
      this.clearHorticultureDetailsRowsData();
    },
    clearHorticultureDetailsRowsData() {
      this.horticultureDetailsRows = {
        details: "",
        numberofDetails: "",
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
