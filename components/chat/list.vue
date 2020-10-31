<template>
  <div class="chat-people-item">
    <div class="box fluid-height">
      <div class="box-title">
        <!-- <div class="chat-person full-width">
          <div class="chat-person-img">
            <img src="images/100_6.jpg" alt="self" />
            <span class="chat-verify color-success">
              <i class="appify-ok-circled2"></i>
            </span>
          </div>
          <div class="chat-search">
            <div class="search-bar-inner">
              <button>
                <img src="images/search-btn.png" alt="searchicon" />
              </button>
              <input type="text" placeholder="Search or start a new chat" />
            </div>
          </div>
        </div>-->
      </div>
      <div class="chat-all-box full-width">
        <Tabs
          :animated="false"
          @on-click="tabClick"
          v-model="tab"
          class="overflow_visible tab_margin_zero project_table"
        >
          <TabPane
            v-for="(tp, index) in tabData"
            :key="index"
            :label="tp.label"
            :name="tp.value"
          >
            <!-- loop goes here -->
            <template v-if="getChatList.length > 0 && isTabLoading == false">
              <div
                v-for="(item, chat_index) in getChatList"
                :key="chat_index"
                @click="onClickChatPersonTab(item, chat_index)"
                class="chat-all-item full-width"
                :class="conversationActiveIndex == chat_index ? 'active' : ''"
              >
                <div class="chat-person-img">
                  <span>
                    <img :src="item.image" alt="self" />
                  </span>
                  <span class="chat-verify color-success">
                    <i class="appify-ok-circled2"></i>
                  </span>
                </div>
                <div class="chat-person-info">
                  <h3 class="capitalize">
                    {{ item.firstname }} {{ item.lastname }}
                  </h3>
                  <p v-if="item.chat">{{ item.chat.message }}</p>
                </div>
                <div v-if="item.chat" class="chat-person-avail">
                  <p>
                    {{ $moment(item.chat.created_at).format("MMM DD YYYY") }}
                  </p>
                  <!-- <p>10 minutes ago</p> -->
                  <span class="badge-small bagde-circle badge-focus">4</span>
                </div>
              </div>
            </template>
            <template v-else-if="isTabLoading">
              <div class="demo-spin-col">
                <Spin fix>
                  <Icon
                    type="ios-loading"
                    size="50"
                    class="demo-spin-icon-load"
                  ></Icon>
                  <div style="font-size: 20px; font-weight: 600">
                    Please Wait...
                  </div>
                </Spin>
              </div>
            </template>
            <template v-else>
              <h2 class="no_conversation">You have no client to chat</h2>
            </template>
          </TabPane>
        </Tabs>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      getChatList: "messenger/getChatList",
      chatLoadig: "messenger/chatLoading",
      chatTab: "chatTab",
      // getLastChats: "messenger/getLastChats",
      // getActiveChatFirstId: "messenger/getActiveChatFirstId",
    }),
  },

  data() {
    return {
      form: {
        message: "",
        receiver: "",
        file: [],
      },
      tab: 10,
      isLoading: false,
      isShowPrevious: false,
      previousId: false,
      firstId: -1,
      search: "",
      isTabLoading: false,
      isEmo: false,
      firstChat: [],
      conversationActiveIndex: -1,
      tabData: [
        {
          value: "10",
          label: "All",
        },
        {
          value: "3",
          label: "Clients",
        },
        {
          value: "1",
          label: "Agents",
        },
        {
          value: "5",
          label: "Admins",
        },
      ],
    };
  },

  methods: {
    onClickChatPersonTab(item, index) {
      if (this.conversationActiveIndex == index) return;
      let obj = {
        id: item.id,
        firstname: item.firstname,
        lastname: item.lastname,
        image: item.image,
        // proifle picture
      };
      console.log("Obj");
      console.log(obj);
      this.$store.commit("messenger/setActivePerson", obj);
      this.$store.commit("messenger/setChatLoading", true);
      this.conversationActiveIndex = index;
      return this.getChats(item.id);
    },
    async tabClick(value) {
      console.log("ki hoise man");
      this.isTabLoading = true;
      this.tab = value;
      console.log("ChatList 1");
      // history.pushState({},null,`/chat?tab=${this.tab}&conversation_id=${id}`);
      let url = `/sales/messenger/agent/conversation/get/list?tab=${parseInt(
        value
      )}`;
      if (value) {
        console.log("ChatList 2");
        const res = await this.callApi("get", url);
        console.log("ChatList 3");
        console.log(res.data);
        if (res.status == 200) {
          console.log("ChatList 4");
          let chatLists = res.data ? res.data.conversation_lists : [];
          this.$store.commit("messenger/setChatList", chatLists);
          console.log("ChatList");
          console.log(chatLists);
          if (chatLists.length > 0) {
            console.log("onClickChatPersonTab Calling");
            this.conversationActiveIndex = -1;
            await this.onClickChatPersonTab(chatLists[0], 0);
          }
        } else {
          this.swr();
        }
      }
      this.isTabLoading = false;
    },

    async getChats(id) {
      let url = `/sales/messenger/agent/conversation/get/chatWithLastPerson/${id}`;
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

      for (let i of this.firstChat) {
        i.sending_status = "sent";
      }

      this.$store.commit("messenger/setChatLoading", false);
      this.$store.commit("messenger/setLastChats", this.firstChat);
      // this.$router.push(`/chat?conversation_id=${id}`);
      console.log("yes from here");
      history.pushState(
        {},
        null,
        `/chat?tab=${this.tab}&conversation_id=${id}`
      );
    },

    awayEmoji() {
      this.isEmo = false;
    },

    selectEmoji(emoji) {
      this.form.message += emoji.data;
    },

    clearData() {
      this.form = {
        message: "",
        receiver: "",
        files: [],
      };
      this.isEmo = false;
    },
  },

  async mounted() {
    this.isShowPrevious = false;
    // console.log(this.authInfo);
    
    if (this.getChatList.length > 0) {
      let conversation_id = this.$route.query.conversation_id ? this.$route.query.conversation_id : this.getChatList[0].id
      this.conversationActiveIndex = this.getChatList.findIndex(d => d.id == conversation_id);
      await this.getChats(conversation_id);
    }
  },
  created() {
    this.tab = this.$route.query.tab ? this.$route.query.tab : "10";
  },
};
</script>
<style>
.demo-spin-icon-load {
  animation: ani-demo-spin 1s linear infinite;
}
@keyframes ani-demo-spin {
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.demo-spin-col {
  height: 250px;
  position: relative;
}
</style>