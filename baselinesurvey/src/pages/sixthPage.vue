<template>
    <ion-card>
        <ion-card-header color="tertiary" class="ion-text-center">6.If Land Less Labourers , given the details of the Number of days Employment Availed</ion-card-header>
            <ion-card-content>
              <ion-select
                    aria-label="Crop Grown"
                    interface="popover"
                    label="Name of the Scheme/Project"
                    label-placement="floating"
                    placeholder="Select Name of the Scheme/Project"
                    fill="outline"
                  >
                  <ion-select-option value="Own">Watershed</ion-select-option>
                  <ion-select-option value="Rent">MGNREGS</ion-select-option>
                  <ion-select-option value="Rent">Others</ion-select-option>
                </ion-select>
            <ion-input
            class="ion-margin-top"
            placeholder="Enter days"
            fill="outline"
            label="Man-Days"
            label-placement="floating"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Enter days"
            fill="outline"
            label="Wage/Days"
            label-placement="floating"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Enter days"
            fill="outline"
            label="Income(Rs)"
            label-placement="floating"
          ></ion-input>
        </ion-card-content>
    </ion-card>
    <ion-card>
        <ion-card-content>
            <ion-input class="ion-margin-top"
            placeholder="Total"
            fill="outline"
            type="read-only"
            label="Total"
            label-placement="floating"></ion-input>
        </ion-card-content>
    </ion-card>
</template>
<script>
export default{}
</script>