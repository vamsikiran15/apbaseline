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
        <ion-select
          class="ion-margin-top"
          interface="popover"
          label="Particulars"
          label-placement="floating"
          placeholder="Agriculture"
          fill="outline"
          v-model="loanParticularsRows.particulars"
        >
          <ion-select-option value="Paddy">Amount Borrowed</ion-select-option>
          <ion-select-option value="maize">Amount Repaid</ion-select-option>
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
          v-model="loanParticularsRows.bank"
        ></ion-input>
        <ion-input
          class="ion-margin-top"
          placeholder="Enter money lender"
          fill="outline"
          label="Money Lender"
          label-placement="floating"
          v-model="loanParticularsRows.moneyLender"
        ></ion-input>
        <ion-input
          class="ion-margin-top"
          placeholder="Enter Dealer"
          fill="outline"
          label="Dealer"
          label-placement="floating"
          v-model="loanParticularsRows.dealer"
        ></ion-input>
        <ion-input
          class="ion-margin-top"
          placeholder="Enter fellow farmer"
          fill="outline"
          label="Fellow Farmer"
          label-placement="floating"
          v-model="loanParticularsRows.fellowfarmer"
        ></ion-input>
        <ion-input
          class="ion-margin-top"
          placeholder="Enter shg"
          fill="outline"
          label="SHG"
          label-placement="floating"
          v-model="loanParticularsRows.shg"
        ></ion-input>
        <ion-input
          class="ion-margin-top"
          placeholder="Others(specify)"
          fill="outline"
          label="Others(specify)"
          label-placement="floating"
          v-model="loanParticularsRows.others"
        ></ion-input>
        <ion-input
          class="ion-margin-top"
          placeholder="Total"
          fill="outline"
          label="Total"
          label-placement="floating"
          v-model="loanParticularsRows.total"
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
          v-model="loanParticularsRows.agriculture"
        >
          <ion-select-option value="Paddy">Paddy</ion-select-option>
          <ion-select-option value="maize">maize</ion-select-option>
          <ion-select-option value="jowar">jowar</ion-select-option>
          <ion-select-option value="Cotton">Cotton</ion-select-option>
          <ion-select-option value="Mirchi">Mirchi</ion-select-option>
          <ion-select-option value="Groundnut">Groundnut</ion-select-option>
          <ion-select-option value="Red Gram">Red Gram</ion-select-option>
          <ion-select-option value="Black Gram">Black Gram</ion-select-option>
          <ion-select-option value="Green Gram">Green Gram</ion-select-option>
          <ion-select-option value="Mango">Mango</ion-select-option>
          <ion-select-option value="Sapota">Sapota</ion-select-option>
          <ion-select-option value="Chinny">Chinny</ion-select-option>
          <ion-select-option value="Neem">Neem</ion-select-option>
          <ion-select-option value="Cashew">Cashew</ion-select-option>
          <ion-select-option value="Vegetables">Vegetables</ion-select-option>
          <ion-select-option value="Sunflower">Sunflower</ion-select-option>
        </ion-select>
        <ion-select
          class="ion-margin-top"
          interface="popover"
          label="Consumption"
          label-placement="floating"
          placeholder="Consumption"
          fill="outline"
          v-model="loanParticularsRows.consumption"
        >
          <ion-select-option value="Paddy">Paddy</ion-select-option>
          <ion-select-option value="maize">maize</ion-select-option>
          <ion-select-option value="jowar">jowar</ion-select-option>
          <ion-select-option value="Cotton">Cotton</ion-select-option>
          <ion-select-option value="Mirchi">Mirchi</ion-select-option>
          <ion-select-option value="Groundnut">Groundnut</ion-select-option>
          <ion-select-option value="Red Gram">Red Gram</ion-select-option>
          <ion-select-option value="Black Gram">Black Gram</ion-select-option>
          <ion-select-option value="Green Gram">Green Gram</ion-select-option>
          <ion-select-option value="Mango">Mango</ion-select-option>
          <ion-select-option value="Sapota">Sapota</ion-select-option>
          <ion-select-option value="Chinny">Chinny</ion-select-option>
          <ion-select-option value="Neem">Neem</ion-select-option>
          <ion-select-option value="Cashew">Cashew</ion-select-option>
          <ion-select-option value="Vegetables">Vegetables</ion-select-option>
          <ion-select-option value="Sunflower">Sunflower</ion-select-option>
        </ion-select>
        <ion-select
          class="ion-margin-top"
          aria-label="Education"
          interface="popover"
          label="Education"
          label-placement="floating"
          placeholder="Select Education"
          fill="outline"
          v-model="loanParticularsRows.education"
        >
          <ion-select-option value="illiterate">Illiterate</ion-select-option>
          <ion-select-option value="primary">Primary</ion-select-option>
          <ion-select-option value="upperprimary"
            >Upper Primary</ion-select-option
          >
          <ion-select-option value="highschool">High School</ion-select-option>
          <ion-select-option value="interdiploma"
            >Inter/Diploma</ion-select-option
          >
          <ion-select-option value="degree">Degree</ion-select-option>
          <ion-select-option value="pg">PG</ion-select-option>
          <ion-select-option value="others">Others</ion-select-option>
        </ion-select>
        <ion-select
          class="ion-margin-top"
          interface="popover"
          label="Marriage"
          label-placement="floating"
          placeholder="Marriage"
          fill="outline"
          v-model="loanParticularsRows.marriage"
        >
          <ion-select-option value="married">Married</ion-select-option>
          <ion-select-option value="unmarried">Unmarried</ion-select-option>
        </ion-select>
        <ion-select
          class="ion-margin-top"
          interface="popover"
          label="Others"
          label-placement="floating"
          placeholder="Others"
          fill="outline"
          v-model="loanParticularsRows.others2"
        >
          <ion-select-option value="Paddy">Paddy</ion-select-option>
          <ion-select-option value="maize">maize</ion-select-option>
          <ion-select-option value="jowar">jowar</ion-select-option>
          <ion-select-option value="Cotton">Cotton</ion-select-option>
          <ion-select-option value="Mirchi">Mirchi</ion-select-option>
          <ion-select-option value="Groundnut">Groundnut</ion-select-option>
          <ion-select-option value="Red Gram">Red Gram</ion-select-option>
          <ion-select-option value="Black Gram">Black Gram</ion-select-option>
          <ion-select-option value="Green Gram">Green Gram</ion-select-option>
          <ion-select-option value="Mango">Mango</ion-select-option>
          <ion-select-option value="Sapota">Sapota</ion-select-option>
          <ion-select-option value="Chinny">Chinny</ion-select-option>
          <ion-select-option value="Neem">Neem</ion-select-option>
          <ion-select-option value="Cashew">Cashew</ion-select-option>
          <ion-select-option value="Vegetables">Vegetables</ion-select-option>
          <ion-select-option value="Sunflower">Sunflower</ion-select-option>
        </ion-select>
      </ion-card-content>
    </ion-card>
    <ion-card>
      <ion-card-content>
        <ion-input
          placeholder="Outstanding Amount"
          fill="outline"
          label="Outstanding Amount"
          label-placement="floating"
          v-model="loanParticularsRows.outstandingAmount"
        ></ion-input>
      </ion-card-content>
    </ion-card>
    <ion-button
      class="ion-margin"
      expand="block"
      @click="addLoanParticularsRows()"
      color="primary"
      ><ion-icon
        class="ion-margin-end"
        name="add-circle"
        slot="icon-only"
      ></ion-icon
      >Add Loan Particulars Details</ion-button
    >
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
} from "@ionic/vue";
import axios from "axios";

