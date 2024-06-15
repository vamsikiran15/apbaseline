<template>
<ion-card>
    <ion-card-header color="tertiary" class="ion-text-center"><strong>18.Fodder/Fuel use during previous year(1 ton = 1000kgs, 1 Head load = 25kgs)</strong></ion-card-header>
</ion-card>
<ion-card>
    <ion-card-content>
      <ion-select
                      class="ion-margin-top"
                      interface="popover"
                      label="Details"
                      label-placement="floating"
                      placeholder="Select Details"
                      fill="outline"
                    >
                      <ion-select-option value="ownland">Own Land</ion-select-option>
                      <ion-select-option value="community">Community</ion-select-option>
                      <ion-select-option value="purchased">Purchased</ion-select-option>
                      <ion-select-option value="others">Others</ion-select-option>
                      </ion-select>
    <ion-input
            class="ion-margin-top"
            placeholder="Enter value in Tons"
            fill="outline"
            label="Fodder Utilization(In Tons)"
            label-placement="floating"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Enter value"
            fill="outline"
            label="Fire/Fuel Cow Dung"
            label-placement="floating"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Enter values"
            fill="outline"
            label="Firewood"
            label-placement="floating"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Enter values"
            fill="outline"
            label="Agricultural Waste"
            label-placement="floating"
          ></ion-input>
        </ion-card-content>
</ion-card>
</template>
<script>
export default{}
</script>