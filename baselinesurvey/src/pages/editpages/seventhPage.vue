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
          v-model="newRowGovtBenefit.name_of_familymember"
        ></ion-input>
        <ion-input
          class="ion-margin-top"
          placeholder="Enter scheme name"
          fill="outline"
          label="Scheme Name"
          label-placement="floating"
          v-model="newRowGovtBenefit.scheme_name"
        ></ion-input>
        <ion-input
          class="ion-margin-top"
          placeholder="Enter days"
          fill="outline"
          label="Amount"
          label-placement="floating"
          v-model="newRowGovtBenefit.amount"
        ></ion-input>
        <ion-button
          class="ion-margin-top"
          expand="block"
          @click="UpdateGovtBenefitData()"
          ><ion-icon
            class="ion-margin-end"
            name="add-circle"
            slot="icon-only"
          ></ion-icon
          >Add Government Scheme Details</ion-button
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
  },
  methods: {
    selectGovtBenefit(item) {
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
        } else {
          // Insert new row
          // this.GovtBenefitRows.push(row);
          console.log("govt banefit updated data", row);
          await this.insertGovtBenefit(row);
        }
      }
    },
    async insertGovtBenefit(row) {
      try {
        console.log("&&&&&&&&&&&&&&&&&&&&&&", row);
        const response = await axios.post(
          "http://localhost:5000/api/insertgovtbenefit",

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
          `http://localhost:5000/api/updategovtbenefit/${row.id}`,
          row
        );
        console.log("govt banefit Row updated:", response);
      } catch (error) {
        console.error("Error updating govt banefit row:", error);
      }
    },
  },
};
</script>
