<template>
  <div>
    <ion-card>
      <ion-card-header color="tertiary"
        ><strong>20.Household Assets</strong></ion-card-header
      >
    </ion-card>
    <ion-card>
      <ion-card-content>
        <ion-list>
          <ion-item
            v-for="item in householdassetdetails"
            :key="item.id"
            @click="selectHouseholdAssets(item)"
          >
            {{ item.assets }}
            {{ item.number }}
          </ion-item>
        </ion-list>
        <ion-select
          class="ion-margin-top"
          interface="popover"
          label="Assets"
          label-placement="floating"
          placeholder="Select Assets"
          fill="outline"
          v-model="newHouseholdAssets.assets"
        >
          <ion-select-option value="">Select Assets</ion-select-option>
          <ion-select-option value="MotorCycle">Motor Cycle</ion-select-option>
          <ion-select-option value="Cycle">Cycle</ion-select-option>
          <ion-select-option value="FourWheeler"
            >Four Wheeler</ion-select-option
          >
          <ion-select-option value="BiogasLpgCookingGas"
            >Bio gas/Lpg Cooking Gas</ion-select-option
          >
          <ion-select-option value="TablesChairs"
            >Tables/Chairs</ion-select-option
          >
          <ion-select-option value="Television">Television</ion-select-option>
          <ion-select-option value="WashingMachine"
            >Washing Machine</ion-select-option
          >
          <ion-select-option value="Mobile">Mobile</ion-select-option>
          <ion-select-option value="Others">Others</ion-select-option>
        </ion-select>
        <ion-input
          class="ion-margin-top"
          placeholder="Enter units"
          fill="outline"
          label="Number"
          type="number"
          label-placement="floating"
          v-model="newHouseholdAssets.number"
        ></ion-input>
        <ion-input
          class="ion-margin-top"
          placeholder="Enter value in Rs"
          fill="outline"
          type="number"
          label="Present Value(Rs)"
          label-placement="floating"
          v-model="newHouseholdAssets.present_value"
        ></ion-input>
      </ion-card-content>
      <ion-button
        class="ion-margin"
        expand="block"
        color="primary"
        @click="UpdateHouseholdAssetsData"
        ><ion-icon
          class="ion-margin-end"
          name="add-circle"
          slot="icon-only"
        ></ion-icon
        >Update Household Assets</ion-button
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
    householdassetdetails: Object,
  },
  data() {
    return {
      newHouseholdAssets: {
        assets: "",
        headId: "",
        id: "",
        number: "",
        present_value: "",
      },
      HouseholdAssetsRows: [],
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
    selectHouseholdAssets(item) {
      this.newHouseholdAssets.id = item.id;
      this.newHouseholdAssets.headId = item.headId;
      this.newHouseholdAssets.assets = item.assets;
      this.newHouseholdAssets.number = item.number;
      this.newHouseholdAssets.present_value = item.present_value;
    },

    updateHouseholdAssetsrows() {
      // Check if any field is not empty
      if (
        Object.values(this.newHouseholdAssets).some((field) => {
          if (typeof field === "string") {
            return field.trim() !== "";
          } else if (Array.isArray(field)) {
            return field.length > 0;
          } else {
            return field !== null && field !== undefined;
          }
        })
      ) {
        this.HouseholdAssetsRows.push({
          ...this.newHouseholdAssets,
        }); // Add a copy of newRow to rows
        this.clearHouseholdAssets(); // Clear the input fields
      }
    },
    clearHouseholdAssets() {
      this.newHouseholdAssets = {
        assets: "",
        headId: "",
        id: "",
        number: "",
        present_value: "",
      };
    },
    removeHouseholdAssets(index) {
      this.HouseholdAssetsRows.splice(index, 1);
    },
    // migrate data updation
    async UpdateHouseholdAssetsData() {
      try {
        this.updateHouseholdAssetsrows();
        const newData = this.HouseholdAssetsRows.map((row) => ({
          ...row,
          headId: this.editedItem.id,
        }));

        for (const row of newData) {
          if (row.id) {
            // Update existing row
            console.log("HouseholdAssets ", row);
            await this.updateHouseholdAssets(row);
            this.HouseholdAssetsRows = [];
          } else {
            // Insert new row
            // this.GovtBenefitRows.push(row);
            console.log("HouseholdAssets  data", row);
            await this.insertHouseholdAssets(row);
            this.HouseholdAssetsRows = [];
          }
        }
      } catch (error) {
        console.error("error in UpdateHouseholdAssetsData function", error);
      }
    },
    async insertHouseholdAssets(row) {
      try {
        console.log("&&&&&&&&&&&&&&&&&&&&&&", row);
        const response = await axios.post(
          "http://183.82.109.39:5000/api/inserthouseholdasset",
          {
            id: row.id,
            headId: row.headId,
            assets: row.assets,
            number: row.number,
            present_value: row.present_value,
          }
        );
        this.householdassetdetails.push(response.data.data);
        if (response.statusText === "Created") {
          // If response status is 200 (OK), trigger success toast
          this.triggerToastMessage(
            "Inserted HouseholdAssets Details Successfully",
            "custom_toast"
          );
        }
        console.log("HouseholdAssets inserted:", response);
      } catch (error) {
        this.triggerToastMessage(
          "Failed to Update Household Assets Details",
          "danger"
        );
        console.error("Error inserting HouseholdAssets row:", error);
      }
    },
    async updateHouseholdAssets(row) {
      try {
        const response = await axios.put(
          `http://183.82.109.39:5000/api/updatehouseholdassets/${row.id}`,
          row
        );
        if (response.statusText === "OK") {
          // If response status is 200 (OK), trigger success toast
          this.triggerToastMessage(
            "Updated HouseholdAssets Details Successfully",
            "custom_toast"
          );
        }
        console.log("HouseholdAssets Row updated:", response);
      } catch (error) {
        this.triggerToastMessage(
          "Failed to Update Household Assets Details",
          "danger"
        );
        console.error("Error updating HouseholdAssets row:", error);
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
