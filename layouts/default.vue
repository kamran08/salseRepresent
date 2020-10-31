<template>
    <div id="main-wrapper">
      <!-- Menu --> 
      <nav v-if="isShowNavBar" :class="sidebar? '_navbar _fixed_top _navbar_light _navbar_wap _mini_navbar' : '_navbar _fixed_top _navbar_light _navbar_wap'">
        <div class="_navbar_left">
          <div class="_navbar_logo">
            <a href="" class="_navbar_logo_link">
              <img class="_navbar_logo_img" src="/img/main-logo.png" alt="" title="">
              <img class="_navbar_logo_img_text" src="/img/header.png" alt="" title="">
            </a>
          </div>

          <div class="_navbar_left_button">
            <div @click="sidebar = !sidebar" class="_navbar_left_icon">
              <Icon type="md-list" />
            </div>

            <div @click="mobSidebar = !mobSidebar" class="_navbar_left_icon _mob_icon">
              <Icon type="md-list" />
            </div>
          </div>

          <!-- <div class="_navbar_search">
            <div class="_navbar_search_main_all">
              <div class="_navbar_search_main">
                <Icon type="ios-search-outline" />
                <input type="text"  placeholder="Search..">
                <div class="outline"></div>
              </div>
            </div>
          </div> -->
        </div>

        <div class="_navbar_right">
          <ul class="_navbar_right_list">
            <li class="_1noti">
              <Dropdown trigger="click" placement="bottom-end">
                <a href="javascript:void(0)" @click="getNotificationInitial">
                  <Icon type="ios-notifications-outline" />
                  <p class="_noti_num" v-if="unseenNotification>0">{{ unseenNotification }}</p>
                </a>
                <DropdownMenu slot="list">
                    <p class="_1noti_title">Notifications</p>
                    <template v-if="isNotificationLoading">
                      <div class="_noti_load demo-spin-col">
                        <Spin fix>
                          <Icon type="ios-loading" size=18 class="demo-spin-icon-load"></Icon>
                          <div>Loading</div>
                        </Spin>
                      </div>
                    </template>
                    <template v-else-if="notificationData.length==0">
                      <div class="no_data">
                        <p class="no_data_text">No data found</p>
                      </div>
                    </template>
                    <template v-else>
                      <div class="_1noti_list _1scrollbar" v-for="(item,index) in notificationData" :key="index" @click="seenNotificationUndate(item, index)">
                        <!-- Items -->
                        <nuxt-link :to="`${item.link}`" class="_1noti_list_items" v-bind:class="item.isSeen == 0 ? '_active' : '' ">
                          <div class="_1noti_list_pic">
                            <span v-if="item.user">
                                <img class="_1noti_list_img" :src="item.user.image" alt="" title="">
                            </span>
                          </div>

                          <div class="_1noti_list_details">
                            <p class="_1noti_list_title _1text_overflow">{{ item.description }}</p>

                            <p class="_1noti_list_time">{{ item.created_at | timeAgo }}</p>
                          </div>
                        </nuxt-link>
                        <!-- Items -->
                      </div>

                      <div class="_1noti_see">
                        <nuxt-link to="/notification" class="_1noti_see_text _2link" href="" v-if="totalNotification>5 && totalNotification>notificationData.length">See all notifications</nuxt-link>
                      </div>
                    </template>
                </DropdownMenu>
            </Dropdown>
            </li>

            <li class="_1noti">
              <Dropdown trigger="click" placement="bottom-end">
                <nuxt-link to="/chat">
                  <Icon type="ios-mail-outline" />
                  <p v-if="unseenConversation.length>0" class="_noti_num">{{unseenConversation.length}}</p>
                </nuxt-link>
              </Dropdown>
            </li>

            <li class="_nav_pro">
              <Dropdown trigger="click" placement="bottom-end">
                <a href="javascript:void(0)">
                  <div class="_nav_pro_pic">
                    <img class="_nav_pro_img" :src="authInfo.image" alt="" title="">
                  </div>
                </a>
                <DropdownMenu slot="list">
                  <div class="_nav_pro_main">
                    <div class="_nav_pro_top">
                      <div class="_nav_pro_top_pic">
                        <img class="_nav_pro_top_img" :src="authInfo.image" title="" alt="">
                      </div>

                      <div class="_nav_pro_top_details">
                        <p class="_nav_pro_top_name">{{authInfo.firstname}} {{authInfo.lastname}}</p>
                        <p class="_nav_pro_top_email">{{authInfo.email}}</p>
                      </div>
                    </div>

                    <div class="_nav_pro_list_main _1border_color">
                      <ul class="_nav_pro_list">
                        <li>
                          <nuxt-link to="/profile">
                            <Icon type="md-person" />
                            <p class="_nav_pro_list_text">My Profile</p>
                          </nuxt-link>
                        </li>

                        <!-- <li>
                          <a href="">
                            <Icon type="md-cash" />
                            <p class="_nav_pro_list_text">My Balance</p>
                          </a>
                        </li> -->

                        <li>
                          <nuxt-link to="/chat">
                            <Icon type="md-mail" />
                            <p class="_nav_pro_list_text">My Inbox</p>
                          </nuxt-link>
                        </li>
                      </ul>
                    </div>

                    <!-- <div class="_nav_pro_list_main _1border_color">
                      <ul class="_nav_pro_list">
                        <li>
                          <a href="">
                            <Icon type="ios-cog" />
                            <p class="_nav_pro_list_text">Account Setting</p>
                          </a>
                        </li>
                      </ul>
                    </div> -->

                    <div class="_nav_pro_list_main _1border_color">
                      <ul class="_nav_pro_list">
                        <li>
                          <a @click="logout" >
                            <Icon type="ios-exit" />
                            <p class="_nav_pro_list_text">Log Out</p>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </DropdownMenu>
              </Dropdown>
            </li>
          </ul>
        </div>
      </nav>
      <!-- Menu end -->
      <!-- Sidebar  -->
      <aside v-if="isShowNavBar" :class="[(sidebar? '_left_sidebar _hide_sidebar':'_left_sidebar') , (lightSidebar? '_light_sidebar' : ''), (darkSidebar? '_dark_sidebar' : ''), (mobSidebar? '_mobSidebarOpen':'')]">
        <div class="_left_sidebar_main">
          <div class="_left_sidebar_top">
            <p class="_mob_side_close" @click="mobSidebar = false"><Icon type="md-close" /></p>
            <div class="_mobile_logo">
              <a href="" class="_navbar_logo_link">
                <img class="_navbar_logo_img" src="/img/main-logo.png" alt="" title="">
                <img class="_navbar_logo_img_text" src="/img/header.png" alt="" title="">
              </a>
            </div>

            <div class="_left_sidebar_top_main">
              <div class="_left_sidebar_pic">
                <img class="_left_sidebar_img" :src="authInfo.image" alt="" title="">
              </div>
            </div>
            <p class="_left_sidebar_pro">{{authInfo.firstname}} {{authInfo.lastname}}</p>
            <p class="_left_sidebar_name">Agent# {{authInfo.reference}}</p>
          </div>
          
          <div class="_left_sidebar_menu _1scrollbar">
            <Menu :theme="theme3" :active-name="activeRoute">
              <MenuGroup title="Dashboard">
                <p class="_group_name"><Icon type="ios-more" /></p>
                <MenuItem to="/" name="index">
                    <Icon type="md-home" />
                    <span class="submenu_text">Dashboard</span>
                </MenuItem>
                <MenuItem to="/chat" name="chat">
                  <Icon type="ios-mail" />
                  <span class="submenu_text">Chat</span>
                </MenuItem>
                <MenuItem to="/clients" name="clients">
                  <Icon type="md-people" />
                  <span class="submenu_text">Clients</span>
                </MenuItem>
                <MenuItem to="/agents" name="agents">
                  <Icon type="md-people" />
                  <span class="submenu_text">My Agents</span>
                </MenuItem>


                 <MenuItem to="/project" name="project">
                    <Icon type="ios-list-box" />
                    <span class="submenu_text">Policies</span>
                  </MenuItem>
                 <MenuItem to="/payroll" name="payroll">
                    <Icon type="ivu-icon ivu-icon-ios-basket" />
                    <span class="submenu_text">Payroll</span>
                  </MenuItem>
                 <MenuItem to="/training" name="training">
                   <Icon type="md-videocam" />
                    <span class="submenu_text">Training</span>
                  </MenuItem>
                <MenuItem to="/profile" name="profile">
                  <Icon type="ios-settings" />
                  <span class="submenu_text">Settings</span>
                </MenuItem>
                <MenuItem to="/contracting" name="contracting">
                  <Icon type="ivu-icon ivu-icon-ios-analytics" />
                  <span class="submenu_text">Contracting</span>
                </MenuItem>
                <!-- here -->
              </MenuGroup>
            </Menu>
          </div>
          
          <div class="_left_sidebar_bottom _1border_color">
            <Menu :theme="theme3" active-name="8">
              <Submenu name="5">
                    <template slot="title">
                    <Icon type="ios-cloudy" />
                    <span class="submenu_text">Theme</span>
                  </template>
                <MenuItem name='8'>
                    <Icon @click="lightSidebarClick" type="ios-sunny" />
                    <span @click="lightSidebarClick" class="submenu_text">Light</span>
                </MenuItem>
                <MenuItem name="9">
                    <Icon @click="darkSidebarClick" type="ios-moon" />
                    <span @click="darkSidebarClick" class="submenu_text">Dark</span>
                </MenuItem>
                </Submenu >
                <MenuItem name='10' @click="logout">
                    <Icon type="md-log-out" />
                    <span class="submenu_text">Logout</span>
                </MenuItem>
            </Menu>
            <!-- <p>Change theme</p>
            <RadioGroup v-model="theme3">
                <Radio label="light"></Radio>
                <Radio label="dark"></Radio>
            </RadioGroup> -->
          </div>
        </div>
      </aside>
      <!-- Sidebar -->
      <div :class="[(sidebar? '_main_layout _mini_main_layout':'_main_layout') , (isShowNavBar? '':'_login_layout')]"> 
         <Nuxt />
        <MyFooter v-if="isShowNavBar && $route.path  != '/chat'"/>
      </div>
    </div>
