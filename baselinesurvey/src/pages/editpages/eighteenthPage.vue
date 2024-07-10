<template>
  <div>
    <ion-card>
      <ion-card-header color="tertiary" class="ion-text-center"
        ><strong
          >18.Fodder/Fuel use during previous year(1 ton = 1000kgs, 1 Head load
          = 25kgs)</strong
        ></ion-card-header
      >
    </ion-card>
    <ion-card>
      <ion-card-content>
        <ion-list>
          <ion-item
            v-for="item in fodderfueldetails"
            :key="item.id"
            @click="selectFodderFuel(item)"
          >
            {{ item.foldder_details }}
            {{ item.fodder_utilisation }}
          </ion-item>
        </ion-list>
        <ion-select
          class="ion-margin-top"
          interface="popover"
          label="Details"
          label-placement="floating"
          placeholder="Select Details"
          fill="outline"
          v-model="newFodderFuel.foldder_details"
        >
        <ion-select-option value="">Select Details</ion-select-option>
          <ion-select-option value="Own land">Own Land</ion-select-option>
          <ion-select-option value="Community land"
            >Community</ion-select-option
          >
          <ion-select-option value="Purchased">Purchased</ion-select-option>
          <ion-select-option value="Others (name them)"
            >Others</ion-select-option
          >
        </ion-select>
        <ion-input
          class="ion-margin-top"
          placeholder="Enter value in Tons"
          fill="outline"
           type="number"
          label="Fodder Utilization(In Tons)"
          label-placement="floating"
          v-model="newFodderFuel.fodder_utilisation"
        ></ion-input>
        <ion-input
          class="ion-margin-top"
          placeholder="Enter value"
          fill="outline"
           type="number"
          label="Fire/Fuel Cow Dung"
          label-placement="floating"
          v-model="newFodderFuel.cow_dung"
        ></ion-input>
        <ion-input
          class="ion-margin-top"
          placeholder="Enter values"
          fill="outline"
           type="number"
          label="Firewood"
          label-placement="floating"
          v-model="newFodderFuel.fire_wood"
        ></ion-input>
        <ion-input
          class="ion-margin-top"
          placeholder="Enter values"
          fill="outline"
           type="number"
          label="Agricultural Waste"
          label-placement="floating"
          v-model="newFodderFuel.agriculture_waste"
        ></ion-input>
      </ion-card-content>
      <ion-button
          class="ion-margin"
          expand="block"
          color="primary"
          @click="UpdateFodderFuelData"
          ><ion-icon
            class="ion-margin-end"
            name="add-circle"
            slot="icon-only"
          ></ion-icon
          >Update Fodder Fuel</ion-button
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
} from "@ionic/vue";
import axios from "axios";
export default {
  props: {
    editedItem: Object,
    fodderfueldetails: Object,
  },
  data() {
    return {
      newFodderFuel: {
        foldder_details: "",
        headId: "",
        id: "",
        fodder_utilisation: "",
        cow_dung: "",
        fire_wood: "",
        agriculture_waste: "",
      },
      FodderFuelRows: [],
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
    toastController
  },
  methods: {
    selectFodderFuel(item) {
      this.newFodderFuel.id = item.id;
      this.newFodderFuel.headId = item.headId;
      this.newFodderFuel.foldder_details = item.foldder_details;
      this.newFodderFuel.fodder_utilisation = item.fodder_utilisation;
      this.newFodderFuel.cow_dung = item.cow_dung;
      this.newFodderFuel.fire_wood = item.fire_wood;
      this.newFodderFuel.agriculture_waste = item.agriculture_waste;
    },

    updateFodderFuelrows() {
      // Check if any field is not empty
      if (
        Object.values(this.newFodderFuel).some((field) => {
          if (typeof field === "string") {
            return field.trim() !== "";
          } else if (Array.isArray(field)) {
            return field.length > 0;
          } else {
            return field !== null && field !== undefined;
          }
        })
      ) {
        this.FodderFuelRows.push({
          ...this.newFodderFuel,
        }); // Add a copy of newRow to rows
        this.clearFodderFuel(); // Clear the input fields
      }
    },
    clearFodderFuel() {
      this.newFodderFuel = {
        foldder_details: "",
        headId: "",
        id: "",
        fodder_utilisation: "",
        cow_dung: "",
        fire_wood: "",
        agriculture_waste: "",
      };
    },
    removeFodderFuel(index) {
      this.FodderFuelRows.splice(index, 1);
    },
    // migrate data updation
    async UpdateFodderFuelData() {
      try {
        this.triggerToastMessage("Updated Fodder Fuel Details Successfully","custom_toast")
        this.updateFodderFuelrows();
      const newData = this.FodderFuelRows.map((row) => ({
        ...row,
        headId: this.editedItem.id,
      }));

      for (const row of newData) {
        if (row.id) {
          // Update existing row
          console.log("FodderFuel ", row);
          await this.updateFodderFuel(row);
          this.FodderFuelRows = [];
        } else {
          // Insert new row
          // this.GovtBenefitRows.push(row);
          console.log("FodderFuel  data", row);
          await this.insertFodderFuel(row);
          this.FodderFuelRows = [];
        }
      }
      } catch (error) {
        this.triggerToastMessage("Failed to Update Fodder Fuel Details","danger")
        console.error("error in UpdateFodderFuelData function",error)
      }  
    },
    async insertFodderFuel(row) {
      try {
        console.log("&&&&&&&&&&&&&&&&&&&&&&", row);
        const response = await axios.post(
          "http://183.82.109.39:5000/api/insertfodderfuel",
          {
            id: row.id,
            headId: row.headId,
            foldder_details: row.foldder_details,
            fodder_utilisation: row.fodder_utilisation,
            cow_dung: row.cow_dung,
            fire_wood: row.fire_wood,
            agriculture_waste: row.agriculture_waste,
          }
        );
        console.log("FodderFuel inserted:", response);
      } catch (error) {
        console.error("Error inserting FodderFuel row:", error);
      }
    },
    async updateFodderFuel(row) {
      try {
        const response = await axios.put(
          `http://183.82.109.39:5000/api/updatefodderfuel/${row.id}`,
          row
        );
        console.log("FodderFuel Row updated:", response);
      } catch (error) {
        console.error("Error updating FodderFuel row:", error);
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
