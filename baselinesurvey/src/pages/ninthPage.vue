<template>
    <ion-card>
        <ion-card-header class="ion-text-center" color="tertiary"><strong>9.Pest and Disease Control Measures</strong></ion-card-header>
    </ion-card>
    <ion-card>
        <ion-card-header color="tertiary"><strong>Crop Measures</strong></ion-card-header>
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
                      v-model = "pestandDiseaseRows.crops"
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
            placeholder="Enter name of the pest/disease"
            fill="outline"
            label="Name of the Pest/Disease"
            label-placement="floating"
            v-model = "pestandDiseaseRows.nameOfThePest"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Biological"
            fill="outline"
            label="Biological"
            label-placement="floating"
            v-model = "pestandDiseaseRows.biological"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Enter chemical"
            fill="outline"
            label="Chemical"
            label-placement="floating"
            v-model = "pestandDiseaseRows.chemical"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="others(Name them)"
            fill="outline"
            label="Others(Name Them)"
            label-placement="floating"
            v-model = "pestandDiseaseRows.others"
          ></ion-input>
        </ion-card-content>
    </ion-card>
    <ion-card>
        <ion-card-header color="tertiary"><strong>Amount Spent Towards</strong>
        </ion-card-header>
      </ion-card>
        <ion-card>
        <ion-card-content>
            <ion-input
            class="ion-margin-top"
            placeholder="Enter material"
            fill="outline"
            label="Material"
            label-placement="floating"
            v-model = "pestandDiseaseRows.material"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Enter Wages"
            fill="outline"
            label="Wages"
            label-placement="floating"
            v-model = "pestandDiseaseRows.wages"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Total material"
            fill="outline"
            label="Total Material"
            label-placement="floating"
            v-model = "pestandDiseaseRows.totalMaterial"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Total wages"
            fill="outline"
            label="Total Wages"
            label-placement="floating"
            v-model = "pestandDiseaseRows.totalWages"
          ></ion-input>
        </ion-card-content>
    </ion-card>
    <ion-card>
      <ion-card-content>
        <ion-input
            class="ion-margin-top"
            placeholder="Grand Total"
            fill="outline"
            label="Grand Total"
            label-placement="floating"
          ></ion-input>
        </ion-card-content>
    </ion-card>
    <ion-button
              class="ion-margin"
              expand="block"
              @click="addPestDiseaseRows()"
              color="primary"
              ><ion-icon
                class="ion-margin-end"
                name="add-circle"
                slot="icon-only"
              ></ion-icon
              >Add Pest and Disease Control Details</ion-button
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
      nameOfThePest:"",
      biological:"",
      chemical:"",
      others:"",
      material:"",
      wages:"",
      totalMaterial:"",
      totalWages:"",
      pestandDiseaseRows:{
      crops:"",
      nameOfThePest:"",
      biological:"",
      chemical:"",
      others:"",
      material:"",
      wages:"",
      totalMaterial:"",
      totalWages:""
    },
    pestandDiseaseRowsData:[]
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
    async controlMeasuresData(){
      try {
         await axios.post("http://localhost:5000/api/bulkinsertionpest",this.pestandDiseaseRowsData
        )
      } catch (error) {
        console.error("error in controlMeasuresData function",error)
      }
    },
    addPestDiseaseRows(){
        this.pestandDiseaseRowsData.push({...this.pestandDiseaseRows})
        console.log("%%%%DATA%%%%%%%%%",this.pestandDiseaseRowsData)
        this.clearPestDisease()
      },
    clearPestDisease(){
     this.pestandDiseaseRows = {
      crops:"",
      nameOfThePest:"",
      biological:"",
      chemical:"",
      others:"",
      material:"",
      wages:"",
      totalMaterial:"",
      totalWages:""
    }
    },
  }
}
</script>