</template>

<script>
import MyFooter from "~/components/footer.vue";
import callingModal from "~/components/call/video-modal.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    MyFooter,
    callingModal,
  },
  computed: {
    ...mapGetters({
      isCalling: "messenger/getShowCallingModal",
    }),
  },
  data() {
    return {
       sidebar:false,
       spinLoading:false,
      isHovering: false,
      theme3: 'light',
      lightSidebar: true,
      darkSidebar: false,
      mobSearchOpen: false,
      mobSidebar: false,
      isShowNavBar:true,
      activeRoute:'index',
      notShowNavBar:[
        'login',
        'register',
        'forgetpassword',
        'videocall',
        
      ],
      notificationData: [],
      totalNotification: "",
      totalMsgNotification: 0,
      isNotification: false,

      isNotificationLoading: false,
    };
  },
  methods: {
    sidebarCollapse() {
      var x = !this.isSidebar;
      this.$store.commit("setSidebar", x);
    },
    lightSidebarClick(){
      this.lightSidebar = true
      this.darkSidebar = false
      console.log('light')
    },
    darkSidebarClick(){
      this.darkSidebar = true
      this.lightSidebar = false
    },
    checkNavbar(newVal){
      let index = this.notShowNavBar.findIndex(d => d == newVal);
      if(index == -1) this.isShowNavBar = true;
      else this.isShowNavBar = false
    },
    async logout() {
      this.i("logging out ....");
      const res = await this.callApi("get", "/logout");
      if (res.status == 200) {
        window.location = "/login";
      } else {
        this.swr();
      }
    },
      async getNotificationInitial() {
      this.isNotification = !this.isNotification;

      if (!this.isNotification) {
        return;
      }
      this.isNotificationLoading = true;
      const res = await this.callApi(
        "get",
        `/sales/get_all_notification_tech?with_limit=${5}`
      );
      if (res.status == 200) {
        this.notificationData = res.data;
      } else {
        this.swr();
      }
      this.isNotificationLoading = false;
    },
    async seenNotificationUndate(item, index) {
      let ob = {
        id: item.id,
      };
      const res = await this.callApi(
        "post",
        "/sales/seenNotificationUndate",
        ob
      );
      if (res.status == 200) {
        if (item.isSeen == 0) {
          let a = this.unseenNotification;
          a--;
          this.$store.commit("SetNotification", a);
        }
        this.notificationData[index].isSeen = 1;
      } else {
        this.swr();
      }
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
  async created() {
    this.isLoginPage = this.isLoggedIn ? false : true;
    this.activeRoute = this.$route.name;
    
    this.checkNavbar(this.$route.name)
    if(!this.authInfo) return
    const [res1, res2 , res3] = await Promise.all([
      this.callApi("get", "/sales/get_unseen_notification_tech"),
      this.callApi("get", "/sales/notification_count_tech"),
      this.callApi("get", "/app/getUnseenMessages"),
    ]);
    if (res1.status == 200 && res2.status == 200 && res3.status == 200) {
      this.$store.commit("SetNotification", res1.data);
      this.totalNotification = res2.data;
      this.$store.commit('messenger/unseenConversation',res3.data.data)
      // this.totalMsgNotification = res3.data.data.length;
    } else {
      this.swr();
    }
  },
  watch: {
    "$route.name": function (newVal, oldVal) {
      this.activeRoute = newVal;
       this.$store.commit("messenger/setActivePerson", {});
      console.log('active route');
      console.log(this.activeRoute);
      this.checkNavbar(newVal);
      // watch it
      if(window.innerWidth < 1199){
          this.mobSidebar=false
      }
    },
  },
  mounted() {
    if (this.authInfo) {
      const ws = adonis.Ws(this.wsUrl);
      ws.connect();
      const chat = ws.subscribe(`notification:${this.authInfo.id}`);
      chat.on("error", (error) => {
        console.log(error);
      });

      ws.getSubscription(`notification:${this.authInfo.id}`).on(
        "message",
        (data) => {
          // chat sent
          if (data.type === "chat-sent") {
            console.log("data", data);
            let today =  this.getToday();
            let ob ={
              index:today,
              data:data.input
            }
            this.$store.commit("messenger/pushIntoLastChatsBackend", ob);
          }
          if (data.type === "new-notification") {
            console.log("data", data);
            this.$store.commit("IncreaseNotification", {});
          }

          // call incoming
          if (data.type === "call-incoming") {
            console.log("data", data);

            let sound = "/calling.mp3";
            let audio = new Audio(sound);

            this.$ls.set("chatroom", data.input.room);
            this.$ls.set(
              "roomUser",
              JSON.stringify({
                firstname: data.input.firstName,
                lastname: data.input.lastName,
              })
            );
            // this.$store.commit("messenger/setChatRoom", data.input.room);
            // this.$store.commit("messenger/setRoomUser", {
            //   firstname: data.input.firstName,
            //   lastname: data.input.lastName,
            // });
            if (
              confirm(
                `${data.input.firstName + " " + data.input.lastName} is calling`
              )
            ) {
              window.open(
                `/videocall?peer_id=${data.input.user_id}&audio_only=&type=first`,
                "myWindow",
                "width=1080,height=700"
              );
            }
            // this.$store.commit("messenger/setShowCallingModal", true);
          }
        }
      );
    }
  },
};
</script>

<style scoped>
.loading_gif {
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  height: 300px;
}
.dropdown-content {
  min-height: 300px;
}
.no_notification i {
  font-size: 35px;
}
.no_notification {
  display: flex;
  align-items: center;
  text-align: center;
}
.no_notification p{
  display: grid;
  margin: 0 auto;
}
.demo-spin-icon-load{
    animation: ani-demo-spin 1s linear infinite;
}
@keyframes ani-demo-spin {
    from { transform: rotate(0deg);}
    50%  { transform: rotate(180deg);}
    to   { transform: rotate(360deg);}
}
.demo-spin-col{
    height: 200px;
    position: relative;
    /* border: 1px solid #eee; */
}
</style>