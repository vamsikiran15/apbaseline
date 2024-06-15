<template><ion-card>
    <ion-card-header color="tertiary"><strong>17.Fodder and Feed Availability</strong></ion-card-header>
</ion-card>
<ion-card>
    <ion-card-content>
      <ion-select
                      class="ion-margin-top"
                      interface="popover"
                      label="Item"
                      label-placement="floating"
                      placeholder="Select Item"
                      fill="outline"
                    >
                      <ion-select-option value="ExistingAreaUnderFodder">Existing Area Under Fodder</ion-select-option>
                      <ion-select-option value="GreenFodder">Green Fodder</ion-select-option>
                      <ion-select-option value="DryFodder">Dry Fodder</ion-select-option>
                      <ion-select-option value="Concentrates">Concentrates</ion-select-option>
                      </ion-select>
                      <ion-select
                      class="ion-margin-top"
                      interface="popover"
                      label="Unit"
                      label-placement="floating"
                      placeholder="Select Unit"
                      fill="outline"
                    >
                      <ion-select-option value="ExistingAreaUnderFodder">Ha</ion-select-option>
                      <ion-select-option value="GreenFodder">Tons/Year</ion-select-option>
                      <ion-select-option value="DryFodder">Kg/day</ion-select-option>
                      </ion-select>
    <ion-input
            class="ion-margin-top"
            placeholder="Enter Area/Quantity"
            fill="outline"
            label="Area/Quantity"
            label-placement="floating"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Enter value of Production Tons/year"
            fill="outline"
            label="Production(Tonnes/Year)"
            label-placement="floating"
          ></ion-input>
        </ion-card-content>
</ion-card>
</template>
<script>
export default{}
</script>