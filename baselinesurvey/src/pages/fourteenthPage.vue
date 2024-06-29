<template>
<ion-card class="ion-margin-top">
    <ion-card-header class="ion-text-center" color="tertiary"><strong>14.Source and Quality of Water(3ft = 1 metre)</strong></ion-card-header>
  </ion-card>
    <ion-card>   
    <ion-card-subtitle class="ion-margin-top ion-text-center" color="tertiary">Water Source</ion-card-subtitle>
        <ion-card-content>
          <ion-select
                      class="ion-margin-top"
                      aria-label="Source of Drinking Water"
                      interface="popover"
                      label="Water Source"
                      label-placement="floating"
                      placeholder="select water source"
                      fill="outline"
                      v-model = "sourceandQualityofWaterRows.waterSource"
                    >
                      <ion-select-option value="borewell">Open</ion-select-option>
                      <ion-select-option value="tank">Borewell</ion-select-option>
                      <ion-select-option value="publictank">Tank</ion-select-option>
                      <ion-select-option value="openwell">Drip(Specify Crop)</ion-select-option>
                      <ion-select-option value="canalwater">Others</ion-select-option>
          </ion-select>
        <ion-input
            class="ion-margin-top"
            placeholder="Enter Number"
            fill="outline"
            label="Dried up well/Borewell(in Numbers)"
            label-placement="floating"
            v-model = "sourceandQualityofWaterRows.driedupWell"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Enter Number"
            fill="outline"
            label="Functioning well/Borewell(in Numbers)"
            label-placement="floating"
            v-model = "sourceandQualityofWaterRows.functioningWell"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Enter Metres"
            fill="outline"
            label="present Approximate Water Level(in Metres)"
            label-placement="floating"
            v-model = "sourceandQualityofWaterRows.presentApproximateWaterLevel"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Enter Litres"
            fill="outline"
            label="Yield from the Borewell(Litres/Minute)"
            label-placement="floating"
            v-model = "sourceandQualityofWaterRows.yieldfromtheBorewell"
          ></ion-input>
          <ion-card-subtitle class="ion-margin-top ion-text-center" color="tertiary">Irrigated Area(in Ha)</ion-card-subtitle>
        </ion-card-content>
          <ion-card-header color="tertiary"><strong>Agriculture</strong></ion-card-header>
          <ion-card-content>
          <ion-input
            class="ion-margin-top"
            placeholder="Enter units in Ha"
            fill="outline"
            label="Kharif"
            label-placement="floating"
            v-model = "sourceandQualityofWaterRows.kharif"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Enter units in Ha"
            fill="outline"
            label="Rabi"
            label-placement="floating"
            v-model = "sourceandQualityofWaterRows.rabi"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Enter units in Ha"
            fill="outline"
            label="Summer"
            label-placement="floating"
            v-model = "sourceandQualityofWaterRows.summer"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Enter other crops"
            fill="outline"
            label="Other Crops(Specify)"
            label-placement="floating"
            v-model = "sourceandQualityofWaterRows.otherCrops"
          ></ion-input>
        </ion-card-content>
      </ion-card>
      <ion-button
              class="ion-margin"
              expand="block"
              color="primary"
              @click="addSourceandQualityWaterRows()"
              ><ion-icon
                class="ion-margin-end"
                name="add-circle"
                slot="icon-only"
              ></ion-icon
              >Add Source and Quality of Water Details</ion-button
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
    },

  data(){
    return{
      waterSource:"",
      driedupWell:"",
      functioningWell:"",
      presentApproximateWaterLevel:"",
      yieldfromtheBorewell:"",
      kharif:"",
      rabi:"",
      summer:"",
      otherCrops:"",
      sourceandQualityofWaterRows:{
        waterSource:"",
        driedupWell:"",
        functioningWell:"",
        presentApproximateWaterLevel:"",
        yieldfromtheBorewell:"",
        kharif:"",
        rabi:"",
        summer:"",
        otherCrops:"",
      },
      sourceandQualityofWaterRowsData:[]
  }
    },

 methods:{
        async quantityofWaterData(){
            try {
                await axios.post("http://localhost:5000/api/bulkinsertionwater",this.sourceandQualityofWaterRowsData
              )
            } catch (error) {
              console.error("error in quantityofWaterData function",error)
            }      
        },
        addSourceandQualityWaterRows(){
          this.sourceandQualityofWaterRowsData.push({...this.sourceandQualityofWaterRows})
          console.log("^^^^^^^DATA^^^^^^^^^^",this.sourceandQualityofWaterRowsData)
          this.clearSourceandQualityofWaterRows()
        },
        clearSourceandQualityofWaterRows(){
          this.sourceandQualityofWaterRows = {
          waterSource:"",
          driedupWell:"",
          functioningWell:"",
          presentApproximateWaterLevel:"",
          yieldfromtheBorewell:"",
          kharif:"",
          rabi:"",
          summer:"",
          otherCrops:"",
      }
        },
  },
}
</script>
<style>
ion-card {
  border-radius: 8px;
  box-shadow: 1px 1px 6px rgb(96, 96, 161);
}
</style>