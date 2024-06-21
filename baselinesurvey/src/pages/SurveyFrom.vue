<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-img class="rsiImgSize" src="../src/assets/img/RSIWHITEL_Logo2.png"></ion-img>
        <ion-title  class="ion-text-justify ion-margin-end titleText">
          <strong>HOUSEHOLD SOCIO-ECONOMIC SURVEY</strong>
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div v-for="step in totalSteps" :key="step">
        <!-- Intermediate steps -->
        <div v-if="currentStep === step">
          <!-- <h2>Step {{ step }}: Details</h2> -->
          <div v-if="step === 1">
              <ion-card>
                <ion-card-header color="tertiary"><strong>1.General Information</strong></ion-card-header>
              </ion-card>
              <ion-card>
                <ion-card-content>
                <ion-row>
                    <ion-select
                      aria-label="District"
                      interface="popover"
                      label="Select District"
                      label-placement="floating"
                      placeholder="Select District"
                      fill="outline"
                      v-model="selectedDistrict"
                      @update:modelValue="getWcc();getMandal();onDistrictSelected()"
                    >
                    <ion-select-option v-for="items in district" :key="items.id" :value="items.id"
                        >{{items.dist_name }}</ion-select-option
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
                      v-model="selectedWccNo"
                      @update:modelValue="getProject();onWccSelected()"
                    >
                      <ion-select-option v-for="items in wcc" :key="items.id" :value="items.id"
                        >{{items.wcc_name}}</ion-select-option
                      >
                    </ion-select>
                  </ion-row>
                  <ion-row class="ion-padding-top">
                    <ion-select
                      aria-label="District"
                      interface="popover"
                      label="Select Project"
                      label-placement="floating"
                      placeholder="Select Project"
                      fill="outline"
                      v-model="selectedProjectNo"
                      @update:modelValue="getWaterShedVillage();onProjectSelected()"
                    >
                      <ion-select-option v-for="items in project" :key="items.id" :value="items.id"
                        >{{items.project_name}}</ion-select-option
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
                      v-model="nameOfTheMicroWatershed"
                      @update:modelValue="getHabitation();getGramPanchayat();onMicroWatershed()"
                    >
                      <ion-select-option v-for="items in watershed" :key="items.id" :value="items.id"
                        >{{items.micro_watershed_name}}</ion-select-option
                      >
                    </ion-select>
                  </ion-row>
                  <ion-row>
                    <ion-select
                    class="ion-margin-top"
                    aria-label="Gender"
                    interface="popover"
                    label="Name of Habitation"
                    label-placement="floating"
                    placeholder="Enter name of Habitation"
                    fill="outline"
                    v-model="nameOfHabitation"
                    @update:modelValue="onHabitation()"
                  >
                  <ion-select-option v-for="names in habitation" :key="names.id" :value="names.id"
                        >{{names.habitation_name}}</ion-select-option
                      ></ion-select>
                  </ion-row>
                  <ion-row class="ion-padding-top">
                    <ion-select
                      aria-label="District"
                      interface="popover"
                      label="Select Mandal"
                      label-placement="floating"
                      placeholder="Select Mandal"
                      fill="outline"
                      v-model = "selectedMandal"
                      @update:modelValue="onMandal()"
                    >
                      <ion-select-option v-for="names in mandal" :key="names.id" :value="names.id"
                        >{{names.mandal_name}}</ion-select-option
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
                      v-model = "selectedGramPanchayat"
                      @update:modelValue="onGramPanchayat()"
                    >
                      <ion-select-option v-for="names in gramPanchayat" :key="names.id" :value="names.id"
                        >{{names.grampanchayat_name}}</ion-select-option
                      >
                    </ion-select>
                  </ion-row>
                </ion-card-content>
              </ion-card>
              <ion-card>
                <ion-card-header color="tertiary"
                  ><strong>1.1 Individual Information</strong></ion-card-header>
                </ion-card>
                  <ion-card>
                <ion-card-content>
                  <ion-input
                    class="ion-margin-top"
                    label="Name of the Household"
                    interface="popover"
                    label-placement="floating"
                    fill="outline"
                    placeholder="Name of the Household"
                    v-model="nameofthehousehold"
                  ></ion-input>
                  <ion-input
                    class="ion-margin-top"
                    label="Household No./Door No"
                    label-placement="floating"
                    fill="outline"
                    interface="popover"
                    placeholder="Household No./Door No"
                    v-model="householdDoorNo"
                  ></ion-input>
                  <ion-input
                    type="number"
                    class="ion-margin-top"
                    label="Contact No (Mobile)"
                    label-placement="floating"
                    fill="outline"
                    placeholder="Contact No (Mobile)"
                    v-model="ContactNumber"
                  ></ion-input>
                  <ion-input
                    type="number"
                    class="ion-margin-top"
                    label="Aadhaar Card No"
                    label-placement="floating"
                    fill="outline"
                    placeholder="Enter Aadhaar Card No"
                    v-model="aadharNumber"
                  ></ion-input>
                  <ion-input
                    type="number"
                    class="ion-margin-top"
                    label="Job Card No"
                    label-placement="floating"
                    fill="outline"
                    placeholder="Job Card No"
                    v-model="jobCardNo"
                  ></ion-input>

                  <ion-card-subtitle color="tertiary" class="ion-padding ion-text-center"
                    >Economic Status</ion-card-subtitle
                  >
                  <ion-radio-group value="PoP" v-model="economicStatus">
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

                  <ion-card-subtitle color="tertiary" class="ion-padding ion-text-center"
                    >Occupation</ion-card-subtitle
                  >
                  <ion-item>
                    <ion-checkbox justify="space-between" mode="ios">Agriculture</ion-checkbox>
                  </ion-item>

                  <ion-item>
                    <ion-checkbox  justify="space-between" mode="ios">Ag Labour</ion-checkbox>
                  </ion-item>

                  <ion-item>
                    <ion-checkbox justify="space-between" mode="ios">Non –Ag labour</ion-checkbox>
                  </ion-item>

                  <ion-item>
                    <ion-checkbox justify="space-between" mode="ios">Employee</ion-checkbox>
                  </ion-item>

                  <ion-item>
                    <ion-checkbox justify="space-between" mode="ios">Business</ion-checkbox>
                  </ion-item>

                  <ion-item>
                    <ion-checkbox justify="space-between" mode="ios">Others</ion-checkbox>
                  </ion-item>

                  <ion-card-subtitle color="tertiary" class="ion-padding ion-text-center"
                    >Location</ion-card-subtitle
                  >
                  <ion-grid>
                    <ion-radio-group value="Ridge" v-model="location">
                      <ion-row>
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
                    </ion-row>
                    </ion-radio-group>
                </ion-grid>

                  <ion-card-subtitle color="tertiary" class="ion-padding ion-text-center"
                    >Social Status</ion-card-subtitle
                  >
                  <ion-grid>
                    <ion-radio-group value="SC" v-model="SocialStatus">
                      <ion-row>
                      <ion-col>
                        <ion-radio value="SC" label-placement="start"
                          >SC</ion-radio
                        >
                      </ion-col>
                      <ion-col>
                        <ion-radio value="ST" label-placement="start"
                          >ST</ion-radio
                        >
                      </ion-col>
                      <ion-col>
                        <ion-radio value="BC" label-placement="start"
                          >BC</ion-radio
                        >
                      </ion-col>
                      <ion-col>
                        <ion-radio value="Others" label-placement="start"
                          >Others</ion-radio
                        >
                      </ion-col>
                    </ion-row>
                    </ion-radio-group>
                  </ion-grid>
                    <ion-row class="ion-padding ion-text-center">
                      <ion-card-subtitle color="tertiary"
                      >Total Land Holding (Acres)
                    </ion-card-subtitle>
                  </ion-row>
                    <ion-row style="display: flex">
                      <ion-col class="ion-margin-start">
                        <ion-input
                          type="number"
                          class="ion-margin-top"
                          label="Rainfed"
                          label-placement="floating"
                          fill="outline"
                          placeholder="Rainfed"
                          v-model="totalRainfedArea"
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
                          v-model="totalIrrigatedArea"
                        ></ion-input>
                      </ion-col>
                    </ion-row >
                  <ion-card-subtitle color="tertiary" class="ion-padding ion-text-center">Type of House</ion-card-subtitle>
                  <ion-grid>
                  <ion-row>
                    <ion-radio-group value="house" v-model="houseType">
                      <ion-col>
                        <ion-radio value="puccahouse" label-placement="start"
                          >Pucca House</ion-radio
                        >
                      </ion-col>
                      <ion-col>
                        <ion-radio value="semipucca" label-placement="start"
                          >Semi Pucca</ion-radio
                        >
                      </ion-col>
                    </ion-radio-group>
                  </ion-row>
                </ion-grid>
                  <ion-card-subtitle color="tertiary" class="ion-padding ion-text-center">Own/Rented</ion-card-subtitle>
                 <ion-grid>
                  <ion-row>
                    <ion-radio-group value="subType" >
                      <ion-col>
                        <ion-radio value="SC" label-placement="start"
                          >Own</ion-radio
                        >
                      </ion-col>
                      <ion-col>
                        <ion-radio value="ST" label-placement="start"
                          >Rented</ion-radio
                        >
                      </ion-col>
                    </ion-radio-group>
                  </ion-row>
                </ion-grid>
                </ion-card-content>
              </ion-card>
          </div>

          <div v-if="step === 2">
              <ion-card>
                <ion-card-header color="tertiary"
                  ><strong>2.Household Details</strong></ion-card-header
                >
              </ion-card>
                <ion-card>
                <ion-card-content>
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
                </ion-card-content>
              </ion-card>

            <ion-button class="ion-margin" color="primary"  expand="block" @click="addRows()"
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
              <ion-card>
                <ion-card-header color="tertiary"
                  ><strong>3.Land Particulars</strong></ion-card-header
                >
              </ion-card>
                <ion-card>
                <ion-card-subtitle
                  class="ion-padding ion-text-center"
                  color="tertiary"
                  ><strong>3.1 Cultivated Area(Acres)</strong></ion-card-subtitle
                >
                <ion-card-content>
                  <ion-select
                    aria-label="Type of Ownership"
                    interface="popover"
                    label="Cultivated Area"
                    label-placement="floating"
                    placeholder="Cultivated Area"
                    fill="outline"
                  >
                    <ion-select-option value="Own"
                      >Owned Land</ion-select-option
                    >
                    <ion-select-option value="Rent"
                      >Leased-In</ion-select-option
                    >
                    <ion-select-option value="Rent"
                      >Leased-Out</ion-select-option
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
                </ion-card-content>
              </ion-card>
              <ion-card>
                <ion-card-header color="tertiary"
                  ><strong>3.2 Income from Crops(Rs)-Kharif</strong></ion-card-header
                >
              </ion-card>
                <ion-card>
                <ion-card-content>
                  <ion-select
                    aria-label="Crop Grown"
                    interface="popover"
                    label="Crop Grown"
                    label-placement="floating"
                    placeholder="Select Crop Item"
                    fill="outline"
                    class="ion-margin-top"
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
                  <ion-card-subtitle
                  class="ion-padding ion-text-center"
                  color="tertiary"
                  >Rainfed(Acres) </ion-card-subtitle
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
                    placeholder="Rainfed Yield(Qtls)"
                    label="Rainfed Yield(Qtls)"
                    fill="outline"
                    label-placement="floating"
                  ></ion-input>
                  <ion-input
                    class="ion-margin-top"
                    placeholder="Enter v"
                    fill="outline"
                    label="Rainfed(Acres) Cost of Cultivation(Rs)"
                    label-placement="floating"
                  ></ion-input>
                  <ion-input
                    class="ion-margin-top"
                    placeholder="Enter Rainfed(Acres) Rate per Qtls(Rs)"
                    fill="outline"
                    label="Rainfed(Acres) Rate per Qtls(Rs)"
                    label-placement="floating"
                  ></ion-input>
                  <ion-input
                    class="ion-margin-top"
                    placeholder="Total Rainfed Gross income"
                    fill="outline"
                    label="Rainfed(Acres) Gross Income"
                    label-placement="floating"
                  ></ion-input>
                  <ion-input
                    class="ion-margin-top"
                    placeholder="Total Rainfed Net income"
                    fill="outline"
                    label="Rainfed(Acres) Net Income(7-5)"
                    label-placement="floating"
                  ></ion-input>
                  <ion-card-subtitle
                  class="ion-padding ion-text-center"
                  color="tertiary"
                  >Irrigated(Acres) </ion-card-subtitle
                >
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
                  <ion-input
                    class="ion-margin-top"
                    placeholder="Irrigated(Acres) Gross Income"
                    fill="outline"
                    label="Total Irrigated(Acres) Gross Income"
                    label-placement="floating"
                  ></ion-input>
                  <ion-input
                    class="ion-margin-top"
                    placeholder="Total Irrigated Net Income(13-11)"
                    fill="outline"
                    label="Total Irrigated Net Income(13-11)"
                    label-placement="floating"
                  ></ion-input>
                  <ion-input
                    class="ion-margin-top"
                    placeholder="Kharif Grand Total Income"
                    label="Kharif Grand Total Income"
                    fill="outline"
                    label-placement="floating"
                  ></ion-input>
                </ion-card-content>
              </ion-card>
              <ion-card>
                <ion-card-header color="tertiary"
                  ><strong>3.3 Income from Crops(Rs)-Rabi</strong></ion-card-header
                >
              </ion-card>
                <ion-card>
                <ion-card-content>
                  <ion-select
                    aria-label="Crop Grown"
                    interface="popover"
                    label="Crop Grown"
                    label-placement="floating"
                    placeholder="Select Crop Item"
                    fill="outline"
                    class="ion-margin-top"
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
                  <ion-card-subtitle
                  class="ion-padding ion-text-center"
                  color="tertiary"
                  >Rainfed(Acres) </ion-card-subtitle
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
                    placeholder="Rainfed Yield(Qtls)"
                    label="Rainfed Yield(Qtls)"
                    fill="outline"
                    label-placement="floating"
                  ></ion-input>
                  <ion-input
                    class="ion-margin-top"
                    placeholder="Enter v"
                    fill="outline"
                    label="Rainfed(Acres) Cost of Cultivation(Rs)"
                    label-placement="floating"
                  ></ion-input>
                  <ion-input
                    class="ion-margin-top"
                    placeholder="Enter Rainfed(Acres) Rate per Qtls(Rs)"
                    fill="outline"
                    label="Rainfed(Acres) Rate per Qtls(Rs)"
                    label-placement="floating"
                  ></ion-input>
                  <ion-input
                    class="ion-margin-top"
                    placeholder="Total Rainfed Gross income"
                    fill="outline"
                    label="Rainfed(Acres) Gross Income"
                    label-placement="floating"
                  ></ion-input>
                  <ion-input
                    class="ion-margin-top"
                    placeholder="Total Rainfed Net income"
                    fill="outline"
                    label="Rainfed(Acres) Net Income(7-5)"
                    label-placement="floating"
                  ></ion-input>
                  <ion-card-subtitle
                  class="ion-padding ion-text-center"
                  color="tertiary"
                  >Irrigated(Acres) </ion-card-subtitle
                >
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
                  <ion-input
                    class="ion-margin-top"
                    placeholder="Irrigated(Acres) Gross Income"
                    fill="outline"
                    label="Total Irrigated(Acres) Gross Income"
                    label-placement="floating"
                  ></ion-input>
                  <ion-input
                    class="ion-margin-top"
                    placeholder="Total Irrigated Net Income(13-11)"
                    fill="outline"
                    label="Total Irrigated Net Income(13-11)"
                    label-placement="floating"
                  ></ion-input>
                  <ion-input
                    class="ion-margin-top"
                    placeholder="Kharif Grand Total Income"
                    label="Kharif Grand Total Income"
                    fill="outline"
                    label-placement="floating"
                  ></ion-input>
                </ion-card-content>
              </ion-card>
              <ion-button
              class="ion-margin"
              expand="block"
              color="primary"
              @click="addRows()"
              ><ion-icon
                class="ion-margin-end"
                name="add-circle"
                slot="icon-only"
              ></ion-icon
              >Add Government Scheme Details</ion-button
            >
          </div>
          <div v-if="step === 4">
            <ion-card>
              <ion-card-header color="tertiary"
                ><strong>4.Livestock Details</strong></ion-card-header
              >
            </ion-card>
              <ion-card>
              <ion-card-content>
                <ion-select
                    aria-label="Crop Grown"
                    interface="popover"
                    label-placement="floating"
                    label="Name of the Animal"
                    placeholder="Select Name of the Animal"
                    fill="outline"
                    class="ion-margin-top"
                    v-model="selectedValue"
                  >
                  <template v-for="group in groupedData" :key="group.label">
                  <ion-select-option disabled>{{
                    group.label
                  }}</ion-select-option>
                  <ion-select-option
                    v-for="option in group.options"
                    :key="option.value"
                    :value="option.value"
                  >
                    {{ option.label }}
                  </ion-select-option>
                </template>
                </ion-select>
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
              </ion-card-content>
            </ion-card>
            <ion-button
              class="ion-margin"
              color="primary"
              expand="block"
              @click="addRows()"
              ><ion-icon
                class="ion-margin-end"
                name="add-circle"
                slot="icon-only"
              ></ion-icon
              >Add Government Scheme Details</ion-button
            >
          </div>
          <div v-if="step === 5">
            <fifthPage />
            <ion-button
              class="ion-margin"
              expand="block"
              color="primary"
              @click="addRows()"
              ><ion-icon
                class="ion-margin-end"
                name="add-circle"
                slot="icon-only"
              ></ion-icon
              >Add Migration Status</ion-button
            >
          </div>
          <div v-if="step === 6">
            <SixthPage />
          </div>
          <div v-if="step === 7">
            <SeventhPage />
            <ion-button
              class="ion-margin"
              expand="block"
              color="primary"
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
            <ion-button
              class="ion-margin"
              expand="block"
              color="primary"
              @click="addRows()"
              ><ion-icon
                class="ion-margin-end"
                name="add-circle"
                slot="icon-only"
              ></ion-icon
              >Add Government Scheme Details</ion-button
            >
          </div>
          <div v-if="step === 9">
            <NinthPage />
            <ion-button
              class="ion-margin"
              expand="block"
              @click="addRows()"
              color="primary"
              ><ion-icon
                class="ion-margin-end"
                name="add-circle"
                slot="icon-only"
              ></ion-icon
              >Add Government Scheme Details</ion-button
            >
          </div>
          <div v-if="step === 10">
            <TenthPage />
            <ion-button
              class="ion-margin"
              expand="block"
              color="primary"
              @click="addRows()"
              ><ion-icon
                class="ion-margin-end"
                name="add-circle"
                slot="icon-only"
              ></ion-icon
              >Add Government Scheme Details</ion-button
            >
          </div>
          <div v-if="step === 11">
            <EleventhPage></EleventhPage>
            <ion-button
              class="ion-margin"
              expand="block"
              color="primary"
              @click="addRows()"
              ><ion-icon
                class="ion-margin-end"
                name="add-circle"
                slot="icon-only"
              ></ion-icon
              >Add Government Scheme Details</ion-button
            >
          </div>
          <div v-if="step === 12">
            <TwelvethPage></TwelvethPage>
            <ion-button
              class="ion-margin"
              color="primary"
              expand="block"
              @click="addRows()"
              ><ion-icon
                class="ion-margin-end"
                name="add-circle"
                slot="icon-only"
              ></ion-icon
              >Add Government Scheme Details</ion-button
            >
          </div>
          <div v-if="step === 13">
            <ThirteenthPage></ThirteenthPage>
            <ion-button
              class="ion-margin"
              expand="block"
              color="primary"
              @click="addRows()"
              ><ion-icon
                class="ion-margin-end"
                name="add-circle"
                slot="icon-only"
              ></ion-icon
              >Add Government Scheme Details</ion-button
            >
          </div>
          <div v-if="step === 14">
            <FourteenthPage></FourteenthPage>
            <ion-button
              class="ion-margin"
              expand="block"
              color="primary"
              @click="addRows()"
              ><ion-icon
                class="ion-margin-end"
                name="add-circle"
                slot="icon-only"
              ></ion-icon
              >Add Government Scheme Details</ion-button
            >
          </div>
          <div v-if="step === 15">
            <FifteenthPage></FifteenthPage>
            <ion-button
              class="ion-margin"
              color="primary"
              expand="block"
              @click="addRows()"
              ><ion-icon
                class="ion-margin-end"
                name="add-circle"
                slot="icon-only"
              ></ion-icon
              >Add Government Scheme Details</ion-button
            >
          </div>
          <div v-if="step === 16">
            <SixteenthPage></SixteenthPage>
            <ion-button
              class="ion-margin"
              color="primary"
              expand="block"
              @click="addRows()"
              ><ion-icon
                class="ion-margin-end"
                name="add-circle"
                slot="icon-only"
              ></ion-icon
              >Add Government Scheme Details</ion-button
            >
          </div>
          <div v-if="step === 17">
            <SeventeenthPage></SeventeenthPage>
            <ion-button
              class="ion-margin"
              expand="block"
              color="primary"
              @click="addRows()"
              ><ion-icon
                class="ion-margin-end"
                name="add-circle"
                slot="icon-only"
              ></ion-icon
              >Add Government Scheme Details</ion-button
            >
          </div>
          <div v-if="step === 18">
            <EighteenthPage></EighteenthPage>
            <ion-button
              class="ion-margin"
              color="primary"
              expand="block"
              @click="addRows()"
              ><ion-icon
                class="ion-margin-end"
                name="add-circle"
                slot="icon-only"
              ></ion-icon
              >Add Government Scheme Details</ion-button
            >
          </div>
          <div v-if="step === 19">
            <NinteenthPage></NinteenthPage>
            <ion-button
              class="ion-margin"
              color="primary"
              expand="block"
              @click="addRows()"
              ><ion-icon
                class="ion-margin-end"
                name="add-circle"
                slot="icon-only"
              ></ion-icon
              >Add Government Scheme Details</ion-button
            >
          </div>
          <div v-if="step === 20">
            <TwentythPage></TwentythPage>
            <ion-button
              class="ion-margin"
              expand="block"
              color="primary"
              @click="addRows()"
              ><ion-icon
                class="ion-margin-end"
                name="add-circle"
                slot="icon-only"
              ></ion-icon
              >Add Government Scheme Details</ion-button
            >
          </div>
          <div v-if="step === 21">
            <TwentyfirstPage></TwentyfirstPage>
            <ion-button
              class="ion-margin"
              expand="block"
              @click="addRows()"
              color="primary"
              ><ion-icon
                class="ion-margin-end"
                name="add-circle"
                slot="icon-only"
              ></ion-icon
              >Add Government Scheme Details</ion-button
            >
          </div>
          <div v-if="step === 22">
            <TwentysecondPage></TwentysecondPage>
            <ion-button
              class="ion-margin"
              expand="block"
              @click="addRows()"
              color="primary"
              ><ion-icon
                class="ion-margin-end"
                name="add-circle"
                slot="icon-only"
              ></ion-icon
              >Add Government Scheme Details</ion-button
            >
          </div>
          <div v-if="step === 23">
            <TwentythirdPage></TwentythirdPage>
            <ion-button
              class="ion-margin"
              expand="block"
              color="primary"
              @click="addRows()"
              ><ion-icon
                class="ion-margin-end"
                name="add-circle"
                slot="icon-only"
              ></ion-icon
              >Add Government Scheme Details</ion-button
            >
          </div>
          <div v-if="step === 24">
            <TwentyfourthPage></TwentyfourthPage>
            <ion-button
              class="ion-margin"
              color="primary"
              expand="block"
              @click="addRows()"
              ><ion-icon
                class="ion-margin-end"
                name="add-circle"
                slot="icon-only"
              ></ion-icon
              >Add Government Scheme Details</ion-button
            >
          </div>
          <div v-if="step === 25">
            <TwentyfifthPage></TwentyfifthPage>
          </div>
        </div>
      </div>
    </ion-content>
    <ion-footer>
      <div>
        <ion-button color="primary" class="ion-margin" v-if="currentStep !== 1" size="small" @click="prevStep()"
          ><ion-icon name="carat-back-outline"></ion-icon>Previous</ion-button
        >
        <ion-button
          class="nextButton ion-margin" size="small" color="primary"
          v-if="currentStep !== totalSteps"
          @click="nextStep()"
          >Next<ion-icon name="caret-forward-outline"></ion-icon
        ></ion-button>

        <ion-button size="small" color="primary"
          v-else-if="currentStep === totalSteps"
          class="nextButton ion-margin"
          @click="submitData()"
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
  IonItem,
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
import axios from "axios";
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
    groupedData: 
    [
        {
          label: "Dairy",
          options: [
            { value: "Cows-Improved Breed", label: "Cows-Improved Breed" },
            { value: "Cows-Local Breed", label: "Cows-Local Breed" },
            { value: "She buffaloes", label: "She buffaloes" },
          ],
        },
        {
          label: "Livestock",
          options: [
            { value: "Goat ", label: "Goat" },
            { value: "GoatWool", label: "Goat Wool" },
            { value: "Sheep", label: "Sheep" },
            { value: "SheepWool", label: "Sheep Wool" },
            { value: "Ox ", label: "Ox" },
            { value: "HeBuffaloes", label: "He Buffaloes" },
          ],
        },
        {
          label: "Poultry",
          options: [
            { value: "backyard ", label: "Back Yard" },
            { value: "commercial", label: "Commercial" },
            { value: "eggs", label: "Eggs" },
          ],
        },
        {
          label: "Fisheries",
          options: [
            { value: "fisheries ", label: "Fisheries" },
          ],
        },
        {
          label: "Piggery",
          options: [
            { value: "piggery ", label: "Piggery" },
          ],
        },
      ],
      district:[],
      wcc:[],
      selectedDistrict : null,
      selectedWccNo :null,
      project:[],
      selectedProjectNo :null,
      watershed:[],
      nameOfTheMicroWatershed:null,
      habitation:[],
      mandal:[],
      gramPanchayat:[],
      selectedMandalName:"",
      selectedGramPanchayatName:"",
         nameofthehousehold:"",
         selectedDistrictName :"",
         wccName:"",
         selectedProjectName:"",
         selectedMicroWatershed:"",
        selectedHabitation:"",
        selectedMandal:"",
         householdDoorNo:"",
         aadharNumber:"",
         economicStatus:"",
         occupationString:"",
         location:"",
         selectedGramPanchayat:"",
         jobCardNo:"",
         SocialStatus:"",
         ContactNumber:"",
         totalRainfedArea:"",
         totalIrrigatedArea:"",
         totalHoldingArea:"",
         houseType:"",
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
    IonItem
  },
  created(){ this.getDistricts()
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
    async getDistricts(){
      try {
        const response = await axios.get("http://localhost:5000/api/districts")
        this.district = response.data
      } catch (error) {
        console.error("error in get districts function",error)
      }
    },
    async getWcc(){
      try {
        const response = await axios.get("http://localhost:5000/api/wcc",{params:{id:this.selectedDistrict}})
        this.wcc = response.data
      } catch (error) {
        console.error("error in getwcc function",error)
      }
    },
    async getProject(){
      try {
        const response =  await axios.get("http://localhost:5000/api/projects",{params:{id:this.selectedWccNo}})  
        this.project=response.data
      } catch (error) {
        console.error("Error in getProject function",error)
      }
    },
    async getWaterShedVillage(){
      try {
        const response = await axios.get("http://localhost:5000/api/watershed",{params:{id:this.selectedProjectNo}})
        this.watershed = response.data
      } catch (error) {
        console.error("error in getwatershedvillage function",error)  
      }
    },
    async getHabitation(){
      try {
        const response = await axios.get("http://localhost:5000/api/habitation",{params:{id:this.nameOfTheMicroWatershed}})
        this.habitation = response.data
      } catch (error) {
        console.error("error in gethabitation function",error)
      }
    },
    async getMandal(){
      try {
        const response = await axios.get("http://localhost:5000/api/mandal",{params:{id:this.selectedDistrict}})
        this.mandal=response.data
      } catch (error) {
        console.error("error in getMandal function",error)
      }
    },
    async getGramPanchayat(){
      try {
        const response = await axios.get("http://localhost:5000/api/grampanchayat",{params:{id:this.nameOfTheMicroWatershed}})
        this.gramPanchayat = response.data
      } catch (error) {
        console.error("error in getgrampanchayat function",error)
      }
    },
    onDistrictSelected() {
      const selectedDistrictData = this.district.find(item => item.id === this.selectedDistrict);
      if (selectedDistrictData) {
        this.selectedDistrictName = selectedDistrictData.dist_name;
      }
    },
    onWccSelected(){
      const selectedWccData = this.wcc.find(item=> item.id === this.selectedWccNo);
      if(selectedWccData){
        this.wccName = selectedWccData.wcc_name;
      }
    },
    onProjectSelected(){
      const selectedProjectData = this.project.find(item=> item.id === this.selectedProjectNo);
      if(selectedProjectData){
        this.selectedProjectName = selectedProjectData.project_name
    }
  },
  onMicroWatershed(){
    const selectedMicroWatershedData = this.watershed.find(name => name.id === this.nameOfTheMicroWatershed)
    if(selectedMicroWatershedData){
      this.selectedMicroWatershed = selectedMicroWatershedData.micro_watershed_name
    }
  },
  onHabitation(){
    const selectedHabitationData = this.habitation.find(name => name.id === this.nameOfHabitation)
    if(selectedHabitationData){
      this.selectedHabitation = selectedHabitationData.habitation_name
    }
  },
  onMandal(){
    const selectedMandalData = this.mandal.find(name => name.id === this.selectedMandal)
    if(selectedMandalData){
      this.selectedMandalName = selectedMandalData.mandal_name
    }
  },
  onGramPanchayat(){
    const selectedGramPanchayatdata = this.gramPanchayat.find(name => name.id === this.selectedGramPanchayat)
    if(selectedGramPanchayatdata){
      this.selectedGramPanchayatName = selectedGramPanchayatdata.grampanchayat_name
      console.log('wcc name',selectedGramPanchayatdata.grampanchayat_name)
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
    async submitData(){
      try{
           await axios.post(`http://localhost:5000/api/individualinformation`,
        {  
           district: this.selectedDistrictName,
           wcc_name:this.wccName,
           name_of_project:this.selectedProjectName,
           name_of_the_micro_watershed: this.selectedMicroWatershed,
           head_of_the_family: this.nameofthehousehold,
            name_of_habitation: this.selectedHabitation,
            mandal: this.selectedMandalName,
            household_door_no: this.householdDoorNo,
            aadhar_number: this.aadharNumber,
            economic_status: this.economicStatus,
            occupation: this.occupationString,
            location: this.location,
            name_of_the_grampanchayat: this.selectedGramPanchayatName,
            job_card_no: this.jobCardNo,
            social_status: this.SocialStatus,
            conatact_number: this.ContactNumber,
            total_rainfed_area: this.totalRainfedArea,
            total_irrigated_area: this.totalIrrigatedArea,
            total_holding_area: this.totalHoldingArea,
            type_of_house: this.houseType,
            own_or_rented: this.subType,
            habitationId: this.selectedHabitation
        })
      }
      catch(error){
        console.error("error in submitdata function",error)
      }
    }
  },
};
</script>

<style scoped>

.nextButton {
  float: right;
}

.header {
  /* display: contents; */
  text-align: center;
  display:inline-block
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

.rsiImgSize {
  height: 3vh;
  width: 6vh;
  text-align: center;
}

/* ion-toolbar{
  background: var(--ion-header-color);
} */

.custom-header {
    font-weight: bold;
    color: #999;
  }

.titleText {
  font-size: 1.23vh;
  color:rgb(210, 210, 210)
}

ion-card {
  border-radius: 8px;
  box-shadow:1px 1px 6px rgb(96, 96, 161);
}
</style>
