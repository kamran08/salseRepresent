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
                                <h2 class="_form_title">Direct Deposit Authorization (ACH)</h2>

                                <p class="_form_ach">ACH=Automated Clearing House</p>
                            </section>
                            <section class="_form_row">
                                <section  class="iview_submit_form">
                                    <section class="row">
                                        <section class="col-xs-12 col-sm-6 col-md-6">
                                            <h4 class="pdf_content _mar_b20">First name: <span>{{data.firstName}}</span></h4>
                                        </section>

                                        <section class="col-xs-12 col-sm-6 col-md-6">
                                            <h4 class="pdf_content _mar_b20">Last name: <span>{{data.lastName}}</span></h4>
                                        </section>
                                        <section class="col-xs-12 col-sm-12 col-md-12">
                                            <h4 class="pdf_content _mar_b20">Email: <span>{{data.email}}</span></h4>
                                        </section>

                                        <section class="col-xs-12 col-sm-12 col-md-12">
                                            <h4 class="pdf_content _mar_b20">Bank Account Name: <span>{{data.bankAccountName}}</span></h4>
                                        </section>

                                        <section class="col-xs-12 col-sm-6 col-md-6">
                                            <h4 class="pdf_content _mar_b20">Routiong Number: <span>{{data.routiongNumber}}</span></h4>
                                        </section>

                                        <section class="col-xs-12 col-sm-6 col-md-6">
                                            <h4 class="pdf_content _mar_b20">Account Number: <span>{{data.accountNumber}}</span></h4>
                                        </section>

                                        <section class="col-xs-12 col-sm-6 col-md-6">
                                            <h4 class="pdf_content _mar_b20">Bank Name: <span>{{data.bankName}}</span></h4>
                                        </section>

                                        <section class="col-xs-12 col-sm-6 col-md-6">
                                            <h4 class="pdf_content _mar_b20">Bank Branch Name: <span>{{data.branchName}}</span></h4>
                                        </section>

                                        <section class="col-xs-12 col-sm-6 col-md-6">
                                            <h4 class="pdf_content _mar_b20">Type of Bank Account: <span>{{data.bankAccountType}}</span></h4>
                                        </section>

                                        <section class="col-xs-12 col-sm-6 col-md-6">
                                            <h4 class="pdf_content _mar_b20">Bank Phone Number: <span>{{data.phoneNumber}}</span></h4>
                                        </section>

                                        <section class="col-xs-12 col-sm-6 col-md-6">
                                            <h4 class="pdf_content _mar_b20">Area Code: <span>{{data.areaCode}}</span></h4>
                                        </section>

                                        <!-- <section class="col-xs-12 col-sm-6 col-md-6">
                                        <h4 class="pdf_content _mar_b20">Term condition: <span>{{data.date}}</span></h4>
                                        </section> -->
                                        <section class="col-xs-12 col-sm-12 col-md-12">
                                            <h4 class="pdf_content _mar_b20">Void Check or Bank Letterhead: 
                                                <span v-if="data.fileExtention=='jpg' || data.fileExtention=='png' || data.fileExtention=='jpeg'">
                                                    <img :src="data.file" alt="">
                                                </span>
                                                <span v-else>
                                                    {{data.file}}
                                                </span>
                                            </h4>
                                        </section>

                                        <section class="col-xs-12 col-sm-12 col-md-12">
                                            <h4 class="pdf_content _mar_b20">Signature: 
                                                <span>
                                                    <img :src="data.signature" alt="">
                                                </span>
                                            </h4>
                                            <h4 class="pdf_content _mar_b20">Signature Date: <span>{{isDate(data.date)}}</span></h4>
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
// import { mapFields } from "vuex-map-fields";
import moment from "moment";
import { mapGetters} from 'vuex'
export default {
    middleware: 'authenticated',
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
    async asyncData({app,params}){
        try{
            const res = await app.$axios.get(`/sales/getSingleDeposite/${params.id}`);
            var data;
            if (res.status == 200) data = res.data;
            return {
                data: data,
                fileName: data.firstName+' '+data.lastName
            };
        } catch(error){
            console.log(error)
        }
    },
    created(){
        
    }
}
</script>