<template>
    <div>
        <div class="main-content box-pad pb-40 mb-40">
            <div class="_form box p-20">
                <div class="_1form_top">
                    <h2 class="_form_title">Direct Deposit Authorization (ACH)</h2>

                    <p class="_form_ach">ACH=Automated Clearing House</p>
                </div>

                <div class="_form_row">
                    <Form  label-position="top" class="iview_submit_form">
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
                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <FormItem label="Email" :error="errorData.email">
                                    <Input v-model="form.email" type="email" placeholder="Email"/>
                                </FormItem>
                            </div>

                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <FormItem :error="errorData.bankAccountName" label="Name(s) on Bank Account (business name if used)*">
                                    <Input v-model="form.bankAccountName" type="text" placeholder="Name"/>
                                </FormItem>

                                <img class="_form_img" src="" alt="" title="">
                            </div>

                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <p class="_text mb10">Upload Void Check or Bank Letterhead with Customer
                                Information Aculuding Routing and Account Number - Transactions and Balances may be blacked out for privacy</p>
                                
                                <FormItem label="Upload Void Check or Bank Letterhead" :error="errorData.file"> 
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
                                        v-if="!form.file"
                                        >
                                        <p icon="ios-cloud-upload-outline" ><Icon type="ios-cloud-upload" /> Upload files</p>
                                    </Upload>
                                     <div class="demo-upload-list" v-if="form.file">
                                        
                                        <img :src="form.file">
                                        <div class="demo-upload-list-cover">
                                            <Icon type="ios-eye-outline" @click.native="imgName=form.file,visible=true"></Icon>
                                            <Icon type="ios-trash-outline" @click="form.file=''"></Icon>
                                        </div>
                                    </div>
                                </FormItem>
                            </div>

                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <FormItem label="Routiong Number" :error="errorData.routiongNumber">
                                    <Input v-model="form.routiongNumber" type="text" placeholder="Routiong Number"/>
                                </FormItem>
                            </div>

                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <FormItem label="Account Number" :error="errorData.accountNumber">
                                    <Input v-model="form.accountNumber" type="text" placeholder="Account Number"/>
                                </FormItem>
                            </div>

                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <FormItem label="Bank Name" :error="errorData.bankName">
                                    <Input  v-model="form.bankName" type="text" placeholder="Bank Name"/>
                                </FormItem>
                            </div>

                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <FormItem label="Bank Branch" :error="errorData.branchName">
                                    <Input v-model="form.branchName" type="text" placeholder="Bank Branch"/>
                                </FormItem>
                            </div>

                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <FormItem label="Type of Bank Account" :error="errorData.bankAccountType">
                                    <!-- <Checkbox>Personal Checking</Checkbox> <br/>
                                    <Checkbox>Personal Saving</Checkbox> <br/>
                                    <Checkbox>Business Checking</Checkbox> <br/>
                                    <Checkbox>Business Saving</Checkbox> <br/>
                                    <Checkbox>Other</Checkbox> -->

                                      <RadioGroup v-model="form.bankAccountType"   vertical>
                                            <Radio label="Personal Checking">

                                                 <span>Personal Checking</span>
                                            </Radio>
                                            <Radio label="Personal Saving">
                                                 <span>Personal Saving</span>
                                            </Radio>
                                            <Radio label="Business Checking">
                                                 <span>Business Checking</span>
                                            </Radio>
                                            <Radio label="Other">
                                                 <span>Other</span>
                                            </Radio>
                                        </RadioGroup>
                                </FormItem>
                            </div>

                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <FormItem label="Bank Phone Number" :error="errorData.areaCode">
                                    <div class="bank_number_main">
                                        <div class="bank_number">
                                            <Input v-model="form.areaCode" type="text" placeholder="Area Code"/>
                                        </div>

                                        <span>-</span>

                                        <div class="phone_number">
                                            <Input v-model="form.phoneNumber" type="text" placeholder="Phone Number"/>
                                        </div>
                                    </div>
                                </FormItem>
                            </div>

                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <FormItem label="Date" :error="errorData.date">
                                    <DatePicker @on-change="getDate" v-model="form.date" type="date" placeholder="Select date" style="width: 100%"></DatePicker>
                                </FormItem>
                            </div>

                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <FormItem label="" :error="errorData.agree">
                                    <Checkbox v-model="form.agree" :trueValue="1" :falseValue="0"></Checkbox>
                                    I hereby authorize and direct Hombolt Inc. to deposit any and
                                     all future payments as they come due using electronic funds transfer to my account at the above finacial institution. I acknowledge that
                                    I will notify Homebolt Inc. of any change in the above account information.
                                    All the information provided
                                    to the best of my knowledge is accurate and abides by Federal and State law.
                                </FormItem>
                            </div>

                            <div class="col-xs-12 col-sm-12 col-md-12 _pb_50">
                                <FormItem label="Signature" :error="errorData.signature">
                                    <div class="_signature">
                                        <VueSignaturePad  class="_mb_20" width="100%" height="100%" ref="signaturePad" />
                                        <Button @click="undo">clear</Button>
                                        <!-- <div class="_signature"></div> -->
                                    </div>
                                </FormItem>
                            </div>

                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <FormItem label="Enter the message as it's shown">
                                    <!-- <div class="messshown"></div> -->
                                </FormItem>
                            </div>
                        </div>
                    </Form>
                    <div class="row">
                        <form ref="form" method="post" @submit.prevent="storeDiposte">
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
                </div>
            </div>
        </div>
        <Modal title="View Image" v-model="visible">
            <img :src="imgName" v-if="visible" style="width: 100%">
        </Modal>             
    </div>
