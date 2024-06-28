<template>
    <ion-card>
        <ion-card-header color="tertiary" class="ion-text-center"><strong>6.If Land Less Labourers , given the details of the Number of days Employment Availed</strong></ion-card-header>
      </ion-card>   
        <ion-card> 
        <ion-card-content>
              <ion-select
                    aria-label="Crop Grown"
                    interface="popover"
                    label="Name of the Scheme/Project"
                    label-placement="floating"
                    placeholder="Select Name of the Scheme/Project"
                    fill="outline"
                    class="ion-margin-top"
                    v-model = "landLessLabourers.nameOfTheProject"
                  >
                  <ion-select-option value="watershed">Watershed</ion-select-option>
                  <ion-select-option value="mgnregs">MGNREGS</ion-select-option>
                  <ion-select-option value="others">Others</ion-select-option>
                </ion-select>
            <ion-input
            class="ion-margin-top"
            placeholder="Enter days"
            fill="outline"
            label="Man-Days"
            label-placement="floating"
            v-model = "landLessLabourers.manDays"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Enter days"
            fill="outline"
            label="Wage/Days"
            label-placement="floating"
            v-model = "landLessLabourers.wageDays"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Enter days"
            fill="outline"
            label="Income(Rs)"
            label-placement="floating"
            v-model = "landLessLabourers.income"
          ></ion-input>
        </ion-card-content>
    </ion-card>
    <ion-card>
        <ion-card-content>
            <ion-input class="ion-margin-top"
            placeholder="Total"
            fill="outline"
            type="read-only"
            label="Total"
            label-placement="floating"
            v-model = "landLessLabourers.total"></ion-input>
        </ion-card-content>
    </ion-card>
    <ion-button
              class="ion-margin"
              expand="block"
              color="primary"
              @click="landLessLabourData()"
              ><ion-icon
                class="ion-margin-end"
                name="add-circle"
                slot="icon-only"
              ></ion-icon
              >Add Government Scheme Details</ion-button
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
export default {
  data() {
    return {
    nameOfTheProject:"",
    manDays:"",
    wageDays:"",
    income:"",
    total:"",
    landLessLabourers:{
      nameOfTheProject:"",
      manDays:"",
      wageDays:"",
      income:"",
      total:"",
    },
    landLessData:[],
    }
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
  },


  methods : {
      async landLessDetails(){
        try {
           await axios.post("http://localhost:5000/api/bulkinsertionlandless",this.landLessData
        )
        } catch (error) {
          console.error("error in landLessDetails function",error)
        }
       
      },
      async landLessLabourData(){
        this.landLessData.push({...this.landLessLabourers})
        console.log("@@@@@@@@@@@@@@@@@@@@",this.landLessData)
        this.clearLandLessRows()

      },
      clearLandLessRows(){
        this.landLessLabourers={
      nameOfTheProject:"",
      manDays:"",
      wageDays:"",
      income:"",
      total:"",
    }
      },
  },
};
</script>
<style>
ion-card {
  border-radius: 8px;
  box-shadow: 1px 1px 6px rgb(96, 96, 161);
}
</style>
