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
        <ion-radio-group
          value="havereceived"
          v-model="selectedOptionHaveReceived"
        >
          <ion-radio value="Yes" label-placement="fixed" class="ion-padding"
            >Yes</ion-radio
          >
          <ion-radio value="No" label-placement="fixed" class="ion-padding"
            >No</ion-radio
          >
        </ion-radio-group>

        <ion-text>Date And Time {{ selectedDateServeyorName.date }}</ion-text>
        <ion-datetime-button datetime="datetime"></ion-datetime-button>
        <ion-modal :keep-contents-mounted="true">
          <ion-datetime
            id="datetime"
            v-model="selectedDateServeyorName.date"
          ></ion-datetime>
        </ion-modal>

        <ion-input
          class="ion-margin-top"
          placeholder="Enter name of the surveyor"
          fill="outline"
          label="Name of the Surveyor"
          label-placement="floating"
          v-model="selectedDateServeyorName.serveyor_name"
        ></ion-input>
      </ion-card-content>
      <ion-button
        color="primary"
        class="ion-margin"
        expand="block"
        @click="
          saveData(), saveHaveReceivedData(), saveUpdateDateServeyouName()
        "
        ><ion-icon
          class="ion-margin-end"
          name="add-circle"
          slot="icon-only"
        ></ion-icon
        >Update Conclusion</ion-button
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
  IonDatetime,
  IonDatetimeButton,
  IonModal,
  IonText,
  IonIcon,
  toastController,
  IonItem,
} from "@ionic/vue";
import axios from "axios";
export default {
  props: {
    editedItem: Object,
    awarewatershedstatusdetails: Object,
    receivedtrainingwatershedstatusdetails: Object,
    dateserveyornamedetails: Object,
  },
  data() {
    return {
      selectedOption: null,
      selectedOptionHaveReceived: null,
      selectedDateServeyorName: null,
    };
  },
  created() {
    this.awarefunc();
    this.haveReceived();
  },
  watch: {
    dateserveyornamedetails: {
      immediate: true,
      handler(newVal) {
        // Ensure to make a deep copy of the received item
        this.selectedDateServeyorName = newVal ? { ...newVal } : null;
      },
    },
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
    IonText,
    IonIcon,
    toastController,
    IonItem,
  },

  methods: {
    awarefunc() {
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
        console.log(
          "*********************",
          this.awarewatershedstatusdetails[0]
        );
      }
    },
    haveReceived() {
      if (this.receivedtrainingwatershedstatusdetails.length > 0) {
        console.log(
          "$$$$$$$$$$",
          this.receivedtrainingwatershedstatusdetails.length
        );
        this.selectedOptionHaveReceived =
          this.receivedtrainingwatershedstatusdetails[0].status;
      } else {
        this.receivedtrainingwatershedstatusdetails[0] = [
          {
            status: this.selectedOptionHaveReceived,
            id: "",
            headId: this.editedItem.id,
          },
        ];
        console.log(
          "*********************",
          this.receivedtrainingwatershedstatusdetails[0]
        );
      }
    },
    async saveData() {
      try {
        const resp = await axios.get(
          `http://183.82.109.39:5000/api/awarewatershedstatusdetails`,
          {
            params: { id: this.editedItem.id },
          }
        );
        console.log(
          "__________________id",
          this.editedItem.id,
          "&&&&&&&&&&",
          resp.data
        );
        if (resp.data.length === 0) {
          // If status is null or undefined, perform an insert (POST request)
          const response = await axios.post(
            `http://183.82.109.39:5000/api/insertawarewatershedstatus`,
            {
              status: this.selectedOption,
              headId: this.editedItem.id,
              // Add other properties if necessary for insert
            }
          );
          if (response.statusText === "Created") {
            // If response status is 200 (OK), trigger success toast
            this.triggerToastMessage(
              "Inserted awarewatershedstatus Details Successfully",
              "custom_toast"
            );
          }
        } else {
          console.log(
            "__________________update id",
            this.editedItem.id,
            "&&&&&&&&&&",
            resp.data
          );
          // If status is not null, perform an update (PUT request)
          this.awarewatershedstatusdetails[0].status = this.selectedOption; // Update responseData locally
          const responseOne = await axios.put(
            `http://183.82.109.39:5000/api/updateawarewatershedstatus/${this.editedItem.id}`,
            {
              id: this.editedItem.id,
              status: this.selectedOption,
              headId: this.editedItem.id,
              // Add other properties if necessary for insert
            }
          );
          if (responseOne.statusText === "OK") {
            // If response status is 200 (OK), trigger success toast
            this.triggerToastMessage(
              "Updated Aware Watershed Status Details Successfully",
              "custom_toast"
            );
          }
        }
        console.log("Data saved successfully");
      } catch (error) {
        this.triggerToastMessage(
          "Failed to Update Aware Watershed Status Details",
          "danger"
        );
        console.error("Error saving data:", error);
      }
    },
    async saveHaveReceivedData() {
      try {
        const resp = await axios.get(
          `http://183.82.109.39:5000/api/receivedtrainingwatershedstatusdetails`,
          {
            params: { id: this.editedItem.id },
          }
        );
        console.log(
          "__________________id",
          this.editedItem.id,
          "&&&&&&&&&&",
          resp.data
        );
        if (resp.data.length === 0) {
          // If status is null or undefined, perform an insert (POST request)
          const responseTwo = await axios.post(
            `http://183.82.109.39:5000/api/insertreceivedtrainingwatershedstatus`,
            {
              status: this.selectedOptionHaveReceived,
              headId: this.editedItem.id,
              // Add other properties if necessary for insert
            }
          );
          if (responseTwo.statusText === "Created") {
            // If response status is 200 (OK), trigger success toast
            this.triggerToastMessage(
              "Inserted receivedtrainingwatershedstatus Details Successfully",
              "custom_toast"
            );
          }
        } else {
          console.log(
            "__________________update id",
            this.editedItem.id,
            "&&&&&&&&&&",
            resp.data
          );
          // If status is not null, perform an update (PUT request)
          this.receivedtrainingwatershedstatusdetails[0].status =
            this.selectedOptionHaveReceived; // Update responseData locally
          const responseThree = await axios.put(
            `http://183.82.109.39:5000/api/updatereceivedtrainingwatershedstatus/${this.editedItem.id}`,
            {
              id: this.editedItem.id,
              status: this.selectedOptionHaveReceived,
              headId: this.editedItem.id,
              // Add other properties if necessary for insert
            }
          );
          if (responseThree.statusText === "OK") {
            // If response status is 200 (OK), trigger success toast
            this.triggerToastMessage(
              "Updated Received Training Watershed status Details Successfully",
              "custom_toast"
            );
          }
        }
        console.log("Data saved successfully");
      } catch (error) {
        this.triggerToastMessage(
          "Failed to Update Traning Watershed of any Scheme Details",
          "danger"
        );
        console.error("Error saving data:", error);
      }
    },
    async saveUpdateDateServeyouName() {
      const resp = await axios.get(
        `http://183.82.109.39:5000/api/dateserveyornamedetails`,
        {
          params: { id: this.editedItem.id },
        }
      );
      if (resp.data.length === 0) {
        this.insertDateServename();
      } else {
        this.updateDateServeName();
      }
    },
    async insertDateServename() {
      try {
        console.log("&&&&&&&&&&&&&&&&&&&&&&");
        const responseFour = await axios.post(
          "http://183.82.109.39:5000/api/insertdateserveyor",
          {
            id: this.selectedDateServeyorName.id,
            headId: this.editedItem.id,
            date: this.selectedDateServeyorName.date,
            serveyor_name: this.selectedDateServeyorName.serveyor_name,
          }
        );
        if (responseFour.statusText === "Created") {
          // If response status is 200 (OK), trigger success toast
          this.triggerToastMessage(
            "Inserted Date Serveyor Details Successfully",
            "custom_toast"
          );
        }
        console.log("insertdateserveyor inserted:", responseFour);
      } catch (error) {
        this.triggerToastMessage(
          "Failed to Insert Date Serveyor of any Scheme Details",
          "danger"
        );
        console.error("Error inserting insertdateserveyor row:", error);
      }
    },
    async updateDateServeName() {
      try {
        const responseFive = await axios.put(
          `http://183.82.109.39:5000/api/updatedateserveyor/${this.editedItem.id}`,
          {
            id: this.editedItem.id,
            headId: this.editedItem.headId,
            date: this.selectedDateServeyorName.date,
            serveyor_name: this.selectedDateServeyorName.serveyor_name,
          }
        );
        if (responseFive.statusText === "OK") {
          // If response status is 200 (OK), trigger success toast
          this.triggerToastMessage(
            "Updated dateserveyor Details Successfully",
            "custom_toast"
          );
        }
        console.log("updatedateserveyor Row updated:", responseFive);
      } catch (error) {
        this.triggerToastMessage(
          "Failed to Update Date Serveyor of any Scheme Details",
          "danger"
        );
        console.error("Error updating updatedateserveyor row:", error);
      }
    },
    async triggerToastMessage(message, color) {
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
