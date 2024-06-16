<template><ion-card>
    <ion-card-header class="ion-text-center" color="tertiary"><strong>13.Availability of Drinking Water(Drinking Water requirement @ 5Litres per Day/Person)</strong></ion-card-header>
</ion-card>
<ion-card>
    <ion-card-header color="tertiary"><strong>Present Availability of Drinking Water</strong></ion-card-header>
  </ion-card>
    <ion-card>
    <ion-card-content>
        <ion-input
            class="ion-margin-top"
            placeholder="Enter Quantity"
            fill="outline"
            label="Litres/Day"
            label-placement="floating"
          ></ion-input>
          <ion-select
                      class="ion-margin-top"
                      aria-label="Source of Drinking Water"
                      interface="popover"
                      label="Source of Drinking Water"
                      label-placement="floating"
                      placeholder=""
                      fill="outline"
                    >
                      <ion-select-option value="borewell">Borewell</ion-select-option>
                      <ion-select-option value="tank">Tank</ion-select-option>
                      <ion-select-option value="publictank">Public Tap</ion-select-option>
                      <ion-select-option value="openwell">Open Well</ion-select-option>
                      <ion-select-option value="canalwater">Canal Water</ion-select-option>
          </ion-select>
        </ion-card-content>
        </ion-card>
<ion-card>
    <ion-card-header color="tertiary"><strong>Present Availability of Drinking Water</strong></ion-card-header>
  </ion-card>
    <ion-card>
    <ion-card-content>
        <ion-input
            class="ion-margin-top"
            placeholder="Enter No of Months in a Year"
            fill="outline"
            label="No of Months in a Year"
            label-placement="floating"
          ></ion-input>
          <ion-select
                      class="ion-margin-top"
                      aria-label="Source of Drinking Water"
                      interface="popover"
                      label="Source of Drinking Water"
                      label-placement="floating"
                      placeholder="Select source of drinking water"
                      fill="outline"
                    >
                    <ion-select-option value="borewell">Borewell</ion-select-option>
                      <ion-select-option value="tank">Tank</ion-select-option>
                      <ion-select-option value="publictank">Public Tap</ion-select-option>
                      <ion-select-option value="openwell">Open Well</ion-select-option>
                      <ion-select-option value="canalwater">Canal Water</ion-select-option>
          </ion-select>
        </ion-card-content>
</ion-card>
</template>
<script>
export default{}
</script>