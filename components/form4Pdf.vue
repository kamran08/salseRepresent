<template>
	<div>
		<div class="_main_content">

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
                    <section class="row">
                        <section class="col-12 col-md-12 col-lg-12">
                            <section class="_1card _form_body">
                                <section class="_2card_top">
                                    <h2 class="_form_title">Direct Deposit Authorization Form</h2>
                                </section>
                                <section class="_form_row">
                                    <section class="row">
                                        <section class="col-12 col-md-6 col-lg-6 _mar_b20">
                                            <p class="_form_label">Name</p>

                                            <p class="_form_value">{{data.name}}</p>
                                        </section>
                                        <section class="col-12 col-md-6 col-lg-6 _mar_b20">
                                            <p class="_form_label">Address</p>

                                            <p class="_form_value">{{data.address}}</p>
                                        </section>
                                        <section class="col-12 col-md-6 col-lg-6 _mar_b20">
                                            <p class="_form_label">City, State, Zip</p>

                                            <p class="_form_value">{{data.cityStateZip}}</p>
                                        </section>
                                        <section class="col-12 col-md-6 col-lg-6 _mar_b20">
                                            <p class="_form_label">Name of Bank</p>

                                            <p class="_form_value">{{data.bankName}}</p>
                                        </section>
                                        <section class="col-12 col-md-6 col-lg-6 _mar_b20">
                                            <p class="_form_label">Account #</p>

                                            <p class="_form_value">{{data.accountNumber}}</p>
                                        </section>
                                        <section class="col-12 col-md-6 col-lg-6 _mar_b20">
                                            <p class="_form_label">9-Digit Routing #</p>

                                            <p class="_form_value">{{data.routingNumber}}</p>
                                        </section>
                                        <section class="col-12 col-md-6 col-lg-6 _mar_b20">
                                            <p class="_form_label">Amount</p>

                                            <p class="_form_value">{{data.value}}</p>
                                        </section>
                                        <section class="col-12 col-md-6 col-lg-6 _mar_b20">
                                            <p class="_form_label">Type of Account</p>

                                            <p class="_form_value">{{data.accountType}}</p>
                                        </section>

                                        <section class="col-12 col-md-12 col-lg-12 _mar_b20">
                                            <p class="_text">Attach a voided check for each bank account to which funds should be deposited (if necessary) 
                                            <span class="_form_value">{{data.companyName}}</span> is hereby authorized to directly deposit my pay to the 
                                            account listed above. This authorization will remain in effect until I modify or cancel it in writing.</p>
                                        </section>

                                        <section class="col-12 col-md-12 col-lg-12 _mar_b20">
                                            <p class="_form_label">Employee’s Signature</p>

                                            <img class="_sig_img" :src="data.signature" alt="" title="">
                                        </section>

                                        <section class="col-12 col-md-6 col-lg-6 _mar_b20">
                                            <p class="_form_label">Date</p>

                                            <p class="_form_value">{{isDate(data.signatureDate)}}</p>
                                        </section>
                                    </section>
                                </section>
                            </section>
                        </section>
                    </section>
                </section>
            </vue-html2pdf>
         </client-only>
             <!-- <div class="dwld_btn_area">
                <button class="ivu-btn ivu-btn-primary dwld_btn" @click="downloadPdf()" >Download PDF</button>
            </div> -->
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
            data:{} 
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
    async created(){
        let res=await this.callApi("get", "/sales/getSingleDepositeForm")
        if( res.status == 200){
            this.data=res.data
            this.fileName=res.data.name
            this.downloadPdf()
        } 
        else {
            this.swr()
        }
    }
}
</script>