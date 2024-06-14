<template>
    <ion-card>
        <ion-card-header color="tertiary" class="ion-text-center"><strong>8.Use of Manure and Chemical Fertilizers(Previous Year)</strong></ion-card-header>
        <ion-card-header  class="ion-margin-top" color="tertiary"><strong>8.1 Manures and Fertilizers used(in Tons)</strong></ion-card-header>
        <ion-card-content>
        <ion-select
                      class="ion-margin-top"
                      aria-label="Crops"
                      interface="popover"
                      label="Crops"
                      label-placement="floating"
                      placeholder="Select Crop Item"
                      fill="outline"
                    >
                      <ion-select-option value="Paddy">Paddy</ion-select-option>
                      <ion-select-option value="Meeze">Meeze</ion-select-option>
                      <ion-select-option value="Jower">Jower</ion-select-option>
                      <ion-select-option value="Cotton"
                        >Cotton</ion-select-option
                      >
                      <ion-select-option value="Mirchi"
                        >Mirchi</ion-select-option
                      >
                      <ion-select-option value="Groundnut"
                        >Groundnut</ion-select-option
                      >
                      <ion-select-option value="Red Gram"
                        >Red Gram</ion-select-option
                      >
                      <ion-select-option value="Black Gram"
                        >Black Gram</ion-select-option
                      >
                      <ion-select-option value="Green Gram"
                        >Green Gram</ion-select-option
                      >
                      <ion-select-option value="Mango">Mango</ion-select-option>
                      <ion-select-option value="Sapota"
                        >Sapota</ion-select-option
                      >
                      <ion-select-option value="Chinny"
                        >Chinny</ion-select-option
                      >
                      <ion-select-option value="Neem">Neem</ion-select-option>
                      <ion-select-option value="Cashew"
                        >Cashew</ion-select-option
                      >
                      <ion-select-option value="Vegetables"
                        >Vegetables</ion-select-option
                      >
                      <ion-select-option value="Sunflower"
                        >Sunflower</ion-select-option
                      >
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
    </ion-card-content>
    </ion-card>
    <ion-card>
        <ion-card-header color="tertiary"><strong>Chemical(Qtl)</strong></ion-card-header>
        <ion-card-content>
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
        </ion-card-content>
    </ion-card>
    <ion-card>
      <ion-card-content>
        <ion-input
            class="ion-margin-top"
            placeholder="Total"
            fill="outline"
            label="Total"
            label-placement="floating"
          ></ion-input>
        </ion-card-content>
    </ion-card>
</template>
<script>
export default{}
</script>