<template>
    <ion-card>
        <ion-card-header color="tertiary"><h3>10.Details of Loan Particulars(Amount in Rs)</h3></ion-card-header>
   </ion-card>
   <ion-card>
    <ion-card-header color="tertiary">Amount Borrowed</ion-card-header>
   </ion-card>
   <ion-card>
    <ion-card-header color="tertiary">Source</ion-card-header>
    <ion-card-contents>
    <ion-input
            class="ion-margin-top"
            placeholder="Enter bank"
            fill="outline"
            label="Bank"
            label-placement="floating"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Enter money lender"
            fill="outline"
            label="Money Lender"
            label-placement="floating"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Enter Dealer"
            fill="outline"
            label="Dealer"
            label-placement="floating"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Enter fellow farmer"
            fill="outline"
            label="Fellow Farmer"
            label-placement="floating"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Enter shg"
            fill="outline"
            label="SHG"
            label-placement="floating"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Others(specify)"
            fill="outline"
            label="Others(specify)"
            label-placement="floating"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Total"
            fill="outline"
            label="Total"
            label-placement="floating"
          ></ion-input>
   </ion-card-contents>
   </ion-card>
   <ion-card>
    <ion-card-header color="tertiary">Purpose</ion-card-header>
    <ion-card-contents>
        <ion-select
                      class="ion-margin-top"
                      interface="popover"
                      label="Agriculture"
                      label-placement="floating"
                      placeholder="Agriculture"
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
                    <ion-select
                      class="ion-margin-top"
                      interface="popover"
                      label="Consumption"
                      label-placement="floating"
                      placeholder="Consumption"
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
                    <ion-select
                    class="ion-margin-top"
                    aria-label="Education"
                    interface="popover"
                    label="Education"
                    label-placement="floating"
                    placeholder="Select Education"
                    fill="outline"
                  >
                    <ion-select-option value="illiterate"
                      >Illiterate</ion-select-option
                    >
                    <ion-select-option value="primary"
                      >Primary</ion-select-option
                    >
                    <ion-select-option value="upperprimary"
                      >Upper Primary</ion-select-option
                    >
                    <ion-select-option value="highschool"
                      >High School</ion-select-option
                    >
                    <ion-select-option value="interdiploma"
                      >Inter/Diploma</ion-select-option
                    >
                    <ion-select-option value="degree">Degree</ion-select-option>
                    <ion-select-option value="pg">PG</ion-select-option>
                    <ion-select-option value="others">Others</ion-select-option>
                  </ion-select>
                  <ion-select
                    class="ion-margin-top"
                    interface="popover"
                    label="Marriage"
                    label-placement="floating"
                    placeholder="Marriage"
                    fill="outline"
                    >
                    <ion-select-option value="married">Married</ion-select-option>
                    <ion-select-option value="unmarried">Unmarried</ion-select-option>
                  </ion-select>
                    <ion-select
                      class="ion-margin-top"
                      interface="popover"
                      label="Others"
                      label-placement="floating"
                      placeholder="Others"
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
    </ion-card-contents>
   </ion-card>
   <ion-card>
    <ion-card-header color="tertiary">Amount Repaid</ion-card-header>
   </ion-card>
   <ion-card>
    <ion-card-header color="tertiary">Source</ion-card-header>
    <ion-card-contents>
    <ion-input
            class="ion-margin-top"
            placeholder="Enter bank"
            fill="outline"
            label="Bank"
            label-placement="floating"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Enter money lender"
            fill="outline"
            label="Money Lender"
            label-placement="floating"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Enter Dealer"
            fill="outline"
            label="Dealer"
            label-placement="floating"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Enter fellow farmer"
            fill="outline"
            label="Fellow Farmer"
            label-placement="floating"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Enter shg"
            fill="outline"
            label="SHG"
            label-placement="floating"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Others(specify)"
            fill="outline"
            label="Others(specify)"
            label-placement="floating"
          ></ion-input>
          <ion-input
            class="ion-margin-top"
            placeholder="Total"
            fill="outline"
            label="Total"
            label-placement="floating"
          ></ion-input>
   </ion-card-contents>
   </ion-card>
   <ion-card>
    <ion-card-header color="tertiary">Purpose</ion-card-header>
    <ion-card-contents>
        <ion-select
                      class="ion-margin-top"
                      interface="popover"
                      label="Agriculture"
                      label-placement="floating"
                      placeholder="Agriculture"
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
                    <ion-select
                      class="ion-margin-top"
                      interface="popover"
                      label="Consumption"
                      label-placement="floating"
                      placeholder="Consumption"
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
                    <ion-select
                    class="ion-margin-top"
                    aria-label="Education"
                    interface="popover"
                    label="Education"
                    label-placement="floating"
                    placeholder="Select Education"
                    fill="outline"
                  >
                    <ion-select-option value="illiterate"
                      >Illiterate</ion-select-option
                    >
                    <ion-select-option value="primary"
                      >Primary</ion-select-option
                    >
                    <ion-select-option value="upperprimary"
                      >Upper Primary</ion-select-option
                    >
                    <ion-select-option value="highschool"
                      >High School</ion-select-option
                    >
                    <ion-select-option value="interdiploma"
                      >Inter/Diploma</ion-select-option
                    >
                    <ion-select-option value="degree">Degree</ion-select-option>
                    <ion-select-option value="pg">PG</ion-select-option>
                    <ion-select-option value="others">Others</ion-select-option>
                  </ion-select>
                  <ion-select
                    class="ion-margin-top"
                    interface="popover"
                    label="Marriage"
                    label-placement="floating"
                    placeholder="Marriage"
                    fill="outline"
                    >
                    <ion-select-option value="married">Married</ion-select-option>
                    <ion-select-option value="unmarried">Unmarried</ion-select-option>
                  </ion-select>
                    <ion-select
                      class="ion-margin-top"
                      interface="popover"
                      label="Others"
                      label-placement="floating"
                      placeholder="Others"
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
    </ion-card-contents>
   </ion-card>
   <ion-card>
    <ion-input  placeholder="Outstanding Amount"
            fill="outline"
            label="Outstanding Amount"
            label-placement="floating"></ion-input>
   </ion-card>
</template>
<script>
export default{}
</script>