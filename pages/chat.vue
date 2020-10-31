<template>
  <div class="_main_content">
    <div class="_box _b_radious3">
        <div class="_1messenger">
            <!-- Left -->
            <div class="_1messenger_left" :class="messengerLeft? '_1messenger_left_close' : ''">
                <div class="_1messenger_left_header">
                    <div class="_1messenger_search_header">
                        <div class="_1messenger_search_all">
                            <div class="_1messenger_search">
                                <Icon type="ios-search-outline" />
                                <input type="text" placeholder="Search.." v-model="search"> 
                                <div class="outline"></div>
                            </div>
                        </div>
                    </div>

                    <div class="_1messenger_left_menu">
                      <Tabs :animated="false"  @on-click="tabClick" v-model="tab" class="overflow_visible tab_margin_zero project_table">
                        <TabPane v-for="(tp,index) in tabData" :key="index" :label="tp.label" :name="tp.value">
                          <!-- loop goes here -->
                          <template v-if="getFilterChatList.length > 0 && isTabLoading == false && tab != 8"> 
                            <div class="_1messenger_chat_list_all _1scrollbar">
                            <Tooltip class="_1messenger_chat_list_tool" theme="light" :content="item.firstname" placement="top" v-for="(item, index) in getFilterChatList" :key="index">
                                <div class="_1messenger_chat_list" @click="onClickChatPersonTab(item, index)" :class="[(conversationActiveIndex == index? 'active_list': ''),(item.isNewChat == true? '_unseen' : '')]">
                                <!-- <div class="_1messenger_chat_list" :class="[(item.active? '_active':'') , (item.unseen? '_unseen' : '')]" > -->
                                    <div class="_1messenger_chat_pic">
                                        <img  class="_1messenger_chat_img" :src="item.image" alt="" title="">
                                    </div>

                                    <div class="_1messenger_chat_details">
                                        <p class="_1messenger_chat_name">{{ item.firstname }} {{item.lastname}} </p>
                                        <p v-if="item.typing" class="_typing">Typing..</p>

                                        <p v-else class="_1messenger_chat_text">{{ item.user_type_id | userTypeName }}</p>
                                    </div>

                                    <div class="_1messenger_chat_time" >
                                        <!-- <p class="_1messenger_chat_time_text">{{ item.time }}</p> -->
                                        <p  v-if="conversationActiveIndex == index" class="_1messenger_chat_seen_icon"><Icon type="md-checkmark" /></p>
                                        <p  v-if="item.isNewChat" class="_1messenger_chat_time_panding">{{item.totalMsg}}</p>
                                    </div>
                                </div>
                            </Tooltip>
                        </div>
                          </template>
                          <template v-else-if="isTabLoading">
                            <div class="demo-spin-col">
                              <Spin fix>
                                  <Icon type="ios-loading" size="27" class="demo-spin-icon-load"></Icon>
                                  <div style="font-size: 15px;margin-top:12px" >Please Wait...</div>
                              </Spin>
                            </div>
                          </template>
                          <template v-else>
                            <h2 class="no_conversation">You have no conversation!</h2>
                          </template>
                        </TabPane>
                        <TabPane label="Projects" name="8">
                            <!-- loop goes here -->
                            <template v-if="getFilterProjectChatList.length > 0 && isTabLoading == false && tab == 8"> 
                              <div class="_1messenger_chat_list_all _1scrollbar">
                                <Tooltip class="_1messenger_chat_list_tool" theme="light" :content="item.id" placement="right" v-for="(item, index) in getFilterProjectChatList" :key="index">
                                  <div class="_1messenger_chat_list" @click="onClickChatPersonTab(item, index)" :class="[(conversationActiveIndex == index? 'active_list': ''),(item.isNewChat == true? '_unseen' : '')]" >
                                  <!-- <div class="_1messenger_chat_list" :class="[(item.active? '_active':'') , (item.unseen? '_unseen' : '')]" > -->
                                      <div class="_1messenger_chat_pic">
                                          <img  class="_1messenger_chat_img" src="/img/discussion.png" alt="" title="">
                                      </div>

                                      <div class="_1messenger_chat_details">
                                          <p class="_1messenger_chat_name">{{ item.project.name }}  </p>
                                          <!-- <p v-if="item.typing" class="_typing">Typing..</p> -->

                                          <!-- <p  class="_1messenger_chat_text">{{ item.user_type_id | userTypeName }}</p> -->
                                      </div>

                                        <div class="_1messenger_chat_time"  >
                                          <!-- <p class="_1messenger_chat_time_text">{{ item.time }}</p> -->
                                          <p v-if="conversationActiveIndex == index" class="_1messenger_chat_seen_icon"><Icon type="md-checkmark" /></p>
                                          <p v-if="item.isNewChat" class="_1messenger_chat_time_panding">{{item.totalMsg}}</p>
                                      </div>
                                  </div>
                              </Tooltip>
                          </div>
                            </template>
                            <template v-else-if="isTabLoading">
                              <div class="demo-spin-col">
                                <Spin fix>
                                    <Icon type="ios-loading" size="27" class="demo-spin-icon-load"></Icon>
                                    <div style="font-size: 15px;margin-top:12px" >Please Wait...</div>
                                </Spin>
                              </div>
                            </template>
                            <template v-else>
                              <h2 class="no_conversation">You have no conversation!</h2>
                            </template>
                        </TabPane>
                        
                      </Tabs>
                    </div>
                </div>
            </div>
            <!-- Left -->

            <!-- Right -->
            <div class="_1messenger_right">
                <!-- Header -->
                <div class="_1messenger_right_header">
                    <div class="_1messenger_right_header_left _active">
                        <a href="" class="_1messenger_right_pic">
                            <img class="_1messenger_right_img" :src="activePerson.image" alt="" title="">
                        </a>
                        <div class="_1messenger_right_heder_details">
                            <a href="" class="_1messenger_right_name _1text_overflow"> {{ activePerson.firstname + " " + activePerson.lastname }}</a>
                            <!-- <p class="_1messenger_right_on">Online</p> -->
                        </div>
                    </div>
                    <div class="_1messenger_right_header_right">
                        <ul class="_1messenger_right_list">
                            <li @click="onClickAudio(false)" ><Icon type="ios-call-outline" /></li>
                            <li @click="onClickAudio(true)"><Icon type="ios-videocam-outline" /></li>
                            <!-- <li>
                                <Dropdown class="_1messenger_right_list_more"  placement="bottom-right" trigger="click">
                                    <a href="javascript:void(0)">
                                        <Icon type="ios-more" />
                                    </a>
                                    <DropdownMenu slot="list">
                                        <DropdownItem>See</DropdownItem>
                                        <DropdownItem>Unfollow</DropdownItem>
                                        <DropdownItem>Block</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </li> -->
                        </ul>
                    </div>
                </div>
                <!-- Header -->
                
                <div class="_mess_chat_pro" :class="[(messengerPro? '_1messenger_pro_open' : '') , (smallProClick? '_1messenger_pro_open_small' : '')]">
                    <!-- Chat -->
                    <div class="_1messenger_right_chat">
                        <div class="_1chat_all _1scrollbar">
                          <template v-if="dates.length > 0">
                            <template v-if="totalMsg > 14 && !isLastMessage">
                                <div  v-if="isPreviousLoading" style="width: fit-content; margin: 0 auto">
                                  <img src="/loading.gif" alt />
                                </div>
                                <p v-else class="_see_pre">
                                  <span @click="getPreviousChats">See previous messages</span>
                                </p>
                              </template>
                            <div v-for="(date, date_index) in dates" :key="date_index"  id="chat-container" >
                              <!-- Days and date -->
                              <p class="_1mess_date">{{date}}</p>
                              <!-- Days and date -->
                               <div v-for="(item, chat_index) in getLastChats[date]" :key="chat_index">
                                <!-- Friend message -->
                                <div class="_1fri_mess" v-if="item.message_sender != user.id" :id="`m-${item.id}`">
                                    <div class="_1fri_mess_main">
                                        <!-- Item -->
                                        <div class="_1fri_mess_mess" v-if="item.files == null" >
                                            <p class="_1fri_mess_text">{{ item.message }}</p>
                                            <p class="_1fri_mess_time">{{ $moment(item.created_at).format("hh:mm a") }}</p>
                                        </div>
                                        <!-- Item -->
                                        <!-- image -->
                                        <div class="_1fri_mess_mess" v-if="item.files && item.message !='\n' " >
                                              <p class="_1fri_mess_text"><Tooltip :content="$moment(item.created_at).format('hh:mm a')" >{{item.message}}</Tooltip></p>
                                        </div>
                                        <div class="_1fri_mess_img_all" v-if="item.files && item.files.length>0 && isImages(item.files,1,1)>0" >
                                            <div class="_1fri_mess_pic" v-for="(it,ix) in isImages(item.files,2,1)" :key="ix"  >
                                                <img class="_1fri_mess_img" :src="it.response.url" alt="image" title="">
                                            </div>
                                        </div>
                                        <!-- image -->
                                        <!-- Files -->
                                        <div class="_1fri_files_main _1own_files" v-if="item.files && item.files.length>0 && isImages(item.files,1,2) > 0" >
                                            <div class="_1fri_files" v-for="(it,ix) in (isImages(item.files,2,2))" :key="ix">
                                                <div class="_1fri_files_icon">
                                                    <Icon type="md-document" />
                                                </div>
                                                <div class="_1fri_files_details">
                                                    <p class="_1fri_files_name _1text_overflow"><Tooltip :content="it.name">{{ it.name }}</Tooltip></p>
                                                    <p class="_1fri_files_num">{{ it.size | showAttachmentSize }}</p>
                                                </div>
                                                <div class="_1fri_files_download_main">
                                                    <div class="_1fri_files_download">
                                                      <a :href="it.response.url" target="_blank" rel="noopener noreferrer"><Icon type="md-download" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Files -->
                                    </div>
                                    <!-- Friend image -->
                                    <div class="_1fri_pic">
                                      <template v-if="tab != 8">
                                        <img class="_1fri_img" :src="activePerson.image" alt="" title="">
                                      </template>
                                      <template v-else-if="tab == 8">
                                        <img class="_1fri_img" :src="item.sender_image.image" alt="" title="">
                                      </template>
                                    </div>
                                    <!-- Friend image -->
                                </div>
                                <!-- Friend message -->
                                <!-- Own message -->
                                <div class="_1own_mess" v-else :id="`m-${item.id}`">
                                    <div class="_1own_mess_main">
                                        <!-- Item -->
                                        <!-- <div class="_1own_mess_mess">
                                            <p class="_1own_mess_text">Hi</p>
                                        </div> -->
                                        <!-- Item -->
                                            <div class="_1own_mess_mess" v-if="item.files == null">
                                              <p class="_1own_mess_text">{{ item.message }}</p>
                                              <p class="_1own_mess_time">{{ $moment(item.created_at).format("hh:mm a") }}</p>
                                          </div>
                                        

                                        <!-- Item -->
                                        <div class="_1own_mess_mess" v-if="item.files && item.message !='\n' ">
                                            <p class="_1own_mess_text"><Tooltip :content="$moment(item.created_at).format('hh:mm a')" >{{item.message}}</Tooltip></p>
                                        </div>
                                        <!-- Item -->

                                        <!-- image -->
                                          <div class="_1fri_mess_img_all _1own_mess_img_all" v-if="item.files && item.files.length>0 && isImages(item.files,1,1)>0" >
                                            <div class="_1fri_mess_pic" v-for="(it,ix) in isImages(item.files,2,1)" :key="ix"  >
                                                <img class="_1fri_mess_img" :src="it.response.url" alt="image" title="">
                                            </div>
                                        </div>
                                        
                                        <!-- image -->

                                        <!-- Files -->
                                        <div class="_1fri_files_main" v-if="item.files && item.files.length>0 && isImages(item.files,1,2) > 0" >
                                            <div class="_1fri_files" v-for="(it,ix) in (isImages(item.files,2,2))" :key="ix">
                                                <div class="_1fri_files_icon">
                                                    <Icon type="md-document" />
                                                </div>

                                                <div class="_1fri_files_details">
                                                    <p class="_1fri_files_name _1text_overflow"><Tooltip :content="it.name">{{ it.name }}</Tooltip></p>
                                                    <p class="_1fri_files_num">{{ it.size | showAttachmentSize }}</p>
                                                </div>

                                                <div class="_1fri_files_download_main">
                                                    <div class="_1fri_files_download">
                                                      <a :href="it.response.url" target="_blank" rel="noopener noreferrer"><Icon type="md-download" /></a>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Files -->
                                    </div>
                                </div>
                                <!-- Own message -->
                              </div>
                            </div>
                          </template>

                          <template v-else>
                            <div class="_no_con">
                              <img class="_no_con_img" src="/notFound.png" alt="" title="">
                            </div>
                          </template>
                        </div>
                        
                        <div class="_1mess_textarea">
                          <div class="_1mess_textarea_top">
                            <template v-if="imageUploadList.length>0 " >
                              <div class="demo-upload-list" v-for="(item, index) in imageUploadList" :key="index">
                                  <template>
                                      <img :src="item.response.url">
                                      <div class="demo-upload-list-cover">
                                          <Icon type="ios-trash-outline" @click.native="handleRemove(item,index)"></Icon>
                                          <Icon type="ios-eye-outline" @click.native="visible = true,imgName = item.response.url" />
                                      </div>
                                  </template>
                              </div>
                            </template>
                            <template v-if="filesUploadList.length>0 ">
                              <div class="_1fri_files" v-for="(it, index) in filesUploadList" :key="index" >
                                  <div class="_1fri_files_icon">
                                      <Icon type="md-document" />
                                  </div>

                                  <div class="_1fri_files_details">
                                      <p class="_1fri_files_name _1text_overflow"><Tooltip :content="it.name">{{ it.name }}</Tooltip></p>
                                      <p class="_1fri_files_num">{{ it.size | showAttachmentSize }}</p>
                                  </div>

                                  <div class="_1fri_files_download_main">
                                      <div class="_1fri_files_download">
                                        <Icon type="ios-trash-outline" @click.native="handleRemove(it,index)"></Icon>
                                      </div>
                                  </div>
                              </div>
                            </template>

                        </div>
                        <div class="_1mess_textarea_main">
                                <div class="_1mess_textarea_one">
                                    <div class="_1mess_textarea_one_icon">

                                      <Upload
                                        ref="upload"
                                        :show-upload-list="false"
                                        :format="['jpg','jpeg','png','pdf','doc','docx','gif','mp4','flv','avi','mov','wmv','mkv',]"
                                        :max-size="20480"
                                        :on-format-error="handleFormatError"
                                        :on-progress="handleProgress"
                                        :on-exceeded-size="handleMaxSize"
                                        :before-upload="handleBeforeUpload"
                                        :on-success="handleSuccess"
                                        multiple
                                        type="drag"
                                        :action="`${apiUrl}client/messenger/upload`"
                                        style="width: 100% !important"
                                      >
                                        <Icon type="md-cloud-upload" />
                                      </Upload>
                                    
                                    </div>
                                </div>

                                <div class="_1mess_textarea_input">
                                    <Input type="textarea" :autosize="{minRows: 1,maxRows: 5}"  v-model="form.message" placeholder="Start typing your message.." @on-enter="insertChat()" />
                                    <div class="_1mess_textarea_emoj">
                                        <Icon type="md-happy" />
                                    </div>
                                </div>

                                <div class="_1mess_textarea_send">
                                    <Icon type="md-send" />
                                </div>
                            </div>
                        </div>

                        <!-- Profile button -->
                        <div @click="proClick" class="_pro_button">
                            <img class="_pro_button_img" :src="activePerson.image" alt="" title="">
                        </div>

                        <div @click="smallProClick = true" class="_pro_button _small_pro_button">
                            <img class="_pro_button_img" src="/img/ONE.jpg" alt="" title="">
                        </div>
                        <!-- Profile button -->
                    </div>
                    <!-- Chat -->

                    <!-- Profile -->
                    <div class="_1mess_pro _1scrollbar">
                        <p @click="closeProClick" class="_1mess_pro_close"><Icon type="md-close" /></p>

                        <a href="" class="_1mess_pro_pic">
                            <img class="_1mess_pro_img" :src="activePerson.image" alt="" title="">
                        </a>

                        <a class="_1mess_pro_name" href="">{{ activePerson.firstname + " " + activePerson.lastname }}</a>

                        <p class="_1mess_pro_pro">{{activePerson.user_type_id | userTypeName}}</p>

                        <ul class="_1mess_pro_list" v-if="tab !=8">
                            <li>{{activePerson.phone}} </li>
                            <li><a href="">{{activePerson.email}}</a></li>
                            <li>{{activePerson.address}}</li>
                        </ul>

                        <!-- Grop list -->
                        <div class="_1mess_share" v-if="tab==8"  >
                          <p class="_1mess_share_title">Group Members</p>

                          <ul class="_group_list">
                            <!-- {{activePerson.participant}} -->

                            <li v-for="(item,index) in activePerson.participant" :key="index" >
                              <div class="_member_pic">
                                <img class="_member_img" :src="item.user.image" alt="" title="">
                              </div>
                              
                              <div class="_member_details">
                                <p class="_group_list_name _1text_overflow"><a href="">{{ item.user.firstname + ' '+item.user.lastname }}</a></p>
                                <p  class="_member_pre">{{ item.user.user_type_id | userTypeName  }}</p>
                              </div>

                              <!-- <Dropdown  trigger="click" placement="bottom-end">
                                  <a class="_group_more" href="javascript:void(0)">
                                      <Icon style="transform:rotate(90deg);font-size:20px" type="md-more" />
                                  </a>
                                  <DropdownMenu slot="list">
                                      <DropdownItem>Leave</DropdownItem>
                                      <DropdownItem>Kick</DropdownItem>
                                  </DropdownMenu>
                              </Dropdown> -->
                            </li>
                          </ul>
                        </div>
                        <!-- Grop list -->
                        
                        <!-- Share file -->
                        <!-- <div class="_1mess_share">
                            <p class="_1mess_share_title">Shared files</p>
                            
                            <div class="_1mess_share_main" v-for="(item, index) in shareFiles" :key="index">
                                <p class="_1mess_share_time">@ {{ item.time }}</p>
                                <div class="_1mess_share_pic">
                                    <img class="_1mess_share_img" :src="item.image" alt="" title="">
                                </div>

                                <div class="_1mess_share_details">
                                    <p class="_1mess_share_name _1text_overflow">{{ item.name }}</p>
                                    <p class="_1mess_share_num _1text_overflow">{{ item.stroage }}</p>
                                </div>

                                <div class="_1mess_share_down"><Icon type="md-download" /></div>
                            </div>

                            <div class="_see_more_main">
                                <p class="_1link _see_more">See more</p>
                            </div>
                        </div> -->
                        <!-- Share file -->

                        <!-- Share Photo -->
                        <!-- <div class="_1mess_share">
                            <p class="_1mess_share_title">Shared Photo</p>
                            
                            <div class="_1mess_photo_all">
                                <div class="_1mess_photo_main" v-for="(item, index) in messPhoto" :key="index">
                                    <div class="_1mess_photo">
                                        <img class="_1mess_photo_img" :src="item.image" alt="" title="">
                                    </div>
                                </div>
                            </div>

                            <div class="_see_more_main">
                                <p class="_1link _see_more">See more</p>
                            </div>
                        </div> -->
                        <!-- Share Photo -->
                    </div>
                    <!-- Profile -->
                </div>
            </div>
            <!-- Right -->
        </div>
    </div>
    
    <Modal title="View Image" v-model="visible">
        <img :src="imgName" v-if="visible" style="width: 100%">
    </Modal>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
