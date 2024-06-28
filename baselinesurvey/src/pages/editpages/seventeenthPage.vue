<template>
  <div>
    <ion-card>
      <ion-card-header color="tertiary"
        ><strong>17.Fodder and Feed Availability</strong></ion-card-header
      >
    </ion-card>
    <ion-card>
      <ion-card-content>
        <ion-list>
          <ion-item
            v-for="item in fodderfeeddetails"
            :key="item.id"
            @click="selectFodderFeed(item)"
          >
            {{ item.fodderfeed_item }}
            {{ item.fodderfeed_area_quantity }}
          </ion-item>
        </ion-list>
        <ion-select
          class="ion-margin-top"
          interface="popover"
          label="Item"
          label-placement="floating"
          placeholder="Select Item"
          fill="outline"
          v-model="newFodderFeed.fodderfeed_item"
        >
          <ion-select-option value="ExistingAreaUnderFodder"
            >Existing Area Under Fodder</ion-select-option
          >
          <ion-select-option value="GreenFodder"
            >Green Fodder</ion-select-option
          >
          <ion-select-option value="DryFodder">Dry Fodder</ion-select-option>
          <ion-select-option value="Concentrates"
            >Concentrates</ion-select-option
          >
        </ion-select>
        <ion-select
          class="ion-margin-top"
          interface="popover"
          label="Unit"
          label-placement="floating"
          placeholder="Select Unit"
          fill="outline"
          v-model="newFodderFeed.fodderfeed_units"
        >
          <ion-select-option value="ExistingAreaUnderFodder"
            >Ha</ion-select-option
          >
          <ion-select-option value="GreenFodder">Tons/Year</ion-select-option>
          <ion-select-option value="DryFodder">Kg/day</ion-select-option>
        </ion-select>
        <ion-input
          class="ion-margin-top"
          placeholder="Enter Area/Quantity"
          fill="outline"
          label="Area/Quantity"
          label-placement="floating"
          v-model="newFodderFeed.fodderfeed_area_quantity"
        ></ion-input>
        <ion-input
          class="ion-margin-top"
          placeholder="Enter value of Production Tons/year"
          fill="outline"
          label="Production(Tonnes/Year)"
          label-placement="floating"
          v-model="newFodderFeed.fodderfeed_production"
        ></ion-input>
        <ion-button
          class="ion-margin-top"
          expand="block"
          color="primary"
          @click="UpdateFodderFeedData"
          ><ion-icon
            class="ion-margin-end"
            name="add-circle"
            slot="icon-only"
          ></ion-icon
          >Update Fodder Feed</ion-button
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
    fodderfeeddetails: Object,
  },
  data() {
    return {
      newFodderFeed: {
        fodderfeed_item: "",
        headId: "",
        id: "",
        fodderfeed_units: "",
        fodderfeed_area_quantity: "",
        fodderfeed_production: "",
      },
      FodderFeedRows: [],
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
    selectFodderFeed(item) {
      this.newFodderFeed.id = item.id;
      this.newFodderFeed.headId = item.headId;
      this.newFodderFeed.fodderfeed_item = item.fodderfeed_item;
      this.newFodderFeed.fodderfeed_units = item.fodderfeed_units;
      this.newFodderFeed.fodderfeed_area_quantity =
        item.fodderfeed_area_quantity;
      this.newFodderFeed.fodderfeed_production = item.fodderfeed_production;
    },

    updateFodderFeedrows() {
      // Check if any field is not empty
      if (
        Object.values(this.newFodderFeed).some((field) => {
          if (typeof field === "string") {
            return field.trim() !== "";
          } else if (Array.isArray(field)) {
            return field.length > 0;
          } else {
            return field !== null && field !== undefined;
          }
        })
      ) {
        this.FodderFeedRows.push({
          ...this.newFodderFeed,
        }); // Add a copy of newRow to rows
        this.clearFodderFeed(); // Clear the input fields
      }
    },
    clearFodderFeed() {
      this.newFodderFeed = {
        fodderfeed_item: "",
        headId: "",
        id: "",
        fodderfeed_units: "",
        fodderfeed_area_quantity: "",
        fodderfeed_production: "",
      };
    },
    removeFodderFeed(index) {
      this.FodderFeedRows.splice(index, 1);
    },
    // migrate data updation
    async UpdateFodderFeedData() {
      this.updateFodderFeedrows();
      const newData = this.FodderFeedRows.map((row) => ({
        ...row,
        headId: this.editedItem.id,
      }));

      for (const row of newData) {
        if (row.id) {
          // Update existing row
          console.log("FodderFeed ", row);
          await this.updateFodderFeed(row);
        } else {
          // Insert new row
          // this.GovtBenefitRows.push(row);
          console.log("FodderFeed  data", row);
          await this.insertFodderFeed(row);
        }
      }
    },
    async insertFodderFeed(row) {
      try {
        console.log("&&&&&&&&&&&&&&&&&&&&&&", row);
        const response = await axios.post(
          "http://183.82.109.39:5000/api/insertfodderfeed",
          {
            id: row.id,
            headId: row.headId,
            fodderfeed_item: row.fodderfeed_item,
            fodderfeed_units: row.fodderfeed_units,
            fodderfeed_area_quantity: row.fodderfeed_area_quantity,
            fodderfeed_production: row.fodderfeed_production,
          }
        );
        console.log("FodderFeed inserted:", response);
      } catch (error) {
        console.error("Error inserting FodderFeed row:", error);
      }
    },
    async updateFodderFeed(row) {
      try {
        const response = await axios.put(
          `http://183.82.109.39:5000/api/updatefodderfeed/${row.id}`,
          row
        );
        console.log("FodderFeed Row updated:", response);
      } catch (error) {
        console.error("Error updating FodderFeed row:", error);
      }
    },
  },
};
</script>