</template>
<script>
export default {
      name: 'MySignaturePad',
    data(){
        return{
            isVerify:false,
            visible: false,
            imgName:'',
            form:{
                firstName:'',
                lastName:'',
                email:'',
                bankAccountName:'',
                file:'',
                fileExtention:'',
                bankAccountType:'',
                accountNumber:'',
                routiongNumber:'',
                branchName:'',
                bankName:'',
                areaCode:'',
                phoneNumber:'',
                date:'',
                agree:'',
                signature:'',
            },
            errorData:{
                firstName:'',
                lastName:'',
                email:'',
                bankAccountName:'',
                file:'',
                bankAccountType:'',
                accountNumber:'',
                routiongNumber:'',
                branchName:'',
                bankName:'',
                areaCode:'',
                phoneNumber:'',
                date:'',
                agree:'',
                signature:'',
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
        clearData() {
            this.$refs.signaturePad.clearSignature()
            this.form={
                firstName:'',
                lastName:'',
                email:'',
                bankAccountName:'',
                file:'',
                bankAccountType:'',
                accountNumber:'',
                routiongNumber:'',
                branchName:'',
                bankName:'',
                areaCode:'',
                phoneNumber:'',
                date:'',
                agree:'',
                signature:'',
            }
        },
        clearError() {
            this.errorData={
                firstName:'',
                lastName:'',
                email:'',
                bankAccountName:'',
                file:'',
                bankAccountType:'',
                accountNumber:'',
                routiongNumber:'',
                branchName:'',
                bankName:'',
                areaCode:'',
                phoneNumber:'',
                date:'',
                agree:'',
                signature:'',
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
            if (this.form.bankAccountName.trim() == "" || this.form.bankAccountName == null ) {
                this.errorData.bankAccountName = "This field is required!";
                check = false;
            }
         
            if (this.form.bankAccountType.trim() == "" || this.form.bankAccountType == null ) {
                this.errorData.bankAccountType = "This field is required!";
                check = false;
            }
            if (this.form.accountNumber.trim() == "" || this.form.accountNumber == null ) {
                this.errorData.accountNumber = "This field is required!";
                check = false;
            }
            if (this.form.routiongNumber.trim() == "" || this.form.routiongNumber == null ) {
                this.errorData.routiongNumber = "This field is required!";
                check = false;
            }
            if (this.form.branchName.trim() == "" || this.form.branchName == null ) {
                this.errorData.branchName = "This field is required!";
                check = false;
            }
            if (this.form.bankName.trim() == "" || this.form.bankName == null ) {
                this.errorData.bankName = "This field is required!";
                check = false;
            }
            if (this.form.areaCode.trim() == "" || this.form.areaCode == null ) {
                this.errorData.areaCode = "This field is required!";
                check = false;
            }
            if (this.form.phoneNumber.trim() == "" || this.form.phoneNumber == null ) {
                this.errorData.areaCode = "This field is required!";
                check = false;
            }
            
            if (this.form.date == "" || this.form.date == null ) {
                this.errorData.date = "This field is required!";
                check = false;
            }
            if (this.form.agree == "" || this.form.agree == null ) {
                this.errorData.agree = "This field is required!";
                check = false;
            }
     

            return check;
        },
            undo() {
            //   this.$refs.signaturePad.undoSignature();
            this.$refs.signaturePad.clearSignature()
            },
            save() {
            const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
            // this.form = this.form

            console.log(this.form);
            console.log(isEmpty);
            console.log(data);
            },
        async storeDiposte(){
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
            const res = await this.callApi('post','/sales/createNewDiposite', this.form)
            if(res.status==200){
                this.s("New diposite form has been submited!!")
                this.clearError();
                this.clearData();
                await this.$recaptcha.reset()
                this.$router.push(`form1/${res.data.id}`);
            }
            else if (res.status == 401) {
                this.e(res.data.message);
            } 
            else if (res.status == 403) {
                this.e(res.data.message);
            } 
            else this.swr()
            
        },
        async getDate(e){
            this.form.date =e
        },
    handleSuccess(res, file) {
        this.errorData.file = '';
        this.form.file =res.upFile;
        this.form.fileExtention =res.type;
        this.$set(this.form,'file',res.upFile) 
        this.$set(this.form,'fileExtention',res.type) 
    },
    handleFormatError(file) {
        this.errorData.file =
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
        console.log(file ," main")
        this.errorData.file = '';
        if(file.response){

            this.$set(this.form,'file',file.response.upFile) 
            this.$set(this.form,'fileExtention',file.response.type) 
        }
    },
    },
    created(){
        console.log(this.apiUrl)
        console.log("dsjfkjlsdljj")
    },
async asyncData({context,app,redirect}) {
      try {
            const [res1] = await Promise.all([
                app.$axios.get(`/sales/getDepositeByUser`),
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
    if (process.server) {
      const req = context.req
      const headers = (req && req.headers) ? Object.assign({}, req.headers) : {}
      const xForwardedFor = headers['x-forwarded-for']      
      const xRealIp = headers['x-real-ip']
      console.log(xForwardedFor)
      console.log(xRealIp)
    }
  }
}
</script>

<style>
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