<template><ion-card>
    <ion-card-header color="tertiary"><strong>21.Participation in Community Programs</strong></ion-card-header>
</ion-card>
<ion-card>
    <ion-card-content>
      <ion-select
                      class="ion-margin-top"
                      interface="popover"
                      label="Name of the Community Program"
                      label-placement="floating"
                      placeholder="Select Name of the Community Program"
                      fill="outline"
                      v-model = "participationinCommunityProgramsRows.nameofTheCommunityProgram"
                    >
                      <ion-select-option value="Awareness Programs">Awareness Programs</ion-select-option>
                      <ion-select-option value="Trainings">Trainings</ion-select-option>
                      <ion-select-option value="Exposure Visits">Exposure Visits</ion-select-option>
                      <ion-select-option value="Inter-State Field Visits">Inter-State Field Visits</ion-select-option>
                      </ion-select>
                      <ion-select
                      class="ion-margin-top"
                      interface="popover"
                      label="Select mark the appropriate"
                      label-placement="floating"
                      placeholder="Select mark the appropriate"
                      fill="outline"
                      v-model = "participationinCommunityProgramsRows.markTheAppropriate"
                    >
                      <ion-select-option value="Increase in Knowledge">Increase in Knowledge</ion-select-option>
                      <ion-select-option value="Capacity to Execute">Capacity to Execute</ion-select-option>
                      <ion-select-option value="Decision Making">Decision Making</ion-select-option>
                      <ion-select-option value="Project Managemen">Project Management</ion-select-option>
                      </ion-select>
                      <ion-radio-group v-model="participationinCommunityProgramsRows.awarenessprograms">
                    <ion-radio
                      value="Yes"
                      label-placement="fixed"
                      class="ion-padding"
                      >Yes</ion-radio
                    >
                    <ion-radio
                      value="No"
                      label-placement="fixed"
                      class="ion-padding"
                      >No</ion-radio
                    >
                  </ion-radio-group>
                </ion-card-content>
</ion-card>
<ion-button
              class="ion-margin"
              expand="block"
              @click="addParticipationRows()"
              color="primary"
              ><ion-icon
                class="ion-margin-end"
                name="add-circle"
                slot="icon-only"
              ></ion-icon
              >Add Community Programs</ion-button
            >
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
} from "@ionic/vue";
import axios from "axios";
export default{
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
  },
  data(){
    return{
      nameofTheCommunityProgram:"",
      markTheAppropriate:"",
      awarenessprograms:"",
      participationinCommunityProgramsRows:{
        nameofTheCommunityProgram:"",
        markTheAppropriate:"",
        awarenessprograms:"",
      },
      participationinCommunityProgramsRowsData:[]
    }
  },
  methods : {
    async communityProgramsData(){
      try {
           await axios.post("http://localhost:5000/api/bulkinsertionprogram",this.participationinCommunityProgramsRowsData
      )
      } catch (error) {
        console.error("error in communityProgramsData function",error)
      }
    },
    addParticipationRows(){
      this.participationinCommunityProgramsRowsData.push({...this.participationinCommunityProgramsRows})
      console.log("%%%%%%%%%%%%%%%%DATA%%%%%%%%%%%%%",this.participationinCommunityProgramsRowsData)
      this.clearParticipationRows()
    },
    clearParticipationRows(){
      this.participationinCommunityProgramsRows = {
        nameofTheCommunityProgram:"",
        markTheAppropriate:"",
        awarenessprograms:"",
      }
    },
  }
}
</script>
<style>
ion-card {
  border-radius: 8px;
  box-shadow: 1px 1px 6px rgb(96, 96, 161);
}
</style>