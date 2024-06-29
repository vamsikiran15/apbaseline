<template>
<ion-card>
    <ion-card-header color="tertiary"><strong>22.Awareness on Adaption of Technology</strong></ion-card-header>
</ion-card>
<ion-card>
  <ion-card-content>
  <ion-select
                      class="ion-margin-top"
                      interface="popover"
                      label="Technology"
                      label-placement="floating"
                      placeholder="Select Technology"
                      fill="outline"
                      v-model="awarenessTechnologyRows.technology"
                    >
                      <ion-select-option value="SoilManagement">Soil Management</ion-select-option>
                      <ion-select-option value="CropManagement">Crop Management</ion-select-option>
                      <ion-select-option value="WaterManagement">Water Management</ion-select-option>
                      <ion-select-option value="LivestockManagement">Livestock Management</ion-select-option>
                      <ion-select-option value="FisheriesManagement">Fisheries Management</ion-select-option>
                      <ion-select-option value="ForestryManagement">Forestry Management</ion-select-option>
                      <ion-select-option value="others">Others</ion-select-option>
      </ion-select>
      <ion-select
                      class="ion-margin-top"
                      interface="popover"
                      label="Source of Information"
                      label-placement="floating"
                      placeholder="Select Source of Information"
                      fill="outline"
                      v-model="awarenessTechnologyRows.sourceInformation"
                    >
                      <ion-select-option value="PrintMedia">Print Media</ion-select-option>
                      <ion-select-option value="ElectronicMedia">Electronic Media</ion-select-option>
                      <ion-select-option value="StateDepartment">State Department</ion-select-option>
                      <ion-select-option value="AgriculturalDepartment">Agricultural Department</ion-select-option>
                      <ion-select-option value="InputDealers">Input Dealers</ion-select-option>
                      <ion-select-option value="ProgressiveFarmers">Progressive Farmers</ion-select-option>
      </ion-select>
    </ion-card-content>
  </ion-card>
  <ion-button
              class="ion-margin"
              expand="block"
              @click="addAwarenessTechnologyRows()"
              color="primary"
              ><ion-icon
                class="ion-margin-end"
                name="add-circle"
                slot="icon-only"
              ></ion-icon
              >Add Awareness on Technology Details</ion-button
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
      sgh:"",
      sourceInformation:"",
      awarenessTechnologyRows:{
        sgh:"",
        sourceInformation:"",
      },
      awarenessTechnologyRowsData:[]
    }
  },
  methods:{
    async awarenessonTechnologyData(){
      try {
        const response = await axios.post("http://localhost:5000/api/bulkinsertionadoptiontechnology",this.awarenessTechnologyRowsData
      )
      console.log("################DATA$$$$$$$$$$$$$$$$$$",response)
      } catch (error) {
        console.error("error in awarenessonTechnologyData function",error)
      }
    },
    addAwarenessTechnologyRows(){
      this.awarenessTechnologyRowsData.push({...this.awarenessTechnologyRows})
      console.log("%%%%%%%%%%%DATA%%%%%%%%%%%%%",this.awarenessTechnologyRowsData)
      this.clearAwarenessTechnologyRows()
    },
    clearAwarenessTechnologyRows(){
      this.awarenessTechnologyRows={
        sgh:"",
        sourceInformation:"",
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