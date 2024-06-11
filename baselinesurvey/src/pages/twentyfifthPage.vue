<template><ion-card>
    <ion-card-header class="ion-text-center" color="tertiary"><h3>25.Soil,Land & Water Conservation</h3></ion-card-header>
</ion-card>
<ion-card>
    <ion-card-content>
    25.Are you aware of watershed development programs/soil,land & water Conservation?
    <ion-radio-group value="awarenessprograms">
                    <ion-radio
                      value="Yes"
                      label-placement="fixed"
                      class="ion-padding"
                      >Yes</ion-radio
                    >
                    <ion-radio
                      value="No"
                      label-placement="fixed"
                      class="ion-padding"
                      >No</ion-radio
                    >
                  </ion-radio-group>
                </ion-card-content>
</ion-card>
<ion-card>
    <ion-card-content>
        <ion-row>
    26.Have you received any training in watershed development programs soil,land & water conservation
</ion-row>
    <ion-radio-group value="awarenessprograms">
                    <ion-radio
                      value="Yes"
                      label-placement="fixed"
                      class="ion-padding"
                      >Yes</ion-radio
                    >
                    <ion-radio
                      value="No"
                      label-placement="fixed"
                      class="ion-padding"
                      >No</ion-radio
                    >
                  </ion-radio-group>
                </ion-card-content>
</ion-card>
<div class="ion-padding">
    <ion-datetime locale="en-GB" hour-cycle="h12"></ion-datetime>
</div>
<ion-input
class="ion-margin-top"
            placeholder="Enter name of the surveyor"
            fill="outline"
            label="Name of the Surveyor"
            label-placement="floating"></ion-input>
</template>
<script>
export default{}
</script>