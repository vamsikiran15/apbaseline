<template>
  <div>
    <ion-card>
      <ion-card-header color="tertiary"
        ><strong
          >21.Participation in Community Programs</strong
        ></ion-card-header
      >
    </ion-card>
    <ion-card>
      <ion-card-content>
        <ion-list>
          <ion-item
            v-for="item in participationcommunityprogramdetails"
            :key="item.id"
            @click="selectParticipationCommunityProgram(item)"
          >
            {{ item.name_of_the_community_program }}
            {{ item.tick_mark_appropriate }}
          </ion-item>
        </ion-list>
        <ion-select
          class="ion-margin-top"
          interface="popover"
          label="Name of the Community Program"
          label-placement="floating"
          placeholder="Select Name of the Community Program"
          fill="outline"
          v-model="
            newParticipationCommunityProgram.name_of_the_community_program
          "
        >
          <ion-select-option value=""
            >Select Community Program</ion-select-option
          >
          <ion-select-option value="AwarenessProgram"
            >Awareness Programs</ion-select-option
          >
          <ion-select-option value="Trainings">Trainings</ion-select-option>
          <ion-select-option value="ExposureVisits"
            >Exposure Visits</ion-select-option
          >
          <ion-select-option value="InterStateFieldVisits"
            >Inter-State Field Visits</ion-select-option
          >
        </ion-select>
        <ion-select
          class="ion-margin-top"
          interface="popover"
          label="Select mark the appropriate"
          label-placement="floating"
          placeholder="Select mark the appropriate"
          fill="outline"
          v-model="newParticipationCommunityProgram.tick_mark_appropriate"
        >
          <ion-select-option value="AwarenessProgram"
            >Increase in Knowledge</ion-select-option
          >
          <ion-select-option value="Trainings"
            >Capacity to Execute</ion-select-option
          >
          <ion-select-option value="ExposureVisits"
            >Decision Making</ion-select-option
          >
          <ion-select-option value="InterStateFieldVisits"
            >Project Management</ion-select-option
          >
        </ion-select>
        <ion-radio-group
          value="awarenessprograms"
          v-model="newParticipationCommunityProgram.yes_or_no"
        >
          <ion-radio value="Yes" label-placement="fixed" class="ion-padding"
            >Yes</ion-radio
          >
          <ion-radio value="No" label-placement="fixed" class="ion-padding"
            >No</ion-radio
          >
        </ion-radio-group>
      </ion-card-content>
      <ion-button
        class="ion-margin"
        expand="block"
        color="primary"
        @click="UpdateParticipationCommunityProgramData"
        ><ion-icon
          class="ion-margin-end"
          name="add-circle"
          slot="icon-only"
        ></ion-icon
        >Update Participation Community Program</ion-button
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
  toastController,
  IonItem,
  IonIcon,
} from "@ionic/vue";
import axios from "axios";
export default {
  props: {
    editedItem: Object,
    participationcommunityprogramdetails: Object,
  },
  data() {
    return {
      newParticipationCommunityProgram: {
        name_of_the_community_program: "",
        headId: "",
        id: "",
        tick_mark_appropriate: "",
        yes_or_no: "",
      },
      ParticipationCommunityProgramRows: [],
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
    toastController,
    IonItem,
    IonIcon,
  },
  methods: {
    selectParticipationCommunityProgram(item) {
      this.newParticipationCommunityProgram.id = item.id;
      this.newParticipationCommunityProgram.headId = item.headId;
      this.newParticipationCommunityProgram.name_of_the_community_program =
        item.name_of_the_community_program;
      this.newParticipationCommunityProgram.tick_mark_appropriate =
        item.tick_mark_appropriate;
      this.newParticipationCommunityProgram.yes_or_no = item.yes_or_no;
    },

    updateParticipationCommunityProgramrows() {
      // Check if any field is not empty
      if (
        Object.values(this.newParticipationCommunityProgram).some((field) => {
          if (typeof field === "string") {
            return field.trim() !== "";
          } else if (Array.isArray(field)) {
            return field.length > 0;
          } else {
            return field !== null && field !== undefined;
          }
        })
      ) {
        this.ParticipationCommunityProgramRows.push({
          ...this.newParticipationCommunityProgram,
        }); // Add a copy of newRow to rows
        this.clearParticipationCommunityProgram(); // Clear the input fields
      }
    },
    clearParticipationCommunityProgram() {
      this.newParticipationCommunityProgram = {
        name_of_the_community_program: "",
        headId: "",
        id: "",
        tick_mark_appropriate: "",
        yes_or_no: "",
      };
    },
    removeParticipationCommunityProgram(index) {
      this.ParticipationCommunityProgramRows.splice(index, 1);
    },
    // migrate data updation
    async UpdateParticipationCommunityProgramData() {
      try {
        this.triggerToastMessage(
          "Updated Participation in Community Programs Details Successfully",
          "custom_toast"
        );
        this.updateParticipationCommunityProgramrows();
        const newData = this.ParticipationCommunityProgramRows.map((row) => ({
          ...row,
          headId: this.editedItem.id,
        }));

        for (const row of newData) {
          if (row.id) {
            // Update existing row
            console.log("ParticipationCommunityProgram ", row);
            await this.updateParticipationCommunityProgram(row);
            this.ParticipationCommunityProgramRows = [];
          } else {
            // Insert new row
            // this.GovtBenefitRows.push(row);
            console.log("ParticipationCommunityProgram  data", row);
            await this.insertParticipationCommunityProgram(row);
            this.ParticipationCommunityProgramRows = [];
          }
        }
      } catch (error) {
        console.error(
          "error in UpdateParticipationCommunityProgramData function",
          error
        );
      }
    },
    async insertParticipationCommunityProgram(row) {
      try {
        console.log("&&&&&&&&&&&&&&&&&&&&&&", row);
        const response = await axios.post(
          "http://183.82.109.39:5000/api/insertparticipationcommunityprogram",
          {
            id: row.id,
            headId: row.headId,
            name_of_the_community_program: row.name_of_the_community_program,
            tick_mark_appropriate: row.tick_mark_appropriate,
            yes_or_no: row.yes_or_no,
          }
        );
        this.participationcommunityprogramdetails.push(response.data.data);
        if (response.statusText === "OK") {
          // If response status is 200 (OK), trigger success toast
          this.triggerToastMessage(
            "Inserted ParticipationCommunityProgram Details Successfully",
            "custom_toast"
          );
        }
        console.log("ParticipationCommunityProgram inserted:", response);
      } catch (error) {
        this.triggerToastMessage(
          "Failed to Insert Participation in Community Programs Details",
          "danger"
        );
        console.error(
          "Error inserting ParticipationCommunityProgram row:",
          error
        );
      }
    },
    async updateParticipationCommunityProgram(row) {
      try {
        const response = await axios.put(
          `http://183.82.109.39:5000/api/updateparticipationcommunityprogram/${row.id}`,
          row
        );
        if (response.statusText === "OK") {
          // If response status is 200 (OK), trigger success toast
          this.triggerToastMessage(
            "Updated ParticipationCommunityProgram Details Successfully",
            "custom_toast"
          );
        }
        console.log("ParticipationCommunityProgram Row updated:", response);
      } catch (error) {
        this.triggerToastMessage(
          "Failed to Update Participation in Community Programs Details",
          "danger"
        );
        console.error(
          "Error updating ParticipationCommunityProgram row:",
          error
        );
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
