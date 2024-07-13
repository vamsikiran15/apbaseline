<template>
  <div>
    <ion-card>
      <ion-card-header color="tertiary"
        ><strong>11.Family Expenditure</strong></ion-card-header
      >
    </ion-card>
    <ion-card>
      <ion-card-content>
        <ion-list>
          <ion-item
            v-for="item in familyexpenditure"
            :key="item.id"
            @click="selectFamilyExp(item)"
          >
            {{ item.items }}
            {{ item.expenditure_per_last_year }}
          </ion-item>
        </ion-list>
        <ion-select
          class="ion-margin-top"
          interface="popover"
          label="Items"
          label-placement="floating"
          placeholder="Items"
          fill="outline"
          v-model="newRowFamilyExp.items"
        >
          <ion-select-option value="">Select Items</ion-select-option>
          <ion-select-option value="Food">Food</ion-select-option>
          <ion-select-option value="Education">Education</ion-select-option>
          <ion-select-option value="Medical/Health"
            >Medical/Health</ion-select-option
          >
          <ion-select-option value="Maintenance of Vehicles"
            >Maintenance of Vehicles</ion-select-option
          >

          <ion-select-option value="Maintenance of Household Equipments"
            >Maintenance of Household Equipments</ion-select-option
          >
          <ion-select-option value="Mobile">Mobile</ion-select-option>
          <ion-select-option value="Cloths">Cloths</ion-select-option>
          <ion-select-option value="Electricity Bill"
            >Electricity Bill</ion-select-option
          >
          <ion-select-option value="Water Bill">Water Bill</ion-select-option>
          <ion-select-option value="Social/Religious Functions"
            >Social/Religious Functions</ion-select-option
          >
          <ion-select-option value="Others">Others</ion-select-option>
          <ion-select-option value="Total">Total</ion-select-option>
        </ion-select>
        <ion-input
          class="ion-margin-top"
          placeholder="Expenditure Per Last Year"
          fill="outline"
          type="number"
          label="Expenditure Per Last Year"
          label-placement="floating"
          v-model="newRowFamilyExp.expenditure_per_last_year"
        ></ion-input>
      </ion-card-content>
      <ion-button
        class="ion-margin"
        expand="block"
        color="primary"
        @click="UpdateFamilyExpData()"
        ><ion-icon
          class="ion-margin-end"
          name="add-circle"
          slot="icon-only"
        ></ion-icon
        >Update Family Expenditure Details</ion-button
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
  toastController,
  IonItem,
  IonIcon,
} from "@ionic/vue";
import axios from "axios";
export default {
  props: {
    editedItem: Object,
    familyexpenditure: Object,
  },
  data() {
    return {
      newRowFamilyExp: {
        items: "",
        headId: "",
        id: "",
        expenditure_per_last_year: "",
      },
      familyExpRows: [],
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
    toastController,
    IonItem,
    IonIcon,
  },
  methods: {
    selectFamilyExp(item) {
      this.newRowFamilyExp.id = item.id;
      this.newRowFamilyExp.headId = item.headId;
      this.newRowFamilyExp.items = item.items;
      this.newRowFamilyExp.expenditure_per_last_year =
        item.expenditure_per_last_year;
    },
    updateFamilyExprows() {
      // Check if any field is not empty
      if (
        Object.values(this.newRowFamilyExp).some((field) => {
          if (typeof field === "string") {
            return field.trim() !== "";
          } else if (Array.isArray(field)) {
            return field.length > 0;
          } else {
            return field !== null && field !== undefined;
          }
        })
      ) {
        this.familyExpRows.push({ ...this.newRowFamilyExp }); // Add a copy of newRow to rows
        this.clearFamilyExpFields(); // Clear the input fields
      }
    },
    clearFamilyExpFields() {
      this.newRowFamilyExp = {
        items: "",
        headId: "",
        id: "",
        expenditure_per_last_year: "",
      };
    },
    removeFamilyExp(index) {
      this.familyExpRows.splice(index, 1);
    },
    // migrate data updation
    async UpdateFamilyExpData() {
      try {
        this.updateFamilyExprows();
        const newData = this.familyExpRows.map((row) => ({
          ...row,
          headId: this.editedItem.id,
        }));

        for (const row of newData) {
          if (row.id) {
            // Update existing row
            console.log("updateFamilyExp ", row);
            await this.updateFamilyExp(row);
            this.familyExpRows = [];
          } else {
            // Insert new row
            // this.GovtBenefitRows.push(row);
            console.log("insertFamilyExp  data", row);
            await this.insertFamilyExp(row);
            this.familyExpRows = [];
          }
        }
      } catch (error) {
        console.error("error in UpdateFamilyExpData function".error);
      }
    },
    async insertFamilyExp(row) {
      try {
        console.log("&&&&&&&&&&&&&&&&&&&&&&", row);
        const response = await axios.post(
          "http://183.82.109.39:5000/api/insertfamilyexpenditure",
          {
            id: row.id,
            headId: row.headId,
            items: row.items,
            expenditure_per_last_year: row.expenditure_per_last_year,
          }
        );
        this.familyexpenditure.push(response.data.data);
        if (response.statusText === "Created") {
          // If response status is 200 (OK), trigger success toast
          this.triggerToastMessage(
            "Inserted Family Expenditure Details Successfully",
            "custom_toast"
          );
        }
        console.log("familyexpenditure inserted:", response);
      } catch (error) {
        this.triggerToastMessage(
          "Failed to Insert Family Expenditure Details",
          "danger"
        );
        console.error("Error inserting familyexpenditure row:", error);
      }
    },
    async updateFamilyExp(row) {
      try {
        const response = await axios.put(
          `http://183.82.109.39:5000/api/updatefamilyexpenditure/${row.id}`,
          row
        );
        if (response.statusText === "OK") {
          // If response status is 200 (OK), trigger success toast
          this.triggerToastMessage(
            "Updated Family Expenditure Details Successfully",
            "custom_toast"
          );
        }
        console.log("familyexpenditure Row updated:", response);
      } catch (error) {
        this.triggerToastMessage(
          "Failed to Update Family Expenditure Details",
          "danger"
        );
        console.error("Error updating familyexpenditure row:", error);
      }
    },
    async triggerToastMessage(message, color) {
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
