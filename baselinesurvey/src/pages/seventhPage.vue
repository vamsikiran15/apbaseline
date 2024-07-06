<template>
    <ion-card>
        <ion-card-header color="tertiary"><strong>7.Benefits from Government Schemes</strong></ion-card-header>
      </ion-card>
        <ion-card>
        <ion-card-content>
            <ion-input
            class="ion-margin-top"
            placeholder="Enter name of the family member"
            fill="outline"
            label="Name of the Family Member"
            label-placement="floating"
            v-model = "governmentSchemesRows.nameOfTheFamilyMember"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Enter scheme name"
            fill="outline"
            label="Scheme Name"
            label-placement="floating"
            v-model = "governmentSchemesRows.schemeName"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Enter days"
            fill="outline"
            label="Amount"
            label-placement="floating"
            v-model = "governmentSchemesRows.amount"
          ></ion-input>
        </ion-card-content>
    </ion-card>
    <ion-button
              class="ion-margin"
              expand="block"
              color="primary"
              @click="addGovernmentSchemesDataRows()"
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

  data() {
    return{
      nameOfTheFamilyMember:"",
      schemeName:"",
      amount:"",
      governmentSchemesRows:{
        nameOfTheFamilyMember:"",
        schemeName:"",
        amount:"",
      },
      governmentSchemesRowsData:[],
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
    async governmentSchemesData(id){
      try {
        const data = {id:id,rows:this.governmentSchemesRowsData}
          await axios.post("http://localhost:5000/api/bulkinsertiongovt",data
      )
      } catch (error) {
        console.error("error in governmentSchemesData function",error)
      }
    },
    addGovernmentSchemesDataRows(){
      this.governmentSchemesRowsData.push({...this.governmentSchemesRows})
      console.log("%%%%%%%%%%%%%%%DATA%%%%%%%%%%%%%%%%%%",this.governmentSchemesRowsData)
    },
    clearGovernmentSchemesRows(){
      this.governmentSchemesRows ={
        nameOfTheFamilyMember:"",
        schemeName:"",
        amount:"",
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