<template>
  <div>
    <ion-page>
      <ion-text>
        <parentt ref="parentComp" />
        <ion-button @click="callChildFromParent"> click </ion-button>
        <ion-button @click="callChildOneFromParent"> click </ion-button>
      </ion-text>
    </ion-page>
  </div>
</template>
<script>
import parentt from "../pages/parentt.vue";
import { ref } from "vue";
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
  components: {
    parentt,
  },
  methods: {
    callChildFromParent() {
      this.$refs.parentComp.childMethod();
    },
    callChildOneFromParent() {
      this.$refs.parentComp.childMethodOne();
    },
  },
};
</script>
