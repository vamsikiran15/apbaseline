<template>
  <div>
    <ion-card>
      <ion-card-header color="tertiary" class="ion-text-center"
        ><strong
          >19.Do you Graze your Cattle in the Community Land? Yes/No</strong
        ></ion-card-header
      >
    </ion-card>
    <ion-card>
      <ion-card-content>
        <ion-list>
          <ion-item
            v-for="item in grazecattlecommunitydetails"
            :key="item.id"
            @click="selectGrazeCattle(item)"
          >
            {{ item.grazing_of_cattle_or_animal }}
            {{ item.number_of_animals }}
          </ion-item>
        </ion-list>
        <ion-select
          class="ion-margin-top"
          interface="popover"
          label="Grazing of Cattle/Animals"
          label-placement="floating"
          placeholder="Select Grazing of Cattle/Animals"
          fill="outline"
          v-model="newGrazeCattle.grazing_of_cattle_or_animal"
        >
          <ion-select-option value=""
            >Select Grazing of Animals</ion-select-option
          >
          <ion-select-option value="In Community Land"
            >In Community Land</ion-select-option
          >
          <ion-select-option value="Fed in the House"
            >Fed in the House</ion-select-option
          >
          <ion-select-option value="In Own Lands"
            >In Own Lands</ion-select-option
          >
        </ion-select>
        <ion-input
          class="ion-margin-top"
          placeholder="Enter number of cattle/animals"
          fill="outline"
          label="Number of Cattle/Animals"
          label-placement="floating"
          v-model="newGrazeCattle.number_of_animals"
        ></ion-input>
        <ion-input
          class="ion-margin-top"
          placeholder="Enter days"
          fill="outline"
          type="number"
          label="How many days in a Year"
          label-placement="floating"
          v-model="newGrazeCattle.how_many_days_in_the_year"
        ></ion-input>
      </ion-card-content>
      <ion-button
        class="ion-margin"
        expand="block"
        color="primary"
        @click="UpdateGrazeCattleData"
        ><ion-icon
          class="ion-margin-end"
          name="add-circle"
          slot="icon-only"
        ></ion-icon
        >Update Graze</ion-button
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
    grazecattlecommunitydetails: Object,
  },
  data() {
    return {
      newGrazeCattle: {
        grazing_of_cattle_or_animal: "",
        headId: "",
        id: "",
        number_of_animals: "",
        how_many_days_in_the_year: "",
      },
      GrazeCattleRows: [],
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
    selectGrazeCattle(item) {
      this.newGrazeCattle.id = item.id;
      this.newGrazeCattle.headId = item.headId;
      this.newGrazeCattle.grazing_of_cattle_or_animal =
        item.grazing_of_cattle_or_animal;
      this.newGrazeCattle.number_of_animals = item.number_of_animals;
      this.newGrazeCattle.how_many_days_in_the_year =
        item.how_many_days_in_the_year;
    },

    updateGrazeCattlerows() {
      // Check if any field is not empty
      if (
        Object.values(this.newGrazeCattle).some((field) => {
          if (typeof field === "string") {
            return field.trim() !== "";
          } else if (Array.isArray(field)) {
            return field.length > 0;
          } else {
            return field !== null && field !== undefined;
          }
        })
      ) {
        this.GrazeCattleRows.push({
          ...this.newGrazeCattle,
        }); // Add a copy of newRow to rows
        this.clearGrazeCattle(); // Clear the input fields
      }
    },
    clearGrazeCattle() {
      this.newGrazeCattle = {
        grazing_of_cattle_or_animal: "",
        headId: "",
        id: "",
        number_of_animals: "",
        how_many_days_in_the_year: "",
      };
    },
    removeGrazeCattle(index) {
      this.GrazeCattleRows.splice(index, 1);
    },
    // migrate data updation
    async UpdateGrazeCattleData() {
      try {
        this.updateGrazeCattlerows();
        const newData = this.GrazeCattleRows.map((row) => ({
          ...row,
          headId: this.editedItem.id,
        }));

        for (const row of newData) {
          if (row.id) {
            // Update existing row
            console.log("GrazeCattle ", row);
            await this.updateGrazeCattle(row);
            this.GrazeCattleRows = [];
          } else {
            // Insert new row
            // this.GovtBenefitRows.push(row);
            console.log("GrazeCattle  data", row);
            await this.insertGrazeCattle(row);
            this.GrazeCattleRows = [];
          }
        }
      } catch (error) {
        console.error("error in UpdateGrazeCattleData function", error);
      }
    },
    async insertGrazeCattle(row) {
      try {
        console.log("&&&&&&&&&&&&&&&&&&&&&&", row);
        const response = await axios.post(
          "http://183.82.109.39:5000/api/insertgrazecattlecommunity",
          {
            id: row.id,
            headId: row.headId,
            grazing_of_cattle_or_animal: row.grazing_of_cattle_or_animal,
            number_of_animals: row.number_of_animals,
            how_many_days_in_the_year: row.how_many_days_in_the_year,
          }
        );
        this.grazecattlecommunitydetails.push(response.data.data);
        if (response.statusText === "Created") {
          // If response status is 200 (OK), trigger success toast
          this.triggerToastMessage(
            "Inserted Graze your Cattle Details Successfully",
            "custom_toast"
          );
        }
        console.log("GrazeCattle inserted:", response);
      } catch (error) {
        this.triggerToastMessage(
          "Failed to Insert Graze your Cattle Details",
          "danger"
        );
        console.error("Error inserting GrazeCattle row:", error);
      }
    },
    async updateGrazeCattle(row) {
      try {
        const response = await axios.put(
          `http://183.82.109.39:5000/api/updategrazecattlecommunity/${row.id}`,
          row
        );
        if (response.statusText === "OK") {
          // If response status is 200 (OK), trigger success toast
          this.triggerToastMessage(
            "Updated  Graze your Cattle Details Successfully",
            "custom_toast"
          );
        }
        console.log("GrazeCattle Row updated:", response);
      } catch (error) {
        this.triggerToastMessage(
          "Failed to Update Graze your Cattle Details",
          "danger"
        );
        console.error("Error updating GrazeCattle row:", error);
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
