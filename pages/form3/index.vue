<template>
    <div>
        <div class="main-content box-pad pb-40 mb-40">
            <div class="_form box p-20">
                <div class="_form_image">
                    <img src="/images/HomboltBannetEle.png" alt="" title="">
                </div>

                <div class="_1form_top">
                    <h2 class="_form_title">Hombolt Inc. On-Boarding Application</h2>
                </div>

                <div class="_form_row">
                    <Form   label-position="top">
                        <div class="row">
                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <FormItem label="First Name" :error="errorData.firstName">
                                    <Input v-model="form.firstName" type="text" placeholder="First Name"/>
                                </FormItem>
                            </div>

                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <FormItem label="Last Name" :error="errorData.lastName">
                                    <Input v-model="form.lastName" type="text" placeholder="Last Name"/>
                                </FormItem>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <FormItem label="Birthday Date" :error="errorData.birthDay">
                                    <DatePicker @on-change="getDate" v-model="form.birthDay" type="date" placeholder="Select date" style="width: 100%"></DatePicker>
                                </FormItem>
                            </div>

                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <FormItem label="Social Security Number:" :error="errorData.socialSecurityNumber">
                                    <Input v-model="form.socialSecurityNumber" type="number" placeholder="Enter Numbers Only"/>
                                </FormItem>
                            </div>

                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <FormItem label="Bank Phone Number">
                                    <div class="bank_number_main">
                                        <div class="bank_number">
                                            <FormItem label="" :error="errorData.areaCode">
                                                 <Input v-model="form.areaCode" type="text" placeholder="Area Code"/>
                                            </FormItem>
                                        </div>

                                        <span>-</span>

                                        <div class="phone_number">
                                             <FormItem label="" :error="errorData.phoneNumber">
                                                    <Input v-model="form.phoneNumber" type="text" placeholder="Phone Number"/>
                                             </FormItem>
                                        </div>
                                    </div>
                                </FormItem>
                            </div>

                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <FormItem label="E-mail Address:" :error="errorData.email">
                                    <Input  v-model="form.email" type="text" placeholder="example@example.com This is used to create your Work Email Address. We will send Login Instructions to this Email Address!"/>
                                </FormItem>
                            </div>

                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <FormItem label="Adress">
                                    <div class="row2">
                                        <div class="col-xs-12 col-sm-12 col-md-12 pb-25">
                                            <FormItem label="" :error="errorData.address1">
                                                 <Input  v-model="form.address1"  type="text" placeholder="Present adress"/>
                                            </FormItem>
                                        </div>
                                        <div class="col-xs-12 col-sm-12 col-md-12 pb-25">
                                            <FormItem label="" :error="errorData.address2">
                                                <Input v-model="form.address2" type="text" placeholder="Street Address Line 2"/>
                                            </FormItem>
                                        </div>
                                        <div class="col-xs-12 col-sm-6 col-md-6 pb-25">
                                             <FormItem label="" :error="errorData.city">
                                                  <Input v-model="form.city" type="text" placeholder="City"/>
                                             </FormItem>
                                        </div>
                                        <div class="col-xs-12 col-sm-6 col-md-6 pb-25">
                                            <FormItem label="" :error="errorData.state">
                                              <Input v-model="form.state" type="text" placeholder="State / Province"/>
                                            </FormItem>
                                        </div>
                                        <div class="col-xs-12 col-sm-12 col-md-12 pb-25">
                                              <FormItem label="" :error="errorData.postCode">
                                                  <Input v-model="form.postCode" type="text" placeholder="Postal / Zip Code"/>
                                              </FormItem>
                                        </div>
                                    </div>
                                </FormItem>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <FormItem label="Are You A United States Citizen?" :error="errorData.citizen">
                                      <RadioGroup v-model="form.citizen"   vertical>
                                            <Radio label="Yes">
                                                 <span>Yes</span>
                                            </Radio>
                                            <Radio label="No">
                                                 <span>No</span>
                                            </Radio>
                                            <Radio label="Permanent Resident">
                                                 <span>Permanent Resident</span>
                                            </Radio>
                                        </RadioGroup>

                                </FormItem>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <FormItem label="Are You Licensed In Life, Health, and Accident?" :error="errorData.licensedTaken">
                                         <RadioGroup v-model="form.licensedTaken"   vertical>
                                            <Radio label="Life, Health, And Accident">
                                                 <span>Life, Health, And Accident</span>
                                            </Radio>
                                            <Radio label="Health Only">
                                                 <span>Health Only</span>
                                            </Radio>
                                            <Radio label="Not Licensed">
                                                 <span>Not Licensed</span>
                                            </Radio>
                                        </RadioGroup>
                                </FormItem>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <FormItem label="Drivers License State *" :error="errorData.drivingLicensedState">
                                    <Select style="width:100%" v-model="form.drivingLicensedState">
                                             <Option value=""></Option>
                                            <Option value="Alabama"> Alabama </Option>
                                            <Option value="Alaska"> Alaska </Option>
                                            <Option value="Arizona"> Arizona </Option>
                                            <Option value="Arkansas"> Arkansas </Option>
                                            <Option value="California"> California </Option>
                                            <Option value="Colorado"> Colorado </Option>
                                            <Option value="Connecticut"> Connecticut </Option>
                                            <Option value="Delaware"> Delaware </Option>
                                            <Option value="District of Columbia"> District of Columbia </Option>
                                            <Option value="Florida"> Florida </Option>
                                            <Option value="Georgia"> Georgia </Option>
                                            <Option value="Hawaii"> Hawaii </Option>
                                            <Option value="Idaho"> Idaho </Option>
                                            <Option value="Illinois"> Illinois </Option>
                                            <Option value="Indiana"> Indiana </Option>
                                            <Option value="Iowa"> Iowa </Option>
                                            <Option value="Kansas"> Kansas </Option>
                                            <Option value="Kentucky"> Kentucky </Option>
                                            <Option value="Louisiana"> Louisiana </Option>
                                            <Option value="Maine"> Maine </Option>
                                            <Option value="Maryland"> Maryland </Option>
                                            <Option value="Massachusetts"> Massachusetts </Option>
                                            <Option value="Michigan"> Michigan </Option>
                                            <Option value="Minnesota"> Minnesota </Option>
                                            <Option value="Mississippi"> Mississippi </Option>
                                            <Option value="Missouri"> Missouri </Option>
                                            <Option value="Montana"> Montana </Option>
                                            <Option value="Nebraska"> Nebraska </Option>
                                            <Option value="Nevada"> Nevada </Option>
                                            <Option value="New Hampshire"> New Hampshire </Option>
                                            <Option value="New Jersey"> New Jersey </Option>
                                            <Option value="New Mexico"> New Mexico </Option>
                                            <Option value="New York"> New York </Option>
                                            <Option value="North Carolina"> North Carolina </Option>
                                            <Option value="North Dakota"> North Dakota </Option>
                                            <Option value="Ohio"> Ohio </Option>
                                            <Option value="Oklahoma"> Oklahoma </Option>
                                            <Option value="Oregon"> Oregon </Option>
                                            <Option value="Pennsylvania"> Pennsylvania </Option>
                                            <Option value="Puerto Rico"> Puerto Rico </Option>
                                            <Option value="Rhode Island"> Rhode Island </Option>
                                            <Option value="South Carolina"> South Carolina </Option>
                                            <Option value="South Dakota"> South Dakota </Option>
                                            <Option value="Tennessee"> Tennessee </Option>
                                            <Option value="Texas"> Texas </Option>
                                            <Option value="Utah"> Utah </Option>
                                            <Option value="Vermont"> Vermont </Option>
                                            <Option value="Virgin Islands"> Virgin Islands </Option>
                                            <Option value="Virginia"> Virginia </Option>
                                            <Option value="Washington"> Washington </Option>
                                            <Option value="West Virginia"> West Virginia </Option>
                                            <Option value="Wisconsin"> Wisconsin </Option>
                                            <Option value="Wyoming"> Wyoming </Option>
                                    </Select>
                                </FormItem>
                            </div>

                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <FormItem label="Drivers License Number:" :error="errorData.drivingLicensedNumber">
                                    <Input v-model="form.drivingLicensedNumber" type="text" placeholder="Drivers License Number:"/>
                                </FormItem>
                            </div>

                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <FormItem label="If Licensed, Upload Copy of Resident State License!" :error="errorData.licenseCopy">
                                   
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
                                        :action="`${apiUrl}profile_upload1`"
                                        v-if="!form.licenseCopy"
                                        >
                                        <p  icon="ios-cloud-upload-outline" ><Icon type="ios-cloud-upload" /> Upload files</p>
                                    </Upload>
                                    <template v-if="form.licenseCopy">
                                        <!-- {{licenseCopyExtention}} -->
                                        <span class="demo-upload-list" v-if="form.licenseCopyExtention=='jpg' || form.licenseCopyExtention=='png' || form.licenseCopyExtention=='jpeg'">
                                            <img :src="form.licenseCopy">
                                            <div class="demo-upload-list-cover">
                                                <Icon type="ios-eye-outline" @click.native="imgName=form.licenseCopy,visible=true"></Icon>
                                                <Icon type="ios-trash-outline" @click="form.licenseCopy=''"></Icon>
                                            </div>
                                        </span>
                                        <span v-else class="demo-upload_doc">
                                            <P>{{form.licenseCopy}}</P>
                                            <Icon type="md-close" @click="form.licenseCopy=''"/>
                                        </span>
                                    </template>
                                </FormItem>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <FormItem label="Have you completed your 4 hour Annuity Training? " :error="errorData.training">
                                    <RadioGroup v-model="form.training"   vertical>
                                            <Radio label="Yes">
                                                 <span>Yes</span>
                                            </Radio>
                                            <Radio label="No">
                                                 <span>No</span>
                                            </Radio>
                                        </RadioGroup>
                                </FormItem>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <FormItem label="Do you have Errors and Omissions Insurance? (At least 1 Million / 1 Million) *" :error="errorData.omissionsInsuranc">
                                       <RadioGroup v-model="form.omissionsInsuranc"   vertical>
                                            <Radio label="Yes">
                                                 <span>Yes</span>
                                            </Radio>
                                            <Radio label="No">
                                                 <span>No</span>
                                            </Radio>
                                        </RadioGroup>
                                </FormItem>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <FormItem label="If Yes, Please Upload Certificate!" :error="errorData.certificate">
                                     <Upload
                                        ref="upload"
                                        :show-upload-list="false"
                                        :format="['jpg','jpeg','png', 'pdf', 'doc', 'docx', 'gif', 'txt']"
                                        :max-size="20480"
                                        :on-success="handleSuccess1"
                                        :on-format-error="handleFormatError1"
                                        :on-exceeded-size="handleMaxSize1"
                                        :on-progress="handleProgress1"
                                        multiple
                                        type="drag"
                                        :action="`${apiUrl}profile_upload1`"
                                        v-if="!form.certificate"
                                        >
                                        <p  icon="ios-cloud-upload-outline" ><Icon type="ios-cloud-upload" /> Upload files</p>
                                    </Upload>
                                    <!-- <P v-if="form.certificate">{{form.certificate}}</P>
                                    <Icon v-if="form.certificate" type="ios-trash" @click="form.certificate=''" /> -->
                                     <template v-if="form.certificate">
                                        <div class="demo-upload-list" v-if="form.certificateExtention=='jpg' || form.certificateExtention=='png' || form.certificateExtention=='jpeg'">
                                            <img :src="form.certificate">
                                            <div class="demo-upload-list-cover">
                                                <Icon type="ios-eye-outline" @click.native="imgName=form.certificate,visible=true"></Icon>
                                                <Icon type="ios-trash-outline" @click="form.certificate=''"></Icon>
                                            </div>
                                        </div>
                                        <div v-else class="demo-upload_doc">
                                            <P v-if="form.certificate">{{form.certificate}}</P>
                                            <Icon type="md-close" v-if="form.certificate" @click="form.certificate=''"/>
                                        </div>
                                    </template>
                                </FormItem>
                            </div>

                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <FormItem label="Have you been convicted of a Felony? *" :error="errorData.convicted">
                                    <Select style="width:100%" v-model="form.convicted">
                                        <Option value="Yes">Yes</Option>
                                        <Option value="No">No</Option>
                                        <Option value="Pending">Pending</Option>
                                    </Select>
                                </FormItem>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <FormItem label="If Yes or Pending, Please Explain:" :error="errorData.explanation">
                                    <Input v-model="form.explanation" type="textarea" :autosize="{minRows: 4,maxRows: 7}" placeholder="Enter something..."/>
                                </FormItem>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-12 _mb_50 _radio">
                                <FormItem label="How were you referred to us?" :error="errorData.referred">
                                    <div class="row2">
                                        <div class="col-xs-12 col-sm-6 col-md-6">
                                            <RadioGroup v-model="form.referred"   vertical>
                                                <Radio label="Walk-In">
                                                    <span>Walk-In</span>
                                                </Radio>
                                                <Radio label="Newspaper Ad">
                                                    <span>Newspaper Ad</span>
                                                </Radio>
                                                <Radio label="Twitter">
                                                    <span>Twitter</span>
                                                </Radio>
                                                <Radio label="Other">
                                                    <span>Other</span>
                                                </Radio>
                                            </RadioGroup>
                                        </div>
                                        <div class="col-xs-12 col-sm-6 col-md-6">
                                                 <RadioGroup v-model="form.referred"   vertical>
                                                <Radio label="Employee">
                                                    <span>Employee</span>
                                                </Radio>
                                                <Radio label="Facebook">
                                                    <span>Facebook</span>
                                                </Radio>
                                                <Radio label="Craigslist">
                                                    <span>Craigslist</span>
                                                </Radio>
                                            </RadioGroup>
                                        </div>
                                    </div>
                                </FormItem>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <p class="_text2 _mb_15">Hombolt Inc. Has A Recruiting Model That Allows Agents To Profit Based On Who They Bring To The Table For A Phone Interview! (Regardless Of Level, Amount Of Agents Individual Is Brining, And/Or The Amount Of Experience)  Please Type In The Agents Name That Spoke With You To Join Our Team!  If No Agent Spoke With You Or You Are Being Recruited By The Local Manager, Please Type "None".</p>
                                <p class="_text2 _mb_15">Disclaimer: Any actions against Hombolt Inc. in which this system is used by applying Agent or Active Agent / Producer in Bad Faith will result in the immediate discontinuation of quarterly profits along with the potential of termination.  Once violation has occured, Hombolt Inc. will come to a decision based on facts presented within a 3 month period.  If during that time there is a profit to be given, it will be put in an escrow account (hold status) until a decision has been made.  (Will be evaluated on a case by case basis).</p>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <FormItem label="Name Of Hombolt Inc. Agent or Local Manager! *" :error="errorData.manager">
                                    <Input v-model="form.manager"  type="text" placeholder="Read Above! (N/A If None)"/>
                                </FormItem>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <FormItem label="Training or Certifications:" :error="errorData.certificationsDetails">
                                    <Input v-model="form.certificationsDetails" type="textarea" :autosize="{minRows: 4,maxRows: 7}" placeholder="All Licensed You Currently Hold"/>
                                </FormItem>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <FormItem label="Upload Resume:" :error="errorData.extraFile">
                                     <Upload
                                        ref="upload"
                                        :show-upload-list="false"
                                        :format="['jpg','jpeg','png', 'pdf', 'doc', 'docx', 'gif', 'txt']"
                                        :max-size="20480"
                                        :on-success="handleSuccess2"
                                        :on-format-error="handleFormatError2"
                                        :on-exceeded-size="handleMaxSize2"
                                        :on-progress="handleProgress2"
                                        multiple
                                        type="drag"
                                        :action="`${apiUrl}profile_upload1`"
                                        v-if="!form.extraFile"
                                        >
                                        <p icon="ios-cloud-upload-outline" ><Icon type="ios-cloud-upload" /> Upload files</p>
                                    </Upload>
                                       <!-- <P v-if="form.extraFile">{{form.extraFile}}</P>
                                    <Icon v-if="form.extraFile" type="ios-trash" @click="form.extraFile=''" /> -->
                                    <template v-if="form.extraFile">
                                        <div class="demo-upload-list" v-if="form.extraFileExtention=='jpg' || form.extraFileExtention=='png' || form.extraFileExtention=='jpeg'">
                                            <img :src="form.extraFile">
                                            <div class="demo-upload-list-cover">
                                                <Icon type="ios-eye-outline" @click.native="imgName=form.extraFile,visible=true"></Icon>
                                                <Icon type="ios-trash-outline" @click="form.extraFile=''"></Icon>
                                            </div>
                                        </div>
                                        <div v-else class="demo-upload_doc">
                                            <P v-if="form.extraFile">{{form.extraFile}}</P>
                                            <Icon type="md-close" v-if="form.extraFile" @click="form.extraFile=''"/>
                                        </div>
                                    </template>
                                </FormItem>
                            </div>

                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <h3 class="">Education</h3>

                                <p class="_text2 _mb_20"> Inc. Does Not Require A College Degree For Employment Consideration.</p>
                            </div>

                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <FormItem label="Name Of: University / College / Technical School"  :error="errorData.universityName">
                                    <Input v-model="form.universityName" type="text" placeholder=""/>
                                </FormItem>
                            </div>

                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <FormItem label="City:" :error="errorData.universityCity">
                                    <Input v-model="form.universityCity" type="text" placeholder=""/>
                                </FormItem>
                            </div>

                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <FormItem label="State:" :error="errorData.universityState">
                                   <Select style="width:100%" v-model="form.universityState">
                                            <Option value=""></Option>
                                            <Option value="Alabama"> Alabama </Option>
                                            <Option value="Alaska"> Alaska </Option>
                                            <Option value="Arizona"> Arizona </Option>
                                            <Option value="Arkansas"> Arkansas </Option>
                                            <Option value="California"> California </Option>
                                            <Option value="Colorado"> Colorado </Option>
                                            <Option value="Connecticut"> Connecticut </Option>
                                            <Option value="Delaware"> Delaware </Option>
                                            <Option value="District of Columbia"> District of Columbia </Option>
                                            <Option value="Florida"> Florida </Option>
                                            <Option value="Georgia"> Georgia </Option>
                                            <Option value="Hawaii"> Hawaii </Option>
                                            <Option value="Idaho"> Idaho </Option>
                                            <Option value="Illinois"> Illinois </Option>
                                            <Option value="Indiana"> Indiana </Option>
                                            <Option value="Iowa"> Iowa </Option>
                                            <Option value="Kansas"> Kansas </Option>
                                            <Option value="Kentucky"> Kentucky </Option>
                                            <Option value="Louisiana"> Louisiana </Option>
                                            <Option value="Maine"> Maine </Option>
                                            <Option value="Maryland"> Maryland </Option>
                                            <Option value="Massachusetts"> Massachusetts </Option>
                                            <Option value="Michigan"> Michigan </Option>
                                            <Option value="Minnesota"> Minnesota </Option>
                                            <Option value="Mississippi"> Mississippi </Option>
                                            <Option value="Missouri"> Missouri </Option>
                                            <Option value="Montana"> Montana </Option>
                                            <Option value="Nebraska"> Nebraska </Option>
                                            <Option value="Nevada"> Nevada </Option>
                                            <Option value="New Hampshire"> New Hampshire </Option>
                                            <Option value="New Jersey"> New Jersey </Option>
                                            <Option value="New Mexico"> New Mexico </Option>
                                            <Option value="New York"> New York </Option>
                                            <Option value="North Carolina"> North Carolina </Option>
                                            <Option value="North Dakota"> North Dakota </Option>
                                            <Option value="Ohio"> Ohio </Option>
                                            <Option value="Oklahoma"> Oklahoma </Option>
                                            <Option value="Oregon"> Oregon </Option>
                                            <Option value="Pennsylvania"> Pennsylvania </Option>
                                            <Option value="Puerto Rico"> Puerto Rico </Option>
                                            <Option value="Rhode Island"> Rhode Island </Option>
                                            <Option value="South Carolina"> South Carolina </Option>
                                            <Option value="South Dakota"> South Dakota </Option>
                                            <Option value="Tennessee"> Tennessee </Option>
                                            <Option value="Texas"> Texas </Option>
                                            <Option value="Utah"> Utah </Option>
                                            <Option value="Vermont"> Vermont </Option>
                                            <Option value="Virgin Islands"> Virgin Islands </Option>
                                            <Option value="Virginia"> Virginia </Option>
                                            <Option value="Washington"> Washington </Option>
                                            <Option value="West Virginia"> West Virginia </Option>
                                            <Option value="Wisconsin"> Wisconsin </Option>
                                            <Option value="Wyoming"> Wyoming </Option>
                                    </Select>
                                </FormItem>
                            </div>

                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <FormItem label="Major/Minor/Concentration Degree Earned" :error="errorData.universityDegreeEarned">
                                    <Input v-model="form.universityDegreeEarned" type="text" placeholder=""/>
                                </FormItem>
                            </div>

                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <FormItem label="Have you been convicted of a Felony? *" :error="errorData.universityConvicted">
                                    <RadioGroup v-model="form.universityConvicted"   vertical>
                                        <Radio label="Bachelor Degree">
                                            <span>Bachelor Degree</span>
                                        </Radio>
                                        <Radio label="Associate Degree">
                                            <span>Associate Degree</span>
                                        </Radio>
                                        <Radio label="Some College">
                                            <span>Some College</span>
                                        </Radio>
                                    </RadioGroup>
                                </FormItem>
                            </div>

                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <FormItem label="Year of Completion:" :error="errorData.yearOfCompletion">
                                    <DatePicker v-model="form.yearOfCompletion" type="year" placeholder="Select year" style="width: 100%"></DatePicker>
                                </FormItem>
                            </div>

                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <FormItem label="Advanced Education School:" :error="errorData.advancedEducation">
                                    <Input v-model="form.advancedEducation" type="text" placeholder="Please Add Name Of School and Type (Ex: MBA, PHD, JS)"/>
                                </FormItem>
                            </div>

                            <div class="col-xs-12 col-sm-6 col-md-6" >
                                <FormItem label="Major/Minor/Concentration Degree Earned" :error="errorData.advancedDegreeEarned">
                                    <Input  v-model="form.advancedDegreeEarned" type="text" placeholder=""/>
                                </FormItem>
                            </div>

                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <FormItem label="City" :error="errorData.advancedEducationCity">
                                    <Input v-model="form.advancedEducationCity" type="text" placeholder=""/>
                                </FormItem>
                            </div>

                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <FormItem label="State:" :error="errorData.advancedEducationState">
                                    <Select style="width:100%" v-model="form.advancedEducationState">
                                             <Option value=""></Option>
                                            <Option value="Alabama"> Alabama </Option>
                                            <Option value="Alaska"> Alaska </Option>
                                            <Option value="Arizona"> Arizona </Option>
                                            <Option value="Arkansas"> Arkansas </Option>
                                            <Option value="California"> California </Option>
                                            <Option value="Colorado"> Colorado </Option>
                                            <Option value="Connecticut"> Connecticut </Option>
                                            <Option value="Delaware"> Delaware </Option>
                                            <Option value="District of Columbia"> District of Columbia </Option>
                                            <Option value="Florida"> Florida </Option>
                                            <Option value="Georgia"> Georgia </Option>
                                            <Option value="Hawaii"> Hawaii </Option>
                                            <Option value="Idaho"> Idaho </Option>
                                            <Option value="Illinois"> Illinois </Option>
                                            <Option value="Indiana"> Indiana </Option>
                                            <Option value="Iowa"> Iowa </Option>
                                            <Option value="Kansas"> Kansas </Option>
                                            <Option value="Kentucky"> Kentucky </Option>
                                            <Option value="Louisiana"> Louisiana </Option>
                                            <Option value="Maine"> Maine </Option>
                                            <Option value="Maryland"> Maryland </Option>
                                            <Option value="Massachusetts"> Massachusetts </Option>
                                            <Option value="Michigan"> Michigan </Option>
                                            <Option value="Minnesota"> Minnesota </Option>
                                            <Option value="Mississippi"> Mississippi </Option>
                                            <Option value="Missouri"> Missouri </Option>
                                            <Option value="Montana"> Montana </Option>
                                            <Option value="Nebraska"> Nebraska </Option>
                                            <Option value="Nevada"> Nevada </Option>
                                            <Option value="New Hampshire"> New Hampshire </Option>
                                            <Option value="New Jersey"> New Jersey </Option>
                                            <Option value="New Mexico"> New Mexico </Option>
                                            <Option value="New York"> New York </Option>
                                            <Option value="North Carolina"> North Carolina </Option>
                                            <Option value="North Dakota"> North Dakota </Option>
                                            <Option value="Ohio"> Ohio </Option>
                                            <Option value="Oklahoma"> Oklahoma </Option>
                                            <Option value="Oregon"> Oregon </Option>
                                            <Option value="Pennsylvania"> Pennsylvania </Option>
                                            <Option value="Puerto Rico"> Puerto Rico </Option>
                                            <Option value="Rhode Island"> Rhode Island </Option>
                                            <Option value="South Carolina"> South Carolina </Option>
                                            <Option value="South Dakota"> South Dakota </Option>
                                            <Option value="Tennessee"> Tennessee </Option>
                                            <Option value="Texas"> Texas </Option>
                                            <Option value="Utah"> Utah </Option>
                                            <Option value="Vermont"> Vermont </Option>
                                            <Option value="Virgin Islands"> Virgin Islands </Option>
                                            <Option value="Virginia"> Virginia </Option>
                                            <Option value="Washington"> Washington </Option>
                                            <Option value="West Virginia"> West Virginia </Option>
                                            <Option value="Wisconsin"> Wisconsin </Option>
                                            <Option value="Wyoming"> Wyoming </Option>
                                    </Select>
                                </FormItem>
                            </div>

                            <div class="col-xs-12 col-sm-12 col-md-12 mt-30 mb-50">
                                <p class="_text2">Federal tax regulations require us to request an SSN from every applicant to whom if approved for employment will 
                                    receive compensation. Employee SSNs are maintained and used by Hombolt Inc. for payroll, to verify employment history, and are reported to Federal and State agencies on forms required by Law. Hombolt Inc. will not disclose your SSN without the consent of the employee to anyone outside Hombolt Inc. as mandated by law or as required for employment purposes. Failure to provide an SSN may result in the withdrawal of your application. To review Hombolt Inc. 
                                    Virtual Privacy Policy, please visit <a href="">https://www.hombolt.com/privacy-policy.</a></p>
                            </div>

                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <h3 class="">Signature</h3>

                                <p class="_text2 _mb_15">I certify that my answers are true and complete to the best of my knowledge.</p>

                                <p class="_text2 _mb_20">If this application leads to employment, I understand that false or misleading information in my application or interview may result in my release. This is my application as an Independent 1099 Contractor.</p>
                            </div>

                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <FormItem label="Please Print:">
                                    <div class="row2">
                                        <div class="col-xs-12 col-sm-6 col-md-6">
                                           <FormItem label="" :error="errorData.signatureFirstName">
                                                <Input v-model="form.signatureFirstName" type="text" placeholder="Frist Name"/>
                                           </FormItem>
                                        </div>
                                        <div class="col-xs-12 col-sm-6 col-md-6">
                                             <FormItem label="" :error="errorData.signatureLastName">
                                                <Input v-model="form.signatureLastName" type="text" placeholder="Last Name"/>
                                             </FormItem>
                                        </div>
                                    </div>
                                </FormItem>
                            </div>
                            
                            <div class="col-xs-12 col-sm-12 col-md-12 _pb_50">
                                <FormItem label="Signature" :error="errorData.signature">
                                    <div class="_signature">
                                        <VueSignaturePad class="_mb_20" width="100%" height="100%" ref="signaturePad" />
                                        <Button @click="undo">clear</Button>
                                        <!-- <div class="_signature"></div> -->
                                    </div>
                                </FormItem>
                            </div>

                            <div class="col-xs-12 col-sm-12 col-md-12 _pb_20">
                                <FormItem label="Date (Signed):" :error="errorData.signatureDate">
                                    <DatePicker  v-model="form.signatureDate" @click="getDate1" type="date" placeholder="Select date" style="width: 100%"></DatePicker>
                                </FormItem>
                            </div>

                            <!-- <div class="col-xs-12 col-sm-12 col-md-12">
                                <FormItem label="Please verify that you are human ">
                                    <div class="messshown"></div>
                                </FormItem>
                            </div>

                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <Button type="primary">Submit</Button>
                            </div> -->
                        </div>
                    </Form>

                    <div class="row">
                        <form ref="form" method="post" @submit.prevent="storeBoardingApplication">
                            <div class="col-xs-12 col-sm-12 col-md-12 _pb_50">
                                <recaptcha @error="onError" @success="onSuccess" @expired="onExpired" />
                                <Alert v-if="isVerify" type="error" >Please verify that you are not a robot!</Alert>
                            </div>

                            <div class="col-xs-12 col-sm-12 col-md-12">
                                    <!-- <Button  type="primary" @click="storeDiposte">Submit</Button> -->
                                    <button type="submit" class="ivu-btn ivu-btn-primary" >Submit Form</button>
                                <!-- <Button type="primary" class="ml-10">Print Form</Button> -->
                            </div>
                        </form>
                    </div>
                    <Modal title="View Image" v-model="visible">
                        <img :src="imgName" v-if="visible" style="width: 100%">
                    </Modal>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){


        return{
            isVerify:false,
            visible: false,
             form:{
                firstName:'',
                lastName:'',
                birthDay:'',
                socialSecurityNumber:'',
                areaCode:'',
                phoneNumber:'',
                email:'',
                address1:'',
                address2:'',
                city:'',
                state:'',
                postCode:'',
                citizen:'',
                licensedTaken:'',
                drivingLicensedState:'',
                drivingLicensedNumber:'',
                licenseCopy:'',
                licenseCopyExtention:'',
                training:'',
                omissionsInsuranc:'',
                certificate:'',
                certificateExtention:'',
                convicted:'',
                explanation:'',
                referred:'',
                manager:'',
                certificationsDetails:'',
                extraFile:'',
                extraFileExtention:'',
                universityName:'',
                universityCity:'',
                universityState:'',
                universityDegreeEarned:'',
                universityConvicted:'',
                yearOfCompletion:'',
                advancedEducation:'',
                advancedDegreeEarned:'',
                advancedEducationCity:'',
                advancedEducationState:'',
                signatureFirstName:'',
                signatureLastName:'',
                signature:'',
                signatureDate:'',
            },
             errorData:{
                firstName:'',
                lastName:'',
                birthDay:'',
                socialSecurityNumber:'',
                areaCode:'',
                phoneNumber:'',
                email:'',
                address1:'',
                address2:'',
                city:'',
                state:'',
                postCode:'',
                citizen:'',
                licensedTaken:'',
                drivingLicensedState:'',
                drivingLicensedNumber:'',
                licenseCopy:'',
                training:'',
                omissionsInsuranc:'',
                certificate:'',
                convicted:'',
                explanation:'',
                referred:'',
                manager:'',
                certificationsDetails:'',
                extraFile:'',
                universityName:'',
                universityCity:'',
                universityState:'',
                universityDegreeEarned:'',
                universityConvicted:'',
                yearOfCompletion:'',
                advancedEducation:'',
                advancedDegreeEarned:'',
                advancedEducationCity:'',
                advancedEducationState:'',
                signatureFirstName:'',
                signatureLastName:'',
                signature:'',
                signatureDate:'',
            },
             reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
        }
    },
    methods:{
        onError(error) {
            console.log('Error happened:', error)
        },
        onSuccess(token) {
            console.log('Succeeded:', token)
            // here you submit the form
            //   this.$refs.form.submit()
        },
        onExpired() {
            console.log('Expired')
        },
        getDate(e){
            this.form.birthDay =e
        },
        getDate1(e){
            this.form.signatureDate =e
        },
        undo() {
        //   this.$refs.signaturePad.undoSignature();
         this.$refs.signaturePad.clearSignature()
        },
        clearData() {
            this.$refs.signaturePad.clearSignature()
            this.form={
                firstName:'',
                lastName:'',
                birthDay:'',
                socialSecurityNumber:'',
                areaCode:'',
                phoneNumber:'',
                email:'',
                address1:'',
                address2:'',
                city:'',
                state:'',
                postCode:'',
                citizen:'',
                licensedTaken:'',
                drivingLicensedState:'',
                drivingLicensedNumber:'',
                licenseCopy:'',
                training:'',
                omissionsInsuranc:'',
                certificate:'',
                convicted:'',
                explanation:'',
                referred:'',
                manager:'',
                certificationsDetails:'',
                extraFile:'',
                universityName:'',
                universityCity:'',
                universityState:'',
                universityDegreeEarned:'',
                universityConvicted:'',
                yearOfCompletion:'',
                advancedEducation:'',
                advancedDegreeEarned:'',
                advancedEducationCity:'',
                advancedEducationState:'',
                signatureFirstName:'',
                signatureLastName:'',
                signature:'',
                signatureDate:'',
            }
        },
        clearError() {
            this.errorData={
                firstName:'',
                lastName:'',
                birthDay:'',
                socialSecurityNumber:'',
                areaCode:'',
                phoneNumber:'',
                email:'',
                address1:'',
                address2:'',
                city:'',
                state:'',
                postCode:'',
                citizen:'',
                licensedTaken:'',
                drivingLicensedState:'',
                drivingLicensedNumber:'',
                licenseCopy:'',
                training:'',
                omissionsInsuranc:'',
                certificate:'',
                convicted:'',
                explanation:'',
                referred:'',
                manager:'',
                certificationsDetails:'',
                extraFile:'',
                universityName:'',
                universityCity:'',
                universityState:'',
                universityDegreeEarned:'',
                universityConvicted:'',
                yearOfCompletion:'',
                advancedEducation:'',
                advancedDegreeEarned:'',
                advancedEducationCity:'',
                advancedEducationState:'',
                signatureFirstName:'',
                signatureLastName:'',
                signature:'',
                signatureDate:'',
            }
        },

        checkFormValidation() {
             this.clearError();
            let check = true;
        
            if (this.form.firstName.trim() == "" || this.form.firstName == null ) {
                this.errorData.firstName = "This field is required!";
                check = false;
            }
            if (this.form.lastName.trim() == "" || this.form.lastName == null ) {
                this.errorData.lastName = "This field is required!";
                check = false;
            }
             if (this.form.email.trim() == "" || this.form.email == null ) {
                this.errorData.email = "This field is required!";
                check = false;
            }
                   if (this.form.socialSecurityNumber.trim() == "" || this.form.socialSecurityNumber == null ) {
                this.errorData.socialSecurityNumber = "This field is required!";
                check = false;
            }
            if (this.form.areaCode.trim() == "" || this.form.areaCode == null ) {
                this.errorData.areaCode = "This field is required!";
                check = false;
            }
            if (this.form.phoneNumber.trim() == "" || this.form.phoneNumber == null ) {
                this.errorData.phoneNumber = "This field is required!";
                check = false;
            }
            
            if (this.form.birthDay == "" || this.form.birthDay == null ) {
                this.errorData.birthDay = "This field is required!";
                check = false;
            }
          if (this.form.address1.trim() == "" || this.form.address1 == null ) {
                this.errorData.address1 = "This field is required!";
                check = false;
            }
              if (this.form.address2.trim() == "" || this.form.address2 == null ) {
                this.errorData.address2 = "This field is required!";
                check = false;
            }
          if (this.form.city.trim() == "" || this.form.city == null ) {
                this.errorData.city = "This field is required!";
                check = false;
            }
          if (this.form.state.trim() == "" || this.form.state == null ) {
                this.errorData.state = "This field is required!";
                check = false;
            }
          if (this.form.postCode.trim() == "" || this.form.postCode == null ) {
                this.errorData.postCode = "This field is required!";
                check = false;
            }
          if (this.form.citizen == "" || this.form.citizen == null ) {
              this.errorData.citizen = "This field is required!";
                check = false;
            }
          if (this.form.licensedTaken.trim() == "" || this.form.licensedTaken == null ) {
                this.errorData.licensedTaken = "This field is required!";
                check = false;
            }

                  if (this.form.drivingLicensedState.trim() == "" || this.form.drivingLicensedState == null ) {
                this.errorData.drivingLicensedState = "This field is required!";
                check = false;
            }
          if (this.form.drivingLicensedNumber.trim() == "" || this.form.drivingLicensedNumber == null ) {
                this.errorData.drivingLicensedNumber = "This field is required!";
                check = false;
           }
          if (this.form.licenseCopy.trim() == "" || this.form.licenseCopy == null ) {
                this.errorData.licenseCopy = "This field is required!";
                check = false;
           }
          if (this.form.training.trim() == "" || this.form.training == null ) {
                this.errorData.training = "This field is required!";
                check = false;
           }
          if (this.form.omissionsInsuranc.trim() == "" || this.form.omissionsInsuranc == null ) {
                this.errorData.omissionsInsuranc = "This field is required!";
                check = false;
           }
          if (this.form.certificate.trim() == "" || this.form.certificate == null ) {
                this.errorData.certificate = "This field is required!";
                check = false;
           }
          if (this.form.convicted.trim() == "" || this.form.convicted == null ) {
                this.errorData.convicted = "This field is required!";
                check = false;
           }
          if (this.form.explanation.trim() == "" || this.form.explanation == null ) {
                this.errorData.explanation = "This field is required!";
                check = false;
           }
          if (this.form.referred.trim() == "" || this.form.referred == null ) {
                this.errorData.referred = "This field is required!";
                check = false;
           }
          if (this.form.manager.trim() == "" || this.form.manager == null ) {
                this.errorData.manager = "This field is required!";
                check = false;
           }
             if (this.form.certificationsDetails.trim() == "" || this.form.certificationsDetails == null ) {
                this.errorData.certificationsDetails = "This field is required!";
                check = false;
           }
          if (this.form.extraFile.trim() == "" || this.form.extraFile == null ) {
                this.errorData.extraFile = "This field is required!";
                check = false;
           }
          if (this.form.universityName.trim() == "" || this.form.universityName == null ) {
                this.errorData.universityName = "This field is required!";
                check = false;
           }
          if (this.form.universityCity.trim() == "" || this.form.universityCity == null ) {
                this.errorData.universityCity = "This field is required!";
                check = false;
           }
          if (this.form.universityState.trim() == "" || this.form.universityState == null ) {
                this.errorData.universityState = "This field is required!";
                check = false;
           }
           if (this.form.universityDegreeEarned.trim() == "" || this.form.universityDegreeEarned == null ) {
                this.errorData.universityDegreeEarned = "This field is required!";
                check = false;
           }
          if (this.form.universityConvicted.trim() == "" || this.form.universityConvicted == null ) {
                this.errorData.universityConvicted = "This field is required!";
                check = false;
           }
         
          if (this.form.yearOfCompletion == "" || this.form.yearOfCompletion == null ) {
                this.errorData.yearOfCompletion = "This field is required!";
                check = false;
          }
        if (this.form.advancedEducation.trim() == "" || this.form.advancedEducation == null ) {
                this.errorData.advancedEducation = "This field is required!";
                check = false;
           }
          if (this.form.advancedDegreeEarned.trim() == "" || this.form.advancedDegreeEarned == null ) {
                this.errorData.advancedDegreeEarned = "This field is required!";
                check = false;
           }
          if (this.form.advancedEducationCity.trim() == "" || this.form.advancedEducationCity == null ) {
                this.errorData.advancedEducationCity = "This field is required!";
                check = false;
           }
          if (this.form.advancedEducationState.trim() == "" || this.form.advancedEducationState == null ) {
                this.errorData.advancedEducationState = "This field is required!";
                check = false;
           }
          if (this.form.signatureFirstName.trim() == "" || this.form.signatureFirstName == null ) {
                this.errorData.signatureFirstName = "This field is required!";
                check = false;
           }
          if (this.form.signatureLastName.trim() == "" || this.form.signatureLastName == null ) {
                this.errorData.signatureLastName = "This field is required!";
                check = false;
           }
     
   
          if (this.form.signatureDate == "" || this.form.signatureDate == null ) {
                this.errorData.signatureDate = "This field is required!";
                check = false;
           }
            return check;
        
            
        },


    async storeBoardingApplication(){
        let isOk = this.checkFormValidation()
         if(!isOk) return
         let token = null;
            
   

        if (!this.reg.test(this.form.email)) {
            this.errorData.email = "Email is invalid!!";
            return;
        }
        const { isEmpty, data } = this.$refs.signaturePad.saveSignature();


        if(isEmpty) return this.errorData.signature = "This field is required!";
        this.form.signature =data
        try {
            token = await this.$recaptcha.getResponse()
            console.log('ReCaptcha token:', token)
                this.isVerify = false
            
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log('Login error:')
            console.log('Login error:', error)
            this.isVerify = true
            return
        }
        this.form.token =token
         const res = await this.callApi('post','/sales/createNewBoardingApplication', this.form)
         if(res.status==200){
             this.s("New Boarding Application has been submited!!")
              this.clearError();
              this.clearData();
              this.$router.push(`form3/${res.data.id}`);
         }
         else if (res.status == 401) {
            this.e(res.data.message);
        } else this.swr()
     },

    //  upload method 0
        handleSuccess(res, file) {
        this.errorData.licenseCopy = '';
        this.form.licenseCopy =res.upFile;
        this.form.licenseCopyExtention =res.type;
    //     this.$set(this.form,'licenseCopy',res.upFile) 
    //     this.$set(this.form,'licenseCopyExtention',res.type) 
    },
    handleFormatError(file) {
        this.errorData.licenseCopy =
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
    handleProgress(event, file, fileList) {
        this.errorData.licenseCopy = '';
        this.$set(this.form,'licenseCopy',file.response.upFile) 
        this.$set(this.form,'licenseCopyExtention',file.response.type) 
    },
    //  upload method 0

    //  upload method 1
    handleSuccess1(res, file) {
        this.errorData.certificate = '';
        this.form.certificate =res.upFile;
        this.form.certificateExtention =res.type;
        this.$set(this.form,'certificate',res.upFile) 
        this.$set(this.form,'certificateExtention',res.type) 
    },
    handleFormatError1(file) {
        this.errorData.certificate =
            "Supported files types: .JPG .PNG .JPEG .GIF .doc .docx .pdf";
    },
    handleMaxSize1(file) {
        if (file) {
            this.$Notice.warning({
            title: "Exceeding file size limit",
            desc: "File  " + file.name + " is too large, no more than 20Mb.",
            });
        }
    },
    handleProgress1(event, file, fileList) {
        this.errorData.certificate = '';
        this.$set(this.form,'certificate',file.response.upFile) 
        this.$set(this.form,'certificateExtention',file.response.type) 
    },
    //  upload method 1
    //  upload method 2
    handleSuccess2(res, file) {
        this.errorData.extraFile = '';
        this.form.extraFile =res.upFile;
        this.form.extraFileExtention =res.type;
        this.$set(this.form,'extraFile',res.upFile) 
        this.$set(this.form,'extraFileExtention',res.type)
    },
    handleFormatError2(file) {
        this.errorData.extraFile =
            "Supported files types: .JPG .PNG .JPEG .GIF .doc .docx .pdf";
    },
    handleMaxSize2(file) {
        if (file) {
            this.$Notice.warning({
            title: "Exceeding file size limit",
            desc: "File  " + file.name + " is too large, no more than 20Mb.",
            });
        }
    },
    handleProgress2(event, file, fileList) {
        this.errorData.extraFile = '';
        this.$set(this.form,'extraFile',file.response.upFile) 
        this.$set(this.form,'extraFileExtention',file.response.type) 
    },
    //  upload method 1

    },
    async asyncData({context,app,redirect}) {
      try {
            const [res1] = await Promise.all([
                app.$axios.get(`/sales/getTexPayerByUser`),
            ]);
            if(res1.status == 200) {
                if(res1.data && res1.data.length==0){
                    
                }
                else return  redirect('/contracting')
            }
        } catch (error) {
            return  redirect('/contracting')
            console.log(error)
        }

  }
    
}
</script>
<style>
._radio .ivu-form-item-content {
  position: initial;
  height: 100%;
}
._radio .ivu-form-item-error-tip {
  bottom: -10px;
}
._radio .ivu-form-item {
    position: relative;
}
._radio{
  position: relative;
}
</style>