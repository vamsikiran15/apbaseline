<template>
  <div>
    <ion-card>
      <ion-card-header color="tertiary"
        ><strong>16.Horticulture Details</strong></ion-card-header
      >
    </ion-card>
    <ion-card>
      <ion-card-content>
        <ion-list>
          <ion-item
            v-for="item in horticulturedetails"
            :key="item.id"
            @click="selectHorticulture(item)"
          >
            {{ item.horticulture_details }}
            {{ item.horticulture_number }}
          </ion-item>
        </ion-list>
        <ion-select
          class="ion-margin-top"
          interface="popover"
          label="Details"
          label-placement="floating"
          placeholder="Select Details"
          fill="outline"
          v-model="newHorticulture.horticulture_details"
        >
          <ion-select-option value="">Select Details</ion-select-option>
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
          <ion-select-option value="foresttrees"
            >Forest Trees</ion-select-option
          >
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
          type="number"
          label="Number of Details"
          label-placement="floating"
          v-model="newHorticulture.horticulture_number"
        ></ion-input>
      </ion-card-content>
      <ion-button
        class="ion-margin"
        expand="block"
        color="primary"
        @click="UpdateHorticultureData"
        ><ion-icon
          class="ion-margin-end"
          name="add-circle"
          slot="icon-only"
        ></ion-icon
        >Update Horticulture</ion-button
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
    horticulturedetails: Object,
  },
  data() {
    return {
      newHorticulture: {
        horticulture_details: "",
        headId: "",
        id: "",
        horticulture_number: "",
      },
      HorticultureRows: [],
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
    selectHorticulture(item) {
      this.newHorticulture.id = item.id;
      this.newHorticulture.headId = item.headId;
      this.newHorticulture.horticulture_details = item.horticulture_details;
      this.newHorticulture.horticulture_number = item.horticulture_number;
    },

    updateHorticulturerows() {
      // Check if any field is not empty
      if (
        Object.values(this.newHorticulture).some((field) => {
          if (typeof field === "string") {
            return field.trim() !== "";
          } else if (Array.isArray(field)) {
            return field.length > 0;
          } else {
            return field !== null && field !== undefined;
          }
        })
      ) {
        this.HorticultureRows.push({
          ...this.newHorticulture,
        }); // Add a copy of newRow to rows
        this.clearHorticulture(); // Clear the input fields
      }
    },
    clearHorticulture() {
      this.newHorticulture = {
        horticulture_details: "",
        headId: "",
        id: "",
        horticulture_number: "",
      };
    },
    removeHorticulture(index) {
      this.HorticultureRows.splice(index, 1);
    },
    // migrate data updation
    async UpdateHorticultureData() {
      try {
        this.updateHorticulturerows();
        const newData = this.HorticultureRows.map((row) => ({
          ...row,
          headId: this.editedItem.id,
        }));

        for (const row of newData) {
          if (row.id) {
            // Update existing row
            console.log("Horticulture ", row);
            await this.updateHorticulture(row);
            this.HorticultureRows = [];
          } else {
            // Insert new row
            // this.GovtBenefitRows.push(row);
            console.log("Horticulture  data", row);
            await this.insertHorticulture(row);
            this.HorticultureRows = [];
          }
        }
      } catch (error) {
        console.error("error in UpdateHorticultureData function", error);
      }
    },
    async insertHorticulture(row) {
      try {
        console.log("&&&&&&&&&&&&&&&&&&&&&&", row);
        const response = await axios.post(
          "http://183.82.109.39:5000/api/inserthorticulture",
          {
            id: row.id,
            headId: row.headId,
            horticulture_details: row.horticulture_details,
            horticulture_number: row.horticulture_number,
          }
        );
        this.horticulturedetails.push(response.data.data);
        if (response.statusText === "Created") {
          // If response status is 200 (OK), trigger success toast
          this.triggerToastMessage(
            "Inserted Horticulture Details Successfully",
            "custom_toast"
          );
        }
        console.log("Horticulture inserted:", response);
      } catch (error) {
        this.triggerToastMessage(
          "Failed to Insert Horticulture Details",
          "danger"
        );
        console.error("Error inserting Horticulture row:", error);
      }
    },
    async updateHorticulture(row) {
      try {
        const response = await axios.put(
          `http://183.82.109.39:5000/api/updatehorticulture/${row.id}`,
          row
        );
        if (response.statusText === "OK") {
          // If response status is 200 (OK), trigger success toast
          this.triggerToastMessage(
            "Updated Horticulture Details Successfully",
            "custom_toast"
          );
        }
        console.log("Horticulture Row updated:", response);
      } catch (error) {
        this.triggerToastMessage(
          "Failed to Update Horticulture Details",
          "danger"
        );
        console.error("Error updating Horticulture row:", error);
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
