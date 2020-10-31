<template>
  <!-- navbar -->
  <nav>
    <!-- brand image -->
    <div class="brand-img">
      <a>
        <!-- <h1>ERP-Sales</h1> -->
        <img class="new_pad" src="/images/supperadmin.jpeg" alt="logo" />
      </a>
    </div>
    <div class="nav-content">
      <!-- input and collapse bar -->
      <div class="nav-content-left">
        <div class="collapse-btn" @click="sidebarCollapse">
          <img src="/images/collapse-btn.png" alt="bar" />
        </div>
        <!-- <div class="search-bar">
                      <div class="search-bar-inner">
                          <button><img src="/images/search-btn.png" alt="searchicon"></button>
                          <input type="text">
                      </div>
        </div> -->
      </div>

      <!-- right part like notification, setting and signout -->
      <div class="nav-content-right">
        <ul>
          <!-- <li>
            <a href="#" class="mobile-search">
              <img src="/images/mobile-search.png" alt="searchicon" />
            </a>
          </li> -->
          <li class="profile_icon">
            <nuxt-link to="/profile">
              <Icon type="md-contact" />
            </nuxt-link>
          </li>
          <li class="dropdown-btn">
            <Dropdown trigger="click">
              <a @click="getNotificationInitial" class="notification">
                <Icon type="md-notifications-outline" />
                <span v-if="unseenNotification > 0">{{
                  unseenNotification
                }}</span>
              </a>
              <DropdownMenu slot="list">
                <template v-if="notificationData.length > 0">
                  <div
                    class="dropdown export-notification-2 dropdown-actionnnn"
                  >
                    <div class="export-header">
                      <h3>Notification</h3>
                    </div>

                    <div v-if="isNotificationLoading" class="loading_gif">
                      <a-spin size="large"></a-spin>
                    </div>
                    <div
                      v-else
                      class="dropdown-content mCustomScrollbar notification_scroll"
                    >
                      <div
                        class="dropdown-content-item"
                        v-for="(item, index) in notificationData"
                        :key="index"
                      >
                        <div
                          class="drop_div"
                          @click="seenNotificationUndate(item, index)"
                        >
                          <nuxt-link
                            :to="`${item.link}`"
                            class="drop_left"
                            v-bind:class="item.isSeen == 0 ? '_noti_items' : ''"
                          >
                            <img src="/person.jpg" alt="img" />
                            <div class="dropdown-content-details">
                              <!-- <h3>
                                <a v-if="item.user">{{ item.user.firstname }} {{ item.user.lastname }}</a>
                            </h3>-->
                              <p class="dropdown-paragraph">
                                {{ item.description }}
                              </p>
                              <p class="dropdown-time">
                                <span>
                                  <i class="far fa-clock"></i>
                                </span>
                                {{ item.created_at | timeAgo }}
                              </p>
                            </div>
                          </nuxt-link>
                        </div>
                      </div>
                      <nuxt-link to="/notification">
                        <div
                          class="_noti_see"
                          v-if="
                            totalNotification > 5 &&
                            totalNotification > notificationData.length
                          "
                        >
                          See more
                        </div>
                      </nuxt-link>
                    </div>
                  </div>
                </template>
              </DropdownMenu>
            </Dropdown>
            <!-- <a class="notification">
                  <i class="appify-bell" @click="getNotificationInitial"></i>
                  <span v-if="unseenNotification>0">{{unseenNotification}}</span>
              </a> -->
            <!-- <div class="dropdown export-notification-2 dropdown-action" v-if="notificationData.length>0">
                    <div class="export-header" >
                        <h3>Notification</h3>
                    </div>
                    <div class="dropdown-content mCustomScrollbar notification_scroll">
                        <div class="dropdown-content-item" v-for="(item,index) in notificationData" :key="index" 
                        >
                            <div class="drop_div" @click="seenNotificationUndate(item, index)">
                                <nuxt-link :to="`${item.link}`" class="drop_left" v-bind:class="item.isSeen == 0 ? '_noti_items' : '' " >
                                    <img src="/images/user.png" alt="img">
                                    <div class="dropdown-content-details">
                                        <h3><a v-if="item.user">{{item.user.firstname}} {{item.user.lastname}}</a></h3>
                                        <p class="dropdown-paragraph">{{item.description}}</p>
                                        <p class="dropdown-time"><span><i class="far fa-clock"></i></span>{{item.created_at | timeAgo}}</p>
                                    
                                    </div>
                                
                                </nuxt-link>
                            </div>
                        </div>
                          <nuxt-link to="/notification">
                            <div class="_noti_see" v-if="totalNotification>5 && totalNotification>notificationData.length">
                                See more
                            </div>
                          </nuxt-link>
                    </div>
                </div> -->
          </li>
          <!-- <li>
            <a href="#">
              <i class="appify-cog-1"></i>
            </a>
          </li> -->

          <li>
            <p @click="logout" class="logout_btn">
              <Icon type="md-log-out" />
            </p>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- end navbar -->
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      isCalling: "messenger/getShowCallingModal",
    }),
  },
  data() {
    return {
      notificationData: [],
      totalNotification: "",
      isNotification: false,

      isNotificationLoading: false,
    };
  },
  methods: {
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
    sidebarCollapse() {
      var x = !this.isSidebar;
      this.$store.commit("setSidebar", x);
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
    const [res1, res2] = await Promise.all([
      this.callApi("get", "/sales/get_unseen_notification_tech"),
      this.callApi("get", "/sales/notification_count_tech"),
    ]);
    if (res1.status == 200 && res2.status == 200) {
      this.$store.commit("SetNotification", res1.data);
      this.totalNotification = res2.data;
    } else {
      this.swr();
    }
  },
};
</script>

<style>
</style>