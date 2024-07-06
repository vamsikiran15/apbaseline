<template>
  <div>
    <ion-card>
      <ion-card-header class="ion-text-center" color="tertiary"
        ><strong>9.Pest and Disease Control Measures</strong></ion-card-header
      >
    </ion-card>
    <ion-card>
      <ion-card-header color="tertiary"
        ><strong>Crop Measures</strong></ion-card-header
      >
    </ion-card>
    <ion-card>
      <ion-card-content>
        <ion-list>
          <ion-item
            v-for="item in pestdiseasedetails"
            :key="item.id"
            @click="selectPestDisease(item)"
          >
            {{ item.crops }}
            {{ item.name_of_the_pest_disease }}
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
          v-model="newRowPestDisease.crops"
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
          <ion-select-option value="Other">Other</ion-select-option>
        </ion-select>
        <ion-input
          class="ion-margin-top"
          placeholder="Enter name of the pest/disease"
          fill="outline"
          label="Name of the Pest/Disease"
          label-placement="floating"
          v-model="newRowPestDisease.name_of_the_pest_disease"
        ></ion-input>
        <ion-input
          class="ion-margin-top"
          placeholder="Biological"
          fill="outline"
          label="Biological"
          label-placement="floating"
          v-model="newRowPestDisease.control_measures_biological"
        ></ion-input>
        <ion-input
          class="ion-margin-top"
          placeholder="Enter chemical"
          fill="outline"
          label="Chemical"
          label-placement="floating"
          v-model="newRowPestDisease.control_measures_chemical"
        ></ion-input>
        <ion-input
          class="ion-margin-top"
          placeholder="others(Name them)"
          fill="outline"
          label="Others(Name Them)"
          label-placement="floating"
          v-model="newRowPestDisease.control_measures_others"
        ></ion-input>
      </ion-card-content>
    </ion-card>
    <ion-card>
      <ion-card-header color="tertiary"
        ><strong>Amount Spent Towards</strong>
      </ion-card-header>
    </ion-card>
    <ion-card>
      <ion-card-content>
        <ion-input
          class="ion-margin-top"
          placeholder="Enter material"
          fill="outline"
          label="Material"
          label-placement="floating"
          v-model="newRowPestDisease.amount_spent_material"
        ></ion-input>
        <ion-input
          class="ion-margin-top"
          placeholder="Enter Wages"
          fill="outline"
          label="Wages"
          label-placement="floating"
          v-model="newRowPestDisease.amount_spent_wages"
        ></ion-input>
        <ion-button
          class="ion-margin-top"
          expand="block"
          color="primary"
          @click="UpdatePestDiseaseData()"
          ><ion-icon
            class="ion-margin-end"
            name="add-circle"
            slot="icon-only"
          ></ion-icon
          >Update Pest/Disease Details</ion-button
        >
        <!-- <ion-input
          class="ion-margin-top"
          placeholder="Total material"
          fill="outline"
          label="Total Material"
          label-placement="floating"
        ></ion-input>
        <ion-input
          class="ion-margin-top"
          placeholder="Total wages"
          fill="outline"
          label="Total Wages"
          label-placement="floating"
        ></ion-input> -->
      </ion-card-content>
    </ion-card>
    <!-- <ion-card>
      <ion-card-content>
        <ion-input
            class="ion-margin-top"
            placeholder="Grand Total"
            fill="outline"
            label="Grand Total"
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
  IonButton,
} from "@ionic/vue";
import axios from "axios";
export default {
  props: {
    editedItem: Object,
    pestdiseasedetails: Object,
  },
  data() {
    return {
      newRowPestDisease: {
        crops: "",
        headId: "",
        id: "",
        name_of_the_pest_disease: "",
        control_measures_biological: "",
        control_measures_chemical: "",
        control_measures_others: "",
        amount_spent_material: "",
        amount_spent_wages: "",
      },
      pestDiseaseRows: [],
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
    selectPestDisease(item) {
      this.newRowPestDisease.id = item.id;
      this.newRowPestDisease.headId = item.headId;
      this.newRowPestDisease.crops = item.crops;
      this.newRowPestDisease.name_of_the_pest_disease =
        item.name_of_the_pest_disease;
      this.newRowPestDisease.control_measures_biological =
        item.control_measures_biological;
      this.newRowPestDisease.control_measures_chemical =
        item.control_measures_chemical;
      this.newRowPestDisease.control_measures_others =
        item.control_measures_others;
      this.newRowPestDisease.amount_spent_material = item.amount_spent_material;
      this.newRowPestDisease.amount_spent_wages = item.amount_spent_wages;
    },
    updatePestDiseaserows() {
      // Check if any field is not empty
      if (
        Object.values(this.newRowPestDisease).some((field) => {
          if (typeof field === "string") {
            return field.trim() !== "";
          } else if (Array.isArray(field)) {
            return field.length > 0;
          } else {
            return field !== null && field !== undefined;
          }
        })
      ) {
        this.pestDiseaseRows.push({ ...this.newRowPestDisease }); // Add a copy of newRow to rows
        this.clearPestDiseaseFields(); // Clear the input fields
      }
    },
    clearPestDiseaseFields() {
      this.newRowPestDisease = {
        crops: "",
        headId: "",
        id: "",
        name_of_the_pest_disease: "",
        control_measures_biological: "",
        control_measures_chemical: "",
        control_measures_others: "",
        amount_spent_material: "",
        amount_spent_wages: "",
      };
    },
    removePestDisease(index) {
      this.pestDiseaseRows.splice(index, 1);
    },
    // migrate data updation
    async UpdatePestDiseaseData() {
      this.updatePestDiseaserows();
      const newData = this.pestDiseaseRows.map((row) => ({
        ...row,
        headId: this.editedItem.id,
      }));

      for (const row of newData) {
        if (row.id) {
          // Update existing row
          console.log("pest disease ", row);
          await this.updatePestDisease(row);
          this.pestDiseaseRows = [];
        } else {
          // Insert new row
          // this.GovtBenefitRows.push(row);
          console.log("pest disease updated data", row);
          await this.insertPestDisease(row);
          this.pestDiseaseRows = [];
        }
      }
    },
    async insertPestDisease(row) {
      try {
        console.log("&&&&&&&&&&&&&&&&&&&&&&", row);
        const response = await axios.post(
          "http://183.82.109.39:5000/api/insertpestdisease",
          {
            id: row.id,
            headId: row.headId,
            crops: row.crops,
            name_of_the_pest_disease: row.name_of_the_pest_disease,
            control_measures_biological: row.control_measures_biological,
            control_measures_chemical: row.control_measures_chemical,
            control_measures_others: row.control_measures_others,
            amount_spent_material: row.amount_spent_material,
            amount_spent_wages: row.amount_spent_wages,
          }
        );
        console.log("pest disease inserted:", response);
      } catch (error) {
        console.error("Error inserting pest disease row:", error);
      }
    },
    async updatePestDisease(row) {
      try {
        const response = await axios.put(
          `http://183.82.109.39:5000/api/updatepestdisease/${row.id}`,
          row
        );
        console.log("pest disease Row updated:", response);
      } catch (error) {
        console.error("Error updating pest disease row:", error);
      }
    },
  },
};
</script>
