<template>
  <div>
    <ion-card>
      <ion-card-header class="ion-text-center" color="tertiary"
        ><strong>25.Soil,Land & Water Conservation</strong></ion-card-header
      >
    </ion-card>
    <ion-card>
      <ion-card-content>
        25.Are you aware of watershed development programs/soil,land & water
        Conservation?
        <ion-radio-group value="awarenessprograms" v-model="selectedOption">
          <ion-radio value="Yes" label-placement="fixed" class="ion-padding"
            >Yes</ion-radio
          >
          <ion-radio value="No" label-placement="fixed" class="ion-padding"
            >No</ion-radio
          >
        </ion-radio-group>

        <ion-row>
          26.Have you received any training in watershed development programs
          soil,land & water conservation
        </ion-row>
        <ion-radio-group value="awarenessprograms">
          <ion-radio value="Yes" label-placement="fixed" class="ion-padding"
            >Yes</ion-radio
          >
          <ion-radio value="No" label-placement="fixed" class="ion-padding"
            >No</ion-radio
          >
        </ion-radio-group>

        <ion-text>Date And Time</ion-text>
        <ion-datetime-button datetime="datetime"></ion-datetime-button>
        <ion-modal :keep-contents-mounted="true">
          <ion-datetime id="datetime"></ion-datetime>
        </ion-modal>

        <ion-input
          class="ion-margin-top"
          placeholder="Enter name of the surveyor"
          fill="outline"
          label="Name of the Surveyor"
          label-placement="floating"
        ></ion-input>
        <ion-button class="ion-margin-top" expand="block" @click="saveData"
          ><ion-icon
            class="ion-margin-end"
            name="add-circle"
            slot="icon-only"
          ></ion-icon
          >Update Awareness</ion-button
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
  IonDatetime,
  IonDatetimeButton,
  IonModal,
} from "@ionic/vue";
import axios from "axios";
export default {
  props: {
    editedItem: Object,
    awarewatershedstatusdetails: Object,
    receivedtrainingwatershedstatusdetails: Object,
  },
  data() {
    return {
      selectedOption: null,
    };
  },
  created() {
    if (this.awarewatershedstatusdetails.length > 0) {
      console.log("$$$$$$$$$$", this.awarewatershedstatusdetails.length);
      this.selectedOption = this.awarewatershedstatusdetails[0].status;
    } else {
      this.awarewatershedstatusdetails[0] = [
        {
          status: this.selectedOption,
          id: "",
          headId: this.editedItem.id,
        },
      ];
      console.log("*********************", this.awarewatershedstatusdetails[0]);
    }
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
    IonDatetime,
    IonDatetimeButton,
    IonModal,
  },

  methods: {
    async saveData() {
      try {
        if (!this.awarewatershedstatusdetails[0].status) {
          // If status is null or undefined, perform an insert (POST request)
          await axios.post(
            `http://localhost:5000/api/insertawarewatershedstatus`,
            {
              status: this.selectedOption,
              headId: this.editedItem.id,
              // Add other properties if necessary for insert
            }
          );
        } else {
          // If status is not null, perform an update (PUT request)
          this.awarewatershedstatusdetails[0].status = this.selectedOption; // Update responseData locally
          await axios.put(
            `http://localhost:5000/api/updateawarewatershedstatus/${this.awarewatershedstatusdetails[0].id}`,
            this.awarewatershedstatusdetails[0]
          );
        }
        console.log("Data saved successfully");
      } catch (error) {
        console.error("Error saving data:", error);
      }
    },

    // async insertAwareWatershedStatus(row) {
    //   try {
    //     console.log("&&&&&&&&&&&&&&&&&&&&&&", row);
    //     const response = await axios.post(
    //       "http://localhost:5000/api/insertawarewatershedstatus",
    //       {
    //         id: row.id,
    //         headId: row.headId,
    //         status: row.status,
    //       }
    //     );
    //     console.log("AwareWatershedStatus inserted:", response);
    //   } catch (error) {
    //     console.error("Error inserting AwareWatershedStatus row:", error);
    //   }
    // },
    // async updateAwareWatershedStatus(row) {
    //   try {
    //     const response = await axios.put(
    //       `http://localhost:5000/api/updateawarewatershedstatus/${row.id}`,
    //       row
    //     );
    //     console.log("AwareWatershedStatus Row updated:", response);
    //   } catch (error) {
    //     console.error("Error updating AwareWatershedStatus row:", error);
    //   }
    // },
  },
};
</script>
