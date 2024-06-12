<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="tertiary">
        <ion-title class="header" style="font-size: 1.5vh"
          ><strong>HOUSEHOLD SOCIO-ECONOMIC SURVEY</strong></ion-title
        >
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div v-for="step in totalSteps" :key="step">
        <!-- Intermediate steps -->
        <div v-if="currentStep === step">
          <!-- <h2>Step {{ step }}: Details</h2> -->
          <div v-if="step === 1">
            <ion-col>
              <ion-card>
                <ion-card-header color="tertiary">
                  1 General Information
                </ion-card-header>

                <ion-row class="ion-padding-top">
                  <ion-select
                    aria-label="District"
                    interface="popover"
                    label="Select District"
                    label-placement="floating"
                    placeholder="Select District"
                    fill="outline"
                  >
                    <ion-select-option value="apples"
                      >District 1</ion-select-option
                    >
                    <ion-select-option value="oranges"
                      >District 2</ion-select-option
                    >
                    <ion-select-option value="bananas"
                      >District 3</ion-select-option
                    >
                  </ion-select>
                </ion-row>
                <ion-row class="ion-padding-top">
                  <ion-select
                    aria-label="District"
                    interface="popover"
                    label="Select WCC"
                    label-placement="floating"
                    placeholder="Select WCC"
                    fill="outline"
                  >
                    <ion-select-option value="apples"
                      >District 1</ion-select-option
                    >
                    <ion-select-option value="oranges"
                      >District 2</ion-select-option
                    >
                    <ion-select-option value="bananas"
                      >District 3</ion-select-option
                    >
                  </ion-select>
                </ion-row>
                <ion-row class="ion-padding-top">
                  <ion-select
                    aria-label="District"
                    interface="popover"
                    label="Select WCC"
                    label-placement="floating"
                    placeholder="Select WCC"
                    fill="outline"
                  >
                    <ion-select-option value="apples"
                      >District 1</ion-select-option
                    >
                    <ion-select-option value="oranges"
                      >District 2</ion-select-option
                    >
                    <ion-select-option value="bananas"
                      >District 3</ion-select-option
                    >
                  </ion-select>
                </ion-row>
                <ion-row class="ion-padding-top">
                  <ion-select
                    aria-label="District"
                    interface="popover"
                    label="Name of the Micro Watershed Village"
                    label-placement="floating"
                    placeholder="Name of the Micro Watershed Village"
                    fill="outline"
                  >
                    <ion-select-option value="apples"
                      >District 1</ion-select-option
                    >
                    <ion-select-option value="oranges"
                      >District 2</ion-select-option
                    >
                    <ion-select-option value="bananas"
                      >District 3</ion-select-option
                    >
                  </ion-select>
                </ion-row>
                <ion-row class="ion-padding-top">
                  <ion-select
                    aria-label="District"
                    interface="popover"
                    label="Select Mandal"
                    label-placement="floating"
                    placeholder="Select Mandal"
                    fill="outline"
                  >
                    <ion-select-option value="apples"
                      >District 1</ion-select-option
                    >
                    <ion-select-option value="oranges"
                      >District 2</ion-select-option
                    >
                    <ion-select-option value="bananas"
                      >District 3</ion-select-option
                    >
                  </ion-select>
                </ion-row>
                <ion-row class="ion-padding-top">
                  <ion-select
                    aria-label="District"
                    interface="popover"
                    label="Name of the Gram Panchayat"
                    label-placement="floating"
                    placeholder="Name of the Gram Panchayat"
                    fill="outline"
                  >
                    <ion-select-option value="apples"
                      >District 1</ion-select-option
                    >
                    <ion-select-option value="oranges"
                      >District 2</ion-select-option
                    >
                    <ion-select-option value="bananas"
                      >District 3</ion-select-option
                    >
                  </ion-select>
                </ion-row>
              </ion-card>
            </ion-col>
            <ion-col>
              <ion-card>
                <ion-card-header color="tertiary"
                  >1.1 Individual Information</ion-card-header
                >
                <ion-input
                  class="ion-margin-top"
                  label="Name of the Household"
                  interface="popover"
                  label-placement="floating"
                  fill="outline"
                  placeholder="Name of the Household"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  label="Household No./Door No"
                  label-placement="floating"
                  fill="outline"
                  interface="popover"
                  placeholder="Household No./Door No"
                ></ion-input>
                <ion-input
                  type="number"
                  class="ion-margin-top"
                  label="Contact No (Mobile)"
                  label-placement="floating"
                  fill="outline"
                  placeholder="Contact No (Mobile)"
                ></ion-input>
                <ion-input
                  type="number"
                  class="ion-margin-top"
                  label="Aadhaar Card No"
                  label-placement="floating"
                  fill="outline"
                  placeholder="Enter Aadhaar Card No"
                ></ion-input>
                <ion-input
                  type="number"
                  class="ion-margin-top"
                  label="Job Card No"
                  label-placement="floating"
                  fill="outline"
                  placeholder="Job Card No"
                ></ion-input>

                <ion-card-subtitle color="tertiary" class="ion-padding"
                  >Economic Status</ion-card-subtitle
                >
                <ion-radio-group value="PoP">
                  <ion-radio
                    value="PoP"
                    label-placement="fixed"
                    class="ion-padding"
                    >PoP</ion-radio
                  >
                  <ion-radio
                    value="Poor"
                    label-placement="fixed"
                    class="ion-padding"
                    >Poor</ion-radio
                  >
                  <ion-radio
                    value="Middle"
                    label-placement="fixed"
                    class="ion-padding"
                    >Middle</ion-radio
                  >
                  <ion-radio
                    value="Rich"
                    label-placement="fixed"
                    class="ion-padding"
                    >Rich</ion-radio
                  >
                </ion-radio-group>

                <ion-card-subtitle color="tertiary" class="ion-padding"
                  >Occupation</ion-card-subtitle
                >
                <ion-item>
                  <ion-label>Agriculture</ion-label>
                  <ion-checkbox slot="end"></ion-checkbox>
                </ion-item>

                <ion-item>
                  <ion-label>Ag Labour</ion-label>
                  <ion-checkbox slot="end"></ion-checkbox>
                </ion-item>

                <ion-item>
                  <ion-label>Non –Ag labour</ion-label>
                  <ion-checkbox slot="end"></ion-checkbox>
                </ion-item>

                <ion-item>
                  <ion-label>Employee</ion-label>
                  <ion-checkbox slot="end"></ion-checkbox>
                </ion-item>

                <ion-item>
                  <ion-label>Business</ion-label>
                  <ion-checkbox slot="end"></ion-checkbox>
                </ion-item>

                <ion-item>
                  <ion-label>Others</ion-label>
                  <ion-checkbox slot="end"></ion-checkbox>
                </ion-item>

                <ion-card-subtitle color="tertiary" class="ion-padding"
                  >Location</ion-card-subtitle
                >
                <ion-row>
                  <ion-radio-group value="Ridge" class="ion-padding">
                    <ion-col size="4">
                      <ion-radio value="Ridge" label-placement="start"
                        >Ridge</ion-radio
                      >
                    </ion-col>
                    <ion-col size="4">
                      <ion-radio value="Middle" label-placement="start"
                        >Middle</ion-radio
                      >
                    </ion-col>
                    <ion-col size="4">
                      <ion-radio value="Valley" label-placement="start"
                        >Valley</ion-radio
                      >
                    </ion-col>
                  </ion-radio-group>
                </ion-row>

                <ion-card-subtitle color="tertiary" class="ion-padding"
                  >Social Status</ion-card-subtitle
                >
                <ion-row>
                  <ion-radio-group value="SC" class="ion-padding">
                    <ion-col size="3">
                      <ion-radio value="SC" label-placement="start"
                        >SC</ion-radio
                      >
                    </ion-col>
                    <ion-col size="3">
                      <ion-radio value="ST" label-placement="start"
                        >ST</ion-radio
                      >
                    </ion-col>
                    <ion-col size="3">
                      <ion-radio value="BC" label-placement="start"
                        >BC</ion-radio
                      >
                    </ion-col>
                    <ion-col size="3">
                      <ion-radio value="Others" label-placement="start"
                        >Others</ion-radio
                      >
                    </ion-col>
                  </ion-radio-group>
                  <ion-card-subtitle color="tertiary" class="ion-padding"
                    >Total Land Holding (Acres)
                  </ion-card-subtitle>
                  <ion-row style="display: flex">
                    <ion-col class="ion-margin-start">
                      <ion-input
                        type="number"
                        class="ion-margin-top"
                        label="Rainfed"
                        label-placement="floating"
                        fill="outline"
                        placeholder="Rainfed"
                      ></ion-input>
                    </ion-col>
                    <ion-col class="ion-margin-end">
                      <ion-input
                        type="number"
                        class="ion-margin-top"
                        label="Irrigated"
                        label-placement="floating"
                        fill="outline"
                        placeholder="Irrigated"
                      ></ion-input>
                    </ion-col>
                  </ion-row>
                </ion-row>
              </ion-card>
            </ion-col>
          </div>

          <div v-if="step === 2">
            <ion-col>
              <ion-card>
                <ion-card-header color="tertiary"
                  ><h3>2 Household Details</h3></ion-card-header
                >
                <ion-input
                  class="ion-margin-top"
                  label="Name of Family Member"
                  label-placement="floating"
                  fill="outline"
                  placeholder="Name of Family Member"
                  v-model="newRow.name_of_the_family_member"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  label="Relationship"
                  label-placement="floating"
                  fill="outline"
                  placeholder="Relationship"
                  v-model="newRow.relationship_with_head"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  label="Disability"
                  label-placement="floating"
                  fill="outline"
                  placeholder="Disability"
                  v-model="newRow.disability"
                ></ion-input>
                <ion-select
                  class="ion-margin-top"
                  aria-label="Gender"
                  interface="popover"
                  label="Gender"
                  label-placement="floating"
                  placeholder="Gender"
                  fill="outline"
                  v-model="newRow.gender"
                >
                  <ion-select-option value="male">Male</ion-select-option>
                  <ion-select-option value="female">Female</ion-select-option>
                  <ion-select-option value="others">Others</ion-select-option>
                </ion-select>
                <ion-input
                  class="ion-margin-top"
                  label="Age"
                  label-placement="floating"
                  fill="outline"
                  placeholder="Age"
                  v-model="newRow.age"
                ></ion-input>
                <ion-select
                  class="ion-margin-top"
                  aria-label="Education"
                  interface="popover"
                  label="Level of Education"
                  label-placement="floating"
                  placeholder="Select Education"
                  fill="outline"
                  v-model="newRow.level_of_education"
                >
                  <ion-select-option value="illiterate"
                    >Illiterate</ion-select-option
                  >
                  <ion-select-option value="primary">Primary</ion-select-option>
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
                  aria-label="Occupation"
                  interface="popover"
                  label="Occupation (Source of Livelihoods)"
                  label-placement="floating"
                  placeholder="Select Occupation"
                  fill="outline"
                  v-model="newRow.occupation"
                >
                  <ion-select-option value="agriculture"
                    >Agriculture</ion-select-option
                  >
                  <ion-select-option value="livestockrearing"
                    >Livestock rearing</ion-select-option
                  >
                  <ion-select-option value="microenterprise"
                    >Micro Enterprise</ion-select-option
                  >
                  <ion-select-option value="agrilabour"
                    >Agri-Labour</ion-select-option
                  >
                  <ion-select-option value="nonaglabour"
                    >Non-Ag labour</ion-select-option
                  >
                  <ion-select-option value="employee"
                    >Employee</ion-select-option
                  >
                  <ion-select-option value="ruralartician"
                    >Rural Artician</ion-select-option
                  >
                  <ion-select-option value="others">Others</ion-select-option>
                </ion-select>
                <ion-select
                  class="ion-margin-top"
                  aria-label="Membership"
                  interface="popover"
                  label="Membership"
                  label-placement="floating"
                  placeholder="Select Membership"
                  fill="outline"
                  v-model="newRow.membership"
                >
                  <ion-select-option value="shg">SHG</ion-select-option>
                  <ion-select-option value="ug">UG</ion-select-option>
                  <ion-select-option value="wc">WC</ion-select-option>
                  <ion-select-option value="others">Others</ion-select-option>
                </ion-select>
                <ion-input
                  class="ion-margin-top"
                  label="Annual Gross Income"
                  label-placement="floating"
                  fill="outline"
                  placeholder="Annual Gross Income"
                  v-model="newRow.annual_gross_income"
                ></ion-input>
              </ion-card>
            </ion-col>

            <ion-button
              class="ion-margin-top"
              expand="block"
              color="tertiary"
              @click="addRows()"
              ><ion-icon
                class="ion-margin-end"
                name="add-circle"
                slot="icon-only"
              ></ion-icon
              >Add Family Member Details</ion-button
            >
            <ul class="styled-list">
              <li v-for="(row, index) in rows" :key="index">
                <span class="row-details">
                  {{ row.name_of_the_family_member }},
                  {{ row.relationship_with_head }}, {{ row.disability }},
                  {{ row.gender }}, {{ row.age }}, {{ row.level_of_education }},
                  {{ row.occupation }}, {{ row.membership }},
                  {{ row.annual_gross_income }}
                </span>
                <ion-button
                  expand="block"
                  class="remove-button"
                  color="danger"
                  @click="removeRow(index)"
                  fill="clear"
                >
                  <ion-icon name="close-circle-outline"></ion-icon>
                </ion-button>
              </li>
            </ul>
            <!-- completed second section. -->
          </div>

          <div v-if="step === 3">
            <ion-col>
              <ion-card>
                <ion-card-header color="tertiary"
                  ><h3>3.Land Particulars</h3></ion-card-header
                >
                <ion-text color="tertiary"
                  ><h3>3.1 Cultivated Area(Acres)</h3></ion-text
                >
                <ion-card-header color="tertiary"
                  ><h4>Owned Land</h4></ion-card-header
                >
                <ion-input
                  class="ion-margin-top"
                  placeholder="Rainfed(Acres)"
                  fill="outline"
                  label="Rainfed(Acres)"
                  label-placement="floating"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Irrigated(Acres)"
                  fill="outline"
                  label="Irrigated(Acres)"
                  label-placement="floating"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Total"
                  label="Total"
                  fill="outline"
                  label-placement="floating"
                ></ion-input>
                <ion-select
                  class="ion-margin-top"
                  aria-label="Type of Ownership"
                  interface="popover"
                  label="Type of Ownership"
                  label-placement="floating"
                  placeholder="Type of Ownership"
                  fill="outline"
                >
                  <ion-select-option value="Own">Own</ion-select-option>
                  <ion-select-option value="Rent">Rent</ion-select-option>
                </ion-select>
              </ion-card>
              <ion-card>
                <ion-card-header class="ion-padding" color="tertiary"
                  ><h4>Leased-In</h4></ion-card-header
                >
                <ion-input
                  class="ion-margin-top"
                  placeholder="Rainfed(Acres)"
                  fill="outline"
                  label="Rainfed(Acres)"
                  label-placement="floating"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Irrigated(Acres)"
                  fill="outline"
                  label="Irrigated(Acres)"
                  label-placement="floating"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Total"
                  label="Total"
                  fill="outline"
                  label-placement="floating"
                ></ion-input>
                <ion-select
                  class="ion-margin-top"
                  aria-label="Type of Ownership"
                  interface="popover"
                  label="Type of Ownership"
                  label-placement="floating"
                  placeholder="Type of Ownership"
                  fill="outline"
                >
                  <ion-select-option value="Own">Own</ion-select-option>
                  <ion-select-option value="Rent">Rent</ion-select-option>
                </ion-select>
              </ion-card>
              <ion-card>
                <ion-card-header class="ion-padding" color="tertiary"
                  ><h4>Leased-Out</h4></ion-card-header
                >
                <ion-input
                  class="ion-margin-top"
                  placeholder="Rainfed(Acres)"
                  fill="outline"
                  label="Rainfed(Acres)"
                  label-placement="floating"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Irrigated(Acres)"
                  fill="outline"
                  label="Irrigated(Acres)"
                  label-placement="floating"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Total"
                  label="Total"
                  fill="outline"
                  label-placement="floating"
                ></ion-input>
                <ion-select
                  class="ion-margin-top"
                  aria-label="Type of Ownership"
                  interface="popover"
                  label="Type of Ownership"
                  label-placement="floating"
                  placeholder="Type of Ownership"
                  fill="outline"
                >
                  <ion-select-option value="Own">Own</ion-select-option>
                  <ion-select-option value="Rent">Rent</ion-select-option>
                </ion-select>
              </ion-card>
              <ion-card>
                <ion-card-header color="tertiary"
                  ><h4>3.2 Income from Crops(Rs)-Kharif</h4></ion-card-header
                >
                <ion-select
                  class="ion-margin-top"
                  aria-label="Crop Grown"
                  interface="popover"
                  label="Crop Grown"
                  label-placement="floating"
                  placeholder="Select Crop Item"
                  fill="outline"
                >
                  <ion-select-option value="Paddy">Paddy</ion-select-option>
                  <ion-select-option value="Meeze">Meeze</ion-select-option>
                  <ion-select-option value="Jower">Jower</ion-select-option>
                  <ion-select-option value="Cotton">Cotton</ion-select-option>
                  <ion-select-option value="Mirchi">Mirchi</ion-select-option>
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
                  <ion-select-option value="Sapota">Sapota</ion-select-option>
                  <ion-select-option value="Chinny">Chinny</ion-select-option>
                  <ion-select-option value="Neem">Neem</ion-select-option>
                  <ion-select-option value="Cashew">Cashew</ion-select-option>
                  <ion-select-option value="Vegetables"
                    >Vegetables</ion-select-option
                  >
                  <ion-select-option value="Sunflower"
                    >Sunflower</ion-select-option
                  >
                </ion-select>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Rainfed(Acres)"
                  fill="outline"
                  label="Rainfed(Acres)"
                  label-placement="floating"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Rainfed Yield(Qtls)"
                  label="Rainfed Yield(Qtls)"
                  fill="outline"
                  label-placement="floating"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Total Rainfed Net income"
                  fill="outline"
                  label="Total Rainfed Net Income(7-5)"
                  label-placement="floating"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Irrigated Area(Acres)"
                  fill="outline"
                  label="Irrigated Area(Acres)"
                  label-placement="floating"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Irigated Yield(Qtls)"
                  label="Irrigated Yield(Qtls)"
                  fill="outline"
                  label-placement="floating"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Irrigated(Acres) Cost of Cultiation(Rs)"
                  label="Irrigated(Acres) Cost of Cultiation(Rs)"
                  fill="outline"
                  label-placement="floating"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Irrigated(Acres) Rate per Qtls(Rs)"
                  fill="outline"
                  label="Irrigated(Acres) Rate per Qtls(Rs) "
                  label-placement="floating"
                ></ion-input>
                <ion-card-subtitle class="ion-padding-top" color="tertiary"
                  >Irrigated(Acres) Gross Income :</ion-card-subtitle
                >
                <ion-input
                  class="ion-margin-top"
                  placeholder="Total Irrigated Net Income"
                  fill="outline"
                  label="Total Irrigated Net Income"
                  label-placement="floating"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Kharif Grand Total Income"
                  label="Kharif Grand Total Income"
                  fill="outline"
                  label-placement="floating"
                ></ion-input>
                <ion-card-subtitle class="ion-padding-top" color="tertiary"
                  >Irrigated(Acres) Net Income(13-11) :</ion-card-subtitle
                >
                <ion-input
                  class="ion-margin-top"
                  placeholder="Total Irrigated Net Income"
                  fill="outline"
                  label="Total Irrigated Net Income"
                  label-placement="floating"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Kharif Grand Total Income"
                  label="Kharif Grand Total Income"
                  fill="outline"
                  label-placement="floating"
                ></ion-input>
              </ion-card>
              <ion-card>
                <ion-card-header color="tertiary"
                  ><h4>3.3 Income from Crops(Rs)-Rabi</h4></ion-card-header
                >
                <ion-select
                  class="ion-margin-top"
                  aria-label="Crop Grown"
                  interface="popover"
                  label="Crop Grown"
                  label-placement="floating"
                  placeholder="Select Crop Item"
                  fill="outline"
                >
                  <ion-select-option value="Paddy">Paddy</ion-select-option>
                  <ion-select-option value="Meeze">Meeze</ion-select-option>
                  <ion-select-option value="Jower">Jower</ion-select-option>
                  <ion-select-option value="Cotton">Cotton</ion-select-option>
                  <ion-select-option value="Mirchi">Mirchi</ion-select-option>
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
                  <ion-select-option value="Sapota">Sapota</ion-select-option>
                  <ion-select-option value="Chinny">Chinny</ion-select-option>
                  <ion-select-option value="Neem">Neem</ion-select-option>
                  <ion-select-option value="Cashew">Cashew</ion-select-option>
                  <ion-select-option value="Vegetables"
                    >Vegetables</ion-select-option
                  >
                  <ion-select-option value="Sunflower"
                    >Sunflower</ion-select-option
                  >
                </ion-select>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Rainfed(Acres)"
                  fill="outline"
                  label="Rainfed(Acres)"
                  label-placement="floating"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Rainfed Yield(Qtls)"
                  label="Rainfed Yield(Qtls)"
                  fill="outline"
                  label-placement="floating"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Total Rainfed Net income"
                  fill="outline"
                  label="Total Rainfed Net Income(7-5)"
                  label-placement="floating"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Irrigated Area(Acres)"
                  fill="outline"
                  label="Irrigated Area(Acres)"
                  label-placement="floating"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Irigated Yield(Qtls)"
                  label="Irrigated Yield(Qtls)"
                  fill="outline"
                  label-placement="floating"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Irrigated(Acres) Cost of Cultiation(Rs)"
                  label="Irrigated(Acres) Cost of Cultiation(Rs)"
                  fill="outline"
                  label-placement="floating"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Irrigated(Acres) Rate per Qtls(Rs)"
                  fill="outline"
                  label="Irrigated(Acres) Rate per Qtls(Rs) "
                  label-placement="floating"
                ></ion-input>
                <ion-card-subtitle class="ion-padding-top" color="tertiary"
                  >Irrigated(Acres) Gross Income :</ion-card-subtitle
                >
                <ion-input
                  class="ion-margin-top"
                  placeholder="Total Irrigated Net Income"
                  fill="outline"
                  label="Total Irrigated Net Income"
                  label-placement="floating"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Kharif Grand Total Income"
                  label="Kharif Grand Total Income"
                  fill="outline"
                  label-placement="floating"
                ></ion-input>
                <ion-card-subtitle class="ion-padding-top" color="tertiary"
                  >Irrigated(Acres) Net Income(13-11) :</ion-card-subtitle
                >
                <ion-input
                  class="ion-margin-top"
                  placeholder="Total Irrigated Net Income"
                  fill="outline"
                  label="Total Irrigated Net Income"
                  label-placement="floating"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Kharif Grand Total Income"
                  label="Kharif Grand Total Income"
                  fill="outline"
                  label-placement="floating"
                ></ion-input>
              </ion-card>
            </ion-col>
          </div>
          <div v-if="step === 4">
            <ion-card>
              <ion-card-header color="tertiary"
                ><h3>4.Livestock Details</h3></ion-card-header
              >
              <ion-card-header class="ion-margin-top" color="tertiary"
                ><h3>4.1 Dairy</h3></ion-card-header
              >
              <ion-card-subtitle class="ion-margin-top" color="tertiary"
                >Cow Improved Breed :</ion-card-subtitle
              >
              <ion-input
                class="ion-margin-top"
                placeholder="Enter existing No"
                fill="outline"
                label="Existing No"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter litres/day"
                fill="outline"
                label="Milk Production(Ltrs/Day) if applicable"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter litres/day"
                fill="outline"
                label="Milk Consumed(Ltrs/Day)"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter quantity sold by year"
                fill="outline"
                label="Quantity Sold by Year"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter Unit Value"
                fill="outline"
                label="Unit Value(Rs)"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter income generated during last year"
                fill="outline"
                label="Income Generated during Last Year"
                label-placement="floating"
              ></ion-input>
              <ion-card-subtitle class="ion-margin-top" color="tertiary"
                >Cow Local Breed :</ion-card-subtitle
              >
              <ion-input
                class="ion-margin-top"
                placeholder="Enter existing No"
                fill="outline"
                label="Existing No"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter litres/day"
                fill="outline"
                label="Milk Production(Ltrs/Day) if applicable"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter litres/day"
                fill="outline"
                label="Milk Consumed(Ltrs/Day)"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter quantity sold by year"
                fill="outline"
                label="Quantity Sold by Year"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter Unit Value"
                fill="outline"
                label="Unit Value(Rs)"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter income generated during last year"
                fill="outline"
                label="Income Generated during Last Year"
                label-placement="floating"
              ></ion-input>
              <ion-card-subtitle class="ion-margin-top" color="tertiary"
                >She Buffaloes :</ion-card-subtitle
              >
              <ion-input
                class="ion-margin-top"
                placeholder="Enter existing No"
                fill="outline"
                label="Existing No"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter litres/day"
                fill="outline"
                label="Milk Production(Ltrs/Day) if applicable"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter litres/day"
                fill="outline"
                label="Milk Consumed(Ltrs/Day)"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter quantity sold by year"
                fill="outline"
                label="Quantity Sold by Year"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter Unit Value"
                fill="outline"
                label="Unit Value(Rs)"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter income generated during last year"
                fill="outline"
                label="Income Generated during Last Year"
                label-placement="floating"
              ></ion-input>
            </ion-card>
            <ion-card>
              <ion-card-header color="tertiary"
                ><h3>4.2 Livestock</h3></ion-card-header
              >
              <ion-card-subtitle class="ion-margin-top" color="tertiary"
                >Goat :</ion-card-subtitle
              >
              <ion-input
                class="ion-margin-top"
                placeholder="Enter existing No"
                fill="outline"
                label="Existing No"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter litres/day"
                fill="outline"
                label="Milk Production(Ltrs/Day) if applicable"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter litres/day"
                fill="outline"
                label="Milk Consumed(Ltrs/Day)"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter quantity sold by year"
                fill="outline"
                label="Quantity Sold by Year"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter Unit Value"
                fill="outline"
                label="Unit Value(Rs)"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter income generated during last year"
                fill="outline"
                label="Income Generated during Last Year"
                label-placement="floating"
              ></ion-input>
              <ion-card-subtitle class="ion-margin-top" color="tertiary"
                >Goat Wool :</ion-card-subtitle
              >
              <ion-input
                class="ion-margin-top"
                placeholder="Enter existing No"
                fill="outline"
                label="Existing No"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter litres/day"
                fill="outline"
                label="Milk Production(Ltrs/Day) if applicable"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter litres/day"
                fill="outline"
                label="Milk Consumed(Ltrs/Day)"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter quantity sold by year"
                fill="outline"
                label="Quantity Sold by Year"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter Unit Value"
                fill="outline"
                label="Unit Value(Rs)"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter income generated during last year"
                fill="outline"
                label="Income Generated during Last Year"
                label-placement="floating"
              ></ion-input>
              <ion-card-subtitle class="ion-margin-top" color="tertiary"
                >Sheep :</ion-card-subtitle
              >
              <ion-input
                class="ion-margin-top"
                placeholder="Enter existing No"
                fill="outline"
                label="Existing No"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter litres/day"
                fill="outline"
                label="Milk Production(Ltrs/Day) if applicable"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter litres/day"
                fill="outline"
                label="Milk Consumed(Ltrs/Day)"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter quantity sold by year"
                fill="outline"
                label="Quantity Sold by Year"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter Unit Value"
                fill="outline"
                label="Unit Value(Rs)"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter income generated during last year"
                fill="outline"
                label="Income Generated during Last Year"
                label-placement="floating"
              ></ion-input>
              <ion-card-subtitle class="ion-margin-top" color="tertiary"
                >Sheep Wool :</ion-card-subtitle
              >
              <ion-input
                class="ion-margin-top"
                placeholder="Enter existing No"
                fill="outline"
                label="Existing No"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter litres/day"
                fill="outline"
                label="Milk Production(Ltrs/Day) if applicable"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter litres/day"
                fill="outline"
                label="Milk Consumed(Ltrs/Day)"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter quantity sold by year"
                fill="outline"
                label="Quantity Sold by Year"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter Unit Value"
                fill="outline"
                label="Unit Value(Rs)"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter income generated during last year"
                fill="outline"
                label="Income Generated during Last Year"
                label-placement="floating"
              ></ion-input>
              <ion-card-subtitle class="ion-margin-top" color="tertiary"
                >Ox :</ion-card-subtitle
              >
              <ion-input
                class="ion-margin-top"
                placeholder="Enter existing No"
                fill="outline"
                label="Existing No"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter litres/day"
                fill="outline"
                label="Milk Production(Ltrs/Day) if applicable"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter litres/day"
                fill="outline"
                label="Milk Consumed(Ltrs/Day)"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter quantity sold by year"
                fill="outline"
                label="Quantity Sold by Year"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter Unit Value"
                fill="outline"
                label="Unit Value(Rs)"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter income generated during last year"
                fill="outline"
                label="Income Generated during Last Year"
                label-placement="floating"
              ></ion-input>
              <ion-card-subtitle class="ion-margin-top" color="tertiary"
                >He Buffaloes :</ion-card-subtitle
              >
              <ion-input
                class="ion-margin-top"
                placeholder="Enter existing No"
                fill="outline"
                label="Existing No"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter litres/day"
                fill="outline"
                label="Milk Production(Ltrs/Day) if applicable"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter litres/day"
                fill="outline"
                label="Milk Consumed(Ltrs/Day)"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter quantity sold by year"
                fill="outline"
                label="Quantity Sold by Year"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter Unit Value"
                fill="outline"
                label="Unit Value(Rs)"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter income generated during last year"
                fill="outline"
                label="Income Generated during Last Year"
                label-placement="floating"
              ></ion-input>
            </ion-card>
            <ion-card>
              <ion-card-header color="tertiary"
                ><h3>4.3 Poultry</h3></ion-card-header
              >
              <ion-card-subtitle class="ion-margin-top" color="tertiary"
                >Back yard :</ion-card-subtitle
              >
              <ion-input
                class="ion-margin-top"
                placeholder="Enter existing No"
                fill="outline"
                label="Existing No"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter litres/day"
                fill="outline"
                label="Milk Production(Ltrs/Day) if applicable"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter litres/day"
                fill="outline"
                label="Milk Consumed(Ltrs/Day)"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter quantity sold by year"
                fill="outline"
                label="Quantity Sold by Year"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter Unit Value"
                fill="outline"
                label="Unit Value(Rs)"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter income generated during last year"
                fill="outline"
                label="Income Generated during Last Year"
                label-placement="floating"
              ></ion-input>
              <ion-card-subtitle class="ion-margin-top" color="tertiary"
                >Commercial :</ion-card-subtitle
              >
              <ion-input
                class="ion-margin-top"
                placeholder="Enter existing No"
                fill="outline"
                label="Existing No"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter litres/day"
                fill="outline"
                label="Milk Production(Ltrs/Day) if applicable"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter litres/day"
                fill="outline"
                label="Milk Consumed(Ltrs/Day)"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter quantity sold by year"
                fill="outline"
                label="Quantity Sold by Year"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter Unit Value"
                fill="outline"
                label="Unit Value(Rs)"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter income generated during last year"
                fill="outline"
                label="Income Generated during Last Year"
                label-placement="floating"
              ></ion-input>
              <ion-card-subtitle class="ion-margin-top" color="tertiary"
                >Eggs :</ion-card-subtitle
              >
              <ion-input
                class="ion-margin-top"
                placeholder="Enter existing No"
                fill="outline"
                label="Existing No"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter litres/day"
                fill="outline"
                label="Milk Production(Ltrs/Day) if applicable"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter litres/day"
                fill="outline"
                label="Milk Consumed(Ltrs/Day)"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter quantity sold by year"
                fill="outline"
                label="Quantity Sold by Year"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter Unit Value"
                fill="outline"
                label="Unit Value(Rs)"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter income generated during last year"
                fill="outline"
                label="Income Generated during Last Year"
                label-placement="floating"
              ></ion-input>
            </ion-card>
            <ion-card>
              <ion-card-header color="tertiary"
                ><h3>4.4 Piggery</h3></ion-card-header
              >
              <ion-card-subtitle color="tertiary" class="ion-margin-top"
                >Piggery:</ion-card-subtitle
              >
              <ion-input
                class="ion-margin-top"
                placeholder="Enter existing No"
                fill="outline"
                label="Existing No"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter litres/day"
                fill="outline"
                label="Milk Production(Ltrs/Day) if applicable"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter litres/day"
                fill="outline"
                label="Milk Consumed(Ltrs/Day)"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter quantity sold by year"
                fill="outline"
                label="Quantity Sold by Year"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter Unit Value"
                fill="outline"
                label="Unit Value(Rs)"
                label-placement="floating"
              ></ion-input>
              <ion-input
                class="ion-margin-top"
                placeholder="Enter income generated during last year"
                fill="outline"
                label="Income Generated during Last Year"
                label-placement="floating"
              ></ion-input>
            </ion-card>
          </div>
          <div v-if="step === 5">
            <fifthPage />
            <ion-button
              class="ion-margin-top"
              expand="block"
              color="tertiary"
              @click="addRows()"
              >Add Family Member Details</ion-button
            >
          </div>
          <div v-if="step === 6">
            <SixthPage />
          </div>
          <div v-if="step === 7">
            <SeventhPage />
            <ion-button
              class="ion-margin-top"
              expand="block"
              color="tertiary"
              @click="addRows()"
              ><ion-icon
                class="ion-margin-end"
                name="add-circle"
                slot="icon-only"
              ></ion-icon
              >Add Government Scheme Details</ion-button
            >
          </div>
          <div v-if="step === 8">
            <Eighthpage />
          </div>
          <div v-if="step === 9">
            <NinthPage />
          </div>
          <div v-if="step === 10">
            <TenthPage />
          </div>
          <div v-if="step === 11">
            <EleventhPage></EleventhPage>
          </div>
          <div v-if="step === 12">
            <TwelvethPage></TwelvethPage>
          </div>
          <div v-if="step === 13">
            <ThirteenthPage></ThirteenthPage>
          </div>
          <div v-if="step === 14">
            <FourteenthPage></FourteenthPage>
          </div>
          <div v-if="step === 15">
            <FifteenthPage></FifteenthPage>
          </div>
          <div v-if="step === 16">
            <SixteenthPage></SixteenthPage>
          </div>
          <div v-if="step === 17">
            <SeventeenthPage></SeventeenthPage>
          </div>
          <div v-if="step === 18">
            <EighteenthPage></EighteenthPage>
          </div>
          <div v-if="step === 19">
            <NinteenthPage></NinteenthPage>
          </div>
          <div v-if="step === 20">
            <TwentythPage></TwentythPage>
          </div>
          <div v-if="step === 21">
            <TwentyfirstPage></TwentyfirstPage>
          </div>
          <div v-if="step === 22">
            <TwentysecondPage></TwentysecondPage>
          </div>
          <div v-if="step === 23">
            <TwentythirdPage></TwentythirdPage>
          </div>
          <div v-if="step === 24">
            <TwentyfourthPage></TwentyfourthPage>
          </div>
          <div v-if="step === 25">
            <TwentyfifthPage></TwentyfifthPage>
          </div>
        </div>
      </div>
    </ion-content>
    <ion-footer>
      <div class="ion-padding">
        <ion-button
          color="tertiary"
          v-if="currentStep !== 1"
          @click="prevStep()"
          ><ion-icon name="carat-back-outline"></ion-icon>Previous</ion-button
        >
        <ion-button
          class="nextButton"
          color="tertiary"
          v-if="currentStep !== totalSteps"
          @click="nextStep()"
          ><ion-icon name="caret-forward-outline"></ion-icon>Next</ion-button
        >

        <ion-button
          v-else-if="currentStep === totalSteps"
          class="nextButton"
          color="tertiary"
          @click="submitForm"
          ><ion-icon name="checkmark-outline"></ion-icon>Submit</ion-button
        >
        <ion-ripple-effect></ion-ripple-effect>
      </div>
    </ion-footer>
  </ion-page>
