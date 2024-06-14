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
                    >
                      <ion-select-option value="AwarenessProgram">Awareness Programs</ion-select-option>
                      <ion-select-option value="Trainings">Trainings</ion-select-option>
                      <ion-select-option value="ExposureVisits">Exposure Visits</ion-select-option>
                      <ion-select-option value="InterStateFieldVisits">Inter-State Field Visits</ion-select-option>
                      </ion-select>
                      <ion-select
                      class="ion-margin-top"
                      interface="popover"
                      label="Select mark the appropriate"
                      label-placement="floating"
                      placeholder="Select mark the appropriate"
                      fill="outline"
                    >
                      <ion-select-option value="AwarenessProgram">Increase in Knowledge</ion-select-option>
                      <ion-select-option value="Trainings">Capacity to Execute</ion-select-option>
                      <ion-select-option value="ExposureVisits">Decision Making</ion-select-option>
                      <ion-select-option value="InterStateFieldVisits">Project Management</ion-select-option>
                      </ion-select>
                      <ion-radio-group value="awarenessprograms">
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
</template>
<script>
export default{}
</script>