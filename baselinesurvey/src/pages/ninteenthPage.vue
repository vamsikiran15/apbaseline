<template><ion-card>
    <ion-card-header color="tertiary" class="ion-text-center"><strong>19.Do you Graze your Cattle in the Community Land? Yes/No</strong></ion-card-header>
</ion-card>
<ion-card>
    <ion-card-content>
      <ion-select
                      class="ion-margin-top"
                      interface="popover"
                      label="Grazing of Cattle/Animals"
                      label-placement="floating"
                      placeholder="Select Grazing of Cattle/Animals"
                      fill="outline"
                    >
                      <ion-select-option value="ownland">In Community Land</ion-select-option>
                      <ion-select-option value="community">Fed in the House</ion-select-option>
                      <ion-select-option value="purchased">In Own Lands</ion-select-option>
                      </ion-select>
    <ion-input
            class="ion-margin-top"
            placeholder="Enter number of cattle/animals"
            fill="outline"
            label="Number of Cattle/Animals"
            label-placement="floating"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Enter days"
            fill="outline"
            label="How many days in a Year"
            label-placement="floating"
          ></ion-input>
        </ion-card-content>
</ion-card>
</template>
<script>
export default{}
</script>