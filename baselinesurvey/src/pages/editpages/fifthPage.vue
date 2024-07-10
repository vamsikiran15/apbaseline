<template>
  <div>
    <ion-card>
      <ion-card-header color="tertiary"
        ><strong>5.Migration Status</strong></ion-card-header
      >
    </ion-card>
    <ion-card>
      <ion-card-content>
        <ion-list>
          <ion-item
            v-for="item in migrations"
            :key="item.id"
            @click="selectMigrate(item)"
          >
            {{ item.name_of_the_person_migrating }}
            {{ item.male_or_female }}
          </ion-item>
        </ion-list>
        <ion-input
          class="ion-margin-top"
          placeholder="Enter name of the person migrating"
          fill="outline"
          label="Name of the Person Migrating "
          label-placement="floating"
          v-model="newRowMigrate.name_of_the_person_migrating"
        ></ion-input>
        <ion-select
          class="ion-margin-top"
          aria-label="Gender"
          interface="popover"
          label="Gender"
          label-placement="floating"
          placeholder="Gender"
          fill="outline"
          v-model="newRowMigrate.male_or_female"
        >
          <ion-select-option value="Male">Male</ion-select-option>
          <ion-select-option value="Female">Female</ion-select-option>
        </ion-select>
        <ion-input
          class="ion-margin-top"
          placeholder="Enter No of the Days"
          fill="outline"
          label="No of the Days Migrating per Year "
          label-placement="floating"
          v-model="newRowMigrate.no_of_person_migrating_per_year"
        ></ion-input>
        <ion-select
          class="ion-margin-top"
          aria-label="Reasons for Migrating"
          interface="popover"
          label="Reasons for Migrating"
          label-placement="floating"
          placeholder="Enter reasons for migrating"
          fill="outline"
          v-model="newRowMigrate.reasons_for_migrating"
        >
        <ion-select-option value="">Select Reasons for Migrating</ion-select-option>
          <ion-select-option value="distress">Distress</ion-select-option>
          <ion-select-option value="Better Livelihood options"
            >Better Livelihood options</ion-select-option
          >
          <ion-select-option value="Seasonal">Seasonal</ion-select-option>
        </ion-select>
        <ion-select
          class="ion-margin-top"
          aria-label="Place for Migrating"
          interface="popover"
          label="Place of Migration"
          label-placement="floating"
          placeholder="Enter place for migrating"
          fill="outline"
          v-model="newRowMigrate.place_of_migrating"
        >
        <ion-select-option value="">Select Place of Migration</ion-select-option>
          <ion-select-option value="Within District"
            >Within District</ion-select-option
          >
          <ion-select-option value="Outside District"
            >Outside District</ion-select-option
          >
          <ion-select-option value="Outside State"
            >Outside State</ion-select-option
          >
        </ion-select>
        <ion-select
          class="ion-margin-top"
          aria-label="Occupation for Migrating"
          interface="popover"
          label="Occupation during Migration"
          label-placement="floating"
          placeholder="Enter occupation for migrating"
          fill="outline"
          v-model="newRowMigrate.occupation_during_migration"
        >
        <ion-select-option value="">Select Occupation during Migration</ion-select-option>
          <ion-select-option value="agri">Agri</ion-select-option>
          <ion-select-option value="industriallabour"
            >Industrial Labour</ion-select-option
          >
          <ion-select-option value="otherlivelihoods"
            >Other Livelihoods</ion-select-option
          >
        </ion-select>
        <ion-input
          class="ion-margin-top"
           type="number"
          fill="outline"
          label="Income from Such Occupation "
          label-placement="floating"
          v-model="newRowMigrate.income_for_such_occupation"
        ></ion-input>
      </ion-card-content>
      <ion-button
          class="ion-margin"
          expand="block"
          color="primary"
          @click="UpdateMigrateData()"
          ><ion-icon
            class="ion-margin-end"
            name="add-circle"
            slot="icon-only"
          ></ion-icon
          >Update Migration Details</ion-button
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
  toastController,
} from "@ionic/vue";
import axios from "axios";
export default {
  props: {
    migrations: Object,
    editedItem: Object,
  },
  data() {
    return {
      newRowMigrate: {
        name_of_the_person_migrating: "",
        headId: "",
        id: "",
        male_or_female: "",
        no_of_person_migrating_per_year: "",
        reasons_for_migrating: "",
        place_of_migrating: "",
        occupation_during_migration: "",
        income_for_such_occupation: "",
      },
      migrateRows: [],
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
    toastController
  },
  methods: {
    selectMigrate(item) {
      this.newRowMigrate.id = item.id;
      this.newRowMigrate.headId = item.headId;
      this.newRowMigrate.name_of_the_person_migrating =
        item.name_of_the_person_migrating;
      this.newRowMigrate.male_or_female = item.male_or_female;
      this.newRowMigrate.no_of_person_migrating_per_year =
        item.no_of_person_migrating_per_year;
      this.newRowMigrate.reasons_for_migrating = item.reasons_for_migrating;
      this.newRowMigrate.place_of_migrating = item.place_of_migrating;
      this.newRowMigrate.occupation_during_migration =
        item.occupation_during_migration;
      this.newRowMigrate.income_for_such_occupation =
        item.income_for_such_occupation;
    },
    updateMigraterows() {
      // Check if any field is not empty
      if (
        Object.values(this.newRowMigrate).some((field) => {
          if (typeof field === "string") {
            return field.trim() !== "";
          } else if (Array.isArray(field)) {
            return field.length > 0;
          } else {
            return field !== null && field !== undefined;
          }
        })
      ) {
        this.migrateRows.push({ ...this.newRowMigrate }); // Add a copy of newRow to rows
        this.clearMigrateFields(); // Clear the input fields
      }
    },
    clearMigrateFields() {
      this.newRowMigrate = {
        name_of_the_person_migrating: "",
        headId: "",
        id: "",
        male_or_female: "",
        no_of_person_migrating_per_year: "",
        reasons_for_migrating: "",
        place_of_migrating: "",
        occupation_during_migration: "",
        income_for_such_occupation: "",
      };
    },
    removemigreate(index) {
      this.migrateRows.splice(index, 1);
    },
    // migrate data updation
    async UpdateMigrateData() {
      try {
        this.triggerToastMessage("Updated Migration Details Successfully","custom_toast")
        this.updateMigraterows();
      const newData = this.migrateRows.map((row) => ({
        ...row,
        headId: this.editedItem.id,
      }));

      for (const row of newData) {
        if (row.id) {
          // Update existing row
          console.log("Live stock ", row);
          await this.updateMigrate(row);
          this.migrateRows = [];
        } else {
          // Insert new row
          this.migrateRows.push(row);
          console.log("Live Stock updated data", row);
          await this.insertMigrate(row);
          this.migrateRows = [];
        }
      }
      } catch (error) {
        this.triggerToastMessage("Failed to Update Migration Details","custom_toast")
        console.error("error in UpdateMigrateData function",error)
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
    async insertMigrate(row) {
      try {
        console.log("&&&&&&&&&&&&&&&&&&&&&&", row);
        const response = await axios.post(
          "http://183.82.109.39:5000/api/insertmigrate",

          {
            id: row.id,
            headId: row.headId,
            name_of_the_person_migrating: row.name_of_the_person_migrating,
            male_or_female: row.male_or_female,
            no_of_person_migrating_per_year:
              row.no_of_person_migrating_per_year,
            reasons_for_migrating: row.reasons_for_migrating,
            place_of_migrating: row.place_of_migrating,
            occupation_during_migration: row.occupation_during_migration,
            income_for_such_occupation: row.income_for_such_occupation,
          }
        );
        console.log("Live migrate inserted:", response);
      } catch (error) {
        console.error("Error inserting migrate row:", error);
      }
    },
    async updateMigrate(row) {
      try {
        const response = await axios.put(
          `http://183.82.109.39:5000/api/updatemigrate/${row.id}`,
          row
        );
        console.log("migrate Row updated:", response);
      } catch (error) {
        console.error("Error updating migrate row:", error);
      }
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
