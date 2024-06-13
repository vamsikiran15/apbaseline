<template>
<ion-card>
    <ion-card-header color="tertiary">5.Migration Status</ion-card-header>
    <ion-card-content>
      <ion-input
            class="ion-margin-top"
            placeholder="Enter name of the person migrating"
            fill="outline"
            label="Name of the Person Migrating "
            label-placement="floating"
          ></ion-input>
          <ion-select
            class="ion-margin-top"
            aria-label="Gender"
            interface="popover"
            label="Gender"
            label-placement="floating"
            placeholder="Gender"
            fill="outline"
          >
            <ion-select-option value="male">Male</ion-select-option>
            <ion-select-option value="female">Female</ion-select-option>
          </ion-select>
          <ion-input
            class="ion-margin-top"
            placeholder="Enter No of the Days"
            fill="outline"
            label="No of the Days Migrating per Year "
            label-placement="floating"
          ></ion-input>
          <ion-select
            class="ion-margin-top"
            aria-label="Reasons for Migrating"
            interface="popover"
            label="Reasons for Migrating"
            label-placement="floating"
            placeholder="Enter reasons for migrating"
            fill="outline"
          >
            <ion-select-option value="distress">Distress</ion-select-option>
            <ion-select-option value="betterlivelihoodoptions">Better Livelihood options</ion-select-option>
            <ion-select-option value="seasonal">Seasonal</ion-select-option>
          </ion-select>
          <ion-select
            class="ion-margin-top"
            aria-label="Place for Migrating"
            interface="popover"
            label="Place of Migration"
            label-placement="floating"
            placeholder="Enter place for migrating"
            fill="outline"
          >
            <ion-select-option value="withindistrict">Within District</ion-select-option>
            <ion-select-option value="outsidedistrict">Outside District</ion-select-option>
            <ion-select-option value="outsidestate">Outside State</ion-select-option>
          </ion-select>
          <ion-select
            class="ion-margin-top"
            aria-label="Occupation for Migrating"
            interface="popover"
            label="Occupation during Migration"
            label-placement="floating"
            placeholder="Enter occupation for migrating"
            fill="outline"
          >
            <ion-select-option value="agri">Agri</ion-select-option>
            <ion-select-option value="industriallabour">Industrial Labour</ion-select-option>
            <ion-select-option value="otherlivelihoods">Other Livelihoods</ion-select-option>
          </ion-select>
          <ion-input
            class="ion-margin-top"
            type="read-only"
            fill="outline"
            label="Income from Such Occupation "
            label-placement="floating"
          ></ion-input>
    </ion-card-content>
  </ion-card>
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
export default{
    components:{
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
    }
}
</script>
