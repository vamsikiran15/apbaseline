<template>
  <ion-card>
    <ion-card-header color="tertiary"
      ><strong>23.Membership Details</strong></ion-card-header
    >
  </ion-card>
  <ion-card>
    <ion-card-header color="tertiary"
      ><strong>Self Help Groups(SHG's)</strong></ion-card-header
    >
  </ion-card>
  <ion-card>
    <ion-card-content>
      <ion-select
        class="ion-margin-top"
        interface="popover"
        label="Membership"
        label-placement="floating"
        placeholder="Select Membership"
        fill="outline"
        v-model="membershipDetailsRows.sgh"
      >
        <ion-select-option value="User Groups">User Groups</ion-select-option>
        <ion-select-option value="Watershed Committee"
          >Watershed Committee</ion-select-option
        >
        <ion-select-option value="Others">Others</ion-select-option>
      </ion-select>
      <ion-input
        class="ion-margin-top"
        placeholder="Enter number of SGH"
        fill="outline"
        label="Number"
        label-placement="floating"
        v-model="membershipDetailsRows.number"
      ></ion-input>
    </ion-card-content>
  </ion-card>
  <ion-button
    class="ion-margin"
    expand="block"
    color="primary"
    @click="addMembershipDetailsRows()"
    ><ion-icon
      class="ion-margin-end"
      name="add-circle"
      slot="icon-only"
    ></ion-icon
    >Add Membership Details</ion-button
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
      shg: "",
      number: "",
      membershipDetailsRows: {
        shg: "",
        number: "",
      },
      membershipDetailsRowsData: [],
    };
  },
  methods: {
    async membershipDetailsData(id) {
      try {
        const data = { id: id, rows: this.membershipDetailsRowsData };
        const response = await axios.post(
          "http://183.82.109.39:5000/api/bulkinsertionmembership",
          data
        );
        console.log("%%%%%%%%%%%DATA%%%%%%%%%%%%%", response);
      } catch (error) {
        console.error("error in membershipDetailsData function", error);
      }
    },
    addMembershipDetailsRows() {
      this.membershipDetailsRowsData.push({ ...this.membershipDetailsRows });
      console.log(
        "&&&&&&&&&&&&&DATA&&&&&&&&&&&&&&",
        this.membershipDetailsRowsData
      );
      this.clearMembershipDetailsRows();
    },
    clearMembershipDetailsRows() {
      this.membershipDetailsRows = {
        shg: "",
        number: "",
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
