<template>
    <ion-card>
        <ion-card-header color="tertiary"><h3>8.Use of Manure and Chemical Fertilizers(Previous Year)</h3></ion-card-header>
    <ion-card-contents>
        <ion-card-header color="tertiary">8.1 Manures and Fertilizers used(in Tons)</ion-card-header>
            <ion-select
                      class="ion-margin-top"
                      aria-label="Crops"
                      interface="popover"
                      label="Crops"
                      label-placement="floating"
                      placeholder="Crops"
                      fill="outline"
                    >
                      <ion-select-option value="Own">Own</ion-select-option>
                      <ion-select-option value="Rent">Rent</ion-select-option>
                    </ion-select>
                    <ion-input
            class="ion-margin-top"
            placeholder="Enter value in tons"
            fill="outline"
            label="Organic(Tons)"
            label-placement="floating"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Enter value in grams"
            fill="outline"
            label="Micro Nutrients(In Gms)"
            label-placement="floating"
          ></ion-input>
    </ion-card-contents>
    </ion-card>
    <ion-card>
        <ion-card-header color="tertiary">Chemical(Qtl)</ion-card-header>
        <ion-card-contents>
            <ion-input
            class="ion-margin-top"
            placeholder="N"
            fill="outline"
            label="N"
            label-placement="floating"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="P"
            fill="outline"
            label="P"
            label-placement="floating"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="K"
            fill="outline"
            label="K"
            label-placement="floating"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Enter cost in rupees"
            fill="outline"
            label="Cost in Rupees"
            label-placement="floating"
          ></ion-input>
        </ion-card-contents>
    </ion-card>
    <ion-card>
        <ion-input
            class="ion-margin-top"
            placeholder="Total"
            fill="outline"
            label="Total"
            label-placement="floating"
          ></ion-input>
    </ion-card>
</template>
<script>
export default{}
</script>