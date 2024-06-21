<template>
  <ion-card>
    <ion-card-header color="tertiary" class="ion-text-center"
      ><strong
        >8.Use of Manure and Chemical Fertilizers(Previous Year)</strong
      ></ion-card-header
    >
  </ion-card>
  <ion-card>
    <ion-card-header color="tertiary"
      ><strong
        >8.1 Manures and Fertilizers used(in Tons)</strong
      ></ion-card-header
    >
  </ion-card>
  <ion-card>
    <ion-card-content>
      <ion-list>
        <ion-item
          v-for="item in manurechemicaldetails"
          :key="item.id"
          @click="selectGovtBenefit(item)"
        >
          {{ item.name_of_familymember }}
          {{ item.scheme_name }}
        </ion-item>
      </ion-list>
      <ion-select
        class="ion-margin-top"
        aria-label="Crops"
        interface="popover"
        label="Crops"
        label-placement="floating"
        placeholder="Select Crop Item"
        fill="outline"
      >
        <ion-select-option value="Paddy">Paddy</ion-select-option>
        <ion-select-option value="Meeze">Meeze</ion-select-option>
        <ion-select-option value="Jower">Jower</ion-select-option>
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
      <ion-input
        class="ion-margin-top"
        placeholder="Enter value in tons"
        fill="outline"
        label="Organic(Tons)"
        label-placement="floating"
      ></ion-input>
      <ion-input
        class="ion-margin-top"
        placeholder="Enter value in grams"
        fill="outline"
        label="Micro Nutrients(In Gms)"
        label-placement="floating"
      ></ion-input>
    </ion-card-content>
  </ion-card>
  <ion-card>
    <ion-card-header color="tertiary"
      ><strong>Chemical(Qtl)</strong></ion-card-header
    >
  </ion-card>
  <ion-card>
    <ion-card-content>
      <ion-input
        class="ion-margin-top"
        placeholder="N"
        fill="outline"
        label="N"
        label-placement="floating"
      ></ion-input>
      <ion-input
        class="ion-margin-top"
        placeholder="P"
        fill="outline"
        label="P"
        label-placement="floating"
      ></ion-input>
      <ion-input
        class="ion-margin-top"
        placeholder="K"
        fill="outline"
        label="K"
        label-placement="floating"
      ></ion-input>
      <ion-input
        class="ion-margin-top"
        placeholder="Enter cost in rupees"
        fill="outline"
        label="Cost in Rupees"
        label-placement="floating"
      ></ion-input>
    </ion-card-content>
  </ion-card>
  <ion-card>
    <ion-card-content>
      <ion-input
        class="ion-margin-top"
        placeholder="Total"
        fill="outline"
        label="Total"
        label-placement="floating"
      ></ion-input>
    </ion-card-content>
  </ion-card>
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
    manurechemicaldetails: Object,
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
          "http://183.82.109.39:5000/api/insertgovtbenefit",

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
          `http://183.82.109.39:5000/api/updategovtbenefit/${row.id}`,
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
