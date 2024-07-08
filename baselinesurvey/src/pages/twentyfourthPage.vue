<template>
  <ion-card>
    <ion-card-header class="ion-text-center" color="tertiary"
      ><strong
        >24.have been the Beneficiary of any scheme of project Previously?Yes/No
        , if Yes</strong
      ></ion-card-header
    >
  </ion-card>
  <ion-card>
    <ion-card-content>
      <ion-input
        class="ion-margin-top"
        placeholder="Enter Name of the Scheme/Project"
        fill="outline"
        label="Name of the Scheme/Project"
        label-placement="floating"
        v-model="beneficiarySchemeRows.nameofTheScheme"
      ></ion-input>
      <ion-input
        class="ion-margin-top"
        placeholder="Enter Details of the Benefits Obtained"
        fill="outline"
        label="Details of the Benefits Obtained"
        label-placement="floating"
        v-model="beneficiarySchemeRows.detailsoftheBenfits"
      ></ion-input>
      <ion-input
        class="ion-margin-top"
        placeholder="Enter Value of the Benefit(Rs)"
        fill="outline"
        label="Value of the Benefit(Rs)"
        label-placement="floating"
        v-model="beneficiarySchemeRows.valueoftheBenfits"
      ></ion-input>
    </ion-card-content>
  </ion-card>
  <ion-button
    class="ion-margin"
    color="primary"
    expand="block"
    @click="addBeneficiarySchemeRows()"
    ><ion-icon
      class="ion-margin-end"
      name="add-circle"
      slot="icon-only"
    ></ion-icon
    >Add Beneficiary Scheme Data</ion-button
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
      nameofTheScheme: "",
      detailsoftheBenfits: "",
      valueoftheBenfits: "",
      beneficiarySchemeRows: {
        nameofTheScheme: "",
        detailsoftheBenfits: "",
        valueoftheBenfits: "",
      },
      beneficiarySchemeRowsData: [],
    };
  },

  methods: {
    async beneficiarySchemeData(id) {
      console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
      try {
        const data = { id: id, rows: this.beneficiarySchemeRowsData };
        await axios.post(
          "http://183.82.109.39:5000/api/bulkinsertionpreviousproject",
          data
        );
      } catch (error) {
        console.error("error in beneficiarySchemeData function", error);
      }
    },
    addBeneficiarySchemeRows() {
      this.beneficiarySchemeRowsData.push({ ...this.beneficiarySchemeRows });
      console.log(
        "$$$$$$$$$$$$$$$$$DATA$$$$$$$$$$$$$$$$",
        this.beneficiarySchemeRowsData
      );
      this.clearBeneficiarySchemeRows();
    },
    clearBeneficiarySchemeRows() {
      this.beneficiarySchemeRows = {
        nameofTheScheme: "",
        detailsoftheBenfits: "",
        valueoftheBenfits: "",
      };
    },
  },
};
</script>
<style>
.iconSize {
  height: 2.5rem;
  width: 2.5rem;
}
ion-card {
  border-radius: 8px;
  box-shadow: 1px 1px 6px rgb(96, 96, 161);
}
</style>
