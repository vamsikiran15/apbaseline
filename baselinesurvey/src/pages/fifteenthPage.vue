<template>
<ion-card>
<ion-card-header color="tertiary"><strong>15.Agriculture Implements</strong></ion-card-header>
</ion-card>
<ion-card>
    <ion-card-content>
      <ion-select
                      class="ion-margin-top"
                      interface="popover"
                      label="Implements"
                      label-placement="floating"
                      placeholder="Select Implement"
                      fill="outline"
                      v-model="agriculturalImplementsRows.selectImplements"
                    >
                      <ion-select-option value="tractor">Tractor</ion-select-option>
                      <ion-select-option value="SprayerManualPower">Sprayer-Manual/Power</ion-select-option>
                      <ion-select-option value="CultivatorsHarrows">Cultivators/Harrows</ion-select-option>
                      <ion-select-option value="SeedDrill">Seed Drill</ion-select-option>
                      <ion-select-option value="Tresher">Tresher</ion-select-option>
                      <ion-select-option value="Ploughs">Ploughs</ion-select-option>
                      <ion-select-option value="Sickles">Sickles</ion-select-option>
                      <ion-select-option value="CrowBar">Crow Bar</ion-select-option>
                      <ion-select-option value="BullockCar">Bullock Car</ion-select-option>
                      <ion-select-option value="others">Others</ion-select-option>

          </ion-select>
          <ion-select
                      class="ion-margin-top"
                      interface="popover"
                      label="Number of implement"
                      label-placement="floating"
                      placeholder="Select number of implement"
                      fill="outline"
                      v-model="agriculturalImplementsRows.numberofImplement"
                    >
                      <ion-select-option value="1">1</ion-select-option>
                      <ion-select-option value="2">2</ion-select-option>
                      <ion-select-option value="3">3</ion-select-option>
                      <ion-select-option value="4">4</ion-select-option>
                      <ion-select-option value="5">5</ion-select-option>
          </ion-select>
          <ion-select
                      class="ion-margin-top"
                      interface="popover"
                      label="Owned/Hired"
                      label-placement="floating"
                      placeholder="Select owned/hired"
                      fill="outline"
                      v-model="agriculturalImplementsRows.ownedHired"
                    >
                      <ion-select-option value="Owned">Owned</ion-select-option>
                      <ion-select-option value="Hired">Hired</ion-select-option>
          </ion-select>
        </ion-card-content>
</ion-card>
<ion-button
              class="ion-margin"
              expand="block"
              color="primary"
              @click="addAgriculturalImplementsRows()"
              ><ion-icon
                class="ion-margin-end"
                name="add-circle"
                slot="icon-only"
              ></ion-icon
              >Add Agriculture Details</ion-button
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
      selectImplements:"",
      numberofImplement:"",
      ownedHired:"",
      agriculturalImplementsRows:{
        selectImplements:"",
        numberofImplement:"",
        ownedHired:"",
      },
      agriculturalImplementsRowsData:[]
    }
  },

  methods:{
    async agricultureImplementsData(){
      try {
           await axios.post("http://localhost:5000/api/bulkinsertionagriimplements",this.agriculturalImplementsRowsData
      )
      } catch (error) {
        console.error("error in agricultureImplements function",error)
      }
    },
    addAgriculturalImplementsRows(){
      this.agriculturalImplementsRowsData.push({...this.agriculturalImplementsRows})
      console.log("%%%%%%%%%DATA%%%%%%%",this.agriculturalImplementsRowsData)
      this.clearAgriculturalImplementsRows()
    },
    clearAgriculturalImplementsRows(){
      this.agriculturalImplementsRows = {
        selectImplements:"",
        numberofImplement:"",
        ownedHired:"",
      }
    },
  }
}
</script>