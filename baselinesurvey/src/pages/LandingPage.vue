<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <!-- <ion-img :slot="start" :src="RsiLogo" class="imgsize"></ion-img>
        <ion-img :slot="end" :src="watershedLogoTwo" class="imgsize"></ion-img> -->
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col size="4" class="ion-text-start">
            <ion-img
              :src="watershedLogo"
              style="width: 12wh; height: 12vh"
            ></ion-img>
          </ion-col>
          <ion-col size="4" class="ion-text-center">
            <ion-img
              :src="watershedLogoOne"
              style="width: 12wh; height: 12vh"
            ></ion-img>
          </ion-col>
          <ion-col size="4" class="ion-text-end">
            <ion-img
              :src="watershedLogoTwo"
              class="ion-padding-top"
              style="height: 11.5vh"
            ></ion-img>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="12" class="ion-text-center">
            <p>
              Monitoring, Evaluation, Learning and Documentation (MEL&D)
              Services under Watershed Development Component - Pradhan Mantri
              Krishi Sinchayee Yojana 2.0 (WDC-PMKSY 2.0)
            </p>
          </ion-col>
        </ion-row>
      </ion-grid>

      <ion-card class="ion-margin">
        <ion-card-header style="text-align: center">
          <ion-card-title> </ion-card-title>
          <ion-card-subtitle
            ><strong style="color: white"
              >HOUSEHOLD SOCIO-ECONOMIC SURVEY</strong
            ></ion-card-subtitle
          >
        </ion-card-header>
      </ion-card>
      <ion-card class="ion-margin">
        <ion-card-content>
          <ion-button
            class="ion-margin-top"
            color="primary"
            expand="full"
            router-link="/survey"
            ><ion-icon
              class="ion-margin-end"
              name="add-circle"
              slot="icon-only"
            ></ion-icon
            >NEW SURVEY</ion-button
          >
          <ion-button
            class="ion-margin-top"
            expand="full"
            router-link="/search"
            color="primary"
            ><ion-icon
              class="ion-margin-end"
              name="create-outline"
              slot="icon-only"
            ></ion-icon
            >UPDATE EXISTING SURVEY</ion-button
          >
          <ion-button
            class="ion-margin-top"
            expand="full"
            router-link="/getdata"
            color="primary"
            ><ion-icon
              class="ion-margin-end"
              name="create-outline"
              slot="icon-only"
            ></ion-icon
            >Get Data</ion-button
          >
        </ion-card-content>
      </ion-card>
      <!-- IonAlert for exit confirmation -->
      <ion-alert
        v-if="showExitAlert"
        :is-open="showExitAlert"
        header="Exit App"
        message="Are you sure you want to exit the app?"
        :buttons="[
          { text: 'Cancel', role: 'cancel', handler: cancelExit },
          { text: 'Exit', role: 'confirm', handler: confirmExit },
        ]"
      ></ion-alert>
      <!-- IonAlert for exit confirmation -->
    </ion-content>
    <ion-footer>
      <ion-toolbar>
        <ion-grid>
          <ion-row class="ion-justify-content-center">
            <ion-col size="auto">
              <ion-img :src="RsiLogo"></ion-img>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-toolbar>
    </ion-footer>
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
  IonInput,
  IonSelect,
  IonSelectOption,
  IonLabel,
  IonRadioGroup,
  IonRadio,
  IonList,
  IonIcon,
  IonButton,
  IonButtons,
  IonFooter,
  IonItem,
  IonImg,
  IonAlert,
  IonGrid,
} from "@ionic/vue";
import Logo from "../assets/img/rsilogotworemovebg.png";
import LogoWatershed from "../assets/img/watershed.png";
import LogoWatershedOne from "../assets/img/watershed1.png";
import LogoWatershedTwo from "../assets/img/watershed2.png";
import { defineComponent, ref, onMounted, onUnmounted } from "vue";
import { App } from "@capacitor/app";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const showExitAlert = ref(false);

    const handleBackButton = () => {
      if (router.currentRoute.value.path === "/landingpage") {
        showExitAlert.value = true;
      } else {
        router.back();
      }
    };

    const cancelExit = () => {
      showExitAlert.value = false;
    };

    const confirmExit = () => {
      App.exitApp();
    };

    onMounted(() => {
      App.addListener("backButton", handleBackButton);
    });

    onUnmounted(() => {
      App.removeListener("backButton", handleBackButton);
    });

    // Listen for Ionic's ionBackButton event to handle swipe back gesture
    document.addEventListener("ionBackButton", (ev) => {
      ev.detail.register(10, (processNextHandler) => {
        handleBackButton();
        processNextHandler();
      });
    });

    return {
      showExitAlert,
      cancelExit,
      confirmExit,
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
    IonIcon,
    IonButton,
    IonButtons,
    IonFooter,
    IonItem,
    IonImg,
    IonAlert,
    IonGrid,
  },
  data() {
    return {
      RsiLogo: Logo,
      watershedLogo: LogoWatershed,
      watershedLogoOne: LogoWatershedOne,
      watershedLogoTwo: LogoWatershedTwo,
    };
  },
};
</script>
<style>
ion-img {
  width: 100%;
  height: auto;
}
.imgsize {
  height: 11vh;
  width: 12vh;
}
.imgsize1 {
  height: 10vh;
  width: 20vh;
}
/* ion-img {
  width: 100%;
  height: auto;
} */

ion-footer ion-img {
  width: auto;
  height: 50px; /* Adjust this value as needed */
  display: block;
  margin: auto;
}

p {
  margin-top: 16px;
  font-size: 16px;
  text-align: center;
}
</style>
