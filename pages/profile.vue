<template>
  <div class="_main_content">
			<div class="row">
        <!-- dashboard content -->
        <div class="col-12 col-md-12 col-lg-12">
          <div class="_1card">
            <div class="_1card_top">
              <div class="_1card_top_left">
                <p class="_1card_top_title">Profile</p>
              </div>
            </div>

            <div class="_1card_body">
              <!-- main content -->
              <Tabs v-model="tabType" @on-click="tabClick">
                <TabPane label="Basic Information" name="basic">
                  <div class="row justify-content-center">
                    <div class="col-12 col-md-12 col-lg-8 _padd_t10">
                      <Form :model="form" label-position="top">
                          <div class="row">
                            <div class="col-12 col-md-6 col-lg-6">
                              <FormItem :error="error.firstname" label="First Name">
                                <Input v-model="form.firstname" />
                              </FormItem>
                            </div>

                            <div class="col-12 col-md-6 col-lg-6">
                              <FormItem :error="error.lastname" label="Last Name">
                                <Input v-model="form.lastname" />
                              </FormItem>
                            </div>
                            <div class="col-12 col-md-6 col-lg-6">
                              <FormItem :error="error.city" label="City">
                                <Input v-model="form.city" />
                              </FormItem>
                            </div>
                            <div class="col-12 col-md-6 col-lg-6">
                              <FormItem :error="error.country" label="Country">
                                <Select
                                  class="profile-input"
                                  v-model="form.country"
                                  filterable
                                  placeholder="Select Country"
                                >
                                  <Option value="Afghanistan">Afghanistan</Option>
                                  <Option value="Åland Islands">Åland Islands</Option>
                                  <Option value="Albania">Albania</Option>
                                  <Option value="Algeria">Algeria</Option>
                                  <Option value="American Samoa">American Samoa</Option>
                                  <Option value="Andorra">Andorra</Option>
                                  <Option value="Angola">Angola</Option>
                                  <Option value="Anguilla">Anguilla</Option>
                                  <Option value="Antarctica">Antarctica</Option>
                                  <Option value="Antigua and Barbuda">Antigua andBarbuda</Option>
                                  <Option value="Argentina">Argentina</Option>
                                  <Option value="Armenia">Armenia</Option>
                                  <Option value="Aruba">Aruba</Option>
                                  <Option value="Australia">Australia</Option>
                                  <Option value="Austria">Austria</Option>
                                  <Option value="Azerbaijan">Azerbaijan</Option>
                                  <Option value="Bahamas">Bahamas</Option>
                                  <Option value="Bahrain">Bahrain</Option>
                                  <Option value="Bangladesh">Bangladesh</Option>
                                  <Option value="Barbados">Barbados</Option>
                                  <Option value="Belarus">Belarus</Option>
                                  <Option value="Belgium">Belgium</Option>
                                  <Option value="Belize">Belize</Option>
                                  <Option value="Benin">Benin</Option>
                                  <Option value="Bermuda">Bermuda</Option>
                                  <Option value="Bhutan">Bhutan</Option>
                                  <Option value="Bolivia">Bolivia</Option>
                                  <Option value="Bosnia and Herzegovina">Bosnia and Herzegovina</Option>
                                  <Option value="Botswana">Botswana</Option>
                                  <Option value="Bouvet Island">Bouvet Island</Option>
                                  <Option value="Brazil">Brazil</Option>
                                  <Option value="British Indian Ocean Territory">British Indian Ocean Territory</Option>
                                  <Option value="Brunei Darussalam">Brunei Darussalam</Option>
                                  <Option value="Bulgaria">Bulgaria</Option>
                                  <Option value="Burkina Faso">Burkina Faso</Option>
                                  <Option value="Burundi">Burundi</Option>
                                  <Option value="Cambodia">Cambodia</Option>
                                  <Option value="Cameroon">Cameroon</Option>
                                  <Option value="Canada">Canada</Option>
                                  <Option value="Cape Verde">Cape Verde</Option>
                                  <Option value="Cayman Islands">Cayman Islands</Option>
                                  <Option value="Central African Republic">Central African Republic</Option>
                                  <Option value="Chad">Chad</Option>
                                  <Option value="Chile">Chile</Option>
                                  <Option value="China">China</Option>
                                  <Option value="Christmas Island">Christmas Island</Option>
                                  <Option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</Option>
                                  <Option value="Colombia">Colombia</Option>
                                  <Option value="Comoros">Comoros</Option>
                                  <Option value="Congo">Congo</Option>
                                  <Option
                                    value="Congo, The Democratic Republic of The"
                                  >Congo, The Democratic Republic of The</Option>
                                  <Option value="Cook Islands">Cook Islands</Option>
                                  <Option value="Costa Rica">Costa Rica</Option>
                                  <Option value="Cote D'ivoire">Cote D'ivoire</Option>
                                  <Option value="Croatia">Croatia</Option>
                                  <Option value="Cuba">Cuba</Option>
                                  <Option value="Cyprus">Cyprus</Option>
                                  <Option value="Czech Republic">Czech Republic</Option>
                                  <Option value="Denmark">Denmark</Option>
                                  <Option value="Djibouti">Djibouti</Option>
                                  <Option value="Dominica">Dominica</Option>
                                  <Option value="Dominican Republic">Dominican Republic</Option>
                                  <Option value="Ecuador">Ecuador</Option>
                                  <Option value="Egypt">Egypt</Option>
                                  <Option value="El Salvador">El Salvador</Option>
                                  <Option value="Equatorial Guinea">Equatorial Guinea</Option>
                                  <Option value="Eritrea">Eritrea</Option>
                                  <Option value="Estonia">Estonia</Option>
                                  <Option value="Ethiopia">Ethiopia</Option>
                                  <Option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</Option>
                                  <Option value="Faroe Islands">Faroe Islands</Option>
                                  <Option value="Fiji">Fiji</Option>
                                  <Option value="Finland">Finland</Option>
                                  <Option value="France">France</Option>
                                  <Option value="French Guiana">French Guiana</Option>
                                  <Option value="French Polynesia">French Polynesia</Option>
                                  <Option value="French Southern Territories">French Southern Territories</Option>
                                  <Option value="Gabon">Gabon</Option>
                                  <Option value="Gambia">Gambia</Option>
                                  <Option value="Georgia">Georgia</Option>
                                  <Option value="Germany">Germany</Option>
                                  <Option value="Ghana">Ghana</Option>
                                  <Option value="Gibraltar">Gibraltar</Option>
                                  <Option value="Greece">Greece</Option>
                                  <Option value="Greenland">Greenland</Option>
                                  <Option value="Grenada">Grenada</Option>
                                  <Option value="Guadeloupe">Guadeloupe</Option>
                                  <Option value="Guam">Guam</Option>
                                  <Option value="Guatemala">Guatemala</Option>
                                  <Option value="Guernsey">Guernsey</Option>
                                  <Option value="Guinea">Guinea</Option>
                                  <Option value="Guinea-bissau">Guinea-bissau</Option>
                                  <Option value="Guyana">Guyana</Option>
                                  <Option value="Haiti">Haiti</Option>
                                  <Option
                                    value="Heard Island and Mcdonald Islands"
                                  >Heard Island and Mcdonald Islands</Option>
                                  <Option value="Holy See (Vatican City State)">Holy See (Vatican City State)</Option>
                                  <Option value="Honduras">Honduras</Option>
                                  <Option value="Hong Kong">Hong Kong</Option>
                                  <Option value="Hungary">Hungary</Option>
                                  <Option value="Iceland">Iceland</Option>
                                  <Option value="India">India</Option>
                                  <Option value="Indonesia">Indonesia</Option>
                                  <Option value="Iran, Islamic Republic of">Iran, Islamic Republic of</Option>
                                  <Option value="Iraq">Iraq</Option>
                                  <Option value="Ireland">Ireland</Option>
                                  <Option value="Isle of Man">Isle of Man</Option>
                                  <Option value="Israel">Israel</Option>
                                  <Option value="Italy">Italy</Option>
                                  <Option value="Jamaica">Jamaica</Option>
                                  <Option value="Japan">Japan</Option>
                                  <Option value="Jersey">Jersey</Option>
                                  <Option value="Jordan">Jordan</Option>
                                  <Option value="Kazakhstan">Kazakhstan</Option>
                                  <Option value="Kenya">Kenya</Option>
                                  <Option value="Kiribati">Kiribati</Option>
                                  <Option
                                    value="Korea, Democratic People's Republic of"
                                  >Korea, Democratic People's Republic of</Option>
                                  <Option value="Korea, Republic of">Korea, Republic of</Option>
                                  <Option value="Kuwait">Kuwait</Option>
                                  <Option value="Kyrgyzstan">Kyrgyzstan</Option>
                                  <Option value="Lao People's Democratic Republic">Lao People's Democratic Republic</Option>
                                  <Option value="Latvia">Latvia</Option>
                                  <Option value="Lebanon">Lebanon</Option>
                                  <Option value="Lesotho">Lesotho</Option>
                                  <Option value="Liberia">Liberia</Option>
                                  <Option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</Option>
                                  <Option value="Liechtenstein">Liechtenstein</Option>
                                  <Option value="Lithuania">Lithuania</Option>
                                  <Option value="Luxembourg">Luxembourg</Option>
                                  <Option value="Macao">Macao</Option>
                                  <Option
                                    value="Macedonia, The Former Yugoslav Republic of"
                                  >Macedonia, The Former Yugoslav Republic of</Option>
                                  <Option value="Madagascar">Madagascar</Option>
                                  <Option value="Malawi">Malawi</Option>
                                  <Option value="Malaysia">Malaysia</Option>
                                  <Option value="Maldives">Maldives</Option>
                                  <Option value="Mali">Mali</Option>
                                  <Option value="Malta">Malta</Option>
                                  <Option value="Marshall Islands">Marshall Islands</Option>
                                  <Option value="Martinique">Martinique</Option>
                                  <Option value="Mauritania">Mauritania</Option>
                                  <Option value="Mauritius">Mauritius</Option>
                                  <Option value="Mayotte">Mayotte</Option>
                                  <Option value="Mexico">Mexico</Option>
                                  <Option value="Micronesia, Federated States of">Micronesia, Federated States of</Option>
                                  <Option value="Moldova, Republic of">Moldova, Republic of</Option>
                                  <Option value="Monaco">Monaco</Option>
                                  <Option value="Mongolia">Mongolia</Option>
                                  <Option value="Montenegro">Montenegro</Option>
                                  <Option value="Montserrat">Montserrat</Option>
                                  <Option value="Morocco">Morocco</Option>
                                  <Option value="Mozambique">Mozambique</Option>
                                  <Option value="Myanmar">Myanmar</Option>
                                  <Option value="Namibia">Namibia</Option>
                                  <Option value="Nauru">Nauru</Option>
                                  <Option value="Nepal">Nepal</Option>
                                  <Option value="Netherlands">Netherlands</Option>
                                  <Option value="Netherlands Antilles">Netherlands Antilles</Option>
                                  <Option value="New Caledonia">New Caledonia</Option>
                                  <Option value="New Zealand">New Zealand</Option>
                                  <Option value="Nicaragua">Nicaragua</Option>
                                  <Option value="Niger">Niger</Option>
                                  <Option value="Nigeria">Nigeria</Option>
                                  <Option value="Niue">Niue</Option>
                                  <Option value="Norfolk Island">Norfolk Island</Option>
                                  <Option value="Northern Mariana Islands">Northern Mariana Islands</Option>
                                  <Option value="Norway">Norway</Option>
                                  <Option value="Oman">Oman</Option>
                                  <Option value="Pakistan">Pakistan</Option>
                                  <Option value="Palau">Palau</Option>
                                  <Option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</Option>
                                  <Option value="Panama">Panama</Option>
                                  <Option value="Papua New Guinea">Papua New Guinea</Option>
                                  <Option value="Paraguay">Paraguay</Option>
                                  <Option value="Peru">Peru</Option>
                                  <Option value="Philippines">Philippines</Option>
                                  <Option value="Pitcairn">Pitcairn</Option>
                                  <Option value="Poland">Poland</Option>
                                  <Option value="Portugal">Portugal</Option>
                                  <Option value="Puerto Rico">Puerto Rico</Option>
                                  <Option value="Qatar">Qatar</Option>
                                  <Option value="Reunion">Reunion</Option>
                                  <Option value="Romania">Romania</Option>
                                  <Option value="Russian Federation">Russian Federation</Option>
                                  <Option value="Rwanda">Rwanda</Option>
                                  <Option value="Saint Helena">Saint Helena</Option>
                                  <Option value="Saint Kitts and Nevis">Saint Kitts and Nevis</Option>
                                  <Option value="Saint Lucia">Saint Lucia</Option>
                                  <Option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</Option>
                                  <Option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</Option>
                                  <Option value="Samoa">Samoa</Option>
                                  <Option value="San Marino">San Marino</Option>
                                  <Option value="Sao Tome and Principe">Sao Tome and Principe</Option>
                                  <Option value="Saudi Arabia">Saudi Arabia</Option>
                                  <Option value="Senegal">Senegal</Option>
                                  <Option value="Serbia">Serbia</Option>
                                  <Option value="Seychelles">Seychelles</Option>
                                  <Option value="Sierra Leone">Sierra Leone</Option>
                                  <Option value="Singapore">Singapore</Option>
                                  <Option value="Slovakia">Slovakia</Option>
                                  <Option value="Slovenia">Slovenia</Option>
                                  <Option value="Solomon Islands">Solomon Islands</Option>
                                  <Option value="Somalia">Somalia</Option>
                                  <Option value="South Africa">South Africa</Option>
                                  <Option
                                    value="South Georgia and The South Sandwich Islands"
                                  >South Georgia and The South Sandwich Islands</Option>
                                  <Option value="Spain">Spain</Option>
                                  <Option value="Sri Lanka">Sri Lanka</Option>
                                  <Option value="Sudan">Sudan</Option>
                                  <Option value="Suriname">Suriname</Option>
                                  <Option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</Option>
                                  <Option value="Swaziland">Swaziland</Option>
                                  <Option value="Sweden">Sweden</Option>
                                  <Option value="Switzerland">Switzerland</Option>
                                  <Option value="Syrian Arab Republic">Syrian Arab Republic</Option>
                                  <Option value="Taiwan, Province of China">Taiwan, Province of China</Option>
                                  <Option value="Tajikistan">Tajikistan</Option>
                                  <Option value="Tanzania, United Republic of">Tanzania, United Republic of</Option>
                                  <Option value="Thailand">Thailand</Option>
                                  <Option value="Timor-leste">Timor-leste</Option>
                                  <Option value="Togo">Togo</Option>
                                  <Option value="Tokelau">Tokelau</Option>
                                  <Option value="Tonga">Tonga</Option>
                                  <Option value="Trinidad and Tobago">Trinidad and Tobago</Option>
                                  <Option value="Tunisia">Tunisia</Option>
                                  <Option value="Turkey">Turkey</Option>
                                  <Option value="Turkmenistan">Turkmenistan</Option>
                                  <Option value="Turks and Caicos Islands">Turks and Caicos Islands</Option>
                                  <Option value="Tuvalu">Tuvalu</Option>
                                  <Option value="Uganda">Uganda</Option>
                                  <Option value="Ukraine">Ukraine</Option>
                                  <Option value="United Arab Emirates">United Arab Emirates</Option>
                                  <Option value="United Kingdom">United Kingdom</Option>
                                  <Option value="United States">United States</Option>
                                  <Option
                                    value="United States Minor Outlying Islands"
                                  >United States Minor Outlying Islands</Option>
                                  <Option value="Uruguay">Uruguay</Option>
                                  <Option value="Uzbekistan">Uzbekistan</Option>
                                  <Option value="Vanuatu">Vanuatu</Option>
                                  <Option value="Venezuela">Venezuela</Option>
                                  <Option value="Viet Nam">Viet Nam</Option>
                                  <Option value="Virgin Islands, British">Virgin Islands, British</Option>
                                  <Option value="Virgin Islands, U.S.">Virgin Islands, U.S.</Option>
                                  <Option value="Wallis and Futuna">Wallis and Futuna</Option>
                                  <Option value="Western Sahara">Western Sahara</Option>
                                  <Option value="Yemen">Yemen</Option>
                                  <Option value="Zambia">Zambia</Option>
                                  <Option value="Zimbabwe">Zimbabwe</Option>
                                </Select>
                              </FormItem>
                            </div>
                            <div class="col-12 col-md-6 col-lg-6">
                              <FormItem :error="error.postcode" label="Zip Code">
                                <Input v-model="form.postcode" />
                              </FormItem>
                            </div>
                            <div class="col-12 col-md-6 col-lg-6">
                              <FormItem :error="error.phone" label="Contact">
                                <Input v-model="form.phone" />
                              </FormItem>
                            </div>
                            <div class="col-12 col-md-12 col-lg-12">
                              <FormItem :error="error.address" label="Address">
                                <Input v-model="form.address" type="textarea" :autosize="{minRows: 4,maxRows: 6}" />
                              </FormItem>
                            </div>

                            <div class="col-12 col-md-12 col-lg-12">
                              <FormItem label="Image">
                                  <div class="profile-edit-group-item item-sm-12 item-md-12 item-lg-12 no-padding">
                                    <div
                                    :class="(isUploadError || errorProject.files) ? `profile-edit-input error_border_color` : `profile-edit-input`"
                                    style="margin-bottom: 20px ;"
                                    >
                                        <div class="demo-upload-list demo-upload-list-profile" v-if="form.image != 'https://api.hombolttech.net/img/profile.png'">
                                          <template>
                                            <img :src='form.image'/>

                                            <div class="demo-upload-list-cover">
                                                <Icon
                                                type="ios-trash-outline"
                                                @click.native="handleRemove()"
                                                ></Icon>

                                                <Icon type="md-eye" @click.native="viewImage()"/>
                                            </div>
                                          </template>
                                          <!-- <template v-else>
                                          <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
                                          </template> -->
                                        </div>

                                      <button style="width: 100%; border: 0;" type="button">
                                        <Upload
                                        ref="upload"
                                        :show-upload-list="false"
                                        :format="['jpg','jpeg','png', 'pdf', 'doc', 'docx', 'gif', 'txt']"
                                        :max-size="20480"
                                        :on-success="handleSuccess"
                                        :on-format-error="handleFormatError"
                                        :on-exceeded-size="handleMaxSize"
                                        :on-progress="handleProgress"
                                        multiple
                                        type="drag"
                                        :action="`${apiUrl}profile_upload`"
                                        style="width: 100% !important"
                                        >
                                        <div style="padding: 20px 0">
                                            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                                            <p>Click or drag files here to upload</p>
                                        </div>
                                        <!-- <i class="fas fa-images"></i> attachement -->
                                        </Upload>
                                      </button>
                                      
                                      <p class="error_text" v-if="isUploadError">{{ uploadErrorText }}</p>
                                      <p class="error_text" v-if="errorProject.files">{{ errorText }}</p>
                                    </div>
                                  </div>
                              </FormItem>
                            </div>
                          </div>
                        </Form>
                        <Button
                          type="primary"
                          :loading="loading"
                          :disabled="loading"
                          @click="storeData"
                        >{{loading? 'Please wait' : 'Update'}}</Button>
                    </div>
                  </div>
                </TabPane>

                <TabPane label="Change Email" name="email">
                  <div class="row justify-content-center">
                    <div class="col-12 col-md-12 col-lg-8 _padd_t10">
                      <div v-if="email_request == null">
                          <Form label-position="top">
                            <div class="row">
                              <div class="col-12 col-md-6 col-lg-6">
                                <FormItem :error="error.old_email" label="Old Email">
                                  <Input v-model="form_email.old_email" />
                                </FormItem>
                              </div>
                              <div class="col-12 col-md-6 col-lg-6">
                                <FormItem :error="error.email" label="New Email">
                                  <Input v-model="form_email.email" />
                                </FormItem>
                              </div>
                            </div>
                          </Form>
                          <Button
                            type="primary"
                            :loading="loading"
                            :disabled="loading"
                            @click="sendEmailChangeRequest"
                          >{{loading? 'Please wait' : 'Send request for email change'}}</Button>
                        </div>
                        
                        <div v-else-if="email_request">
                          <div v-if="email_request.status == 'Pending' ">
                            <Alert>
                              Request pending
                              <template
                                slot="desc"
                              >Admin is reviewing your request. Please wait for confirmation</template>
                            </Alert>
                            <Form label-position="top">
                              <FormItem :error="error.old_email" label="Old Email">
                                <Input v-model="form_email.old_email" disabled />
                              </FormItem>
                              <FormItem :error="error.email" label="New Email">
                                <Input v-model="form_email.email" disabled />
                              </FormItem>
                            </Form>
                            <Button
                              :loading="cLoading"
                              :disabled="cLoading"
                              @click="cancelEmailRequest"
                            >{{cLoading? 'Please wait': 'Cancel request'}}</Button>
                            <Button type="primary" disabled>Send email verification code</Button>
                          </div>
                          <div v-if="email_request.status == 'Approved' ">
                            <div v-if="form_email.isTokenSent==false">
                              <Form label-position="top">
                                <FormItem :error="error.old_email" label="Old Email">
                                  <Input v-model="form_email.old_email" disabled />
                                </FormItem>
                                <FormItem :error="error.email" label="New Email">
                                  <Input v-model="form_email.email" disabled />
                                </FormItem>
                              </Form>
                              <Button
                                :loading="cLoading"
                                :disabled="cLoading"
                                @click="cancelEmailRequest"
                              >{{cLoading? 'Please wait': 'Cancel request'}}</Button>
                              <Button
                                type="primary"
                                :loading="loading"
                                :disabled="loading"
                                @click="sendEmailVerificationCode"
                              >{{loading? 'Please wait' : 'Send email verification code'}}</Button>
                            </div>
                            <div v-else-if="form_email.isTokenSent">
                              <Alert>
                                Email verification code sent
                                <template
                                  slot="desc"
                                >An email verification code is sent to your new email address .</template>
                              </Alert>
                              <Form label-position="top">
                                <FormItem :error="error.old_email" label="Old Email">
                                  <Input v-model="form_email.old_email" disabled />
                                </FormItem>
                                <FormItem :error="error.email" label="New Email">
                                  <Input v-model="form_email.email" disabled />
                                </FormItem>
                                <FormItem :error="error.emailVerifedToken" label="Email Confirmation Code ">
                                  <Input v-model="form_email.emailVerifedToken" />
                                </FormItem>
                              </Form>
                              <Button
                                type="primary"
                                :loading="loading"
                                :disabled="loading"
                                @click="updateEmail"
                              >{{loading? 'Please wait' : 'Update Email'}}</Button>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
                </TabPane>

                <TabPane label="Change Password" name="password">
                  <div class="row justify-content-center">
                    <div class="col-12 col-md-12 col-lg-8 _padd_t10">
                      <Form label-position="top">
                          <div class="row">
                            <div class="col-12 col-md-4 col-lg-4">
                              <FormItem :error="error.old_password" label="Old Password">
                                <Input type="password" v-model="form_password.old_password" />
                              </FormItem>
                            </div>
                            <div class="col-12 col-md-4 col-lg-4">
                              <FormItem :error="error.password" label="New Password">
                                <Input type="password" v-model="form_password.password" />
                              </FormItem>
                            </div>
                            <div class="col-12 col-md-4 col-lg-4">
                              <FormItem :error="error.cpassword" label="Confirm Password">
                                <Input type="password" v-model="form_password.cpassword" />
                              </FormItem>
                            </div>
                          </div>
                        </Form>
                        <Button
                          type="primary"
                          :loading="loading"
                          :disabled="loading"
                          @click="changePassword"
                        >{{loading? 'Please wait' : 'Change'}}</Button>
                    </div>
                  </div>
                </TabPane>
              </Tabs>

              <Modal
                  v-model="imageModal"
                  title="View Image"
                  :loading="loading"
                  >
                  <img :src='form.image'>
              </Modal>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  // @keyup="assingData(1)"
  // v-if="error.email==''"
  middleware: "authenticated",
  data() {
    return {
      loading: false,
      cLoading: false,
      tabType: "basic",
      form: {
        firstname: "",
        lastname: "",
        address: "",
        phone: "",
        postcode: "",
        city: "",
        country: "",
        image: "",
      },
      email_request: null,
      form_password: {
        old_password: "",
        password: "",
        cpassword: "",
      },
      form_email: {
        old_email: "",
        email: "",
        emailVerifedToken: "",
        isTokenSent: false,
      },
      error: {
        firstname: "",
        lastname: "",
        email: "",
        old_email: "",
        emailVerifedToken: "",
        address: "",
        phone: "",
        postcode: "",
        city: "",
        country: "",
        agent_type: "",
        password: "",
        old_password: "",
        cpassword: "",
        rrs: "",
      },
      isUploadError: false,
      uploadErrorText: "",
      errorProject: {
          files: false,
      },
      imageModal:false,
      agentOption: [],
      allUserType: [],
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
    };
  },
  methods: {
    async storeData() {
      this.clearData();
      let flag = 1;
      if (
        !this.form.firstname ||
        this.form.firstname.trim() == "" ||
        this.form.firstname == null
      ) {
        this.error.firstname = "First Name Can not be empty!!";
        flag = 0;
      }
      if (
        !this.form.lastname ||
        this.form.lastname.trim() == "" ||
        this.form.lastname == null
      ) {
        this.error.lastname = "Last Name Can not be empty!!";
        flag = 0;
      }

      if (
        !this.form.address ||
        this.form.address.trim() == "" ||
        this.form.address == null
      ) {
        this.error.address = "Address Can not be empty!!";
        flag = 0;
      }
      if (
        !this.form.country ||
        this.form.country.trim() == "" ||
        this.form.country == null
      ) {
        this.error.country = "Country Can not be empty!!";
        flag = 0;
      }
      if (
        !this.form.phone ||
        this.form.phone.trim() == "" ||
        this.form.phone == null
      ) {
        this.error.phone = "Contact Can not be empty!!";
        flag = 0;
      }

      // if (this.reg.test(this.form.email)){
      //     this.error.email =''
      //  }
      // else{
      //      this.error.email ='Please Provide Valid Email!!'
      //     flag = 0
      // }
      if (
        !this.form.city ||
        this.form.city.trim() == "" ||
        this.form.city == null
      ) {
        this.error.city = "City Can not be empty!!";
        flag = 0;
      }
      if (
        !this.form.city ||
        this.form.city.trim() == "" ||
        this.form.city == null
      ) {
        this.error.city = "Address Can not be empty!!";
        flag = 0;
      }
      if (
        !this.form.postcode ||
        this.form.postcode.trim() == "" ||
        this.form.postcode == null
      ) {
        this.error.postcode = "Zip code Can not be empty!!";
        flag = 0;
      }
      // if(this.isPassword == true){

      //     if(!this.form.password  || this.form.password.trim()=='' || this.form.password==null || this.form.password.trim()<6){
      //             this.error.password ='Passwords must be at least 6 characters in length!!'
      //             flag = 0
      //     }
      // }

      if (flag == 0) return;
      this.loading = true;
      const res = await this.callApi("post", "/update_profile", this.form);
      if (res.status == 200) {
        this.s("User data updated!");
        window.location = "/profile";
      } else if (res.status == 403) {
        this.e(res.data.message);
      } else if (res.status == 401) {
        this.e(res.data.message);
      } else {
        this.swr();
      }
      this.loading = false;
    },
    async tabClick(value) {
      this.tabType = value;
      history.pushState({}, null, `/profile?tab=${value}`);
    },
    async cancelEmailRequest(value) {
      this.cLoading = true;
      const res = await this.callApi("post", "/cancelEmailRequest", {
        id: this.authInfo.id,
      });
      if (res.status == 200) {
        this.i("Email change request has been canceled");
        this.email_request = null;
        this.form_email = {
          old_email: "",
          email: "",
          emailVerifedToken: "",
          isTokenSent: false,
        };
      } else {
        this.swr();
      }
      this.cLoading = false;
    },
    async changePassword() {
      this.clearData();
      let flag = 1;
      if (
        !this.form_password.old_password ||
        this.form_password.old_password.trim() == "" ||
        this.form_password.old_password == null
      ) {
        this.error.old_password = "old password Can not be empty!!";
        flag = 0;
      }

      if (
        !this.form_password.password ||
        this.form_password.password.trim() == "" ||
        this.form_password.password == null ||
        this.form_password.password.trim() < 6
      ) {
        this.error.password =
          "Passwords must be at least 6 characters in length!!";
        flag = 0;
      }
      if (
        this.form_password.password.trim() !=
        this.form_password.cpassword.trim()
      ) {
        this.error.cpassword = "Password doesn't match !";
        flag = 0;
      }

      if (flag == 0) return;
      this.form_password.id = this.authInfo.id;
      this.loading = true;
      const res = await this.callApi(
        "post",
        "/changeUserPassword",
        this.form_password
      );
      if (res.status == 200) {
        this.s("User password updated!");
        this.form_password = {
          old_password: "",
          password: "",
          cpassword: "",
        };
      } else if (res.status == 403) {
        this.e(res.data.message);
      } else if (res.status == 401) {
        this.e(res.data.message);
      } else {
        this.swr();
      }
      this.loading = false;
    },
    async sendEmailChangeRequest() {
      this.clearData();
      let flag = 1;
      if (
        !this.form_email.old_email ||
        this.form_email.old_email.trim() == "" ||
        this.form_email.old_email == null
      ) {
        this.error.old_email = "Old email Can not be empty!!";
        flag = 0;
      }
      if (!/(.+)@(.+){2,}\.(.+){2,}/.test(this.form_email.old_email)) {
        this.error.old_email = "Wrong email format!";
        flag = 0;
      }

      if (
        !this.form_email.email ||
        this.form_email.email.trim() == "" ||
        this.form_email.email == null
      ) {
        this.error.email = "Email Can not be empty!";
        flag = 0;
      }
      if (!/(.+)@(.+){2,}\.(.+){2,}/.test(this.form_email.email)) {
        this.error.email = "Wrong email format!";
        flag = 0;
      }
      if (flag == 0) return;
      this.form_email.user_id = this.authInfo.id;
      this.loading = true;
      const res = await this.callApi(
        "post",
        "/sendEmailChangeRequest",
        this.form_email
      );
      if (res.status == 200) {
        this.i(
          "An email change request has been sent to the admin , please wait for admin aproval!"
        );
        this.email_request = res.data.data;
      } else if (res.status == 403) {
        this.e(res.data.message);
      } else if (res.status == 401) {
        this.e(res.data.message);
      } else {
        this.swr();
      }
      this.loading = false;
    },
    async sendEmailVerificationCode() {
      this.clearData();
      let flag = 1;
      if (
        !this.form_email.old_email ||
        this.form_email.old_email.trim() == "" ||
        this.form_email.old_email == null
      ) {
        this.error.old_email = "Old email Can not be empty!!";
        flag = 0;
      }
      if (!/(.+)@(.+){2,}\.(.+){2,}/.test(this.form_email.old_email)) {
        this.error.old_email = "Wrong email format!";
        flag = 0;
      }

      if (
        !this.form_email.email ||
        this.form_email.email.trim() == "" ||
        this.form_email.email == null
      ) {
        this.error.email = "Email Can not be empty!";
        flag = 0;
      }
      if (!/(.+)@(.+){2,}\.(.+){2,}/.test(this.form_email.email)) {
        this.error.email = "Wrong email format!";
        flag = 0;
      }
      if (flag == 0) return;
      this.form_email.id = this.authInfo.id;
      this.loading = true;
      const res = await this.callApi(
        "post",
        "/sendMailUserNewEmail",
        this.form_email
      );
      if (res.status == 200) {
        this.i(
          "Email verification code has been sent to your new email address  "
        );
        this.form_email.isTokenSent = true;
      } else if (res.status == 403) {
        this.e(res.data.message);
      } else if (res.status == 401) {
        this.e(res.data.message);
      } else {
        this.swr();
      }
      this.loading = false;
    },
    async updateEmail() {
      this.clearData();
      let flag = 1;
      if (
        !this.form_email.emailVerifedToken ||
        this.form_email.emailVerifedToken.trim() == "" ||
        this.form_email.emailVerifedToken == null
      ) {
        this.error.emailVerifedToken = "Verification code Can not be empty!!";
        flag = 0;
      }
      if (flag == 0) return;
      this.form_email.id = this.authInfo.id;
      this.loading = true;
      const res = await this.callApi("post", "/updateEmail", this.form_email);
      if (res.status == 200) {
        this.i("You email has been updated, Please login with new Email");
        await this.callApi("get", "/logout");

        window.location = "/login";
        this.form_email.isTokenSent = true;
      } else if (res.status == 403) {
        this.e(res.data.message);
      } else if (res.status == 401) {
        this.e(res.data.message);
      } else {
        this.swr();
      }
      this.loading = false;
    },

     handleSuccess(res, file) {
        this.errorProject.file = false;
        this.errorText = "";
        this.form.image =res;
        this.$set(this.form,'image',res) 
    },
   async handleRemove() {
        var url = this.form.image;
        var get_id =url.split(`${this.apiUrl}uploads`);
        var imgName = get_id[get_id.length-1]
        const res = await this.callApi('post', '/profile_image_delete', {imageName: imgName,url})
        if(res.status==200){
                  if(res.data.data){
                      this.$store.commit("setAuthInfo",{image:res.data.data});
                  } 
                  this.$set(this.form,'image',this.authInfo.image);
        }
        else{
          this.swr()
        }
    },
    handleFormatError(file) {
    this.isUploadError = true;
    this.uploadErrorText =
        "Supported files types: .JPG .PNG .JPEG .GIF .doc .docx .pdf";
    },
    handleMaxSize(file) {
        if (file) {
            this.$Notice.warning({
            title: "Exceeding file size limit",
            desc: "File  " + file.name + " is too large, no more than 20Mb.",
            });
        }
    },
   viewImage(){
        this.imageModal=true
    },
    handleProgress(event, file, fileList) {
        this.isUploadError = false;
        this.uploadErrorText = "";
        //this.form.image = file.response;
        this.$set(this.form,'image',file.response) 
    },

    clearData() {
      this.error = {
        firstname: "",
        lastname: "",
        email: "",
        old_email: "",
        emailVerifedToken: "",
        address: "",
        phone: "",
        postcode: "",
        city: "",
        country: "",
        agent_type: "",
        password: "",
        old_password: "",
        cpassword: "",
        rrs: "",
      };
    },
  },

  async asyncData({ app, store, redirect, query }) {
    try {
      var form = {
        id: store.state.authInfo.id,
        firstname: store.state.authInfo.firstname,
        lastname: store.state.authInfo.lastname,
        address: store.state.authInfo.address,
        phone: store.state.authInfo.phone,
        postcode: store.state.authInfo.postcode,
        city: store.state.authInfo.city,
        country: store.state.authInfo.country,
        image: store.state.authInfo.image,
      };
      const res = await app.$axios.get("/getEmailRequest");
      var email_request = null;
      if (res.status == 200) {
        email_request = res.data;
      }
      return {
        form: form,
        email_request: email_request,
      };
    } catch (error) {
      console.log("ant-alert-error");
      console.log(error);
    }
  },
  created() {
    this.tabType = this.$route.query.tab ? this.$route.query.tab : "basic";
    if (this.email_request) {
      this.form_email.old_email = this.email_request.old_email;
      this.form_email.email = this.email_request.email;
    }
  },
};
</script>

<style scoped>
.demo-upload-list{
    display: inline-block;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    position: relative;
    box-shadow: 0 1px 1px rgba(0,0,0,.2);
    margin-right: 4px;
}
.demo-upload-list img{
    width: 100%;
    height: 100%;
}
.demo-upload-list-cover{
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,.6);
}
.demo-upload-list:hover .demo-upload-list-cover{
    display: block;
}
.demo-upload-list-cover i{
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    margin: 0 2px;
}
</style>