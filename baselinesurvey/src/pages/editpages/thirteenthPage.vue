<template>
  <div>
    <ion-card>
      <ion-card-header class="ion-text-center" color="tertiary"
        ><strong
          >13.Availability of Drinking Water(Drinking Water requirement @
          5Litres per Day/Person)</strong
        ></ion-card-header
      >
    </ion-card>

    <ion-card>
      <ion-card-content>
        <ion-list>
          <ion-item
            v-for="item in availabledrinkingwaterdetails"
            :key="item.id"
            @click="selectAvailableDrinkingWater(item)"
          >
            {{ item.drinkingwater_item }}
            {{ item.drinkingwater_units }}
          </ion-item>
        </ion-list>

        <ion-select
          class="ion-margin-top"
          interface="popover"
          label="Drinking Water Item"
          label-placement="floating"
          placeholder="Drinking Water Item"
          fill="outline"
          v-model="newRowAvailableDrinkingWater.drinkingwater_item"
        >
          <ion-select-option value="Present availability of drinking water"
            >Present Availability of Drinking Water</ion-select-option
          >
        </ion-select>
        <ion-select
          class="ion-margin-top"
          interface="popover"
          label="Drinking Water Units"
          label-placement="floating"
          placeholder="Drinking Water Units"
          fill="outline"
          v-model="newRowAvailableDrinkingWater.drinkingwater_units"
        >
          <ion-select-option value="Liters/day">Litres/Day</ion-select-option>
          <ion-select-option value="No.of months in a year"
            >No.of months in a year</ion-select-option
          >
        </ion-select>
        <ion-input
          class="ion-margin-top"
          placeholder="Quantity"
          fill="outline"
          label="Quantity"
          label-placement="floating"
          v-model="newRowAvailableDrinkingWater.drinking_quantity"
        ></ion-input>
        <ion-select
          class="ion-margin-top"
          aria-label="Source of Drinking Water"
          interface="popover"
          label="Source of Drinking Water"
          label-placement="floating"
          placeholder=""
          fill="outline"
          v-model="newRowAvailableDrinkingWater.source_of_drinking_water"
        >
          <ion-select-option value="borewell">Borewell</ion-select-option>
          <ion-select-option value="tank">Tank</ion-select-option>
          <ion-select-option value="publictank">Public Tap</ion-select-option>
          <ion-select-option value="openwell">Open Well</ion-select-option>
          <ion-select-option value="canalwater">Canal Water</ion-select-option>
        </ion-select>
        <ion-button
          class="ion-margin-top"
          expand="block"
          color="primary"
          @click="UpdateAvailableDrinkingWaterData()"
          ><ion-icon
            class="ion-margin-end"
            name="add-circle"
            slot="icon-only"
          ></ion-icon
          >Update Available Drinking Water</ion-button
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
    availabledrinkingwaterdetails: Object,
  },
  data() {
    return {
      newRowAvailableDrinkingWater: {
        drinkingwater_item: "",
        headId: "",
        id: "",
        drinkingwater_units: "",
        drinking_quantity: "",
        source_of_drinking_water: "",
      },
      AvailableDrinkingWaterpRows: [],
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
    selectAvailableDrinkingWater(item) {
      this.newRowAvailableDrinkingWater.id = item.id;
      this.newRowAvailableDrinkingWater.headId = item.headId;
      this.newRowAvailableDrinkingWater.drinkingwater_item =
        item.drinkingwater_item;
      this.newRowAvailableDrinkingWater.drinkingwater_units =
        item.drinkingwater_units;
      this.newRowAvailableDrinkingWater.drinking_quantity =
        item.drinking_quantity;
      this.newRowAvailableDrinkingWater.source_of_drinking_water =
        item.source_of_drinking_water;
    },

    updateAvailableDrinkingWaterrows() {
      // Check if any field is not empty
      if (
        Object.values(this.newRowAvailableDrinkingWater).some((field) => {
          if (typeof field === "string") {
            return field.trim() !== "";
          } else if (Array.isArray(field)) {
            return field.length > 0;
          } else {
            return field !== null && field !== undefined;
          }
        })
      ) {
        this.AvailableDrinkingWaterpRows.push({
          ...this.newRowAvailableDrinkingWater,
        }); // Add a copy of newRow to rows
        this.clearAvailableDrinkingWaterFields(); // Clear the input fields
      }
    },
    clearAvailableDrinkingWaterFields() {
      this.newRowAvailableDrinkingWater = {
        drinkingwater_item: "",
        headId: "",
        id: "",
        drinking_quantity: "",
        drinkingwater_units: "",
        source_of_drinking_water: "",
      };
    },
    removeAvailableDrinkingWater(index) {
      this.AvailableDrinkingWaterpRows.splice(index, 1);
    },
    // migrate data updation
    async UpdateAvailableDrinkingWaterData() {
      this.updateAvailableDrinkingWaterrows();
      const newData = this.AvailableDrinkingWaterpRows.map((row) => ({
        ...row,
        headId: this.editedItem.id,
      }));

      for (const row of newData) {
        if (row.id) {
          // Update existing row
          console.log("AvailableDrinkingWater ", row);
          await this.updateAvailableDrinkingWater(row);
        } else {
          // Insert new row
          // this.GovtBenefitRows.push(row);
          console.log("AvailableDrinkingWater  data", row);
          await this.insertAvailableDrinkingWater(row);
        }
      }
    },
    async insertAvailableDrinkingWater(row) {
      try {
        console.log("&&&&&&&&&&&&&&&&&&&&&&", row);
        const response = await axios.post(
          "http://183.82.109.39:5000/api/insertdrinkingwater",
          {
            id: row.id,
            headId: row.headId,
            drinkingwater_item: row.drinkingwater_item,
            drinkingwater_units: row.drinkingwater_units,
            drinking_quantity: row.drinking_quantity,
            source_of_drinking_water: row.source_of_drinking_water,
          }
        );
        console.log("AvailableDrinkingWater inserted:", response);
      } catch (error) {
        console.error("Error inserting AvailableDrinkingWater row:", error);
      }
    },
    async updateAvailableDrinkingWater(row) {
      try {
        const response = await axios.put(
          `http://183.82.109.39:5000/api/updatedrinkingwater/${row.id}`,
          row
        );
        console.log("AvailableDrinkingWater Row updated:", response);
      } catch (error) {
        console.error("Error updating AvailableDrinkingWater row:", error);
      }
    },
  },
};
</script>
