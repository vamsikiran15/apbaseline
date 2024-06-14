<template>
    <ion-card>
        <ion-card-header color="tertiary"><strong>16.Horticulture Details</strong></ion-card-header>
            <ion-card-content>
              <ion-select
                      class="ion-margin-top"
                      interface="popover"
                      label="Details"
                      label-placement="floating"
                      placeholder="Select Details"
                      fill="outline"
                    >
                      <ion-select-option value="HorticulturePlantsTrees">Horticulture Plants/Trees</ion-select-option>
                      <ion-select-option value="mango">Mango</ion-select-option>
                      <ion-select-option value="Coconut">Coconut</ion-select-option>
                      <ion-select-option value="guava">Guava</ion-select-option>
                      <ion-select-option value="sapota">Sapota</ion-select-option>
                      <ion-select-option value="custardapple">Custard Apple</ion-select-option>
                      <ion-select-option value="lemon">Lemon</ion-select-option>
                      <ion-select-option value="sweetlime">Sweet Lime</ion-select-option>
                      <ion-select-option value="foresttrees">Forest Trees</ion-select-option>
                      <ion-select-option value="cashew">Cashew</ion-select-option>
                      <ion-select-option value="teak">Teak</ion-select-option>
                      <ion-select-option value="neem">Neem</ion-select-option>
                      <ion-select-option value="nilgiri">Nilgiri</ion-select-option>
                      <ion-select-option value="acacia">Acacia</ion-select-option>
                      <ion-select-option value="pongamia">Pongamia</ion-select-option>
                      <ion-select-option value="tamarind">Tamarind</ion-select-option>

          </ion-select>
            <ion-input
            class="ion-margin-top"
            placeholder="Enter number of details"
            fill="outline"
            label="Number of Details"
            label-placement="floating"
          ></ion-input>
        </ion-card-content>
    </ion-card>
</template>
<script>
export default{}
</script>