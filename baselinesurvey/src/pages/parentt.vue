<template>
  <div>
    <ion-page>
      <ion-text> abc </ion-text>
    </ion-page>
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
} from "@ionic/vue";
export default {
  components: {},
  methods: {
    childMethod() {
      console.log("child method execution");
    },
    childMethodOne() {
      console.log("child one method execution");
    },
  },
};
</script>
