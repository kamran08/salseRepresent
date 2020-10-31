<template>
    <div>
        <div class="main-content box-pad pb-40 mb-40">
            <div class="_form_image">
                <img src="/images/HomboltBannetEle.png" alt="" title="">
            </div>
            
            <div class="_form box p-20">
                <div class="_1form_top">
                    <h2 class="_form_title">Homebolt Inc. Agent Agreement</h2>
                </div>

                <div class="_form_row">
                    <Form  label-position="top">
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
                                <FormItem label="Address">
                                    <div class="row2">
                                            <div class="col-xs-12 col-sm-12 col-md-12 pb-25">
                                                <FormItem label="" :error="errorData.address1">
                                                        <Input v-model="form.address1" type="text" placeholder="Present adress"/>
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
                                                <FormItem label=""  :error="errorData.state">
                                                        <Input v-model="form.state" type="text" placeholder="State / Province"/>
                                                </FormItem>
                                            </div>
                                            <div class="col-xs-12 col-sm-12 col-md-12 pb-25">
                                                <FormItem label="" :error="errorData.zipCode">
                                                        <Input v-model="form.zipCode" type="text" placeholder="Postal / Zip Code"/>
                                                </FormItem>
                                            </div>
                                    </div>
                                </FormItem>
                            </div>

                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <FormItem label="Hombolt Email Address" :error="errorData.email">
                                    <Input type="email" v-model="form.email" placeholder="example@hombolt.com"/>
                                </FormItem>
                            </div>

                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <FormItem label="Phone" :error="errorData.phoneNumber">
                                    <Input type="text" v-model="form.phoneNumber" placeholder="Phone"/>
                                </FormItem>
                            </div>

                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <FormItem label="Date" :error="errorData.date">
                                    <DatePicker @on-change="getDate" type="date" v-model="form.date" placeholder="Select date" style="width: 100%"></DatePicker>
                                </FormItem>
                            </div>

                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <p class="_text2 _mb_20 mt-20">This agreement, made on this , by and between Hombolt Inc. (Insurance Agency),  
                                a Corporation with its home office located in the City
                                 of Greenville, South Carolina, hereinafter referred to as "The Company", and , hereinafter referred to as "Agent”.</p>

                                <p class="_text _mb_15">Recitals</p>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <ul class="_form_list _pb_50">
                                    <li>1. THE COMPANY is engaged in the business of providing insurance products nationally 
                                    (in states across the country that we hold license).</li>
                                    <li>2. The Agent has been engaged in said business, and has had experience in said business.</li>
                                    <li>3. THE COMPANY desires to appoint said Agent as it’s representative, because of the aforesaid experience and their background.</li>
                                    <li>4. The Agent desires to be appointed by THE COMPANY in the position of Agent, responsible for the day-to-day activity of selling life, annuities, LTC, disability and health insurance products. 
                                    The Agent agrees to represent only the companies that THE COMPANY represents during this agreement as set forth below.</li>
                                </ul>

                                <p class="_text _mb_20">Per the reasons set forth in the Recitals, and in consideration of the mutual promises and agreements
                                hereinafter set forth, THE COMPANY and the Agent agree as follows:</p>
                                <p class="_text2 _mb_15">Section 1 Appointment: THE COMPANY hereby appoints the Agent, and the 
                                Agent agrees to act and perform as Agent of T
                                HE COMPANY, subject to the directives of THE COMPANY Management, President or Vice President.</p>
                                <p class="_text2 _mb_15">Section 2 Good Faith Efforts of Agent: The Agent agrees to allocate their time, 
                                    attention, skills, and efforts to their performance as an Agent of THE COMPANY. The Agent agrees that they will at all times faithfully, diligently, and to the best of their ability, experience, and talents: perform all the duties that may be required of and from them pursuant to the 
                                    express and implicit terms hereof, to the reasonable satisfaction of THE COMPANY.</p>
                                <p class="_text2 _mb_15">Section 3 Duties: The specific job-related duties of the Agent will be as agreed by and between parties hereto, 
                                    subsequent to the signing of this agreement, attached hereto, and made part hereof as Exhibit A.</p>
                                <p class="_text2 _mb_15">Section 4 Compensation: For all contemplated services performed by the Agent as stated herein, FMI agrees to pay, 
                                    and Agent agrees to accept, the following compensation, 
                                    as in Exhibit A, and subject to agreement on the final commission rates after negotiation.</p>
                                <p class="_text2 _mb_15">Section 5 Term: The term of this agreement shall be for one (1) year. 
                                    Upon the expiration of said term, this agreement shall automatically 
                                    renew for like terms of one year each, until the parties terminate this agreement hereto as set forth below.</p>
                                <p class="_text2 _mb_15">Section 6 Termination: Either party may terminate this agreement within ten (10) business days written notice to 
                                    the other party hereto. If during this term of agreement, or its extensions, the Agent shall fail or refuse to perform the services herein contemplated, or should be unable to 
                                    perform such services, due to death or disability, THE COMPANY may terminate this agreement.</p>
                                <p class="_text2 _mb_15">It is hereby agreed that the agent shall return to THE COMPANY all furniture and equipment, including computers, copiers, books, documents, and records or data files received by them during the course of their employment with THE COMPANY; upon termination of the Agreement for whatever reason. THE COMPANY is authorized to 
                                    seek injunctive relief to enforce this agreement with Agent responsible for all legal costs.</p>
                                <p class="_text2 _mb_15">Section 7 Trade Secrets: The Agent shall not at any time, or in any manner, either directly or indirectly, divulge, 
                                    disclose or communicate or sell to any person, firm or corporation in any manner whatsoever any Information concerning any matters affecting or 
                                    in relation to the business of THE COMPANY. This includes without limiting the generality of the foregoing, any Companies, Customers, 
                                    and of its Agents, or Representatives, the prices or commissions the Agent obtains or has obtained for its products and services, 
                                    or any other information concerning the business of THE COMPANY, its manner of operation, its plans, processes, or other data (including but not limited to, company provided recruiting or sales leads) without regard to whether all of the foregoing matters will be deemed confidential material or important, the parties hereto stipulating that as between them, the same are important, material, and confidential, and gravely affect the successful conduct of the business of THE COMPANY, and THE COMPANY's good will. A breach of terms in this section shall be a material breach of the Agreement. All terms of this section shall remain in full force and 
                                    effective for the period of two (2) years after the termination of Agents appointment for any reason.</p>
                                <p class="_text2 _mb_15">Section 8 Agreements Outside of Contract: This contract contains the complete agreement concerning the 
                                    appointment arrangement between the parties, and shall, as of the effective date hereof, supersede all other agreements between the parties, if any. 
                                    The parties stipulate that neither of them has made any representations as are specifically set forth herein.</p>
                                <p class="_text2 _mb_15">Section 9 Modification of Contract: No waiver or modification of this agreement or of any covenant, 
                                    condition, or limitation herein 
                                    contained shall be valid unless in writing, and duly executed by the party to be charged therewith.</p>
                                <p class="_text2 _mb_15">Section 10 Severability: All agreements and covenants contained herein are severable, and in the event any of them 
                                    shall be held invalid by any competent court, 
                                    this contract shall be interpreted as if such invalid agreements or covenants were not contained herein.</p>
                                <p class="_text2 _mb_15">Section 11 Choice of Law: It is the intention of the parties hereto that this agreement and 
                                    the performance hereunder and all suits and special proceedings hereunder be construed in accordance with, and under and pursuant to the laws of 
                                    the State of South Carolina. Any action, special proceeding, or other proceeding which may be brought arising out of, in connection with, or by 
                                    reason of this agreement, the laws of the State of South Carolina shall be applicable, and shall govern to the exclusion of the law of any other form, 
                                    without regard to the jurisdiction in which any action or special proceeding may be instituted.</p>
                                <p class="_text2 _mb_15">Section 12 Property Rights of THE COMPANY:</p>
                                <ul class="_form_list _pb_50">
                                    <li>A) In regard to personnel: The Agent recognizes and agrees that THE COMPANY has a valuable property right in its relationship with all agents or 
                                        sales personnel now associated with THE COMPANY, or to be associated following this agreement by THE COMPANY, including, but not limited to, 
                                        those persons recruited by the Agent during this appointment;and the Agent specifically agrees and covenants that they shall not either during 
                                        their appointment with THE COMPANY, contract, negotiate with, or in any manner attempt, directly or indirectly, alone or as a member of a partnership, 
                                        officer, director, or agent of any other Corporation or business, make any attempt to employ or recruit any person now associated with THE COMPANY, or 
                                        hereafter associated with THE COMPANY prior to the termination of the appointment of the Agent; and they shall not provide the names, addresses, or any 
                                        other information about the Agents, sales personnel, or clients of THE COMPANY, to any other party. All terms of this section shall remain in full 
                                        force and effective for the period of two (2) years after the termination of Agents appointment for any reason.<br/><br/>It is understood by the parties
                                         hereto, and agreed that THE COMPANY would have substantial damages which would be difficult to monetarily measure by reason of breach of this covenant 
                                         by the Agent. Parties agree that a breach of this covenant by the Agent will result in liquidated agreed damages of $2,000.00 for each incident of breach of this covenant by agent: which shall be in addition to any actual damages or other remedies of THE COMPANY, 
                                        and THE COMPANY shall have the right to injunctive relief to prevent violations of these covenants by the Agent.</li>
                                    <li>B) In regard to sales and recruiting leads: The Agent also recognizes and agrees that THE COMPANY’s 
                                        valuable property right includes (but is not limited to) company provided leads. The Agent shall not provide the names, addresses, or any other 
                                        information of potential clients, provided by THE COMPANY to any other party, at any time.<br/><br/>It is understood by the parties hereto, and agreed that THE COMPANY would have substantial damages which would be difficult to 
                                        onetarily measure by reason of breach of this covenant by the Agent. Parties also agree that a breach of this covenant by the Agent will result in 
                                        iquidated agreed damages of $500.00 for each misappropriated lead in breach of this covenant by agent: which shall be in addition to any actual damages or other remedies of THE COMPANY, 
                                        nd THE COMPANY shall have the right to injunctive relief to prevent violations of these covenants by the Agent.</li>
                                </ul>
                            </div>

                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <FormItem :error="errorData.intial1" label="Enter Initials Agreeing Recitals & Sections 1 - 12 ">
                                    <Input v-model="form.intial1" type="text" placeholder="Enter Intials"/>
                                </FormItem>
                            </div>

                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <p class="_text2 _mb_15 pt-20">Exhibit "A" The following is a description of Duties and Compensation for Agent Duties</p>
                                <ul class="_form_list _pb_50">
                                    <li>A. Maintain a valid license in each state Agent intends to sell Insurance.</li>
                                    <li>B. Agent shall comply with the rules, regulations and rate books of the Insurance Company, the laws of the states licensed, and the regulations of 
                                        the Department of Insurance relating to activities in the solicitation of insurance.</li>
                                    <li>C. Agent shall promptly remit (within 3 days of application) to THE COMPANY or the appropriate Insurance Company, any and all monies, applications, or 
                                        securities received by the Agent on behalf of THE COMPANY or the Insurance Company involved.</li>
                                    <li>D. Agent shall not obligate THE COMPANY nor incur debt or expenses in its behalf in any manner whatsoever.</li>
                                    <li>E. Agent must provide THE COMPANY with acceptable proof of E&O Insurance each and every year.</li>
                                </ul>

                                <p class="_text2 _mb_15">Compensation</p>
                                <ul class="_form_list _pb_50">
                                    <li>1. Where appropriate, THE COMPANY will facilitate direct contract with the Insurance Companies THE COMPANY chooses to represent. 
                                        In these cases, the Insurance Company 
                                        will be responsible for payment of commissions directly to the Agent at the contractually agreed upon rate.</li>
                                    <li>2. In the event THE COMPANY does not contract directly with a represented Insurance Company, THE COMPANY will be responsible to the Agent for 
                                        payment of first year commission and renewal commissions. The commission rate may be changed up or down, as needed by THE COMPANY. Commission change 
                                        will only apply to new business 
                                        dated after the notified change in writing. Agent will authorize a Commission Assignment Form with each company.</li>
                                    <li>3. These commissions are vested immediately and will be paid to the Agent as long as the Insurance Company pays THE COMPANY. 
                                        THE COMPANY agrees to pay vested commissions and renewal 
                                        commissions to the Agent until the annual commission due Agent is less than $1,000.00 in any given period.</li>
                                    <li>4. The Agent will forfeit all renewal commissions, if any, to which Agent would be otherwise entitled, before or after 
                                        termination in the event the Agent shall attempt to influence any policyholder or Agent to terminate a contract with THE COMPANY or an 
                                        Insurance Company represented by THE COMPANY. Agent also agrees that since neither THE COMPANY nor the Insurance Company has an adequate remedy at 
                                        law for such use of influence, either THE COMPANY 
                                        or the Insurance Company may institute proceedings to enjoin Agent from further such attempted use of influence.</li>
                                    <li>5. THE COMPANY may, without liability to Agent whatsoever, upon its own initiative, cancel Agents agreement at any time.</li>
                                    <li>6. Agent agrees to pay a $50 monthly administration fee for the receipt and usage od THE COMPANY’s leads and systems in 
                                        accordance with Section 12 above. The Agent will be debited said amount monthly from the Agents backend account. Upon termination of 
                                        this agreement, all leads provided to Agent are to be promptly returned by the Agent to 
                                        THE COMPANY per Section 6 and 12 above. Said leads are and shall remain the sole property of THE COMPANY at all times. </li>
                                    <li>7. Agent will assume full liability for any and all commission charge backs levied by the Insurance Companies. THE COMPANY reserves the right to seek recovery of these monies from future commissions if necessary. 
                                        All charge backs must be repaid within 60 days.</li>
                                </ul>
                            </div>

                            <div class="col-xs-12 col-sm-12 col-md-12 _pb_50">
                                <FormItem :error="errorData.intial2" label='I Understand & Agree To Exhibit "A" '>
                                    <Input v-model="form.intial2" type="text" placeholder="Enter Initials"/>
                                </FormItem>
                            </div>

                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <p class="_text2 _mb_15">I certify that my answers are true and complete to the best of my knowledge.</p>

                                <p class="_text2 _mb_15">I understand that false or misleading information in my application, onboarding, and/or 
                                    interview may result in my release. This is my agent agreement as an Independent 1099 Contractor.</p>
                            </div>

                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <FormItem label="Type Name Of Agent">
                                    <div class="row2">
                                            <div class="col-xs-12 col-sm-6 col-md-6">
                                                <FormItem label="" :error="errorData.agentFirstName">
                                                        <Input v-model="form.agentFirstName" type="text" placeholder="First Name"/>
                                                </FormItem>
                                            </div>
                                            <div class="col-xs-12 col-sm-6 col-md-6">
                                                <FormItem label="" :error="errorData.agentLastName">

                                                        <Input v-model="form.agentLastName" type="text" placeholder="Last Name"/>
                                                </FormItem>
                                            </div>
                                    </div>
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

                            <div class="col-xs-12 col-sm-12 col-md-12 _pb_50">
                                <FormItem label='Date Of Signature' :error="errorData.signatureDate">
                                    <DatePicker v-model="form.signatureDate" @on-change="getDate2" type="date" placeholder="Select date" style="width: 100%"></DatePicker>
                                </FormItem>
                            </div>

                            <!-- <div class="col-xs-12 col-sm-12 col-md-12">
                                <FormItem label="Please verify that you are human">
                                    <div class="messshown"></div>
                                </FormItem>
                                
                            </div>

                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <Button  type="primary" @click="storeAgreement">Submit</Button>
                            </div> -->
                        </div>
                    </Form>

                    <div class="row">
                        <form ref="form" method="post" @submit.prevent="storeAgreement">
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
    </div>
