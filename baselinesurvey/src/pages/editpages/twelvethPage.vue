<template>
  <div>
    <ion-card>
      <ion-card-header class="ion-text-center" color="tertiary"
        ><strong
          >12.Different Source of Income,Expenditure and Family Debt
          Details</strong
        ></ion-card-header
      >
    </ion-card>
    <ion-card>
      <ion-card-content>
        <ion-list>
          <ion-item
            v-for="item in differentsource"
            :key="item.id"
            @click="selectDifferentSource(item)"
          >
            {{ item.source }}
            {{ item.income_during_the_year }}
          </ion-item>
        </ion-list>

        <ion-select
          class="ion-margin-top"
          interface="popover"
          label="Items"
          label-placement="floating"
          placeholder="Items"
          fill="outline"
          v-model="newRowDifferentSource.source"
        >
          <ion-select-option value="Household Member's Income"
            >Household Member's Income</ion-select-option
          >
          <ion-select-option value="Agriculture-Kharif"
            >Agriculture-Kharif</ion-select-option
          >
          <ion-select-option value="Agriculture-Rabi"
            >Agriculture-Rabi</ion-select-option
          >
          <ion-select-option value="Dairy">Dairy</ion-select-option>

          <ion-select-option value="Livestock">Livestock</ion-select-option>
          <ion-select-option value="Fisheries">Fisheries</ion-select-option>
          <ion-select-option value="Poultry">Poultry</ion-select-option>
          <ion-select-option value="Wages-Migration"
            >Wages-Migration</ion-select-option
          >
          <ion-select-option value="Landless Labourers-Wages"
            >Landless Labourers-Wages</ion-select-option
          >
          <ion-select-option value="Benefits from Government Schemes"
            >Benefits from Government Schemes</ion-select-option
          >
          <ion-select-option
            value="Expenditure of Manure and Chemical Fertilizers"
            >Expenditure of Manure and Chemical Fertilizers</ion-select-option
          >
          <ion-select-option value="Expenditure of Pesticide"
            >Expenditure of Pesticide</ion-select-option
          >

          <ion-select-option value="Family Expenditure"
            >Family Expenditure</ion-select-option
          >
          <ion-select-option value="Family Indebtedness"
            >Family Indebtedness</ion-select-option
          >

          <ion-select-option value="Business">Business</ion-select-option>
          <ion-select-option value="Others(Specify)"
            >Others(Specify)</ion-select-option
          >
        </ion-select>
        <ion-input
          class="ion-margin-top"
          fill="outline"
          label="Income During the Year"
          label-placement="floating"
          v-model="newRowDifferentSource.income_during_the_year"
        ></ion-input>
        <ion-button
          class="ion-margin-top"
          expand="block"
          color="primary"
          @click="UpdateDifferentSourceData()"
          ><ion-icon
            class="ion-margin-end"
            name="add-circle"
            slot="icon-only"
          ></ion-icon
          >Update Different Source Income</ion-button
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
    differentsource: Object,
  },
  data() {
    return {
      newRowDifferentSource: {
        source: "",
        headId: "",
        id: "",
        income_during_the_year: "",
      },
      differentsourceRows: [],
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
    selectDifferentSource(item) {
      this.newRowDifferentSource.id = item.id;
      this.newRowDifferentSource.headId = item.headId;
      this.newRowDifferentSource.source = item.source;
      this.newRowDifferentSource.income_during_the_year =
        item.income_during_the_year;
    },
    updateDifferentSourcerows() {
      // Check if any field is not empty
      if (
        Object.values(this.newRowDifferentSource).some((field) => {
          if (typeof field === "string") {
            return field.trim() !== "";
          } else if (Array.isArray(field)) {
            return field.length > 0;
          } else {
            return field !== null && field !== undefined;
          }
        })
      ) {
        this.differentsourceRows.push({ ...this.newRowDifferentSource }); // Add a copy of newRow to rows
        this.clearDifferentSourceFields(); // Clear the input fields
      }
    },
    clearDifferentSourceFields() {
      this.newRowDifferentSource = {
        source: "",
        headId: "",
        id: "",
        income_during_the_year: "",
      };
    },
    removeDiffSource(index) {
      this.differentsourceRows.splice(index, 1);
    },
    // migrate data updation
    async UpdateDifferentSourceData() {
      this.updateDifferentSourcerows();
      const newData = this.differentsourceRows.map((row) => ({
        ...row,
        headId: this.editedItem.id,
      }));

      for (const row of newData) {
        if (row.id) {
          // Update existing row
          console.log("update different source ", row);
          await this.updateDifferentSource(row);
          this.differentsourceRows = [];
        } else {
          // Insert new row
          // this.GovtBenefitRows.push(row);
          console.log("insert different source data", row);
          await this.insertDifferentSource(row);
          this.differentsourceRows = [];
        }
      }
    },
    async insertDifferentSource(row) {
      try {
        console.log("&&&&&&&&&&&&&&&&&&&&&&", row);
        const response = await axios.post(
          "http://183.82.109.39:5000/api/insertdifferentsourceincome",
          {
            id: row.id,
            headId: row.headId,
            source: row.source,
            income_during_the_year: row.income_during_the_year,
          }
        );
        console.log("different source inserted:", response);
      } catch (error) {
        console.error("Error inserting different source row:", error);
      }
    },
    async updateDifferentSource(row) {
      try {
        const response = await axios.put(
          `http://183.82.109.39:5000/api/updatedifferentsourceincome/${row.id}`,
          row
        );
        console.log("different source Row updated:", response);
      } catch (error) {
        console.error("Error updating different source row:", error);
      }
    },
  },
};
</script>
