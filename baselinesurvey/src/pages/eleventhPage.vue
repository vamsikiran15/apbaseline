<template>
        <ion-card>
            <ion-card-header color="tertiary"><strong>11.Family Expenditure</strong></ion-card-header>
        </ion-card>
        <ion-card>
            <ion-card-header color="tertiary"><strong>Items</strong></ion-card-header>
          </ion-card>
            <ion-card>
            <ion-card-content>
              <ion-select
                      class="ion-margin-top"
                      interface="popover"
                      label="Items"
                      label-placement="floating"
                      placeholder="Select Items"
                      fill="outline"
                      v-model = "familyExpenditureRows.items"
                    >
                      <ion-select-option value="Food">Food</ion-select-option>
                      <ion-select-option value="Education">Education</ion-select-option>
                      <ion-select-option value="MedicalHealth">Medical/Health</ion-select-option>
                      <ion-select-option value="MaintenanceofVehicles">Maintenance of Vehicles</ion-select-option>
                      <ion-select-option value="MaintenanceofHouseholdEquipments">Maintenance of Household Equipments</ion-select-option>
                      <ion-select-option value="Mobile">Mobile</ion-select-option>
                      <ion-select-option value="Cloths">Cloths</ion-select-option>
                      <ion-select-option value="ElectricityBill">Electricity Bill</ion-select-option>
                      <ion-select-option value="WaterBill">Water Bill</ion-select-option>
                      <ion-select-option value="SocialReligiousFunctions">Social/Religious Functions</ion-select-option>
                      <ion-select-option value="Others">Others</ion-select-option>
                      </ion-select>
          <ion-input
            class="ion-margin-top"
            fill="outline"
            label="Expenditure per Last Year"
            label-placement="floating"
            v-model = "familyExpenditureRows.total"
          ></ion-input>
        </ion-card-content>
        </ion-card>
        <ion-button
              class="ion-margin"
              expand="block"
              color="primary"
              @click="addFamilyExpenditureRows()"
              ><ion-icon
                class="ion-margin-end"
                name="add-circle"
                slot="icon-only"
              ></ion-icon
              >Add Family Expenditure Details</ion-button
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
      items:"",
      total:"",
      familyExpenditureRows:{
        items:"",
        total:"",
      },
      familyExpenditureRowsData:[]
    }
  },
  
  methods:{
    async familyExpenditure(){
      try {
        await axios.post("http://localhost:5000/api/bulkinsertionfamily",this.familyExpenditureRowsData)
      } catch (error) {
        console.error("error in familyExpenditure function",error)
      }
    },
    addFamilyExpenditureRows(){
      this.familyExpenditureRowsData.push({...this.familyExpenditureRows})
      console.log("%%%%%%%%%%%DATA%%%%%%%%%%%%%%",this.familyExpenditureRowsData)
      this.clearFamilyExpenditureRows()
    },
    clearFamilyExpenditureRows(){
      this.familyExpenditureRows ={
        items:"",
        total:"",
      }
    },
  }
}
</script>