import SingleChat from "~/components/chat/single-chat.vue";
import List from "~/components/chat/list.vue";
export default {
  components: { SingleChat, List },

  middleware: "authenticated",

  data() {
    return {
      form: {
        message: "",
        receiver: "",
        file: [],
      },
      user:{},
      urlPrefix:'sales',
      dates: [],
      singleList:[],
      groupList:[],
      dateLen:0,
      totalMsg:0,
      visible: false,
      imgName: false,
      isLoading: false,
      isShowPrevious: false,
      previousId: false,
      firstId: -1,
      search: "",
      isLastMessage: false,
      isPreviousLoading: false,
      isEmo: false,
      uploadList: [
        
      ],
      tab:10,
      isTabLoading:false,
      firstChat: [],
      conversationActiveIndex: -1,
      tabData:[
        {
          value: '10',
          label:"All"
        },
        {
          value:'3',
          label:"Clients"
        },
        {
          value:'1',
          label:"Agents"
        },
        // {
        //   value:'5',
        //   label:"Admins"
        // },
      ],
      chatLists: [],
      messengerLeft: false,
      messengerPro: false,
      smallProClick: false,
      chatData: [
          {
              image: '/img/photo.jpg',
              name: 'John Brown',
              text: 'New York No. 1 Lake Park',
              time: '11:29',
              active: true,
              unseen: false
          },
      ],
      shareFiles: [
          {
              time: '12:09 AM',
              image: '/img/photo.jpg',
              name: 'this.chatData.active.svg',
              stroage: '200 kb'
          }
      ]

    };
  },
  filters:{
    userTypeName(id){
      if(id == 1) return "Agent";
      if(id == 3) return "Client";
      if(id == 4) return "Dev";
      if(id == 5) return "Admin";
    },
    testfilters(value){
      return value/2;
    },
    toUpperCase(value) {
      return value.toUpperCase();
    },
    showAttachmentSize(value) {
      value = value / 1000;
      if (value > 1000) {
        return value + " KB";
      }
      value = value / 1000;
      if (value > 1000) {
        return value + " MB";
      }
    },
  },

  methods: {

    isImages(values,len,flag){
      let images =[];
      let files =[];
      if(values.length>0){

        for(let d of values){
          if(d.response){

            // console.log('extension.toLowerCase()',d.response.extension)
            if(d.response.extension.toLowerCase() == 'png' ||d.response.extension.toLowerCase() == 'jpg' ||d.response.extension.toLowerCase() == 'jpeg' ||d.response.extension.toLowerCase() == 'png' || d.response.extension.toLowerCase() == 'gif' ){
              images.push(d);
            }
            else files.push(d);
          }
        }
      }
      if(len == 1){
        if(flag==1) return images.length ;
        else return files.length ;
      }
      if(flag==1) return images;
      return files;
    },
    onClickAudio(isVideo) {
      let id = this.activePerson.id;

      window.open(
        `/videocall?peer_id=${id}&audio_only=${!isVideo}&type=first`,
        "myWindow",
        "width=1080,height=700"
      );
    },

    awayEmoji() {
      this.isEmo = false;
    },

    selectEmoji(emoji) {
      this.form.message += emoji.data;
    },

    async insertChat() {
      this.isShowPrevious = false;
      if (this.uploadList.length == 0 && this.form.message.trim() == "") {
        return;
      }
      let receiver = this.activePerson.id;

      if (this.uploadList.length > 0) {
        this.form.files = [];
        let files = _.clone(this.uploadList); 
        this.form.files = files ? files : [];
      }
      let today = await this.getToday();
      let tid = 0;
      if(this.dateLen > 0){
        let len = this.getLastChats[this.dates[this.dateLen-1]].length;
        tid = this.getLastChats[this.dates[this.dateLen-1]][len-1].id

      }
      let obj = {
        id: tid,
        message_sender: this.user.id,
        message_receiver: this.user.id == 1 ? 2 : 1,
        conversation_id: Number(this.$route.query.conversation_id),
        message: this.form.message,
        seen: 0,
        deleted: 0,
        sending_status: "sending",
        files: this.form.files,
      };

      // this.getLastChats.push(obj);
      let pushData = {
        index:today,
        data:obj 
      }

      this.$store.commit("messenger/pushIntoLastChats", pushData);
      this.dates = Object.keys(this.getLastChats);
      // this.dates = this.dates.reverse();
      this.dateLen = this.dates.length;

      this.form.receiver = receiver;
      this.form.receiver = receiver;
      

      let msgObj = _.clone(this.form);
      msgObj.type = 1;
      if(this.tab == 8){
        msgObj.conversation_id = this.activePerson.id;
        msgObj.type = 2
      }
      this.form.message = "";

      const res = await this.callApi("post", `/${this.urlPrefix}/messenger/chat/add`, msgObj);

      if (res.status == 200) {
        pushData = {
          index:today,
          data: {id: res.data.id}
        }
        let tdata = _.clone(this.getLastChats);
        tdata[today][tdata[today].length-1].id = res.data.id
        tdata[today][tdata[today].length-1].created_at = res.data.created_at

        // this.$store.commit("messenger/setLastPushedIdOfChats", pushData);
        this.$store.commit("messenger/setLastChats", tdata);
        // this.getLastChats[this.getLastChats.length - 1].id = res.data.id;
        this.form.message = "";
      } else {
        if (res.data.message) {
          this.e(res.data.message);
          let length = this.getLastChats.length;
          pushData = {
            index:today
          }
          this.$store.commit("messenger/spliceLastPushedChats", pushData);
        }
      }
       this.dates = Object.keys(this.getLastChats);
       this.dates = this.dates.sort();
      this.dateLen = this.dates.length;
      this.clearData();
    },

    async getPreviousChats() {
      if (this.getLastChats[this.dates[0]][0].id == this.getActiveChatFirstId) {
        return;
      }
      this.isLoading = true;

      const res = await this.callApi(
        "get",
        `/${this.urlPrefix}/messenger/conversation/previous-chat/${this.getLastChats[this.dates[0]][0].conversation_id}/${this.getLastChats[this.dates[0]][0].id}`
      );
      if (res.status == 200) {
        if (res.data.chats.length == 0) {
          this.isLastMessage = true;
          return;
        }
        res.data.chats = res.data.chats.reverse();
        this.previousId = res.data.chats[0].id;
        this.isShowPrevious = true;
        // let tdata = _.clone(this.getLastChats);
        let newdata = JSON.parse(JSON.stringify(this.getLastChats));
        console.log('getLastChats',this.getLastChats);
        console.log('tdata',newdata);
        for (let i of res.data.chats) {
          console.log('chatdate',i.chatdate)
          let isArray = Array.isArray(newdata[i.chatdate]);
          if(isArray == false) newdata[i.chatdate] = [] ;
           newdata[i.chatdate].unshift(i);
          console.log('tdata',newdata[i.chatdate]);
        }
        this.dates = Object.keys(newdata);
        this.dates = this.dates.sort();
        this.dateLen = this.dates.length;
         this.$store.commit("messenger/setLastChats", newdata);

      } else {
        if (res.data.message) this.e(res.data.message);
      }
      this.isLoading = false;
      //   this.$router.push(`/messenger?conversation_id=${id}`);
    },

    handleSuccess(res, file) {
      // this.uploadList.push(res);
      console.log('handleSuccess',file)
      this.uploadList.push(file)
    },

    handleProgress(event, file, fileList) {
      console.log("filelist", fileList);
      // this.uploadList = fileList;
      this.isUploading = true;
      // this.$store.commit("messenger/pushIntoLastChats", this.uploadList);
    },

    handleFormatError(file) {
      this.$Notice.warning({
        title: "The file format is incorrect",
        desc: "File format of " + file.name + " is incorrect.",
      });
    },

    handleMaxSize(file) {
      this.$Notice.warning({
        title: "Exceeding file size limit",
        desc: "File  " + file.name + " is too large, no more than 20M.",
      });
    },

    handleBeforeUpload() {

      // const check = this.statusData.images.length < 10;
      // if (!check) {
      //   this.$Notice.warning({
      //     title: "Up to five pictures can be uploaded at a time.",
      //   });
      // }
      // return check;
    },

    handleRemove(item,index) {
      let mIndex = this.uploadList.findIndex(d => d.uid == item.uid);
      this.uploadList.splice(mIndex, 1);
    },
    clearData() {
      this.form = {
        message: "",
        receiver: "",
        files: [],
      };
      this.isEmo = false;
      this.uploadList = [];
      // this.$refs.upload.clearFiles();
    },
    proClick(){
        this.messengerLeft = true
        this.messengerPro = true
    },

    closeProClick(){
        this.messengerLeft = false
        this.messengerPro = false
        this.smallProClick= false
    },
    onClickChatPersonTab(item, index) {
      if (this.conversationActiveIndex == index) return;
      this.isShowPrevious = false;
      this.previousId = false;
      this.isLastMessage = false;
      if(this.tab == 8){
        console.log('item');
        console.log(item);
        let objjj = {
          firstname:item.project.name,
          id: item.id,
          lastname: '',
          image: '/img/discussion.png',
          email: '',
          address: '',
          user_type_id: '',
          phone: '',
          participant:item.participant
        }
        this.$store.commit("messenger/setActivePerson", objjj);
        this.$store.commit("messenger/setChatLoading", true);
        
      }
      else {

        let obj = {
          id: item.id,
          firstname: item.firstname,
          lastname: item.lastname,
          image: item.image,
          email: item.email,
          address: item.address,
          user_type_id: item.user_type_id,
          phone: item.phone,
          // proifle picture
        };
        this.$store.commit("messenger/setActivePerson", obj);
        this.$store.commit("messenger/setChatLoading", true);
      }
      this.conversationActiveIndex = index;
      return this.getChats(item.id);
    },
    async tabClick(value){
      this.isTabLoading = true
      this.tab = value
      this.isShowPrevious = false;
      this.previousId = false;
      this.isLastMessage = false;
      // history.pushState({},null,`/chat?tab=${this.tab}&conversation_id=${id}`);
      let url = `/${this.urlPrefix}/messenger/agent/conversation/get/list?tab=${parseInt(value)}`;
      if(value){
          const res  = await this.callApi('get',url);
          console.log(res.data)
          if(res.status == 200){
              let chatLists = res.data ? res.data.conversation_lists : []
              this.$store.commit("messenger/setChatList", chatLists);
                this.assignNewChatList()
              if(chatLists.length>0){
                console.log("onClickChatPersonTab Calling")
                this.conversationActiveIndex = -1
                await this.onClickChatPersonTab(chatLists[0], 0)
              }
          }
          else{
              this.swr()
          }
      }
      this.isTabLoading = false
    },

    async getChats(id) {
      let url = `/${this.urlPrefix}/messenger/agent/conversation/get/chatWithLastPerson/${id}?chatTab=${this.tab}`;
      const res = await this.callApi("get", url);

      if (res.status == 200) {
        this.firstChat = res.data.chats;
      } else {
        if (res.status == 403) {
          this.e(res.data.message);
          this.$router.push("/");
        } else {
          if (res.data.message) this.e(res.data.message);
        }
      }
      this.checkSeenMsg(id);
      this.dates = Object.keys(this.firstChat)
      this.dateLen = this.dates.length;
      this.totalMsg = 0
      for(let dd in this.dates){

        for (let i of this.firstChat[this.dates[dd]]) {
          i.sending_status = "sent";
          this.totalMsg ++;
        }

      }

      this.$store.commit("messenger/setChatLoading", false);
      this.$store.commit("messenger/setLastChats", this.firstChat);
      // this.$router.push(`/chat?conversation_id=${id}`);
      console.log("yes from here")
      history.pushState({},null,`/chat?tab=${this.tab}&conversation_id=${id}`);
    },

    awayEmoji() {
      this.isEmo = false;
    },

    selectEmoji(emoji) {
      this.form.message += emoji.data;
    },

    assignNewChatList(){
      if(this.getChatList.length ==0) return;
      if(this.tab == 8) return this.assignNewProjectList();
      let tdata= _.clone(this.getChatList);
      for(let d of tdata){
        d.isNewChat = false;
        d.totalMsg = 0;
        let index = this.unseenConversation.findIndex(dd => dd.conversation_id == d.conversation_id);
        console.log('unseenConversation',this.unseenConversation)
        console.log('index',index)
        console.log('coversation_id',d.conversation_id)

        if(index != -1){

          d.isNewChat = true
          d.totalMsg = this.unseenConversation[index].totalMsg
        } 
      }
      this.$store.commit('messenger/setChatList',tdata)
      if(this.tab == 8){
        this.groupList = this.getChatList;
      } else{
        this.singleList = this.getChatList;
      } 
    },
    assignNewProjectList(){

      let tdata= _.clone(this.getChatList);
      for(let d of tdata){
        d.isNewChat = false;
        d.totalMsg = 0;
        let index = this.unseenConversation.findIndex(dd => dd.conversation_id == d.id);
        console.log('unseenConversation',this.unseenConversation)
        console.log('index',index)
        console.log('coversation_id',d.conversation_id)

        if(index != -1){

          d.isNewChat = true
          d.totalMsg = this.unseenConversation[index].totalMsg
        } 
      }
      this.$store.commit('messenger/setChatList',tdata)
      if(this.tab == 8){
        this.groupList = this.getChatList;
      } else{
        this.singleList = this.getChatList;
      } 
    },
    checkSeenMsg(id){
      let coversation_id = (this.tab == 8)? id : this.getChatList[this.conversationActiveIndex].conversation_id;
      
        let index = this.unseenConversation.findIndex(d => d.conversation_id == coversation_id);
        if(index != -1){
          let tdata = _.clone(this.getChatList);
          tdata[this.conversationActiveIndex].isNewChat = false
          tdata[this.conversationActiveIndex].totalMsg = 0;
          this.$store.commit('messenger/setChatList',tdata);
          let unseendata = _.clone(this.unseenConversation);
          unseendata.splice(index,1);
          this.$store.commit('messenger/unseenConversation',unseendata);
        }
        return;
      
      
    },

 
  },
  computed: {
    ...mapGetters({
      getChatList: "messenger/getChatList",
      chatLoadig: "messenger/chatLoading",
      getLastChats: "messenger/getLastChats",
      activePerson: "messenger/getActivePerson",
      isChatListChange: "messenger/isChatListChange",
      
    }),
    imageUploadList(){
      let files = [];
      if(this.uploadList.length == 0) return files;
      for(let d of this.uploadList){
          if(d.response){
            if(d.response.extension.toLowerCase() == 'png' ||d.response.extension.toLowerCase() == 'jpg' ||d.response.extension.toLowerCase() == 'jpeg' ||d.response.extension.toLowerCase() == 'png' || d.response.extension.toLowerCase() == 'gif' ){
              files.push(d);
            }
          }
      }
      return files;
    },
    filesUploadList(){
      let files = [];
      if(this.uploadList.length == 0) return files;
      for(let d of this.uploadList){
          if(d.response){
            if(d.response.extension.toLowerCase() == 'png' ||d.response.extension.toLowerCase() == 'jpg' ||d.response.extension.toLowerCase() == 'jpeg' ||d.response.extension.toLowerCase() == 'png' || d.response.extension.toLowerCase() == 'gif' ){
              console.log('no')
            }
            else files.push(d);
          }
      }
      return files;
    },
    getFilterChatList(){
        if(this.search){

          return this.singleList.filter((data)=>{                    
              return data.firstname.toUpperCase().match(this.search.toUpperCase()) ||
                data.lastname.toUpperCase().match(this.search.toUpperCase()) 
          });
        }
        else  return this.singleList;
        
    },
    getFilterProjectChatList(){
      if(this.search){

        return this.groupList.filter((data)=>{                    
            return data.project.name.toUpperCase().match(this.search.toUpperCase()) 
        });
      }
      else return this.groupList;
    },
  },

  async mounted() {
    this.isShowPrevious = false;
    setTimeout(() =>{ this.assignNewChatList(); }, 1000);
    // this.assignNewChatList();
    if (this.getChatList.length > 0) {
      let conversation_id = this.$route.query.conversation_id ? this.$route.query.conversation_id : this.getChatList[0].id
      this.conversationActiveIndex = this.getChatList.findIndex(d => d.id == conversation_id);
      await this.getChats(conversation_id);
    }
  },
    watch: {
    getLastChats() {
      this.$nextTick(function () {
        let length = this.dates.length;
        console.log('watch - lenth',this.dates[length - 1]);
        if (length > 0) {

          if (this.isShowPrevious && this.previousId) {

            let id = this.previousId;
            // let id = this.getLastChats[this.dates[length - 1]][15].id;
            let element = document.getElementById("m-" + id);
            if(element) element.scrollIntoViewIfNeeded(true);

          } else {
            let len = this.getLastChats[this.dates[length - 1]].length;
            console.log('watch - index',this.dates[length - 1]);
            console.log('watch - id',this.getLastChats[this.dates[length - 1]][len-1].id);
            let id = this.getLastChats[this.dates[length - 1]][len-1].id;

            let element = document.getElementById("m-" + id);
            element.scrollIntoView({ behavior: "smooth", block: "end" });
          }
        }
      });
    },
    isChatListChange(){
      this.assignNewChatList();
    }
  },

  async asyncData({ app, store, redirect, params, query }) {
    let chatTab = query.tab? parseInt(query.tab) : 10;
    let url = `/sales/messenger/agent/conversation/get/list?tab=${chatTab}`;  
    try {
      let { data } = await app.$axios.get(url);
      return {
        chatLists: data ? data.conversation_lists : [],
      };
    } catch (error) {
      console.log("ERROR");
      return error;
    }
  },

  created() {

    this.$store.commit("messenger/setChatList", this.chatLists);
    this.user = this.authInfo;
    this.tab = this.$route.query.tab ? this.$route.query.tab : '10';
    if (this.chatLists.length > 0) {
      let con = this.$route.query.conversation_id ? this.$route.query.conversation_id : this.chatLists[0].id;
      let index = this.chatLists.findIndex(d => d.id == con);
      let obj = {};
      if(this.tab == 8){
        obj = {
          id: this.chatLists[index].id,
          firstname: this.chatLists[index].project.name,
          lastname: '',
          image: '/img/discussion.png',
          email: '',
          address: '',
          user_type_id: '',
          phone: '',
          participant:this.chatLists[index].participant
        }
      }
      else{

        obj = {
          id: this.chatLists[index].id,
          firstname: this.chatLists[index].firstname,
          lastname: this.chatLists[index].lastname,
          image: this.chatLists[index].image,
          user_type_id: this.chatLists[index].user_type_id,
          email: this.chatLists[index].email,
          phone: this.chatLists[index].phone,
          address: this.chatLists[index].address,
          // proifle picture
        };
      }
      this.$store.commit("messenger/setActivePerson", obj);
    }
  },
};
</script>
<style scoped>
  .loading_gif {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 20%;
  }
  .active_list {
    border-left: 2px solid #2d8cf0;
    background: #f0faff;
  }
  ._1mess_textarea_top ._1fri_files {
    margin: 0px 8px 8px 0px;
    flex: 0 0 auto;
  }
  .demo-upload-list{
        width: 73px;
    height: 73px;
    text-align: center;
    line-height: 73px;
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    position: relative;
    box-shadow: 0 1px 1px rgba(0,0,0,.2);
    margin: 0px 8px 8px 0px;
    flex: 0 0 auto;
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