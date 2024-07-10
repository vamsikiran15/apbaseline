<template>
  <div>
    <ion-card>
      <ion-card-header color="tertiary"
        ><strong>7.Benefits from Government Schemes</strong></ion-card-header
      >
    </ion-card>
    <ion-card>
      <ion-card-content>
        <ion-list>
          <ion-item
            v-for="item in govtbenefit"
            :key="item.id"
            @click="selectGovtBenefit(item)"
          >
            {{ item.name_of_familymember }}
            {{ item.scheme_name }}
          </ion-item>
        </ion-list>
        <ion-input
          class="ion-margin-top"
          placeholder="Enter name of the family member"
          fill="outline"
          label="Name of the Family Member"
          label-placement="floating"
          @input="stringValidation"
          v-model="newRowGovtBenefit.name_of_familymember"
        ></ion-input>
        <ion-select
          class="ion-margin-top"
          interface="popover"
          label="Scheme Name"
          label-placement="floating"
          placeholder="Enter scheme name"
          fill="outline"
          v-model="newRowGovtBenefit.scheme_name"
        >
        <ion-select-option value="">Select Scheme Name</ion-select-option>
          <ion-select-option value="Amma Vodi">Amma Vodi</ion-select-option>
          <ion-select-option value="YSR Asara">YSR Asara</ion-select-option>
          <ion-select-option value="Ban on alcohol"
            >Ban on alcohol</ion-select-option
          >
          <ion-select-option value="Jagananna Ammavodi"
            >Jagananna Ammavodi</ion-select-option
          >
          <ion-select-option value="YSR Pension Kanuka"
            >YSR Pension Kanuka</ion-select-option
          >
          <ion-select-option value="Fee Reimbursement Scheme"
            >Fee Reimbursement Scheme</ion-select-option
          >
          <ion-select-option value="Paydalandariki Illu"
            >Paydalandariki Illu</ion-select-option
          >
          <ion-select-option value="Pensionla Pempu"
            >Pensionla Pempu</ion-select-option
          >
          <ion-select-option value="BullockCar">YSR Bima</ion-select-option>
          <ion-select-option value="others">YSR Cheyutha</ion-select-option>

          <ion-select-option value="YSR Kanti velugu"
            >"YSR Kanti velugu"</ion-select-option
          >
          <ion-select-option value="YSR Rythu Bharosa"
            >YSR Rythu Bharosa</ion-select-option
          >
          <ion-select-option value="Others">Others</ion-select-option>
        </ion-select>
        <ion-input
          class="ion-margin-top"
          placeholder="Enter Amount"
          fill="outline"
          label="Amount"
          label-placement="floating"
          v-model="newRowGovtBenefit.amount"
        ></ion-input>
      </ion-card-content>
      <ion-button
          class="ion-margin"
          expand="block"
          color="primary"
          @click="UpdateGovtBenefitData()"
          ><ion-icon
            class="ion-margin-end"
            name="add-circle"
            slot="icon-only"
          ></ion-icon
          >Update Government Scheme Details</ion-button
        >
    </ion-card>
  </div>
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
  IonButton,
  IonItem,
  toastController,
} from "@ionic/vue";
import axios from "axios";
export default {
  props: {
    govtbenefit: Object,
    editedItem: Object,
  },
  data() {
    return {
      newRowGovtBenefit: {
        name_of_familymember: "",
        headId: "",
        id: "",
        scheme_name: "",
        amount: "",
      },
      GovtBenefitRows: [],
    };
  },
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
    IonButton,
    IonItem,
    toastController
  },
  methods: {
    selectGovtBenefit(item) {
      console.log("govtasdkfjasdkf");
      this.newRowGovtBenefit.id = item.id;
      this.newRowGovtBenefit.headId = item.headId;
      this.newRowGovtBenefit.name_of_familymember = item.name_of_familymember;
      this.newRowGovtBenefit.scheme_name = item.scheme_name;
      this.newRowGovtBenefit.amount = item.amount;
    },
    updateGovtBenenfitrows() {
      // Check if any field is not empty
      if (
        Object.values(this.newRowGovtBenefit).some((field) => {
          if (typeof field === "string") {
            return field.trim() !== "";
          } else if (Array.isArray(field)) {
            return field.length > 0;
          } else {
            return field !== null && field !== undefined;
          }
        })
      ) {
        this.GovtBenefitRows.push({ ...this.newRowGovtBenefit }); // Add a copy of newRow to rows
        this.clearGovtBenefitFields(); // Clear the input fields
      }
    },
    clearGovtBenefitFields() {
      this.newRowGovtBenefit = {
        headId: "",
        id: "",
        name_of_familymember: "",
        scheme_name: "",
        amount: "",
      };
    },
    removeGovtBenift(index) {
      this.GovtBenefitRows.splice(index, 1);
    },
    // migrate data updation
    async UpdateGovtBenefitData() {
      try {
        this.triggerToastMessage("Updated Government Benefits Details Successfully","custom_toast")
        this.updateGovtBenenfitrows();
      const newData = this.GovtBenefitRows.map((row) => ({
        ...row,
        headId: this.editedItem.id,
      }));

      for (const row of newData) {
        if (row.id) {
          // Update existing row
          console.log("govt banefit ", row);
          await this.updateGovtBenefit(row);
          this.GovtBenefitRows = [];
        } else {
          // Insert new row
          // this.GovtBenefitRows.push(row);
          console.log("govt banefit updated data", row);
          await this.insertGovtBenefit(row);
          this.GovtBenefitRows = [];
        }
      }
      } catch (error) {
        this.triggerToastMessage("Failed to Update Government Benefits Details","danger")
        console.error("error in UpdateGovtBenefitData function",error)
      }
     
    },
    stringValidation() {
      let value = event.target.value;
      // Remove non-alphabetic characters
      value = value.replace(/[^a-zA-Z\s]/g, "");
      this.newRowGovtBenefit.name_of_familymember = value;
    },
    async insertGovtBenefit(row) {
      try {
        console.log("&&&&&&&&&&&&&&&&&&&&&&", row);
        const response = await axios.post(
          "http://183.82.109.39:5000/api/insertgovtbenefit",

          {
            id: row.id,
            headId: row.headId,
            name_of_familymember: row.name_of_familymember,
            scheme_name: row.scheme_name,
            amount: row.amount,
          }
        );
        console.log("govt banefits inserted:", response);
      } catch (error) {
        console.error("Error inserting govt banefit row:", error);
      }
    },
    async updateGovtBenefit(row) {
      try {
        const response = await axios.put(
          `http://183.82.109.39:5000/api/updategovtbenefit/${row.id}`,
          row
        );
        console.log("govt banefit Row updated:", response);
      } catch (error) {
        console.error("Error updating govt banefit row:", error);
      }
    },
    async triggerToastMessage(message,color) {
      const toast = await toastController.create({
        message: message,
        duration: 3000,
        position: "top",
        cssClass: color, // Add your custom CSS class here
      });
      toast.present();
    },
  },
};
</script>
<style>
ion-card {
  border-radius: 8px;
  box-shadow: 1px 1px 6px rgb(96, 96, 161);
}
.custom_toast {
    --background: #df3389; /* Set your desired background color */
    --color: white; /* Set your desired text color */
  }
</style>
