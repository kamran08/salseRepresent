<template>
	<div>
		<div class="_main_content">
			<div class="row">
                <div class="col-12 col-md-12 col-lg-12">
					<div class="_1card _form_body">
                        <div class="_2card_top">
                            <h2 class="_form_title">Direct Deposit Authorization Form</h2>

                            <p class="_form_ach">Please print and complete All the informantion below.</p>
                        </div>
                        <div class="">
                            <div class="_form_row">
                            <Form  label-position="top" class="iview_submit_form">
                                <div class="row">
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <FormItem label="Name" :error="errorData.name">
                                            <Input v-model="form.name" type="text" placeholder="Name"/>
                                        </FormItem>
                                    </div>

                                    <div class="col-12 col-md-6 col-lg-6">
                                        <FormItem label="Address" :error="errorData.address">
                                            <Input v-model="form.address" type="text" placeholder="Address"/>
                                        </FormItem>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <FormItem label="City, State, Zip" :error="errorData.cityStateZip">
                                            <Input  v-model="form.cityStateZip" type="email" placeholder="City, State, Zip"/>
                                        </FormItem>

                                        <img class="_form_img" src="" alt="" title="">
                                    </div>

                                    <div class="col-12 col-md-6 col-lg-6">
                                        <FormItem label="Name of Bank" :error="errorData.bankName">
                                            <Input v-model="form.bankName" type="text" placeholder="Name of Bank"/>
                                        </FormItem>
                                    </div>

                                    <div class="col-12 col-md-6 col-lg-6">
                                        <FormItem label="Account #" :error="errorData.accountNumber">
                                            <Input v-model="form.accountNumber" type="text" placeholder="Account"/>
                                        </FormItem>
                                    </div>

                                    <div class="col-12 col-md-6 col-lg-6">
                                        <FormItem label="9-Digit Routing #" :error="errorData.routingNumber">
                                            <Input v-model="form.routingNumber" type="text" placeholder="9-Digit Routing"/>
                                        </FormItem>
                                    </div>

                                    <div class="col-xs-12 col-sm-6 col-md-6">
                                            <FormItem label="Amount: " :error="errorData.priceType">
                                            <RadioGroup vertical  v-model="form.priceType">
                                                <Radio label="Price" >
                                                    <span>$ 
                                                        <Input v-if="form.priceType && form.priceType=='Price'" v-model="form.value" type="text" placeholder=""/>
                                                        <Input v-else disabled type="text" placeholder=""/>
                                                        </span>
                                                </Radio>
                                                <Radio class="mt-10 mb-10" label="Percentage" >
                                                    <span><Input v-if="form.priceType && form.priceType=='Percentage'" v-model="form.value" type="text" placeholder=""/>
                                                    <Input v-else disabled type="text" placeholder=""/> %</span>
                                                </Radio>
                                                <Radio label="Entire Paychec">
                                                    <span>Entire Paycheck</span>
                                                </Radio>
                                            </RadioGroup>
                        
                                        </FormItem>
                                    </div>

                                    <div class="col-xs-12 col-sm-6 col-md-6">
                                        <FormItem label="Type of Account: " :error="errorData.accountType">
                                            <RadioGroup vertical v-model="form.accountType">
                                                <Radio label="Checking">
                                                    <span>Checking</span>
                                                </Radio>
                                                <Radio label="Savings">
                                                    <span>Savings</span>
                                                </Radio>
                                            </RadioGroup>
                                        </FormItem>
                                    </div>

                                    <div class="col-12 col-md-12 col-lg-12">
                                        <p class="_text mb10">Attach a voided check for each bank account to which funds should be deposited (if necessary)
                                            <span style="line-height: 32px;">
                                                <FormItem style="width:200px; display:inline-block; margin: 0px" label="" :error="errorData.companyName">
                                                    <Input v-model="form.companyName" type="text" placeholder="Company Name"/>
                                                </FormItem>
                                                <!-- <Input style="width:200px" type="text" placeholder="Company Name"/> -->
                                            </span>
                                            [Company Name] is hereby authorized to directly deposit my pay to
                                            the account listed above. This authorization will remain in effect until I modify or cancel it in writing.
                                        </p>
                                    </div>

                                    <div class="col-xs-12 col-sm-6 col-md-6 _pb_50">
                                        <FormItem label="Employee’s Signature" :error="errorData.signature">
                                            <div class="_signature">
                                                <VueSignaturePad  class="_mb_20" width="100%" height="100%" ref="signaturePad" />
                                                <Button @click="undo">clear</Button>
                                            </div>
                                        </FormItem>
                                    </div>

                                    <div class="col-12 col-md-12 col-lg-12"></div>

                                    <div class="col-xs-12 col-sm-6 col-md-6">
                                        <FormItem label="Date" :error="errorData.signatureDate">
                                            <DatePicker v-model="form.signatureDate"  @on-change="getDate" type="date" placeholder="Select date" style="width: 100%"></DatePicker>
                                        </FormItem>
                                    </div>
                                </div>
                            </Form>
                            <div class="row">
                                <form ref="form" method="post" @submit.prevent="storeDiposteFrom">
                                    <div class="col-xs-12 col-sm-12 col-md-12 _mb_20">
                                        <recaptcha @error="onError" @success="onSuccess" @expired="onExpired" />
                                        <Alert v-if="isVerify" type="error" >Please verify that you are not a robot!</Alert>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <!-- <Button  type="primary" @click="storeDiposte">Submit</Button> -->
                                        <button  type="submit" class="ivu-btn ivu-btn-primary" >Submit Form</button>
                                        <!-- <Button type="primary" class="ml-10">Print Form</Button> -->
                                    </div>
                                </form>
                            </div>
                            </div>  
                         </div>
                    </div>
                </div>
            </div>
        </div>                  
    </div>
