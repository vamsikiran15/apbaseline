<template>
  <ion-card>
    <ion-card-header color="tertiary"
      ><strong>5.Migration Status</strong></ion-card-header
    >
  </ion-card>
  <ion-card>
    <ion-card-content>
      <ion-input
            class="ion-margin-top"
            placeholder="Enter name of the person migrating"
            fill="outline"
            label="Name of the Person Migrating "
            label-placement="floating"
            v-model = "migrationStatusRows.nameOfThePerson"
          ></ion-input>
          <ion-select
            class="ion-margin-top"
            aria-label="Gender"
            interface="popover"
            label="Gender"
            label-placement="floating"
            placeholder="Gender"
            fill="outline"
            v-model = "migrationStatusRows.gender"
          >
            <ion-select-option value="male">Male</ion-select-option>
            <ion-select-option value="female">Female</ion-select-option>
          </ion-select>
          <ion-input
            class="ion-margin-top"
            placeholder="Enter No of the Days"
            fill="outline"
            label="No of the Days Migrating per Year "
            label-placement="floating"
            v-model = "migrationStatusRows.noOfDaysMigratingPerYear"
          ></ion-input>
          <ion-select
            class="ion-margin-top"
            aria-label="Reasons for Migrating"
            interface="popover"
            label="Reasons for Migrating"
            label-placement="floating"
            placeholder="Enter reasons for migrating"
            fill="outline"
            v-model="migrationStatusRows.reasonsForMigrating"
          >
            <ion-select-option value="distress">Distress</ion-select-option>
            <ion-select-option value="betterlivelihoodoptions">Better Livelihood options</ion-select-option>
            <ion-select-option value="seasonal">Seasonal</ion-select-option>
          </ion-select>
          <ion-select
            class="ion-margin-top"
            aria-label="Place for Migrating"
            interface="popover"
            label="Place of Migration"
            label-placement="floating"
            placeholder="Enter place for migrating"
            fill="outline"
            v-model ="migrationStatusRows.placeOfMigration"
          >
            <ion-select-option value="withindistrict">Within District</ion-select-option>
            <ion-select-option value="outsidedistrict">Outside District</ion-select-option>
            <ion-select-option value="outsidestate">Outside State</ion-select-option>
          </ion-select>
          <ion-select
            class="ion-margin-top"
            aria-label="Occupation for Migrating"
            interface="popover"
            label="Occupation during Migration"
            label-placement="floating"
            placeholder="Enter occupation for migrating"
            fill="outline"
            v-model="migrationStatusRows.occupationDuringMigration"
          >
            <ion-select-option value="agri">Agri</ion-select-option>
            <ion-select-option value="industriallabour">Industrial Labour</ion-select-option>
            <ion-select-option value="otherlivelihoods">Other Livelihoods</ion-select-option>
          </ion-select>
          <ion-input
            class="ion-margin-top"
            type="read-only"
            fill="outline"
            label="Income from Such Occupation "
            label-placement="floating"
            v-model = "migrationStatusRows.incomeFromOccupation"
          ></ion-input>
    </ion-card-content>
  </ion-card>
  <ion-button
              class="ion-margin"
              expand="block"
              color="primary"
              @click="migrationStatusAddRows()"
              ><ion-icon
                class="ion-margin-end"
                name="add-circle"
                slot="icon-only"
              ></ion-icon
              >Add Migration Status</ion-button
            >
             <!-- <div>
              <ul v-for="item in migrationStatusRowsData" :key="item.id">
                <li>{{ item.nameOfThePerson}}</li>
              </ul>
            </div> -->
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
    nameOfThePerson:"",
    gender:"",
    noOfDaysMigratingPerYear:"",
    reasonsForMigrating:"",
    placeOfMigration:"",
    occupationDuringMigration:"",
    incomeFromOccupation:"",
    migrationStatusRows:{
      nameOfThePerson:"",
      gender:"",
      noOfDaysMigratingPerYear:"",
      reasonsForMigrating:"",
      placeOfMigration:"",
      occupationDuringMigration:"",
      incomeFromOccupation:"",
    },
    migrationStatusRowsData:[]
  }
},

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

  methods: {
    async migrationStatusData() {
      try {
         await axios.post("http://localhost:5000/api/bulkinsertionmigrate",this.migrationStatusRowsData
        )
      } catch (error) {
        console.error("error in migrationStatusData function", error);
      }
    },
    async migrationStatusAddRows(){
      this.migrationStatusRowsData.push({...this.migrationStatusRows});
      console.log("@@@@@@@@@@@@@@@@@@@@",this.migrationStatusRowsData)
      this.clearMigrationDataRows()
    },

    async clearMigrationDataRows(){
      this.migrationStatusRows = {
      nameOfThePerson:"",
      gender:"",
      noOfDaysMigratingPerYear:"",
      reasonsForMigrating:"",
      placeOfMigration:"",
      occupationDuringMigration:"",
      incomeFromOccupation:"",
    }
    },
},
};
</script>
