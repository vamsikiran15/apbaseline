<template>
  <div>
    <ion-card class="ion-margin-top">
      <ion-card-header class="ion-text-center" color="tertiary"
        ><strong
          >14.Source and Quality of Water(3ft = 1 metre)</strong
        ></ion-card-header
      >
    </ion-card>
    <ion-card>
      <ion-card-subtitle class="ion-margin-top ion-text-center" color="tertiary"
        >Water Source</ion-card-subtitle
      >
      <ion-card-content>
        <ion-list>
          <ion-item
            v-for="item in sourcequalitywaterdetails"
            :key="item.id"
            @click="selectSourceQualityWater(item)"
          >
            {{ item.water_source }}
            {{ item.driedupwell_or_borewell_nos }}
          </ion-item>
        </ion-list>
        <ion-select
          class="ion-margin-top"
          aria-label="Source of Drinking Water"
          interface="popover"
          label="Water Source"
          label-placement="floating"
          placeholder="select water source"
          fill="outline"
          v-model="newRowSourceQualityWater.water_source"
        >
          <ion-select-option value="Open Well">Open Well</ion-select-option>
          <ion-select-option value="Borewell">Borewell</ion-select-option>
          <ion-select-option value="Tank">Tank</ion-select-option>
          <ion-select-option value="Drip(Specify Crop)"
            >Drip(Specify Crop)</ion-select-option
          >
          <ion-select-option value="Others">Others</ion-select-option>
        </ion-select>
        <ion-input
          class="ion-margin-top"
          placeholder="Enter Number"
          fill="outline"
          label="Dried up well/Borewell(in Numbers)"
          label-placement="floating"
          v-model="newRowSourceQualityWater.driedupwell_or_borewell_nos"
        ></ion-input>
        <ion-input
          class="ion-margin-top"
          placeholder="Enter Number"
          fill="outline"
          label="Functioning well/Borewell(in Numbers)"
          label-placement="floating"
          v-model="newRowSourceQualityWater.functioning_well_or_borewell_nos"
        ></ion-input>
        <ion-input
          class="ion-margin-top"
          placeholder="Enter Metres"
          fill="outline"
          label="present Approximate Water Level(in Metres)"
          label-placement="floating"
          v-model="newRowSourceQualityWater.present_water_level"
        ></ion-input>
        <ion-input
          class="ion-margin-top"
          placeholder="Enter Litres"
          fill="outline"
          label="Yield from the Borewell(Litres/Minute)"
          label-placement="floating"
          v-model="newRowSourceQualityWater.yield_from_borewell"
        ></ion-input>
        <ion-card-subtitle
          class="ion-margin-top ion-text-center"
          color="tertiary"
          >Irrigated Area(in Ha)</ion-card-subtitle
        >
      </ion-card-content>
      <ion-card-header color="tertiary"
        ><strong>Agriculture</strong></ion-card-header
      >
      <ion-card-content>
        <ion-input
          class="ion-margin-top"
          placeholder="Enter units in Ha"
          fill="outline"
          label="Kharif"
          label-placement="floating"
          v-model="newRowSourceQualityWater.irrigated_agri_kharif"
        ></ion-input>
        <ion-input
          class="ion-margin-top"
          placeholder="Enter units in Ha"
          fill="outline"
          label="Rabi"
          label-placement="floating"
          v-model="newRowSourceQualityWater.irrigated_agri_rabhi"
        ></ion-input>
        <ion-input
          class="ion-margin-top"
          placeholder="Enter units in Ha"
          fill="outline"
          label="Summer"
          label-placement="floating"
          v-model="newRowSourceQualityWater.irrigated_agri_summer"
        ></ion-input>
        <ion-input
          class="ion-margin-top"
          placeholder="Enter other crops"
          fill="outline"
          label="Other Crops(Specify)"
          label-placement="floating"
          v-model="newRowSourceQualityWater.other_corps"
        ></ion-input>
        <ion-input
          class="ion-margin-top"
          placeholder="Horticulture"
          fill="outline"
          label="Horticulture"
          label-placement="floating"
          v-model="newRowSourceQualityWater.horticulture"
        ></ion-input>
        <ion-select
          class="ion-margin-top"
          aria-label="Water Quality"
          interface="popover"
          label="Water Quality"
          label-placement="floating"
          placeholder="select Water Quality"
          fill="outline"
          v-model="newRowSourceQualityWater.water_quality"
        >
          <ion-select-option value="Polluted">Polluted</ion-select-option>
          <ion-select-option value="Non-Polluted"
            >Non-Polluted</ion-select-option
          >
        </ion-select>
        <ion-button
          class="ion-margin-top"
          expand="block"
          color="primary"
          @click="UpdateSourceQualityWaterData()"
          ><ion-icon
            class="ion-margin-end"
            name="add-circle"
            slot="icon-only"
          ></ion-icon
          >Update Source and Quality Water</ion-button
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
    sourcequalitywaterdetails: Object,
  },
  data() {
    return {
      newRowSourceQualityWater: {
        water_source: "",
        headId: "",
        id: "",
        driedupwell_or_borewell_nos: "",
        functioning_well_or_borewell_nos: "",
        present_water_level: "",
        yield_from_borewell: "",
        irrigated_agri_kharif: "",
        irrigated_agri_rabhi: "",
        irrigated_agri_summer: "",
        other_corps: "",
        horticulture: "",
        water_quality: "",
      },
      SourceQualityWaterRows: [],
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
    selectSourceQualityWater(item) {
      this.newRowSourceQualityWater.id = item.id;
      this.newRowSourceQualityWater.headId = item.headId;
      this.newRowSourceQualityWater.water_source = item.water_source;
      this.newRowSourceQualityWater.driedupwell_or_borewell_nos =
        item.driedupwell_or_borewell_nos;
      this.newRowSourceQualityWater.functioning_well_or_borewell_nos =
        item.functioning_well_or_borewell_nos;
      this.newRowSourceQualityWater.present_water_level =
        item.present_water_level;
      this.newRowSourceQualityWater.yield_from_borewell =
        item.yield_from_borewell;
      this.newRowSourceQualityWater.irrigated_agri_kharif =
        item.irrigated_agri_kharif;
      this.newRowSourceQualityWater.irrigated_agri_rabhi =
        item.irrigated_agri_rabhi;
      this.newRowSourceQualityWater.irrigated_agri_summer =
        item.irrigated_agri_summer;
      this.newRowSourceQualityWater.other_corps = item.other_corps;
      this.newRowSourceQualityWater.horticulture = item.horticulture;
      this.newRowSourceQualityWater.water_quality = item.water_quality;
    },

    updateSourceQualityWaterrows() {
      // Check if any field is not empty
      if (
        Object.values(this.newRowSourceQualityWater).some((field) => {
          if (typeof field === "string") {
            return field.trim() !== "";
          } else if (Array.isArray(field)) {
            return field.length > 0;
          } else {
            return field !== null && field !== undefined;
          }
        })
      ) {
        this.SourceQualityWaterRows.push({
          ...this.newRowSourceQualityWater,
        }); // Add a copy of newRow to rows
        this.clearSourceQualityWater(); // Clear the input fields
      }
    },
    clearSourceQualityWater() {
      this.newRowSourceQualityWater = {
        water_source: "",
        headId: "",
        id: "",
        driedupwell_or_borewell_nos: "",
        functioning_well_or_borewell_nos: "",
        present_water_level: "",
        yield_from_borewell: "",
        irrigated_agri_kharif: "",
        irrigated_agri_rabhi: "",
        irrigated_agri_summer: "",
        other_corps: "",
        horticulture: "",
        water_quality: "",
      };
    },
    removeSourceQualityWater(index) {
      this.SourceQualityWaterRows.splice(index, 1);
    },
    // migrate data updation
    async UpdateSourceQualityWaterData() {
      this.updateSourceQualityWaterrows();
      const newData = this.SourceQualityWaterRows.map((row) => ({
        ...row,
        headId: this.editedItem.id,
      }));

      for (const row of newData) {
        if (row.id) {
          // Update existing row
          console.log("SourceQualityWater ", row);
          await this.updateSourceQualityWater(row);
          this.SourceQualityWaterRows = [];
        } else {
          // Insert new row
          // this.GovtBenefitRows.push(row);
          console.log("AvaiSourceQualityWaterlableDrinkingWater  data", row);
          await this.insertSourceQualityWater(row);
          this.SourceQualityWaterRows = [];
        }
      }
    },
    async insertSourceQualityWater(row) {
      try {
        console.log("&&&&&&&&&&&&&&&&&&&&&&", row);
        const response = await axios.post(
          "http://183.82.109.39:5000/api/insertsourcequalitywater",
          {
            id: row.id,
            headId: row.headId,
            water_source: row.water_source,
            driedupwell_or_borewell_nos: row.driedupwell_or_borewell_nos,
            functioning_well_or_borewell_nos:
              row.functioning_well_or_borewell_nos,
            present_water_level: row.present_water_level,
            yield_from_borewell: row.yield_from_borewell,
            irrigated_agri_kharif: row.irrigated_agri_kharif,
            irrigated_agri_rabhi: row.irrigated_agri_rabhi,
            irrigated_agri_summer: row.irrigated_agri_summer,
            other_corps: row.other_corps,
            horticulture: row.horticulture,
            water_quality: row.water_quality,
          }
        );
        console.log("SourceQualityWater inserted:", response);
      } catch (error) {
        console.error("Error inserting SourceQualityWater row:", error);
      }
    },
    async updateSourceQualityWater(row) {
      try {
        const response = await axios.put(
          `http://183.82.109.39:5000/api/updatesourcequalitywater/${row.id}`,
          row
        );
        console.log("SourceQualityWater Row updated:", response);
      } catch (error) {
        console.error("Error updating SourceQualityWater row:", error);
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
</style>
