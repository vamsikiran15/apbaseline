<template>
<ion-card>
<ion-card-header color="tertiary"><strong>15.Agriculture Implements</strong></ion-card-header>
    <ion-card-content>
      <ion-select
                      class="ion-margin-top"
                      interface="popover"
                      label="Implements"
                      label-placement="floating"
                      placeholder="Select Implement"
                      fill="outline"
                    >
                      <ion-select-option value="tractor">Tractor</ion-select-option>
                      <ion-select-option value="SprayerManualPower">Sprayer-Manual/Power</ion-select-option>
                      <ion-select-option value="CultivatorsHarrows">Cultivators/Harrows</ion-select-option>
                      <ion-select-option value="SeedDrill">Seed Drill</ion-select-option>
                      <ion-select-option value="Tresher">Tresher</ion-select-option>
                      <ion-select-option value="Ploughs">Ploughs</ion-select-option>
                      <ion-select-option value="Sickles">Sickles</ion-select-option>
                      <ion-select-option value="CrowBar">Crow Bar</ion-select-option>
                      <ion-select-option value="BullockCar">Bullock Car</ion-select-option>
                      <ion-select-option value="others">Others</ion-select-option>

          </ion-select>
          <ion-select
                      class="ion-margin-top"
                      interface="popover"
                      label="Number of implement"
                      label-placement="floating"
                      placeholder="Select number of implement"
                      fill="outline"
                    >
                      <ion-select-option value="1">1</ion-select-option>
                      <ion-select-option value="2">2</ion-select-option>
                      <ion-select-option value="3">3</ion-select-option>
                      <ion-select-option value="4">4</ion-select-option>
                      <ion-select-option value="5">5</ion-select-option>
          </ion-select>
          <ion-select
                      class="ion-margin-top"
                      interface="popover"
                      label="Owned/Hired"
                      label-placement="floating"
                      placeholder="Select owned/hired"
                      fill="outline"
                    >
                      <ion-select-option value="Owned">Owned</ion-select-option>
                      <ion-select-option value="Hired">Hired</ion-select-option>
          </ion-select>
        </ion-card-content>
</ion-card>
</template>
<script>
export default{}
</script>