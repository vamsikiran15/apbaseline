<template>
  <div>
    <ion-card>
      <ion-card-header color="tertiary"
        ><strong>23.Membership Details</strong></ion-card-header
      >
    </ion-card>
    <ion-card>
      <ion-card-content>
        <ion-list>
          <ion-item
            v-for="item in membershipdetails"
            :key="item.id"
            @click="selectMembership(item)"
          >
            {{ item.membershp_details }}
            {{ item.number }}
          </ion-item>
        </ion-list>

        <ion-select
          class="ion-margin-top"
          interface="popover"
          label="Membership"
          label-placement="floating"
          placeholder="Select Membership"
          fill="outline"
          v-model="newMembership.membershp_details"
        >
        <ion-select-option value="">Select Membership</ion-select-option>
          <ion-select-option value="Self Helf Groups (SHGs)"
            >Self Helf Groups (SHGs)
          </ion-select-option>
          <ion-select-option value="User Groups">User Groups</ion-select-option>
          <ion-select-option value="Watershed Committee"
            >Watershed Committee</ion-select-option
          >
          <ion-select-option value="Others">Others</ion-select-option>
        </ion-select>
        <ion-input
          class="ion-margin-top"
          placeholder="Enter number"
          fill="outline"
           type="number"
          label="Number"
          label-placement="floating"
          v-model="newMembership.number"
        ></ion-input>
      </ion-card-content>
      <ion-button
          class="ion-margin"
          expand="block"
          color="primary"
          @click="UpdateMembershipData"
          ><ion-icon
            class="ion-margin-end"
            name="add-circle"
            slot="icon-only"
          ></ion-icon
          >Update Membership</ion-button
        >
    </ion-card>
  </div>
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
  IonButton,
  toastController,
} from "@ionic/vue";
import axios from "axios";
export default {
  props: {
    editedItem: Object,
    membershipdetails: Object,
  },
  data() {
    return {
      newMembership: {
        membershp_details: "",
        headId: "",
        id: "",
        number: "",
      },
      MembershipRows: [],
    };
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
    IonButton,
    toastController
  },
  methods: {
    selectMembership(item) {
      this.newMembership.id = item.id;
      this.newMembership.headId = item.headId;
      this.newMembership.membershp_details = item.membershp_details;
      this.newMembership.number = item.number;
    },

    updateMembershiprows() {
      // Check if any field is not empty
      if (
        Object.values(this.newMembership).some((field) => {
          if (typeof field === "string") {
            return field.trim() !== "";
          } else if (Array.isArray(field)) {
            return field.length > 0;
          } else {
            return field !== null && field !== undefined;
          }
        })
      ) {
        this.MembershipRows.push({
          ...this.newMembership,
        }); // Add a copy of newRow to rows
        this.clearMembership(); // Clear the input fields
      }
    },
    clearMembership() {
      this.newMembership = {
        membershp_details: "",
        headId: "",
        id: "",
        number: "",
      };
    },
    removeMembership(index) {
      this.MembershipRows.splice(index, 1);
    },
    // migrate data updation
    async UpdateMembershipData() {
      try {
        this.triggerToastMessage("Updated Membership Details Successfully","custom_toast")
        this.updateMembershiprows();
      const newData = this.MembershipRows.map((row) => ({
        ...row,
        headId: this.editedItem.id,
      }));

      for (const row of newData) {
        if (row.id) {
          // Update existing row
          console.log("Membership ", row);
          await this.updateMembership(row);
          this.MembershipRows = [];
        } else {
          // Insert new row
          // this.GovtBenefitRows.push(row);
          console.log("Membership  data", row);
          await this.insertMembership(row);
          this.MembershipRows = [];
        }
      }
      } catch (error) {
        this.triggerToastMessage("Failed to Update Membership Details","danger")
        console.error("error in UpdateMembershipData function",error)
      }
     
    },
    async insertMembership(row) {
      try {
        console.log("&&&&&&&&&&&&&&&&&&&&&&", row);
        const response = await axios.post(
          "http://183.82.109.39:5000/api/insertmembership",
          {
            id: row.id,
            headId: row.headId,
            membershp_details: row.membershp_details,
            number: row.number,
          }
        );
        console.log("Membership inserted:", response);
      } catch (error) {
        console.error("Error inserting Membership row:", error);
      }
    },
    async updateMembership(row) {
      try {
        const response = await axios.put(
          `http://183.82.109.39:5000/api/updatemembership/${row.id}`,
          row
        );
        console.log("Membership Row updated:", response);
      } catch (error) {
        console.error("Error updating Membership row:", error);
      }
    },
    async triggerToastMessage(message,color) {
      const toast = await toastController.create({
        message: message,
        duration: 3000,
        position: "top",
        cssClass: color, // Add your custom CSS class here
      });
      toast.present();
    },
  },
};
</script>
<style>
ion-card {
  border-radius: 8px;
  box-shadow: 1px 1px 6px rgb(96, 96, 161);
}
.custom_toast {
    --background: #df3389; /* Set your desired background color */
    --color: white; /* Set your desired text color */
  }
</style>
