<template>
    <ion-card>
        <ion-card-header class="ion-text-center" color="tertiary"><h3>24.have been the Beneficiary of any scheme of project Previously?Yes/No , if Yes</h3></ion-card-header>
        <ion-input
            class="ion-margin-top"
            placeholder="Enter Name of the Scheme/Project"
            fill="outline"
            label="Name of the Scheme/Project"
            label-placement="floating"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Enter Details of the Benefits Obtained"
            fill="outline"
            label="Details of the Benefits Obtained"
            label-placement="floating"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Enter Value of the Benefit(Rs)"
            fill="outline"
            label="Value of the Benefit(Rs)"
            label-placement="floating"
          ></ion-input>
    </ion-card>
    <div class="ion-margin">
        <ion-icon class="iconSize" color="tertiary" name="add-circle" slot="icon-only"></ion-icon>
    </div>
</template>
<script>
export default{}
</script>
<style>
.iconSize{
  height: 2.5rem;
  width:2.5rem;
}
</style>