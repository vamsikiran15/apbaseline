<template>
    <ion-card>
        <ion-card-header color="tertiary" class="ion-text-center"><strong>6.If Land Less Labourers , given the details of the Number of days Employment Availed</strong></ion-card-header>
      </ion-card>   
        <ion-card> 
        <ion-card-content>
              <ion-select
                    aria-label="Crop Grown"
                    interface="popover"
                    label="Name of the Scheme/Project"
                    label-placement="floating"
                    placeholder="Select Name of the Scheme/Project"
                    fill="outline"
                    class="ion-margin-top"
                  >
                  <ion-select-option value="watershed">Watershed</ion-select-option>
                  <ion-select-option value="mgnregs">MGNREGS</ion-select-option>
                  <ion-select-option value="others">Others</ion-select-option>
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
<style>
ion-card {
  border-radius: 8px;
  box-shadow:1px 1px 6px rgb(96, 96, 161);
}
</style>