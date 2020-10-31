<template>
    <div>
        <div class="_main_content">
            <div class="_form_body _1card">
                <h2 class="_form_title _mar_b20">Request for Texpayer </h2>
                <div class="_pdf_img_all">
                    <div v-for="(item, index) in fileData" :key="index" class="_pdf_pic" 
                    v-if="item.response.extension=='jpg' || item.response.extension=='png' || item.response.extension=='jpeg'">
                        <img class="_pdf_img" :src="item.response.url" alt="" title="">
                       <div class="icon_right">
                            <a :href="`${item.response.url}`" target="_blank" rel="noopener noreferrer"><Icon type="md-download" /></a>
                        </div>
                    </div>
                </div>
                <div class="_pdf_files">
                    <div class="_1fri_files" v-for="(item, index) in fileData" :key="index"
                     v-if="item.response.extension!='jpg' && item.response.extension!='png' && item.response.extension!='jpeg'">
                        <div class="_1fri_files_icon">
                            <Icon type="md-document" />
                        </div>
                        <div class="_1fri_files_details">
                            <p class="_1fri_files_name _1text_overflow"><Tooltip content="it.name"> {{item.name}} </Tooltip></p>
                            <p class="_1fri_files_num">{{item.size}} kb</p>
                        </div>

                        <div class="_1fri_files_download_main">
                            <div class="_1fri_files_download">
                                <a :href="`${item.response.url}`" target="_blank" rel="noopener noreferrer"><Icon type="md-download" /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- <div class="_pdf_button">
                    <Button type="primary">Download</Button>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
import moment from "moment";
export default {
    middleware: 'authenticated',
    data(){
        return{
            fileData:{},
        }
    },
    methods:{
        
    
    },
    async created(){
        let res=await this.callApi("get", "/sales/getSingleTexpayerForm")
        if( res.status == 200){
            this.fileData=JSON.parse(res.data.file);
        } 
        else {
            this.swr()
        }
    }
}
</script>
<style scoped>
.icon_right {
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: #fff;
    padding: 11px;
    font-size: 19px;
    border-left: 1px solid #d9e5eb;
    border-top: 1px solid #d9e5eb;
    cursor: pointer;
}
.icon_right a{
    padding: 7px 2px;
}
</style>



