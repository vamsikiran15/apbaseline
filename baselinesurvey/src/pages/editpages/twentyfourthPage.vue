<template>
  <div>
    <ion-card>
      <ion-card-header class="ion-text-center" color="tertiary"
        ><strong
          >24.have been the Beneficiary of any scheme of project
          Previously?Yes/No , if Yes</strong
        ></ion-card-header
      >
    </ion-card>
    <ion-card>
      <ion-card-content>
        <ion-list>
          <ion-item
            v-for="item in anyschemepreviousprojectdetails"
            :key="item.id"
            @click="selectAnyScheme(item)"
          >
            {{ item.name_of_the_scheme_or_project }}
            {{ item.details_of_benefits_obtained }}
          </ion-item>
        </ion-list>
        <ion-input
          class="ion-margin-top"
          placeholder="Enter Name of the Scheme/Project"
          fill="outline"
          label="Name of the Scheme/Project"
          label-placement="floating"
          v-model="newAnyScheme.name_of_the_scheme_or_project"
        ></ion-input>
        <ion-input
          class="ion-margin-top"
          placeholder="Enter Details of the Benefits Obtained"
          fill="outline"
          label="Details of the Benefits Obtained"
          label-placement="floating"
          v-model="newAnyScheme.details_of_benefits_obtained"
        ></ion-input>
        <ion-input
          class="ion-margin-top"
          placeholder="Enter Value of the Benefit(Rs)"
          fill="outline"
          label="Value of the Benefit(Rs)"
          label-placement="floating"
          v-model="newAnyScheme.value_of_the_benefit"
        ></ion-input>
        <ion-button
          class="ion-margin-top"
          expand="block"
          color="primary"
          @click="UpdateAnySchemeData"
          ><ion-icon
            class="ion-margin-end"
            name="add-circle"
            slot="icon-only"
          ></ion-icon
          >Update AnyScheme</ion-button
        >
      </ion-card-content>
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
} from "@ionic/vue";
import axios from "axios";
export default {
  props: {
    editedItem: Object,
    anyschemepreviousprojectdetails: Object,
  },
  data() {
    return {
      newAnyScheme: {
        name_of_the_scheme_or_project: "",
        headId: "",
        id: "",
        details_of_benefits_obtained: "",
        value_of_the_benefit: "",
      },
      AnySchemeRows: [],
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
  },
  methods: {
    selectAnyScheme(item) {
      this.newAnyScheme.id = item.id;
      this.newAnyScheme.headId = item.headId;
      this.newAnyScheme.name_of_the_scheme_or_project =
        item.name_of_the_scheme_or_project;
      this.newAnyScheme.details_of_benefits_obtained =
        item.details_of_benefits_obtained;
      this.newAnyScheme.value_of_the_benefit = item.value_of_the_benefit;
    },

    updateAnySchemerows() {
      // Check if any field is not empty
      if (
        Object.values(this.newAnyScheme).some((field) => {
          if (typeof field === "string") {
            return field.trim() !== "";
          } else if (Array.isArray(field)) {
            return field.length > 0;
          } else {
            return field !== null && field !== undefined;
          }
        })
      ) {
        this.AnySchemeRows.push({
          ...this.newAnyScheme,
        }); // Add a copy of newRow to rows
        this.clearAnyScheme(); // Clear the input fields
      }
    },
    clearAnyScheme() {
      this.newAnyScheme = {
        name_of_the_scheme_or_project: "",
        headId: "",
        id: "",
        details_of_benefits_obtained: "",
        value_of_the_benefit: "",
      };
    },
    removeAnyScheme(index) {
      this.AnySchemeRows.splice(index, 1);
    },
    // migrate data updation
    async UpdateAnySchemeData() {
      this.updateAnySchemerows();
      const newData = this.AnySchemeRows.map((row) => ({
        ...row,
        headId: this.editedItem.id,
      }));

      for (const row of newData) {
        if (row.id) {
          // Update existing row
          console.log("AnyScheme ", row);
          await this.updateAnyScheme(row);
          this.AnySchemeRows = [];
        } else {
          // Insert new row
          // this.GovtBenefitRows.push(row);
          console.log("AnyScheme  data", row);
          await this.insertAnyScheme(row);
          this.AnySchemeRows = [];
        }
      }
    },
    async insertAnyScheme(row) {
      try {
        console.log("&&&&&&&&&&&&&&&&&&&&&&", row);
        const response = await axios.post(
          "http://183.82.109.39:5000/api/insertanyschemepreviousproject",
          {
            id: row.id,
            headId: row.headId,
            name_of_the_scheme_or_project: row.name_of_the_scheme_or_project,
            details_of_benefits_obtained: row.details_of_benefits_obtained,
            value_of_the_benefit: row.value_of_the_benefit,
          }
        );
        console.log("AnyScheme inserted:", response);
      } catch (error) {
        console.error("Error inserting AnyScheme row:", error);
      }
    },
    async updateAnyScheme(row) {
      try {
        const response = await axios.put(
          `http://183.82.109.39:5000/api/updateanyschemepreviousproject/${row.id}`,
          row
        );
        console.log("AnyScheme Row updated:", response);
      } catch (error) {
        console.error("Error updating AnyScheme row:", error);
      }
    },
  },
};
</script>
<style>
.iconSize {
  height: 2.5rem;
  width: 2.5rem;
}
</style>
<style>
ion-card {
  border-radius: 8px;
  box-shadow: 1px 1px 6px rgb(96, 96, 161);
}
</style>