</template>
<script>
export default {
    data(){
        return{
            isVerify:false,
             form:{
                firstName:'',
                lastName:'',
                address1:'',
                address2:'',
                city:'',
                state:'',
                zipCode:'',
                email:'',
                phoneNumber:'',
                date:'',
                intial1:'',
                intial2:'',
                agentFirstName:'',
                agentLastName:'',
                signature:'',
                signatureDate:'',
            },
             errorData:{
                firstName:'',
                lastName:'',
                address1:'',
                address2:'',
                city:'',
                state:'',
                zipCode:'',
                email:'',
                phoneNumber:'',
                date:'',
                intial1:'',
                intial2:'',
                agentFirstName:'',
                agentLastName:'',
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
         async getDate(e){
            this.form.date =e
        },
         async getDate2(e){
            this.form.signatureDate =e
        },
     clearData() {
         this.$refs.signaturePad.clearSignature()
            this.form={
                firstName:'',
                lastName:'',
                address1:'',
                address2:'',
                city:'',
                state:'',
                zipCode:'',
                email:'',
                phoneNumber:'',
                date:'',
                intial1:'',
                intial2:'',
                agentFirstName:'',
                agentLastName:'',
                signature:'',
                signatureDate:'',
            }
        },
        clearError() {
            this.errorData={
                 firstName:'',
                lastName:'',
                address1:'',
                address2:'',
                city:'',
                state:'',
                zipCode:'',
                email:'',
                phoneNumber:'',
                date:'',
                intial1:'',
                intial2:'',
                agentFirstName:'',
                agentLastName:'',
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
            if (this.form.zipCode.trim() == "" || this.form.zipCode == null ) {
                this.errorData.zipCode = "This field is required!";
                check = false;
            }
            if (this.form.email.trim() == "" || this.form.email == null ) {
                this.errorData.email = "This field is required!";
                check = false;
            }
            if (this.form.phoneNumber.trim() == "" || this.form.phoneNumber == null ) {
                this.errorData.phoneNumber = "This field is required!";
                check = false;
            }
            if (this.form.date == "" || this.form.date == null ) {
                this.errorData.date = "This field is required!";
                check = false;
            }
            if (this.form.signatureDate == "" || this.form.signatureDate == null ) {
                this.errorData.signatureDate = "This field is required!";
                check = false;
            }
            if (this.form.intial1.trim() == "" || this.form.intial1 == null ) {
                this.errorData.intial1 = "This field is required!";
                check = false;
            }
            if (this.form.intial2.trim() == "" || this.form.intial2 == null ) {
                this.errorData.intial2 = "This field is required!";
                check = false;
            }
       
            if (this.form.agentFirstName.trim() == "" || this.form.agentFirstName == null ) {
                this.errorData.agentFirstName = "This field is required!";
                check = false;
            }
            if (this.form.agentLastName.trim() == "" || this.form.agentLastName == null ) {
                this.errorData.agentLastName = "This field is required!";
                check = false;
            }
            if (this.form.agentLastName.trim() == "" || this.form.agentLastName == null ) {
                this.errorData.agentLastName = "This field is required!";
                check = false;
            }
       
            
            // if (this.form.agree == "" || this.form.agree == null ) {
            //     this.errorData.agree = "This field is required!";
            //     check = false;
            // }
     

            return check;
        },
        undo() {
            this.$refs.signaturePad.clearSignature()
        },
        async storeAgreement(){
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
            const res = await this.callApi('post','/sales/createAgreement', this.form)
            if(res.status==200){
                 this.s("New Agreement has been submited!!")
                 this.clearError();
                 this.clearData();
                  this.$router.push(`form2/${res.data.id}`);
            }
           else if (res.status == 401) {
            this.e(res.data.message);
        } else this.swr()
            
        },
async asyncData({context,app,redirect}) {
      try {
            const [res1] = await Promise.all([
                app.$axios.get(`/sales/getCreatorAgreementByUser`),
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
}
</script>