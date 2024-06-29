<template>
  <div>
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
            @click="selectManureChemical(item)"
          >
            {{ item.crops }}
            {{ item.organic }}
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
          v-model="newRowManureChemical.crops"
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
          placeholder="Enter value in tons"
          fill="outline"
          label="Organic(Tons)"
          label-placement="floating"
          v-model="newRowManureChemical.organic"
        ></ion-input>
        <ion-input
          class="ion-margin-top"
          placeholder="Enter value in grams"
          fill="outline"
          label="Micro Nutrients(In Gms)"
          label-placement="floating"
          v-model="newRowManureChemical.micro_nutrients"
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
          v-model="newRowManureChemical.chemical_N"
        ></ion-input>
        <ion-input
          class="ion-margin-top"
          placeholder="P"
          fill="outline"
          label="P"
          label-placement="floating"
          v-model="newRowManureChemical.chemical_P"
        ></ion-input>
        <ion-input
          class="ion-margin-top"
          placeholder="K"
          fill="outline"
          label="K"
          label-placement="floating"
          v-model="newRowManureChemical.chemical_K"
        ></ion-input>
        <ion-input
          class="ion-margin-top"
          placeholder="Enter cost in rupees"
          fill="outline"
          label="Cost in Rupees"
          label-placement="floating"
          v-model="newRowManureChemical.cost"
        ></ion-input>
        <ion-button
          class="ion-margin-top"
          expand="block"
          color="primary"
          @click="UpdateManureChemicalData()"
          ><ion-icon
            class="ion-margin-end"
            name="add-circle"
            slot="icon-only"
          ></ion-icon
          >Add Manure Chemical Details</ion-button
        >
      </ion-card-content>
    </ion-card>

    <!-- <ion-card>
    <ion-card-content>
      <ion-input
        class="ion-margin-top"
        placeholder="Total"
        fill="outline"
        label="Total"
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
    manurechemicaldetails: Object,
  },
  data() {
    return {
      newRowManureChemical: {
        crops: "",
        headId: "",
        id: "",
        organic: "",
        micro_nutrients: "",
        chemical_N: "",
        chemical_P: "",
        chemical_K: "",
        cost: "",
      },
      manureChemicalRows: [],
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
    selectManureChemical(item) {
      this.newRowManureChemical.id = item.id;
      this.newRowManureChemical.headId = item.headId;
      this.newRowManureChemical.crops = item.crops;
      this.newRowManureChemical.organic = item.organic;
      this.newRowManureChemical.micro_nutrients = item.micro_nutrients;
      this.newRowManureChemical.chemical_N = item.chemical_N;
      this.newRowManureChemical.chemical_P = item.chemical_P;
      this.newRowManureChemical.chemical_K = item.chemical_K;
      this.newRowManureChemical.cost = item.cost;
    },
    updateManureChemicalrows() {
      // Check if any field is not empty
      if (
        Object.values(this.newRowManureChemical).some((field) => {
          if (typeof field === "string") {
            return field.trim() !== "";
          } else if (Array.isArray(field)) {
            return field.length > 0;
          } else {
            return field !== null && field !== undefined;
          }
        })
      ) {
        this.manureChemicalRows.push({ ...this.newRowManureChemical }); // Add a copy of newRow to rows
        this.clearManureChemicalFields(); // Clear the input fields
      }
    },
    clearManureChemicalFields() {
      this.newRowManureChemical = {
        crops: "",
        headId: "",
        id: "",
        organic: "",
        micro_nutrients: "",
        chemical_N: "",
        chemical_P: "",
        chemical_K: "",
        cost: "",
      };
    },
    removeManureChemical(index) {
      this.manureChemicalRows.splice(index, 1);
    },
    // migrate data updation
    async UpdateManureChemicalData() {
      this.updateManureChemicalrows();
      const newData = this.manureChemicalRows.map((row) => ({
        ...row,
        headId: this.editedItem.id,
      }));

      for (const row of newData) {
        if (row.id) {
          // Update existing row
          console.log("manureChemical ", row);
          await this.updateManureChemical(row);
        } else {
          // Insert new row
          // this.GovtBenefitRows.push(row);
          console.log("manureChemical updated data", row);
          await this.insertManureChemical(row);
        }
      }
    },
    async insertManureChemical(row) {
      try {
        console.log("&&&&&&&&&&&&&&&&&&&&&&", row);
        const response = await axios.post(
          "http://183.82.109.39:5000/api/insertmanurechemical",
          {
            id: row.id,
            headId: row.headId,
            crops: row.crops,
            organic: row.organic,
            micro_nutrients: row.micro_nutrients,
            chemical_N: row.chemical_N,
            chemical_P: row.chemical_P,
            chemical_K: row.chemical_K,
            cost: row.cost,
          }
        );
        console.log("manureChemical inserted:", response);
      } catch (error) {
        console.error("Error inserting manureChemical row:", error);
      }
    },
    async updateManureChemical(row) {
      try {
        const response = await axios.put(
          `http://183.82.109.39:5000/api/updatemanurechemical/${row.id}`,
          row
        );
        console.log("manureChemical Row updated:", response);
      } catch (error) {
        console.error("Error updating manureChemical row:", error);
      }
    },
  },
};
</script>
