<template>
    <div>
      <div class="_main_content">
        <div class="row">
          <div class="col-12 col-md-12 col-lg-12">
              <div class="_1card">
                <div class="_1card_top ">
                  <div class="_1card_top_left">
                      <p class="_1card_top_title">Project</p>
                  </div>
                  <div class="_1card_top_right">
                      <ul class="_1card_top_right_list">
                          <li><Button type="primary" @click="goBack()" id="goback">Back</Button></li>
                      </ul>
                  </div>
                </div>
                <div class="_1card_body">
                  <div class="">
                    <Tabs :animated="false"  @on-click="tabClick" v-model="tabType">
                        <TabPane label="Project Details" name="document">
                        <div class="_project_main">
                          <h2 class="_project_title">Project Details</h2>

                          <h3 class="_project_name">{{projectData.name}}</h3>

                          <ul class="_project_details_list _mar_b30">
                            <li>
                              <span>Client Name</span>
                              <h5 v-if="projectData.user">
                                : {{ projectData.user.firstname }}
                                {{ projectData.user.lastname }}
                              </h5>
                            </li>
                            <li>
                              <span>Addendum</span>
                              <p v-if="projectData.addendum">
                                : {{ projectData.addendum.name }}
                              </p>
                            </li>
                            <li>
                              <span>Tech Price</span>
                              <p>: ${{ projectData.tech_price }}</p>
                            </li>
                            <li>
                              <span>Client Price</span>
                              <p>: ${{ projectData.client_price }}</p>
                            </li>
                            <li>
                              <span>Sales Price</span>
                              <p>: ${{ projectData.sales_price }}</p>
                            </li>
                            <li>
                              <span>Description</span>
                              <p>: {{ projectData.description }}</p>
                            </li>
                            <li>
                              <span>Started at:</span>
                              <p>: {{ isDate(projectData.startDate) }}</p>
                            </li>
                            <li>
                              <span>Status</span>
                              <p>: {{ projectData.status }}</p>
                            </li>
                            <li>
                              <span>Payment Status</span>
                              <p>: {{ projectData.paymentStatus }}</p>
                            </li>
                          </ul>

                          <h2 class="_project_title">All documents</h2>

                          <template v-if="projectDoc.length == 0">
                            <div
                              class="alert alert-secondary"
                              role="alert"
                            >
                              No document available!
                            </div>
                          </template>

                          <template v-else-if="loading == true">
                            <div
                              class="alert alert-secondary text-center"
                              role="alert"
                            >
                              <p
                                class="_1card_header_title text-center _padd30 no_data"
                              >
                                Loading...
                              </p>
                            </div>
                          </template>

                          <template v-else>
                            <div class="_product_details_all full-width">
                              <!-- Files -->
                              <div class="_1fri_files"
                              v-for="(item,index) in projectDoc" :key="index" v-if="item.extension!=='jpg' && item.extension!=='png' && item.extension!=='jpeg'">
                                  <div v-if="item.extension == 'pdf'" class="_1fri_files_icon">
                                      <Icon type="md-document" />
                                  </div>

                                  <div v-if="item.extension == 'docx'" class="_1fri_files_icon">
                                      <Icon type="md-document" />
                                  </div>

                                  <div class="_1fri_files_details">
                                      <p class="_1fri_files_name _1text_overflow">{{ item.url }}</p>
                                      <!-- <p class="_1fri_files_num">{{ it.size | showAttachmentSize }}</p> -->
                                  </div>

                                  <div class="_1fri_files_download_main">
                                      <div class="_1fri_files_download">
                                        <a :href="item.url" download rel="noopener noreferrer"><Icon type="md-download" /></a>
                                      </div>
                                  </div>
                              </div>
                              <!-- Files -->

                              <!-- Image -->
                              <div
                                class="_product_details_img"
                                v-for="(item,index) in projectDoc" :key="index" v-if="item.extension=='jpg' || item.extension=='png' || item.extension=='jpeg'">
                                <a :href="item.url" download
                                  ><img :src="item.url" alt=""
                                /></a>
                              </div>
                              <!-- Image -->
                            </div>
                          </template>
                        </div>
                      </TabPane>
                        <TabPane label="Project Questions" name="question"> 
                            <div class="_2card_top _mar_b20">
                                <div class="_1card_top_left">
                                    <p class="_1card_top_title">All Questions</p>
                                </div>

                                <div class="_1card_top_right">
                                    <ul class="_1card_top_right_list">
                                        <li> <Button type="primary" @click="addQuestionModalOpen" class="btn1" >Add your question</Button></li>
                                    </ul>
                                </div>
                            </div>
                            <template v-if="projectQues.length==0">
                                <div class="alert alert-secondary" role="alert">
                                    No question available!
                                </div>
                            </template>
                            <template v-else-if="loading==true">
                                <div class="alert alert-secondary text-center" role="alert">
                                    <p class="_1card_header_title text-center _padd30 no_data">Loading...</p>
                                </div>
                            </template>
                            <template v-else>
                                <div class="_card" v-for="(item,index) in projectQues" :key="index">
                                    <div class="_card_body">
                                        <div class="_card_top">
                                            <div class="_1card_details_pic">
                                                <a href="/pages/3" class="_load_div" style="color: black;">
                                                    <span v-if="item.user && item.user.image!=null"><img alt="" title="" :src="item.user.image" class="_1card_details_img" /></span>
                                                </a>
                                            </div>
                                            <div class="_1card_details">
                                                <div class="_status_card_title">
                                                    <a href="/pages/3" style="color: black;"><span v-if="item.user">{{item.user.firstname}} {{item.user.lastname}}</span></a>
                                                </div>
                                                <div class="_1card_time"><span>{{item.created_at | timeAgo}}</span> . <i class="fas fa-globe-americas"></i></div>
                                            </div>
                                        </div>

                                        <div class="_1card_status"><p class="_1card_status_text">{{item.content}}</p></div>
                                        
                                        <div class="_1card_count _1border_color _dis_flex">
                                            <ul class="_1card_count_list _flex_space">
                                                <li><i class="far fa-comment-alt"></i>
                                                    <span v-if="item.__meta__">
                                                        {{ item.__meta__.total_answer ? item.__meta__.total_answer : 0 }} Answer
                                                    </span>
                                                </li>
                                                <li>
                                                    <nuxt-link :to="`/project/${$route.params.id}/question/${item.id}`"  class="ques_view_details">
                                                        View Details
                                                    </nuxt-link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div
                                            v-if="projectData.__meta__ && projectData.__meta__.total_question > 10  && projectQues.length > 0 && projectData.__meta__.total_question > projectQues.length"
                                        >
                                            <p
                                            @click="showOtherQuestion"
                                            style="cursor: pointer;"
                                            class="see_moree">See previous questions</p>
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </TabPane>
                        <TabPane label="Project Updates" name="timeline">
                            <div class="_2card_top _mar_b20">
                                <div class="_1card_top_left">
                                    <p class="_1card_top_title">All Updates</p>
                                </div>
                            </div>
                            <div class="_card">
                                <div class="_card_body">
                                    <template v-if="projectTimeline.length==0">
                                        <div class="alert alert-secondary" role="alert">
                                            No update available!
                                        </div>
                                    </template>
                                    <template v-else-if="loading==true">
                                        <div class="alert alert-secondary text-center" role="alert">
                                            <p class="_1card_header_title text-center _padd30 no_data">Loading...</p>
                                        </div>
                                    </template>
                                    <template v-else>
                                        <div class="_recent_activity">
                                            <div class="_timeline_task" v-for="(item,index) in projectTimeline" :key="index">
                                                 <div class="_timeline_icon _bg_success">
                                                    <Icon type="md-checkmark" />
                                                </div>
                                                <div class="_timeline_details">
                                                    <div class="_timeline_title">
                                                        <h4><span v-if="item.project"> {{item.project.name}}</span></h4>
                                                        <span class="time"><Icon type="md-time" />{{isTimelineDate(item.created_at)}}</span>
                                                    </div>
                                                    <p class="_timeline_text">{{item.content}}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </template>
                                </div>
                            </div>
                        </TabPane>
                    </Tabs>

                     <Modal v-model="addQuestionModal" title="Add your question" >
                        <Form  :model="formItem"   label-position="top" class="iview_submit_form">
                            <FormItem  label="Question" :error="question_error">
                                <!-- <Input type="number" v-model="editItem.tech_price" :min="1"></Input> -->
                               <Input v-model="formItem.content" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
                            </FormItem>
                            
                        </Form> 
                        <div slot="footer">
                            <Button  @click="addQuestionModal=false">Close</Button>
                            <Button type="primary" :disabled="loading"   :loading="loading" @click="question_add_tech">{{loading==true?'Please Wait' : "Add"}}</Button>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    </div>  
    </div>
        </div>
    </div>
  <!-- </div> -->
