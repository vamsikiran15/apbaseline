<template>
    <ion-card>
        <ion-card-header class="ion-text-center" color="tertiary"><strong>9.Pest and Disease Control Measures</strong></ion-card-header>
    </ion-card>
    <ion-card>
        <ion-card-header color="tertiary"><strong>Crop Measures</strong></ion-card-header>
      </ion-card>
        <ion-card>
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
            placeholder="Enter name of the pest/disease"
            fill="outline"
            label="Name of the Pest/Disease"
            label-placement="floating"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Biological"
            fill="outline"
            label="Biological"
            label-placement="floating"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Enter chemical"
            fill="outline"
            label="Chemical"
            label-placement="floating"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="others(Name them)"
            fill="outline"
            label="Others(Name Them)"
            label-placement="floating"
          ></ion-input>
        </ion-card-content>
    </ion-card>
    <ion-card>
        <ion-card-header color="tertiary"><strong>Amount Spent Towards</strong>
        </ion-card-header>
      </ion-card>
        <ion-card>
        <ion-card-content>
            <ion-input
            class="ion-margin-top"
            placeholder="Enter material"
            fill="outline"
            label="Material"
            label-placement="floating"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Enter Wages"
            fill="outline"
            label="Wages"
            label-placement="floating"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Total material"
            fill="outline"
            label="Total Material"
            label-placement="floating"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Total wages"
            fill="outline"
            label="Total Wages"
            label-placement="floating"
          ></ion-input>
        </ion-card-content>
    </ion-card>
    <ion-card>
      <ion-card-content>
        <ion-input
            class="ion-margin-top"
            placeholder="Grand Total"
            fill="outline"
            label="Grand Total"
            label-placement="floating"
          ></ion-input>
        </ion-card-content>
    </ion-card>
</template>
<script>
export default{}
</script>