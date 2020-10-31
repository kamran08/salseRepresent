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
                    <section class="_form box p-20" >
                        <section class="_1form_top">
                            <h2 class="_form_title">Hombolt Inc. On-Boarding Application</h2>
                        </section>
                        <section class="_form_row">
                            <section  class="iview_submit_form">
                                <section class="row">
                                    <section class="col-xs-12 col-sm-6 col-md-6">
                                        <h4 class="pdf_content _mar_b20">First name: <span>{{boardingData.firstName}}</span></h4>
                                    </section>
                                    <section class="col-xs-12 col-sm-6 col-md-6">
                                        <h4 class="pdf_content _mar_b20">Last name: <span>{{boardingData.lastName}}</span></h4>
                                    </section>
                                    <section class="col-xs-12 col-sm-12 col-md-6">
                                        <h4 class="pdf_content _mar_b20">Birthday: <span>{{isDate(boardingData.birthDay)}}</span></h4>
                                    </section>
                                    <section class="col-xs-12 col-sm-6 col-md-6">
                                        <h4 class="pdf_content _mar_b20">Social Security Number: <span>{{boardingData.socialSecurityNumber}}</span></h4>
                                    </section>
                                    <section class="col-xs-12 col-sm-6 col-md-6">
                                        <h4 class="pdf_content _mar_b20">Area Code: <span>{{boardingData.areaCode}}</span></h4>
                                    </section>
                                    <section class="col-xs-12 col-sm-6 col-md-6">
                                        <h4 class="pdf_content _mar_b20">Phone Number: <span>{{boardingData.phoneNumber}}</span></h4>
                                    </section>
                                    <section class="col-xs-12 col-sm-12 col-md-12">
                                        <h4 class="pdf_content _mar_b20">Email: <span>{{boardingData.email}}</span></h4>
                                    </section>
                                    <section class="col-xs-12 col-sm-6 col-md-12">
                                        <h4 class="pdf_content _mar_b20">Present address: <span>{{boardingData.address1}}</span></h4>
                                    </section>
                                    <section class="col-xs-12 col-sm-6 col-md-12">
                                        <h4 class="pdf_content _mar_b20">Street Address Line 2: <span>{{boardingData.address2}}</span></h4>
                                    </section>
                                    <section class="col-xs-12 col-sm-6 col-md-6">
                                        <h4 class="pdf_content _mar_b20">City: <span>{{boardingData.city}}</span></h4>
                                    </section>
                                    <section class="col-xs-12 col-sm-6 col-md-6">
                                        <h4 class="pdf_content _mar_b20">State: <span>{{boardingData.state}}</span></h4>
                                    </section>
                                    <section class="col-xs-12 col-sm-6 col-md-6">
                                        <h4 class="pdf_content _mar_b20">Postcode: <span>{{boardingData.postCode}}</span></h4>
                                    </section>
                                    <section class="col-xs-12 col-sm-6 col-md-6">
                                        <h4 class="pdf_content _mar_b20">Citizen: <span>{{boardingData.citizen}}</span></h4>
                                    </section>
                                    <section class="col-xs-12 col-sm-6 col-md-6">
                                        <h4 class="pdf_content _mar_b20">License Taken: <span>{{boardingData.licensedTaken}}</span></h4>
                                    </section>
                                    <section class="col-xs-12 col-sm-6 col-md-6">
                                        <h4 class="pdf_content _mar_b20">Driving Licensed State: <span>{{boardingData.drivingLicensedState}}</span></h4>
                                    </section>
                                    <section class="col-xs-12 col-sm-6 col-md-6">
                                        <h4 class="pdf_content _mar_b20">Driving License Number: <span>{{boardingData.drivingLicensedNumber}}</span></h4>
                                    </section>
                                    <section class="col-xs-12 col-sm-12 col-md-12">
                                        <h4 class="pdf_content _mar_b20">Resident State License: 
                                            <span v-if="boardingData.licenseCopyExtention=='jpg' || boardingData.licenseCopyExtention=='png' || boardingData.licenseCopyExtention=='jpeg'">
                                                <img :src="boardingData.licenseCopy" alt="">
                                            </span>
                                            <span v-else class="file_bg">
                                                {{boardingData.licenseCopy}}
                                            </span>
                                        </h4>
                                    </section>
                                    <section class="col-xs-12 col-sm-6 col-md-6">
                                        <h4 class="pdf_content _mar_b20">Four hour Annuity Training: <span>{{boardingData.training}}</span></h4>
                                    </section>
                                    <section class="col-xs-12 col-sm-6 col-md-6">
                                        <h4 class="pdf_content _mar_b20">Errors and Omissions Insurance: <span>{{boardingData.omissionsInsuranc}}</span></h4>
                                    </section>
                                    <section class="col-xs-12 col-sm-12 col-md-12">
                                        <h4 class="pdf_content _mar_b20">Certificate:
                                            <span v-if="boardingData.certificateExtention=='jpg' || boardingData.certificateExtention=='png' || boardingData.certificateExtention=='jpeg'">
                                                <img :src="boardingData.certificate" alt="">
                                            </span>
                                            <span v-else class="file_bg">
                                                {{boardingData.certificate}}
                                            </span>
                                        </h4>
                                    </section>
                                    <section class="col-xs-12 col-sm-6 col-md-6">
                                        <h4 class="pdf_content _mar_b20">Convicted of a Felony: <span>{{boardingData.convicted}}</span></h4>
                                    </section>
                                    <section class="col-xs-12 col-sm-12 col-md-12">
                                        <h4 class="pdf_content _mar_b20">Explanation: <span>{{boardingData.explanation}}</span></h4>
                                    </section>
                                    <section class="col-xs-12 col-sm-6 col-md-6">
                                        <h4 class="pdf_content _mar_b20">Referred: <span>{{boardingData.referred}}</span></h4>
                                    </section>
                                    <section class="col-xs-12 col-sm-12 col-md-12">
                                        <p class="_text2 _mb_15">Hombolt Inc. Has A Recruiting Model That Allows Agents To Profit Based On Who They Bring To The Table For A Phone Interview! (Regardless Of Level, Amount Of Agents Insectionidual Is Brining, And/Or The Amount Of Experience)  Please Type In The Agents Name That Spoke With You To Join Our Team!  If No Agent Spoke With You Or You Are Being Recruited By The Local Manager, Please Type "None".</p>
                                        <p class="_text2 _mb_15">Disclaimer: Any actions against Hombolt Inc. in which this system is used by applying Agent or Active Agent / Producer in Bad Faith will result in the immediate discontinuation of quarterly profits along with the potential of termination.  Once violation has occured, Hombolt Inc. will come to a decision based on facts presented within a 3 month period.  If during that time there is a profit to be given, it will be put in an escrow account (hold status) until a decision has been made.  (Will be evaluated on a case by case basis).</p>
                                    </section>
                                    <section class="col-xs-12 col-sm-6 col-md-6">
                                        <h4 class="pdf_content _mar_b20">Agent or Local Manager: <span>{{boardingData.manager}}</span></h4>
                                    </section>
                                    <section class="col-xs-12 col-sm-12 col-md-12">
                                        <h4 class="pdf_content _mar_b20">Certifications Details: <span>{{boardingData.certificationsDetails}}</span></h4>
                                    </section>
                                    <div class="html2pdf__page-break"/>
                                    <section class="col-xs-12 col-sm-12 col-md-12">
                                        <h4 class="pdf_content _mar_b20">
                                            Resume: 
                                            <span v-if="boardingData.extraFileExtention=='jpg' || boardingData.extraFileExtention=='png' || boardingData.extraFileExtention=='jpeg'">
                                                <img :src="boardingData.extraFile" alt="">
                                            </span>
                                            <span v-else class="file_bg">
                                                {{boardingData.extraFile}}
                                            </span>
                                        </h4>
                                    </section>
                                    <section class="col-xs-12 col-sm-12 col-md-12">
                                        <h3 class="">Education</h3>
                                        <p class="_text2 _mb_20"> Inc. Does Not Require A College Degree For Employment Consideration.</p>
                                    </section>
                                    <section class="col-xs-12 col-sm-6 col-md-6">
                                        <h4 class="pdf_content _mar_b20">Name Of: University / College / Technical School: <span>{{boardingData.universityName}}</span></h4>
                                    </section>
                                    <section class="col-xs-12 col-sm-6 col-md-6">
                                        <h4 class="pdf_content _mar_b20">City: <span>{{boardingData.universityCity}}</span></h4>
                                    </section>
                                    <section class="col-xs-12 col-sm-6 col-md-6">
                                        <h4 class="pdf_content _mar_b20">State: <span>{{boardingData.universityState}}</span></h4>
                                    </section>
                                    <section class="col-xs-12 col-sm-6 col-md-6">
                                        <h4 class="pdf_content _mar_b20">Major/Minor/Concentration Degree Earned: <span>{{boardingData.universityDegreeEarned}}</span></h4>
                                    </section>
                                    <section class="col-xs-12 col-sm-6 col-md-6">
                                        <h4 class="pdf_content _mar_b20">Convicted of a Felony: <span>{{boardingData.universityConvicted}}</span></h4>
                                    </section>
                                    <section class="col-xs-12 col-sm-6 col-md-6">
                                        <h4 class="pdf_content _mar_b20">Year Of Completion: <span>{{boardingData.yearOfCompletion}}</span></h4>
                                    </section>
                                    <section class="col-xs-12 col-sm-6 col-md-6">
                                        <h4 class="pdf_content _mar_b20">Advanced Education School: <span>{{boardingData.advancedEducation}}</span></h4>
                                    </section>
                                    <section class="col-xs-12 col-sm-6 col-md-6">
                                        <h4 class="pdf_content _mar_b20">Major/Minor/Concentration Degree Earned: <span>{{boardingData.advancedDegreeEarned}}</span></h4>
                                    </section>
                                    <section class="col-xs-12 col-sm-6 col-md-6">
                                        <h4 class="pdf_content _mar_b20">Advanced Education City: <span>{{boardingData.advancedEducationCity}}</span></h4>
                                    </section>
                                    <section class="col-xs-12 col-sm-6 col-md-6">
                                        <h4 class="pdf_content _mar_b20">Advanced Education State: <span>{{boardingData.advancedEducationState}}</span></h4>
                                    </section>
                                    <section class="col-xs-12 col-sm-12 col-md-12 mt-30 mb-50">
                                        <p class="_text2">Federal tax regulations require us to request an SSN from every applicant to whom if approved for employment will 
                                            receive compensation. Employee SSNs are maintained and used by Hombolt Inc. for payroll, to verify employment history, and are reported to Federal and State agencies on forms required by Law. Hombolt Inc. will not disclose your SSN without the consent of the employee to anyone outside Hombolt Inc. as mandated by law or as required for employment purposes. Failure to provide an SSN may result in the withdrawal of your application. To review Hombolt Inc. 
                                            Virtual Privacy Policy, please visit <a href="">https://www.hombolt.com/privacy-policy.</a></p>
                                    </section>
                                    <section class="col-xs-12 col-sm-12 col-md-12">
                                        <h3 class="">Signature</h3>
                                        <p class="_text2 _mb_15">I certify that my answers are true and complete to the best of my knowledge.</p>
                                        <p class="_text2 _mb_20">If this application leads to employment, I understand that false or misleading information in my application or interview may result in my release. This is my application as an Independent 1099 Contractor.</p>
                                    </section>
                                    <section class="col-xs-12 col-sm-6 col-md-6">
                                        <h4 class="pdf_content _mar_b20">First Name: <span>{{boardingData.signatureFirstName}}</span></h4>
                                    </section>
                                    <section class="col-xs-12 col-sm-6 col-md-6">
                                        <h4 class="pdf_content _mar_b20">Last Name: <span>{{boardingData.signatureLastName}}</span></h4>
                                    </section>
                                    <section class="col-xs-12 col-sm-12 col-md-12">
                                        <h4 class="pdf_content _mar_b20">Signature: 
                                            <span>
                                                <img :src="boardingData.signature" alt="">
                                            </span>
                                        </h4>
                                        <h4 class="pdf_content _mar_b20">Signature Date: <span>{{isDate(boardingData.signatureDate)}}</span></h4>
                                    </section>
                                </section>
                            </section>
                        </section>
                    </section>
                </section>
                </vue-html2pdf>
            </client-only>
            <!-- <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12"> -->
                <div class="dwld_btn_area">
                    <button class="ivu-btn ivu-btn-primary dwld_btn" @click="downloadPdf()" >Download PDF</button>
                </div>
                <!-- </div>
            </div> -->
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
            // if (!(await this.validateControlValue())) return;
            console.log("i am clicked!!!1")

           let data = await this.$refs.html2Pdf.generatePdf();
           console.log('data')
           console.log(data)
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
     
      const res = await app.$axios.get(`/sales/getSingleBoarding/${params.id}`);

      var boardingData;

      if (res.status == 200)boardingData = res.data;
      return {
        boardingData: boardingData,
      };
    } catch (error) {
      //return redirect('/404')
    }
  },
    created(){
    }
}
</script>