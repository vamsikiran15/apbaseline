<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-grid>
          <ion-row>
            <!-- <ion-col>
              <ion-title size="small" id="titleFont"
                >Welcome, {{ memberName }}</ion-title
              >
            </ion-col> -->
            <ion-col id="SegmentBg">
              <ion-segment @ionChange="clicked($event)" v-model="component">
                <ion-segment-button value="Repurchase">
                  <ion-img
                    :src="RsiLogo"
                    class="imgsize"
                    alt="Repurchase"
                    title="Repurchase"
                  />
                </ion-segment-button>
                <ion-segment-button value="Registration">
                  <ion-img
                    :src="watershedLogoOne"
                    class="imgsize"
                    alt="Registration"
                    title="Registration"
                  />
                </ion-segment-button>
                <ion-segment-button value="TripPoint">
                  <ion-img
                    :src="watershedLogoTwo"
                    class="imgsize"
                    alt="Trip Point"
                    title="Trip Point"
                  />
                </ion-segment-button>
              </ion-segment>
            </ion-col>
          </ion-row>
        </ion-grid>

        <!-- <ion-img :slot="start" :src="RsiLogo" class="imgsize"></ion-img>
        <ion-img :slot="end" :src="watershedLogoTwo" class="imgsize"></ion-img> -->
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-card>
        <ion-card-header style="text-align: center">
          <ion-card-title>
            <ion-img
              style="display: inline-block"
              :src="watershedLogo"
              class="imgsize"
              alt="Trip Point"
              title="Trip Point"
          /></ion-card-title>
          <ion-card-subtitle
            ><strong style="color: white"
              >HOUSEHOLD SOCIO-ECONOMIC SURVEY</strong
            ></ion-card-subtitle
          >
        </ion-card-header>

        <ion-card-content>
          <ion-button class="ion-margin-top" expand="full" router-link="/survey"
            ><ion-icon
              class="ion-margin-end"
              name="add-circle"
              slot="icon-only"
            ></ion-icon
            >NEW SURVEY</ion-button
          >
          <ion-button class="ion-margin-top" expand="full" router-link="/search"
            ><ion-icon
              class="ion-margin-end"
              name="create-outline"
              slot="icon-only"
            ></ion-icon
            >UPDATE EXISTING SURVEY</ion-button
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
} from "@ionic/vue";
import Logo from "../assets/img/RSIWHITEL_Logo.png";
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
      if (router.currentRoute.value.path === "/main") {
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
.imgsize {
  height: 6vh;
  width: 15vh;
}
</style>