</template>

<script>
import moment from "moment";
export default {
  middleware: "authenticated",
  data() {
    return {
      projectDoc: [],
      projectQues: [],
      projectTimeline: [],
      projectAns: [],
      loading: false,
      formItem: {
        project_id: "",
        user_id: "",
        content: "",
      },
      projectData: {},
      addQuestionModal: false,
      tabType: "",
      question_error: "",
     
    };
  },

  methods: {
    async tabClick(value) {
      this.tabType = value;
      history.pushState({},null,`/project/${this.$route.params.id}?tab=${value}`);
      if (value == "question") {
        const res = await this.callApi(
          "get",
          `/sales/all_project_ques_tech?project_id=${this.$route.params.id}`
        );
        if (res.status == 200) {
          this.projectQues = res.data;
        } else {
          this.swr();
        }
      } else if (value == "document") {
        const res = await this.callApi(
          "get",
          `/sales/all_project_doc_tech?project_id=${this.$route.params.id}`
        );
        if (res.status == 200) {
          this.projectDoc = res.data;
        } else {
          this.swr();
        }
      } else {
        const res = await this.callApi(
          "get",
          `/sales/all_project_timeline_tech?project_id=${this.$route.params.id}`
        );
        if (res.status == 200) {
          this.projectTimeline = res.data;
        } else {
          this.swr();
        }
      }
    },
    isTimelineDate(date) {
      return moment(date).format("HH:mma DD MMM YYYY");
    },
    async question_add_tech() {
      let flag = 1;
      if (this.formItem.content.trim() == "" || this.formItem.content == null) {
        this.question_error = "Question cann't be null";
        flag = 0;
      } else this.question_error = "";
      if (flag == 0) return;
      this.formItem.project_id = this.projectData.id;
      this.formItem.user_id = this.authInfo.id;
      this.loading = true;
      const res = await this.callApi(
        "post",
        "/sales/questionAdd",
        this.formItem
      );
      if (res.status == 200) {
        this.s("Question added successfully!");
        this.projectQues = res.data;
        this.projectData.__meta__.total_question += 1;
        this.formItem = {};
        this.addQuestionModal = false;
      } else {
        this.swr();
      }
      this.loading = false;
    },
    async showOtherQuestion() {
      let lastId = null;
      let lengthh = this.projectQues.length - 1;
      lastId = this.projectQues[lengthh].id;
      const res = await this.callApi(
        "get",
        `/sales/all_project_ques_tech?project_id=${this.$route.params.id}&last_id=${lastId}`
      );
      if (res.status == 200) {
        for (let i of res.data) {
          this.projectQues.push(i);
        }
      } else {
        this.swr();
      }
    },
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
    isDate(date) {
      return moment(date).format("DD-MM-YYYY");
    },
    addQuestionModalOpen() {
      //    resetFields()
      this.question_error = "";
      this.addQuestionModal = true;
    },
    handleReset(name) {
      this.addQuestionModal = false;
      this.$refs[name].resetFields();
    },
  },
  filters: {
    timeAgo(date) {
      var current = new Date();
      var previous = new Date(date);
      var msPerMinute = 60 * 1000;
      var msPerHour = msPerMinute * 60;
      var msPerDay = msPerHour * 24;
      var msPerMonth = msPerDay * 30;
      var msPerYear = msPerDay * 365;
      var elapsed = current - previous;
      var result = "";
      if (elapsed < msPerMinute) {
        result = Math.round(elapsed / 1000) + " seconds ago";
      } else if (elapsed < msPerHour) {
        result = Math.round(elapsed / msPerMinute) + " minutes ago";
      } else if (elapsed < msPerDay) {
        result = Math.round(elapsed / msPerHour) + " hours ago";
      } else if (elapsed < msPerMonth) {
        result = Math.round(elapsed / msPerDay) + " days ago";
      } else if (elapsed < msPerYear) {
        result = Math.round(elapsed / msPerMonth) + " months ago";
      } else {
        result = Math.round(elapsed / msPerYear) + " years ago";
      }
      return result;
    },
  },

  async asyncData({ app, query, params, redirect }) {
    try {
      var tabType = query.tab ? query.tab : "document";
      var projectQues = [];
      var projectDoc = [];
      var projectTimeline = [];
      var link = `/sales/all_project_doc_tech?project_id=${params.id}`;
      if (tabType == "question")
        link = `/sales/all_project_ques_tech?project_id=${params.id}`;
      else if (tabType == "timeline")
        link = `/sales/all_project_timeline_tech?project_id=${params.id}`;
      const [res1, res2] = await Promise.all([
        app.$axios.get(link),
        app.$axios.get(`/sales/get_single_project?project_id=${params.id}`),
      ]);
      if (res1.status != 200 || res2.status != 200) redirect("/");
      if (tabType == "question") projectQues = res1.data;
      else if (tabType == "question") projectTimeline = res1.data;
      else projectDoc = res1.data;

      return {
        projectData: res2.data,
        projectQues: projectQues,
        projectDoc: projectDoc,
        projectTimeline: projectTimeline,
        tabType: tabType,
      };
    } catch (error) {
      console.log(error);
    }
  },
};
</script>