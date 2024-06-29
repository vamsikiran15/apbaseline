<template><ion-card>
    <ion-card-header class="ion-text-center" color="tertiary"><strong>25.Soil,Land & Water Conservation</strong></ion-card-header>
</ion-card>
<ion-card>
    <ion-card-content>
        <ion-row>
    25.Are you aware of watershed development programs/soil,land & water Conservation?
  </ion-row>
  <ion-row class="ion-margin-top">
    <ion-radio-group v-model="awarenessprograms">
      <ion-row>
                    <ion-radio
                      value="Yes"
                      label-placement="fixed"
                      >Yes</ion-radio
                    >
                  </ion-row>
                  <ion-row class="ion-margin-top">
                    <ion-radio
                      value="No"
                      label-placement="fixed"
                      >No</ion-radio
                    >
                  </ion-row>
                  </ion-radio-group>
                </ion-row>
        <ion-row class="ion-margin-top">
    26.Have you received any training in watershed development programs soil,land & water conservation
</ion-row>
<ion-row class="ion-margin-top">
    <ion-radio-group v-model="receivedawarenessprograms">
      <ion-row>
                    <ion-radio
                      value="Yes"
                      label-placement="fixed"
                      >Yes</ion-radio
                    >
                  </ion-row>
                  <ion-row class="ion-margin-top">
                    <ion-radio
                      value="No"
                      label-placement="fixed"
                      >No</ion-radio
                    >
                  </ion-row>
                  </ion-radio-group>
                </ion-row>
<div class="ion-text-center ion-margin-top">
  <ion-label color="primary">Date</ion-label>
  <ion-datetime-button class="ion-margin-top" datetime="datetime"></ion-datetime-button>
        <ion-modal :keep-contents-mounted="true">
          <ion-datetime
            id="datetime"
            v-model="dateA"
          ></ion-datetime>
        </ion-modal>
      </div>
<ion-input
            class="ion-margin-top"
            placeholder="Enter name of the surveyor"
            fill="outline"
            label="Name of the Surveyor"
            label-placement="floating"
            v-model = "surveyor"></ion-input>
        </ion-card-content>
        </ion-card>
</template>
<script>
import {
  IonDatetime,
  IonDatetimeButton,
  IonModal,
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
} from "@ionic/vue";
import axios from "axios";
// import {
//   format,
//   parseISO
// } from 'date-fns';
export default{
  components:{
    IonDatetime,
    IonDatetimeButton,
    IonModal,
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
  IonButton
  },
  data(){
    return{
      awarenessprograms:"",
      receivedawarenessprograms:"",
      surveyor:"",
      dateA:""

    }
  },
  methods :{
    async soilWaterLandConservationData(){
      try {
        const response = await axios.post("http://localhost:5000/api/awarewatershed",
        {
          // headId: req.body.headId,
            status: this.awarenessprograms
        }
      )
      const response1 = await axios.post("http://localhost:5000/api/bulkinsertiontrainingwatershed",
        {
          // headId: req.body.headId,
            status: this.receivedawarenessprograms
        }
      )
      const response2 = await axios.post("http://localhost:5000/api/concludedate",
        {
          // headId: req.body.headId,
            date: this.dateA,
            serveyor_name: this.surveyor
        }
      )
      console.log("$$$$$$$$$$$$DATA%%%%%%%%%%%%%%%%",response,response1,response2,new Date())
      } catch (error) {
        console.log("error in soilwaterlandconservationdata function",error)
      }
    }
  },
  // created(){
  //   const newDate = format(parseISO(this.date), ev.detail.value);
  //     this.date = newDate;
  // }
}
</script>