</template>

<script>
export default {
       name: 'MySignaturePad',
    data(){
        return{
            isVerify:false,
            form:{
                name:'',
                address:'',
                cityStateZip:'',
                bankName:'',
                accountNumber:'',
                routingNumber:'',
                value:'',
                priceType:'',
                accountType:'',
                companyName:'',
                signature:'',
                signatureDate:'',
            },
            errorData:{
                name:'',
                address:'',
                cityStateZip:'',
                bankName:'',
                accountNumber:'',
                routingNumber:'',
                value:'',
                type:'',
                accountType:'',
                companyName:'',
                signature:'',
                signatureDate:'',
            },
        }
    },
    methods:{
        onError(error) {
            console.log('Error happened:', error)
        },
        onSuccess(token) {
            console.log('Succeeded:', token)
        },
        onExpired() {
            console.log('Expired')
        },
         clearData() {
            this.$refs.signaturePad.clearSignature()
            this.form={
                name:'',
                address:'',
                cityStateZip:'',
                bankName:'',
                accountNumber:'',
                routingNumber:'',
                value:'',
                type:'',
                accountType:'',
                companyName:'',
                signature:'',
                signatureDate:'',
            }
        },
        clearError() {
            this.errorData={
                name:'',
                address:'',
                cityStateZip:'',
                bankName:'',
                accountNumber:'',
                routingNumber:'',
                value:'',
                type:'',
                accountType:'',
                companyName:'',
                signature:'',
                signatureDate:'',
            }
        },
        undo(){
             this.$refs.signaturePad.clearSignature()
        },
        getDate(e){
            this.signatureDate = e
        },
        checkFormValidation(){
            let check = true
            this.clearError();
             if (this.form.name.trim() == "" || this.form.name == null ) {
                this.errorData.name = "This field is required!";
                check = false;
            }
            if (this.form.address.trim() == "" || this.form.address == null ) {
                this.errorData.address = "This field is required!";
                check = false;
            }
            if (this.form.cityStateZip.trim() == "" || this.form.cityStateZip == null ) {
                this.errorData.cityStateZip = "This field is required!";
                check = false;
            }
            if (this.form.bankName.trim() == "" || this.form.bankName == null ) {
                this.errorData.bankName = "This field is required!";
                check = false;
            }
            if (this.form.accountNumber.trim() == "" || this.form.accountNumber == null ) {
                this.errorData.accountNumber = "This field is required!";
                check = false;
            }
            if (this.form.routingNumber.trim() == "" || this.form.routingNumber == null ) {
                this.errorData.routingNumber = "This field is required!";
                check = false;
            }
          
            if ( this.form.accountType.trim() == "" || this.form.accountType == null ) {
                this.errorData.accountType = "This field is required!";
                check = false;
            }
            if ( this.form.priceType.trim() == "" || this.form.priceType == null ) {
                this.errorData.priceType = "This field is required!";
                check = false;
            }
            if (this.form.priceType) {
                if(this.form.priceType == "Entire Paychec"){

                }
                 else {
                      if ( this.form.value.trim() == "" || this.form.value == null ) {
                        this.errorData.priceType = "This field is required!";
                        check = false;
                     }
                }

                
            }
            if ( this.form.companyName.trim() == "" || this.form.companyName == null ) {
                this.errorData.companyName = "This field is required!";
                check = false;
            }
            if ( this.form.signatureDate== "" || this.form.signatureDate == null ) {
                this.errorData.signatureDate = "This field is required!";
                check = false;
            }
            return check
        },

        async storeDiposteFrom(){
            this.clearError()
            let isOk = this.checkFormValidation()
            console.log(isOk)
            if(!isOk) return
            let token = null;
            
          
            const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
            if(isEmpty) return this.errorData.signature = "This field is required!";
            this.form.signature =data
              try {
                token = await this.$recaptcha.getResponse()
                console.log('ReCaptcha token:', token)
                 this.isVerify = false
                
            } catch (error) {
                this.isVerify = true
                return
            }
            this.form.token =token
            const res = await this.callApi('post','/sales/createNewDipositeFrom', this.form)
            if(res.status==200){
                this.s("New diposite form has been submited!!")
                this.clearError();
                this.clearData();
                await this.$recaptcha.reset()
                this.$router.push('/contracting')
            }
            else if (res.status == 401) {
                this.e(res.data.message);
            } 
            else if (res.status == 403) {
                this.e(res.data.message);
            } 
            else this.swr()
        },
     

    }
}
</script>
