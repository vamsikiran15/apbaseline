<template>
    <ion-card>
        <ion-card-header color="tertiary"><strong>20.Household Assets</strong></ion-card-header>
    </ion-card>
    <ion-card>
        <ion-card-content>
          <ion-select
                      class="ion-margin-top"
                      interface="popover"
                      label="Assets"
                      label-placement="floating"
                      placeholder="Select Assets"
                      fill="outline"
                    >
                      <ion-select-option value="MotorCycle">Motor Cycle</ion-select-option>
                      <ion-select-option value="Cycle">Cycle</ion-select-option>
                      <ion-select-option value="FourWheeler">Four Wheeler</ion-select-option>
                      <ion-select-option value="BiogasLpgCookingGas">Bio gas/Lpg Cooking Gas</ion-select-option>
                      <ion-select-option value="TablesChairs">Tables/Chairs</ion-select-option>
                      <ion-select-option value="Television">Television</ion-select-option>
                      <ion-select-option value="WashingMachine">Washing Machine</ion-select-option>
                      <ion-select-option value="Mobile">Mobile</ion-select-option>
                      <ion-select-option value="Others">Others</ion-select-option>
                      </ion-select>
        <ion-input
            class="ion-margin-top"
            placeholder="Enter units"
            fill="outline"
            label="Number"
            label-placement="floating"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Enter value in Rs"
            fill="outline"
            label="Present Value(Rs)"
            label-placement="floating"
          ></ion-input>
        </ion-card-content>
    </ion-card>
</template>
<script>
export default{}
</script>