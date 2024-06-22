<template>
  <div>
    <ion-card>
      <ion-card-header color="tertiary"
        ><strong>11.Family Expenditure</strong></ion-card-header
      >
    </ion-card>
    <ion-card>
      <ion-card-content>
        <ion-list>
          <ion-item
            v-for="item in loanparticulardetails"
            :key="item.id"
            @click="selectLoanParticulars(item)"
          >
            {{ item.loan_particular }}
            {{ item.source_bank }}
          </ion-item>
        </ion-list>

        <ion-select
          class="ion-margin-top"
          interface="popover"
          label="Items"
          label-placement="floating"
          placeholder="Items"
          fill="outline"
          v-model="newRowLoanParticulars.loan_particular"
        >
          <ion-select-option value="Food">Food</ion-select-option>
          <ion-select-option value="Education">Education</ion-select-option>
          <ion-select-option value="Medical/Health"
            >Medical/Health</ion-select-option
          >
          <ion-select-option value="Maintenance of Vehicles"
            >Maintenance of Vehicles</ion-select-option
          >

          <ion-select-option value="Maintenance of Household Equipments"
            >Maintenance of Household Equipments</ion-select-option
          >
          <ion-select-option value="Mobile">Mobile</ion-select-option>
          <ion-select-option value="Cloths">Cloths</ion-select-option>
          <ion-select-option value="Electricity Bill"
            >Electricity Bill</ion-select-option
          >
          <ion-select-option value="Water Bill">Water Bill</ion-select-option>
          <ion-select-option value="Social/Religious Functions"
            >Social/Religious Functions</ion-select-option
          >
          <ion-select-option value="Others">Others</ion-select-option>
          <ion-select-option value="Total">Total</ion-select-option>
        </ion-select>
        <ion-input
          class="ion-margin-top"
          placeholder="Expenditure Per Last Year"
          fill="outline"
          label="Expenditure Per Last Year"
          label-placement="floating"
          v-model="newRowLoanParticulars.source_total"
        ></ion-input>
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
    loanparticulardetails: Object,
  },
  data() {
    return {
      newRowLoanParticulars: {
        loan_particular: "",
        headId: "",
        id: "",
        source_bank: "",
        source_money_lender: "",
        source_dealer: "",
        source_fellow_farmer: "",
        source_shg: "",
        other_source: "",
        source_total: "",
        purpose_agriculture: "",
        purpose_consumtion: "",
        education: "",
        marriage: "",
        others: "",
      },
      loanparticularRows: [],
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
    selectLoanParticulars(item) {
      this.newRowLoanParticulars.id = item.id;
      this.newRowLoanParticulars.headId = item.headId;
      this.newRowLoanParticulars.loan_particular = item.loan_particular;
      this.newRowLoanParticulars.source_bank = item.source_bank;
      this.newRowLoanParticulars.source_money_lender = item.source_money_lender;
      this.newRowLoanParticulars.source_dealer = item.source_dealer;
      this.newRowLoanParticulars.source_fellow_farmer =
        item.source_fellow_farmer;
      this.newRowLoanParticulars.source_shg = item.source_shg;
      this.newRowLoanParticulars.other_source = item.other_source;
      this.newRowLoanParticulars.source_total = item.source_total;
      this.newRowLoanParticulars.purpose_agriculture = item.purpose_agriculture;
      this.newRowLoanParticulars.purpose_consumtion = item.purpose_consumtion;
      this.newRowLoanParticulars.education = item.education;
      this.newRowLoanParticulars.marriage = item.marriage;
      this.newRowLoanParticulars.others = item.others;
    },
    updateLoanParticularrows() {
      // Check if any field is not empty
      if (
        Object.values(this.newRowLoanParticulars).some((field) => {
          if (typeof field === "string") {
            return field.trim() !== "";
          } else if (Array.isArray(field)) {
            return field.length > 0;
          } else {
            return field !== null && field !== undefined;
          }
        })
      ) {
        this.loanparticularRows.push({ ...this.newRowLoanParticulars }); // Add a copy of newRow to rows
        this.clearLoanParticularFields(); // Clear the input fields
      }
    },
    clearLoanParticularFields() {
      this.newRowLoanParticulars = {
        loan_particular: "",
        headId: "",
        id: "",
        source_bank: "",
        source_money_lender: "",
        source_dealer: "",
        source_fellow_farmer: "",
        source_shg: "",
        other_source: "",
        source_total: "",
        purpose_agriculture: "",
        purpose_consumtion: "",
        education: "",
        marriage: "",
        others: "",
      };
    },
    removeLoanParticular(index) {
      this.loanparticularRows.splice(index, 1);
    },
    // migrate data updation
    async UpdateLoanParticularData() {
      this.updateLoanParticularrows();
      const newData = this.loanparticularRows.map((row) => ({
        ...row,
        headId: this.editedItem.id,
      }));

      for (const row of newData) {
        if (row.id) {
          // Update existing row
          console.log("LoanParticular ", row);
          await this.updateLoanParticular(row);
        } else {
          // Insert new row
          // this.GovtBenefitRows.push(row);
          console.log("LoanParticular updated data", row);
          await this.insertLoanParticular(row);
        }
      }
    },
    async insertLoanParticular(row) {
      try {
        console.log("&&&&&&&&&&&&&&&&&&&&&&", row);
        const response = await axios.post(
          "http://183.82.109.39:5000/api/insertloanparticular",
          {
            id: row.id,
            headId: row.headId,
            loan_particular: row.loan_particular,
            source_bank: row.source_bank,
            source_money_lender: row.source_money_lender,
            source_dealer: row.source_dealer,
            source_fellow_farmer: row.source_fellow_farmer,
            source_shg: row.source_shg,
            other_source: row.other_source,
            source_total: row.source_total,
            purpose_agriculture: row.purpose_agriculture,
            purpose_consumtion: row.purpose_consumtion,
            education: row.education,
            marriage: row.marriage,
            others: row.others,
          }
        );
        console.log("LoanParticular inserted:", response);
      } catch (error) {
        console.error("Error inserting LoanParticular row:", error);
      }
    },
    async updateLoanParticular(row) {
      try {
        const response = await axios.put(
          `http://183.82.109.39:5000/api/updateloanparticular/${row.id}`,
          row
        );
        console.log("LoanParticular Row updated:", response);
      } catch (error) {
        console.error("Error updating LoanParticular row:", error);
      }
    },
  },
};
</script>
