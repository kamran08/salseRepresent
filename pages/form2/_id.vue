<template>
    <div>
        <div class="main-content box-pad pb-40 mb-40">
            <client-only>
                <vue-html2pdf
                    :show-layout="controlValue.showLayout"
                    :float-layout="controlValue.floatLayout" 
                    :enable-download="controlValue.enableDownload"
                    :preview-modal="controlValue.previewModal"
                    :paginate-elements-by-height="controlValue.paginateElementsByHeight"
                    :pdf-quality="controlValue.pdfQuality"
                    :pdf-format="controlValue.pdfFormat"
                    :pdf-orientation="controlValue.pdfOrientation"
                    :pdf-content-width="controlValue.pdfContentWidth"
                    :manual-pagination="controlValue.manualPagination"
                    :html-to-pdf-options="htmlToPdfOptions"
                    @progress="onProgress($event)"
                    @hasStartedGeneration="hasStartedGeneration()"
                    @hasGenerated="hasGenerated($event)"
                    ref="html2Pdf"
                >
                 <section slot="pdf-content" >
                    <section class="_form box p-20">
                        <section class="_1form_top">
                            <h2 class="_form_title">Homebolt Inc. Agent Agreement</h2>
                        </section>
                        <section class="_form_row">
                            <section  class="iview_submit_form">
                                <section class="row">
                                    <section class="col-xs-12 col-sm-6 col-md-6">
                                        <h4 class="pdf_content _mar_b20">First name: <span>{{agreementData.firstName}}</span></h4>
                                    </section>
                                    <section class="col-xs-12 col-sm-6 col-md-6">
                                        <h4 class="pdf_content _mar_b20">Last name: <span>{{agreementData.lastName}}</span></h4>
                                    </section>
                                    <section class="col-xs-12 col-sm-6 col-md-12">
                                        <h4 class="pdf_content _mar_b20">Present Address: <span>{{agreementData.address1}}</span></h4>
                                    </section>
                                    <section class="col-xs-12 col-sm-6 col-md-12">
                                        <h4 class="pdf_content _mar_b20">Street Address Line 2: <span>{{agreementData.address2}}</span></h4>
                                    </section>
                                    <section class="col-xs-12 col-sm-6 col-md-6">
                                        <h4 class="pdf_content _mar_b20">City: <span>{{agreementData.city}}</span></h4>
                                    </section>
                                    <section class="col-xs-12 col-sm-6 col-md-6">
                                        <h4 class="pdf_content _mar_b20">State: <span>{{agreementData.state}}</span></h4>
                                    </section>
                                    <section class="col-xs-12 col-sm-6 col-md-6">
                                        <h4 class="pdf_content _mar_b20">Zip Code: <span>{{agreementData.zipCode}}</span></h4>
                                    </section>
                                    <section class="col-xs-12 col-sm-12 col-md-6">
                                        <h4 class="pdf_content _mar_b20">Email: <span>{{agreementData.email}}</span></h4>
                                    </section>
                                    <section class="col-xs-12 col-sm-12 col-md-6">
                                        <h4 class="pdf_content _mar_b20">Phone Number: <span>{{agreementData.phoneNumber}}</span></h4>
                                    </section>
                                    <section class="col-xs-12 col-sm-6 col-md-6">
                                        <h4 class="pdf_content _mar_b20">Date: <span>{{isDate(agreementData.date)}}</span></h4>
                                    </section>
                                    <section class="col-xs-12 col-sm-12 col-md-12">
                                        <p class="_text2 _mb_20 mt-20">This agreement, made on this , by and between Hombolt Inc. (Insurance Agency),  
                                        a Corporation with its home office located in the City
                                        of Greenville, South Carolina, hereinafter referred to as "The Company", and , hereinafter referred to as "Agent”.</p>

                                        <p class="_text _mb_15">Recitals</p>
                                    </section>
                                    <section class="col-xs-12 col-sm-12 col-md-12">
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
                                        <div class="html2pdf__page-break"/>
                                        <p class="_text2 _mb_15 _pad_t30">Section 4 Compensation: For all contemplated services performed by the Agent as stated herein, FMI agrees to pay, 
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
                                        <p class="_text2 _mb_15">Section 7 Trade Secrets: The Agent shall not at any time, or in any manner, either directly or indirectly, sectionulge, 
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
                                        <div class="html2pdf__page-break"/>
                                        <p class="_text2 _mb_15 _pad_t30">Section 12 Property Rights of THE COMPANY:</p>
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
                                    </section>
                                    
                                    <section class="col-xs-12 col-sm-12 col-md-12">
                                        <h4 class="pdf_content _mar_b20">Initials Agreeing Recitals & Sections 1 - 12: <span>{{agreementData.intial1}}</span></h4>
                                    </section>
                                    <section class="col-xs-12 col-sm-12 col-md-12">
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
                                        <div class="html2pdf__page-break"/>
                                        <p class="_text2 _mb_15 _pad_t30">Compensation</p>
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
                                    </section>
                                    <section class="col-xs-12 col-sm-12 col-md-12">
                                        <h4 class="pdf_content _mar_b20">Understand & Agree To Exhibit "A": <span>{{agreementData.intial2}}</span></h4>
                                    </section>
                                    <section class="col-xs-12 col-sm-12 col-md-12">
                                        <p class="_text2 _mb_15">I certify that my answers are true and complete to the best of my knowledge.</p>

                                        <p class="_text2 _mb_15">I understand that false or misleading information in my application, onboarding, and/or 
                                            interview may result in my release. This is my agent agreement as an Independent 1099 Contractor.</p>
                                    </section>
                                    <section class="col-xs-12 col-sm-6 col-md-6">
                                        <h4 class="pdf_content _mar_b20">Agent First Name: <span>{{agreementData.agentFirstName}}</span></h4>
                                    </section>
                                    <section class="col-xs-12 col-sm-6 col-md-6">
                                        <h4 class="pdf_content _mar_b20">Agent Last Name: <span>{{agreementData.agentLastName}}</span></h4>
                                    </section>
                                
                                    <section class="col-xs-12 col-sm-12 col-md-12">
                                        <h4 class="pdf_content _mar_b20">Signature: 
                                            <span>
                                                <img :src="agreementData.signature" alt=""><br/>
                                            </span>
                                        </h4>
                                        <h4 class="pdf_content _mar_b20">Signature Date: <span>{{isDate(agreementData.signatureDate)}}</span></h4>
                                    </section>
                                </section>
                            </section>
                        </section>
                    </section>
                 </section>
                </vue-html2pdf>
            </client-only>
             <div class="dwld_btn_area">
                <button class="ivu-btn ivu-btn-primary dwld_btn" @click="downloadPdf()" >Download PDF</button>
            </div>
        </div>
                            
    </div>
