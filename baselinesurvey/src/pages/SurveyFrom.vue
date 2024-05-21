<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>AP BASELINE SURVEY</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <div v-for="step in totalSteps" :key="step">
        <!-- Intermediate steps -->
        <div v-if="currentStep === step">
          <!-- <h2>Step {{ step }}: Details</h2> -->
          <div v-if="step === 1">
            <ion-card>
              <ion-card-header>
                <ion-card-title>1 General Information</ion-card-title>
              </ion-card-header>

              <ion-card-content>
                <ion-select
                  aria-label="District"
                  interface="popover"
                  label="Select District"
                  label-placement="floating"
                  placeholder="Select District"
                  fill="outline"
                >
                  <ion-select-option value="apples"
                    >District 1</ion-select-option
                  >
                  <ion-select-option value="oranges"
                    >District 2</ion-select-option
                  >
                  <ion-select-option value="bananas"
                    >District 3</ion-select-option
                  >
                </ion-select>
              </ion-card-content>
            </ion-card>
            <ion-row>
              <ion-col>
                <ion-text color="tertiary">
                  <h3>1 General Information</h3>
                </ion-text>
                <ion-select
                  aria-label="District"
                  interface="popover"
                  label="Select District"
                  label-placement="floating"
                  placeholder="Select District"
                  fill="outline"
                >
                  <ion-select-option value="apples"
                    >District 1</ion-select-option
                  >
                  <ion-select-option value="oranges"
                    >District 2</ion-select-option
                  >
                  <ion-select-option value="bananas"
                    >District 3</ion-select-option
                  >
                </ion-select>
                <ion-select
                  class="ion-margin-top"
                  aria-label="Wcc"
                  interface="popover"
                  label="Select WCC"
                  label-placement="floating"
                  placeholder="Select WCC"
                  fill="outline"
                >
                  <ion-select-option value="apples">Wcc1</ion-select-option>
                  <ion-select-option value="oranges">Wcc2</ion-select-option>
                  <ion-select-option value="bananas">Wcc3</ion-select-option>
                </ion-select>
                <ion-select
                  class="ion-margin-top"
                  aria-label="Wcc"
                  interface="popover"
                  label="Select WCC"
                  label-placement="floating"
                  placeholder="Select WCC"
                  fill="outline"
                >
                  <ion-select-option value="apples">Wcc1</ion-select-option>
                  <ion-select-option value="oranges">Wcc2</ion-select-option>
                  <ion-select-option value="bananas">Wcc3</ion-select-option>
                </ion-select>
                <ion-input
                  class="ion-margin-top"
                  v-model="head_of_the_family"
                  label="Name of the Household"
                  label-placement="floating"
                  fill="outline"
                  placeholder="Name of the Household"
                ></ion-input>
              </ion-col>
            </ion-row>
          </div>

          <div v-if="step === 2">dsafds</div>

          <div v-if="step === 3"></div>
        </div>
      </div>

      <div>
        <ion-button
          color="tertiary"
          v-if="currentStep !== 1"
          @click="prevStep()"
          >Previous</ion-button
        >
        <ion-button
          class="nextButton"
          color="tertiary"
          v-if="currentStep !== totalSteps"
          @click="nextStep()"
          >Next</ion-button
        >
        <ion-button
          v-else-if="currentStep === totalSteps"
          class="nextButton"
          color="tertiary"
          @click="submitForm"
          >Submit</ion-button
        >
      </div>
    </ion-content>
  </ion-page>
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
} from "@ionic/vue";
export default {
  data() {
    return {
      currentStep: 1,
      totalSteps: 15, // Update this to the total number of steps

      rows: [],
      head_of_the_family: "",
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
  },
  methods: {
    nextStep() {
      if (this.currentStep < this.totalSteps) {
        this.currentStep++;
      }
    },
    prevStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    },
  },
};
</script>
