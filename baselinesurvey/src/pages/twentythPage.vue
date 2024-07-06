<template>
    <ion-card>
        <ion-card-header color="tertiary"><strong>20.Household Assets</strong></ion-card-header>
    </ion-card>
    <ion-card>
        <ion-card-content>
          <ion-select
                      class="ion-margin-top"
                      interface="popover"
                      label="Assets"
                      label-placement="floating"
                      placeholder="Select Assets"
                      fill="outline"
                      v-model = "householdRows.assets"
                    >
                      <ion-select-option value="Motor Cycle">Motor Cycle</ion-select-option>
                      <ion-select-option value="Cycle">Cycle</ion-select-option>
                      <ion-select-option value="Four Wheeler">Four Wheeler</ion-select-option>
                      <ion-select-option value="Bio gas Lpg Cooking Gas">Bio gas/Lpg Cooking Gas</ion-select-option>
                      <ion-select-option value="Tables Chairs">Tables/Chairs</ion-select-option>
                      <ion-select-option value="Television">Television</ion-select-option>
                      <ion-select-option value="Washing Machine">Washing Machine</ion-select-option>
                      <ion-select-option value="Mobile">Mobile</ion-select-option>
                      <ion-select-option value="Others">Others</ion-select-option>
                      </ion-select>
        <ion-input
            class="ion-margin-top"
            placeholder="Enter units"
            fill="outline"
            label="Number"
            label-placement="floating"
            v-model = "householdRows.number"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Enter value in Rs"
            fill="outline"
            label="Present Value(Rs)"
            label-placement="floating"
            v-model = "householdRows.presentValue"
          ></ion-input>
        </ion-card-content>
    </ion-card>
    <ion-button
              class="ion-margin"
              expand="block"
              color="primary"
              @click="addHouseholdRows()"
              ><ion-icon
                class="ion-margin-end"
                name="add-circle"
                slot="icon-only"
              ></ion-icon
              >Add Household Assets Details</ion-button
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
      assets:"",
      number:"",
      presentValue:"",
      householdRows : {
        assets:"",
        number:"",
        presentValue:"",
      },
      householdRowsData:[]
    }
  },
  methods : {
      async householdAssets(id){
        try {
          const data = {id:id,rows:this.householdRowsData}
           await axios.post("http://localhost:5000/api/bulkinsertionhouseholdassets",data
    )
    } 
    catch (error) {
      console.error("error in householdAssets function",error)
    }
  },
  addHouseholdRows(){
    this.householdRowsData.push({...this.householdRows})
    console.log("^^^^^^^^DATA^^^^^^^^^^^^^^",this.householdRowsData)
    this.clearHouseholdRows()
  },
  clearHouseholdRows(){
    this.householdRows = {
        assets:"",
        number:"",
        presentValue:"",
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