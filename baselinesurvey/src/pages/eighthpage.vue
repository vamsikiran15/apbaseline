<template>
    <ion-card>
        <ion-card-header color="tertiary" class="ion-text-center"><strong>8.Use of Manure and Chemical Fertilizers(Previous Year)</strong></ion-card-header>
    </ion-card>
    <ion-card>
        <ion-card-header color="tertiary"><strong>8.1 Manures and Fertilizers used(in Tons)</strong></ion-card-header>
      </ion-card>
        <ion-card>
        <ion-card-content>
        <ion-select
                      class="ion-margin-top"
                      aria-label="Crops"
                      interface="popover"
                      label="Crops"
                      label-placement="floating"
                      placeholder="Select Crop Item"
                      fill="outline"
                      v-model = "useofChemicalManureRows.crops"
                    >
                      <ion-select-option value="Paddy">Paddy</ion-select-option>
                      <ion-select-option value="Meeze">Meeze</ion-select-option>
                      <ion-select-option value="Jower">Jower</ion-select-option>
                      <ion-select-option value="Cotton"
                        >Cotton</ion-select-option
                      >
                      <ion-select-option value="Mirchi"
                        >Mirchi</ion-select-option
                      >
                      <ion-select-option value="Groundnut"
                        >Groundnut</ion-select-option
                      >
                      <ion-select-option value="Red Gram"
                        >Red Gram</ion-select-option
                      >
                      <ion-select-option value="Black Gram"
                        >Black Gram</ion-select-option
                      >
                      <ion-select-option value="Green Gram"
                        >Green Gram</ion-select-option
                      >
                      <ion-select-option value="Mango">Mango</ion-select-option>
                      <ion-select-option value="Sapota"
                        >Sapota</ion-select-option
                      >
                      <ion-select-option value="Chinny"
                        >Chinny</ion-select-option
                      >
                      <ion-select-option value="Neem">Neem</ion-select-option>
                      <ion-select-option value="Cashew"
                        >Cashew</ion-select-option
                      >
                      <ion-select-option value="Vegetables"
                        >Vegetables</ion-select-option
                      >
                      <ion-select-option value="Sunflower"
                        >Sunflower</ion-select-option
                      >
                    </ion-select>
                    <ion-input
            class="ion-margin-top"
            placeholder="Enter value in tons"
            fill="outline"
            label="Organic(Tons)"
            label-placement="floating"
            v-model = "useofChemicalManureRows.organic"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Enter value in grams"
            fill="outline"
            label="Micro Nutrients(In Gms)"
            label-placement="floating"
            v-model ="useofChemicalManureRows.microNutrients"
          ></ion-input>
    </ion-card-content>
    </ion-card>
    <ion-card>
        <ion-card-header color="tertiary"><strong>Chemical(Qtl)</strong></ion-card-header>
      </ion-card>
        <ion-card>       
           <ion-card-content>
            <ion-input
            class="ion-margin-top"
            placeholder="N"
            fill="outline"
            label="N"
            label-placement="floating"
            v-model="useofChemicalManureRows.N"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="P"
            fill="outline"
            label="P"
            label-placement="floating"
            v-model = "useofChemicalManureRows.P"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="K"
            fill="outline"
            label="K"
            label-placement="floating"
            v-model = "useofChemicalManureRows.K"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Enter cost in rupees"
            fill="outline"
            label="Cost in Rupees"
            label-placement="floating"
            v-model = "useofChemicalManureRows.cost"
          ></ion-input>
        </ion-card-content>
    </ion-card>
    <ion-card>
      <ion-card-content>
        <ion-input
            class="ion-margin-top"
            placeholder="Total"
            fill="outline"
            label="Total"
            label-placement="floating"
          ></ion-input>
        </ion-card-content>
    </ion-card>
    <ion-button
              class="ion-margin"
              expand="block"
              color="primary"
              @click="addChemicalManureRows()"
              ><ion-icon
                class="ion-margin-end"
                name="add-circle"
                slot="icon-only"
              ></ion-icon
              >Add Manure and Chemical Fertilizers Details</ion-button
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
  data(){
    return{
      crops:"",
      organic:"",
      microNutrients:"",
      N:"",
      P:"",
      K:"",
      cost:"",
      useofChemicalManureRows:{
        crops:"",
        organic:"",
        microNutrients:"",
        N:"",
        P:"",
        K:"",
        cost:"",
      },
      chemicalManureRowsData:[]
    }
  },

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

  methods : {
    async manureChemical(){
      try {
         await axios.post("http://localhost:5000/api/bulkinsertionmanurechemical",this.chemicalManureRowsData
        )
      } catch (error) {
        console.error("error in manureChemical function",error)
      }
    },
    addChemicalManureRows(){
      this.chemicalManureRowsData.push({...this.useofChemicalManureRows})
      console.log("%%%%%%%%%%%DATA%%%%%%%%%",this.chemicalManureRowsData)
      this.clearChemicalManureRows()
      },
      clearChemicalManureRows(){
        this.useofChemicalManureRows={
        crops:"",
        organic:"",
        microNutrients:"",
        N:"",
        P:"",
        K:"",
        cost:"",
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