</template>
<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonLabel,
  IonRadioGroup,
  IonRadio,
  IonList,
  IonIcon,
  IonButton,
  IonButtons,
} from "@ionic/vue";
import fifthPage from "./fifthPage.vue";
import SixthPage from "./sixthPage.vue";
import SeventhPage from "./seventhPage.vue";
import Eighthpage from "./eighthpage.vue";
import NinthPage from "./ninthPage.vue";
import TenthPage from "./tenthPage.vue";
import EleventhPage from "./eleventhPage.vue";
import TwelvethPage from "./twelvethPage.vue";
import ThirteenthPage from "./thirteenthPage.vue";
import FourteenthPage from "./fourteenthPage.vue";
import FifteenthPage from "./fifteenthPage.vue";
import SixteenthPage from "./sixteenthPage.vue";
import SeventeenthPage from "./seventeenthPage.vue";
import EighteenthPage from "./eighteenthPage.vue";
import NinteenthPage from "./ninteenthPage.vue";
import TwentythPage from "./twentythPage.vue";
import TwentyfirstPage from "./twentyfirstPage.vue";
import TwentysecondPage from "./twentysecondPage.vue";
import TwentythirdPage from "./twentythirdPage.vue";
import TwentyfourthPage from "./twentyfourthPage.vue";
import TwentyfifthPage from "./twentyfifthPage.vue";
export default {
  data() {
    return {
      currentStep: 1,
      totalSteps: 25, // Update this to the total number of steps
      newRow: {
        name_of_the_family_member: "",
        relationship_with_head: "",
        disability: "",
        gender: "",
        age: "",
        level_of_education: "",
        occupation: [],
        annual_gross_income: "",
        membership: "",
      },
      rows: [],

      head_of_the_family: "",
    };
  },
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonRow,
    IonCol,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonInput,
    IonSelect,
    IonSelectOption,
    IonLabel,
    IonRadioGroup,
    IonRadio,
    IonList,
    fifthPage,
    SixthPage,
    SeventhPage,
    Eighthpage,
    NinthPage,
    TenthPage,
    EleventhPage,
    TwelvethPage,
    ThirteenthPage,
    FourteenthPage,
    FifteenthPage,
    SixteenthPage,
    SeventeenthPage,
    EighteenthPage,
    NinteenthPage,
    TwentythPage,
    TwentyfirstPage,
    TwentysecondPage,
    TwentythirdPage,
    TwentyfourthPage,
    IonIcon,
    IonButton,
    TwentyfifthPage,
  },
  methods: {
    nextStep() {
      if (this.currentStep < this.totalSteps) {
        this.currentStep++;
      }
    },
    prevStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    },
    addRows() {
      // Check if any field is not empty
      if (
        Object.values(this.newRow).some((field) => {
          if (typeof field === "string") {
            return field.trim() !== "";
          } else if (Array.isArray(field)) {
            return field.length > 0;
          } else {
            return field !== null && field !== undefined;
          }
        })
      ) {
        this.rows.push({ ...this.newRow }); // Add a copy of newRow to rows
        console.log("this rows", this.rows);
        this.clearFields(); // Clear the input fields
      }
    },
    clearFields() {
      this.newRow = {
        name_of_the_family_member: "",
        relationship_with_head: "",
        disability: "",
        gender: "",
        age: "",
        level_of_education: "",
        occupation: "",
        annual_gross_income: "",
        membership: "",
      };
    },
    removeRow(index) {
      this.rows.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.nextButton {
  float: right;
}
.header {
  display: contents;
  text-align: center;
}
.styled-list {
  list-style-type: none;
  padding: 0;
}

.styled-list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px;
}

.row-details {
  flex: 1;
  margin-right: 10px;
}

.remove-button {
  flex-shrink: 0;
  --padding-start: 0;
  --padding-end: 0;
}

.remove-button ion-icon {
  font-size: 1.5rem;
  color: red;
}
</style>
