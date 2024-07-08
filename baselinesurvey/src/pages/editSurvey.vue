<template>
  <ion-page>
    <ion-content>
      <!-- Dropdown for step navigation -->
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
            <ion-col>
              <ion-card>
                <ion-card-header color="tertiary">
                  <strong>1 General Information</strong>
                </ion-card-header>
              </ion-card>
              <ion-card>
                <ion-card-content>
                  <ion-row class="ion-padding-top">
                    <ion-text>{{ editedItem.dist_name }}</ion-text>
                    <ion-select
                      aria-label="District"
                      interface="popover"
                      label="Select District"
                      label-placement="floating"
                      placeholder="Select District"
                      fill="outline"
                      v-model="selectedDistrictNo"
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
                    <ion-text>{{ editedItem.wcc_name }}</ion-text>
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
                  <ion-text>{{ editedItem.project_name }}</ion-text>
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
                    <ion-text>{{ editedItem.micro_watershed_name }}</ion-text>
                    <ion-select
                      aria-label="District"
                      interface="popover"
                      label="Name of the Micro Watershed Village"
                      label-placement="floating"
                      placeholder="Name of the Micro Watershed Village"
                      fill="outline"
                      v-model="selectedMicroWatershedNo"
                      @update:modelValue="
                        getHabitation();
                        getGramPanchayat();
                        onMicroWatershed();
                      "
                    >
                      <ion-select-option
                        v-for="items in microwatershed"
                        :key="items.id"
                        :value="items.id"
                        >{{ items.micro_watershed_name }}</ion-select-option
                      >
                    </ion-select>
                  </ion-row>
                  <ion-row>
                    <ion-text>{{ editedItem.habitation_name }}</ion-text>
                    <ion-select
                      class="ion-margin-top"
                      aria-label="Gender"
                      interface="popover"
                      label="Name of Habitation"
                      label-placement="floating"
                      placeholder="Enter name of Habitation"
                      fill="outline"
                      v-model="selectedHabitationNo"
                      @ionChange="handleHabitationOthers"
                    >
                      <ion-select-option
                        v-for="names in habitation"
                        :key="names.id"
                        :value="names.id"
                        >{{ names.habitation_name }}</ion-select-option
                      >
                      <ion-select-option value="others"
                        >Others</ion-select-option
                      >
                    </ion-select>
                  </ion-row>
                  <ion-row v-if="showInputField">
                    <ion-input
                      class="ion-margin-top"
                      label="Enter Habitation"
                      interface="popover"
                      label-placement="floating"
                      fill="outline"
                      placeholder="Name of the Household"
                      v-model="editedItem.habitation_name"
                    ></ion-input>
                  </ion-row>
                  <ion-row class="ion-padding-top">
                    <ion-text>{{ editedItem.mandal_name }}</ion-text>
                    <ion-select
                      aria-label="District"
                      interface="popover"
                      label="Select Mandal"
                      label-placement="floating"
                      placeholder="Select Mandal"
                      fill="outline"
                      v-model="selectedMandalNo"
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
                    <ion-text>{{ editedItem.grampanchayat_name }}</ion-text>
                    <ion-select
                      aria-label="District"
                      interface="popover"
                      label="Name of the Gram Panchayat"
                      label-placement="floating"
                      placeholder="Name of the Gram Panchayat"
                      fill="outline"
                      v-model="selectedGrampanchayatNo"
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
            </ion-col>
            <ion-card>
              <ion-card-header color="tertiary"
                ><strong>1.1 Individual Information</strong></ion-card-header
              >
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
                  v-model="editedItem.head_of_the_family"
                  @input="stringValidation"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  label="Household No./Door No"
                  label-placement="floating"
                  fill="outline"
                  interface="popover"
                  placeholder="Household No./Door No"
                  v-model="editedItem.household_door_no"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  label="Contact No (Mobile)"
                  label-placement="floating"
                  fill="outline"
                  placeholder="Contact No (Mobile)"
                  v-model="editedItem.contact_number"
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
                  type="number"
                  class="ion-margin-top"
                  label="Aadhaar Card No"
                  label-placement="floating"
                  fill="outline"
                  placeholder="Enter Aadhaar Card No"
                  v-model="editedItem.aadhar_number"
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
                  v-model="editedItem.job_card_no"
                ></ion-input>

                <ion-card-subtitle
                  color="tertiary"
                  class="ion-padding ion-text-center"
                  >Economic Status</ion-card-subtitle
                >
                <ion-radio-group
                  value="PoP"
                  v-model="editedItem.economic_status"
                >
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

                <!-- <label for="ds">Data Structures</label><br />
                  <input
                    v-model="editedItem.occupation"
                    type="checkbox"
                    value="Algorithms"
                    name="al"
                  />
                  <label for="al">Algorithms</label><br />
                  <input
                    v-model="editedItem.occupation"
                    type="checkbox"
                    value="Machine Learning"
                    name="ml"
                  />
                  <label for="ml">Machine Learning</label> -->
                <ion-card-subtitle
                  color="tertiary"
                  class="ion-padding ion-text-center"
                  >Occupation</ion-card-subtitle
                >
                <ion-item>
                  <ion-label>Agriculture</ion-label>
                  <input
                    v-model="editedItem.occupation"
                    type="checkbox"
                    :value="'Agricultur'"
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
                    v-model="editedItem.occupation"
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
                    v-model="editedItem.occupation"
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
                    v-model="editedItem.occupation"
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
                    v-model="editedItem.occupation"
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
                    v-model="editedItem.occupation"
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
                    v-model="editedItem.occupation"
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
                <ion-row>
                  <ion-radio-group
                    value="Ridge"
                    class="ion-padding"
                    v-model="editedItem.location"
                  >
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

                <ion-card-subtitle
                  color="tertiary"
                  class="ion-padding ion-text-center"
                  >Social Status</ion-card-subtitle
                >
                <ion-row>
                  <ion-radio-group
                    value="SC"
                    class="ion-padding"
                    v-model="editedItem.socialstatus"
                  >
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
                        v-model="total_rainfed_area"
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
                        v-model="total_irrigated_area"
                      ></ion-input>
                    </ion-col>
                  </ion-row>
                </ion-row>
                <ion-row>
                  <ion-input
                    class="ion-margin"
                    label="Total"
                    label-placement="floating"
                    fill="outline"
                    placeholder="Total"
                    v-model="editedItem.total_holding_area"
                    readonly="readonly"
                  ></ion-input>
                </ion-row>
                <ion-card-subtitle
                  color="tertiary"
                  class="ion-padding ion-text-center"
                  >Type of House</ion-card-subtitle
                >
                <ion-row>
                  <ion-radio-group
                    class="ion-padding"
                    v-model="editedItem.type_of_house"
                  >
                    <ion-col>
                      <ion-radio
                        value="PuccaHouse"
                        label-placement="start"
                        @change="updateSubType"
                        >Pucca House</ion-radio
                      >
                    </ion-col>
                    <ion-col>
                      <ion-radio
                        value="SemiPucca"
                        label-placement="start"
                        @change="updateSubType"
                        >Semi Pucca</ion-radio
                      >
                    </ion-col>
                  </ion-radio-group>
                  <div v-if="editedItem.type_of_house">
                    <ion-card-subtitle
                      color="tertiary"
                      class="ion-padding ion-text-center"
                      >Own/Rented</ion-card-subtitle
                    >
                    <ion-radio-group
                      class="ion-padding"
                      v-model="editedItem.own_or_rented"
                    >
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
                  </div>
                </ion-row>
              </ion-card-content>
              <ion-button
                class="ion-margin"
                expand="full"
                color="primary"
                @click="updateHouseIndividualInfo()"
                ><ion-icon
                  class="ion-margin-end"
                  name="add-circle"
                  slot="icon-only"
                ></ion-icon
                >Update Individual Information</ion-button
              >
            </ion-card>
          </div>

          <div v-if="step === 2">
            <ion-col>
              <ion-card>
                <ion-card-header color="tertiary"
                  ><strong>2.Household Details</strong></ion-card-header
                >
              </ion-card>
              <ion-card>
                <ion-card-content>
                  <ion-list>
                    <ion-item
                      v-for="item in houseHoldEditItem"
                      :key="item.id"
                      @click="selectItem(item)"
                    >
                      {{ item.name_of_the_family_member }}
                      {{ item.relationship_with_head }}
                      {{ item.gender }}
                    </ion-item>
                  </ion-list>
                  <ion-input
                    class="ion-margin-top"
                    label="Name of Family Member"
                    label-placement="floating"
                    fill="outline"
                    @input="stringValidation"
                    placeholder="Name of Family Member"
                    v-model="newRow.name_of_the_family_member"
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
                    <ion-select-option value="Husband"
                      >Husband</ion-select-option
                    >
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
                    <ion-select-option value="Brother"
                      >Brother</ion-select-option
                    >
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
                    <ion-select-option value="Cousins"
                      >Cousins</ion-select-option
                    >
                    <ion-select-option value="Uncle">Uncle</ion-select-option>
                  </ion-select>
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
                    <ion-select-option value="Male">Yes</ion-select-option>
                    <ion-select-option value="Female">No</ion-select-option>
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
                    <ion-select-option value="Male">Male</ion-select-option>
                    <ion-select-option value="Female">Female</ion-select-option>
                    <ion-select-option value="Others">Others</ion-select-option>
                  </ion-select>
                  <ion-input
                    class="ion-margin-top"
                    label="Age"
                    type="number"
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
                    <ion-select-option value=""
                      >Select Education</ion-select-option
                    >
                    <ion-select-option value="Illiterate"
                      >Illiterate</ion-select-option
                    >
                    <ion-select-option value="Primary"
                      >Primary</ion-select-option
                    >
                    <ion-select-option value="Upper Primary"
                      >Upper Primary</ion-select-option
                    >
                    <ion-select-option value="High School"
                      >High School</ion-select-option
                    >
                    <ion-select-option value="Inter/Diploma"
                      >Inter/Diploma</ion-select-option
                    >
                    <ion-select-option value="Degree">Degree</ion-select-option>
                    <ion-select-option value="PG">PG</ion-select-option>
                    <ion-select-option value="Others">Others</ion-select-option>
                  </ion-select>
                  <ion-select
                    class="ion-margin-top"
                    aria-label="Occupation"
                    interface="popover"
                    label="Occupation"
                    label-placement="floating"
                    placeholder="Select Occupation"
                    fill="outline"
                    v-model="newRow.occupation"
                    :multiple="true"
                  >
                    <ion-select-option value=""
                      >Select Occupation</ion-select-option
                    >
                    <ion-select-option value="Agriculture"
                      >Agriculture</ion-select-option
                    >
                    <ion-select-option value="Livestock rearing"
                      >Livestock rearing</ion-select-option
                    >
                    <ion-select-option value="Micro Enterprise"
                      >Micro Enterprise</ion-select-option
                    >
                    <ion-select-option value="Agri-Labour"
                      >Agri-Labour</ion-select-option
                    >
                    <ion-select-option value="Non-Ag labour"
                      >Non-Ag labour</ion-select-option
                    >
                    <ion-select-option value="Employee"
                      >Employee</ion-select-option
                    >
                    <ion-select-option value="Rural Artician"
                      >Rural Artician</ion-select-option
                    >
                    <ion-select-option value="Student"
                      >Student</ion-select-option
                    >
                    <ion-select-option value="Others">Others</ion-select-option>
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
                    <ion-select-option value="SHG">SHG</ion-select-option>
                    <ion-select-option value="UG">UG</ion-select-option>
                    <ion-select-option value="WC">WC</ion-select-option>
                    <ion-select-option value="others">Others</ion-select-option>
                  </ion-select>
                  <ion-input
                    class="ion-margin-top"
                    label="Annual Gross Income"
                    label-placement="floating"
                    type="number"
                    fill="outline"
                    placeholder="Annual Gross Income"
                    v-model="newRow.annual_gross_income"
                  ></ion-input>
                </ion-card-content>
                <ion-button
                  class="ion-margin"
                  expand="full"
                  color="primary"
                  @click="UpdateHouseHoldMemberData()"
                  ><ion-icon
                    class="ion-margin-end"
                    name="add-circle"
                    slot="icon-only"
                  ></ion-icon
                  >Update Family Member Details</ion-button
                >
              </ion-card>
            </ion-col>
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
                  ><strong>3.1 Land Particulars</strong></ion-card-header
                >
              </ion-card>
              <ion-card>
                <ion-card-content>
                  <ion-list>
                    <ion-item
                      v-for="item in landparticular"
                      :key="item.id"
                      @click="selectLandParticular(item)"
                    >
                      {{ item.cultivated_area }}
                      {{ item.rainfed }}
                      {{ item.irrigated }}
                      {{ item.total }}
                      {{ item.Type_of_ownership }}
                    </ion-item>
                  </ion-list>
                  <ion-select
                    aria-label="Type of Ownership"
                    interface="popover"
                    label="Cultivated Area"
                    label-placement="floating"
                    placeholder="Cultivated Area"
                    fill="outline"
                    v-model="newRowLandParticular.cultivated_area"
                  >
                    <ion-select-option value="Owned Land"
                      >Owned Land</ion-select-option
                    >
                    <ion-select-option value="Leased –in"
                      >Leased-In</ion-select-option
                    >
                    <ion-select-option value="Leased – out"
                      >Leased-Out</ion-select-option
                    >
                  </ion-select>
                  <ion-input
                    class="ion-margin-top"
                    placeholder="Rainfed(Acres)"
                    fill="outline"
                    label="Rainfed(Acres)"
                    label-placement="floating"
                    v-model="newRowLandParticular.rainfed"
                  ></ion-input>
                  <ion-input
                    class="ion-margin-top"
                    placeholder="Irrigated(Acres)"
                    fill="outline"
                    label="Irrigated(Acres)"
                    label-placement="floating"
                    v-model="newRowLandParticular.irrigated"
                  ></ion-input>
                  <ion-input
                    class="ion-margin-top"
                    placeholder="Total"
                    label="Total"
                    fill="outline"
                    label-placement="floating"
                    v-model="newRowLandParticular.total"
                    readonly="readonly"
                  ></ion-input>
                  <ion-select
                    class="ion-margin-top"
                    aria-label="Type of Ownership"
                    interface="popover"
                    label="Type of Ownership"
                    label-placement="floating"
                    placeholder="Type of Ownership"
                    fill="outline"
                    v-model="newRowLandParticular.Type_of_ownership"
                  >
                    <ion-select-option value="Patta">Patta</ion-select-option>
                    <ion-select-option value="Assigned"
                      >Assigned</ion-select-option
                    >
                    <ion-select-option value="Possession Land"
                      >Possession Land</ion-select-option
                    >
                  </ion-select>
                  <ul class="styled-list">
                    <li v-for="(row, index) in landParticularRows" :key="index">
                      <span class="row-details">
                        {{ row.cultivated_area }}, {{ row.rainfed }},
                        {{ row.irrigated }}, {{ row.total }}, {{ row.age }},
                        {{ row.Type_of_ownership }}
                      </span>
                      <ion-button
                        expand="block"
                        class="remove-button"
                        color="danger"
                        @click="removeLandParticularRow(index)"
                        fill="clear"
                      >
                        <ion-icon name="close-circle-outline"></ion-icon>
                      </ion-button>
                    </li>
                  </ul>
                </ion-card-content>
                <ion-button
                  class="ion-margin"
                  expand="full"
                  color="primary"
                  @click="UpdateLandParticularsData()"
                  ><ion-icon
                    class="ion-margin-end"
                    name="add-circle"
                    slot="icon-only"
                  ></ion-icon
                  >Update Land Particulars</ion-button
                >
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
                  <ion-list>
                    <ion-item
                      v-for="item in incomeFromKharif"
                      :key="item.id"
                      @click="selectIncomeKharif(item)"
                    >
                      {{ item.crop_grown }}
                      {{ item.rainfed_area }}
                      {{ item.rainfed_yield }}
                      {{ item.rainfed_cost_of_cultivation }}
                    </ion-item>
                  </ion-list>
                  <ion-select
                    aria-label="Crop Grown"
                    interface="popover"
                    label="Crop Grown"
                    label-placement="floating"
                    placeholder="Select Crop Item"
                    fill="outline"
                    class="ion-margin-top"
                    v-model="newRowIncomeKharif.crop_grown"
                  >
                    <ion-select-option value="">Select Crop</ion-select-option>
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
                  <ion-card-subtitle
                    class="ion-padding ion-text-center"
                    color="tertiary"
                    >Rainfed(Acres)
                  </ion-card-subtitle>
                  <ion-input
                    class="ion-margin-top"
                    placeholder="Rainfed(Acres)"
                    fill="outline"
                    type="number"
                    label="Rainfed(Acres)"
                    label-placement="floating"
                    v-model="newRowIncomeKharif.rainfed_area"
                  ></ion-input>
                  <ion-input
                    class="ion-margin-top"
                    placeholder="Rainfed Yield(Qtls)"
                    label="Rainfed Yield(Qtls)"
                    type="number"
                    fill="outline"
                    label-placement="floating"
                    v-model="newRowIncomeKharif.rainfed_yield"
                  ></ion-input>
                  <ion-input
                    class="ion-margin-top"
                    placeholder="Enter Rainfed(Acres) Cost of Cultivation(Rs)"
                    fill="outline"
                    type="number"
                    label="Rainfed(Acres) Cost of Cultivation(Rs)"
                    label-placement="floating"
                    v-model="newRowIncomeKharif.rainfed_cost_of_cultivation"
                  ></ion-input>
                  <ion-input
                    class="ion-margin-top"
                    placeholder="Enter Rainfed(Acres) Rate per Qtls(Rs)"
                    fill="outline"
                    type="number"
                    label="Rainfed(Acres) Rate per Qtls(Rs)"
                    label-placement="floating"
                    v-model="newRowIncomeKharif.rainfed_rate_per_qtls"
                  ></ion-input>
                  <ion-input
                    class="ion-margin-top"
                    placeholder="Total Rainfed Gross income"
                    fill="outline"
                    label="Rainfed(Acres) Gross Income"
                    label-placement="floating"
                    readonly="readonly"
                    v-model="newRowIncomeKharif.rainfed_gross_income"
                  ></ion-input>
                  <ion-input
                    class="ion-margin-top"
                    placeholder="Total Rainfed Net income"
                    fill="outline"
                    label="Rainfed(Acres) Net Income(7-5)"
                    readonly="readonly"
                    label-placement="floating"
                    v-model="newRowIncomeKharif.rainfed_net_income"
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
                    type="number"
                    label-placement="floating"
                    v-model="newRowIncomeKharif.irrigated_area"
                  ></ion-input>
                  <ion-input
                    class="ion-margin-top"
                    placeholder="Irigated Yield(Qtls)"
                    label="Irrigated Yield(Qtls)"
                    type="number"
                    fill="outline"
                    label-placement="floating"
                    v-model="newRowIncomeKharif.irrigated_yield"
                  ></ion-input>
                  <ion-input
                    class="ion-margin-top"
                    placeholder="Irrigated(Acres) Cost of Cultiation(Rs)"
                    label="Irrigated(Acres) Cost of Cultiation(Rs)"
                    fill="outline"
                    type="number"
                    label-placement="floating"
                    v-model="newRowIncomeKharif.irrigated_cost_of_cultivation"
                  ></ion-input>
                  <ion-input
                    class="ion-margin-top"
                    placeholder="Irrigated(Acres) Rate per Qtls(Rs)"
                    fill="outline"
                    type="number"
                    label="Irrigated(Acres) Rate per Qtls(Rs) "
                    label-placement="floating"
                    v-model="newRowIncomeKharif.irrigated_rate_per_qtls"
                  ></ion-input>
                  <ion-input
                    class="ion-margin-top"
                    placeholder="Irrigated(Acres) Gross Income"
                    fill="outline"
                    type="number"
                    label="Total Irrigated(Acres) Gross Income"
                    label-placement="floating"
                    v-model="newRowIncomeKharif.irrigated_gross_income"
                  ></ion-input>
                  <ion-input
                    class="ion-margin-top"
                    placeholder="Total Irrigated Net Income(13-11)"
                    fill="outline"
                    label="Total Irrigated Net Income(13-11)"
                    readonly="readonly"
                    label-placement="floating"
                    v-model="newRowIncomeKharif.irrigated_net_income"
                  ></ion-input>
                  <ion-input
                    class="ion-margin-top"
                    placeholder="Kharif Grand Total Income"
                    label="Kharif Grand Total Income"
                    readonly="readonly"
                    fill="outline"
                    label-placement="floating"
                  ></ion-input>
                  <!-- <ion-button
                    class="ion-margin-top"
                    expand="full"
                    @click="addIncomeKharif()"
                    ><ion-icon
                      class="ion-margin-end"
                      name="add-circle"
                      slot="icon-only"
                    ></ion-icon
                    >Add Data</ion-button
                  > -->
                  <ul class="styled-list">
                    <li v-for="(row, index) in incomeKharifRows" :key="index">
                      <span class="row-details">
                        {{ row.crop_grown }}, {{ row.rainfed_area }}
                      </span>
                      <ion-button
                        expand="block"
                        class="remove-button"
                        color="danger"
                        @click="removeincomeKharifRow(index)"
                        fill="clear"
                      >
                        <ion-icon name="close-circle-outline"></ion-icon>
                      </ion-button>
                    </li>
                  </ul>
                </ion-card-content>
                <ion-button
                  class="ion-margin"
                  expand="full"
                  color="primary"
                  @click="UpdateKharifData()"
                  ><ion-icon
                    class="ion-margin-end"
                    name="add-circle"
                    slot="icon-only"
                  ></ion-icon
                  >Update Income From Kharif</ion-button
                >
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
                  <ion-list>
                    <ion-item
                      v-for="item in incomeFromRabhi"
                      :key="item.id"
                      @click="selectIncomeRabhi(item)"
                    >
                      {{ item.crop_grown }}
                      {{ item.rainfed_area }}
                      {{ item.rainfed_yield }}
                      {{ item.rainfed_cost_of_cultivation }}
                    </ion-item>
                  </ion-list>
                  <ion-select
                    aria-label="Crop Grown"
                    interface="popover"
                    label="Crop Grown"
                    label-placement="floating"
                    placeholder="Select Crop Item"
                    fill="outline"
                    class="ion-margin-top"
                    v-model="newRowIncomeRabhi.crop_grown"
                  >
                    <ion-select-option value="">Select Crop</ion-select-option>
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
                  <ion-card-subtitle
                    class="ion-padding ion-text-center"
                    color="tertiary"
                    >Rainfed(Acres)
                  </ion-card-subtitle>
                  <ion-input
                    class="ion-margin-top"
                    placeholder="Rainfed(Acres)"
                    fill="outline"
                    label="Rainfed(Acres)"
                    label-placement="floating"
                    v-model="newRowIncomeRabhi.rainfed_area"
                  ></ion-input>
                  <ion-input
                    class="ion-margin-top"
                    placeholder="Rainfed Yield(Qtls)"
                    label="Rainfed Yield(Qtls)"
                    type="number"
                    fill="outline"
                    label-placement="floating"
                    v-model="newRowIncomeRabhi.rainfed_yield"
                  ></ion-input>
                  <ion-input
                    class="ion-margin-top"
                    placeholder="Enter Rainfed(Acres) Cost of Cultivation(Rs)"
                    fill="outline"
                    type="number"
                    label="Rainfed(Acres) Cost of Cultivation(Rs)"
                    label-placement="floating"
                    v-model="newRowIncomeRabhi.rainfed_cost_of_cultivation"
                  ></ion-input>
                  <ion-input
                    class="ion-margin-top"
                    placeholder="Enter Rainfed(Acres) Rate per Qtls(Rs)"
                    fill="outline"
                    type="number"
                    label="Rainfed(Acres) Rate per Qtls(Rs)"
                    label-placement="floating"
                    v-model="newRowIncomeRabhi.rainfed_rate_per_qtls"
                  ></ion-input>
                  <ion-input
                    class="ion-margin-top"
                    placeholder="Total Rainfed Gross income"
                    fill="outline"
                    label="Rainfed(Acres) Gross Income"
                    readonly="readonly"
                    label-placement="floating"
                    v-model="newRowIncomeRabhi.rainfed_gross_income"
                  ></ion-input>
                  <ion-input
                    class="ion-margin-top"
                    placeholder="Total Rainfed Net income"
                    fill="outline"
                    label="Rainfed(Acres) Net Income(7-5)"
                    readonly="readonly"
                    label-placement="floating"
                    v-model="newRowIncomeRabhi.rainfed_net_income"
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
                    type="number"
                    label-placement="floating"
                    v-model="newRowIncomeRabhi.irrigated_area"
                  ></ion-input>
                  <ion-input
                    class="ion-margin-top"
                    placeholder="Irigated Yield(Qtls)"
                    label="Irrigated Yield(Qtls)"
                    type="number"
                    fill="outline"
                    label-placement="floating"
                    v-model="newRowIncomeRabhi.irrigated_yield"
                  ></ion-input>
                  <ion-input
                    class="ion-margin-top"
                    placeholder="Irrigated(Acres) Cost of Cultiation(Rs)"
                    label="Irrigated(Acres) Cost of Cultiation(Rs)"
                    type="number"
                    fill="outline"
                    label-placement="floating"
                    v-model="newRowIncomeRabhi.irrigated_cost_of_cultivation"
                  ></ion-input>
                  <ion-input
                    class="ion-margin-top"
                    placeholder="Irrigated(Acres) Rate per Qtls(Rs)"
                    fill="outline"
                    type="number"
                    label="Irrigated(Acres) Rate per Qtls(Rs) "
                    label-placement="floating"
                    v-model="newRowIncomeRabhi.irrigated_rate_per_qtls"
                  ></ion-input>
                  <ion-input
                    class="ion-margin-top"
                    placeholder="Irrigated(Acres) Gross Income"
                    fill="outline"
                    label="Total Irrigated(Acres) Gross Income"
                    type="number"
                    label-placement="floating"
                    v-model="newRowIncomeRabhi.irrigated_gross_income"
                  ></ion-input>
                  <ion-input
                    class="ion-margin-top"
                    placeholder="Total Irrigated Net Income(13-11)"
                    type="number"
                    fill="outline"
                    label="Total Irrigated Net Income(13-11)"
                    label-placement="floating"
                    v-model="newRowIncomeRabhi.irrigated_net_income"
                  ></ion-input>
                  <ion-input
                    class="ion-margin-top"
                    placeholder="Rabhi Grand Total Income"
                    label="Rabhi Grand Total Income"
                    readonly="readonly"
                    fill="outline"
                    label-placement="floating"
                  ></ion-input>
                  <ul class="styled-list">
                    <li v-for="(row, index) in incomeRabhiRows" :key="index">
                      <span class="row-details">
                        {{ row.crop_grown }}, {{ row.rainfed_area }}
                      </span>
                      <ion-button
                        expand="block"
                        class="remove-button"
                        color="danger"
                        @click="removeincomeRabhiRow(index)"
                        fill="clear"
                      >
                        <ion-icon name="close-circle-outline"></ion-icon>
                      </ion-button>
                    </li>
                  </ul>
                </ion-card-content>
                <ion-button
                  class="ion-margin"
                  expand="full"
                  color="primary"
                  @click="UpdateRabhiData()"
                  ><ion-icon
                    class="ion-margin-end"
                    name="add-circle"
                    slot="icon-only"
                  ></ion-icon
                  >Update Income From Rabhi</ion-button
                >
              </ion-card>
            </ion-col>
          </div>
          <div v-if="step === 4">
            <ion-card>
              <ion-card-header color="tertiary"
                ><strong>4.Livestock Details</strong></ion-card-header
              >
            </ion-card>
            <ion-card>
              <ion-card-content>
                <ion-list>
                  <ion-item
                    v-for="item in livestock"
                    :key="item.id"
                    @click="selectLiveStock(item)"
                  >
                    {{ item.name_of_the_animal }}
                    {{ item.existing_no }}
                    {{ item.milk_production }}
                    {{ item.mill_consumed }}
                  </ion-item>
                </ion-list>
                <ion-select
                  aria-label="Crop Grown"
                  interface="popover"
                  label-placement="floating"
                  label="Name of the Animal"
                  placeholder="Select Name of the Animal"
                  fill="outline"
                  class="ion-margin-top"
                  v-model="newRowlivestock.name_of_the_animal"
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
                  type="number"
                  label-placement="floating"
                  v-model="newRowlivestock.existing_no"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter litres/day"
                  fill="outline"
                  type="number"
                  label="Milk Production(Ltrs/Day) if applicable"
                  label-placement="floating"
                  v-model="newRowlivestock.milk_production"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter litres/day"
                  fill="outline"
                  type="number"
                  label="Milk Consumed(Ltrs/Day)"
                  label-placement="floating"
                  v-model="newRowlivestock.mill_consumed"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter quantity sold by year"
                  fill="outline"
                  type="number"
                  label="Quantity Sold by Year"
                  label-placement="floating"
                  v-model="newRowlivestock.milk_quantity_sold"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter Unit Value"
                  fill="outline"
                  type="number"
                  label="Unit Value(Rs)"
                  label-placement="floating"
                  v-model="newRowlivestock.value_of_animals"
                ></ion-input>
                <ion-input
                  class="ion-margin-top"
                  placeholder="Enter income generated during last year"
                  fill="outline"
                  type="number"
                  label="Income Generated during Last Year"
                  label-placement="floating"
                  v-model="newRowlivestock.income_generated_during_last_year"
                ></ion-input>
              </ion-card-content>
              <ion-button
                class="ion-margin"
                color="primary"
                expand="block"
                @click="UpdateLiveStockData()"
                ><ion-icon
                  class="ion-margin-end"
                  name="add-circle"
                  slot="icon-only"
                ></ion-icon
                >Update Livestock Data</ion-button
              >
            </ion-card>
          </div>
          <div v-if="step === 5">
            <fifthPage :migrations="migrations" :editedItem="editedItem" />
          </div>
          <div v-if="step === 6">
            <SixthPage :landless="landless" :editedItem="editedItem" />
          </div>
          <div v-if="step === 7">
            <SeventhPage :govtbenefit="govtbenefits" :editedItem="editedItem" />
          </div>
          <div v-if="step === 8">
            <Eighthpage
              :manurechemicaldetails="manurechemicaldetails"
              :editedItem="editedItem"
            />
          </div>
          <div v-if="step === 9">
            <NinthPage
              :pestdiseasedetails="pestdiseasedetails"
              :editedItem="editedItem"
            />
          </div>
          <div v-if="step === 10">
            <TenthPage
              :loanparticulardetails="loanparticular"
              :editedItem="editedItem"
            />
          </div>
          <div v-if="step === 11">
            <EleventhPage
              :familyexpenditure="familyexpendituredetails"
              :editedItem="editedItem"
            />
          </div>
          <div v-if="step === 12">
            <TwelvethPage
              :differentsource="differentsourcedetails"
              :editedItem="editedItem"
            />
          </div>
          <div v-if="step === 13">
            <ThirteenthPage
              :availabledrinkingwaterdetails="availabledrinkingwaterdetails"
              :editedItem="editedItem"
            />
          </div>
          <div v-if="step === 14">
            <FourteenthPage
              :sourcequalitywaterdetails="sourcequalitywaterdetails"
              :editedItem="editedItem"
            />
          </div>
          <div v-if="step === 15">
            <FifteenthPage
              :agricultureimplementsdetails="agricultureimplementsdetails"
              :editedItem="editedItem"
            />
          </div>
          <div v-if="step === 16">
            <SixteenthPage
              :horticulturedetails="horticulturedetails"
              :editedItem="editedItem"
            />
          </div>
          <div v-if="step === 17">
            <SeventeenthPage
              :fodderfeeddetails="fodderfeeddetails"
              :editedItem="editedItem"
            />
          </div>
          <div v-if="step === 18">
            <EighteenthPage
              :fodderfueldetails="fodderfueldetails"
              :editedItem="editedItem"
            />
          </div>
          <div v-if="step === 19">
            <NinteenthPage
              :grazecattlecommunitydetails="grazecattlecommunitydetails"
              :editedItem="editedItem"
            />
          </div>
          <div v-if="step === 20">
            <TwentythPage
              :householdassetdetails="householdassetdetails"
              :editedItem="editedItem"
            ></TwentythPage>
          </div>
          <div v-if="step === 21">
            <TwentyfirstPage
              :participationcommunityprogramdetails="
                participationcommunityprogramdetails
              "
              :editedItem="editedItem"
            />
          </div>
          <div v-if="step === 22">
            <TwentysecondPage
              :awarenessadoptiontechnologydetails="
                awarenessadoptiontechnologydetails
              "
              :editedItem="editedItem"
            />
          </div>
          <div v-if="step === 23">
            <TwentythirdPage
              :membershipdetails="membershipdetails"
              :editedItem="editedItem"
            />
          </div>
          <div v-if="step === 24">
            <TwentyfourthPage
              :anyschemepreviousprojectdetails="anyschemepreviousprojectdetails"
              :editedItem="editedItem"
            />
          </div>
          <div v-if="step === 25">
            <TwentyfifthPage
              :awarewatershedstatusdetails="awarewatershedstatusdetails"
              :receivedtrainingwatershedstatusdetails="
                receivedtrainingwatershedstatusdetails
              "
              :dateserveyornamedetails="dateserveyornamedetails"
              :editedItem="editedItem"
            />
          </div>
        </div>
      </div>
    </ion-content>
    <ion-footer>
      <div>
        <ion-button
          class="ion-margin"
          size="small"
          color="primary"
          v-if="currentStep !== 1"
          @click="prevStep()"
          ><ion-icon name="carat-back-outline"></ion-icon>Previous</ion-button
        >
        <ion-button
          color="primary"
          size="small"
          class="nextButton ion-margin"
          v-if="currentStep !== totalSteps"
          @click="nextStep()"
          >Next<ion-icon name="caret-forward-outline"></ion-icon
        ></ion-button>

        <ion-button
          color="primary"
          v-else-if="currentStep === totalSteps"
          class="nextButton ion-margin"
          size="small"
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
  IonFooter,
  IonItem,
  IonCheckbox,
  IonToast,
  toastController,
} from "@ionic/vue";
import fifthPage from "./editpages/fifthPage.vue";
import SixthPage from "./editpages/sixthPage.vue";
import SeventhPage from "./editpages/seventhPage.vue";
import Eighthpage from "./editpages/eighthpage.vue";
import NinthPage from "./editpages/ninthPage.vue";
import TenthPage from "./editpages/tenthPage.vue";
import EleventhPage from "./editpages/eleventhPage.vue";
import TwelvethPage from "./editpages/twelvethPage.vue";
import ThirteenthPage from "./editpages/thirteenthPage.vue";
import FourteenthPage from "./editpages/fourteenthPage.vue";
import FifteenthPage from "./editpages/fifteenthPage.vue";
import SixteenthPage from "./editpages/sixteenthPage.vue";
import SeventeenthPage from "./editpages/seventeenthPage.vue";
import EighteenthPage from "./editpages/eighteenthPage.vue";
import NinteenthPage from "./editpages/ninteenthPage.vue";
import TwentythPage from "./editpages/twentythPage.vue";
import TwentyfirstPage from "./editpages/twentyfirstPage.vue";
import TwentysecondPage from "./editpages/twentysecondPage.vue";
import TwentythirdPage from "./editpages/twentythirdPage.vue";
import TwentyfourthPage from "./editpages/twentyfourthPage.vue";
import TwentyfifthPage from "./editpages/twentyfifthPage.vue";
import axios from "axios";
import { Geolocation } from "@capacitor/geolocation";
export default {
  props: {
    item: Object,
    household: Object,
    landparticular: Object,
    incomeFromKharif: Object,
    incomeFromRabhi: Object,
    livestock: Object,
    migrations: Object,
    landless: Object,
    govtbenefits: Object,
    manurechemicaldetails: Object,
    pestdiseasedetails: Object,
    pestdiseasedetails: Object,
    loanparticular: Object,
    familyexpendituredetails: Object,
    differentsourcedetails: Object,
    availabledrinkingwaterdetails: Object,
    sourcequalitywaterdetails: Object,
    agricultureimplementsdetails: Object,
    horticulturedetails: Object,
    fodderfeeddetails: Object,
    fodderfueldetails: Object,
    grazecattlecommunitydetails: Object,
    householdassetdetails: Object,
    participationcommunityprogramdetails: Object,
    awarenessadoptiontechnologydetails: Object,
    membershipdetails: Object,
    anyschemepreviousprojectdetails: Object,
    awarewatershedstatusdetails: Object,
    receivedtrainingwatershedstatusdetails: Object,
    dateserveyornamedetails: Object,
  },
  data() {
    return {
      currentStep: 1,
      totalSteps: 25, // Update this to the total number of steps
      selectedStep: null, // Selected step from the dropdown
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
      showInputField: false,
      otherOption: "",
      district: [],
      wcc: [],
      project: [],
      habitation: [],
      microwatershed: [],
      mandal: [],
      gramPanchayat: [],

      selectedDistrictNo: "",
      selectedWccNo: "",
      selectedMicroWatershedNo: "",
      selectedProjectNo: "",
      selectedHabitationNo: "",
      selectedMandalNo: "",
      selectedGrampanchayatNo: "",

      selectedDistrictName: "",
      selectedWccName: "",
      selectedProjectName: "",
      selectedMicroWatershedName: "",
      selectedHabitationName: "",
      selectedMandalName: "",
      selectedGramPanchayatName: "",
      total: "",

      newRow: {
        id: "",
        headId: "",
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
      newRowLandParticular: {
        id: "",
        headId: "",
        cultivated_area: "",
        rainfed: "",
        irrigated: "",
        total: "",
        Type_of_ownership: "",
      },
      newRowIncomeKharif: {
        id: "",
        headId: "",
        crop_grown: "",
        rainfed_area: "",
        rainfed_yield: "",
        rainfed_cost_of_cultivation: "",
        rainfed_rate_per_qtls: "",
        rainfed_gross_income: "",
        rainfed_net_income: "",
        irrigated_area: "",
        irrigated_yield: "",
        irrigated_cost_of_cultivation: "",
        irrigated_rate_per_qtls: "",
        irrigated_gross_income: "",
        irrigated_net_income: "",
      },
      newRowIncomeRabhi: {
        id: "",
        headId: "",
        crop_grown: "",
        rainfed_area: "",
        rainfed_yield: "",
        rainfed_cost_of_cultivation: "",
        rainfed_rate_per_qtls: "",
        rainfed_gross_income: "",
        rainfed_net_income: "",
        irrigated_area: "",
        irrigated_yield: "",
        irrigated_cost_of_cultivation: "",
        irrigated_rate_per_qtls: "",
        irrigated_gross_income: "",
        irrigated_net_income: "",
      },
      landParticularRows: [],
      incomeKharifRows: [],
      incomeRabhiRows: [],
      //   head_of_the_family: "",
      editedItem: null,
      houseHoldEditItem: [],
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
            { value: "Goat", label: "Goat" },
            { value: "Goat Wool", label: "Goat Wool" },
            { value: "Sheep", label: "Sheep" },
            { value: "Sheep Wool", label: "Sheep Wool" },
            { value: "Ox", label: "Ox" },
            { value: "He Buffaloes", label: "He Buffaloes" },
          ],
        },
        {
          label: "Poultry",
          options: [
            { value: "Back Yard", label: "Back Yard" },
            { value: "Commercial", label: "Commercial" },
            { value: "Eggs", label: "Eggs" },
          ],
        },
        {
          label: "Fisheries",
          options: [{ value: "fisheries", label: "Fisheries" }],
        },
        {
          label: "Piggery",
          options: [{ value: "piggery", label: "Piggery" }],
        },
      ],
      newRowlivestock: {
        existing_no: "",
        headId: "",
        id: "",
        income_generated_during_last_year: "",
        milk_production: "",
        milk_quantity_sold: "",
        mill_consumed: "",
        name_of_the_animal: "",
        value_of_animals: "",
      },
      liveStockRows: [],
      subType: "",
      type_of_house: "",
      lat: null,
      long: null,
      total_rainfed_area: 0,
      total_irrigated_area: 0,
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
    IonFooter,
    IonItem,
    IonToast,
    toastController,
  },
  computed: {
    currentStepLabel() {
      return this.selectedStep
        ? `${this.selectedStep}. ${this.steps[this.selectedStep - 1]}`
        : "1. General Information";
    },
  },
  watch: {
    total_rainfed_area: function () {
      this.calculateSum();
    },
    total_irrigated_area: function () {
      this.calculateSum();
    },
    item: {
      immediate: true,
      handler(newVal) {
        // Ensure to make a deep copy of the received item
        // this.editedItem = newVal ? { ...newVal } : null;
        // this.editedItem = newVal ? { ...newVal, occupation: newVal.occupation || [] } : null;
        if (newVal) {
          this.editedItem = { ...newVal };
          // Split the occupation string into an array if it's a string
          if (typeof newVal.occupation === "string") {
            this.editedItem.occupation = newVal.occupation
              .split(",")
              .map((item) => item.trim());
          } else {
            this.editedItem.occupation = newVal.occupation || [];
          }
        } else {
          this.editedItem = null;
        }
      },
    },
    household: {
      immediate: true,
      handler(newVal) {
        // Ensure to make a deep copy of the received item
        this.houseHoldEditItem = newVal ? { ...newVal } : null;
        console.log("house hold info", this.houseHoldEditItem);
      },
    },
  },
  created() {
    this.getDistricts();
    this.total_rainfed_area = this.editedItem.total_rainfed_area;
    this.total_irrigated_area = this.editedItem.total_irrigated_area;
  },
  mounted() {
    this.getCurrentPosition();
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
        this.editedItem.contact_number.length > 0 &&
        (this.editedItem.contact_number.length < 10 ||
          this.editedItem.contact_number.length > 12)
      );
    },
    ValidAadharNumberShowingMessage() {
      // Regular expression for aadhar number validation
      // const regex = /^\d{12,16}$/;
      // this.isValidAadharNumber = regex.test(this.aadharNumber);
      return (
        this.editedItem.aadhar_number.length > 0 &&
        (this.editedItem.aadhar_number.length < 12 ||
          this.editedItem.aadhar_number.length > 16)
      );
    },
  },
  methods: {
    ContactNumberValidation(event) {
      let value = event.target.value;
      // Remove non-digit characters
      value = value.replace(/\D/g, "");
      // Limit to 12 characters
      if (value.length > 12) {
        value = value.substring(0, 12);
      }
      this.editedItem.contact_number = value;
    },
    aadharNumberValidation(event) {
      let value = event.target.value;
      // Remove non-digit characters
      value = value.replace(/\D/g, "");
      // Limit to 12 characters
      if (value.length > 16) {
        value = value.substring(0, 16);
      }
      this.editedItem.aadhar_number = value;
    },
    stringValidation() {
      let value = event.target.value;
      // Remove non-alphabetic characters
      value = value.replace(/[^a-zA-Z\s]/g, "");
      this.editedItem.head_of_the_family = value;
      this.newRow.name_of_the_family_member = value;
    },
    calculateSum() {
      this.editedItem.total_holding_area =
        parseFloat(this.total_rainfed_area) +
        parseFloat(this.total_irrigated_area);
    },
    nextStep() {
      if (this.currentStep < this.steps.length) {
        this.currentStep++;
        this.selectedStep = this.currentStep;
      }
    },
    prevStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
        this.selectedStep = this.currentStep;
      }
    },
    navigateToStep(event) {
      this.currentStep = event.detail.value;
    },
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
          params: { id: this.selectedDistrictNo },
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
          {
            params: { id: this.selectedWccNo },
          }
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
        this.microwatershed = response.data;
      } catch (error) {
        console.error("error in getwatershedvillage function", error);
      }
    },
    async getHabitation() {
      try {
        const response = await axios.get(
          "http://183.82.109.39:5000/api/habitation",
          { params: { id: this.selectedMicroWatershedNo } }
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
          {
            params: { id: this.selectedDistrictNo },
          }
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
          { params: { id: this.selectedMicroWatershedNo } }
        );
        this.gramPanchayat = response.data;
      } catch (error) {
        console.error("error in getgrampanchayat function", error);
      }
    },
    onDistrictSelected() {
      const selectedDistrictData = this.district.find(
        (item) => item.id === this.selectedDistrictNo
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
        this.selectedWccName = selectedWccData.wcc_name;
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
      const selectedMicroWatershedData = this.microwatershed.find(
        (name) => name.id === this.selectedMicroWatershedNo
      );
      if (selectedMicroWatershedData) {
        this.selectedMicroWatershedName =
          selectedMicroWatershedData.micro_watershed_name;
      }
    },
    onHabitation() {
      const selectedHabitationData = this.habitation.find(
        (name) => name.id === this.selectedHabitationNo
      );
      if (selectedHabitationData) {
        this.selectedHabitationName = selectedHabitationData.habitation_name;
      }
    },
    onMandal() {
      const selectedMandalData = this.mandal.find(
        (name) => name.id === this.selectedMandalNo
      );
      if (selectedMandalData) {
        this.selectedMandalName = selectedMandalData.mandal_name;
      }
    },
    onGramPanchayat() {
      const selectedGramPanchayatdata = this.gramPanchayat.find(
        (name) => name.id === this.selectedGrampanchayatNo
      );
      if (selectedGramPanchayatdata) {
        this.selectedGramPanchayatName =
          selectedGramPanchayatdata.grampanchayat_name;
        console.log("wcc name", selectedGramPanchayatdata.grampanchayat_name);
      }
    },

    handleHabitationOthers(event) {
      console.log("on change event", event);
      this.showInputField = event.target.value === "others";
    },

    // Method to reset sub-type when changing house type
    updateSubType() {
      this.editedItem.own_or_rented = "";
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
    updateLandrows() {
      // Check if any field is not empty
      if (
        Object.values(this.newRowLandParticular).some((field) => {
          if (typeof field === "string") {
            return field.trim() !== "";
          } else if (Array.isArray(field)) {
            return field.length > 0;
          } else {
            return field !== null && field !== undefined;
          }
        })
      ) {
        this.landParticularRows.push({ ...this.newRowLandParticular }); // Add a copy of newRow to rows
        console.log("this rows", this.rows);
        this.clearFieldsLandParticular(); // Clear the input fields
      }
    },
    updateIncomeKharifrows() {
      // Check if any field is not empty
      if (
        Object.values(this.newRowIncomeKharif).some((field) => {
          if (typeof field === "string") {
            return field.trim() !== "";
          } else if (Array.isArray(field)) {
            return field.length > 0;
          } else {
            return field !== null && field !== undefined;
          }
        })
      ) {
        this.incomeKharifRows.push({ ...this.newRowIncomeKharif }); // Add a copy of newRow to rows
        console.log("this rows", this.rows);
        this.clearFieldsIncomeKharif(); // Clear the input fields
      }
    },
    updateIncomeRabhirows() {
      // Check if any field is not empty
      if (
        Object.values(this.newRowIncomeRabhi).some((field) => {
          if (typeof field === "string") {
            return field.trim() !== "";
          } else if (Array.isArray(field)) {
            return field.length > 0;
          } else {
            return field !== null && field !== undefined;
          }
        })
      ) {
        this.incomeRabhiRows.push({ ...this.newRowIncomeRabhi }); // Add a copy of newRow to rows
        this.clearFieldsIncomeRabhi(); // Clear the input fields
      }
    },
    updateLiveStockrows() {
      // Check if any field is not empty
      if (
        Object.values(this.newRowlivestock).some((field) => {
          if (typeof field === "string") {
            return field.trim() !== "";
          } else if (Array.isArray(field)) {
            return field.length > 0;
          } else {
            return field !== null && field !== undefined;
          }
        })
      ) {
        this.liveStockRows.push({ ...this.newRowlivestock }); // Add a copy of newRow to rows
        this.clearFieldsLiveStock(); // Clear the input fields
      }
    },
    clearFields() {
      this.newRow = {
        id: "",
        headId: "",
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
    clearFieldsLandParticular() {
      this.newRowLandParticular = {
        id: "",
        headId: "",
        cultivated_area: "",
        rainfed: "",
        irrigated: "",
        total: "",
        Type_of_ownership: "",
      };
    },
    clearFieldsIncomeKharif() {
      this.newRowIncomeKharif = {
        id: "",
        headId: "",
        crop_grown: "",
        rainfed_area: "",
        rainfed_yield: "",
        rainfed_cost_of_cultivation: "",
        rainfed_rate_per_qtls: "",
        rainfed_gross_income: "",
        rainfed_net_income: "",
        irrigated_area: "",
        irrigated_yield: "",
        irrigated_cost_of_cultivation: "",
        irrigated_rate_per_qtls: "",
        irrigated_gross_income: "",
        irrigated_net_income: "",
      };
    },
    clearFieldsIncomeRabhi() {
      this.newRowIncomeRabhi = {
        id: "",
        headId: "",
        crop_grown: "",
        rainfed_area: "",
        rainfed_yield: "",
        rainfed_cost_of_cultivation: "",
        rainfed_rate_per_qtls: "",
        rainfed_gross_income: "",
        rainfed_net_income: "",
        irrigated_area: "",
        irrigated_yield: "",
        irrigated_cost_of_cultivation: "",
        irrigated_rate_per_qtls: "",
        irrigated_gross_income: "",
        irrigated_net_income: "",
      };
    },
    clearFieldsLiveStock() {
      this.newRowlivestock = {
        existing_no: "",
        headId: "",
        id: "",
        income_generated_during_last_year: "",
        milk_production: "",
        milk_quantity_sold: "",
        mill_consumed: "",
        name_of_the_animal: "",
        value_of_animals: "",
      };
    },
    removeRow(index) {
      this.rows.splice(index, 1);
    },
    removeLandParticularRow(index) {
      this.landParticularRows.splice(index, 1);
    },
    removeincomeKharifRow(index) {
      this.incomeKharifRows.splice(index, 1);
    },
    removeincomeRabhiRow(index) {
      this.incomeRabhiRows.splice(index, 1);
    },
    removelivestock(index) {
      this.liveStockRows.splice(index, 1);
    },
    selectItem(item) {
      this.newRow.id = item.id;
      this.newRow.headId = item.headId;
      this.newRow.name_of_the_family_member = item.name_of_the_family_member;
      this.newRow.relationship_with_head = item.relationship_with_head;
      this.newRow.disability = item.disability;
      this.newRow.gender = item.gender;
      this.newRow.age = item.age;
      this.newRow.level_of_education = item.level_of_education;
      this.newRow.occupation = item.occupation
        .split(",")
        .map((item) => item.trim());
      this.newRow.annual_gross_income = item.annual_gross_income;
      this.newRow.membership = item.membership;
    },

    selectLandParticular(item) {
      this.newRowLandParticular.id = item.id;
      this.newRowLandParticular.headId = item.headId;
      this.newRowLandParticular.cultivated_area = item.cultivated_area;
      this.newRowLandParticular.rainfed = item.rainfed;
      this.newRowLandParticular.irrigated = item.irrigated;
      this.newRowLandParticular.total = item.total;
      this.newRowLandParticular.Type_of_ownership = item.Type_of_ownership;
    },

    selectIncomeKharif(item) {
      this.newRowIncomeKharif.id = item.id;
      this.newRowIncomeKharif.headId = item.headId;
      this.newRowIncomeKharif.crop_grown = item.crop_grown;
      this.newRowIncomeKharif.rainfed_area = item.rainfed_area;
      this.newRowIncomeKharif.rainfed_yield = item.rainfed_yield;
      this.newRowIncomeKharif.rainfed_cost_of_cultivation =
        item.rainfed_cost_of_cultivation;
      this.newRowIncomeKharif.rainfed_rate_per_qtls =
        item.rainfed_rate_per_qtls;
      this.newRowIncomeKharif.rainfed_gross_income = item.rainfed_gross_income;
      this.newRowIncomeKharif.rainfed_net_income = item.rainfed_net_income;
      this.newRowIncomeKharif.irrigated_area = item.irrigated_area;
      this.newRowIncomeKharif.irrigated_yield = item.irrigated_yield;
      this.newRowIncomeKharif.irrigated_cost_of_cultivation =
        item.irrigated_cost_of_cultivation;
      this.newRowIncomeKharif.irrigated_rate_per_qtls =
        item.irrigated_rate_per_qtls;
      this.newRowIncomeKharif.irrigated_gross_income =
        item.irrigated_gross_income;
      this.newRowIncomeKharif.irrigated_net_income = item.irrigated_net_income;
    },
    selectIncomeRabhi(item) {
      this.newRowIncomeRabhi.id = item.id;
      this.newRowIncomeRabhi.headId = item.headId;
      this.newRowIncomeRabhi.crop_grown = item.crop_grown;
      this.newRowIncomeRabhi.rainfed_area = item.rainfed_area;
      this.newRowIncomeRabhi.rainfed_yield = item.rainfed_yield;
      this.newRowIncomeRabhi.rainfed_cost_of_cultivation =
        item.rainfed_cost_of_cultivation;
      this.newRowIncomeRabhi.rainfed_rate_per_qtls = item.rainfed_rate_per_qtls;
      this.newRowIncomeRabhi.rainfed_gross_income = item.rainfed_gross_income;
      this.newRowIncomeRabhi.rainfed_net_income = item.rainfed_net_income;
      this.newRowIncomeRabhi.irrigated_area = item.irrigated_area;
      this.newRowIncomeRabhi.irrigated_yield = item.irrigated_yield;
      this.newRowIncomeRabhi.irrigated_cost_of_cultivation =
        item.irrigated_cost_of_cultivation;
      this.newRowIncomeRabhi.irrigated_rate_per_qtls =
        item.irrigated_rate_per_qtls;
      this.newRowIncomeRabhi.irrigated_gross_income =
        item.irrigated_gross_income;
      this.newRowIncomeRabhi.irrigated_net_income = item.irrigated_net_income;
    },
    selectLiveStock(item) {
      this.newRowlivestock.id = item.id;
      this.newRowlivestock.headId = item.headId;
      this.newRowlivestock.existing_no = item.existing_no;
      this.newRowlivestock.income_generated_during_last_year =
        item.income_generated_during_last_year;
      this.newRowlivestock.milk_production = item.milk_production;
      this.newRowlivestock.milk_quantity_sold = item.milk_quantity_sold;
      this.newRowlivestock.mill_consumed = item.mill_consumed;
      this.newRowlivestock.name_of_the_animal = item.name_of_the_animal;
      this.newRowlivestock.value_of_animals = item.value_of_animals;
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
    async updateHouseIndividualInfo() {
      try {
        // const rowsWithCommaSeparatedOccupation = this.rows.map((row) => ({
        //   ...row,
        //   occupation: row.occupation.join(", "),
        // }));
        // const data = {
        //   rows: rowsWithCommaSeparatedOccupation, // Assuming rows_land_less_labourers contains your table data
        // };
        const occupationString = this.editedItem.occupation.join(",");

        const nameDist = this.selectedDistrictName
          ? this.selectedDistrictName
          : this.editedItem.dist_name;
        const nameWcc = this.selectedWccName
          ? this.selectedWccName
          : this.editedItem.wcc_name;

        const nameProject = this.selectedProjectName
          ? this.selectedProjectName
          : this.editedItem.project_name;

        const nameWaterShed = this.selectedMicroWatershedName
          ? this.selectedMicroWatershedName
          : this.editedItem.micro_watershed_name;
        const nameHabitation = this.selectedHabitationName
          ? this.selectedHabitationName
          : this.editedItem.habitation_name;

        const nameMandal = this.selectedMandalName
          ? this.selectedMandalName
          : this.editedItem.mandal_name;
        const nameGrampanchayat = this.selectedGramPanchayatName
          ? this.selectedGramPanchayatName
          : this.editedItem.grampanchayat_name;

        const response = await axios.put(
          `http://183.82.109.39:5000/api/updateIndividualInfo/${this.editedItem.id}`,
          {
            district: nameDist,
            wcc_name: nameWcc,
            name_of_project: nameProject,
            name_of_the_micro_watershed: nameWaterShed,
            name_of_habitation: nameHabitation,
            mandal: nameMandal,
            name_of_the_grampanchayat: nameGrampanchayat,
            head_of_the_family: this.editedItem.head_of_the_family,
            household_door_no: this.editedItem.household_door_no,
            conatact_number: this.editedItem.contact_number,
            aadhar_number: this.editedItem.aadhar_number,
            job_card_no: this.editedItem.job_card_no,
            economic_status: this.editedItem.economic_status,
            occupation: occupationString,
            location: this.editedItem.location,
            social_status: this.editedItem.social_status,
            total_rainfed_area: this.total_rainfed_area,
            total_irrigated_area: this.total_irrigated_area,
            type_of_house: this.editedItem.type_of_house,
            own_or_rented: this.editedItem.own_or_rented,
            total_holding_area: this.editedItem.total_holding_area,
            id: this.editedItem.id,
            latitude: this.lat,
            longitude: this.long,
          }
        );
        console.log("Item updated individual:", response.statusText);
        if (response.statusText === "OK") {
          // If response status is 200 (OK), trigger success toast
          this.triggerToast(
            "Updated of Survey Form is Submitted Successfully",
            "success"
          );
        }
        console.log("Item updated individual:", response.data);
        // this.$emit("item-updated", response.data); // Emit event with updated item
      } catch (error) {
        this.triggerToast("Failed to submit the survey form", "danger");
        console.error("Error individual updating item:", error);
      }
    },

    // async updateHouseHoldMembers() {
    //   try {
    //     console.log(
    //       "%%%%%%%%%%%% Occu %%%%%%%%%%%%",
    //       this.editedItem.occupation
    //     );
    //     const rowsWithCommaSeparatedOccupation = this.rows.map((row) => ({
    //       ...row,
    //       occupation: row.occupation.join(", "),
    //     }));
    //     const data = {
    //       rows: rowsWithCommaSeparatedOccupation, // Assuming rows_land_less_labourers contains your table data
    //     };
    //     console.log("updated rows *****************", data);
    //     const response = await axios.put(
    //       `http://183.82.109.39:5000/items/updatehouseholdmember`,
    //       data
    //     );
    //     console.log("Item updated:", response.data);
    //     this.$emit("item-updated", response.data); // Emit event with updated item
    //   } catch (error) {
    //     console.error("Error updating item:", error);
    //   }
    // },

    // update and insert the household members

    async UpdateHouseHoldMemberData() {
      this.addRows();
      const newData = this.rows.map((row) => ({
        ...row,
        occupation: row.occupation.join(","),
        headId: this.editedItem.id,
      }));

      for (const row of newData) {
        if (row.id) {
          // Update existing row
          console.log("^^^^^^^^^^^^^^^^^^^^^^^^^", row);
          await this.updateHouseholdMembers(row);
          this.rows = [];
        } else {
          // Insert new row
          // this.landParticularRows.push(row);
          console.log("^^^^^^^^^^^^^^^^^^^^^^^^^", row);
          await this.insertHouseholdMembers(row);
          this.rows = [];
        }
      }
    },
    async insertHouseholdMembers(row) {
      try {
        console.log("&&&&&&&&&&&&&&&&&&&&&&", row);
        const response = await axios.post(
          "http://183.82.109.39:5000/api/inserthouseholdDetails",

          {
            headId: row.headId,
            name_of_the_family_member: row.name_of_the_family_member,
            relationship_with_head: row.relationship_with_head,
            disability: row.disability,
            gender: row.gender,
            age: row.age,
            level_of_education: row.level_of_education,
            occupation: row.occupation,
            membership: row.membership,
            annual_gross_income: row.annual_gross_income,
          }
        );
        console.log("Row inserted:", response);
      } catch (error) {
        console.error("Error inserting row:", error);
      }
    },
    async updateHouseholdMembers(row) {
      console.log("updateding ");
      try {
        console.log("updated row", row);
        const response = await axios.put(
          `http://183.82.109.39:5000/api/updatehouseholdDetails/${row.id}`,
          row
        );
        console.log("Row updated:", response);
      } catch (error) {
        console.error("Error updating row:", error);
      }
    },

    // end update and insert the household member

    // update and insert the landparticulars

    async UpdateLandParticularsData() {
      this.updateLandrows();
      const newData = this.landParticularRows.map((row) => ({
        ...row,
        headId: this.editedItem.id,
      }));

      for (const row of newData) {
        if (row.id) {
          // Update existing row
          console.log("^^^^^^^^^^^^^^^^^^^^^^^^^", row);
          await this.updateLandParticular(row);
          this.landParticularRows = [];
        } else {
          // Insert new row
          // this.landParticularRows.push(row);
          console.log("^^^^^^^^^^^^^^^^^^^^^^^^^", row);
          await this.insertLandParticular(row);
          this.landParticularRows = [];
        }
      }
    },
    async insertLandParticular(row) {
      try {
        console.log("&&&&&&&&&&&&&&&&&&&&&&", row);
        const response = await axios.post(
          "http://183.82.109.39:5000/api/insertlandParticulars",

          {
            id: row.id,
            headId: row.headId,
            cultivated_area: row.cultivated_area,
            rainfed: row.rainfed,
            irrigated: row.irrigated,
            total: row.total,
            Type_of_ownership: row.Type_of_ownership,
          }
        );
        console.log("Row inserted:", response);
      } catch (error) {
        console.error("Error inserting row:", error);
      }
    },
    async updateLandParticular(row) {
      try {
        console.log("updated row", row);
        const response = await axios.put(
          `http://183.82.109.39:5000/api/updatelandparticular/${row.id}`,
          row
        );
        console.log("Row updated:", response);
      } catch (error) {
        console.error("Error updating row:", error);
      }
    },

    // end update and insert the landParticulars

    async UpdateKharifData() {
      this.updateIncomeKharifrows();
      const newData = this.incomeKharifRows.map((row) => ({
        ...row,
        headId: this.editedItem.id,
      }));

      for (const row of newData) {
        if (row.id) {
          // Update existing row
          console.log("^^^^^^^^^^^^^^^^^^^^^^^^^", row);
          await this.updateIncomeKharif(row);
          this.incomeKharifRows = [];
        } else {
          // Insert new row
          // this.landParticularRows.push(row);
          console.log("^^^^^^^^^^^^^^^^^^^^^^^^^", row);
          await this.insertIncomeKharif(row);
          this.incomeKharifRows = [];
        }
      }
    },
    async insertIncomeKharif(row) {
      try {
        console.log("&&&&&&&&&&&&&&&&&&&&&&", row);
        const response = await axios.post(
          "http://183.82.109.39:5000/api/insertIncomeKharif",

          {
            id: row.id,
            headId: row.headId,
            crop_grown: row.crop_grown,
            rainfed_area: row.rainfed_area,
            rainfed_yield: row.rainfed_yield,
            rainfed_cost_of_cultivation: row.rainfed_cost_of_cultivation,
            rainfed_rate_per_qtls: row.rainfed_rate_per_qtls,
            rainfed_gross_income: row.rainfed_gross_income,
            rainfed_net_income: row.rainfed_net_income,
            irrigated_area: row.irrigated_area,
            irrigated_yield: row.irrigated_yield,
            irrigated_cost_of_cultivation: row.irrigated_cost_of_cultivation,
            irrigated_rate_per_qtls: row.irrigated_rate_per_qtls,
            irrigated_gross_income: row.irrigated_gross_income,
            irrigated_net_income: row.irrigated_net_income,
          }
        );
        console.log("Row inserted:", response);
      } catch (error) {
        console.error("Error inserting row:", error);
      }
    },
    async updateIncomeKharif(row) {
      try {
        console.log("updated row", row);
        const response = await axios.put(
          `http://183.82.109.39:5000/api/updateIncomeKharif/${row.id}`,
          row
        );
        console.log("Row updated:", response);
      } catch (error) {
        console.error("Error updating row:", error);
      }
    },
    async UpdateRabhiData() {
      this.updateIncomeRabhirows();
      const newData = this.incomeRabhiRows.map((row) => ({
        ...row,
        headId: this.editedItem.id,
      }));

      for (const row of newData) {
        if (row.id) {
          // Update existing row
          console.log("Rabhi ", row);
          await this.updateIncomeRabhi(row);
          this.incomeRabhiRows = [];
        } else {
          // Insert new row
          // this.landParticularRows.push(row);
          console.log("Rabhi updated data", row);
          await this.insertIncomeRabhi(row);
          this.incomeRabhiRows = [];
        }
      }
    },
    async insertIncomeRabhi(row) {
      try {
        console.log("&&&&&&&&&&&&&&&&&&&&&&", row);
        const response = await axios.post(
          "http://183.82.109.39:5000/api/insertIncomeRabhi",

          {
            id: row.id,
            headId: row.headId,
            crop_grown: row.crop_grown,
            rainfed_area: row.rainfed_area,
            rainfed_yield: row.rainfed_yield,
            rainfed_cost_of_cultivation: row.rainfed_cost_of_cultivation,
            rainfed_rate_per_qtls: row.rainfed_rate_per_qtls,
            rainfed_gross_income: row.rainfed_gross_income,
            rainfed_net_income: row.rainfed_net_income,
            irrigated_area: row.irrigated_area,
            irrigated_yield: row.irrigated_yield,
            irrigated_cost_of_cultivation: row.irrigated_cost_of_cultivation,
            irrigated_rate_per_qtls: row.irrigated_rate_per_qtls,
            irrigated_gross_income: row.irrigated_gross_income,
            irrigated_net_income: row.irrigated_net_income,
          }
        );
        console.log("Rabhi Row inserted:", response);
      } catch (error) {
        console.error("Error inserting rabhi row:", error);
      }
    },
    async updateIncomeRabhi(row) {
      try {
        const response = await axios.put(
          `http://183.82.109.39:5000/api/updateIncomeRabhi/${row.id}`,
          row
        );
        console.log("Rabhi Row updated:", response);
      } catch (error) {
        console.error("Error updating rabhi row:", error);
      }
    },
    // live stock data updation
    async UpdateLiveStockData() {
      this.updateLiveStockrows();
      const newData = this.liveStockRows.map((row) => ({
        ...row,
        headId: this.editedItem.id,
      }));

      for (const row of newData) {
        if (row.id) {
          // Update existing row
          console.log("Live stock ", row);
          await this.updateLiveStock(row);
          this.liveStockRows = [];
        } else {
          // Insert new row
          // this.landParticularRows.push(row);
          console.log("Live Stock updated data", row);
          await this.insertLiveStock(row);
          this.liveStockRows = [];
        }
      }
    },
    async insertLiveStock(row) {
      try {
        console.log("&&&&&&&&&&&&&&&&&&&&&&", row);
        const response = await axios.post(
          "http://183.82.109.39:5000/api/insertLiveStock",

          {
            id: row.id,
            headId: row.headId,
            existing_no: row.existing_no,
            income_generated_during_last_year:
              row.income_generated_during_last_year,
            milk_production: row.milk_production,
            milk_quantity_sold: row.milk_quantity_sold,
            mill_consumed: row.mill_consumed,
            name_of_the_animal: row.name_of_the_animal,
            value_of_animals: row.value_of_animals,
          }
        );
        console.log("Live Stock Row inserted:", response);
      } catch (error) {
        console.error("Error inserting Live Stock row:", error);
      }
    },
    async updateLiveStock(row) {
      try {
        const response = await axios.put(
          `http://183.82.109.39:5000/api/updateLiveStock/${row.id}`,
          row
        );
        console.log("Live stock Row updated:", response);
      } catch (error) {
        console.error("Error updating Live Stock row:", error);
      }
    },
    submitForm() {
      this.$router.push({ path: "/search" }).then(() => {
        this.triggerToast();
        this.$router.go(0);
      });
    },
    async triggerToast(message, color) {
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
.rsiImgSize {
  height: 2rem;
  width: 27rem;
}
/* ion-toolbar{
    background: var(--ion-header-color);
  } */

ion-select {
  width: 100%;
}

ion-select-option {
  padding-left: 16px;
}

ion-card {
  border-radius: 8px;
  box-shadow: 1px 1px 6px rgb(96, 96, 161);
}
</style>
