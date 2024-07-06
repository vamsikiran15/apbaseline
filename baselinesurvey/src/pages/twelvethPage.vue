<template>
    <ion-card>
        <ion-card-header class="ion-text-center" color="tertiary"><strong>12.Difference Source of Income,Expenditure and Family Debt Details</strong></ion-card-header>
    </ion-card>
    <ion-card>
        <ion-card-header color="tertiary"><strong>Source</strong></ion-card-header>
      </ion-card>
        <ion-card>
        <ion-card-content>
          <ion-select
                    class="ion-margin-top"
                    interface="popover"
                    label="Source"
                    label-placement="floating"
                    placeholder="Select Source"
                    fill="outline"
                    v-model="sourceofIncomeRows.source"
                  >
                    <ion-select-option value="HouseholdMemberIncome"
                      >Household Member's Income</ion-select-option
                    >
                    <ion-select-option value="AgriculturKharif"
                      >Agriculture-Kharif</ion-select-option
                    >
                    <ion-select-option value="AgriculturRabi"
                      >Agriculture-Rabi</ion-select-option
                    >
                    <ion-select-option value="Dairy"
                      >Dairy</ion-select-option
                    >
                    <ion-select-option value="Livestock"
                      >Livestock</ion-select-option
                    >
                    <ion-select-option value="Fisheries"
                      >Fisheries</ion-select-option
                    >
                    <ion-select-option value="Poultry"
                      >Poultry</ion-select-option
                    >
                    <ion-select-option value="WagesMigration">Wages-Migration</ion-select-option>
                    <ion-select-option value="LandlessLabourerWages"
                      >Landless Labourers-Wages</ion-select-option
                    >
                    <ion-select-option value="BenefitsfromGovernmentSchemes"
                      >Benefits from Government Schemes</ion-select-option
                    >
                    <ion-select-option value="ExpenditureofManureandChemicalFertilizers"
                      >Expenditure of Manure and Chemical Fertilizers</ion-select-option
                    >
                    <ion-select-option value="ExpenditureofPesticide"
                      >Expenditure of Pesticide</ion-select-option
                    >
                    <ion-select-option value="FamilyExpenditure"
                      >Family Expenditure</ion-select-option
                    >
                    <ion-select-option value="FamilyIndebtedness"
                      >Family Indebtedness</ion-select-option
                    >
                    <ion-select-option value="Poultry"
                      >Poultry</ion-select-option
                    >
                    <ion-select-option value="Business"
                      >Business</ion-select-option
                    >
                  </ion-select>
          <ion-input
            class="ion-margin-top"
            fill="outline"
            label="Enter Income during the Year(Rs)"
            label-placement="floating"
            v-model = "sourceofIncomeRows.income"
          ></ion-input>
        </ion-card-content>
    </ion-card>
    <ion-button
              class="ion-margin"
              color="primary"
              expand="block"
              @click="addSourceofIncomeRows()"
              ><ion-icon
                class="ion-margin-end"
                name="add-circle"
                slot="icon-only"
              ></ion-icon
              >Add Source of Income and Family Details</ion-button
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
          source:"",
          income:"",
          sourceofIncomeRows:{
            source:"",
            income:"",
          },
          sourceofIncomeRowsData:[]
    }
  },

 methods : {
  async sourceofIncomeData(id){
    try {
      const data = {id:id,rows:sourceofIncomeRowsData}
       await axios.post("http://localhost:5000/api/sourceofincome",data
        // {
        //   headId: req.body.headId,
        //   source:this.source,
        //   income_during_the_year:this.income
        // }
      )
    } catch (error) {
      console.error("error in sourceofIncomeData fucntion",error )
    }
  },
  addSourceofIncomeRows(){
    this.sourceofIncomeRowsData.push({...this.sourceofIncomeRows})
    console.log("^^^^^^^^^^^^^DATA^^^^^^^^^^^^^^^",this.sourceofIncomeRowsData)
    this.clearSourceofIncomeRows()
  },
  clearSourceofIncomeRows(){
    this.sourceofIncomeRows={
            source:"",
            income:"",
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