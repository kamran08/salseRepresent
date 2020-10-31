<template>
	<div>
		<div class="_main_content">
			<div class="row">
                <div class="col-12 col-md-12 col-lg-12">
					<div class="_1card">
                        <div class="_form_body">
                            <h2 class="_form_title _mar_b25">INDEPENDENT CONTRACTOR AGREEMENT</h2>
                            <div class="_form_row">
                                <Form  label-position="top" class="iview_submit_form">
                                    <div class="row">
                                        <div class="col-12 col-md-12">
                                            <p class="_2title _mb_20">THIS INDEPENDENT CONTRACTOR AGREEMENT (the "Agreement") is dated this 
                                                <span class="" style="width:190px; display:inline-block;padding-left:10px">
                                                    <FormItem label="" :error="errorData.agrementDate">
                                                        <DatePicker v-model="form.agrementDate"  @on-change="getDate" type="date" placeholder="Select date" style="width: 100%"></DatePicker>
                                                    </FormItem>
                                                </span> 
                                            </p>
                                        </div>

                                        <div class="col-xs-12 col-sm-6 col-md-6">
                                            <div class="_client_main">
                                                <p class="_client_title">CLIENT</p>
                                                <p class="_client_text">Hombolt Technology <br/> 500 E. North St STE D, Greenville SC 29601 <br/>(the "Client")</p>
                                            </div>
                                        </div>

                                        <div class="col-xs-12 col-sm-6 col-md-6">
                                            <div class="_client_main">
                                                <p class="_client_title">CONTRACTOR</p>
                                                <!-- <FormItem style="width:80%; margin:0 auto 10px;" label="">
                                                    <Input type="text" placeholder=""/>
                                                </FormItem> -->
                                                <div class="_clint_sign">
                                                    <FormItem  label="" :error="errorData.signature1">
                                                        <VueSignaturePad width="100%" height="150px" ref="signaturePad" />
                                                    </FormItem>
                                                    <Button class="clear_button" @click="undo">clear</Button>
                                                </div>

                                                <!-- <FormItem style="margin:0 auto 10px;" label="">
                                                    <Input type="text" placeholder=""/>
                                                </FormItem> -->
                                                <div class="">
                                                    <p class="_client_text">(the "Contractor")</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-12 col-md-12">
                                            <p class="_1title _mb_10">BACKGROUND</p>

                                            <ul class="_1list _mb_20">
                                                <li><strong>A.</strong> The Client is of the opinion that the Contractor has the necessary qualifications, experience and abilities toprovide services to the Client.</li>
                                                <li><strong>B.</strong> The Contractor is agreeable to providing such services to the Client on the terms and conditions set out inthis Agreement.</li>
                                            </ul>
                                        </div>

                                        <div class="col-12 col-md-12">
                                            <hr class="_mb_20"/>
                                        </div>

                                        <div class="col-12 col-md-12">
                                            <p class="_3text _mb_20">
                                                IN CONSIDERATION OF the matters described above and of the mutual benefits and obligations set forth in
                                                this Agreement, the receipt and sufficiency of which consideration is hereby acknowledged, the Client and the
                                                Contractor (individually the "Party" and collectively the "Parties" to this Agreement) agree as follows:
                                            </p>
                                        </div>

                                        <div class="col-12 col-md-12">
                                            <p class="_1title _mb_10">SERVICES PROVIDED</p>

                                            <ul class="_1list _mb_20">
                                                <li><strong>1.</strong>The Client hereby agrees to engage the Contractor to provide the Client with the following services (the "Services"):
                                                    <ul class="_1sublist">
                                                        <li>Sales Representative.</li>
                                                    </ul>
                                                </li>
                                                <li><strong>2.</strong>The Services will also include any other tasks which the Parties may agree on. The Contractor hereby agrees to provide such Services to the Client.</li>
                                            </ul>
                                        </div>

                                        <div class="col-12 col-md-12">
                                            <p class="_1title _mb_10">TERM OF AGREEMENT</p>

                                            <ul class="_1list _mb_20">
                                                <li><strong>3.</strong> The term of this Agreement (the "Term") will begin on the date of this Agreement and will remain in full force and effect indefinitely until terminated as provided in this Agreement.</li>
                                                <li><strong>4.</strong> In the event that either Party wishes to terminate this Agreement, that Party will be required to provide 15 days' written notice to the other Party</li>
                                                <li><strong>5.</strong> In the event that either Party breaches a material provision under this Agreement, the non-defaulting Party
                                                    may terminate this Agreement immediately and require the defaulting Party to indemnify the non-defaulting Party against all reasonable damages.</li>
                                                <li><strong>6.</strong> This Agreement may be terminated at any time by mutual agreement of the Parties.</li>
                                                <li><strong>7.</strong> Except as otherwise provided in this Agreement, the obligations of the Contractor will end upon the
                                                    termination of this Agreement.</li>
                                            </ul>
                                        </div>

                                        <div class="col-12 col-md-12">
                                            <p class="_1title _mb_10">PERFORMANCE</p>

                                            <ul class="_1list _mb_20">
                                                <li><strong>8.</strong> The Parties agree to do everything necessary to ensure that the terms of this Agreement take effect.</li>
                                            </ul>
                                        </div>

                                        <div class="col-12 col-md-12">
                                            <p class="_1title _mb_10">CURRENCY</p>

                                            <ul class="_1list _mb_20">
                                                <li><strong>9.</strong> Except as otherwise provided in this Agreement, all monetary amounts referred to in this Agreement are in
                                                    USD (US Dollars).</li>
                                            </ul>
                                        </div>

                                        <div class="col-12 col-md-12">
                                            <p class="_1title _mb_10">COMPENSATION</p>

                                            <ul class="_1list _mb_20">
                                                <li><strong>10.</strong> The Contractor will charge the Client for the Services as follows (the "Compensation"):
                                                    <ul class="_1sublist">
                                                        <li>1099 Self Employed Commission Compensation.</li>
                                                    </ul>
                                                </li>
                                                <li><strong>11. </strong>Invoices submitted by the Contractor to the Client are due within five days of receipt.</li>
                                                <li><strong>12.</strong> In the event that this Agreement is terminated by the Client prior to completion of the Services but where
                                                the Services have been partially performed, the Contractor will be entitled to pro rata payment of the
                                                Compensation to the date of termination provided that there has been no breach of contract on the part of
                                                the Contractor.
                                                </li>
                                                <li><strong>13.</strong> The Contractor will not be reimbursed for any expenses incurred in connection with providing the
                                                Services of this Agreement.</li>
                                            </ul>
                                        </div>

                                        <div class="col-12 col-md-12">
                                            <p class="_1title _mb_10">PENALTIES FOR LATE PAYMENT</p>

                                            <ul class="_1list _mb_20">
                                                <li><strong>14.</strong>  Any late payments will trigger a fee of 1.00% per month on the amount still owing.</li>
                                            </ul>
                                        </div>

                                        <div class="col-12 col-md-12">
                                            <p class="_1title _mb_10">CONFIDENTIALITY</p>

                                            <ul class="_1list _mb_20">
                                                <li><strong>15.</strong> Confidential information (the "Confidential Information") refers to any data or information relating to the
                                                Client, whether business or personal, which would reasonably be considered to be private or proprietary to
                                                the Client and that is not generally known and where the release of that Confidential Information could
                                                reasonably be expected to cause harm to the Client.</li>
                                                <li><strong>16.</strong> The Contractor agrees that they will not disclose, divulge, reveal, report or use, for any purpose, any
                                                Confidential Information which the Contractor has obtained, except as authorized by the Client or as
                                                required by law. The obligations of confidentiality will apply during the Term and will survive indefinitely
                                                upon termination of this Agreement</li>
                                            </ul>
                                        </div>

                                        <div class="col-12 col-md-12">
                                            <p class="_1title _mb_10">OWNERSHIP OF INTELLECTUAL PROPERTY</p>

                                            <ul class="_1list _mb_20">
                                                <li><strong>17.</strong> All intellectual property and related material, including any trade secrets, moral rights, goodwill, relevant
                                                registrations or applications for registration, and rights in any patent, copyright, trademark, trade dress,
                                                industrial design and trade name (the "Intellectual Property") that is developed or produced under this
                                                Agreement, is a "work made for hire" and will be the sole property of the Client. The use of the Intellectual
                                                Property by the Client will not be restricted in any manner.</li>
                                                <li><strong>18.</strong> The Contractor may not use the Intellectual Property for any purpose other than that contracted for in this
                                                Agreement except with the written consent of the Client. The Contractor will be responsible for any and all
                                                damages resulting from the unauthorized use of the Intellectual Property.</li>
                                            </ul>
                                        </div>

                                        <div class="col-12 col-md-12">
                                            <p class="_1title _mb_10">RETURN OF PROPERTY</p>

                                            <ul class="_1list _mb_20">
                                                <li><strong>19.</strong> Upon the expiration or termination of this Agreement, the Contractor will return to the Client any
                                                property, documentation, records, or Confidential Information which is the property of the Client.
                                                </li>
                                            </ul>
                                        </div>

                                        <div class="col-12 col-md-12">
                                            <p class="_1title _mb_10">CAPACITY/INDEPENDENT CONTRACTOR</p>

                                            <ul class="_1list _mb_20">
                                                <li><strong>20.</strong> In providing the Services under this Agreement it is expressly agreed that the Contractor is acting as an
                                                independent contractor and not as an employee. The Contractor and the Client acknowledge that this
                                                Agreement does not create a partnership or joint venture between them, and is exclusively a contract for
                                                service. The Client is not required to pay, or make any contributions to, any social security, local, state or
                                                federal tax, unemployment compensation, workers' compensation, insurance premium, profit-sharing,
                                                pension or any other employee benefit for the Contractor during the Term. The Contractor is responsible
                                                for paying, and complying with reporting requirements for, all local, state and federal taxes related to
                                                payments made to the Contractor under this Agreement</li>
                                            </ul>
                                        </div>

                                        <div class="col-12 col-md-12">
                                            <p class="_1title _mb_10">NOTICE</p>

                                            <ul class="_1list _mb_20">
                                                <li><strong>21.</strong> All notices, requests, demands or other communications required or permitted by the terms of this
                                                Agreement will be given in writing and delivered to the Parties at the following addresses:
                                                    <ul class="_2sublist">
                                                        <li><strong>a.</strong> Hombolt Technology <br/>500 E. North St STE D, Greenville SC 29601</li>
                                                        <li>
                                                            <strong>b. </strong> 
                                                            <span style="display:inline-block; width:250px " class=" pb-25">
                                                                <FormItem style="margin-bottom:8px;" label="" :error="errorData.notice">
                                                                    <Input v-model="form.notice" type="text" placeholder=""/>
                                                                </FormItem>
                                                            </span>
                                                        </li>
                                                    </ul>
                                                or to such other address as either Party may from time to time notify the other, and will be deemed to be
                                                properly delivered (a) immediately upon being served personally, (b) two days after being deposited with
                                                the postal service if served by registered mail, or (c) the following day after being deposited with an
                                                overnight courier.
                                                </li>
                                            </ul>
                                        </div>

                                        <div class="col-12 col-md-12">
                                            <p class="_1title _mb_10">INDEMNIFICATION</p>

                                            <ul class="_1list _mb_20">
                                                <li><strong>22.</strong> Except to the extent paid in settlement from any applicable insurance policies, and to the extent permitted
                                                by applicable law, each Party agrees to indemnify and hold harmless the other Party, and its respective
                                                affiliates, officers, agents, employees, and permitted successors and assigns against any and all claims,
                                                losses, damages, liabilities, penalties, punitive damages, expenses, reasonable legal fees and costs of any
                                                kind or amount whatsoever, which result from or arise out of any act or omission of the indemnifying
                                                party, its respective affiliates, officers, agents, employees, and permitted successors and assigns that occurs
                                                in connection with this Agreement. This indemnification will survive the termination of this Agreement.</li>
                                            </ul>
                                        </div>

                                        <div class="col-12 col-md-12">
                                            <p class="_1title _mb_10">ADDITIONAL CLAUSES</p>

                                            <ul class="_1list _mb_20">
                                                <li><strong>23.</strong> Under the laws of the Federal guidelines, upon cancellation of the agreement by either party, the contractor
                                                will follow a 2 year from date of termination or cancellation of the contract in writing a non-compete and
                                                non-disclosure understanding that will be adhered to in good faith. Non-compete applies to our sales force
                                                and best practices measures in terms of training and any functions of our sales staff's daily operations.
                                                Non-compete applies to various company strategies and Corporate responsibilities. Non-compete applies
                                                to any and all entities conducting business with Hombolt Technology. Non-compete applies to the
                                                customers and sales representatives / independent contractors of Hombolt Technology.
                                                </li>
                                                <li><strong>24.</strong> Renewals from the Company to the Independent Contractor for business conducted that are eligible for a
                                                renewal commission will be lifetime renewals as long as the business is active and in good standing.
                                                </li>
                                                <li><strong>25.</strong> Using other Independent Contractors book of business consciously to take the business away from another
                                                Independent Contractor for business paid to Hombolt Technology for the purpose to terminate
                                                commissions paid to the original Independent Contractor is subject to immediate termination. Do not rewrite other's hard-earned business as your own.
                                                </li>
                                                <li><strong>26.</strong> Helping in our recruiting model is beneficial. On an annual bonus (Dates: December 1 to November 30th)
                                                If an Independent Contractor recruits another independent contractor who is not being compensated by
                                                their sales production in their individual hierarchy, the independent contractor who recruits the
                                                independent contractor to sell Hombolt Technology sales will receive a percentage of the recruited
                                                independent contractors 1099 income - minus related business chargebacks 1099 income between the dates
                                                listed above.
                                                </li>
                                                <li><strong>27.</strong> Relating to the Fourth Additional Clause: An annual profit of 3% as an annual bonus if the contractor
                                                recruiting's income is below $40,000 between the dates listed in the Fourth Additional Clause. An Annual
                                                profit of 4% as an annual bonus if the contractor recruiting's income is between $40,001 and $75,000
                                                between the dates listed in the Fourth Additional Clause. An Annual profit of 5% as an annual bonus if the
                                                contractor recruiting's income is greater than $75,001between the dates listed in the Fourth Additional
                                                Clause. The percentage bonus listed in all 3 scenarios is based as a percentage of the Independent
                                                Contractor/s 1099 income between the dates listed in the Fourth Additional Clause. The bonus is NOT
                                                paid out on their own personal income as a bonus. It's a bonus paid for recruiting only.</li>
                                            </ul>
                                        </div>

                                        <div class="col-12 col-md-12">
                                            <p class="_1title _mb_10">MODIFICATION OF AGREEMENT</p>

                                            <ul class="_1list _mb_20">
                                                <li><strong>28.</strong> Any amendment or modification of this Agreement or additional obligation assumed by either Party in connection with this Agreement will only be binding if evidenced in writing signed by each Party or an
                                                authorized representative of each Party.</li>
                                            </ul>
                                        </div>

                                        <div class="col-12 col-md-12">
                                            <p class="_1title _mb_10">TIME OF THE ESSENCE</p>

                                            <ul class="_1list _mb_20">
                                                <li><strong>29.</strong> Time is of the essence in this Agreement. No extension or variation of this Agreement will operate as a
                                                waiver of this provision.</li>
                                            </ul>
                                        </div>

                                        <div class="col-12 col-md-12">
                                            <p class="_1title _mb_10">ASSIGNMENT</p>

                                            <ul class="_1list _mb_20">
                                                <li><strong>30.</strong> The Contractor will not voluntarily, or by operation of law, assign or otherwise transfer its obligations
                                                under this Agreement without the prior written consent of the Client.</li>
                                            </ul>
                                        </div>

                                        <div class="col-12 col-md-12">
                                            <p class="_1title _mb_10">ENTIRE AGREEMENT</p>

                                            <ul class="_1list _mb_20">
                                                <li><strong>31.</strong> It is agreed that there is no representation, warranty, collateral agreement or condition affecting this
                                                Agreement except as expressly provided in this Agreement.
                                                </li>
                                            </ul>
                                        </div>

                                        <div class="col-12 col-md-12">
                                            <p class="_1title _mb_10">ENUREMENT</p>

                                            <ul class="_1list _mb_20">
                                                <li><strong>32.</strong> This Agreement will enure to the benefit of and be binding on the Parties and their respective heirs,
                                                executors, administrators and permitted successors and assigns.
                                                </li>
                                            </ul>
                                        </div>

                                        <div class="col-12 col-md-12">
                                            <p class="_1title _mb_10">TITLES/HEADINGS</p>

                                            <ul class="_1list _mb_20">
                                                <li><strong>33.</strong> Headings are inserted for the convenience of the Parties only and are not to be considered when
                                                interpreting this Agreement.</li>
                                            </ul>
                                        </div>

                                        <div class="col-12 col-md-12">
                                            <p class="_1title _mb_10">GENDER</p>

                                            <ul class="_1list _mb_20">
                                                <li><strong>34.</strong> Words in the singular mean and include the plural and vice versa. Words in the masculine mean and
                                                include the feminine and vice versa.
                                                </li>
                                            </ul>
                                        </div>

                                        <div class="col-12 col-md-12">
                                            <p class="_1title _mb_10">GOVERNING LAW</p>

                                            <ul class="_1list _mb_20">
                                                <li><strong>35.</strong> This Agreement will be governed by and construed in accordance with the laws of the State of
                                                    <span style="width:250px; display:inline-block" class=" pb-25">
                                                        <FormItem label="" :error="errorData.governingLow">
                                                            <Input v-model="form.governingLow" type="text" placeholder=""/>
                                                        </FormItem>
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div class="col-12 col-md-12">
                                            <p class="_1title _mb_10">SEVERABILITY</p>

                                            <ul class="_1list _mb_20">
                                                <li><strong>36.</strong> In the event that any of the provisions of this Agreement are held to be invalid or unenforceable in whole
                                                or in part, all other provisions will nevertheless continue to be valid and enforceable with the invalid or
                                                unenforceable parts severed from the remainder of this Agreement.</li>
                                            </ul>
                                        </div>

                                        <div class="col-12 col-md-12">
                                            <p class="_1title _mb_10">WAIVER</p>

                                            <ul class="_1list _mb_20">
                                                <li><strong>37.</strong> The waiver by either Party of a breach, default, delay or omission of any of the provisions of this Agreement
                                                by the other Party will not be construed as a waiver of any subsequent breach of the same or other
                                                    <FormItem label="Address" :error="errorData.address">
                                                        <Input v-model="form.address" type="textarea" :rows="4" placeholder="provisions"/>
                                                    </FormItem>
                                                    <!-- IN WITNESS WHEREOF the Parties have duly affixed their signatures under hand and seal on this ________
                                                    day of ________________, ________. -->
                                                    IN WITNESS WHEREOF the Parties have duly affixed their signatures under hand and seal on this 
                                                    <span style="width:200px; display:inline-block"> 
                                                        <FormItem style="float:right; padding-right: 26px;"  label="" :error="errorData.signature1Date">
                                                            <DatePicker v-model="form.signature1Date"  @on-change="getDate2" type="date" placeholder="Select date" style="width: 100%"></DatePicker>
                                                        </FormItem> 
                                                    </span>


                                                    <br/>
                                                    Hombolt Technology
                                                    Per:
                                                        <!-- <span style="width:auto; display:inline-block;padding:0px 10px">
                                                            <Upload action="//jsonplaceholder.typicode.com/posts/">
                                                                <Button icon="ios-cloud-upload-outline">Upload files</Button>
                                                            </Upload>
                                                        </span>
                                                    (Seal) -->

                                                    <div style="width:100px; pb-25">
                                                        <!-- <div class="demo-upload-list">
                                                            <template>
                                                                <img>
                                                                <div class="demo-upload-list-cover">
                                                                    <Icon type="ios-eye-outline"></Icon>
                                                                    <Icon type="ios-trash-outline"></Icon>
                                                                </div>
                                                            </template>
                                                        </div> -->
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-12 col-md-6 col-lg-6 _pb_50">
                                            <FormItem label="Signature" :error="errorData.signature2">
                                                <div class="_signature">
                                                    <VueSignaturePad class="_mb_20" width="100%" height="100%" ref="signaturePadl" />
                                                    <div class="new_flex">
                                                        <Button @click="undo2">clear</Button>
                                                        <p class="_client_text _new">(Contractor)</p>
                                                        </div>
                                                </div>
                                            </FormItem>
                                        </div>
                                    </div>
                                </Form>
                                <div class="row">
                                    <form ref="form" method="post" @submit.prevent="storeDiposteFrom">
                                        <div class="col-12 col-md-12 pb-20 pt-10">
                                            <recaptcha @error="onError" @success="onSuccess" @expired="onExpired" />
                                            <Alert v-if="isVerify" type="error" >Please verify that you are not a robot!</Alert>
                                        </div>
                                        <div class="col-12 col-md-12 pt-10">
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
                agrementDate:'',
                signature1:'',
                notice:'',
                governingLow:'',
                address:'',
                signature2:'',
                signature1Date:''
       
            },
            errorData:{
                agrementDate:'',
                signature1:'',
                notice:'',
                governingLow:'',
                address:'',
                signature2:'',
                signature1Date:''
       
            },

        }
    },
    methods:{
         getDate(e) {
             this.form.agrementDate =e
        },
         getDate2(e) {
             this.form.signature1Date =e
        },
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
            this.$refs.signaturePadl.clearSignature()
            this.form={
                agrementDate:'',
                signature1:'',
                notice:'',
                governingLow:'',
                address:'',
                signature2:'',
                signature1Date:''
          
            }
        },
        clearError() {
            this.errorData={
                agrementDate:'',
                signature1:'',
                notice:'',
                governingLow:'',
                address:'',
                signature2:'',
                signature1Date:''
        
            }
        },
        undo(){
             this.$refs.signaturePad.clearSignature()
        },
        undo2(){
             
             this.$refs.signaturePadl.clearSignature()
        },
        checkFormValidation(){
            let check = true
            if (this.form.agrementDate == "" || this.form.agrementDate == null ) {
                this.errorData.agrementDate = "This field is required!";
                check = false;
            }
            if (!this.form.notice || this.form.notice.trim() == "" || this.form.notice == null ) {
                this.errorData.notice = "This field is required!";
                check = false;
            }
            if (!this.form.governingLow || this.form.governingLow.trim() == "" || this.form.governingLow == null ) {
                this.errorData.governingLow = "This field is required!";
                check = false;
            }
            if (!this.form.address ||  this.form.address.trim() == "" || this.form.address == null ) {
                this.errorData.address = "This field is required!";
                check = false;
            }
            if (this.form.signature1Date == "" || this.form.signature1Date == null ) {
                this.errorData.signature1Date = "This field is required!";
                check = false;
            }
            const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
            if(isEmpty) {

                return this.errorData.signature1 = "This field is required!";
            }
            else {
                 this.form.signature1 = data
            }
            return check
        },
        async storeDiposteFrom(){
            
            this.clearError()
            let isOk = this.checkFormValidation()
            console.log(isOk)
            if(!isOk) return
            let token = null;
            
            const { isEmpty, data } = this.$refs.signaturePadl.saveSignature();
            
            if(isEmpty) return this.errorData.signature2 = "This field is required!";
           
            this.form.signature2 =data


             try {
                token = await this.$recaptcha.getResponse()
                console.log('ReCaptcha token:', token)
                 this.isVerify = false
                
            } catch (error) {
                this.isVerify = true
                return
            }
      

            this.form.token =token
            const res = await this.callApi('post','/sales/createNewIndependentContractorAgreement', this.form)
            if(res.status==200){
                this.s("independent contractor agreement form has been submited!!")
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
<style scoped>
.new_flex{
    display: flex;
}
.new_flex p{
        margin-right: 138px;
}
.new_flex ._new{
        margin-left: 138px !important;
        
}
.new_design{
     float: right;
}
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