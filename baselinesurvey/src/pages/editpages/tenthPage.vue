<template>
  <div>
    <ion-card>
      <ion-card-header color="tertiary" class="ion-text-center"
        ><strong
          >10.Details of Loan Particulars(Amount in Rs)</strong
        ></ion-card-header
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
          label="Agriculture"
          label-placement="floating"
          placeholder="Loan Particulars"
          fill="outline"
          v-model="newRowLoanParticulars.loan_particular"
        >
        <ion-select-option value="">Select Agriculture</ion-select-option>
          <ion-select-option value="Amount Barrowed"
            >Amount Borrowed</ion-select-option
          >
          <ion-select-option value="Amount Repaid"
            >Amount Repaid</ion-select-option
          >
        </ion-select>
        <ion-card-subtitle
          class="ion-margin-top ion-text-center"
          color="tertiary"
          >Source</ion-card-subtitle
        >
        <ion-input
          class="ion-margin-top"
          placeholder="Enter bank"
          fill="outline"
          label="Bank"
          label-placement="floating"
          v-model="newRowLoanParticulars.source_bank"
        ></ion-input>
        <ion-input
          class="ion-margin-top"
          placeholder="Enter money lender"
          fill="outline"
          label="Money Lender"
          label-placement="floating"
          v-model="newRowLoanParticulars.source_money_lender"
        ></ion-input>
        <ion-input
          class="ion-margin-top"
          placeholder="Enter Dealer"
          fill="outline"
          label="Dealer"
          label-placement="floating"
          v-model="newRowLoanParticulars.source_dealer"
        ></ion-input>
        <ion-input
          class="ion-margin-top"
          placeholder="Enter fellow farmer"
          fill="outline"
          label="Fellow Farmer"
          label-placement="floating"
          v-model="newRowLoanParticulars.source_fellow_farmer"
        ></ion-input>
        <ion-input
          class="ion-margin-top"
          placeholder="Enter shg"
          fill="outline"
          label="SHG"
          label-placement="floating"
          v-model="newRowLoanParticulars.source_shg"
        ></ion-input>
        <ion-input
          class="ion-margin-top"
          placeholder="Others(specify)"
          fill="outline"
          label="Others(specify)"
          label-placement="floating"
          v-model="newRowLoanParticulars.other_source"
        ></ion-input>
        <ion-input
          class="ion-margin-top"
          placeholder="Total"
          fill="outline"
          label="Total"
          label-placement="floating"
          v-model="newRowLoanParticulars.source_total"
        ></ion-input>
        <ion-card-subtitle
          color="tertiary"
          class="ion-text-center ion-margin-top"
          >Purpose</ion-card-subtitle
        >
        <ion-select
          class="ion-margin-top"
          interface="popover"
          label="Agriculture"
          label-placement="floating"
          placeholder="Agriculture"
          fill="outline"
          v-model="newRowLoanParticulars.purpose_agriculture"
        >
          <ion-select-option value="Yes">Yes</ion-select-option>
          <ion-select-option value="No">No</ion-select-option>
        </ion-select>
        <ion-select
          class="ion-margin-top"
          interface="popover"
          label="Consumption"
          label-placement="floating"
          placeholder="Consumption"
          fill="outline"
          v-model="newRowLoanParticulars.purpose_consumtion"
        >
          <ion-select-option value="Yes">Yes</ion-select-option>
          <ion-select-option value="No">No</ion-select-option>
        </ion-select>
        <ion-select
          class="ion-margin-top"
          aria-label="Education"
          interface="popover"
          label="Education"
          label-placement="floating"
          placeholder="Education"
          fill="outline"
          v-model="newRowLoanParticulars.education"
        >
          <ion-select-option value="Yes">Yes</ion-select-option>
          <ion-select-option value="No">No</ion-select-option>
        </ion-select>
        <ion-select
          class="ion-margin-top"
          interface="popover"
          label="Marriage"
          label-placement="floating"
          placeholder="Marriage"
          fill="outline"
          v-model="newRowLoanParticulars.marriage"
        >
          <ion-select-option value="Yes">Yes</ion-select-option>
          <ion-select-option value="No">No</ion-select-option>
        </ion-select>
        <ion-select
          class="ion-margin-top"
          interface="popover"
          label="Others"
          label-placement="floating"
          placeholder="Others"
          fill="outline"
          v-model="newRowLoanParticulars.others"
        >
          <ion-select-option value="Yes">Yes</ion-select-option>
          <ion-select-option value="No">No</ion-select-option>
        </ion-select>
      </ion-card-content>
    </ion-card>
    <ion-card>
      <ion-card-content>
        <ion-input
          placeholder="Outstanding Amount"
          fill="outline"
           type="number"
          label="Outstanding Amount"
          label-placement="floating"
        ></ion-input>
      </ion-card-content>
      <ion-button
          class="ion-margin"
          expand="block"
          color="primary"
          @click="UpdateLoanParticularData()"
          ><ion-icon
            class="ion-margin-end"
            name="add-circle"
            slot="icon-only"
          ></ion-icon
          >Update Loan Particular Details</ion-button
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
    toastController
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
      try {
        this.triggerToastMessage("Updated LoanParticulars Details Successfully","custom_toast")
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
          this.loanparticularRows = [];
        } else {
          // Insert new row
          // this.GovtBenefitRows.push(row);
          console.log("LoanParticular updated data", row);
          await this.insertLoanParticular(row);
          this.loanparticularRows = [];
        }
      }
      } catch (error) {
        this.triggerToastMessage("Failed to Update LoanParticulars Details","danger")
        console.error("error in UpdateLoanParticularData function",error)
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
