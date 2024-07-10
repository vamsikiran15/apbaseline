<template>
  <div>
    <ion-card>
      <ion-card-header color="tertiary"
        ><strong
          >22.Awareness on Adaption of Technology</strong
        ></ion-card-header
      >
    </ion-card>
    <ion-card>
      <ion-card-content>
        <ion-list>
          <ion-item
            v-for="item in awarenessadoptiontechnologydetails"
            :key="item.id"
            @click="selectAwarenessAdoption(item)"
          >
            {{ item.technology }}
            {{ item.source_of_information }}
          </ion-item>
        </ion-list>
        <ion-select
          class="ion-margin-top"
          interface="popover"
          label="Technology"
          label-placement="floating"
          placeholder="Select Technology"
          fill="outline"
          v-model="newAwarenessAdoption.technology"
        >
        <ion-select-option value="">Select Technology</ion-select-option>
          <ion-select-option value="Soil Management"
            >Soil Management
          </ion-select-option>
          <ion-select-option value="Crop Management"
            >Crop Management</ion-select-option
          >
          <ion-select-option value="Water Management"
            >Water Management</ion-select-option
          >
          <ion-select-option value="Livestock Management"
            >Livestock Management</ion-select-option
          >

          <ion-select-option value="Fisheries Management"
            >Fisheries Management</ion-select-option
          >
          <ion-select-option value="Forestry Management"
            >Forestry Management</ion-select-option
          >
          <ion-select-option value="Other">Other</ion-select-option>
        </ion-select>
        <ion-select
          class="ion-margin-top"
          interface="popover"
          label="Source Of Information"
          label-placement="floating"
          placeholder="Select Source Of Information"
          fill="outline"
          v-model="newAwarenessAdoption.source_of_information"
        >
        <ion-select-option value="">Select Source of Income</ion-select-option>
          <ion-select-option value="Print Media"
            >Print Media
          </ion-select-option>
          <ion-select-option value="Electronic Media"
            >Electronic Media</ion-select-option
          >
          <ion-select-option value="State Department"
            >State Department</ion-select-option
          >
          <ion-select-option value="Agricultural Department"
            >Agricultural Department</ion-select-option
          >

          <ion-select-option value="Input Dealers"
            >Input Dealers</ion-select-option
          >
          <ion-select-option value="Progressive Farmers"
            >Progressive Farmers</ion-select-option
          >
          <ion-select-option value="NGOs">NGOs</ion-select-option>
        </ion-select>
      </ion-card-content>
      <ion-button
          class="ion-margin"
          expand="block"
          color="primary"
          @click="UpdateAwarenessAdoptionData"
          ><ion-icon
            class="ion-margin-end"
            name="add-circle"
            slot="icon-only"
          ></ion-icon
          >Update Awareness Adoption</ion-button
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
    awarenessadoptiontechnologydetails: Object,
  },
  data() {
    return {
      newAwarenessAdoption: {
        technology: "",
        headId: "",
        id: "",
        source_of_information: "",
      },
      AwarenessAdoptionRows: [],
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
    selectAwarenessAdoption(item) {
      this.newAwarenessAdoption.id = item.id;
      this.newAwarenessAdoption.headId = item.headId;
      this.newAwarenessAdoption.technology = item.technology;
      this.newAwarenessAdoption.source_of_information =
        item.source_of_information;
    },

    updateAwarenessAdoptionrows() {
      // Check if any field is not empty
      if (
        Object.values(this.newAwarenessAdoption).some((field) => {
          if (typeof field === "string") {
            return field.trim() !== "";
          } else if (Array.isArray(field)) {
            return field.length > 0;
          } else {
            return field !== null && field !== undefined;
          }
        })
      ) {
        this.AwarenessAdoptionRows.push({
          ...this.newAwarenessAdoption,
        }); // Add a copy of newRow to rows
        this.clearAwarenessAdoption(); // Clear the input fields
      }
    },
    clearAwarenessAdoption() {
      this.newAwarenessAdoption = {
        technology: "",
        headId: "",
        id: "",
        source_of_information: "",
      };
    },
    removeAwarenessAdoption(index) {
      this.AwarenessAdoptionRows.splice(index, 1);
    },
    // migrate data updation
    async UpdateAwarenessAdoptionData() {
      try {
        this.triggerToastMessage("Updated Awareness Adoption Technology Details Successfully","custom_toast")
        this.updateAwarenessAdoptionrows();
      const newData = this.AwarenessAdoptionRows.map((row) => ({
        ...row,
        headId: this.editedItem.id,
      }));

      for (const row of newData) {
        if (row.id) {
          // Update existing row
          console.log("AwarenessAdoption ", row);
          await this.updateAwarenessAdoption(row);
          this.AwarenessAdoptionRows = [];
        } else {
          // Insert new row
          // this.GovtBenefitRows.push(row);
          console.log("AwarenessAdoption  data", row);
          await this.insertAwarenessAdoption(row);
          this.AwarenessAdoptionRows = [];
        }
      }
      } catch (error) {
        this.triggerToastMessage("Failed to Update Awareness Adoption Technology Details","danger")
        console.error("error in UpdateAwarenessAdoptionData function",error)
      }
    
    },
    async insertAwarenessAdoption(row) {
      try {
        console.log("&&&&&&&&&&&&&&&&&&&&&&", row);
        const response = await axios.post(
          "http://183.82.109.39:5000/api/insertawarenessadoptiontechnology",
          {
            id: row.id,
            headId: row.headId,
            technology: row.technology,
            source_of_information: row.source_of_information,
          }
        );
        console.log("AwarenessAdoption inserted:", response);
      } catch (error) {
        console.error("Error inserting AwarenessAdoption row:", error);
      }
    },
    async updateAwarenessAdoption(row) {
      try {
        const response = await axios.put(
          `http://183.82.109.39:5000/api/updateawarenessadoptiontechnology/${row.id}`,
          row
        );
        console.log("AwarenessAdoption Row updated:", response);
      } catch (error) {
        console.error("Error updating AwarenessAdoption row:", error);
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
