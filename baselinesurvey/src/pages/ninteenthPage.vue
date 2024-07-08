<template>
  <ion-card>
    <ion-card-header color="tertiary" class="ion-text-center"
      ><strong
        >19.Do you Graze your Cattle in the Community Land? Yes/No</strong
      ></ion-card-header
    >
  </ion-card>
  <ion-card>
    <ion-card-content>
      <ion-select
        class="ion-margin-top"
        interface="popover"
        label="Grazing of Cattle/Animals"
        label-placement="floating"
        placeholder="Select Grazing of Cattle/Animals"
        fill="outline"
        v-model="grazeCattleRows.grazingOfCattle"
      >
        <ion-select-option value="In Community Land"
          >In Community Land</ion-select-option
        >
        <ion-select-option value="Fed in the House"
          >Fed in the House</ion-select-option
        >
        <ion-select-option value="In Own Lands">In Own Lands</ion-select-option>
      </ion-select>
      <ion-input
        class="ion-margin-top"
        placeholder="Enter number of cattle/animals"
        fill="outline"
        label="Number of Cattle/Animals"
        label-placement="floating"
        v-model="grazeCattleRows.numberOfCattle"
      ></ion-input>
      <ion-input
        class="ion-margin-top"
        placeholder="Enter days"
        fill="outline"
        label="How many days in a Year"
        label-placement="floating"
        v-model="grazeCattleRows.daysInAYear"
      ></ion-input>
    </ion-card-content>
  </ion-card>
  <ion-button
    class="ion-margin"
    color="primary"
    expand="block"
    @click="addGrazeCattleRows()"
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
      grazingOfCattle: "",
      numberOfCattle: "",
      daysInAYear: "",
      grazeCattleRows: {
        grazingOfCattle: "",
        numberOfCattle: "",
        daysInAYear: "",
      },
      grazeCattleRowsData: [],
    };
  },
  methods: {
    async grazeCattleData(id) {
      try {
        const data = { id: id, rows: this.grazeCattleRowsData };
        await axios.post(
          "http://183.82.109.39:5000/api/bulkinsertiongrazecattle",
          data
        );
      } catch (error) {
        console.error("error in grazecattledata function", error);
      }
    },
    addGrazeCattleRows() {
      this.grazeCattleRowsData.push({ ...this.grazeCattleRows });
      console.log("%%%%%%%%%DATA%%%%%%%%%%%%%%", this.grazeCattleRowsData);
      this.clearGrazeCattleRows();
    },
    clearGrazeCattleRows() {
      this.grazeCattleRows = {
        grazingOfCattle: "",
        numberOfCattle: "",
        daysInAYear: "",
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