export default {
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
  },

  data() {
    return {
      particulars: "",
      bank: "",
      moneyLender: "",
      dealer: "",
      fellowfarmer: "",
      shg: "",
      others: "",
      total: "",
      agriculture: "",
      consumption: "",
      education: "",
      marriage: "",
      others2: "",
      loanParticularsRows: {
        particulars: "",
        bank: "",
        moneyLender: "",
        dealer: "",
        fellowfarmer: "",
        shg: "",
        others: "",
        total: "",
        agriculture: "",
        consumption: "",
        education: "",
        marriage: "",
        others2: "",
      },
      loanParticularsRowsData: [],
    };
  },

  methods: {
    async loanParticularsData(id) {
      try {
        const data = {id:id,rows:  this.loanParticularsRowsData}
        await axios.post(
          "http://localhost:5000/api/bulkinsertionloanparticulars",data
        
        );
      } catch (error) {
        console.error("error in loanParticularsData function", error);
      }
    },
    addLoanParticularsRows() {
      this.loanParticularsRowsData.push({ ...this.loanParticularsRows });
      console.log("&&&&&&&&&&&DATA&&&&&&&&&&", this.loanParticularsRowsData);
      this.clearLoanParticularsRows();
    },
    clearLoanParticularsRows() {
      this.loanParticularsRows = {
        particulars: "",
        bank: "",
        moneyLender: "",
        dealer: "",
        fellowfarmer: "",
        shg: "",
        others: "",
        total: "",
        agriculture: "",
        consumption: "",
        education: "",
        marriage: "",
        others2: "",
      };
    },
  },
};
</script>
<style>
ion-card {
  border-radius: 8px;
  box-shadow: 1px 1px 6px rgb(96, 96, 161);
}
</style>
