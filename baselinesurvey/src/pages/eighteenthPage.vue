<template>
<ion-card>
    <ion-card-header color="tertiary" class="ion-text-center"><strong>18.Fodder/Fuel use during previous year(1 ton = 1000kgs, 1 Head load = 25kgs)</strong></ion-card-header>
</ion-card>
<ion-card>
    <ion-card-content>
      <ion-select
                      class="ion-margin-top"
                      interface="popover"
                      label="Details"
                      label-placement="floating"
                      placeholder="Select Details"
                      fill="outline"
                      v-model = "fodderFuelRows.details"
                    >
                      <ion-select-option value="ownland">Own Land</ion-select-option>
                      <ion-select-option value="community">Community</ion-select-option>
                      <ion-select-option value="purchased">Purchased</ion-select-option>
                      <ion-select-option value="others">Others</ion-select-option>
                      </ion-select>
    <ion-input
            class="ion-margin-top"
            placeholder="Enter value in Tons"
            fill="outline"
            label="Fodder Utilization(In Tons)"
            label-placement="floating"
            v-model = "fodderFuelRows.fodderUtilization"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Enter value"
            fill="outline"
            label="Fire/Fuel Cow Dung"
            label-placement="floating"
            v-model = "fodderFuelRows.fireFuelCowDung"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Enter values"
            fill="outline"
            label="Firewood"
            label-placement="floating"
            v-model = "fodderFuelRows.firewood"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Enter values"
            fill="outline"
            label="Agricultural Waste"
            label-placement="floating"
            v-model = "fodderFuelRows.agriculturalWaste"
          ></ion-input>
        </ion-card-content>
</ion-card>
<ion-button
              class="ion-margin"
              color="primary"
              expand="block"
              @click="addFodderFuelRows()"
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
      details:"",
      fodderUtilization:"",
      fireFuelCowDung:"",
      firewood:"",
      agriculturalWaste:"",
      fodderFuelRows:{
        details:"",
        fodderUtilization:"",
        fireFuelCowDung:"",
        firewood:"",
        agriculturalWaste:"",
      },
      fodderFuelRowsData : []
    }
  },
  methods : {
    async fodderFuelUsageData(id){
      try {
        const data = {id:id,rows:this.fodderFuelRowsData}
         await axios.post("http://localhost:5000/api/bulkinsertionfuel",data
        )
      } catch (error) {
        console.error("error in fodderFuelUsageData function",error)
      }
    },
    addFodderFuelRows(){
      this.fodderFuelRowsData.push({...this.fodderFuelRows})
      console.log("################DATA##############",this.fodderFuelRowsData)
      this.clearFodderFullRows()
    },
    clearFodderFullRows(){
      this.fodderFuelRows = {
        details:"",
        fodderUtilization:"",
        fireFuelCowDung:"",
        firewood:"",
        agriculturalWaste:"",
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