<template>
<ion-card class="ion-margin-top">
    <ion-card-header class="ion-text-center" color="tertiary"><strong>14.Source and Quality of Water(3ft = 1 metre)</strong></ion-card-header>
  </ion-card>
    <ion-card>   
    <ion-card-subtitle class="ion-margin-top ion-text-center" color="tertiary">Water Source</ion-card-subtitle>
        <ion-card-content>
          <ion-select
                      class="ion-margin-top"
                      aria-label="Source of Drinking Water"
                      interface="popover"
                      label="Water Source"
                      label-placement="floating"
                      placeholder="select water source"
                      fill="outline"
                    >
                      <ion-select-option value="borewell">Open</ion-select-option>
                      <ion-select-option value="tank">Borewell</ion-select-option>
                      <ion-select-option value="publictank">Tank</ion-select-option>
                      <ion-select-option value="openwell">Drip(Specify Crop)</ion-select-option>
                      <ion-select-option value="canalwater">Others</ion-select-option>
          </ion-select>
        <ion-input
            class="ion-margin-top"
            placeholder="Enter Number"
            fill="outline"
            label="Dried up well/Borewell(in Numbers)"
            label-placement="floating"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Enter Number"
            fill="outline"
            label="Functioning well/Borewell(in Numbers)"
            label-placement="floating"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Enter Metres"
            fill="outline"
            label="present Approximate Water Level(in Metres)"
            label-placement="floating"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Enter Litres"
            fill="outline"
            label="Yield from the Borewell(Litres/Minute)"
            label-placement="floating"
          ></ion-input>
          <ion-card-subtitle class="ion-margin-top ion-text-center" color="tertiary">Irrigated Area(in Ha)</ion-card-subtitle>
        </ion-card-content>
          <ion-card-header color="tertiary"><strong>Agriculture</strong></ion-card-header>
          <ion-card-content>
          <ion-input
            class="ion-margin-top"
            placeholder="Enter units in Ha"
            fill="outline"
            label="Kharif"
            label-placement="floating"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Enter units in Ha"
            fill="outline"
            label="Rabi"
            label-placement="floating"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Enter units in Ha"
            fill="outline"
            label="Summer"
            label-placement="floating"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Enter other crops"
            fill="outline"
            label="Other Crops(Specify)"
            label-placement="floating"
          ></ion-input>
        </ion-card-content>
      </ion-card>
</template>
<script>
export default{}
</script>