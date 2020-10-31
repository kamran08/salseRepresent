<template>
	<div>
		<div class="_main_content">
            <div class="_1card _hei100">
                <div class="_form_body">
                    <div class="form6_pdf_div">
                        <embed src="/IRSFormW-9.pdf" />
                    </div>
                    <Button @click="submitModalOpen" type="primary" class="_mar_t30">Submit Form</Button>
                </div>
            </div>
            <Modal
                v-model="form6Modal"
                title="Submit Form"
                :closable="false"
                :mask-closable="false"
                >
                 <div class="profile-edit-group-item item-sm-12 item-md-12 item-lg-12 no-padding">
                <div
                :class="(isUploadError) ? `profile-edit-input error_border_color` : `profile-edit-input`"
                style="margin-bottom: 20px ;"
                >
                <div class="chat-message-file chat-message-all" v-if="uploadList.length > 0">
                <div
                  v-for="(item, uploadIndex) in uploadList"
                  :key="uploadIndex"
                  class="chat-message_main"
                >
                  <template v-if="item.status === 'finished'">
                    <div
                      v-if="
                        item.response.extension == 'jpg' ||
                        item.response.extension == 'jpeg' ||
                        item.response.extension == 'png' ||
                        item.response.extension == 'gif'
                      "
                      class="demo-upload-list"
                    >
                      <img :src="item.response.url" alt />
                      <div
                        @click="handleRemove(item, index)"
                        class="demo-upload-list-cover"
                      >
                        <Icon type="md-close" />
                      </div>
                    </div>
                    <div
                      v-else
                      class="chat-message-file-item chat-message-file-doc upload_doc"
                    >
                      <div class="chat-message-doc-text">
                        <p>{{ item.response.url}}</p>
                      </div>
                      <div
                        @click="handleRemove(item, index)"
                        class="chat-file-remove file_remove_icon"
                      >
                        <Icon type="md-close" />
                      </div>
                    </div>
                  </template>
                  <template v-else>
                    <a-progress
                      :percent="50"
                      :show-info="false"
                      status="active"
                    />
                  </template>
                </div>
              </div>

                    <button style="width: 100%; border: 0;" type="button">
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
                    :action="`${apiUrl}texPayerFormUpload`"
                    style="width: 100% !important"
                    >
                    <div style="padding: 20px 0">
                        <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                        <p>Click or drag files here to upload</p>
                    </div>
                    <!-- <i class="fas fa-images"></i> attachement -->
                    </Upload>
                    </button>
                    
                    <p class="error_text" v-if="isUploadError">{{ uploadErrorText }}</p>
                </div>
                </div>
                <div slot="footer">
                    <Button  @click="form6ModalClose()">Close</Button>
                    <Button type="primary" :disabled="loading"   :loading="loading" @click="submitForm6">{{loading==true?'Please Wait' : "Submit"}}</Button>
                </div>
            </Modal>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
           form6Modal:false,
            isUploadError: false,
            uploadErrorText: "",
            loading:false,
            uploadList: [],
            form:{
               file: [],
               user_id:''
            }
        }
    },
    methods:{
        submitModalOpen(){
            this.form6Modal=true
        },
        handleSuccess(res, file) {
            // this.uploadItem=res.file;
        },
         handleRemove(index) {
            this.uploadList.splice(index, 1);
        },
        handleFormatError(file) {
        this.isUploadError = true;
        this.uploadErrorText =
            "Supported files types: .JPG .PNG .JPEG .doc .docx .pdf .txt";
        },
        handleMaxSize(file) {
            if (file) {
                this.$Notice.warning({
                title: "Exceeding file size limit",
                desc: "File is too large, no more than 20Mb.",
                });
            }
        },
        viewImage(){
            this.imageModal=true
        },
        handleProgress(event, file, fileList) {
             console.log("filelist", fileList);
            this.uploadList =[]
            this.uploadList = fileList;
            this.isUploading = true;
        },
        form6ModalClose(){
            this.form6Modal=false
            this.uploadErrorText=""
             this.uploadList =[]
        },
        async submitForm6(){
            if (this.uploadList.length > 0) {
                this.form.file = [];
                let file = _.clone(this.uploadList);
                this.form.file = file ? file : [];
            }
            this.form.user_id=this.authInfo.id
            const res = await this.callApi('post',`/sales/formSixSubmit`,this.form)
            if(res.status==200){
                this.s('Form uploaded successfully!')
                this.form={}
                this.form6Modal=false
                this.uploadList =[]
                this.$router.push('/contracting')
            }
          else{
				this.swr();
            }
        },
      
    },
    created(){
      
    }


}
</script>
<style scoped>
.form6_pdf_div embed {
    width: 100%;
    height: 100%;
}
.form6_pdf_div{
    height: calc(100% - 57px);
}
._form_body{
    height: 100%;
}
._hei100{
    height: calc(100vh - 190px);
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
  .upload_doc{
    display: flex;
    justify-content: space-between;
    background-color: #eff1f4;
    padding: 10px;
    align-items: center;
    margin-bottom: 10px;
  }
  .file_remove_icon {
    font-size: 16px;
    cursor: pointer;
}
</style>