</template>
<script>
import moment from "moment";
import { mapGetters} from 'vuex'
export default {
    data(){
        return{
           contentRendered: false,
            progress: 0,
            generatingPdf: false,
            pdfDownloaded: false,
            fileName:"doc",
            
        }
    },
    methods:{
        isDate(date){
            return moment(date).format("DD-MM-YYYY");
        },
        onProgress(progress) {
            this.progress = progress;
            console.log(`PDF generation progress: ${progress}%`);
        },
        hasStartedGeneration() {
            console.log(`PDF has started generation`);
        },
        hasGenerated(blobPdf) {
            this.pdfDownloaded = true;
            console.log(`PDF has downloaded yehey`);
            console.log(blobPdf);
        },
        domRendered() {
            console.log("Dom Has Rendered");
            this.contentRendered = true;
        },
        async downloadPdf() {
            if (!(await this.validateControlValue())) return;

            this.$refs.html2Pdf.generatePdf();
        },
            validateControlValue() {
      if (this.controlValue.pdfQuality > 2) {
        alert("pdf-quality value should only be 0 - 2");
        this.controlValue.pdfQuality = 2;

        return false;
      }

      if (!this.controlValue.paginateElementsByHeight) {
        alert("paginate-elements-by-height value cannot be empty");
        this.controlValue.paginateElementsByHeight = 1400;

        return false;
      }

      const paperSizes = [
        "a0",
        "a1",
        "a2",
        "a3",
        "a4",
        "letter",
        "legal",
        "a5",
        "a6",
        "a7",
        "a8",
        "a9",
        "a10",
      ];

      if (!paperSizes.includes(this.controlValue.pdfFormat)) {
        alert(`pdf-format value should only be ${paperSizes}`);
        this.controlValue.pdfFormat = "a4";

        return false;
      }

      if (!this.controlValue.pdfOrientation) {
        alert("pdf-orientation value cannot be empty");
        this.controlValue.pdfOrientation = "portrait";

        return false;
      }

      if (!this.controlValue.pdfContentWidth) {
        alert("pdf-content-width value cannot be empty");
        this.controlValue.pdfContentWidth = "800px";

        return false;
      }

      return true;
      },
    },
       computed: {
         ...mapGetters({
            controlValue: 'controlValue',
        }),
        htmlToPdfOptions() {
            return {
                margin: 0,

                filename: `${this.fileName}.pdf`,

                image: {
                    type: "jpeg",
                    quality: 0.98,
                },

                enableLinks: true,

                html2canvas: {
                    scale: this.controlValue.pdfQuality,
                    useCORS: true,
                },

                jsPDF: {
                    unit: "in",
                    format: this.controlValue.pdfFormat,
                    orientation: this.controlValue.pdfOrientation,
                },
            };
            // return;
        },
       
    },
    async asyncData({ app, store, redirect, params, query }) {
    try {
      const res = await app.$axios.get(`/sales/getSingleAgreement/${params.id}`);

      var agreementData;

      if (res.status == 200)agreementData = res.data;
      return {
        agreementData: agreementData,
      };
    } catch (error) {
      //return redirect('/404')
    }
  },
    created(){
    }
}
</script>