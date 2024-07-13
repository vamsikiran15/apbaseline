<template>
  <div>
    <ion-card>
      <ion-card-header color="tertiary" class="ion-text-center"
        ><strong
          >6.If Land Less Labourers , given the details of the Number of days
          Employment Availed</strong
        ></ion-card-header
      >
    </ion-card>
    <ion-card>
      <ion-card-content>
        <ion-list>
          <ion-item
            v-for="item in landless"
            :key="item.id"
            @click="selectMigrate(item)"
          >
            {{ item.name_of_the_scheme_or_project }}
            {{ item.mandays }}
          </ion-item>
        </ion-list>
        <ion-select
          aria-label="Crop Grown"
          interface="popover"
          label="Name of the Scheme/Project"
          label-placement="floating"
          placeholder="Select Name of the Scheme/Project"
          fill="outline"
          class="ion-margin-top"
          v-model="newRowLandLess.name_of_the_scheme_or_project"
        >
          <ion-select-option value=""
            >Select Name of the Scheme</ion-select-option
          >
          <ion-select-option value="Watershed">Watershed</ion-select-option>
          <ion-select-option value="MGNREGS">MGNREGS</ion-select-option>
          <ion-select-option value="Others">Others</ion-select-option>
        </ion-select>
        <ion-input
          class="ion-margin-top"
          placeholder="Enter days"
          fill="outline"
          type="number"
          label="Man-Days"
          label-placement="floating"
          v-model="newRowLandLess.mandays"
        ></ion-input>
        <ion-input
          class="ion-margin-top"
          placeholder="Enter days"
          fill="outline"
          type="number"
          label="Wage/Days"
          label-placement="floating"
          v-model="newRowLandLess.wage_per_day"
        ></ion-input>
        <ion-input
          class="ion-margin-top"
          placeholder="Enter days"
          type="number"
          fill="outline"
          label="Income(Rs)"
          label-placement="floating"
          v-model="newRowLandLess.income"
        ></ion-input>
      </ion-card-content>
      <ion-button
        class="ion-margin"
        expand="block"
        color="primary"
        @click="UpdateLandLessData()"
        ><ion-icon
          class="ion-margin-end"
          name="add-circle"
          slot="icon-only"
        ></ion-icon
        >Update Land Less Details</ion-button
      >
    </ion-card>
    <!-- <ion-card>
      <ion-card-content>
        <ion-input
          class="ion-margin-top"
          placeholder="Total"
          fill="outline"
          type="read-only"
          label="Total"
          label-placement="floating"
        ></ion-input>
      </ion-card-content>
    </ion-card> -->
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
  toastController,
  IonItem,
  IonIcon,
  IonButton,
} from "@ionic/vue";
import axios from "axios";
export default {
  props: {
    landless: Object,
    editedItem: Object,
  },
  data() {
    return {
      newRowLandLess: {
        name_of_the_scheme_or_project: "",
        headId: "",
        id: "",
        mandays: "",
        wage_per_day: "",
        income: "",
      },
      landLessRows: [],
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
    toastController,
    IonItem,
    IonIcon,
    IonButton,
  },
  methods: {
    selectMigrate(item) {
      this.newRowLandLess.id = item.id;
      this.newRowLandLess.headId = item.headId;
      this.newRowLandLess.name_of_the_scheme_or_project =
        item.name_of_the_scheme_or_project;
      this.newRowLandLess.mandays = item.mandays;
      this.newRowLandLess.wage_per_day = item.wage_per_day;
      this.newRowLandLess.income = item.income;
    },
    updateLandLessrows() {
      // Check if any field is not empty
      if (
        Object.values(this.newRowLandLess).some((field) => {
          if (typeof field === "string") {
            return field.trim() !== "";
          } else if (Array.isArray(field)) {
            return field.length > 0;
          } else {
            return field !== null && field !== undefined;
          }
        })
      ) {
        this.landLessRows.push({ ...this.newRowLandLess }); // Add a copy of newRow to rows
        this.clearLandLessFields(); // Clear the input fields
      }
    },
    clearLandLessFields() {
      this.newRowLandLess = {
        name_of_the_scheme_or_project: "",
        headId: "",
        id: "",
        mandays: "",
        wage_per_day: "",
        income: "",
      };
    },
    removelandless(index) {
      this.landlessRows.splice(index, 1);
    },
    // migrate data updation
    async UpdateLandLessData() {
      try {
        this.updateLandLessrows();
        const newData = this.landLessRows.map((row) => ({
          ...row,
          headId: this.editedItem.id,
        }));

        for (const row of newData) {
          if (row.id) {
            // Update existing row
            console.log("land less ", row);
            await this.updateLandLess(row);
            this.landLessRows = [];
          } else {
            // Insert new row
            this.landLessRows.push(row);
            console.log("Land Less updated data", row);
            await this.insertLandLess(row);
            this.landLessRows = [];
          }
        }
      } catch (error) {
        console.error("error in UpdateLandLessData function", error);
      }
    },
    async insertLandLess(row) {
      try {
        console.log("&&&&&&&&&&&&&&&&&&&&&&", row);
        const response = await axios.post(
          "http://183.82.109.39:5000/api/insertlandlessdetails",

          {
            id: row.id,
            headId: row.headId,
            name_of_the_scheme_or_project: row.name_of_the_scheme_or_project,
            mandays: row.mandays,
            wage_per_day: row.wage_per_day,
            income: row.income,
          }
        );
        this.landless.push(response.data.data);
        if (response.statusText === "Created") {
          // If response status is 200 (OK), trigger success toast
          this.triggerToastMessage(
            "Inserted LandLess Details Successfully",
            "custom_toast"
          );
        }
        console.log("LandLess inserted:", response);
      } catch (error) {
        this.triggerToastMessage(
          "Failed to insert LandLess Details",
          "custom_toast"
        );
        console.error("Error inserting Land Less row:", error);
      }
    },
    async updateLandLess(row) {
      try {
        const response = await axios.put(
          `http://183.82.109.39:5000/api/updatelandlessdetails/${row.id}`,
          row
        );
        console.log("Land Less Row updated:", response);
        if (response.statusText === "OK") {
          // If response status is 200 (OK), trigger success toast
          this.triggerToastMessage(
            "Updated LandLess Details Successfully",
            "custom_toast"
          );
        }
      } catch (error) {
        this.triggerToastMessage(
          "Failed to updated LandLess Details",
          "custom_toast"
        );
        console.error("Error updating Land Less row:", error);
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
