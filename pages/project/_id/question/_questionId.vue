<template>
  <div>
    <div class="_main_content">
      <div class="_1card">
        <div class="_1card_body">
          <div class="_2card_top _mar_b20">
            <div class="_1card_top_left">
                <p class="_1card_top_title">Project Question</p>
            </div>
            <div class="_1card_top_right">
                <ul class="_1card_top_right_list">
                    <li> <Button type="primary" @click="goBack()" id="goback">Back</Button></li>
                </ul>
            </div>
        </div>
        <div v-for="(item,ques_index) in projectQues" :key="ques_index">
          <div class="_card_top" >
              <div class="_1card_details_pic">
                  <a class="_load_div" style="color: black;">
                    <template v-if="item.user && item.user.image!=null">
                      <img alt="" title="" :src="item.user.image" class="_1card_details_img" />
                    </template>
                  </a>
              </div>
              <div class="_1card_details">
                  <div class="_status_card_title">
                      <a style="color: black;"><span v-if="item.user">{{item.user.firstname}} {{item.user.lastname}}</span></a>
                  </div>
                  <div class="_1card_time"><span>{{item.created_at | timeAgo}}</span> . <i class="fas fa-globe-americas"></i></div>
              </div>
              <div v-if="authInfo.id == item.user_id" class="_1card_details_drop">
                <Dropdown trigger="click" placement="bottom-end">
                  <Icon type="ios-more" />
                  <DropdownMenu slot="list">
                    <DropdownItem>
                      <p @click="editQuestionOn(item,ques_index)">Edit</p>
                    </DropdownItem>
                    <DropdownItem>
                      <p @click="deleteQuestion(item.id, ques_index,item.project_id)">Delete</p>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
          </div>
          <div class="_1card_status"><p class="_1card_status_text">{{item.content}}</p></div>
            <div class="_1card_count _1border_color _dis_flex">
                <ul class="_1card_count_list _flex_space">
                    <li><i class="far fa-comment-alt"></i><span v-if="item.__meta__">{{ item.__meta__.total_answer ? item.__meta__.total_answer : 0 }}</span> answer</li>
                    <!-- <li @click="answerBox(item.id,ques_index)"><i class="far fa-comment-alt"></i> Add answer</li> -->
                </ul>
            </div>
          <div class="_1card_comment_box">
            <div class="_1card_comment_box_pic _load_div"><img :src="authInfo.image" alt="" title="" class="_1card_comment_box_img" /></div>
              <div class="_1card_comment_box_input_icon _overflow_visible">
                  <div class="_1card_comment_box_input _overflow_visible">
                    <div
                      class="project-answer-reply-form"
                      @keyup.enter="answerAdd(item.id,ques_index)"
                    >
                    <input type="text" 
                    placeholder="write a answer..." 
                    :class="errorOb.ans_add == true ?'validation_warnning': ''"
                    v-model="answerItem.content"
                    />
                    </div>
                     
                  </div>
                  <div v-if="errorOb.ans_add == true" class="validation_warnning_msg_edit">
                    <p>Answer cann't be null!</p>
                  </div>
              </div>
            </div>
           <div class="_1comment _1border_color">
                <div class="_1comment_items" v-for="(ans,ans_index) in projectAns" :key="ans_index">
                    <div class="_1comment_main">
                        <div class="_1comment_pic">
                            <a href="" class="_load_div">
                              <template v-if="ans.user && ans.user.image!=null">
                                  <img :src="ans.user.image" alt class="_1comment_img" />
                              </template> 
                            </a>
                        </div>
                        <div class="_1comment_details">
                            <div class="_1comment_details_main">
                                <div class="_1comment_details_left">
                                    <p class="_1comment_name"> <span v-if="ans.user">{{ans.user.firstname}} {{ans.user.lastname}}</span></p>
                                    <p class="_1comment_text" v-if="!ans.isEdit || ansEditOn!=ans_index">{{ans.content}}</p>
                                    <div class="_1card_comment_box_input_icon _overflow_visible _mar_b20" v-if="ans.isEdit && ansEditOn==ans_index">
                                        <div class="_1card_comment_box_input _overflow_visible">
                                        <input type="text" 
                                              :class="errorOb.ans_edit == true ?'validation_warnning': ''"
                                                v-model="editAnsItem.content"
                                              @keyup.enter="editAnswer(ans,ans_index)"
                                              placeholder="write a reply..." />
                                        </div>
                                        <div class="validation_warnning_msg_edit" v-if="errorOb.ans_edit == true">
                                            <p>Answer cann't be null!</p>
                                          </div>
                                          <p
                                            class="comment_edit_close pointer"
                                            if="ans.isEdit"
                                          @click="editAnsOff(ans,ans_index)"
                                          >
                                            <Icon type="md-close" />
                                          </p>
                                    </div>
                                </div>
                                <div class="_1comment_time">
                                    <p class="_1comment_time_text">{{ans.created_at | timeAgo}}</p>
                                    <div class="_1card_details_drop" v-if="authInfo.id == ans.user_id">
                                      <Dropdown trigger="click" placement="bottom-end">
                                      <Icon type="ios-more" />
                                      <DropdownMenu slot="list">
                                        <DropdownItem>
                                          <p @click="editAnsOn(ans,ans_index)">Edit</p>
                                        </DropdownItem>
                                        <DropdownItem>
                                          <p @click="deleteAnswer(ans.id,ans_index,ques_index)">Delete</p>
                                        </DropdownItem>
                                      </DropdownMenu>
                                    </Dropdown>
                                  </div>
                                </div>
                            </div>
                            <div class="_1comment_like_give _1border_color _dis_flex align-items-center">
                                <ul class="_1card_count_list _flex_space">
                                    <li @click="replyInputBox(ans_index)"><i class="far fa-comment-alt"></i> Reply</li>
                                </ul>
                                <ul class="_count_comment">
                                  <li
                                    @click="showAllReply(ans.id, ans, ans_index)"
                                    v-if="
                                      ans.__meta__ && ans.__meta__.total_reply > 0
                                    "
                                  >
                                    <span v-if="ans.__meta__.total_reply > 0">
                                      <span
                                        >{{ ans.__meta__.total_reply }} Replies</span
                                      >
                                    </span>
                                  </li>
                                </ul>
                            </div>
                            <div class="_1card_comment_box" v-if="replyInput==ans_index">
                                <div class="_1card_comment_box_pic _load_div _mar_b20"><img :src="authInfo.image" alt="" title="" class="_1card_comment_box_img" /></div>
                                <div class="_1card_comment_box_input_icon _overflow_visible _mar_b20">
                                    <div class="_1card_comment_box_input _overflow_visible" @keyup.enter="sendReply(ans,ans_index)">
                                      <input type="text" placeholder="write a reply..." 
                                          v-model="replyItem.content"
                                          :class="errorOb.reply_add == true ?'validation_warnning': ''"/>
                                    </div>
                                    <div v-if="errorOb.reply_add == true" class="validation_warnning_msg_edit">
                                      <p>Reply cann't be null!</p>
                                    </div>
                                    <p
                                    class="comment_edit_close pointer"
                                    @click="replyInputBox(ans_index)"
                                  >
                                    <Icon type="md-close" />
                                  </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <template v-if="replyOn == ans_index">
                    <div class="_1comment_items _1reply" v-for="(replyItem,reply_index) in ans.reply" :key="reply_index">
                          <div class="_1comment_main">
                              <div class="_1comment_pic">
                                  <a class="_load_div">
                                    <template v-if="replyItem.user && replyItem.user.image!=null">
                                      <img :src="replyItem.user.image" alt class="_1comment_img"/>
                                  </template>
                                  </a>
                              </div>
                              <div class="_1comment_details">
                                  <div class="_1comment_details_main">
                                      <div class="_1comment_details_left">
                                          <p href="" class="_1comment_name"><span v-if="replyItem.user">{{replyItem.user.firstname}} {{replyItem.user.lastname}}</span></p>
                                          <p v-if="!replyItem.isEdit || replyEditOn!=reply_index" class="_1comment_text">{{replyItem.content}}</p>
                                          <div
                                            v-if="replyItem.isEdit && replyEditOn==reply_index"
                                            class="_1card_comment_box_input_icon _overflow_visible edit_rply_div"
                                          >
                                            <div class="_1card_comment_box_input _overflow_visible profile-edit-input">
                                              <input
                                                type="text"
                                                class="edit-input"
                                                :class="errorOb.reply_edit == true ?'validation_warnning': ''"
                                                v-model="editReplyItem.content"
                                                @keyup.enter="editReply(replyItem, reply_index, ans_index)"
                                              />
                                            </div>
                                            <div class="validation_warnning_msg_edit" v-if="errorOb.reply_edit == true">
                                              <p>Reply cann't be null!</p>
                                            </div>
                                            <p
                                              class="comment_edit_close pointer"
                                              if="replyItem.isEdit"
                                              @click="editReplyOff(ans_index,reply_index)"
                                            >
                                              <Icon type="md-close" />
                                            </p>
                                          </div>
                                      </div>
                                      <div class="_1comment_time">
                                          <p class="_1comment_time_text">{{replyItem.created_at | timeAgo}}</p>
                                          <div class="_1card_details_drop">
                                              <Dropdown trigger="click" placement="bottom-end">
                                                  <Icon type="ios-more" />
                                                <DropdownMenu slot="list">
                                                  <DropdownItem>
                                                    <p @click="editReplyOn(replyItem,ans_index,reply_index)">Edit</p>
                                                  </DropdownItem>
                                                  <DropdownItem>
                                                    <p
                                                      @click="deleteAnswerReply(replyItem.id, ans_index,reply_index)"
                                                    >Delete</p>
                                                  </DropdownItem>
                                                </DropdownMenu>
                                              </Dropdown>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="_1comment_like_give _1border_color _dis_flex align-items-center">
                                      <ul class="_1card_count_list _flex_space">
                                          <li @click="replyInputBox(ans_index)"><i class="far fa-comment-alt"></i> Reply</li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                    </template>
                    <div
                      v-if="projectAns[ans_index].__meta__  && projectAns[ans_index].__meta__.total_reply > 10  && projectAns[ans_index].reply.length > 0 && projectAns[ans_index].__meta__.total_reply > projectAns[ans_index].reply.length"
                    >
                      <p
                        @click="showOtherReplies(ans.id,ans_index)"
                        style="cursor: pointer;"
                        class="see_moree _1link _padd_t4"
                      >See previous replies</p>
                  </div>
                </div>
                  <div
                      v-if="projectQues[ques_index].__meta__ && projectQues[ques_index].__meta__.total_answer > 10  && projectAns.length > 0 && projectQues[ques_index].__meta__.total_answer > projectAns.length"
                    >
                      <p
                        @click="showOtherAnswer"
                        style="cursor: pointer;"
                        class="see_moree _1link"
                      >See previous answers</p>
                    </div>
            </div>
          </div>
      </div>

    <!-- <Modal
                v-model="questionEditModal"
                :closable="false"
                :footer-hide="true">
               <div class="modal-full-area mb-20">
                <div class="modal-dialogue-box">
                    <div class="modal-dialogue-inner">
                        <div class="modal-dialogue-header pb-20">
                            <h2 class="modal-header-text">Edit Question</h2>
                        </div>
                        <div class="full-separation full-separation-fit "></div>
                            <div class="modal-dialogue-body">

                                <div class="profile-edit-group full-width">
                                    <div class="profile-edit-group-item col-md-12 col-sm-12 no-padding">
                                        <label class="profile-edit-name profile-edit-name-left color2">Question</label>
                                    </div>
                                    <div class="profile-edit-group-item col-md-12 col-sm-12 no-padding">
                                        <div class="profile-edit-input">
                                            <textarea v-model="formEditItem.content" name="" id="" cols="30" rows="10" 
                                            placeholder="Write here..." class="profile-input"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="full-separation full-separation-fit "></div>
                            <div class="modal-dialogue-action">
                                <button class="btn2 btn-focus modal-close" @click="edit_question_tech()">Update</button>
                                <button class="btn2 btn-hover-focus modal-close" @click="questionEditModal = false">Close</button>
                            </div>
                    </div>
                </div>
                </div>
    </Modal>-->

    <Modal v-model="questionEditModal" title="Edit Question">
      <Form ref="formValidate" :model="formEditItem" label-position="top" class="iview_submit_form">
        <FormItem label="Question" :error="error">
          <Input
            v-model="formEditItem.content"
            type="textarea"
            :autosize="{minRows: 2,maxRows: 5}"
            placeholder="Enter something..."
          ></Input>
        </FormItem>
      </Form>
      <div slot="footer">
        <Button @click="questionEditModal=false">Close</Button>
        <Button
          type="primary"
          :disabled="loading"
          :loading="loading"
          @click="edit_question_tech"
        >{{loading==true?'Please Wait' : "Update"}}</Button>
      </div>
    </Modal>
    </div>
   </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
    middleware: 'authenticated',
	data(){
		return {
            projectQues:[],
            projectAns:[],
            loading:false,
            answerItem:{
                question_id:'',
                user_id:'',
                content:''
            },
            editAnsItem:{
                content:'',
                id:'',
            },
            answerBoxShow:-1,
            replyItem:{
                answer_id:'',
                user_id:'',
                content:''
            },
            editReplyItem:{
                content:'',
                id:'',
            },
            questionEditModal:false,
            formEditItem:{
                content:'',
                id:'',
            },
            replyOn:-1,
            replyInput:-1,
            ansEditOn:-1,
            replyEditOn:-1,
            newReplyAdd:false,
            error:'',
            errorOb:{
              ans_add:false,
              ans_edit:false,
              reply_add:false,
              reply_edit:false,
            }
           
		}
	},

	methods : {
        // -------------------- Question ----------------------
        async deleteQuestion(id,ques_index,pId){
            if(!confirm("Are you sure to delete this Question")){
				return;
			}
			let ob = {
				id:id
			}
			const res = await this.callApi('post','/sales/delete_ques_tech',ob)
			if(res.status == 200){
				this.i('Question have been successfully Deleted!')
                this.projectQues.splice(ques_index,1)
                this.$router.push(`/project/${pId}??tab=question`)
			}
			else{
				this.swr();
            }
        },
        editQuestionOn(item,ques_index){
            this.error = "";
            this.questionEditModal=true 
            this.formEditItem.content=item.content
            this.formEditItem.id=item.id
        },
        async edit_question_tech(){
            let flag = 1;
            if(this.formEditItem.content.trim() == '' || this.formEditItem.content == null ){
                this.error = "Question cann't be null!";
                flag = 0 
            } else this.error = "";
            if(flag == 0) return
           const res = await this.callApi('post','/sales/edit_question_tech',this.formEditItem)
            if(res.status==200){
              this.s('Question successfully updated!')
                      this.projectQues[0].content=this.formEditItem.content
                      this.formEditItem={}
                      this.questionEditModal=false 
            }
            else{
              this.swr();
                  }
              },
        // --------------------- Question answer----------------------
        answerBox(id,ques_index){
            this.errorOb.ans_add=false
            if(this.answerBoxShow==ques_index)
            return this.answerBoxShow =-1
            this.answerBoxShow = ques_index
        },

        async answerAdd(id,index){
           let flag = 1;
            if(this.answerItem.content.trim() == '' || this.answerItem.content == null ){
                this.errorOb.ans_add=true
                flag = 0 
            } else this.errorOb.ans_add=false
            if(flag == 0) return
            this.answerItem.question_id=id
            this.answerItem.user_id=this.authInfo.id
            this.loading = true
        	const res = await this.callApi('post','/sales/answerAdd',this.answerItem)
          if(res.status==200){
            this.s('Answer added successfully!')
                    this.projectAns=res.data
                    this.projectQues[index].__meta__.total_answer+=1
            this.answerItem={}
          }
          else{
            this.swr();
                }
                this.loading = false
            },
        async deleteAnswer(id,ans_index,ques_index){
            if(!confirm("Are you sure to delete this answer")){
				return;
			}
			let ob = {
				id:id
			}
			const res = await this.callApi('post','/sales/delete_answer_tech',ob)
			if(res.status == 200){
                 this.s('Answer deleted successfully!')
                this.projectAns.splice(ans_index,1)
                this.projectQues[ques_index].__meta__.total_answer-=1
			}
			else{
				this.swr();
            }
        },
        editAnsOn(ans,ans_index) {
            this.errorOb.ans_edit=false
            if(this.ansEditOn==ans_index)
            return this.ansEditOn =-1
            this.ansEditOn = ans_index

            this.$set(this.projectAns[ans_index],'isEdit',true) 
            this.editAnsItem.content=ans.content
            this.editAnsItem.id=ans.id
        },
        editAnsOff(ans,ans_index) {
            this.$set(this.projectAns[ans_index],'isEdit',false) 
            this.editAnsItem.content=''
            this.editAnsItem.id=''
        },
        async editAnswer(ans,ans_index){
          let flag = 1;
            if(this.editAnsItem.content.trim() == '' || this.editAnsItem.content == null ){
                this.errorOb.ans_edit=true
                flag = 0 
            } else this.errorOb.ans_edit=false
            if(flag == 0) return
            const res = await this.callApi("post",'/sales/edit_ans_tech',this.editAnsItem);
            if (res.status == 200) {
                this.projectAns[ans_index].content =  this.editAnsItem.content;
                this.$set(this.projectAns[ans_index],'isEdit',false) 
            } 
            else{
                this.swr();
            }
        },
        async showOtherAnswer(){
            let lastId = null;
            let lengthh = this.projectAns.length - 1;
            lastId = this.projectAns[lengthh].id;
            const res = await this.callApi('get',`/sales/answerShow?question_id=${this.$route.params.questionId}&last_id=${lastId}`)
            if(res.status == 200){
                 for (let i of res.data) {
                    this.projectAns.push(i);
                }
            }
            else{
                this.swr()
            }
        },

        // ---------------------Answer Reply----------------------
        replyInputBox(ans_index) {
            // if(this.projectAns[ans_index].isAnswer==0){
            //     this.replyItem.content=''
            //     this.projectAns[ans_index].isAnswer=1;
                
            //     return;
            // }
            // else{
            //     this.projectAns[ans_index].isAnswer=0
            //     this.replyItem.content=''
            //     return;
            //  }
            this.errorOb.reply_add=false
            if(this.replyInput==ans_index)
            return this.replyInput =-1
            this.replyItem.content=''
            this.replyInput = ans_index
        },
        async sendReply(item,ans_index){
          let flag = 1;
            if(this.replyItem.content.trim() == '' || this.replyItem.content == null ){
                this.errorOb.reply_add=true
                flag = 0 
            } else this.errorOb.reply_add=false
            if(flag == 0) return
            this.replyItem.answer_id=item.id
            this.replyItem.user_id=this.authInfo.id
        	const res = await this.callApi('post','/sales/replyAdd',this.replyItem)
			if(res.status==200){
                this.s('Reply added successfully!')
                this.newReplyAdd=true
                 this.projectAns[ans_index].__meta__.total_reply+=1
                if(this.projectAns[ans_index].reply){
                    if(this.replyOn!=ans_index){
                       this.projectAns[ans_index].reply=[] 
                    }
                    this.projectAns[ans_index].reply.unshift(res.data);
                    this.replyOn = ans_index
                }
                else{
                    this.$set(this.projectAns[ans_index],'reply',[]) 
                    //   this.projectAns[ans_index].reply=res.data;
                     this.projectAns[ans_index].reply.unshift(res.data);
                      this.replyOn = ans_index
                }
                this.replyItem={}
                
			}
			else{
				this.swr();
            }
        },
        async showAllReply(id,ans,ans_index) {
            if (this.projectAns[ans_index].reply && this.projectAns[ans_index].reply.length==this.projectAns[ans_index].__meta__.total_reply) 
            {
                if(this.replyOn==ans_index)
                return this.replyOn =-1
                this.replyOn = ans_index
            }
            else if(this.projectAns[ans_index].reply && this.newReplyAdd==true){
              const res = await this.callApi('get',`/sales/allReplyShow?answer_id=${id}`)
                if (res.status == 200) {
                    this.$set(this.projectAns[ans_index], 'reply' , res.data)
                    this.newReplyAdd=false
                } 
                else {
                    this.swr();
                }  
            }
            else{
                const res = await this.callApi('get',`/sales/allReplyShow?answer_id=${id}`)
                if (res.status == 200) {
                    this.$set(this.projectAns[ans_index], 'reply' , res.data)
                   if(this.replyOn==ans_index)
                    return this.replyOn =-1
                    this.replyOn = ans_index

                    this.newReplyAdd=false
                } 
                else {
                    this.swr();
                }
            }
         },
         async showOtherReplies(id,ans_index){
            let lastId = null;
            let lengthh = this.projectAns[ans_index].reply.length - 1;
            lastId = this.projectAns[ans_index].reply[lengthh].id;

            const res = await this.callApi('get',`/sales/allReplyShow?answer_id=${id}&last_id=${lastId}`)
            if(res.status == 200){
                 for (let i of res.data) {
                    this.projectAns[ans_index].reply.push(i);
                }
            }
            else{
                this.swr()
            }
         },
          async deleteAnswerReply(id,ans_index,reply_index){
            if(!confirm("Are you sure to delete this reply")){
				return;
			}
			let ob = {
				id:id
			}
			const res = await this.callApi('post','/sales/delete_reply_tech',ob)
			if(res.status == 200){
				// this.i('Reply have been successfully Deleted!')
                this.projectAns[ans_index].reply.splice(reply_index,1)
                this.projectAns[ans_index].__meta__.total_reply-=1
			}
			else{
				this.swr();
            }
        },
        editReplyOn(replyItem,ans_index, reply_index) {
            this.errorOb.reply_edit=false
            if(this.replyEditOn==reply_index)
            return this.replyEditOn =-1
            this.replyEditOn = reply_index

            this.$set(this.projectAns[ans_index].reply[reply_index],'isEdit',true) 
            this.editReplyItem.content=replyItem.content
            this.editReplyItem.id=replyItem.id
        },
        editReplyOff(ans_index, reply_index) {
            this.$set(this.projectAns[ans_index].reply[reply_index],'isEdit',false) 
            this.editReplyItem.content=''
            this.editReplyItem.id=''
        },
        async editReply(replyItem, reply_index, ans_index){
           let flag = 1;
            if(this.editReplyItem.content.trim() == '' || this.editReplyItem.content == null ){
                this.errorOb.reply_edit=true
                flag = 0 
            } else this.errorOb.reply_edit=false
             if(flag == 0) return
            const res = await this.callApi("post",'/sales/edit_reply_tech', this.editReplyItem);
            if (res.status == 200) {
               this.$set(this.projectAns[ans_index].reply[reply_index],'content',this.editReplyItem.content) 
               this.$set(this.projectAns[ans_index].reply[reply_index],'isEdit',false) 
            } 
            else {
                this.swr();
            }
        },
        goBack() {
             window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        }

    }, 
     filters:{
        timeAgo(date){
            var current = new Date(); 
            var previous = new Date(date); 
            var msPerMinute = 60 * 1000;
            var msPerHour = msPerMinute * 60;
            var msPerDay = msPerHour * 24;
            var msPerMonth = msPerDay * 30;
            var msPerYear = msPerDay * 365;
            var elapsed = current - previous;
            var result = ''
            if (elapsed < msPerMinute) {
                result= Math.round(elapsed/1000) + ' seconds ago';   
            }
            else if (elapsed < msPerHour) {
                result = Math.round(elapsed/msPerMinute) + ' minutes ago';   
            }

            else if (elapsed < msPerDay ) {
                result = Math.round(elapsed/msPerHour ) + ' hours ago';   
            }

            else if (elapsed < msPerMonth) {
                result =  Math.round(elapsed/msPerDay) + ' days ago';   
            }

            else if (elapsed < msPerYear) {
                result =  Math.round(elapsed/msPerMonth) + ' months ago';   
            }
            else {
                result =  Math.round(elapsed/msPerYear ) + ' years ago';   
            }
            return result
        }
    },

	async created(){
        this.loading = true
        const [res1,res2] = await Promise.all([ 
			this.callApi('get',`/sales/single_question_tech?question_id=${this.$route.params.questionId}`),
			this.callApi('get',`/sales/answerShow?question_id=${this.$route.params.questionId}`)
        ])
		if(res1.status == 200 && res2.status == 200) {
            this.projectQues= res1.data
            this.projectAns = res2.data
		}
		else{
			this.swr()
		}
		this.loading = false
	}, 
}
</script>