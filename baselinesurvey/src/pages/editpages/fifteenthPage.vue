<template>
  <div>
    <ion-card>
      <ion-card-header color="tertiary"
        ><strong>15.Agriculture Implements</strong></ion-card-header
      >
    </ion-card>
    <ion-card>
      <ion-card-content>
        <ion-list>
          <ion-item
            v-for="item in agricultureimplementsdetails"
            :key="item.id"
            @click="selectAgriImplements(item)"
          >
            {{ item.implements }}
            {{ item.no_of_implements }}
          </ion-item>
        </ion-list>
        <ion-select
          class="ion-margin-top"
          interface="popover"
          label="Implements"
          label-placement="floating"
          placeholder="Select Implement"
          fill="outline"
          v-model="newAgriImplements.implements"
        >
          <ion-select-option value="tractor">Tractor</ion-select-option>
          <ion-select-option value="SprayerManualPower"
            >Sprayer-Manual/Power</ion-select-option
          >
          <ion-select-option value="CultivatorsHarrows"
            >Cultivators/Harrows</ion-select-option
          >
          <ion-select-option value="SeedDrill">Seed Drill</ion-select-option>
          <ion-select-option value="Tresher">Tresher</ion-select-option>
          <ion-select-option value="Ploughs">Ploughs</ion-select-option>
          <ion-select-option value="Sickles">Sickles</ion-select-option>
          <ion-select-option value="CrowBar">Crow Bar</ion-select-option>
          <ion-select-option value="BullockCar">Bullock Cart</ion-select-option>
          <ion-select-option value="others">Others</ion-select-option>
        </ion-select>
        <ion-select
          class="ion-margin-top"
          interface="popover"
          label="Number of implement"
          label-placement="floating"
          placeholder="Select number of implement"
          fill="outline"
          v-model="newAgriImplements.no_of_implements"
        >
          <ion-select-option value="1">1</ion-select-option>
          <ion-select-option value="2">2</ion-select-option>
          <ion-select-option value="3">3</ion-select-option>
          <ion-select-option value="4">4</ion-select-option>
          <ion-select-option value="5">5</ion-select-option>
        </ion-select>
        <ion-select
          class="ion-margin-top"
          interface="popover"
          label="Owned/Hired"
          label-placement="floating"
          placeholder="Select owned/hired"
          fill="outline"
          v-model="newAgriImplements.implements_ownerd_hired"
        >
          <ion-select-option value="Owned">Owned</ion-select-option>
          <ion-select-option value="Hired">Hired</ion-select-option>
        </ion-select>
        <ion-button
          class="ion-margin-top"
          expand="block"
          color="primary"
          @click="UpdateAgriImplementsData()"
          ><ion-icon
            class="ion-margin-end"
            name="add-circle"
            slot="icon-only"
          ></ion-icon
          >Update Agriculture Implements</ion-button
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
    agricultureimplementsdetails: Object,
  },
  data() {
    return {
      newAgriImplements: {
        implements: "",
        headId: "",
        id: "",
        no_of_implements: "",
        implements_ownerd_hired: "",
      },
      AgriImplementsRows: [],
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
    selectAgriImplements(item) {
      this.newAgriImplements.id = item.id;
      this.newAgriImplements.headId = item.headId;
      this.newAgriImplements.implements = item.implements;
      this.newAgriImplements.no_of_implements = item.no_of_implements;
      this.newAgriImplements.implements_ownerd_hired =
        item.implements_ownerd_hired;
    },

    updateAgriImplementsrows() {
      // Check if any field is not empty
      if (
        Object.values(this.newAgriImplements).some((field) => {
          if (typeof field === "string") {
            return field.trim() !== "";
          } else if (Array.isArray(field)) {
            return field.length > 0;
          } else {
            return field !== null && field !== undefined;
          }
        })
      ) {
        this.AgriImplementsRows.push({
          ...this.newAgriImplements,
        }); // Add a copy of newRow to rows
        this.clearAgriImplements(); // Clear the input fields
      }
    },
    clearAgriImplements() {
      this.newAgriImplements = {
        implements: "",
        headId: "",
        id: "",
        no_of_implements: "",
        implements_ownerd_hired: "",
      };
    },
    removeAgriImplements(index) {
      this.AgriImplementsRows.splice(index, 1);
    },
    // migrate data updation
    async UpdateAgriImplementsData() {
      this.updateAgriImplementsrows();
      const newData = this.AgriImplementsRows.map((row) => ({
        ...row,
        headId: this.editedItem.id,
      }));

      for (const row of newData) {
        if (row.id) {
          // Update existing row
          console.log("AgriImplements ", row);
          await this.updateAgriImplements(row);
        } else {
          // Insert new row
          // this.GovtBenefitRows.push(row);
          console.log("AgriImplements  data", row);
          await this.insertAgriImplements(row);
        }
      }
    },
    async insertAgriImplements(row) {
      try {
        console.log("&&&&&&&&&&&&&&&&&&&&&&", row);
        const response = await axios.post(
          "http://183.82.109.39:5000/api/insertagricultureimplements",
          {
            id: row.id,
            headId: row.headId,
            implements: row.implements,
            no_of_implements: row.no_of_implements,
            implements_ownerd_hired: row.implements_ownerd_hired,
          }
        );
        console.log("AgriImplements inserted:", response);
      } catch (error) {
        console.error("Error inserting AgriImplements row:", error);
      }
    },
    async updateAgriImplements(row) {
      try {
        const response = await axios.put(
          `http://183.82.109.39:5000/api/updateagricultureimplements/${row.id}`,
          row
        );
        console.log("AgriImplements Row updated:", response);
      } catch (error) {
        console.error("Error updating AgriImplements row:", error);
      }
    },
  },
};
</script>
