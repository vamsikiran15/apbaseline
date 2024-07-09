<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button
            class="backButton"
            defaultHref="/landingpage"
          ></ion-back-button>
        </ion-buttons>
        <!-- <ion-img
          class="rsiImgSize"
          src="../src/assets/img/RSIWHITEL_Logo2.png"
        ></ion-img>
        <ion-title class="ion-text-justify ion-margin-end titleText">
          <strong>HOUSEHOLD SOCIO-ECONOMIC SURVEY</strong>
        </ion-title> -->
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card>
        <ion-row class="ion-padding">
          <ion-col>
            <ion-select
              aria-label="Select Step"
              interface="popover"
              :label="currentStepLabel"
              label-placement="floating"
              placeholder="Go to Step"
              fill="outline"
              v-model="selectedStep"
              @ionChange="navigateToStep"
            >
              <ion-select-option
                v-for="(stepName, index) in steps"
                :key="index"
                :value="index + 1"
              >
                {{ stepName }}
              </ion-select-option>
            </ion-select>
          </ion-col>
        </ion-row>
      </ion-card>
      <div v-for="step in totalSteps" :key="step">
        <!-- Intermediate steps -->
        <div v-if="currentStep === step">
          <!-- <h2>Step {{ step }}: Details</h2> -->
          <div v-if="step === 1">
            <ion-card>
              <ion-card-header color="tertiary"
                ><strong>1.General Information</strong></ion-card-header
              >
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
                    @update:modelValue="
                      getWcc();
                      getMandal();
                      onDistrictSelected();
                    "
                  >
                    <ion-select-option
                      v-for="items in district"
                      :key="items.id"
                      :value="items.id"
                      >{{ items.dist_name }}</ion-select-option
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
                    @update:modelValue="
                      getProject();
                      onWccSelected();
                    "
                  >
                    <ion-select-option
                      v-for="items in wcc"
                      :key="items.id"
                      :value="items.id"
                      >{{ items.wcc_name }}</ion-select-option
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
                    @update:modelValue="
                      getWaterShedVillage();
                      onProjectSelected();
                    "
                  >
                    <ion-select-option
                      v-for="items in project"
                      :key="items.id"
                      :value="items.id"
                      >{{ items.project_name }}</ion-select-option
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
                    @update:modelValue="
                      getHabitation();
                      getGramPanchayat();
                      onMicroWatershed();
                    "
                  >
                    <ion-select-option
                      v-for="items in watershed"
                      :key="items.id"
                      :value="items.id"
                      >{{ items.micro_watershed_name }}</ion-select-option
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
                    <ion-select-option
                      v-for="names in habitation"
                      :key="names.id"
                      :value="names.id"
                      >{{ names.habitation_name }}</ion-select-option
                    ></ion-select
                  >
                </ion-row>
                <ion-row class="ion-padding-top">
                  <ion-select
                    aria-label="District"
                    interface="popover"
                    label="Select Mandal"
                    label-placement="floating"
                    placeholder="Select Mandal"
                    fill="outline"
                    v-model="selectedMandal"
                    @update:modelValue="onMandal()"
                  >
                    <ion-select-option
                      v-for="names in mandal"
                      :key="names.id"
                      :value="names.id"
                      >{{ names.mandal_name }}</ion-select-option
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
                    v-model="selectedGramPanchayat"
                    @update:modelValue="onGramPanchayat()"
                  >
                    <ion-select-option
                      v-for="names in gramPanchayat"
                      :key="names.id"
                      :value="names.id"
                      >{{ names.grampanchayat_name }}</ion-select-option
                    >
                  </ion-select>
                </ion-row>
              </ion-card-content>
            </ion-card>
            <ion-card>
              <ion-card-header color="tertiary"
                ><strong>1.1 Individual Information</strong></ion-card-header
              >
            </ion-card>
            <ion-card>
              <ion-card-content>
                <ion-input
                  type="string"
                  class="ion-margin-top"
                  label="Name of the Household"
                  interface="popover"
                  label-placement="floating"
                  fill="outline"
                  placeholder="Name of the Household"
                  v-model="nameofthehousehold"
                  @input="stringValidation"
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
                  type="tel"
                  maxlength="12"
                  class="ion-margin-top"
                  label="Contact No (Mobile)"
                  label-placement="floating"
                  fill="outline"
                  placeholder="Contact No (Mobile)"
                  v-model="ContactNumber"
                  @input="ContactNumberValidation"
                  @touchstart="touched = true"
                  @mousedown="touched = true"
                ></ion-input>
                <ion-text
                  v-if="(touched || dirty) && ValidPhoneNumberShowingMessage"
                  color="danger"
                >
                  Please enter a valid Phone Number.
                </ion-text>
                <ion-input
                  type="tel"
                  class="ion-margin-top"
                  label="Aadhaar Card No"
                  maxlength="16"
                  label-placement="floating"
                  fill="outline"
                  placeholder="Enter Aadhaar Card No"
                  v-model="aadharNumber"
                  @input="aadharNumberValidation"
                  @touchstart="touched = true"
                  @mousedown="touched = true"
                ></ion-input>
                <ion-text
                  v-if="(touched || dirty) && ValidAadharNumberShowingMessage"
                  color="danger"
                >
                  Please enter valid Aadhar Number.
                </ion-text>
                <ion-input
                  type="number"
                  class="ion-margin-top"
                  label="Job Card No"
                  label-placement="floating"
                  fill="outline"
                  placeholder="Job Card No"
                  v-model="jobCardNo"
                ></ion-input>

                <ion-card-subtitle
                  color="tertiary"
                  class="ion-padding ion-text-center"
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

                <ion-card-subtitle
                  color="tertiary"
                  class="ion-padding ion-text-center"
                  >Occupation</ion-card-subtitle
                >
                <ion-item>
                  <ion-label>Agriculture</ion-label>
                  <input
                    v-model="occupation"
                    type="checkbox"
                    :value="'Agriculture'"
                  />
                  <!-- <ion-label>Agriculture</ion-label>
                    <ion-checkbox
                      slot="end"
                      v-model="editedItem.occupation"
                      :true-value="'Ag Labour'"
                    ></ion-checkbox> -->
                </ion-item>

                <ion-item>
                  <ion-label>Ag Labour</ion-label>
                  <input
                    v-model="occupation"
                    type="checkbox"
                    :value="'Ag Labour'"
                  />
                  <!-- <ion-checkbox
                      slot="end"
                      value="Ag Labour"
                      v-model="editedItem.occupation"
                    ></ion-checkbox> -->
                </ion-item>

                <ion-item>
                  <ion-label>Non –Ag labour</ion-label>
                  <input
                    v-model="occupation"
                    type="checkbox"
                    :value="'Non–Ag labour'"
                  />
                  <!-- <ion-checkbox
                      slot="end"
                      v-model="editedItem.occupation"
                    ></ion-checkbox> -->
                </ion-item>

                <ion-item>
                  <ion-label>Employee</ion-label>
                  <input
                    v-model="occupation"
                    type="checkbox"
                    :value="'Employee'"
                  />
                  <!-- <ion-checkbox
                      slot="end"
                      v-model="editedItem.occupation"
                    ></ion-checkbox> -->
                </ion-item>

                <ion-item>
                  <ion-label>Business</ion-label>
                  <input
                    v-model="occupation"
                    type="checkbox"
                    :value="'Business'"
                  />
                  <!-- <ion-checkbox
                      slot="end"
                      v-model="editedItem.occupation"
                    ></ion-checkbox> -->
                </ion-item>
                <ion-item>
                  <ion-label>Student</ion-label>
                  <input
                    v-model="occupation"
                    type="checkbox"
                    :value="'Student'"
                  />
                  <!-- <ion-checkbox
                      slot="end"
                      v-model="editedItem.occupation"
                    ></ion-checkbox> -->
                </ion-item>

                <ion-item>
                  <ion-label>Others</ion-label>
                  <input
                    v-model="occupation"
                    type="checkbox"
                    :value="'Others'"
                  />
                  <!-- <ion-checkbox
                      slot="end"
                      v-model="editedItem.occupation"
                    ></ion-checkbox> -->
                </ion-item>

                <ion-card-subtitle
                  color="tertiary"
                  class="ion-padding ion-text-center"
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

                <ion-card-subtitle
                  color="tertiary"
                  class="ion-padding ion-text-center"
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
                </ion-row>
                <ion-row>
                  <ion-input
                    class="ion-margin-top"
                    label="Total"
                    label-placement="floating"
                    fill="outline"
                    placeholder="Total"
                    v-model="totalHoldingArea"
                    readonly="readonly"
                  ></ion-input>
                </ion-row>
                <ion-card-subtitle
                  color="tertiary"
                  class="ion-padding ion-text-center"
                  >Type of House</ion-card-subtitle
                >
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
                <ion-card-subtitle
                  color="tertiary"
                  class="ion-padding ion-text-center"
                  >Own/Rented</ion-card-subtitle
                >
                <ion-grid>
                  <ion-row>
                    <ion-radio-group v-model="subType">
                      <ion-col>
                        <ion-radio value="Own" label-placement="start"
                          >Own</ion-radio
                        >
                      </ion-col>
                      <ion-col>
                        <ion-radio value="Rented" label-placement="start"
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
          <ion-item-sliding v-for="(item,index) in householdDetailsRowsData" :key="item.id">
           <ion-item @click="selectHouseholdMember(item,index)">
            {{item.name_of_the_family_member}}
      </ion-item>

      <ion-item-options side="end">
        <ion-item-option color="danger" @click="removeRow(index)">
          <ion-icon slot="icon-only" icon="trash"></ion-icon>
          <strong>Delete</strong>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>
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
                  @input="stringValidation"
                ></ion-input>
                <ion-select
                  class="ion-margin-top"
                  aria-label="Relationship"
                  interface="popover"
                  label="Relationship"
                  label-placement="floating"
                  placeholder="Select Relationship"
                  fill="outline"
                  v-model="newRow.relationship_with_head"
                >
                  <ion-select-option value=""
                    >Select Relationship</ion-select-option
                  >
                  <ion-select-option value="Father">Father</ion-select-option>
                  <ion-select-option value="Mother">Mother</ion-select-option>
                  <ion-select-option value="Husband">Husband</ion-select-option>
                  <ion-select-option value="Wife">Wife</ion-select-option>
                  <ion-select-option value="Son">Son</ion-select-option>
                  <ion-select-option value="Son-In-Law"
                    >Son-In-Law</ion-select-option
                  >
                  <ion-select-option value="Daughter"
                    >Daughter</ion-select-option
                  >
                  <ion-select-option value="Daughter-In-Law"
                    >Daughter-In-Law</ion-select-option
                  >
                  <ion-select-option value="Brother">Brother</ion-select-option>
                  <ion-select-option value="Brother-In-Law"
                    >Brother-In-Law</ion-select-option
                  >
                  <ion-select-option value="Sister">Sister</ion-select-option>
                  <ion-select-option value="Sister-In-Law"
                    >Sister-In-Law</ion-select-option
                  >
                  <ion-select-option value="Grandfather"
                    >Grandfather</ion-select-option
                  >
                  <ion-select-option value="Grandmother"
                    >Grandmother</ion-select-option
                  >
                  <ion-select-option value="Grandson"
                    >Grandson</ion-select-option
                  >
                  <ion-select-option value="Uncle">Uncle</ion-select-option>
                  <ion-select-option value="Aunt">Aunt</ion-select-option>
                  <ion-select-option value="Nephew">Nephew</ion-select-option>
                  <ion-select-option value="Niece">Niece</ion-select-option>
                  <ion-select-option value="Cousins">Cousins</ion-select-option>
                </ion-select>
                <!-- <ion-input
                  class="ion-margin-top"
                  label="Relationship"
                  label-placement="floating"
                  fill="outline"
                  placeholder="Relationship"
                  v-model="newRow.relationship_with_head"
                ></ion-input> -->
                <ion-select
                  class="ion-margin-top"
                  aria-label="Disability"
                  interface="popover"
                  label="Disability"
                  label-placement="floating"
                  placeholder="Select Disability"
                  fill="outline"
                  v-model="newRow.disability"
                >
                  <ion-select-option value="yes">Yes</ion-select-option>
                  <ion-select-option value="no">No</ion-select-option>
                </ion-select>
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
                  type="number"
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
                  <ion-select-option value=""
                    >Select Level of Education</ion-select-option
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
                  :multiple="true"
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
                  <ion-select-option value=""
                    >Select Membership</ion-select-option
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
                  type="number"
                  placeholder="Annual Gross Income"
                  v-model="newRow.annual_gross_income"
                ></ion-input>
              </ion-card-content>
              <ion-button
                class="ion-margin"
                color="primary"
                expand="full"
                @click="addHouseholdDetailsRows()"
                ><ion-icon
                  class="ion-margin-end"
                  name="add-circle"
                  slot="icon-only"
                ></ion-icon
                >Add Household Details</ion-button
              >
            </ion-card>
            <!-- <ul class="styled-list">
              <li v-for="(row, index) in rows" :key="index">
                <span class="row-details">
                  {{ row.name_of_the_family_member }},
                  {{ row.relationship_with_head }}, {{ row.disability }},
                  {{ row.gender }}, {{ row.age }}, {{ row.level_of_education }},
                  {{ row.occupation }}, {{ row.membership }},
                  {{ row.annual_gross_income }}
                </span>
                <ion-button
                  expand="full"
                  class="remove-button"
                  color="danger"
                  @click="removeRow(index)"
                  fill="clear"
                >
                  <ion-icon name="close-circle-outline"></ion-icon>
                </ion-button>
              </li>
            </ul> -->
            <!-- completed second section. -->
          </div>

          <div v-if="step === 3">
            <ion-card>
              <ion-card-header color="tertiary"
                ><strong>3.Land Particulars</strong></ion-card-header
              >
            </ion-card>
            <ion-card>
          <ion-item-sliding v-for="(item,index) in cultivatedAreaRowsData" :key="item.id">
           <ion-item @click="selectCultivatedAreaItem(item,index)">
            {{item.cultivatedArea}}
      </ion-item>

      <ion-item-options side="end">
        <ion-item-option color="danger" @click="removeRowLandParticulars(index)">
          <ion-icon slot="icon-only" icon="trash"></ion-icon>
          <strong>Delete</strong>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>
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
                  v-model="cultivatedAreaRows.cultivatedArea"
                >
                  <ion-select-option value=""
                    >Select Cultivated Area</ion-select-option
                  >
                  <ion-select-option value="Owned Land"
                    >Owned Land</ion-select-option
                  >
                  <ion-select-option value="Leased-In"
                    >Leased-In</ion-select-option
                  >
                  <ion-select-option value="Leased-Ou"
                    >Leased-Out</ion-select-option
                  >
                </ion-select>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Rainfed(Acres)"
                  fill="outline"
                  label="Rainfed(Acres)"
                  label-placement="floating"
                  v-model="cultivatedAreaRows.rainfedArea"
                  type="number"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Irrigated(Acres)"
                  fill="outline"
                  label="Irrigated(Acres)"
                  label-placement="floating"
                  v-model="cultivatedAreaRows.irrigatedArea"
                  type="number"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  readonly="readonly"
                  placeholder="Total"
                  label="Total"
                  fill="outline"
                  label-placement="floating"
                  v-model="cultivatedAreaRows.total"
                ></ion-input>
                <ion-select
                  class="ion-margin-top"
                  aria-label="Type of Ownership"
                  interface="popover"
                  label="Type of Ownership"
                  label-placement="floating"
                  placeholder="Type of Ownership"
                  fill="outline"
                  v-model="cultivatedAreaRows.typeofOwnership"
                >
                  <ion-select-option value=""
                    >Select Ownership</ion-select-option
                  >
                  <ion-select-option value="Own">Own</ion-select-option>
                  <ion-select-option value="Rent">Rent</ion-select-option>
                </ion-select>
              </ion-card-content>
              <ion-button
                class="ion-margin"
                expand="full"
                color="primary"
                @click="addLandParticularsRows()"
                ><ion-icon
                  class="ion-margin-end"
                  name="add-circle"
                  slot="icon-only"
                ></ion-icon
                >Add Land Particulars Details</ion-button
              >
            </ion-card>
            <ion-card>
          <ion-item-sliding v-for="(item,index) in incomefromCropsKharifRowsData" :key="item.id">
           <ion-item @click="selectIncomeKharifItem(item,index)">
            {{item.cropGrownKharif}}
      </ion-item>

      <ion-item-options side="end">
        <ion-item-option color="danger" @click="removeRowIncomeKharif(index)">
          <ion-icon slot="icon-only" icon="trash"></ion-icon>
          <strong>Delete</strong>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>
  </ion-card>
            <ion-card>
              <ion-card-header color="tertiary"
                ><strong
                  >3.2 Income from Crops(Rs)-Kharif</strong
                ></ion-card-header
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
                  v-model="incomefromCropsKharifRows.cropGrownKharif"
                >
                  <ion-select-option value="">Select Crop</ion-select-option>
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
                  v-model="incomefromCropsKharifRows.rainfedKharif"
                  type="number"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Rainfed Yield(Qtls)"
                  label="Rainfed Yield(Qtls)"
                  fill="outline"
                  label-placement="floating"
                  v-model="incomefromCropsKharifRows.rainfedYieldKharif"
                  type="number"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter Rainfed(Acres) Cost of Cultivation(Rs)"
                  fill="outline"
                  label="Rainfed(Acres) Cost of Cultivation(Rs)"
                  label-placement="floating"
                  v-model="incomefromCropsKharifRows.rainfedCostKharif"
                  type="number"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter Rainfed(Acres) Rate per Qtls(Rs)"
                  fill="outline"
                  label="Rainfed(Acres) Rate per Qtls(Rs)"
                  label-placement="floating"
                  type="number"
                  v-model="incomefromCropsKharifRows.rainfedPerQtlsKharif"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  readonly="readonly"
                  placeholder="Total Rainfed Gross income"
                  fill="outline"
                  label="Rainfed(Acres) Gross Income"
                  label-placement="floating"
                  type="number"
                  v-model="incomefromCropsKharifRows.rainfedGrossIncomeKharif"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  readonly="readonly"
                  placeholder="Total Rainfed Net income"
                  fill="outline"
                  label="Rainfed(Acres) Net Income(7-5)"
                  label-placement="floating"
                  type="number"
                  v-model="incomefromCropsKharifRows.rainfedNetIncomeKharif"
                ></ion-input>
                <ion-card-subtitle
                  class="ion-padding ion-text-center"
                  color="tertiary"
                  >Irrigated(Acres)
                </ion-card-subtitle>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Irrigated Area(Acres)"
                  fill="outline"
                  label="Irrigated Area(Acres)"
                  label-placement="floating"
                  type="number"
                  v-model="incomefromCropsKharifRows.irrigatedaAreaKharif"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Irigated Yield(Qtls)"
                  label="Irrigated Yield(Qtls)"
                  fill="outline"
                  label-placement="floating"
                  v-model="incomefromCropsKharifRows.irrigatedYieldKharif"
                  type="number"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Irrigated(Acres) Cost of Cultiation(Rs)"
                  label="Irrigated(Acres) Cost of Cultiation(Rs)"
                  fill="outline"
                  label-placement="floating"
                  type="number"
                  v-model="
                    incomefromCropsKharifRows.irrigatedCoostofCultivationKharif
                  "
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Irrigated(Acres) Rate per Qtls(Rs)"
                  fill="outline"
                  label="Irrigated(Acres) Rate per Qtls(Rs) "
                  label-placement="floating"
                  type="number"
                  v-model="incomefromCropsKharifRows.irrigatedRatePerQtlsKharif"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Irrigated(Acres) Gross Income"
                  fill="outline"
                  readonly="readonly"
                  label="Total Irrigated(Acres) Gross Income"
                  label-placement="floating"
                  type="number"
                  v-model="incomefromCropsKharifRows.irrigatedGrossIncomeKharif"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  readonly="readonly"
                  placeholder="Total Irrigated Net Income(13-11)"
                  fill="outline"
                  label="Total Irrigated Net Income(13-11)"
                  label-placement="floating"
                  v-model="incomefromCropsKharifRows.irrigatedNetIncomeKharif"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Kharif Grand Total Income"
                  readonly="readonly"
                  label="Kharif Grand Total Income"
                  fill="outline"
                  label-placement="floating"
                ></ion-input>
              </ion-card-content>
              <ion-button
                class="ion-margin"
                expand="full"
                color="primary"
                @click="incomeKharifRows()"
                ><ion-icon
                  class="ion-margin-end"
                  name="add-circle"
                  slot="icon-only"
                ></ion-icon
                >Add Income from Crops(Rs)-Kharif</ion-button
              >
            </ion-card>
            <ion-card>
          <ion-item-sliding v-for="(item,index) in incomefromCropsRabiRowsData" :key="item.id">
           <ion-item @click="selectIncomeRabiItem(item,index)">
            {{item.cropGrownRabhi}}
      </ion-item>

      <ion-item-options side="end">
        <ion-item-option color="danger" @click="removeRowIncomeRabi(index)">
          <ion-icon slot="icon-only" icon="trash"></ion-icon>
          <strong>Delete</strong>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>
  </ion-card>
            <ion-card>
              <ion-card-header color="tertiary"
                ><strong
                  >3.3 Income from Crops(Rs)-Rabi</strong
                ></ion-card-header
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
                  v-model="incomefromCropsRabiRows.cropGrownRabhi"
                >
                  <ion-select-option value="">Select Crop</ion-select-option>
                  <ion-select-option value="Paddy">Paddy</ion-select-option>
                  <ion-select-option value="Meeze">Meeze</ion-select-option>
                  <ion-select-option value="Jower">Jower</ion-select-option>
                  <ion-select-option value="Cotton">Cotton</ion-select-option>
                  <ion-select-option value="Mirchi">Mirchi</ion-select-option>
                  <ion-select-option value="Groundnut"
                    >Groundnut</ion-select-option
                  >
                </ion-select>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter Rainfed(Acres)"
                  fill="outline"
                  label="Rainfed(Acres)"
                  label-placement="floating"
                  type="number"
                  v-model="incomefromCropsRabiRows.rainfedRabi"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter Rainfed Yield(Qtls)"
                  label="Rainfed Yield(Qtls)"
                  fill="outline"
                  label-placement="floating"
                  type="number"
                  v-model="incomefromCropsRabiRows.rainfedYieldRabi"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter Rainfed(Acres) Cost of Cultivation(Rs)"
                  fill="outline"
                  label="Rainfed(Acres) Cost of Cultivation(Rs)"
                  label-placement="floating"
                  type="number"
                  v-model="incomefromCropsRabiRows.rainfedCostRabi"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter Rainfed(Acres) Rate per Qtls(Rs)"
                  fill="outline"
                  label="Rainfed(Acres) Rate per Qtls(Rs)"
                  label-placement="floating"
                  type="number"
                  v-model="incomefromCropsRabiRows.rainfedPerQtlsRabi"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Total Rainfed Gross income"
                  fill="outline"
                  readonly="readonly"
                  type="number"
                  label="Rainfed(Acres) Gross Income"
                  label-placement="floating"
                  v-model="incomefromCropsRabiRows.rainfedGrossIncomeRabi"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  readonly="readonly"
                  placeholder="Total Rainfed Net income"
                  fill="outline"
                  type="number"
                  label="Rainfed(Acres) Net Income(7-5)"
                  label-placement="floating"
                  v-model="incomefromCropsRabiRows.rainfedNetIncomeRabi"
                ></ion-input>
                <ion-card-subtitle
                  class="ion-padding ion-text-center"
                  color="tertiary"
                  >Irrigated(Acres)
                </ion-card-subtitle>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Irrigated Area(Acres)"
                  fill="outline"
                  type="number"
                  label="Irrigated Area(Acres)"
                  label-placement="floating"
                  v-model="incomefromCropsRabiRows.irrigatedaAreaRabi"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter Irigated Yield(Qtls)"
                  label="Irrigated Yield(Qtls)"
                  fill="outline"
                  type="number"
                  label-placement="floating"
                  v-model="incomefromCropsRabiRows.irrigatedYieldRabi"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter Irrigated(Acres) Cost of Cultiation(Rs)"
                  label="Irrigated(Acres) Cost of Cultiation(Rs)"
                  fill="outline"
                  type="number"
                  label-placement="floating"
                  v-model="
                    incomefromCropsRabiRows.irrigatedCoostofCultivationRabi
                  "
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter Irrigated(Acres) Rate per Qtls(Rs)"
                  fill="outline"
                  label="Irrigated(Acres) Rate per Qtls(Rs) "
                  label-placement="floating"
                  type="number"
                  v-model="incomefromCropsRabiRows.irrigatedRatePerQtlsRabi"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Irrigated(Acres) Gross Income"
                  fill="outline"
                  readonly="readonly"
                  label="Total Irrigated(Acres) Gross Income"
                  label-placement="floating"
                  v-model="incomefromCropsRabiRows.irrigatedGrossIncomeRabi"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Total Irrigated Net Income(13-11)"
                  fill="outline"
                  readonly="readonly"
                  label="Total Irrigated Net Income(13-11)"
                  label-placement="floating"
                  type="number"
                  v-model="incomefromCropsRabiRows.irrigatedNetIncomeRabi"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  readonly="readonly"
                  placeholder="Rabi Grand Total Income"
                  label="Rabi Grand Total Income"
                  fill="outline"
                  label-placement="floating"
                ></ion-input>
              </ion-card-content>
              <ion-button
                class="ion-margin"
                expand="full"
                color="primary"
                @click="incomeRabiRows()"
                ><ion-icon
                  class="ion-margin-end"
                  name="add-circle"
                  slot="icon-only"
                ></ion-icon
                >Add Income from Crops(Rs)-Rabi</ion-button
              >
            </ion-card>
          </div>
          <div v-if="step === 4">
            <ion-card>
          <ion-item-sliding v-for="(item,index) in livestockRows" :key="item.id">
           <ion-item @click="selectLivestockDetailsItem(item,index)">
            {{item.nameOfTheAnimal}}
      </ion-item>

      <ion-item-options side="end">
        <ion-item-option color="danger" @click="removeLivestockRows(index)">
          <ion-icon slot="icon-only"  icon="trash"></ion-icon>
          <strong>Delete</strong>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>
  </ion-card>
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
                  v-model="addLivestockDetails.nameOfTheAnimal"
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
                  type="number"
                  v-model="addLivestockDetails.existingNo"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter litres/day"
                  fill="outline"
                  type="number"
                  label="Milk Production(Ltrs/Day) if applicable"
                  label-placement="floating"
                  v-model="addLivestockDetails.milkProductionLitresPerDay"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter litres/day"
                  fill="outline"
                  label="Milk Consumed(Ltrs/Day)"
                  type="number"
                  label-placement="floating"
                  v-model="addLivestockDetails.milkConsumedLitresPerday"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter quantity sold by year"
                  fill="outline"
                  label="Quantity Sold by Year"
                  type="number"
                  label-placement="floating"
                  v-model="addLivestockDetails.quantitySoldByYear"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter Unit Value"
                  fill="outline"
                  type="number"
                  label="Unit Value(Rs)"
                  label-placement="floating"
                  v-model="addLivestockDetails.unitValue"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter income generated during last year"
                  fill="outline"
                  type="number"
                  label="Income Generated during Last Year"
                  label-placement="floating"
                  v-model="addLivestockDetails.incomeGeneratedDuringLastYear"
                ></ion-input>
              </ion-card-content>
              <ion-button
                class="ion-margin"
                color="primary"
                expand="full"
                @click="livestockData()"
                ><ion-icon
                  class="ion-margin-end"
                  name="add-circle"
                  slot="icon-only"
                ></ion-icon
                >Add Livestock Details</ion-button
              >
            </ion-card>
          </div>
          <div v-if="step === 5">
            <ion-card>
          <ion-item-sliding v-for="(item,index) in migrationStatusRowsData" :key="item.id">
           <ion-item @click="selectMigrationstatus(item,index)">
            {{item.nameOfThePerson}}
      </ion-item>

      <ion-item-options side="end">
        <ion-item-option color="danger" @click="removeMigrationStatusRows(index)">
          <ion-icon slot="icon-only" icon="trash"></ion-icon>
          <strong>Delete</strong>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>
  </ion-card>
            <ion-card>
              <ion-card-header color="tertiary"
                ><strong>5.Migration Status</strong></ion-card-header
              >
            </ion-card>
            <ion-card>
              <ion-card-content>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter name of the person migrating"
                  fill="outline"
                  label="Name of the Person Migrating "
                  label-placement="floating"
                  v-model="migrationStatusRows.nameOfThePerson"
                  @input="stringValidation"
                ></ion-input>
                <ion-select
                  class="ion-margin-top"
                  aria-label="Gender"
                  interface="popover"
                  label="Gender"
                  label-placement="floating"
                  placeholder="Gender"
                  fill="outline"
                  v-model="migrationStatusRows.gender"
                >
                  <ion-select-option value="male">Male</ion-select-option>
                  <ion-select-option value="female">Female</ion-select-option>
                </ion-select>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter No of the Days"
                  fill="outline"
                  type="number"
                  label="No of the Days Migrating per Year "
                  label-placement="floating"
                  v-model="migrationStatusRows.noOfDaysMigratingPerYear"
                ></ion-input>
                <ion-select
                  class="ion-margin-top"
                  aria-label="Reasons for Migrating"
                  interface="popover"
                  label="Reasons for Migrating"
                  label-placement="floating"
                  placeholder="Enter reasons for migrating"
                  fill="outline"
                  v-model="migrationStatusRows.reasonsForMigrating"
                >
                  <ion-select-option value=""
                    >Select Reasons for Migrating</ion-select-option
                  >
                  <ion-select-option value="distress"
                    >Distress</ion-select-option
                  >
                  <ion-select-option value="betterlivelihoodoptions"
                    >Better Livelihood options</ion-select-option
                  >
                  <ion-select-option value="seasonal"
                    >Seasonal</ion-select-option
                  >
                </ion-select>
                <ion-select
                  class="ion-margin-top"
                  aria-label="Place for Migrating"
                  interface="popover"
                  label="Place of Migration"
                  label-placement="floating"
                  placeholder="Enter place for migrating"
                  fill="outline"
                  v-model="migrationStatusRows.placeOfMigration"
                >
                  <ion-select-option value=""
                    >Select Place of Migration</ion-select-option
                  >
                  <ion-select-option value="withindistrict"
                    >Within District</ion-select-option
                  >
                  <ion-select-option value="outsidedistrict"
                    >Outside District</ion-select-option
                  >
                  <ion-select-option value="outsidestate"
                    >Outside State</ion-select-option
                  >
                </ion-select>
                <ion-select
                  class="ion-margin-top"
                  aria-label="Occupation for Migrating"
                  interface="popover"
                  label="Occupation during Migration"
                  label-placement="floating"
                  placeholder="Enter occupation for migrating"
                  fill="outline"
                  v-model="migrationStatusRows.occupationDuringMigration"
                >
                  <ion-select-option value=""
                    >Select Occupation during Migrating</ion-select-option
                  >
                  <ion-select-option value="agri">Agri</ion-select-option>
                  <ion-select-option value="industriallabour"
                    >Industrial Labour</ion-select-option
                  >
                  <ion-select-option value="otherlivelihoods"
                    >Other Livelihoods</ion-select-option
                  >
                </ion-select>
                <ion-input
                  class="ion-margin-top"
                  type="read-only"
                  fill="outline"
                  label="Income from Such Occupation "
                  label-placement="floating"
                  v-model="migrationStatusRows.incomeFromOccupation"
                ></ion-input>
              </ion-card-content>
              <ion-button
                class="ion-margin"
                expand="full"
                color="primary"
                @click="migrationStatusAddRows()"
                ><ion-icon
                  class="ion-margin-end"
                  name="add-circle"
                  slot="icon-only"
                ></ion-icon
                >Add Migration Status</ion-button
              >
            </ion-card>
          </div>
          <div v-if="step === 6">
            <ion-card>
          <ion-item-sliding v-for="(item,index) in landLessData" :key="item.id">
           <ion-item @click="selectLandLessLabourers(item,index)">
            {{item.nameOfTheProject}}
      </ion-item>

      <ion-item-options side="end">
        <ion-item-option color="danger" @click="removeLandlessLabourers(index)">
          <ion-icon slot="icon-only" icon="trash"></ion-icon>
          <strong>Delete</strong>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>
  </ion-card>
            <ion-card>
              <ion-card-header color="tertiary" class="ion-text-center"
                ><strong
                  >6.If Land Less Labourers , given the details of the Number of
                  days Employment Availed</strong
                ></ion-card-header
              >
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
                  v-model="landLessLabourers.nameOfTheProject"
                >
                  <ion-select-option value=""
                    >Select Name of the Scheme</ion-select-option
                  >
                  <ion-select-option value="watershed"
                    >Watershed</ion-select-option
                  >
                  <ion-select-option value="mgnregs">MGNREGS</ion-select-option>
                  <ion-select-option value="others">Others</ion-select-option>
                </ion-select>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter days"
                  fill="outline"
                  label="Man-Days"
                  type="number"
                  label-placement="floating"
                  v-model="landLessLabourers.manDays"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter days"
                  fill="outline"
                  type="number"
                  label="Wage/Days"
                  label-placement="floating"
                  v-model="landLessLabourers.wageDays"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter Income(Rs)"
                  fill="outline"
                  label="Income(Rs)"
                  type="number"
                  label-placement="floating"
                  v-model="landLessLabourers.income"
                ></ion-input>
              </ion-card-content>
            </ion-card>
            <ion-card>
              <ion-card-content>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Total"
                  fill="outline"
                  type="read-only"
                  label="Total"
                  label-placement="floating"
                  v-model="landLessLabourers.total"
                ></ion-input>
              </ion-card-content>
              <ion-button
                class="ion-margin"
                expand="full"
                color="primary"
                @click="landLessLabourData()"
                ><ion-icon
                  class="ion-margin-end"
                  name="add-circle"
                  slot="icon-only"
                ></ion-icon
                >Add Government Scheme Details</ion-button
              >
            </ion-card>
          </div>
          <div v-if="step === 7">
            <ion-card>
          <ion-item-sliding v-for="(item,index) in governmentSchemesRowsData" :key="item.id">
           <ion-item @click="selectGovernmentSchemesItem(item,index)">
            {{item.nameOfTheFamilyMember}}
      </ion-item>

      <ion-item-options side="end">
        <ion-item-option color="danger" @click="removeGovernmentSchemesRows(index)">
          <ion-icon slot="icon-only" icon="trash"></ion-icon>
          <strong>Delete</strong>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>
  </ion-card>
            <ion-card>
              <ion-card-header color="tertiary"
                ><strong
                  >7.Benefits from Government Schemes</strong
                ></ion-card-header
              >
            </ion-card>
            <ion-card>
              <ion-card-content>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter name of the family member"
                  fill="outline"
                  label="Name of the Family Member"
                  label-placement="floating"
                  v-model="governmentSchemesRows.nameOfTheFamilyMember"
                  @input="stringValidation"
                ></ion-input>
                <ion-select
                  class="ion-margin-top"
                  aria-label="Scheme Name"
                  interface="popover"
                  label="Scheme Name"
                  label-placement="floating"
                  placeholder="Select Scheme Name"
                  fill="outline"
                  v-model="governmentSchemesRows.schemeName"
                >
                  <ion-select-option value=""
                    >Select Scheme Name</ion-select-option
                  >
                  <ion-select-option value="Amma Vodi"
                    >Amma Vodi</ion-select-option
                  >
                  <ion-select-option value="YSR Asara"
                    >YSR Asara</ion-select-option
                  >
                  <ion-select-option value="Arogyasri"
                    >Arogyasri</ion-select-option
                  >
                  <ion-select-option value="Ban on alcohol"
                    >Ban on alcohol</ion-select-option
                  >
                  <ion-select-option value="Mirchi">Mirchi</ion-select-option>
                  <ion-select-option value="Jagananna Ammavodi"
                    >Jagananna Ammavodi</ion-select-option
                  >
                  <ion-select-option value="YSR Pension Kanuka"
                    >YSR Pension Kanuka</ion-select-option
                  >
                  <ion-select-option value="Fee Reimbursement Scheme"
                    >Fee Reimbursement Scheme</ion-select-option
                  >
                  <ion-select-option value="Paydalandariki Illu"
                    >Paydalandariki Illu</ion-select-option
                  >
                  <ion-select-option value="Pensionla Pempu"
                    >Pensionla Pempu</ion-select-option
                  >
                  <ion-select-option value="YSR Bima"
                    >YSR Bima</ion-select-option
                  >
                  <ion-select-option value="YSR Cheyutha"
                    >YSR Cheyutha</ion-select-option
                  >
                  <ion-select-option value="YSR Kanti velugu"
                    >YSR Kanti velugu</ion-select-option
                  >
                  <ion-select-option value="YSR Rythu Bharosa"
                    >YSR Rythu Bharosa</ion-select-option
                  >
                  <ion-select-option value="Others">Others</ion-select-option>
                </ion-select>
                <!-- <ion-input
            class="ion-margin-top"
            placeholder="Enter scheme name"
            fill="outline"
            label="Scheme Name"
            label-placement="floating"
            v-model = "governmentSchemesRows.schemeName"
          ></ion-input> -->
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter amount"
                  fill="outline"
                  label="Amount"
                  type="number"
                  label-placement="floating"
                  v-model="governmentSchemesRows.amount"
                ></ion-input>
              </ion-card-content>
              <ion-button
                class="ion-margin"
                expand="full"
                color="primary"
                @click="addGovernmentSchemesDataRows()"
                ><ion-icon
                  class="ion-margin-end"
                  name="add-circle"
                  slot="icon-only"
                ></ion-icon
                >Add Government Scheme Details</ion-button
              >
            </ion-card>
          </div>
          <div v-if="step === 8">
            <ion-card>
          <ion-item-sliding v-for="(item,index) in chemicalManureRowsData" :key="item.id">
           <ion-item @click="selectManureandChemicalItem(item,index)">
            {{item.crops}}
      </ion-item>

      <ion-item-options side="end">
        <ion-item-option color="danger" @click="removeManureandChemicalRows(index)">
          <ion-icon slot="icon-only" icon="trash"></ion-icon>
          <strong>Delete</strong>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>
  </ion-card>
            <ion-card>
              <ion-card-header color="tertiary" class="ion-text-center"
                ><strong
                  >8.Use of Manure and Chemical Fertilizers(Previous
                  Year)</strong
                ></ion-card-header
              >
            </ion-card>
            <ion-card>
              <ion-card-header color="tertiary"
                ><strong
                  >8.1 Manures and Fertilizers used(in Tons)</strong
                ></ion-card-header
              >
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
                  v-model="useofChemicalManureRows.crops"
                >
                  <ion-select-option value="">Select Crops</ion-select-option>
                  <ion-select-option value="Paddy">Paddy</ion-select-option>
                  <ion-select-option value="maize">maize</ion-select-option>
                  <ion-select-option value="jowar">jowar</ion-select-option>
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
                  placeholder="Enter value in tons"
                  fill="outline"
                  type="number"
                  label="Organic(Tons)"
                  label-placement="floating"
                  v-model="useofChemicalManureRows.organic"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter value in grams"
                  fill="outline"
                  type="number"
                  label="Micro Nutrients(In Gms)"
                  label-placement="floating"
                  v-model="useofChemicalManureRows.microNutrients"
                ></ion-input>
              </ion-card-content>
            </ion-card>
            <ion-card>
              <ion-card-header color="tertiary"
                ><strong>Chemical(Qtl)</strong></ion-card-header
              >
            </ion-card>
            <ion-card>
              <ion-card-content>
                <ion-input
                  class="ion-margin-top"
                  placeholder="N"
                  fill="outline"
                  label="N"
                  type="number"
                  label-placement="floating"
                  v-model="useofChemicalManureRows.N"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="P"
                  fill="outline"
                  type="number"
                  label="P"
                  label-placement="floating"
                  v-model="useofChemicalManureRows.P"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="K"
                  type="number"
                  fill="outline"
                  label="K"
                  label-placement="floating"
                  v-model="useofChemicalManureRows.K"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter cost in rupees"
                  fill="outline"
                  type="number"
                  label="Cost in Rupees"
                  label-placement="floating"
                  v-model="useofChemicalManureRows.cost"
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
              <ion-button
                class="ion-margin"
                expand="full"
                color="primary"
                @click="addChemicalManureRows()"
                ><ion-icon
                  class="ion-margin-end"
                  name="add-circle"
                  slot="icon-only"
                ></ion-icon
                >Add Manure and Chemical Fertilizers Details</ion-button
              >
            </ion-card>
          </div>
          <div v-if="step === 9">
            <ion-card>
          <ion-item-sliding v-for="(item,index) in pestandDiseaseRowsData" :key="item.id">
           <ion-item @click="selectPestDiseaseItem(item,index)">
            {{item.crops}}
      </ion-item>

      <ion-item-options side="end">
        <ion-item-option color="danger" @click="removePestDiseaseRows(index)">
          <ion-icon slot="icon-only" icon="trash"></ion-icon>
          <strong>Delete</strong>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>
  </ion-card>
            <ion-card>
              <ion-card-header class="ion-text-center" color="tertiary"
                ><strong
                  >9.Pest and Disease Control Measures</strong
                ></ion-card-header
              >
            </ion-card>
            <ion-card>
              <ion-card-header color="tertiary"
                ><strong>Crop Measures</strong></ion-card-header
              >
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
                  v-model="pestandDiseaseRows.crops"
                >
                  <ion-select-option value="">Select Crops</ion-select-option>
                  <ion-select-option value="Paddy">Paddy</ion-select-option>
                  <ion-select-option value="maize">maize</ion-select-option>
                  <ion-select-option value="jowar">jowar</ion-select-option>
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
                  placeholder="Enter name of the pest/disease"
                  fill="outline"
                  label="Name of the Pest/Disease"
                  label-placement="floating"
                  v-model="pestandDiseaseRows.nameOfThePest"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Biological"
                  fill="outline"
                  label="Biological"
                  label-placement="floating"
                  v-model="pestandDiseaseRows.biological"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter chemical"
                  fill="outline"
                  label="Chemical"
                  label-placement="floating"
                  v-model="pestandDiseaseRows.chemical"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="others(Name them)"
                  fill="outline"
                  label="Others(Name Them)"
                  label-placement="floating"
                  v-model="pestandDiseaseRows.others"
                ></ion-input>
              </ion-card-content>
            </ion-card>
            <ion-card>
              <ion-card-header color="tertiary"
                ><strong>Amount Spent Towards</strong>
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
                  v-model="pestandDiseaseRows.material"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter Wages"
                  fill="outline"
                  type="number"
                  label="Wages"
                  label-placement="floating"
                  v-model="pestandDiseaseRows.wages"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Total material"
                  fill="outline"
                  label="Total Material"
                  label-placement="floating"
                  v-model="pestandDiseaseRows.totalMaterial"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Total wages"
                  fill="outline"
                  type="number"
                  label="Total Wages"
                  label-placement="floating"
                  v-model="pestandDiseaseRows.totalWages"
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
              <ion-button
                class="ion-margin"
                expand="full"
                @click="addPestDiseaseRows()"
                color="primary"
                ><ion-icon
                  class="ion-margin-end"
                  name="add-circle"
                  slot="icon-only"
                ></ion-icon
                >Add Pest and Disease Control Details</ion-button
              >
            </ion-card>
          </div>
          <div v-if="step === 10">
            <ion-card>
          <ion-item-sliding v-for="(item,index) in loanParticularsRowsData" :key="item.id">
           <ion-item @click="selectLoanParticularsItem(item,index)">
            {{item.particulars}}
      </ion-item>

      <ion-item-options side="end">
        <ion-item-option color="danger" @click="removeLoanParticularsRows(index)">
          <ion-icon slot="icon-only" icon="trash"></ion-icon>
          <strong>Delete</strong>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>
  </ion-card>
            <ion-card>
              <ion-card-header color="tertiary" class="ion-text-center"
                ><strong
                  >10.Details of Loan Particulars(Amount in Rs)</strong
                ></ion-card-header
              >
            </ion-card>
            <ion-card>
              <ion-card-content>
                <ion-select
                  class="ion-margin-top"
                  interface="popover"
                  label="Particulars"
                  label-placement="floating"
                  placeholder="Agriculture"
                  fill="outline"
                  v-model="loanParticularsRows.particulars"
                >
                  <ion-select-option value=""
                    >Select Particulars</ion-select-option
                  >
                  <ion-select-option value="Amount Borrowed"
                    >Amount Borrowed</ion-select-option
                  >
                  <ion-select-option value="Amount Repaid"
                    >Amount Repaid</ion-select-option
                  >
                </ion-select>
                <ion-card-subtitle
                  class="ion-margin-top ion-text-center"
                  color="tertiary"
                  >Source</ion-card-subtitle
                >
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter bank"
                  fill="outline"
                  label="Bank"
                  label-placement="floating"
                  v-model="loanParticularsRows.bank"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter money lender"
                  fill="outline"
                  label="Money Lender"
                  label-placement="floating"
                  v-model="loanParticularsRows.moneyLender"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter Dealer"
                  fill="outline"
                  label="Dealer"
                  label-placement="floating"
                  v-model="loanParticularsRows.dealer"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter fellow farmer"
                  fill="outline"
                  label="Fellow Farmer"
                  label-placement="floating"
                  v-model="loanParticularsRows.fellowfarmer"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter shg"
                  fill="outline"
                  label="SHG"
                  label-placement="floating"
                  v-model="loanParticularsRows.shg"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Others(specify)"
                  fill="outline"
                  label="Others(specify)"
                  label-placement="floating"
                  v-model="loanParticularsRows.others"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Total"
                  fill="outline"
                  label="Total"
                  label-placement="floating"
                  v-model="loanParticularsRows.total"
                ></ion-input>
                <ion-card-subtitle
                  color="tertiary"
                  class="ion-text-center ion-margin-top"
                  >Purpose</ion-card-subtitle
                >
                <ion-select
                  class="ion-margin-top"
                  interface="popover"
                  label="Agriculture"
                  label-placement="floating"
                  placeholder="Agriculture"
                  fill="outline"
                  v-model="loanParticularsRows.agriculture"
                >
                  <ion-select-option value=""
                    >Select Agriculture</ion-select-option
                  >
                  <ion-select-option value="Paddy">Paddy</ion-select-option>
                  <ion-select-option value="maize">maize</ion-select-option>
                  <ion-select-option value="jowar">jowar</ion-select-option>
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
                <ion-select
                  class="ion-margin-top"
                  interface="popover"
                  label="Consumption"
                  label-placement="floating"
                  placeholder="Consumption"
                  fill="outline"
                  v-model="loanParticularsRows.consumption"
                >
                  <ion-select-option value=""
                    >Select Consumption</ion-select-option
                  >
                  <ion-select-option value="Paddy">Paddy</ion-select-option>
                  <ion-select-option value="maize">maize</ion-select-option>
                  <ion-select-option value="jowar">jowar</ion-select-option>
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
                <ion-select
                  class="ion-margin-top"
                  aria-label="Education"
                  interface="popover"
                  label="Education"
                  label-placement="floating"
                  placeholder="Select Education"
                  fill="outline"
                  v-model="loanParticularsRows.education"
                >
                  <ion-select-option value=""
                    >Select Education</ion-select-option
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
                  interface="popover"
                  label="Marriage"
                  label-placement="floating"
                  placeholder="Marriage"
                  fill="outline"
                  v-model="loanParticularsRows.marriage"
                >
                  <ion-select-option value="married">Married</ion-select-option>
                  <ion-select-option value="unmarried"
                    >Unmarried</ion-select-option
                  >
                </ion-select>
                <ion-select
                  class="ion-margin-top"
                  interface="popover"
                  label="Others"
                  label-placement="floating"
                  placeholder="Others"
                  fill="outline"
                  v-model="loanParticularsRows.others2"
                >
                  <ion-select-option value="">Select Others</ion-select-option>
                  <ion-select-option value="Paddy">Paddy</ion-select-option>
                  <ion-select-option value="maize">maize</ion-select-option>
                  <ion-select-option value="jowar">jowar</ion-select-option>
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
              </ion-card-content>
            </ion-card>
            <ion-card>
              <ion-card-content>
                <ion-input
                  placeholder="Outstanding Amount"
                  fill="outline"
                  type="number"
                  label="Outstanding Amount"
                  label-placement="floating"
                  v-model="loanParticularsRows.outstandingAmount"
                ></ion-input>
              </ion-card-content>
              <ion-button
                class="ion-margin"
                expand="full"
                @click="addLoanParticularsRows()"
                color="primary"
                ><ion-icon
                  class="ion-margin-end"
                  name="add-circle"
                  slot="icon-only"
                ></ion-icon
                >Add Loan Particulars Details</ion-button
              >
            </ion-card>
          </div>
          <div v-if="step === 11">
            <ion-card>
          <ion-item-sliding v-for="(item,index) in familyExpenditureRowsData" :key="item.id">
           <ion-item @click="selectFamilyExpenditureItem(item,index)">
            {{item.items}}
      </ion-item>

      <ion-item-options side="end">
        <ion-item-option color="danger" @click="removeFamilyExpenditureRows(index)">
          <ion-icon slot="icon-only" icon="trash"></ion-icon>
          <strong>Delete</strong>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>
  </ion-card>
            <ion-card>
              <ion-card-header color="tertiary"
                ><strong>11.Family Expenditure</strong></ion-card-header
              >
            </ion-card>
            <ion-card>
              <ion-card-header color="tertiary"
                ><strong>Items</strong></ion-card-header
              >
            </ion-card>
            <ion-card>
              <ion-card-content>
                <ion-select
                  class="ion-margin-top"
                  interface="popover"
                  label="Items"
                  label-placement="floating"
                  placeholder="Select Items"
                  fill="outline"
                  v-model="familyExpenditureRows.items"
                >
                  <ion-select-option value="">Select Items</ion-select-option>
                  <ion-select-option value="Food">Food</ion-select-option>
                  <ion-select-option value="Education"
                    >Education</ion-select-option
                  >
                  <ion-select-option value="MedicalHealth"
                    >Medical/Health</ion-select-option
                  >
                  <ion-select-option value="MaintenanceofVehicles"
                    >Maintenance of Vehicles</ion-select-option
                  >
                  <ion-select-option value="MaintenanceofHouseholdEquipments"
                    >Maintenance of Household Equipments</ion-select-option
                  >
                  <ion-select-option value="Mobile">Mobile</ion-select-option>
                  <ion-select-option value="Cloths">Cloths</ion-select-option>
                  <ion-select-option value="ElectricityBill"
                    >Electricity Bill</ion-select-option
                  >
                  <ion-select-option value="WaterBill"
                    >Water Bill</ion-select-option
                  >
                  <ion-select-option value="SocialReligiousFunctions"
                    >Social/Religious Functions</ion-select-option
                  >
                  <ion-select-option value="Others">Others</ion-select-option>
                </ion-select>
                <ion-input
                  class="ion-margin-top"
                  fill="outline"
                  type="number"
                  label="Expenditure per Last Year"
                  label-placement="floating"
                  v-model="familyExpenditureRows.total"
                ></ion-input>
              </ion-card-content>
              <ion-button
                class="ion-margin"
                expand="full"
                color="primary"
                @click="addFamilyExpenditureRows()"
                ><ion-icon
                  class="ion-margin-end"
                  name="add-circle"
                  slot="icon-only"
                ></ion-icon
                >Add Family Expenditure Details</ion-button
              >
            </ion-card>
          </div>
          <div v-if="step === 12">
            <ion-card>
          <ion-item-sliding v-for="(item,index) in sourceofIncomeRowsData" :key="item.id">
           <ion-item @click="selectSourceofIncomeItem(item,index)">
            {{item.source}}
      </ion-item>

      <ion-item-options side="end">
        <ion-item-option color="danger" @click="removeSourceofIncomeRows(index)">
          <ion-icon slot="icon-only" icon="trash"></ion-icon>
          <strong>Delete</strong>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>
  </ion-card>
            <ion-card>
              <ion-card-header class="ion-text-center" color="tertiary"
                ><strong
                  >12.Difference Source of Income,Expenditure and Family Debt
                  Details</strong
                ></ion-card-header
              >
            </ion-card>
            <ion-card>
              <ion-card-header color="tertiary"
                ><strong>Source</strong></ion-card-header
              >
            </ion-card>
            <ion-card>
              <ion-card-content>
                <ion-select
                  class="ion-margin-top"
                  interface="popover"
                  label="Source"
                  label-placement="floating"
                  placeholder="Select Source"
                  fill="outline"
                  v-model="sourceofIncomeRows.source"
                >
                  <ion-select-option value="">Select Source</ion-select-option>
                  <ion-select-option value="HouseholdMemberIncome"
                    >Household Member's Income</ion-select-option
                  >
                  <ion-select-option value="AgriculturKharif"
                    >Agriculture-Kharif</ion-select-option
                  >
                  <ion-select-option value="AgriculturRabi"
                    >Agriculture-Rabi</ion-select-option
                  >
                  <ion-select-option value="Dairy">Dairy</ion-select-option>
                  <ion-select-option value="Livestock"
                    >Livestock</ion-select-option
                  >
                  <ion-select-option value="Fisheries"
                    >Fisheries</ion-select-option
                  >
                  <ion-select-option value="Poultry">Poultry</ion-select-option>
                  <ion-select-option value="WagesMigration"
                    >Wages-Migration</ion-select-option
                  >
                  <ion-select-option value="LandlessLabourerWages"
                    >Landless Labourers-Wages</ion-select-option
                  >
                  <ion-select-option value="BenefitsfromGovernmentSchemes"
                    >Benefits from Government Schemes</ion-select-option
                  >
                  <ion-select-option
                    value="ExpenditureofManureandChemicalFertilizers"
                    >Expenditure of Manure and Chemical
                    Fertilizers</ion-select-option
                  >
                  <ion-select-option value="ExpenditureofPesticide"
                    >Expenditure of Pesticide</ion-select-option
                  >
                  <ion-select-option value="FamilyExpenditure"
                    >Family Expenditure</ion-select-option
                  >
                  <ion-select-option value="FamilyIndebtedness"
                    >Family Indebtedness</ion-select-option
                  >
                  <ion-select-option value="Poultry">Poultry</ion-select-option>
                  <ion-select-option value="Business"
                    >Business</ion-select-option
                  >
                </ion-select>
                <ion-input
                  class="ion-margin-top"
                  fill="outline"
                  type="number"
                  label="Enter Income during the Year(Rs)"
                  label-placement="floating"
                  v-model="sourceofIncomeRows.income"
                ></ion-input>
              </ion-card-content>
              <ion-button
                class="ion-margin"
                color="primary"
                expand="full"
                @click="addSourceofIncomeRows()"
                ><ion-icon
                  class="ion-margin-end"
                  name="add-circle"
                  slot="icon-only"
                ></ion-icon
                >Add Source of Income and Family Details</ion-button
              >
            </ion-card>
          </div>
          <div v-if="step === 13">
            <ion-card>
          <ion-item-sliding v-for="(item,index) in drinkingWaterAvailabilityRowsData" :key="item.id">
           <ion-item @click="selectAvailabilityofDrinkingWaterItem(item,index)">
            {{item.drinkingwateritem}}
      </ion-item>

      <ion-item-options side="end">
        <ion-item-option color="danger" @click="removeAvailabilityofDrinkingWaterRows(index)">
          <ion-icon slot="icon-only" icon="trash"></ion-icon>
          <strong>Delete</strong>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>
  </ion-card>
            <ion-card>
              <ion-card-header class="ion-text-center" color="tertiary"
                ><strong
                  >13.Availability of Drinking Water(Drinking Water requirement
                  @ 5Litres per Day/Person)</strong
                ></ion-card-header
              >
            </ion-card>
            <ion-card>
              <ion-card-header color="tertiary"
                ><strong
                  >Present Availability of Drinking Water</strong
                ></ion-card-header
              >
            </ion-card>
            <ion-card>
              <ion-card-content>
                <ion-select
                  class="ion-margin-top"
                  aria-label="Source of Drinking Water"
                  interface="popover"
                  label="Drinking Water Item"
                  label-placement="floating"
                  placeholder="Select Drinking Water Item"
                  fill="outline"
                  v-model="drinkingWaterAvailabilityRows.drinkingwateritem"
                >
                  <ion-select-option value="presentavailability"
                    >Present Availability of Drinking Water</ion-select-option
                  >
                </ion-select>
                <ion-select
                  class="ion-margin-top"
                  aria-label="Source of Drinking Water"
                  interface="popover"
                  label="Drinking Water Units"
                  label-placement="floating"
                  placeholder="Select Drinking Water Units"
                  fill="outline"
                  v-model="drinkingWaterAvailabilityRows.drinkingwaterunits"
                >
                  <ion-select-option value="litres"
                    >Litres/Day</ion-select-option
                  >
                  <ion-select-option value="months"
                    >No of Months in a Year</ion-select-option
                  >
                </ion-select>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter Quantity"
                  fill="outline"
                  type="number"
                  label="Quantity"
                  label-placement="floating"
                  v-model="drinkingWaterAvailabilityRows.litresPerDay"
                ></ion-input>
                <ion-select
                  class="ion-margin-top"
                  aria-label="Source of Drinking Water"
                  interface="popover"
                  label="Source of Drinking Water"
                  label-placement="floating"
                  placeholder="Select source of drinking water"
                  fill="outline"
                  v-model="drinkingWaterAvailabilityRows.sourceDrinkingWater"
                >
                  <ion-select-option value=""
                    >Select Drinking Water</ion-select-option
                  >
                  <ion-select-option value="borewell"
                    >Borewell</ion-select-option
                  >
                  <ion-select-option value="tank">Tank</ion-select-option>
                  <ion-select-option value="publictank"
                    >Public Tap</ion-select-option
                  >
                  <ion-select-option value="openwell"
                    >Open Well</ion-select-option
                  >
                  <ion-select-option value="canalwater"
                    >Canal Water</ion-select-option
                  >
                </ion-select>
              </ion-card-content>
              <ion-button
                class="ion-margin"
                expand="full"
                color="primary"
                @click="addDrinkingWaterAvailabilityRows()"
                ><ion-icon
                  class="ion-margin-end"
                  name="add-circle"
                  slot="icon-only"
                ></ion-icon
                >Add Availability of Drinking Water Details</ion-button
              >
            </ion-card>
          </div>
          <div v-if="step === 14">
            <ion-card>
          <ion-item-sliding v-for="(item,index) in sourceandQualityofWaterRowsData" :key="item.id">
           <ion-item @click="selectSourceQualityofWaterItem(item,index)">
            {{item.waterSource}}
      </ion-item>

      <ion-item-options side="end">
        <ion-item-option color="danger" @click="removeSourceQualityofWaterRows(index)">
          <ion-icon slot="icon-only" icon="trash"></ion-icon>
          <strong>Delete</strong>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>
  </ion-card>
            <ion-card class="ion-margin-top">
              <ion-card-header class="ion-text-center" color="tertiary"
                ><strong
                  >14.Source and Quality of Water(3ft = 1 metre)</strong
                ></ion-card-header
              >
            </ion-card>
            <ion-card>
              <ion-card-subtitle
                class="ion-margin-top ion-text-center"
                color="tertiary"
                >Water Source</ion-card-subtitle
              >
              <ion-card-content>
                <ion-select
                  class="ion-margin-top"
                  aria-label="Source of Drinking Water"
                  interface="popover"
                  label="Water Source"
                  label-placement="floating"
                  placeholder="select water source"
                  fill="outline"
                  v-model="sourceandQualityofWaterRows.waterSource"
                >
                  <ion-select-option value=""
                    >Select Water Source</ion-select-option
                  >
                  <ion-select-option value="borewell">Open</ion-select-option>
                  <ion-select-option value="tank">Borewell</ion-select-option>
                  <ion-select-option value="publictank">Tank</ion-select-option>
                  <ion-select-option value="openwell"
                    >Drip(Specify Crop)</ion-select-option
                  >
                  <ion-select-option value="canalwater"
                    >Others</ion-select-option
                  >
                </ion-select>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter Number"
                  fill="outline"
                  type="number"
                  label="Dried up well/Borewell(in Numbers)"
                  label-placement="floating"
                  v-model="sourceandQualityofWaterRows.driedupWell"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter Number"
                  fill="outline"
                  type="number"
                  label="Functioning well/Borewell(in Numbers)"
                  label-placement="floating"
                  v-model="sourceandQualityofWaterRows.functioningWell"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter Metres"
                  fill="outline"
                  type="number"
                  label="present Approximate Water Level(in Metres)"
                  label-placement="floating"
                  v-model="
                    sourceandQualityofWaterRows.presentApproximateWaterLevel
                  "
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter Litres"
                  fill="outline"
                  type="number"
                  label="Yield from the Borewell(Litres/Minute)"
                  label-placement="floating"
                  v-model="sourceandQualityofWaterRows.yieldfromtheBorewell"
                ></ion-input>
                <ion-card-subtitle
                  class="ion-margin-top ion-text-center"
                  color="tertiary"
                  >Irrigated Area(in Ha)</ion-card-subtitle
                >
              </ion-card-content>
              <ion-card-header color="tertiary"
                ><strong>Agriculture</strong></ion-card-header
              >
              <ion-card-content>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter units in Ha"
                  fill="outline"
                  type="number"
                  label="Kharif"
                  label-placement="floating"
                  v-model="sourceandQualityofWaterRows.kharif"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter units in Ha"
                  fill="outline"
                  type="number"
                  label="Rabi"
                  label-placement="floating"
                  v-model="sourceandQualityofWaterRows.rabi"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter units in Ha"
                  type="number"
                  fill="outline"
                  label="Summer"
                  label-placement="floating"
                  v-model="sourceandQualityofWaterRows.summer"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter other crops"
                  fill="outline"
                  label="Other Crops(Specify)"
                  label-placement="floating"
                  v-model="sourceandQualityofWaterRows.otherCrops"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter Horticulture"
                  fill="outline"
                  label="Horiculture"
                  label-placement="floating"
                  v-model="sourceandQualityofWaterRows.horticulture"
                ></ion-input>
                <ion-select
                  class="ion-margin-top"
                  aria-label="Water Quality"
                  interface="popover"
                  label="Water Quality"
                  label-placement="floating"
                  placeholder="select Water Quality"
                  fill="outline"
                  v-model="sourceandQualityofWaterRows.waterquality"
                >
                  <ion-select-option value="Polluted"
                    >Polluted</ion-select-option
                  >
                  <ion-select-option value="Non-Polluted"
                    >Non-Polluted</ion-select-option
                  >
                </ion-select>
              </ion-card-content>
              <ion-button
                class="ion-margin"
                expand="full"
                color="primary"
                @click="addSourceandQualityWaterRows()"
                ><ion-icon
                  class="ion-margin-end"
                  name="add-circle"
                  slot="icon-only"
                ></ion-icon
                >Add Source and Quality of Water Details</ion-button
              >
            </ion-card>
          </div>
          <div v-if="step === 15">
            <ion-card>
          <ion-item-sliding v-for="(item,index) in agriculturalImplementsRowsData" :key="item.id">
           <ion-item @click="selectAgricultureImplementsItem(item,index)">
            {{item.selectImplements}}
      </ion-item>

      <ion-item-options side="end">
        <ion-item-option color="danger" @click="removeAgricultureImplementsRows(index)">
          <ion-icon slot="icon-only"  icon="trash"></ion-icon>
          <strong>Delete</strong>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>
  </ion-card>
            <ion-card>
              <ion-card-header color="tertiary"
                ><strong>15.Agriculture Implements</strong></ion-card-header
              >
            </ion-card>
            <ion-card>
              <ion-card-content>
                <ion-select
                  class="ion-margin-top"
                  interface="popover"
                  label="Implements"
                  label-placement="floating"
                  placeholder="Select Implement"
                  fill="outline"
                  v-model="agriculturalImplementsRows.selectImplements"
                >
                  <ion-select-option value=""
                    >Select Implements</ion-select-option
                  >
                  <ion-select-option value="tractor">Tractor</ion-select-option>
                  <ion-select-option value="SprayerManualPower"
                    >Sprayer-Manual/Power</ion-select-option
                  >
                  <ion-select-option value="CultivatorsHarrows"
                    >Cultivators/Harrows</ion-select-option
                  >
                  <ion-select-option value="SeedDrill"
                    >Seed Drill</ion-select-option
                  >
                  <ion-select-option value="Tresher">Tresher</ion-select-option>
                  <ion-select-option value="Ploughs">Ploughs</ion-select-option>
                  <ion-select-option value="Sickles">Sickles</ion-select-option>
                  <ion-select-option value="CrowBar"
                    >Crow Bar</ion-select-option
                  >
                  <ion-select-option value="BullockCar"
                    >Bullock Car</ion-select-option
                  >
                  <ion-select-option value="others">Others</ion-select-option>
                </ion-select>
                <ion-select
                  class="ion-margin-top"
                  interface="popover"
                  label="Number of implement"
                  label-placement="floating"
                  placeholder="Select number of implement"
                  fill="outline"
                  v-model="agriculturalImplementsRows.numberofImplement"
                >
                  <ion-select-option value="1">1</ion-select-option>
                  <ion-select-option value="2">2</ion-select-option>
                  <ion-select-option value="3">3</ion-select-option>
                  <ion-select-option value="4">4</ion-select-option>
                  <ion-select-option value="5">5</ion-select-option>
                </ion-select>
                <ion-select
                  class="ion-margin-top"
                  interface="popover"
                  label="Owned/Hired"
                  label-placement="floating"
                  placeholder="Select owned/hired"
                  fill="outline"
                  v-model="agriculturalImplementsRows.ownedHired"
                >
                  <ion-select-option value="Owned">Owned</ion-select-option>
                  <ion-select-option value="Hired">Hired</ion-select-option>
                </ion-select>
              </ion-card-content>
              <ion-button
                class="ion-margin"
                expand="full"
                color="primary"
                @click="addAgriculturalImplementsRows()"
                ><ion-icon
                  class="ion-margin-end"
                  name="add-circle"
                  slot="icon-only"
                ></ion-icon
                >Add Agriculture Details</ion-button
              >
            </ion-card>
          </div>
          <div v-if="step === 16">
            <ion-card>
          <ion-item-sliding v-for="(item,index) in horticultureDetailsRowsData" :key="item.id">
           <ion-item @click="selectHorticultureDetailsItem(item,index)">
            {{item.details}}
      </ion-item>

      <ion-item-options side="end">
        <ion-item-option color="danger" @click="removeHorticultureDetailsRows(index)">
          <ion-icon slot="icon-only" icon="trash"></ion-icon>
          <strong>Delete</strong>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>
  </ion-card>
            <ion-card>
              <ion-card-header color="tertiary"
                ><strong>16.Horticulture Details</strong></ion-card-header
              >
            </ion-card>
            <ion-card>
              <ion-card-content>
                <ion-select
                  class="ion-margin-top"
                  interface="popover"
                  label="Details"
                  label-placement="floating"
                  placeholder="Select Details"
                  fill="outline"
                  v-model="horticultureDetailsRows.details"
                >
                  <ion-select-option value="">Select Details</ion-select-option>
                  <ion-select-option value="HorticulturePlantsTrees"
                    >Horticulture Plants/Trees</ion-select-option
                  >
                  <ion-select-option value="mango">Mango</ion-select-option>
                  <ion-select-option value="Coconut">Coconut</ion-select-option>
                  <ion-select-option value="guava">Guava</ion-select-option>
                  <ion-select-option value="sapota">Sapota</ion-select-option>
                  <ion-select-option value="custardapple"
                    >Custard Apple</ion-select-option
                  >
                  <ion-select-option value="lemon">Lemon</ion-select-option>
                  <ion-select-option value="sweetlime"
                    >Sweet Lime</ion-select-option
                  >
                  <ion-select-option value="foresttrees"
                    >Forest Trees</ion-select-option
                  >
                  <ion-select-option value="cashew">Cashew</ion-select-option>
                  <ion-select-option value="teak">Teak</ion-select-option>
                  <ion-select-option value="neem">Neem</ion-select-option>
                  <ion-select-option value="nilgiri">Nilgiri</ion-select-option>
                  <ion-select-option value="acacia">Acacia</ion-select-option>
                  <ion-select-option value="pongamia"
                    >Pongamia</ion-select-option
                  >
                  <ion-select-option value="tamarind"
                    >Tamarind</ion-select-option
                  >
                </ion-select>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter number of details"
                  fill="outline"
                  type="number"
                  label="Number of Details"
                  label-placement="floating"
                  v-model="horticultureDetailsRows.numberofDetails"
                ></ion-input>
              </ion-card-content>
              <ion-button
                class="ion-margin"
                color="primary"
                expand="full"
                @click="addHorticultureRows()"
                ><ion-icon
                  class="ion-margin-end"
                  name="add-circle"
                  slot="icon-only"
                ></ion-icon
                >Add Horticulture Details</ion-button
              >
            </ion-card>
          </div>
          <div v-if="step === 17">
            <ion-card>
          <ion-item-sliding v-for="(item,index) in fodderandFeedAvailabilityRowsData" :key="item.id">
           <ion-item @click="selectFodderandFeedAvailabilityItem(item,index)">
            {{item.item}}
      </ion-item>

      <ion-item-options side="end">
        <ion-item-option color="danger" @click="removeFodderandFeedAvailabilityRows(index)">
          <ion-icon slot="icon-only" icon="trash"></ion-icon>
          <strong>Delete</strong>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>
  </ion-card>
            <ion-card>
              <ion-card-header color="tertiary"
                ><strong
                  >17.Fodder and Feed Availability</strong
                ></ion-card-header
              >
            </ion-card>
            <ion-card>
              <ion-card-content>
                <ion-select
                  class="ion-margin-top"
                  interface="popover"
                  label="Item"
                  label-placement="floating"
                  placeholder="Select Item"
                  fill="outline"
                  v-model="fodderandFeedAvailability.item"
                >
                  <ion-select-option value="">Select Item</ion-select-option>
                  <ion-select-option value="ExistingAreaUnderFodder"
                    >Existing Area Under Fodder</ion-select-option
                  >
                  <ion-select-option value="GreenFodder"
                    >Green Fodder</ion-select-option
                  >
                  <ion-select-option value="DryFodder"
                    >Dry Fodder</ion-select-option
                  >
                  <ion-select-option value="Concentrates"
                    >Concentrates</ion-select-option
                  >
                </ion-select>
                <ion-select
                  class="ion-margin-top"
                  interface="popover"
                  label="Unit"
                  label-placement="floating"
                  placeholder="Select Unit"
                  fill="outline"
                  v-model="fodderandFeedAvailability.unit"
                >
                  <ion-select-option value="">Select Unit</ion-select-option>
                  <ion-select-option value="ha">Ha</ion-select-option>
                  <ion-select-option value="tons">Tons/Year</ion-select-option>
                  <ion-select-option value="kg">Kg/day</ion-select-option>
                </ion-select>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter Area/Quantity"
                  fill="outline"
                  label="Area/Quantity"
                  type="number"
                  label-placement="floating"
                  v-model="fodderandFeedAvailability.area"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter value of Production Tons/year"
                  fill="outline"
                  type="number"
                  label="Production(Tonnes/Year)"
                  label-placement="floating"
                  v-model="fodderandFeedAvailability.production"
                ></ion-input>
              </ion-card-content>
              <ion-button
                class="ion-margin"
                expand="full"
                color="primary"
                @click="addFodderandFeedAvailabilityRows()"
                ><ion-icon
                  class="ion-margin-end"
                  name="add-circle"
                  slot="icon-only"
                ></ion-icon
                >Add Government Scheme Details</ion-button
              >
            </ion-card>
          </div>
          <div v-if="step === 18">
            <ion-card>
          <ion-item-sliding v-for="(item,index) in fodderFuelRowsData" :key="item.id">
           <ion-item @click="selectFodderFuelUseItem(item,index)">
            {{item.details}}
      </ion-item>

      <ion-item-options side="end">
        <ion-item-option color="danger" @click="removeFodderFuelUseRows(index)">
          <ion-icon slot="icon-only" icon="trash"></ion-icon>
          <strong>Delete</strong>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>
  </ion-card>
            <ion-card>
              <ion-card-header color="tertiary" class="ion-text-center"
                ><strong
                  >18.Fodder/Fuel use during previous year(1 ton = 1000kgs, 1
                  Head load = 25kgs)</strong
                ></ion-card-header
              >
            </ion-card>
            <ion-card>
              <ion-card-content>
                <ion-select
                  class="ion-margin-top"
                  interface="popover"
                  label="Details"
                  label-placement="floating"
                  placeholder="Select Details"
                  fill="outline"
                  v-model="fodderFuelRows.details"
                >
                  <ion-select-option value="">Select Details</ion-select-option>
                  <ion-select-option value="ownland"
                    >Own Land</ion-select-option
                  >
                  <ion-select-option value="community"
                    >Community</ion-select-option
                  >
                  <ion-select-option value="purchased"
                    >Purchased</ion-select-option
                  >
                  <ion-select-option value="others">Others</ion-select-option>
                </ion-select>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter value in Tons"
                  fill="outline"
                  label="Fodder Utilization(In Tons)"
                  type="number"
                  label-placement="floating"
                  v-model="fodderFuelRows.fodderUtilization"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter value"
                  fill="outline"
                  type="number"
                  label="Fire/Fuel Cow Dung"
                  label-placement="floating"
                  v-model="fodderFuelRows.fireFuelCowDung"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter values"
                  fill="outline"
                  label="Firewood"
                  type="number"
                  label-placement="floating"
                  v-model="fodderFuelRows.firewood"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter values"
                  fill="outline"
                  type="number"
                  label="Agricultural Waste"
                  label-placement="floating"
                  v-model="fodderFuelRows.agriculturalWaste"
                ></ion-input>
              </ion-card-content>
              <ion-button
                class="ion-margin"
                color="primary"
                expand="full"
                @click="addFodderFuelRows()"
                ><ion-icon
                  class="ion-margin-end"
                  name="add-circle"
                  slot="icon-only"
                ></ion-icon
                >Add Government Scheme Details</ion-button
              >
            </ion-card>
          </div>
          <div v-if="step === 19">
            <ion-card>
          <ion-item-sliding v-for="(item,index) in grazeCattleRowsData" :key="item.id">
           <ion-item @click="selectGrazeofCattleItem(item,index)">
            {{item.grazingOfCattle}}
      </ion-item>

      <ion-item-options side="end">
        <ion-item-option color="danger" @click="removeGrazeofCattleRows(index)">
          <ion-icon slot="icon-only" icon="trash"></ion-icon>
          <strong>Delete</strong>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>
  </ion-card>
            <ion-card>
              <ion-card-header color="tertiary" class="ion-text-center"
                ><strong
                  >19.Do you Graze your Cattle in the Community Land?
                  Yes/No</strong
                ></ion-card-header
              >
            </ion-card>
            <ion-card>
              <ion-card-content>
                <ion-select
                  class="ion-margin-top"
                  interface="popover"
                  label="Grazing of Cattle/Animals"
                  label-placement="floating"
                  placeholder="Select Grazing of Cattle/Animals"
                  fill="outline"
                  v-model="grazeCattleRows.grazingOfCattle"
                >
                  <ion-select-option value=""
                    >Select Grazing of Cattle/Animals</ion-select-option
                  >
                  <ion-select-option value="In Community Land"
                    >In Community Land</ion-select-option
                  >
                  <ion-select-option value="Fed in the House"
                    >Fed in the House</ion-select-option
                  >
                  <ion-select-option value="In Own Lands"
                    >In Own Lands</ion-select-option
                  >
                </ion-select>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter number of cattle/animals"
                  fill="outline"
                  label="Number of Cattle/Animals"
                  type="number"
                  label-placement="floating"
                  v-model="grazeCattleRows.numberOfCattle"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter days"
                  fill="outline"
                  label="How many days in a Year"
                  type="number"
                  label-placement="floating"
                  v-model="grazeCattleRows.daysInAYear"
                ></ion-input>
              </ion-card-content>
              <ion-button
                class="ion-margin"
                color="primary"
                expand="full"
                @click="addGrazeCattleRows()"
                ><ion-icon
                  class="ion-margin-end"
                  name="add-circle"
                  slot="icon-only"
                ></ion-icon
                >Add Government Scheme Details</ion-button
              >
            </ion-card>
          </div>
          <div v-if="step === 20">
            <ion-card>
          <ion-item-sliding v-for="(item,index) in householdRowsData" :key="item.id">
           <ion-item @click="selectHouseholdAssetsItem(item,index)">
            {{item.assets}}
      </ion-item>

      <ion-item-options side="end">
        <ion-item-option color="danger" @click="removeHouseholdAssetsRows(index)">
          <ion-icon slot="icon-only" icon="trash"></ion-icon>
          <strong>Delete</strong>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>
  </ion-card>
            <ion-card>
              <ion-card-header color="tertiary"
                ><strong>20.Household Assets</strong></ion-card-header
              >
            </ion-card>
            <ion-card>
              <ion-card-content>
                <ion-select
                  class="ion-margin-top"
                  interface="popover"
                  label="Assets"
                  label-placement="floating"
                  placeholder="Select Assets"
                  fill="outline"
                  v-model="householdRows.assets"
                >
                  <ion-select-option value="">Select Assets</ion-select-option>
                  <ion-select-option value="Motor Cycle"
                    >Motor Cycle</ion-select-option
                  >
                  <ion-select-option value="Cycle">Cycle</ion-select-option>
                  <ion-select-option value="Four Wheeler"
                    >Four Wheeler</ion-select-option
                  >
                  <ion-select-option value="Bio gas Lpg Cooking Gas"
                    >Bio gas/Lpg Cooking Gas</ion-select-option
                  >
                  <ion-select-option value="Tables Chairs"
                    >Tables/Chairs</ion-select-option
                  >
                  <ion-select-option value="Television"
                    >Television</ion-select-option
                  >
                  <ion-select-option value="Washing Machine"
                    >Washing Machine</ion-select-option
                  >
                  <ion-select-option value="Mobile">Mobile</ion-select-option>
                  <ion-select-option value="Others">Others</ion-select-option>
                </ion-select>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter units"
                  fill="outline"
                  label="Number"
                  label-placement="floating"
                  type="number"
                  v-model="householdRows.number"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter value in Rs"
                  fill="outline"
                  label="Present Value(Rs)"
                  label-placement="floating"
                  type="number"
                  v-model="householdRows.presentValue"
                ></ion-input>
              </ion-card-content>
              <ion-button
                class="ion-margin"
                expand="full"
                color="primary"
                @click="addHouseholdRows()"
                ><ion-icon
                  class="ion-margin-end"
                  name="add-circle"
                  slot="icon-only"
                ></ion-icon
                >Add Household Assets Details</ion-button
              >
            </ion-card>
          </div>
          <div v-if="step === 21">
            <ion-card>
          <ion-item-sliding v-for="(item,index) in participationinCommunityProgramsRowsData" :key="item.id">
           <ion-item @click="selectParticipationCommunityProgramItem(item,index)">
            {{item.nameofTheCommunityProgram}}
      </ion-item>

      <ion-item-options side="end">
        <ion-item-option color="danger" @click="removeParticipationCommunityProgramRows(index)">
          <ion-icon slot="icon-only" icon="trash"></ion-icon>
          <strong>Delete</strong>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>
  </ion-card>
            <ion-card>
              <ion-card-header color="tertiary"
                ><strong
                  >21.Participation in Community Programs</strong
                ></ion-card-header
              >
            </ion-card>
            <ion-card>
              <ion-card-content>
                <ion-select
                  class="ion-margin-top"
                  interface="popover"
                  label="Name of the Community Program"
                  label-placement="floating"
                  placeholder="Select Name of the Community Program"
                  fill="outline"
                  v-model="
                    participationinCommunityProgramsRows.nameofTheCommunityProgram
                  "
                >
                  <ion-select-option value=""
                    >Select Community Program</ion-select-option
                  >
                  <ion-select-option value="Awareness Programs"
                    >Awareness Programs</ion-select-option
                  >
                  <ion-select-option value="Trainings"
                    >Trainings</ion-select-option
                  >
                  <ion-select-option value="Exposure Visits"
                    >Exposure Visits</ion-select-option
                  >
                  <ion-select-option value="Inter-State Field Visits"
                    >Inter-State Field Visits</ion-select-option
                  >
                </ion-select>
                <ion-select
                  class="ion-margin-top"
                  interface="popover"
                  label="Select mark the appropriate"
                  label-placement="floating"
                  placeholder="Select mark the appropriate"
                  fill="outline"
                  v-model="
                    participationinCommunityProgramsRows.markTheAppropriate
                  "
                >
                  <ion-select-option value=""
                    >Select Appropriate</ion-select-option
                  >
                  <ion-select-option value="Increase in Knowledge"
                    >Increase in Knowledge</ion-select-option
                  >
                  <ion-select-option value="Capacity to Execute"
                    >Capacity to Execute</ion-select-option
                  >
                  <ion-select-option value="Decision Making"
                    >Decision Making</ion-select-option
                  >
                  <ion-select-option value="Project Managemen"
                    >Project Management</ion-select-option
                  >
                </ion-select>
                <ion-radio-group
                  v-model="
                    participationinCommunityProgramsRows.awarenessprograms
                  "
                >
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
              <ion-button
                class="ion-margin"
                expand="full"
                @click="addParticipationRows()"
                color="primary"
                ><ion-icon
                  class="ion-margin-end"
                  name="add-circle"
                  slot="icon-only"
                ></ion-icon
                >Add Community Programs</ion-button
              >
            </ion-card>
          </div>
          <div v-if="step === 22">
            <ion-card>
          <ion-item-sliding v-for="(item,index) in awarenessTechnologyRowsData" :key="item.id">
           <ion-item @click="selectAwarenessAdoptionTechnologyItem(item,index)">
            {{item.technology}}
      </ion-item>

      <ion-item-options side="end">
        <ion-item-option color="danger" @click="removeAwarenessAdoptionTechnologyRows(index)">
          <ion-icon slot="icon-only" icon="trash"></ion-icon>
          <strong>Delete</strong>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>
  </ion-card>
            <ion-card>
              <ion-card-header color="tertiary"
                ><strong
                  >22.Awareness on Adaption of Technology</strong
                ></ion-card-header
              >
            </ion-card>
            <ion-card>
              <ion-card-content>
                <ion-select
                  class="ion-margin-top"
                  interface="popover"
                  label="Technology"
                  label-placement="floating"
                  placeholder="Select Technology"
                  fill="outline"
                  v-model="awarenessTechnologyRows.technology"
                >
                  <ion-select-option value=""
                    >Select Technology</ion-select-option
                  >
                  <ion-select-option value="SoilManagement"
                    >Soil Management</ion-select-option
                  >
                  <ion-select-option value="CropManagement"
                    >Crop Management</ion-select-option
                  >
                  <ion-select-option value="WaterManagement"
                    >Water Management</ion-select-option
                  >
                  <ion-select-option value="LivestockManagement"
                    >Livestock Management</ion-select-option
                  >
                  <ion-select-option value="FisheriesManagement"
                    >Fisheries Management</ion-select-option
                  >
                  <ion-select-option value="ForestryManagement"
                    >Forestry Management</ion-select-option
                  >
                  <ion-select-option value="others">Others</ion-select-option>
                </ion-select>
                <ion-select
                  class="ion-margin-top"
                  interface="popover"
                  label="Source of Information"
                  label-placement="floating"
                  placeholder="Select Source of Information"
                  fill="outline"
                  v-model="awarenessTechnologyRows.sourceInformation"
                >
                  <ion-select-option value=""
                    >Select Source of Information</ion-select-option
                  >
                  <ion-select-option value="PrintMedia"
                    >Print Media</ion-select-option
                  >
                  <ion-select-option value="ElectronicMedia"
                    >Electronic Media</ion-select-option
                  >
                  <ion-select-option value="StateDepartment"
                    >State Department</ion-select-option
                  >
                  <ion-select-option value="AgriculturalDepartment"
                    >Agricultural Department</ion-select-option
                  >
                  <ion-select-option value="InputDealers"
                    >Input Dealers</ion-select-option
                  >
                  <ion-select-option value="ProgressiveFarmers"
                    >Progressive Farmers</ion-select-option
                  >
                </ion-select>
              </ion-card-content>
              <ion-button
                class="ion-margin"
                expand="full"
                @click="addAwarenessTechnologyRows()"
                color="primary"
                ><ion-icon
                  class="ion-margin-end"
                  name="add-circle"
                  slot="icon-only"
                ></ion-icon
                >Add Awareness on Technology Details</ion-button
              >
            </ion-card>
          </div>
          <div v-if="step === 23">
            <ion-card>
          <ion-item-sliding v-for="(item,index) in membershipDetailsRowsData" :key="item.id">
           <ion-item @click="selectMembershipDetailsItem(item,index)">
            {{item.sgh}}
      </ion-item>

      <ion-item-options side="end">
        <ion-item-option color="danger" @click="removeMembershipDetailsRows(index)">
          <ion-icon slot="icon-only" icon="trash"></ion-icon>
          <strong>Delete</strong>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>
  </ion-card>
            <ion-card>
              <ion-card-header color="tertiary"
                ><strong>23.Membership Details</strong></ion-card-header
              >
            </ion-card>
            <ion-card>
              <ion-card-header color="tertiary"
                ><strong>Self Help Groups(SHG's)</strong></ion-card-header
              >
            </ion-card>
            <ion-card>
              <ion-card-content>
                <ion-select
                  class="ion-margin-top"
                  interface="popover"
                  label="Membership"
                  label-placement="floating"
                  placeholder="Select Membership"
                  fill="outline"
                  v-model="membershipDetailsRows.sgh"
                >
                  <ion-select-option value=""
                    >Select Membership</ion-select-option
                  >
                  <ion-select-option value="User Groups"
                    >User Groups</ion-select-option
                  >
                  <ion-select-option value="Watershed Committee"
                    >Watershed Committee</ion-select-option
                  >
                  <ion-select-option value="Others">Others</ion-select-option>
                </ion-select>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter number of SGH"
                  fill="outline"
                  label="Number"
                  label-placement="floating"
                  v-model="membershipDetailsRows.number"
                ></ion-input>
              </ion-card-content>
              <ion-button
                class="ion-margin"
                expand="full"
                color="primary"
                @click="addMembershipDetailsRows()"
                ><ion-icon
                  class="ion-margin-end"
                  name="add-circle"
                  slot="icon-only"
                ></ion-icon
                >Add Membership Details</ion-button
              >
            </ion-card>
          </div>
          <div v-if="step === 24">
            <ion-card>
          <ion-item-sliding v-for="(item,index) in beneficiarySchemeRowsData" :key="item.id">
           <ion-item @click="selectBeneficiaryofSchemeItem(item,index)">
            {{item.nameofTheScheme}}
      </ion-item>

      <ion-item-options side="end">
        <ion-item-option color="danger" @click="removeBeneficiaryofSchemeRows(index)">
          <ion-icon slot="icon-only" icon="trash"></ion-icon>
          <strong>Delete</strong>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>
  </ion-card>
            <ion-card>
              <ion-card-header class="ion-text-center" color="tertiary"
                ><strong
                  >24.have been the Beneficiary of any scheme of project
                  Previously?Yes/No , if Yes</strong
                ></ion-card-header
              >
            </ion-card>
            <ion-card>
              <ion-card-content>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter Name of the Scheme/Project"
                  fill="outline"
                  label="Name of the Scheme/Project"
                  label-placement="floating"
                  v-model="beneficiarySchemeRows.nameofTheScheme"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter Details of the Benefits Obtained"
                  fill="outline"
                  label="Details of the Benefits Obtained"
                  label-placement="floating"
                  v-model="beneficiarySchemeRows.detailsoftheBenfits"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter Value of the Benefit(Rs)"
                  fill="outline"
                  label="Value of the Benefit(Rs)"
                  type="number"
                  label-placement="floating"
                  v-model="beneficiarySchemeRows.valueoftheBenfits"
                ></ion-input>
              </ion-card-content>
              <ion-button
                class="ion-margin"
                color="primary"
                expand="full"
                @click="addBeneficiarySchemeRows()"
                ><ion-icon
                  class="ion-margin-end"
                  name="add-circle"
                  slot="icon-only"
                ></ion-icon
                >Add Beneficiary Scheme Data</ion-button
              >
            </ion-card>
          </div>
          <div v-if="step === 25">
            <ion-card>
              <ion-card-header class="ion-text-center" color="tertiary"
                ><strong
                  >25.Soil,Land & Water Conservation</strong
                ></ion-card-header
              >
            </ion-card>
            <ion-card>
              <ion-card-content>
                <ion-row>
                  25.Are you aware of watershed development programs/soil,land &
                  water Conservation?
                </ion-row>
                <ion-row class="ion-margin-top">
                  <ion-radio-group v-model="awarenessprograms">
                    <ion-row>
                      <ion-radio value="Yes" label-placement="fixed"
                        >Yes</ion-radio
                      >
                    </ion-row>
                    <ion-row class="ion-margin-top">
                      <ion-radio value="No" label-placement="fixed"
                        >No</ion-radio
                      >
                    </ion-row>
                  </ion-radio-group>
                </ion-row>
                <ion-row class="ion-margin-top">
                  26.Have you received any training in watershed development
                  programs soil,land & water conservation
                </ion-row>
                <ion-row class="ion-margin-top">
                  <ion-radio-group v-model="receivedawarenessprograms">
                    <ion-row>
                      <ion-radio value="Yes" label-placement="fixed"
                        >Yes</ion-radio
                      >
                    </ion-row>
                    <ion-row class="ion-margin-top">
                      <ion-radio value="No" label-placement="fixed"
                        >No</ion-radio
                      >
                    </ion-row>
                  </ion-radio-group>
                </ion-row>
                <div class="ion-text-center ion-margin-top">
                  <ion-label color="primary">Date</ion-label>
                  <ion-datetime-button
                    class="ion-margin-top"
                    datetime="datetime"
                  ></ion-datetime-button>
                  <ion-modal :keep-contents-mounted="true">
                    <ion-datetime id="datetime" v-model="dateA"></ion-datetime>
                  </ion-modal>
                </div>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter name of the surveyor"
                  fill="outline"
                  label="Name of the Surveyor"
                  label-placement="floating"
                  v-model="surveyor"
                ></ion-input>
              </ion-card-content>
            </ion-card>
          </div>
        </div>
      </div>
    </ion-content>
    <ion-footer>
      <div>
        <ion-button
          color="primary"
          class="ion-margin"
          v-if="currentStep !== 1"
          size="small"
          @click="prevStep()"
          ><ion-icon name="carat-back-outline"></ion-icon>Previous</ion-button
        >
        <ion-button
          class="nextButton ion-margin"
          size="small"
          color="primary"
          v-if="currentStep !== totalSteps"
          @click="nextStep()"
          >Next<ion-icon name="caret-forward-outline"></ion-icon
        ></ion-button>
        <ion-button
          v-else-if="currentStep === totalSteps"
          size="small"
          color="primary"
          @click="submitData()"
          class="nextButton ion-margin"
          ><ion-icon name="checkmark-outline"></ion-icon> Submit</ion-button
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
  IonBackButton,
  IonCheckbox,
  IonGrid,
  IonDatetimeButton,
  IonDatetime,
  IonModal,
  IonRippleEffect,
  IonFooter,
  IonToast,
  toastController,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
} from "@ionic/vue";
import axios from "axios";
import { Geolocation } from "@capacitor/geolocation";
export default {
  mounted() {
    this.getCurrentPosition();
  },
  watch: {
    totalRainfedArea: function () {
      this.calculateSum();
    },
    totalIrrigatedArea: function () {
      this.calculateSum();
    },
    selectedStep(value) {
      this.step = value;
    },
  },
  data() {
    return {
      currentStep: 1,
      totalSteps: 25, // Update this to the total number of steps
      selectedStep: null,
      steps: [
        "1 General Information",
        "2 Household Details",
        "3 Land Particulars",
        "4 Livestock details",
        "5 Migration status",
        "6 If land less labourers, Given the details on the number of days employment availed",
        "7 Benefits from Government Schemes",
        "8 Use of manure and chemical fertilizers",
        "9 Pest and Disease control measures",
        "10 Details loan particulars",
        "11 Family Expenditure",
        "12 Different source of Income, Expenditure and Family Debt Details",
        "13 Availability of Drinking water",
        "14 Source and Quality of Water",
        "15 Agriculture Implements",
        "16 Horticulture details",
        "17 Fodder and Feed Availability",
        "18 Fodder/ Fuel use during previous year",
        "19 Do you Graze your cattle in the Community",
        "20 Household Assets",
        "21 Participation of Community Programmes",
        "22 Awareness on adoption of technology",
        "23 Membership details",
        "24 Have been the beneficiary of any scheme of project previously",
        "25 Soil, Land & Water Conservation",
      ],
      occupation: [],
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
      householdDetailsRowsData: [],
      rows: [],
      addLivestockDetails: {
        nameOfTheAnimal: "",
        existingNo: "",
        milkProductionLitresPerDay: "",
        milkConsumedLitresPerday: "",
        quantitySoldByYear: "",
        unitValue: "",
        incomeGeneratedDuringLastYear: "",
      },
      livestockRows: [],
      cultivatedAreaRows: {
        cultivatedArea: "",
        rainfedArea: "",
        irrigatedArea: "",
        total: "",
        typeofOwnership: "",
      },
      cultivatedAreaRowsData: [],
      incomefromCropsKharifRows: {
        cropGrownKharif: "",
        rainfedKharif: "",
        rainfedYieldKharif: "",
        rainfedCostKharif: "",
        rainfedPerQtlsKharif: "",
        rainfedGrossIncomeKharif: "",
        rainfedNetIncomeKharif: "",
        irrigatedaAreaKharif: "",
        irrigatedYieldKharif: "",
        irrigatedCoostofCultivationKharif: "",
        irrigatedRatePerQtlsKharif: "",
        irrigatedGrossIncomeKharif: "",
        irrigatedNetIncomeKharif: "",
      },
      incomefromCropsKharifRowsData: [],
      incomefromCropsRabiRows: {
        cropGrownRabhi: "",
        rainfedRabi: "",
        rainfedYieldRabi: "",
        rainfedCostRabi: "",
        rainfedPerQtlsRabi: "",
        rainfedGrossIncomeRabi: "",
        rainfedNetIncomeRabi: "",
        irrigatedaAreaRabi: "",
        irrigatedYieldRabi: "",
        irrigatedCoostofCultivationRabi: "",
        irrigatedRatePerQtlsRabi: "",
        irrigatedGrossIncomeRabi: "",
        irrigatedNetIncomeRabi: "",
      },
      incomefromCropsRabiRowsData: [],
      groupedData: [
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
          options: [{ value: "fisheries ", label: "Fisheries" }],
        },
        {
          label: "Piggery",
          options: [{ value: "piggery ", label: "Piggery" }],
        },
      ],
      district: [],
      wcc: [],
      selectedDistrict: null,
      selectedWccNo: null,
      project: [],
      selectedProjectNo: null,
      watershed: [],
      nameOfTheMicroWatershed: null,
      habitation: [],
      mandal: [],
      gramPanchayat: [],
      selectedMandalName: "",
      selectedGramPanchayatName: "",
      nameofthehousehold: "",
      selectedDistrictName: "",
      wccName: "",
      selectedProjectName: "",
      selectedMicroWatershed: "",
      selectedHabitation: "",
      selectedMandal: "",
      householdDoorNo: "",
      aadharNumber: "",
      economicStatus: "",
      occupationString: "",
      location: "",
      selectedGramPanchayat: "",
      jobCardNo: "",
      SocialStatus: "",
      ContactNumber: "",
      totalRainfedArea: 0,
      totalIrrigatedArea: 0,
      totalHoldingArea: 0,
      houseType: "",
      cultivatedArea: "",
      rainfedArea: "",
      irrigatedArea: "",
      total: 0,
      typeofOwnership: "",
      nameOfTheAnimal: "",
      existingNo: "",
      milkProductionLitresPerDay: "",
      milkConsumedLitresPerday: "",
      quantitySoldByYear: "",
      unitValue: "",
      incomeGeneratedDuringLastYear: "",
      id: "",
      nameOfThePerson: "",
      gender: "",
      noOfDaysMigratingPerYear: "",
      reasonsForMigrating: "",
      placeOfMigration: "",
      occupationDuringMigration: "",
      incomeFromOccupation: "",
      migrationStatusRows: {
        nameOfThePerson: "",
        gender: "",
        noOfDaysMigratingPerYear: "",
        reasonsForMigrating: "",
        placeOfMigration: "",
        occupationDuringMigration: "",
        incomeFromOccupation: "",
      },
      migrationStatusRowsData: [],
      nameOfTheProject: "",
      manDays: "",
      wageDays: "",
      income: "",
      landLessLabourers: {
        nameOfTheProject: "",
        manDays: "",
        wageDays: "",
        income: "",
        total: "",
      },
      landLessData: [],
      nameOfTheFamilyMember: "",
      schemeName: "",
      amount: "",
      governmentSchemesRows: {
        nameOfTheFamilyMember: "",
        schemeName: "",
        amount: "",
      },
      governmentSchemesRowsData: [],
      crops: "",
      organic: "",
      microNutrients: "",
      N: "",
      P: "",
      K: "",
      cost: "",
      useofChemicalManureRows: {
        crops: "",
        organic: "",
        microNutrients: "",
        N: "",
        P: "",
        K: "",
        cost: "",
      },
      chemicalManureRowsData: [],
      particulars: "",
      bank: "",
      moneyLender: "",
      dealer: "",
      fellowfarmer: "",
      shg: "",
      others: "",
      total: "",
      agriculture: "",
      consumption: "",
      education: "",
      marriage: "",
      others2: "",
      loanParticularsRows: {
        particulars: "",
        bank: "",
        moneyLender: "",
        dealer: "",
        fellowfarmer: "",
        shg: "",
        others: "",
        total: "",
        agriculture: "",
        consumption: "",
        education: "",
        marriage: "",
        others2: "",
      },
      loanParticularsRowsData: [],
      crops: "",
      nameOfThePest: "",
      biological: "",
      chemical: "",
      others: "",
      material: "",
      wages: "",
      totalMaterial: "",
      totalWages: "",
      pestandDiseaseRows: {
        crops: "",
        nameOfThePest: "",
        biological: "",
        chemical: "",
        others: "",
        material: "",
        wages: "",
        totalMaterial: "",
        totalWages: "",
      },
      pestandDiseaseRowsData: [],
      items: "",
      familyExpenditureRows: {
        items: "",
        total: "",
      },
      familyExpenditureRowsData: [],
      source: "",
      income: "",
      sourceofIncomeRows: {
        source: "",
        income: "",
      },
      sourceofIncomeRowsData: [],
      drinkingwateritem: "",
      drinkingwaterunits: "",
      litresPerDay: "",
      sourceDrinkingWater: "",
      drinkingWaterAvailabilityRows: {
        drinkingwateritem: "",
        drinkingwaterunits: "",
        litresPerDay: "",
        sourceDrinkingWater: "",
      },
      drinkingWaterAvailabilityRowsData: [],
      waterSource: "",
      driedupWell: "",
      functioningWell: "",
      presentApproximateWaterLevel: "",
      yieldfromtheBorewell: "",
      kharif: "",
      rabi: "",
      summer: "",
      otherCrops: "",
      sourceandQualityofWaterRows: {
        waterSource: "",
        driedupWell: "",
        functioningWell: "",
        presentApproximateWaterLevel: "",
        yieldfromtheBorewell: "",
        kharif: "",
        rabi: "",
        summer: "",
        otherCrops: "",
        horticulture: "",
        waterquality: "",
      },
      sourceandQualityofWaterRowsData: [],
      selectImplements: "",
      numberofImplement: "",
      ownedHired: "",
      agriculturalImplementsRows: {
        selectImplements: "",
        numberofImplement: "",
        ownedHired: "",
      },
      agriculturalImplementsRowsData: [],
      details: "",
      numberofDetails: "",
      horticultureDetailsRows: {
        details: "",
        numberofDetails: "",
      },
      horticultureDetailsRowsData: [],
      item: "",
      unit: "",
      area: "",
      production: "",
      fodderandFeedAvailability: {
        item: "",
        unit: "",
        area: "",
        production: "",
      },
      fodderandFeedAvailabilityRowsData: [],
      details: "",
      fodderUtilization: "",
      fireFuelCowDung: "",
      firewood: "",
      agriculturalWaste: "",
      fodderFuelRows: {
        details: "",
        fodderUtilization: "",
        fireFuelCowDung: "",
        firewood: "",
        agriculturalWaste: "",
      },
      fodderFuelRowsData: [],
      grazingOfCattle: "",
      numberOfCattle: "",
      daysInAYear: "",
      grazeCattleRows: {
        grazingOfCattle: "",
        numberOfCattle: "",
        daysInAYear: "",
      },
      grazeCattleRowsData: [],
      assets: "",
      number: "",
      presentValue: "",
      householdRows: {
        assets: "",
        number: "",
        presentValue: "",
      },
      householdRowsData: [],
      nameofTheCommunityProgram: "",
      markTheAppropriate: "",
      awarenessprograms: "",
      participationinCommunityProgramsRows: {
        nameofTheCommunityProgram: "",
        markTheAppropriate: "",
        awarenessprograms: "",
      },
      participationinCommunityProgramsRowsData: [],
      technology: "",
      sgh: "",
      sourceInformation: "",
      awarenessTechnologyRows: {
        technology: "",
        sourceInformation: "",
      },
      awarenessTechnologyRowsData: [],
      number: "",
      membershipDetailsRows: {
        sgh: "",
        number: "",
      },
      membershipDetailsRowsData: [],
      nameofTheScheme: "",
      detailsoftheBenfits: "",
      valueoftheBenfits: "",
      beneficiarySchemeRows: {
        nameofTheScheme: "",
        detailsoftheBenfits: "",
        valueoftheBenfits: "",
      },
      beneficiarySchemeRowsData: [],
      receivedawarenessprograms: "",
      surveyor: "",
      dateA: "",
      subType: "",
      lat: null,
      long: null,
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
    IonIcon,
    IonButton,
    IonItem,
    IonBackButton,
    IonButtons,
    IonCheckbox,
    IonGrid,
    IonDatetimeButton,
    IonDatetime,
    IonModal,
    IonRippleEffect,
    IonFooter,
    IonToast,
    toastController,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
  },
  created() {
    this.getDistricts();
  },
  computed: {
    currentStepLabel() {
      return this.selectedStep
        ? `${this.selectedStep}. ${this.steps[this.selectedStep - 1]}`
        : "1. General Information";
    },
    ValidPhoneNumberShowingMessage() {
      // Regular expression for a basic phone number validation
      // const regex = /^\d{10,12}$/;
      // this.isValidPhoneNumber = regex.test(this.ContactNumber);
      return (
        this.ContactNumber.length > 0 &&
        (this.ContactNumber.length < 10 || this.ContactNumber.length > 12)
      );
    },
    ValidAadharNumberShowingMessage() {
      // Regular expression for aadhar number validation
      // const regex = /^\d{12,16}$/;
      // this.isValidAadharNumber = regex.test(this.aadharNumber);
      return (
        this.aadharNumber.length > 0 &&
        (this.aadharNumber.length < 12 || this.aadharNumber.length > 16)
      );
    },
  },
  methods: {
    async triggerToastMessage(message,color) {
      const toast = await toastController.create({
        message: message,
        duration: 3000,
        position: "top",
        cssClass: color, // Add your custom CSS class here
      });
      toast.present();

      // Delay the page reload until after the toast has been displayed
      // setTimeout(() => {
      //   this.$router.go(0);
      // }, 3000); // duration of the toast
    },
    async getCurrentPosition() {
      try {
        const coordinates = await Geolocation.getCurrentPosition();
        this.lat = coordinates.coords.latitude;
        this.long = coordinates.coords.longitude;
      } catch (e) {
        console.error("Error getting location", e);
      }
    },
    calculateSum() {
      const totalrainfed = parseFloat(this.totalRainfedArea || 0);
      const totalirrigated = parseFloat(this.totalIrrigatedArea || 0);
      const total = totalrainfed + totalirrigated;
      this.totalHoldingArea = isNaN(total) ? "" : total.toString();
    },
    // async callChildFromParent() {
    //   this.submitData()
    //   console.log("fifth component called",this.$refs.fifthComp)
    //   this.$refs.fifthComp[0].childMethod();
    //   // this.$refs.fifthComp[0].migrationStatusData(this.id)
    // },
    // callChildOneFromParent() {
    //   this.$refs.parentComp.childMethodOne();
    // },
    //   callFifthComp(id){
    //   this.$refs.fifthComp[0].migrationStatusData(id)
    // },
    navigateToStep(event) {
      this.currentStep = event.detail.value;
    },
    ContactNumberValidation(event) {
      let value = event.target.value;
      // Remove non-digit characters
      value = value.replace(/\D/g, "");
      // Limit to 12 characters
      if (value.length > 12) {
        value = value.substring(0, 12);
      }
      this.ContactNumber = value;
    },
    aadharNumberValidation(event) {
      let value = event.target.value;
      // Remove non-digit characters
      value = value.replace(/\D/g, "");
      // Limit to 12 characters
      if (value.length > 16) {
        value = value.substring(0, 16);
      }
      this.aadharNumber = value;
    },
    stringValidation() {
      let value = event.target.value;
      // Remove non-alphabetic characters
      value = value.replace(/[^a-zA-Z\s]/g, "");
      this.nameofthehousehold = value;
      // this.newRow.name_of_the_family_member = value;
      // this.migrationStatusRows.nameOfThePerson = value;
      // this.governmentSchemesRows.nameOfTheFamilyMember = value;
    },
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
    async livestockData() {
      try{
      this.livestockRows.push({ ...this.addLivestockDetails });
      this.triggerToastMessage(
            "Insertion of Livestock Details is Submitted Successfully","custom_toast"
          );
      this.clearLiveStockFields();
      }  
      catch(error){
        this.triggerToastMessage("Failed to Insert Livestock Details Kharif","danger");
        console.error("error in livestockData function",error)
      }
    },

    clearLiveStockFields() {
      this.addLivestockDetails = {
        nameOfTheAnimal: "",
        existingNo: "",
        milkProductionLitresPerDay: "",
        milkConsumedLitresPerday: "",
        quantitySoldByYear: "",
        unitValue: "",
        incomeGeneratedDuringLastYear: "",
      };
    },
    // async presentToast() {
    //     const toast = await toastController.create({
    //       message: 'Hello World!',
    //       duration: 1500,
    //       position: position,
    //     });

    //     await toast.present();
    //   },
    async getDistricts() {
      try {
        const response = await axios.get(
          "http://183.82.109.39:5000/api/districts"
        );
        this.district = response.data;
      } catch (error) {
        console.error("error in get districts function", error);
      }
    },
    async getWcc() {
      try {
        const response = await axios.get("http://183.82.109.39:5000/api/wcc", {
          params: { id: this.selectedDistrict },
        });
        this.wcc = response.data;
      } catch (error) {
        console.error("error in getwcc function", error);
      }
    },
    async getProject() {
      try {
        const response = await axios.get(
          "http://183.82.109.39:5000/api/projects",
          { params: { id: this.selectedWccNo } }
        );
        this.project = response.data;
      } catch (error) {
        console.error("Error in getProject function", error);
      }
    },
    async getWaterShedVillage() {
      try {
        const response = await axios.get(
          "http://183.82.109.39:5000/api/watershed",
          { params: { id: this.selectedProjectNo } }
        );
        this.watershed = response.data;
      } catch (error) {
        console.error("error in getwatershedvillage function", error);
      }
    },
    async getHabitation() {
      try {
        const response = await axios.get(
          "http://183.82.109.39:5000/api/habitation",
          { params: { id: this.nameOfTheMicroWatershed } }
        );
        this.habitation = response.data;
      } catch (error) {
        console.error("error in gethabitation function", error);
      }
    },
    async getMandal() {
      try {
        const response = await axios.get(
          "http://183.82.109.39:5000/api/mandal",
          { params: { id: this.selectedDistrict } }
        );
        this.mandal = response.data;
      } catch (error) {
        console.error("error in getMandal function", error);
      }
    },
    async getGramPanchayat() {
      try {
        const response = await axios.get(
          "http://183.82.109.39:5000/api/grampanchayat",
          { params: { id: this.nameOfTheMicroWatershed } }
        );
        this.gramPanchayat = response.data;
      } catch (error) {
        console.error("error in getgrampanchayat function", error);
      }
    },
    onDistrictSelected() {
      const selectedDistrictData = this.district.find(
        (item) => item.id === this.selectedDistrict
      );
      if (selectedDistrictData) {
        this.selectedDistrictName = selectedDistrictData.dist_name;
      }
    },
    onWccSelected() {
      const selectedWccData = this.wcc.find(
        (item) => item.id === this.selectedWccNo
      );
      if (selectedWccData) {
        this.wccName = selectedWccData.wcc_name;
      }
    },
    onProjectSelected() {
      const selectedProjectData = this.project.find(
        (item) => item.id === this.selectedProjectNo
      );
      if (selectedProjectData) {
        this.selectedProjectName = selectedProjectData.project_name;
      }
    },
    onMicroWatershed() {
      const selectedMicroWatershedData = this.watershed.find(
        (name) => name.id === this.nameOfTheMicroWatershed
      );
      if (selectedMicroWatershedData) {
        this.selectedMicroWatershed =
          selectedMicroWatershedData.micro_watershed_name;
      }
    },
    onHabitation() {
      const selectedHabitationData = this.habitation.find(
        (name) => name.id === this.nameOfHabitation
      );
      if (selectedHabitationData) {
        this.selectedHabitation = selectedHabitationData.habitation_name;
      }
    },
    onMandal() {
      const selectedMandalData = this.mandal.find(
        (name) => name.id === this.selectedMandal
      );
      if (selectedMandalData) {
        this.selectedMandalName = selectedMandalData.mandal_name;
      }
    },
    onGramPanchayat() {
      const selectedGramPanchayatdata = this.gramPanchayat.find(
        (name) => name.id === this.selectedGramPanchayat
      );
      if (selectedGramPanchayatdata) {
        this.selectedGramPanchayatName =
          selectedGramPanchayatdata.grampanchayat_name;
        console.log("wcc name", selectedGramPanchayatdata.grampanchayat_name);
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
    async addHouseholdDetailsRows() {
      try {
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
        this.householdDetailsRowsData.push({ ...this.newRow }); // Add a copy of newRow to rows
        console.log(
          "this household members rows",
          this.householdDetailsRowsData
        );
        this.triggerToastMessage(
            "Household Member is Added Successfully","custom_toast"
          );

      this.clearFields(); // Clear the input fields
      }
      } catch (error) {
        console.log("error in addHouseholdDetailsRows function",error)
        this.triggerToastMessage("Failed to Insert the Household Member","danger");
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
      this.householdDetailsRowsData.splice(index, 1);
    },
    selectHouseholdMember(item,index){
      try {
        this.newRow.name_of_the_family_member = item.name_of_the_family_member;
        this.newRow.relationship_with_head= item.relationship_with_head;
        this.newRow.disability= item.disability;
        this.newRow.gender= item.gender;
        this.newRow.age= item.age;
        this.newRow.level_of_education= item.level_of_education;
        // newRow.occupation= item.occupation;
        this.newRow.annual_gross_income= item.annual_gross_income;
        this.newRow.membership= item.membership;
        this.householdDetailsRowsData.splice(index, 1);
        console.log("select member info",item)
      } catch (error) {
        console.error("error in selectHouseholdMember function",error)
      }
    },
    selectCultivatedAreaItem(item,index){
      try { 
        this.cultivatedAreaRows.cultivatedArea= item.cultivatedArea
        this.cultivatedAreaRows.rainfedArea= item.rainfedArea
        this.cultivatedAreaRows.irrigatedArea= item.irrigatedArea
        this.cultivatedAreaRows.total= item.total
        this.cultivatedAreaRows.typeofOwnership= item.typeofOwnership
        this.cultivatedAreaRowsData.splice(index, 1);
      } catch (error) {
        console.error("error in selectCultivatedAreaItem function",error)
      }
    },
    removeRowLandParticulars(index) {
      this.cultivatedAreaRowsData.splice(index, 1);
    },
    selectIncomeKharifItem(item,index){
      try {
        this.incomefromCropsKharifRows.cropGrownKharif= item.cropGrownKharif
        this.incomefromCropsKharifRows.rainfedKharif= item.rainfedKharif
        this.incomefromCropsKharifRows.rainfedYieldKharif= item.rainfedYieldKharif
        this.incomefromCropsKharifRows.rainfedCostKharif= item.rainfedCostKharif
        this.incomefromCropsKharifRows.rainfedPerQtlsKharif= item.rainfedPerQtlsKharif
        this.incomefromCropsKharifRows.rainfedGrossIncomeKharif= item.rainfedGrossIncomeKharif
        this.incomefromCropsKharifRows.rainfedNetIncomeKharif= item.rainfedNetIncomeKharif
        this.incomefromCropsKharifRows.irrigatedaAreaKharif= item.irrigatedaAreaKharif
        this.incomefromCropsKharifRows.irrigatedYieldKharif= item.irrigatedYieldKharif
        this.incomefromCropsKharifRows.irrigatedCoostofCultivationKharif= item.irrigatedCoostofCultivationKharif
        this.incomefromCropsKharifRows.irrigatedRatePerQtlsKharif= item.irrigatedRatePerQtlsKharif
        this.incomefromCropsKharifRows.irrigatedGrossIncomeKharif= item.irrigatedGrossIncomeKharif
        this.incomefromCropsKharifRows.irrigatedNetIncomeKharif= item.irrigatedNetIncomeKharif
        this.incomefromCropsKharifRowsData.splice(index, 1);
      } catch (error) {
        console.error("Error in selectIncomeKharifItem function",error)
      }
    },
    removeRowIncomeKharif(index) {
      this.incomefromCropsKharifRowsData.splice(index, 1);
    },
    selectIncomeRabiItem(item,index){
      try {
        this.incomefromCropsRabiRows.cropGrownRabhi= item.cropGrownRabhi
        this.incomefromCropsRabiRows.rainfedRabi= item.rainfedRabi
        this.incomefromCropsRabiRows.rainfedYieldRabi= item.rainfedYieldRabi
        this.incomefromCropsRabiRows.rainfedCostRabi= item.rainfedCostRabi
        this.incomefromCropsRabiRows.rainfedPerQtlsRabi= item.rainfedPerQtlsRabi
        this.incomefromCropsRabiRows.rainfedGrossIncomeRabi= item.rainfedGrossIncomeRabi
        this.incomefromCropsRabiRows.rainfedNetIncomeRabi= item.rainfedNetIncomeRabi
        this.incomefromCropsRabiRows.irrigatedaAreaRabi= item.irrigatedaAreaRabi
        this.incomefromCropsRabiRows.irrigatedYieldRabi= item.irrigatedYieldRabi
        this.incomefromCropsRabiRows.irrigatedCoostofCultivationRabi= item.irrigatedCoostofCultivationRabi
        this.incomefromCropsRabiRows.irrigatedRatePerQtlsRabi= item.irrigatedRatePerQtlsRabi
        this.incomefromCropsRabiRows.irrigatedGrossIncomeRabi= item.irrigatedGrossIncomeRabi
        this.incomefromCropsRabiRows.irrigatedNetIncomeRabi= item.irrigatedNetIncomeRabi
        this.incomefromCropsRabiRowsData.splice(index, 1);
      } catch (error) {
        console.error("error in selectIncomeRabiItem function",error)
      }
    },
    removeRowIncomeRabi(index) {
      this.incomefromCropsRabiRowsData.splice(index, 1);
    },
    selectLivestockDetailsItem(item,index){
      try {
        this.addLivestockDetails.addLivestockDetails=item.addLivestockDetails
        this.addLivestockDetails.nameOfTheAnimal=item.nameOfTheAnimal
        this.addLivestockDetails.existingNo=item.existingNo  
        this.addLivestockDetails.milkProductionLitresPerDay=item.milkProductionLitresPerDay  
        this.addLivestockDetails.milkConsumedLitresPerday=item.milkConsumedLitresPerday  
        this.addLivestockDetails.quantitySoldByYear=item.quantitySoldByYear
        this.addLivestockDetails.unitValue=item.unitValue
        this.addLivestockDetails.incomeGeneratedDuringLastYear=item.incomeGeneratedDuringLastYear
        this.livestockRows.splice(index, 1);
      } catch (error) {
        console.error("error in selectLivestockDetailsItem fucntion",error)
      }
    },
    removeLivestockRows(index) {
      this.livestockRows.splice(index, 1);
    },
    selectMigrationstatus(item,index){
      try {
        this.migrationStatusRows.nameOfThePerson=item.nameOfThePerson
        this.migrationStatusRows.gender=item.gender
        this.migrationStatusRows.noOfDaysMigratingPerYear=item.noOfDaysMigratingPerYear
        this.migrationStatusRows.reasonsForMigrating=item.reasonsForMigrating
        this.migrationStatusRows.placeOfMigration=item.placeOfMigration
        this.migrationStatusRows.occupationDuringMigration=item.occupationDuringMigration
        this.migrationStatusRows.incomeFromOccupation=item.incomeFromOccupation
        this.migrationStatusRowsData.splice(index, 1);
      } catch (error) {
        console.error("error in removeLivestockRows function",error)
      }
    },
    removeMigrationStatusRows(index) {
      this.migrationStatusRowsData.splice(index, 1);
    },
    selectLandLessLabourers(item,index){
      try {
        this.landLessLabourers.nameOfTheProject=item.nameOfTheProject
        this.landLessLabourers.manDays=item.manDays
        this.landLessLabourers.wageDays=item.wageDays
        this.landLessLabourers.income=item.income
        this.landLessLabourers.total=item.total
        this.landLessData.splice(index, 1);
      } catch (error) {
        console.error("error in selectLandLessLabourers fucntion",error)
      }
    },
    removeLandlessLabourers(index){
      this.landLessData.splice(index, 1);
    },
    selectGovernmentSchemesItem(item,index){
      try {
        this.governmentSchemesRows.nameOfTheFamilyMember=item.nameOfTheFamilyMember
        this.governmentSchemesRows.schemeName=item.schemeName
        this.governmentSchemesRows.amount=item.amount
        this.governmentSchemesRowsData.splice(index, 1);
      } catch (error) {
        console.error("error in selectGovernmentSchemesItem function",error)
      }
    },
    removeGovernmentSchemesRows(index){
      this.governmentSchemesRowsData.splice(index, 1);
    },
    selectManureandChemicalItem(item,index){
      try { 
        this.useofChemicalManureRows.crops=item.crops
        this.useofChemicalManureRows.organic=item.organic
        this.useofChemicalManureRows.microNutrients=item.microNutrients
        this.useofChemicalManureRows.N=item.N
        this.useofChemicalManureRows.P=item.P
        this.useofChemicalManureRows.K=item.K
        this.useofChemicalManureRows.cost=item.cost
        this.chemicalManureRowsData.splice(index, 1);
      } catch (error) {
        console.error("error in selectManureandChemicalItem fucntion",error)
      }
    },
    removeManureandChemicalRows(index){
      this.chemicalManureRowsData.splice(index, 1);
    },
    selectPestDiseaseItem(item,index){
      try {
        this.pestandDiseaseRows.crops=item.crops
        this.pestandDiseaseRows.nameOfThePest=item.nameOfThePest
        this.pestandDiseaseRows.biological=item.biological
        this.pestandDiseaseRows.chemical=item.chemical
        this.pestandDiseaseRows.others=item.others
        this.pestandDiseaseRows.material=item.material
        this.pestandDiseaseRows.wages=item.wages
        this.pestandDiseaseRows.totalMaterial=item.totalMaterial
        this.pestandDiseaseRows.totalWages=item.totalWages
        this.pestandDiseaseRowsData.splice(index, 1);
      } catch (error) {
        console.error("error in selectPestDiseaseItem function",error)
      }
    },
    removePestDiseaseRows(index){
      this.pestandDiseaseRowsData.splice(index, 1);
    },
    selectLoanParticularsItem(item,index){
      try {
        this.loanParticularsRows.particulars=item.particulars
        this.loanParticularsRows.bank=item.bank
        this.loanParticularsRows.moneyLender=item.moneyLender
        this.loanParticularsRows.dealer=item.dealer
        this.loanParticularsRows.fellowfarmer=item.fellowfarmer
        this.loanParticularsRows.shg=item.shg
        this.loanParticularsRows.others=item.others
        this.loanParticularsRows.total=item.total
        this.loanParticularsRows.agriculture=item.agriculture
        this.loanParticularsRows.consumption=item.consumption
        this.loanParticularsRows.education=item.education
        this.loanParticularsRows.marriage=item.marriage
        this.loanParticularsRows.others2=item.others2
        this.loanParticularsRowsData.splice(index, 1);
      } catch (error) {
        console.error("error in selectLoanParticularsItem function",error)
      }
    },
    removeLoanParticularsRows(index){
      this.loanParticularsRowsData.splice(index, 1);
    },
    selectFamilyExpenditureItem(item,index){
      try {
        this.familyExpenditureRows.items=item.items
        this.familyExpenditureRows.total=item.total
        this.familyExpenditureRowsData.splice(index, 1);
      } catch (error) {
        console.error("error in selectFamilyExpenditureItem function",error)
      }
    },
    removeFamilyExpenditureRows(index){
      this.familyExpenditureRowsData.splice(index, 1);
    },
    selectSourceofIncomeItem(index,item){
      try {
        this.sourceofIncomeRows.source=item.source
        this.sourceofIncomeRows.income=item.income
        this.sourceofIncomeRowsData.splice(index, 1);
      } catch (error) {
        console.error("error in selectSourceofIncomeItem function",error)
      }
    },
    removeSourceofIncomeRows(index){
      this.sourceofIncomeRowsData.splice(index, 1);
    },
    selectAvailabilityofDrinkingWaterItem(item,index){
      try {
        this.drinkingWaterAvailabilityRows.drinkingwateritem=item.drinkingwateritem
        this.drinkingWaterAvailabilityRows.drinkingwaterunits=item.drinkingwaterunits
        this.drinkingWaterAvailabilityRows.litresPerDay=item.litresPerDay
        this.drinkingWaterAvailabilityRows.sourceDrinkingWater=item.sourceDrinkingWater
        this.drinkingWaterAvailabilityRowsData.splice(index, 1);
      } catch (error) {
        console.error("error in selectAvailabilityofDrinkingWaterItem function",error)
      }
    },
    removeAvailabilityofDrinkingWaterRows(index){
      this.drinkingWaterAvailabilityRowsData.splice(index, 1);
    },
    selectSourceQualityofWaterItem(){
      try {
        
        this.sourceandQualityofWaterRows.waterSource=item.waterSource
        this.sourceandQualityofWaterRows.driedupWell=item.driedupWell
        this.sourceandQualityofWaterRows.functioningWell=item.functioningWell
        this.sourceandQualityofWaterRows.presentApproximateWaterLevel=item.presentApproximateWaterLevel
        this.sourceandQualityofWaterRows.yieldfromtheBorewell=item.yieldfromtheBorewell
        this.sourceandQualityofWaterRows.kharif=item.kharif
        this.sourceandQualityofWaterRows.rabi=item.rabi
        this.sourceandQualityofWaterRows.summer=item.summer
        this.sourceandQualityofWaterRows.otherCrops=item.otherCrops
        this.sourceandQualityofWaterRows.horticulture=item.horticulture
        this.sourceandQualityofWaterRows.waterquality=item.waterquality
        this.sourceandQualityofWaterRowsData.splice(index, 1);
      } catch (error) {
        console.error("error in selectSourceQualityofWaterItem function",error)
      }
    },
    removeSourceQualityofWaterRows(index){
      this.sourceandQualityofWaterRowsData.splice(index, 1);
    },
    selectAgricultureImplementsItem(item,index){
      try {
        this.agriculturalImplementsRows.selectImplements=item.selectImplements
        this.agriculturalImplementsRows.numberofImplement=item.numberofImplement
        this.agriculturalImplementsRows.ownedHired=item.ownedHired
        this.agriculturalImplementsRowsData.splice(index, 1);
      } catch (error) {
        console.error("error in selectAgricultureImplementsItem function",error)
      }
    },
    removeAgricultureImplementsRows(index){
      this.agriculturalImplementsRowsData.splice(index, 1);
    },
    selectHorticultureDetailsItem(item,index){
      try {
        this.horticultureDetailsRows.details = item.details
        this.horticultureDetailsRows.numberofDetails = item.numberofDetails
        this.horticultureDetailsRowsData.splice(index, 1);
      } catch (error) {
        console.error("error in selectHorticultureDetailsItem function",error)
      }
    },
    removeHorticultureDetailsRows(index){
      this.horticultureDetailsRowsData.splice(index, 1);
    },
    selectFodderandFeedAvailabilityItem(item,index){
      try {
        this.fodderandFeedAvailability.item=item.item
        this.fodderandFeedAvailability.unit=item.unit
        this.fodderandFeedAvailability.area=item.area
        this.fodderandFeedAvailability.production=item.production
        this.fodderandFeedAvailabilityRowsData.splice(index, 1);
      } catch (error) {
        console.error("error in selectHorticultureDetailsItem function",error)
      }
    },
    removeFodderandFeedAvailabilityRows(index){
      this.fodderandFeedAvailabilityRowsData.splice(index, 1);
    },
    selectFodderFuelUseItem(item,index){
      try {
        this.fodderFuelRows.details=item.details
        this.fodderFuelRows.fodderUtilization=item.fodderUtilization
        this.fodderFuelRows.fireFuelCowDung=item.fireFuelCowDung
        this.fodderFuelRows.firewood=item.firewood
        this.fodderFuelRows.agriculturalWaste=item.agriculturalWaste
        this.fodderFuelRowsData.splice(index, 1);
      } catch (error) {
        console.error("error in selectFodderFuelUseItem function",error)
      }
    },
    removeFodderFuelUseRows(index){
      this.fodderFuelRowsData.splice(index, 1);
    },
    selectGrazeofCattleItem(item,index){
      try {
        this.grazeCattleRows.grazingOfCattle=item.grazingOfCattle
        this.grazeCattleRows.numberOfCattle=item.numberOfCattle
        this.grazeCattleRows.daysInAYear=item.daysInAYear
        this.grazeCattleRowsData.splice(index, 1);
      } catch (error) {
        console.error("error in selectGrazeofCattleItem function",error)
      }
    },
    removeGrazeofCattleRows(index){
      this.grazeCattleRowsData.splice(index, 1);
    },
    selectHouseholdAssetsItem(item,index){
      try {
        this.householdRows.assets=item.assets
        this.householdRows.number=item.number
        this.householdRows.presentValue=item.presentValue
        this.householdRowsData.splice(index, 1);
      } catch (error) {
        console.error("error in selectHouseholdAssetsItem function",error)
      }
    },
    removeHouseholdAssetsRows(index){
      this.householdRowsData.splice(index, 1);
    },
    selectParticipationCommunityProgramItem(item,index){
      try {
        this.participationinCommunityProgramsRows.nameofTheCommunityProgram=item.nameofTheCommunityProgram
        this.participationinCommunityProgramsRows.markTheAppropriate=item.markTheAppropriate
        this.participationinCommunityProgramsRows.awarenessprograms=item.awarenessprograms
        this.participationinCommunityProgramsRowsData.splice(index, 1);
      } catch (error) {
        console.error("error in selectParticipationCommunityProgramItem function",error)
      }
    },
    removeParticipationCommunityProgramRows(index){
      this.participationinCommunityProgramsRowsData.splice(index, 1);
    },
    selectAwarenessAdoptionTechnologyItem(item,index){
      try {
        this.awarenessTechnologyRows.technology=item.technology
        this.awarenessTechnologyRows.sourceInformation=item.sourceInformation
        this.awarenessTechnologyRowsData.splice(index, 1);
      } catch (error) {
        console.error("error in selectAwarenessAdoptionTechnologyItem function",error)
      }
    },
    removeAwarenessAdoptionTechnologyRows(index){
      this.awarenessTechnologyRowsData.splice(index, 1);
    },
    selectMembershipDetailsItem(item,index){
      try {
        this.membershipDetailsRows.sgh=item.sgh
        this.membershipDetailsRows.number=item.number
        this.membershipDetailsRowsData.splice(index, 1);      
      } catch (error) {
        console.error("error in selectMembershipDetailsItem function",error)
      }
    },
    removeMembershipDetailsRows(index){
      this.membershipDetailsRowsData.splice(index, 1);
    },
    selectBeneficiaryofSchemeItem(item,index){
      try {
        this.beneficiarySchemeRows.nameofTheScheme=item.nameofTheScheme
        this.beneficiarySchemeRows.detailsoftheBenfits=item.detailsoftheBenfits
        this.beneficiarySchemeRows.valueoftheBenfits=item.valueoftheBenfits
        this.beneficiarySchemeRowsData.splice(index, 1); 
      } catch (error) {
        console.error("error in selectMembershipDetailsItem function",error)
      }
    },
    removeBeneficiaryofSchemeRows(index){
      this.beneficiarySchemeRowsData.splice(index, 1);
    },
    async submitData() {
      try {
        const occupationString = this.occupation.join(",");
        const response = await axios.post(
          `http://183.82.109.39:5000/api/individualinformation`,
          {
            district: this.selectedDistrictName,
            wcc_name: this.wccName,
            name_of_project: this.selectedProjectName,
            name_of_the_micro_watershed: this.selectedMicroWatershed,
            head_of_the_family: this.nameofthehousehold,
            name_of_habitation: this.selectedHabitation,
            mandal: this.selectedMandalName,
            household_door_no: this.householdDoorNo,
            aadhar_number: this.aadharNumber,
            economic_status: this.economicStatus,
            occupation: occupationString,
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
            habitationId: this.selectedHabitation,
            latitude: this.lat,
            longitude: this.long,
          }
        );
        console.log("Response", response);
        const id = response.data.id;
        await this.householdDetailsSubmitData(id);
        await this.landParticularsData(id);
        await this.incomefromKharifData(id);
        await this.incomefromRabiData(id);
        await this.liveStockDetailsData(id);
        await this.migrationStatusData(id);
        await this.landLessDetails(id);
        await this.governmentSchemesData(id);
        await this.manureChemical(id);
        await this.controlMeasuresData(id);
        await this.loanParticularsData(id);
        await this.familyExpenditure(id);
        await this.sourceofIncomeData(id);
        await this.availabilityofDrinkingWaterData(id);
        await this.quantityofWaterData(id);
        await this.agricultureImplementsData(id);
        await this.horticultureDetailsData(id);
        await this.fodderFeedAvailabilityData(id);
        await this.fodderFuelUsageData(id);
        await this.grazeCattleData(id);
        await this.communityProgramsData(id);
        await this.awarenessonTechnologyData(id);
        await this.membershipDetailsData(id);
        await this.beneficiarySchemeData(id);
        await this.soilWaterLandConservationData(id);
        await this.householdAssets(id);
        await this.submitForm();
      } catch (error) {
        console.error("error in submitdata function", error);
      }
    },
    submitForm() {
      this.$router.push({ path: "/survey" }).then(() => {
        this.triggerToast();
        this.$router.go(0);
      });
    },
    async triggerToast() {
      const toast = await toastController.create({
        message: "Insertion of Survey Form is Submitted Successfully",
        duration: 5000,
        position: "top",
      });
      toast.present();
    },
    async householdDetailsSubmitData(id) {
      try {
        const rowsWithCommaSeparatedOccupation =
          this.householdDetailsRowsData.map((row) => ({
            ...row,
            // occupation: row.occupation.join(","),
            occupation: Array.isArray(row.occupation)
              ? row.occupation.join(", ")
              : row.occupation,
          }));
        const data = { id: id, rows: rowsWithCommaSeparatedOccupation };
        const response = await axios.post(
          `http://183.82.109.39:5000/api/bulkinsertionhouseholddetails`,
          data
        );
        console.log("householdDetailsSubmitData", response);
      } catch (error) {
        console.error("error in householdDetailsSubmitData function", error);
      }
    },
    // async householdDetailsSubmitData() {
    //   try {
    //     await axios.post(`http://183.82.109.39:5000/api/householdDetails`, {
    //       name_of_the_family_member: this.newRow.name_of_the_family_member,
    //       relationship_with_head: this.newRow.relationship_with_head,
    //       disability: this.newRow.disability,
    //       gender: this.newRow.gender,
    //       age: this.newRow.age,
    //       level_of_education: this.newRow.level_of_education,
    //       occupation: this.newRow.occupation,
    //       membership: this.newRow.membership,
    //       annual_gross_income: this.newRow.annual_gross_income,
    //     });
    //   } catch (error) {
    //     console.error("error in householddetailssubmitdata function", error);
    //   }
    // },
    async landParticularsData(id) {
      try {
        const data = { id: id, rows: this.cultivatedAreaRowsData };
        const response = await axios.post(
          "http://183.82.109.39:5000/api/bulkinsertionlandparticulars",data);
        console.log("Land Particulars", response);
       
      } catch (error) {
        console.error("error in addLandParticularsRows function", error);
      }
    },
    async incomefromKharifData(id) {
      try {
        const data = { id: id, rows: this.incomefromCropsKharifRowsData };
        const response = await axios.post(
          "http://183.82.109.39:5000/api/bulkinsertionkharif",
          data
        );
        console.log("income kharif data", response);
      } catch (error) {
        console.error("error in incomefromKharifData function", error);
      }
    },
    async incomefromRabiData(id) {
      try {
        const data = { id: id, rows: this.incomefromCropsRabiRowsData };
        const response = await axios.post(
          "http://183.82.109.39:5000/api/bulkinsertionrabi",
          data
        );
        console.log("income rabi", response);
      } catch (error) {
        console.error("error in incomefromRabiData function", error);
      }
    },
    async addLandParticularsRows() {
      try {
        this.cultivatedAreaRowsData.push({ ...this.cultivatedAreaRows });
          this.triggerToastMessage(
            "Insertion of Land Particulars is Submitted Successfully","custom_toast"
          );
        console.log("LAND PARTICULARS DATA", this.cultivatedAreaRowsData);
        this.clearCultivatedRows();
      } catch (error) {
        this.triggerToastMessage("Failed to Insert the Land Particulars","danger");
        console.error("error in addLandParticularsRows function", error);
      }
    },
    clearCultivatedRows() {
      this.cultivatedAreaRows = {
        cultivatedArea: "",
        rainfedArea: "",
        irrigatedArea: "",
        total: "",
        typeofOwnership: "",
      };
    },
    async incomeKharifRows() {
      try {
        this.incomefromCropsKharifRowsData.push({
          ...this.incomefromCropsKharifRows,
        });
        console.log("income crops kharif", this.incomefromCropsKharifRowsData);
        this.triggerToastMessage(
            "Insertion of Income from Crops Kharif is Submitted Successfully","custom_toast"
          );
        this.clearIncomeKharifRows();
      } catch (error) {
        this.triggerToastMessage("Failed to Insert Income from Crops Kharif","danger");
        console.error("error in incomeKharif function", error);
      }
    },
    clearIncomeKharifRows() {
      this.incomefromCropsKharifRows = {
        cropGrownKharif: "",
        rainfedKharif: "",
        rainfedYieldKharif: "",
        rainfedCostKharif: "",
        rainfedPerQtlsKharif: "",
        rainfedGrossIncomeKharif: "",
        rainfedNetIncomeKharif: "",
        irrigatedaAreaKharif: "",
        irrigatedYieldKharif: "",
        irrigatedCoostofCultivationKharif: "",
        irrigatedRatePerQtlsKharif: "",
        irrigatedGrossIncomeKharif: "",
        irrigatedNetIncomeKharif: "",
      };
    },
    async incomeRabiRows() {
      try {
        this.incomefromCropsRabiRowsData.push({
          ...this.incomefromCropsRabiRows,
        });
        console.log("Income rabi rows", this.incomefromCropsRabiRowsData);
        this.triggerToastMessage(
            "Insertion of Income from Crops Rabi is Submitted Successfully","custom_toast"
          );
        this.clearIncomeRabiRows();
      } catch (error) {
        this.triggerToastMessage("Failed to Insert Income from Crops Rabi","danger");
        console.log("error in incomerabi function", error);
      }
    },
    clearIncomeRabiRows() {
      this.incomefromCropsRabiRows = {
        cropGrownRabhi: "",
        rainfedRabi: "",
        rainfedYieldRabi: "",
        rainfedCostRabi: "",
        rainfedPerQtlsRabi: "",
        rainfedGrossIncomeRabi: "",
        rainfedNetIncomeRabi: "",
        irrigatedaAreaRabi: "",
        irrigatedYieldRabi: "",
        irrigatedCoostofCultivationRabi: "",
        irrigatedRatePerQtlsRabi: "",
        irrigatedGrossIncomeRabi: "",
        irrigatedNetIncomeRabi: "",
      };
    },
    async landParticularsRowsSubmit() {
      try {
        await this.addLandParticularsRows(),
          await this.incomeKharifRows(),
          await this.incomeRabiRows();
      } catch (error) {
        console.error("error in landParticularsRowsSubmit function", error);
      }
    },
    // async liveStockDetailsData() {
    //   try {
    //     await axios.post("http://183.82.109.39:5000/api/insertLiveStock", {
    //       // headId: req.body.headId,
    //       existing_no: this.existingNo,
    //       income_generated_during_last_year: this.incomeGeneratedDuringLastYear,
    //       milk_production: this.milkProductionLitresPerDay,
    //       milk_quantity_sold: this.quantitySoldByYear,
    //       mill_consumed: this.milkConsumedLitresPerday,
    //       name_of_the_animal: this.nameOfTheAnimal,
    //       value_of_animals: this.unitValue,
    //     });
    //   } catch (error) {
    //     console.error("error in livestockdetailsdata function", error);
    //   }
    // },
    async liveStockDetailsData(id) {
      try {
        const data = { id: id, rows: this.livestockRows };
        const response = await axios.post(
          "http://183.82.109.39:5000/api/insertBulkLiveStock",
          data
        );
        console.log("livestock details", response);
      } catch (error) {
        console.error("error in livestockdetailsdata function", error);
      }
    },

    // async finalSubmitButton() {
    //   try {
    //     this.landParticularsRowsSubmit(), this.livestockData();
    //   } catch (error) {
    //     console.error("error in finalSubmitButton function", error);
    //   }
    // },

    async migrationStatusData(id) {
      try {
        const data = { id: id, rows: this.migrationStatusRowsData };
        const response = await axios.post(
          "http://183.82.109.39:5000/api/bulkinsertionmigrate",
          data
        );
        console.log("FIFTH PAGE CALLED", response);
      } catch (error) {
        console.error("error in migrationStatusData function", error);
      }
    },
    async migrationStatusAddRows() {
      try {
        this.migrationStatusRowsData.push({ ...this.migrationStatusRows });
      console.log("migration status", this.migrationStatusRowsData);
      this.triggerToastMessage(
            "Insertion of Migration Status Details is Submitted Successfully","custom_toast"
          );
      this.clearMigrationDataRows();
      } catch (error) {
        this.triggerToastMessage("Failed to Insert Migration Status Details","danger");
        console.log("error in migrationStatusAddRows fucntion",error)
      }
      
    },

    async clearMigrationDataRows() {
      this.migrationStatusRows = {
        nameOfThePerson: "",
        gender: "",
        noOfDaysMigratingPerYear: "",
        reasonsForMigrating: "",
        placeOfMigration: "",
        occupationDuringMigration: "",
        incomeFromOccupation: "",
      };
    },
    async landLessDetails(id) {
      try {
        const data = { id: id, rows: this.landLessData };
        await axios.post(
          "http://183.82.109.39:5000/api/bulkinsertionlandless",
          data
        );
      } catch (error) {
        console.error("error in landLessDetails function", error);
      }
    },
    async landLessLabourData() {
      try{
      this.landLessData.push({ ...this.landLessLabourers });
      this.triggerToastMessage(
            "Insertion of Landless Labour Details is Submitted Successfully","custom_toast"
          );
      console.log("land less labours", this.landLessData);
      this.clearLandLessRows();
      }
      catch(error){
        this.triggerToastMessage("Failed to Insert Migration Status Details","danger");
        console.log("error in landLessLabourData function",error)
      }
    },
    clearLandLessRows() {
      this.landLessLabourers = {
        nameOfTheProject: "",
        manDays: "",
        wageDays: "",
        income: "",
        total: "",
      };
    },
    async governmentSchemesData(id) {
      try {
        const data = { id: id, rows: this.governmentSchemesRowsData };
        const response = await axios.post(
          "http://183.82.109.39:5000/api/bulkinsertiongovt",
          data
        );
        console.log("government schemes data", response);
      } catch (error) {
        console.error("error in governmentSchemesData function", error);
      }
    },
    addGovernmentSchemesDataRows() {
      try{
      this.governmentSchemesRowsData.push({ ...this.governmentSchemesRows });
      console.log(
        "%%%%%%%%%%%%%%%DATA%%%%%%%%%%%%%%%%%%",
        this.governmentSchemesRowsData
      );
      this.triggerToastMessage(
            "Insertion of Government Scheme Details is Submitted Successfully","custom_toast"
          );
      }
      catch(error){
        this.triggerToastMessage("Failed to Insert Government Scheme Details","danger");
        console.log("error in triggerToastMessage functionm")
      }

    },
    clearGovernmentSchemesRows() {
      this.governmentSchemesRows = {
        nameOfTheFamilyMember: "",
        schemeName: "",
        amount: "",
      };
    },
    async manureChemical(id) {
      try {
        const data = { id: id, rows: this.chemicalManureRowsData };
        const response = await axios.post(
          "http://183.82.109.39:5000/api/bulkinsertionmanurechemical",
          data
        );
        console.log("manure chemical", response);
      } catch (error) {
        console.error("error in manureChemical function", error);
      }
    },
    addChemicalManureRows() {
      try {
        this.chemicalManureRowsData.push({ ...this.useofChemicalManureRows });
      console.log("chemical manure data", this.chemicalManureRowsData);
        this.triggerToastMessage(
            "Insertion of Manure and Chemical Details is Submitted Successfully","custom_toast"
          );
          this.clearChemicalManureRows();
      } catch (error) {
        this.triggerToastMessage("Failed to Insert Manure and Chemical Details","danger");
        console.log("error in addChemicalManureRows function",error)
      }
      
    },
    clearChemicalManureRows() {
      this.useofChemicalManureRows = {
        crops: "",
        organic: "",
        microNutrients: "",
        N: "",
        P: "",
        K: "",
        cost: "",
      };
    },
    async loanParticularsData(id) {
      try {
        const data = { id: id, rows: this.loanParticularsRowsData };
        const response = await axios.post(
          "http://183.82.109.39:5000/api/bulkinsertionloanparticulars",
          data
        );
        console.log("loan particulars data", response);
      } catch (error) {
        console.error("error in loanParticularsData function", error);
      }
    },
    addLoanParticularsRows() {
      try {
        this.loanParticularsRowsData.push({ ...this.loanParticularsRows });
      console.log("&&&&&&&&&&&DATA&&&&&&&&&&", this.loanParticularsRowsData);
        this.triggerToastMessage(
            "Insertion of Loan Particulars Details is Submitted Successfully","custom_toast"
          );
          this.clearLoanParticularsRows();
      } catch (error) {
        this.triggerToastMessage(
            "Failed to Insert Loan Particulars Details","danger"
          );
        console.log("error in addloanparticularsrows function",error)
      }
      
    },
    clearLoanParticularsRows() {
      this.loanParticularsRows = {
        particulars: "",
        bank: "",
        moneyLender: "",
        dealer: "",
        fellowfarmer: "",
        shg: "",
        others: "",
        total: "",
        agriculture: "",
        consumption: "",
        education: "",
        marriage: "",
        others2: "",
      };
    },
    async controlMeasuresData(id) {
      try {
        const data = { id: id, rows: this.pestandDiseaseRowsData };
        const response = await axios.post(
          "http://183.82.109.39:5000/api/bulkinsertionpest",
          data
        );
        console.log("control measures data", response);
      } catch (error) {
        console.error("error in controlMeasuresData function", error);
      }
    },
    addPestDiseaseRows() {
      try {
        this.pestandDiseaseRowsData.push({ ...this.pestandDiseaseRows });
      console.log("%%%%DATA%%%%%%%%%", this.pestandDiseaseRowsData);
      this.triggerToastMessage(
            "Insertion of Pest Disease Details is Submitted Successfully","custom_toast"
          );
      this.clearPestDisease();
      } catch (error) {
        this.triggerToastMessage(
            "Failed to Insert Pest Disease Details","danger"
          );
        console.error("error in addPestDiseaseRows function",error)
      }
     
     
    },
    clearPestDisease() {
      this.pestandDiseaseRows = {
        crops: "",
        nameOfThePest: "",
        biological: "",
        chemical: "",
        others: "",
        material: "",
        wages: "",
        totalMaterial: "",
        totalWages: "",
      };
    },
    async familyExpenditure(id) {
      try {
        const data = { id: id, rows: this.familyExpenditureRowsData };
        const response = await axios.post(
          "http://183.82.109.39:5000/api/bulkinsertionfamily",
          data
        );
        console.log("family expenditure", response);
      } catch (error) {
        console.error("error in familyExpenditure function", error);
      }
    },
    addFamilyExpenditureRows() {
      try {
        this.familyExpenditureRowsData.push({ ...this.familyExpenditureRows });
      console.log(
        "%%%%%%%%%%%DATA%%%%%%%%%%%%%%",
        this.familyExpenditureRowsData
      );
      this.triggerToastMessage(
            "Insertion of Family Expenditure Details is Submitted Successfully","custom_toast"
          );

      this.clearFamilyExpenditureRows();
      } catch (error) {
        this.triggerToastMessage(
            "Failed to Insert Family Expenditure Details","danger"
          );
        console.error("error in addFamilyExpenditureRows function",error)
      }
    },
    clearFamilyExpenditureRows() {
      this.familyExpenditureRows = {
        items: "",
        total: "",
      };
    },
    async sourceofIncomeData(id) {
      try {
        const data = { id: id, rows: this.sourceofIncomeRowsData };
        const response = await axios.post(
          "http://183.82.109.39:5000/api/sourceofincome",
          data
          // {
          //   headId: req.body.headId,
          //   source:this.source,
          //   income_during_the_year:this.income
          // }
        );
        console.log("source of income data", response);
      } catch (error) {
        console.error("error in sourceofIncomeData fucntion", error);
      }
    },
    addSourceofIncomeRows() {
      try {
        this.sourceofIncomeRowsData.push({ ...this.sourceofIncomeRows });
      console.log(
        "^^^^^^^^^^^^^DATA^^^^^^^^^^^^^^^",
        this.sourceofIncomeRowsData
      );
      this.triggerToastMessage(
            "Insertion of Source of Income Details is Submitted Successfully","custom_toast"
          );
          this.clearSourceofIncomeRows();
      } catch (error) {
        this.triggerToastMessage(
            "Failed to Insert Source of Income Details","danger"
          );
        console.error("error in addSourceofIncomeRows function",error)
      }
     
    },
    clearSourceofIncomeRows() {
      this.sourceofIncomeRows = {
        source: "",
        income: "",
      };
    },
    async availabilityofDrinkingWaterData(id) {
      try {
        const data = { id: id, rows: this.drinkingWaterAvailabilityRowsData };
        const response = await axios.post(
          "http://183.82.109.39:5000/api/bulkinsertiondrinkingwater",
          data
        );
        console.log("availability of drinking water", response);
      } catch (error) {
        console.error(
          "error in availabilityofDrinkingWaterData function",
          error
        );
      }
    },
    addDrinkingWaterAvailabilityRows() {
      try {
        this.drinkingWaterAvailabilityRowsData.push({
        ...this.drinkingWaterAvailabilityRows,
      });
      console.log(
        "^^^^^^^^^^^^^DATA&&&&&&&&&&&&&&&",
        this.drinkingWaterAvailabilityRowsData
      );
      this.triggerToastMessage(
            "Insertion of Drinking Water Availability Details is Submitted Successfully","custom_toast"
          );

      this.clearDrinkingWaterRows();
      } catch (error) {
        this.triggerToastMessage(
            "Failed to Insert Drinking Water Availability Details","danger"
          );
        console.error("error in addDrinkingWaterAvailabilityRows function",error)
      }
     
    },
    clearDrinkingWaterRows() {
      this.drinkingWaterAvailabilityRows = {
        drinkingwateritem: "",
        drinkingwaterunits: "",
        litresPerDay: "",
        sourceDrinkingWater: "",
      };
    },
    async quantityofWaterData(id) {
      try {
        const data = { id: id, rows: this.sourceandQualityofWaterRowsData };
        await axios.post(
          "http://183.82.109.39:5000/api/bulkinsertionwater",
          data
        );
      } catch (error) {
        console.error("error in quantityofWaterData function", error);
      }
    },
    addSourceandQualityWaterRows() {
      try {
        this.sourceandQualityofWaterRowsData.push({
        ...this.sourceandQualityofWaterRows,
      });
      console.log(
        "^^^^^^^DATA^^^^^^^^^^",
        this.sourceandQualityofWaterRowsData
      );
      this.triggerToastMessage(
            "Insertion of Source and Quality Water Details is Submitted Successfully","custom_toast"
          );
          this.clearSourceandQualityofWaterRows();
      } catch (error) {
        this.triggerToastMessage(
            "Failed to Source and Quality Water Availability Details","danger"
          );
        console.error("Error in addSourceandQualityWaterRows function",error)
      }
    },
    clearSourceandQualityofWaterRows() {
      this.sourceandQualityofWaterRows = {
        waterSource: "",
        driedupWell: "",
        functioningWell: "",
        presentApproximateWaterLevel: "",
        yieldfromtheBorewell: "",
        kharif: "",
        rabi: "",
        summer: "",
        otherCrops: "",
        horticulture: "",
        waterquality: "",
      };
    },
    async agricultureImplementsData(id) {
      try {
        const data = { id: id, rows: this.agriculturalImplementsRowsData };
        const response = await axios.post(
          "http://183.82.109.39:5000/api/bulkinsertionagriimplements",
          data
        );
        console.log("agriculture implements", response);
      } catch (error) {
        console.error("error in agricultureImplements function", error);
      }
    },
    addAgriculturalImplementsRows() {
      try {
        this.agriculturalImplementsRowsData.push({
        ...this.agriculturalImplementsRows,
      });
      console.log("%%%%%%%%%DATA%%%%%%%", this.agriculturalImplementsRowsData);
      this.triggerToastMessage(
            "Insertion of Agricultural Implements Details is Submitted Successfully","custom_toast"
          );
      this.clearAgriculturalImplementsRows();
      } catch (error) {
        this.triggerToastMessage(
            "Failed to Agricultural Implements Details","danger"
          );
        console.log("error in addAgriculturalImplementsRows function",error)
      }
     
    },
    clearAgriculturalImplementsRows() {
      this.agriculturalImplementsRows = {
        selectImplements: "",
        numberofImplement: "",
        ownedHired: "",
      };
    },
    async horticultureDetailsData(id) {
      try {
        const data = { id: id, rows: this.horticultureDetailsRowsData };
        const response = await axios.post(
          "http://183.82.109.39:5000/api/bulkinsertionhorticulture",
          data
        );
        console.log("horticulture details data", response);
      } catch (error) {
        console.error("error in horticultureDetailsData function", error);
      }
    },
    addHorticultureRows() {
      try {
        this.horticultureDetailsRowsData.push({
        ...this.horticultureDetailsRows,
      });
      console.log(
        "%%%%%%%%%%%DATA%%%%%%%%%%",
        this.horticultureDetailsRowsData
      );
      this.triggerToastMessage(
            "Insertion of Horticulture Details is Submitted Successfully","custom_toast"
          );
          this.clearHorticultureDetailsRowsData();
      } catch (error) {
        this.triggerToastMessage(
            "Failed to Horticulture Details","danger"
          );
        console.error("Error in addHorticultureRows function",error)
      }
    },
    clearHorticultureDetailsRowsData() {
      this.horticultureDetailsRows = {
        details: "",
        numberofDetails: "",
      };
    },
    async fodderFeedAvailabilityData(id) {
      try {
        const data = { id: id, rows: this.fodderandFeedAvailabilityRowsData };
        const response = await axios.post(
          "http://183.82.109.39:5000/api/bulkinsertionfodder",
          data
        );
        console.log("fodder feed availability", response);
      } catch (error) {
        console.error("error in fodderFeedAvailabilityData function", error);
      }
    },
    addFodderandFeedAvailabilityRows() {
      try {
        this.fodderandFeedAvailabilityRowsData.push({
        ...this.fodderandFeedAvailability,
      });
      console.log(
        "%%%%%%%%%%%%%DATA%%%%%%%%%%%%%",
        this.fodderandFeedAvailabilityRowsData
      );
      this.triggerToastMessage(
            "Insertion of Fodder and Feed Availability Details is Submitted Successfully","custom_toast"
          );
          this.clearFodderFeedRows();
      } catch (error) {
        this.triggerToastMessage(
            "Failed to Fodder and Feed Availability Details","danger"
          );
        console.error("error in addFodderandFeedAvailabilityRows fucntion",error)
      }
    },
    clearFodderFeedRows() {
      this.fodderandFeedAvailability = {
        item: "",
        unit: "",
        area: "",
        production: "",
      };
    },
    async fodderFuelUsageData(id) {
      try {
        const data = { id: id, rows: this.fodderFuelRowsData };
        const response = await axios.post(
          "http://183.82.109.39:5000/api/bulkinsertionfuel",
          data
        );
        console.log("fodder fuel usage data", response);
      } catch (error) {
        console.error("error in fodderFuelUsageData function", error);
      }
    },
    addFodderFuelRows() {
      try {
        this.fodderFuelRowsData.push({ ...this.fodderFuelRows });
      console.log(
        "################DATA##############",
        this.fodderFuelRowsData
      );
      this.triggerToastMessage(
            "Insertion of Fodder Fuel Details is Submitted Successfully","custom_toast"
          );
          this.clearFodderFullRows();
      } catch (error) {
        this.triggerToastMessage(
            "Failed to Fodder Fuel Availability Details","danger"
          );
        console.error("error in addFodderFuelRows function",error)
      }
    },
    clearFodderFullRows() {
      this.fodderFuelRows = {
        details: "",
        fodderUtilization: "",
        fireFuelCowDung: "",
        firewood: "",
        agriculturalWaste: "",
      };
    },
    async grazeCattleData(id) {
      try {
        const data = { id: id, rows: this.grazeCattleRowsData };
        const response = await axios.post(
          "http://183.82.109.39:5000/api/bulkinsertiongrazecattle",
          data
        );
        console.log("graze cattle data", response);
      } catch (error) {
        console.error("error in grazecattledata function", error);
      }
    },
    addGrazeCattleRows() {
      try {
        this.grazeCattleRowsData.push({ ...this.grazeCattleRows });
      console.log("%%%%%%%%%DATA%%%%%%%%%%%%%%", this.grazeCattleRowsData);
      this.triggerToastMessage(
            "Insertion of Graze Cattle Details is Submitted Successfully","custom_toast"
          );
 
      this.clearGrazeCattleRows();
      } catch (error) {
        this.triggerToastMessage(
            "Failed to Graze Cattle Details","danger"
          );
        console.error("error in addGrazeCattleRows function",error)
      }
    },
    clearGrazeCattleRows() {
      this.grazeCattleRows = {
        grazingOfCattle: "",
        numberOfCattle: "",
        daysInAYear: "",
      };
    },
    async householdAssets(id) {
      try {
        const data = { id: id, rows: this.householdRowsData };
        const response = await axios.post(
          "http://183.82.109.39:5000/api/bulkinsertionhouseholdassets",
          data
        );
        console.log("household asset", response);
      } catch (error) {
        console.error("error in householdAssets function", error);
      }
    },
    addHouseholdRows() {
      try {
        this.householdRowsData.push({ ...this.householdRows });
      console.log("^^^^^^^^DATA^^^^^^^^^^^^^^", this.householdRowsData);
      this.triggerToastMessage(
            "Insertion of Household Details is Submitted Successfully","custom_toast"
          );
 
      this.clearHouseholdRows();
      } catch (error) {
        this.triggerToastMessage(
            "Failed to Household Details","danger"
          );
        console.error("error in addHouseholdRows function",error)
      }
     
    },
    clearHouseholdRows() {
      this.householdRows = {
        assets: "",
        number: "",
        presentValue: "",
      };
    },
    async communityProgramsData(id) {
      try {
        const data = {
          id: id,
          rows: this.participationinCommunityProgramsRowsData,
        };
        const response = await axios.post(
          "http://183.82.109.39:5000/api/bulkinsertionprogram",
          data
        );
        console.log("community programs data", response);
      } catch (error) {
        console.error("error in communityProgramsData function", error);
      }
    },
    addParticipationRows() {
      try {
        this.participationinCommunityProgramsRowsData.push({
        ...this.participationinCommunityProgramsRows,
      });
      console.log(
        "%%%%%%%%%%%%%%%%DATA%%%%%%%%%%%%%",
        this.participationinCommunityProgramsRowsData
      );
      this.triggerToastMessage(
            "Insertion of Participation Details is Submitted Successfully","custom_toast"
          );

      this.clearParticipationRows();
      } catch (error) {
        this.triggerToastMessage(
            "Failed to Participation Details","danger"
          );
        console.error("error in addParticipationRows function",error)
      }
    },
    clearParticipationRows() {
      this.participationinCommunityProgramsRows = {
        nameofTheCommunityProgram: "",
        markTheAppropriate: "",
        awarenessprograms: "",
      };
    },
    async awarenessonTechnologyData(id) {
      try {
        const data = { id: id, rows: this.awarenessTechnologyRowsData };
        const response = await axios.post(
          "http://183.82.109.39:5000/api/bulkinsertionadoptiontechnology",
          data
        );
        console.log("awareness technology data", response);
      } catch (error) {
        console.error("error in awarenessonTechnologyData function", error);
      }
    },
    addAwarenessTechnologyRows() {
      try {
        this.awarenessTechnologyRowsData.push({
        ...this.awarenessTechnologyRows,
      });
      console.log(
        "%%%%%%%%%%%DATA%%%%%%%%%%%%%",
        this.awarenessTechnologyRowsData
      );
      this.triggerToastMessage(
            "Insertion of Awareness Technology Details is Submitted Successfully","custom_toast"
          );
 
      this.clearAwarenessTechnologyRows();
      } catch (error) {
        this.triggerToastMessage(
            "Failed to Awareness Technology Details","danger"
          );
        console.error("error in addAwarenessTechnologyRows fucntion",error)
      }
    },
    clearAwarenessTechnologyRows() {
      this.awarenessTechnologyRows = {
        technology: "",
        sourceInformation: "",
      };
    },
    async membershipDetailsData(id) {
      try {
        const data = { id: id, rows: this.membershipDetailsRowsData };
        const response = await axios.post(
          "http://183.82.109.39:5000/api/bulkinsertionmembership",
          data
        );
        console.log("membership details data", response);
      } catch (error) {
        console.error("error in membershipDetailsData function", error);
      }
    },
    addMembershipDetailsRows() {
      try {
        this.membershipDetailsRowsData.push({ ...this.membershipDetailsRows });
      console.log(
        "&&&&&&&&&&&&&DATA&&&&&&&&&&&&&&",
        this.membershipDetailsRowsData
      );
      this.triggerToastMessage(
            "Insertion of Membership Details is Submitted Successfully","custom_toast"
          );
 
      this.clearMembershipDetailsRows();
      } catch (error) {
        this.triggerToastMessage(
            "Failed to membership Details","danger"
          );
        console.error("Error in addMembershipDetailsRows fucntion",error)
      }
      
    },
    clearMembershipDetailsRows() {
      this.membershipDetailsRows = {
        sgh: "",
        number: "",
      };
    },
    async beneficiarySchemeData(id) {
      console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
      try {
        const data = { id: id, rows: this.beneficiarySchemeRowsData };
        const response = await axios.post(
          "http://183.82.109.39:5000/api/bulkinsertionpreviousproject",
          data
        );
        console.log("beneficiary scheme data", response);
      } catch (error) {
        console.error("error in beneficiarySchemeData function", error);
      }
    },
    addBeneficiarySchemeRows() {
      try {
        this.beneficiarySchemeRowsData.push({ ...this.beneficiarySchemeRows });
      console.log(
        "$$$$$$$$$$$$$$$$$DATA$$$$$$$$$$$$$$$$",
        this.beneficiarySchemeRowsData
      );
      this.triggerToastMessage(
            "Insertion of Beneficiary Scheme Details is Submitted Successfully","custom_toast"
          );

      this.clearBeneficiarySchemeRows();
      } catch (error) {
        this.triggerToastMessage(
            "Failed to Beneficiary Scheme Details","danger"
          );
        console.error("Error in addBeneficiarySchemeRows function",error)
      } 
    },
    clearBeneficiarySchemeRows() {
      this.beneficiarySchemeRows = {
        nameofTheScheme: "",
        detailsoftheBenfits: "",
        valueoftheBenfits: "",
      };
    },
    async soilWaterLandConservationData(id) {
      try {
        const response = await axios.post(
          "http://183.82.109.39:5000/api/awarewatershed",
          {
            headId: id,
            status: this.awarenessprograms,
          }
        );
        const response1 = await axios.post(
          "http://183.82.109.39:5000/api/bulkinsertiontrainingwatershed",
          {
            headId: id,
            status: this.receivedawarenessprograms,
          }
        );
        const response2 = await axios.post(
          "http://183.82.109.39:5000/api/concludedate",
          {
            headId: id,
            date: this.dateA,
            serveyor_name: this.surveyor,
          }
        );
        console.log(
          "soil water conservation data",
          response,
          response1,
          response2,
          new Date()
        );
      } catch (error) {
        console.log("error in soilwaterlandconservationdata function", error);
      }
    },
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
  display: inline-block;
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
  color: rgb(210, 210, 210);
}

ion-card {
  border-radius: 8px;
  box-shadow: 1px 1px 6px rgb(96, 96, 161);
}

.backButton {
  color: rgb(227, 227, 227);
}

ion-button {
  border-radius: 16px;
}
.custom_toast {
    --background: #df3389; /* Set your desired background color */
    --color: white; /* Set your desired text color */
  }
</style>
