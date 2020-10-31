<template>
  <div style="width: 100%" class="chat-details-item_main">
    <div class="chat-details-item">
      <div class="box fluid-height">
        <div class="box-title">
          <template>
            <div class="chat-user full-width">
              <div class="chat-person-img">
                <img :src="activePerson.image" alt="self" />
                <span class="chat-verify color-success">
                  <i class="appify-ok-circled2"></i>
                </span>
              </div>
              <div class="chat-user-info">
                <h3 class="capitalize">
                  {{ activePerson.firstname + " " + activePerson.lastname }}
                </h3>
                <!-- <p class="color-success">Online</p> -->
              </div>
              <span @click="onClickAudio(false)" class="icon-img">
                <i class="fas fa-phone"></i>
              </span>
              <span @click="onClickAudio(true)" class="icon-img">
                <i class="fas fa-video"></i>
              </span>
            </div>
          </template>
        </div>

        <div class="cn-box-details p-20 full-separation">
          <div class="progress-content progress-content-2 chat_scroll">
            <template v-if="chatLoadig">
              <div class="chat_loading_center no-data-box">
                <!-- <img src="/loading.gif" alt /> -->
                <a-spin size="large" />
              </div>
            </template>

            <template v-else>
              <template v-if="getLastChats.length > 14 && !isLastMessage">
                <div
                  v-if="isPreviousLoading"
                  style="width: fit-content; margin: 0 auto"
                >
                  <img src="/loading.gif" alt />
                </div>
                <Button
                  v-else
                  style="width: fit-content; margin: 0 auto"
                  @click="getPreviousChats"
                  >See previous messages</Button
                >
              </template>
              <template v-if="getLastChats.length > 0">
                <div
                  v-for="(item, chat_index) in getLastChats"
                  :key="chat_index"
                  class="chat-inbox full-width"
                  id="chat-container"
                >
                  <!-- friends message  -->
                  <div
                    v-if="item.message_sender != authInfo.id"
                    :id="`m-${item.id}`"
                    class="chat-inbox-msg chat-owner-msg chat-justify-left"
                  >
                    <div class="chat-msg-container">
                      <div
                        v-if="item.message && item.message != '\n'"
                        class="chat-msg-item"
                      >
                        <a-tooltip>
                          <template slot="title">
                            {{ $moment(item.created_at).format("MMM DD YYYY") }}
                            <span class="_1mess_fri_time">
                              {{ $moment(item.created_at).format("hh:mm a") }}
                            </span>
                          </template>
                          {{ item.message }}
                        </a-tooltip>
                      </div>
                      <div
                        v-if="item.files && item.files.length > 0"
                        class="chat_con_all"
                      >
                        <!-- one attachment -->
                        <a-tooltip>
                          <template slot="title">
                            {{ $moment(item.created_at).format("MMM DD YYYY") }}
                            <span class="_1mess_fri_time">
                              {{ $moment(item.created_at).format("hh:mm a") }}
                            </span>
                          </template>
                          <!-- {{ item.message }} -->

                          <div
                            v-if="item.files && item.files.length == 1"
                            class="chat-msg-item-gall"
                          >
                            <a
                              v-if="
                                item.files[0].response.extension == 'png' ||
                                item.files[0].response.extension == 'jpg' ||
                                item.files[0].response.extension == 'jpeg' ||
                                item.files[0].response.extension == 'png' ||
                                item.files[0].response.extension == 'gif'
                              "
                              :href="item.files[0].response.url"
                              target="_blank"
                              class="chat_img"
                            >
                              <img
                                :src="item.files[0].response.url"
                                alt="img"
                              />
                            </a>

                            <div
                              v-else
                              class="chat-message-file-item chat-message-file-doc _1pdf"
                            >
                              <div class="chat-message-doc-logo">
                                <Icon type="md-document" />
                              </div>
                              <div class="chat-message-doc-text">
                                <h4>{{ item.files[0].name }}</h4>
                                <p>
                                  {{ item.files[0].size | showAttachmentSize }}
                                </p>
                              </div>
                              <div class="chat-file-download">
                                <a
                                  :href="item.files[0].response.url"
                                  target="_blank"
                                >
                                  <i class="fas fa-download"></i>
                                </a>
                              </div>
                            </div>
                          </div>

                          <!-- two attachemt -->
                          <div
                            v-if="item.files && item.files.length == 2"
                            class="chat-msg-item-gall _2img_all_own"
                          >
                            <div
                              v-for="(imgItem, imgIndex) in item.files"
                              :key="imgIndex"
                               class="_2img"
                            >
                              <a
                                v-if="
                                  imgItem.response.extension == 'png' ||
                                  imgItem.response.extension == 'jpg' ||
                                  imgItem.response.extension == 'jpeg' ||
                                  imgItem.response.extension == 'png' ||
                                  imgItem.response.extension == 'gif'
                                "
                                :href="imgItem.response.url"
                                target="_blank"
                                class="chat-msg-gall chat-msg-gall-2"
                              >
                                <img :src="imgItem.response.url" alt="img" />
                              </a>

                              <div
                                v-else
                                class="chat-message-file-item chat-message-file-doc _1pdf"
                              >
                                <div class="chat-message-doc-logo">
                                  <Icon type="md-document" />
                                </div>
                                <div class="chat-message-doc-text">
                                  <h4>{{ imgItem.name }}</h4>
                                  <p>
                                    {{ imgItem.size | showAttachmentSize }}
                                  </p>
                                </div>
                                <div class="chat-file-download">
                                  <a
                                    :href="imgItem.response.url"
                                    target="_blank"
                                  >
                                    <i class="fas fa-download"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>

                          <!-- three or more attachemt -->
                          <div
                            v-if="item.files && item.files.length > 2"
                            class="chat-msg-item-gall _3img_all_own"
                          >
                          <div class="_3img" v-for="(imgItem, imgIndex) in item.files"
                              :key="imgIndex">
                            <a :href="imgItem.response.url"
                              target="_blank"
                              class=""
                              v-if="
                                imgItem.response.extension == 'png' ||
                                imgItem.response.extension == 'jpg' ||
                                imgItem.response.extension == 'jpeg' ||
                                imgItem.response.extension == 'png' ||
                                imgItem.response.extension == 'gif'
                              "
                            >
                              <img :src="imgItem.response.url" alt="img" />
                            </a>

                            <div
                              v-else
                              class="chat-message-file-item chat-message-file-doc _1pdf"
                            >
                              <div class="chat-message-doc-logo">
                                <Icon type="md-document" />
                              </div>
                              <div class="chat-message-doc-text">
                                <h4 style="cursor: pointer">
                                  {{ imgItem.name }}
                                </h4>
                                <p>
                                  {{ imgItem.size | showAttachmentSize }}
                                </p>
                              </div>
                              <div class="chat-file-download">
                                <a :href="imgItem.response.url" target="_blank">
                                  <i class="fas fa-download"></i>
                                </a>
                              </div>
                            </div>
                            </div>
                          </div>
                        </a-tooltip>
                      </div>
                      <!-- <div class="chat-msg-time">
                          <p>
                            {{ $moment(item.created_at).format("MMM DD YYYY") }}
                            <span class="_1mess_fri_time">
                              {{ $moment(item.created_at).format("hh:mm a") }}
                            </span>
                          </p>
                        </div> -->
                    </div>

                    <div class="chat-msg-img">
                      <template v-if="item.sender_image">
                        <img
                          v-if="
                            (chat_index < getLastChats.length - 1 &&
                              getLastChats[chat_index + 1].message_sender ==
                                authInfo.id) ||
                            chat_index == getLastChats.length - 1
                          "
                          :src="item.sender_image.image"
                        />
                      </template>
                    </div>
                  </div>
                  <!-- friends message  -->

                  <!-- own message  -->
                  <div
                    v-else
                    :id="`m-${item.id}`"
                    class="chat-inbox-msg chat-owner-msg chat-justify-right chat_con"
                  >
                    <div class="chat-msg-container">
                      <div
                        v-if="item.message && item.message != '\n'"
                        class="chat-msg-item"
                      >
                        <a-tooltip>
                          <template slot="title">
                            {{ $moment(item.created_at).format("MMM DD YYYY") }}
                            <span class="_1mess_fri_time">
                              {{ $moment(item.created_at).format("hh:mm a") }}
                            </span>
                          </template>
                          {{ item.message }}
                        </a-tooltip>
                      </div>
                      <div
                        v-if="item.files && item.files.length > 0"
                        class=" chat_con_all "
                      >
                        <!-- one attachment -->
                        <a-tooltip>
                          <template slot="title">
                            {{ $moment(item.created_at).format("MMM DD YYYY") }}
                            <span class="_1mess_fri_time">
                              {{ $moment(item.created_at).format("hh:mm a") }}
                            </span>
                          </template>

                          <!-- {{ item.message }} ddd -->

                          <div
                            v-if="item.files && item.files.length == 1"
                            class="chat-msg-item-gall"
                          >
                            <a
                              v-if="
                                item.files[0].response.extension == 'png' ||
                                item.files[0].response.extension == 'jpg' ||
                                item.files[0].response.extension == 'jpeg' ||
                                item.files[0].response.extension == 'png' ||
                                item.files[0].response.extension == 'gif'
                              "
                              :href="item.files[0].response.url"
                              target="_blank"
                              class="chat_img">
                              <img :src="item.files[0].response.url" alt="img"/>
                            </a>

                            <div v-else class="chat-message-file-doc _1pdf">
                              <div class="chat-message-doc-logo">
                                <Icon type="md-document" />
                              </div>
                              <div class="chat-message-doc-text">
                                <h4>{{ item.files[0].name }}</h4>
                                <p>{{ item.files[0].size | showAttachmentSize }}</p>
                              </div>
                              <div class="chat-file-download">
                                <a
                                  :href="item.files[0].response.url"
                                  target="_blank"
                                >
                                  <i class="fas fa-download"></i>
                                </a>
                              </div>
                            </div>
                          </div>

                          <!-- two attachemt -->
                          <div
                            v-if="item.files && item.files.length == 2"
                            class="chat-msg-item-gall _2img_all_own"
                          >
                            <div
                              v-for="(imgItem, imgIndex) in item.files"
                              :key="imgIndex"
                              class="_2img">
                              <a
                                v-if="
                                  imgItem.response.extension == 'png' ||
                                  imgItem.response.extension == 'jpg' ||
                                  imgItem.response.extension == 'jpeg' ||
                                  imgItem.response.extension == 'png' ||
                                  imgItem.response.extension == 'gif'
                                "
                                :href="imgItem.response.url"
                                target="_blank"
                                class=""
                              >
                                <img :src="imgItem.response.url" alt="img" />
                              </a>

                              <div v-else class="chat-message-file-item chat-message-file-doc _1pdf">
                                <div class="chat-message-doc-logo">
                                  <Icon type="md-document" />
                                </div>
                                <div class="chat-message-doc-text">
                                  <h4>{{ imgItem.name }}</h4>
                                  <p>
                                    {{ imgItem.size | showAttachmentSize }}
                                  </p>
                                </div>
                                <div class="chat-file-download">
                                  <a
                                    :href="imgItem.response.url"
                                    target="_blank"
                                  >
                                    <i class="fas fa-download"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>

                          <!-- three or more attachemt -->
                          <div
                            v-if="item.files && item.files.length > 2"
                            class="_3img_all chat-msg-item-gall"
                          >
                          <div v-for="(imgItem, imgIndex) in item.files"
                              :key="imgIndex" class="_3img">
                            <a
                              :href="imgItem.response.url"
                              target="_blank"
                              class=""
                              v-if="
                                imgItem.response.extension == 'png' ||
                                imgItem.response.extension == 'jpg' ||
                                imgItem.response.extension == 'jpeg' ||
                                imgItem.response.extension == 'png' ||
                                imgItem.response.extension == 'gif'
                              "
                            >
                              <img :src="imgItem.response.url" alt="img" />
                            </a>

                            <div
                              v-else
                              class="chat-message-file-item chat-message-file-doc _1pdf"
                            >
                              <div class="chat-message-doc-logo">
                                <Icon type="md-document" />
                              </div>
                              <div class="chat-message-doc-text">
                                <h4 style="cursor: pointer">
                                  {{ imgItem.name }}
                                </h4>
                                <p>
                                  {{ imgItem.size | showAttachmentSize }}
                                </p>
                              </div>
                              <div class="chat-file-download">
                                <a :href="imgItem.response.url" target="_blank">
                                  <i class="fas fa-download"></i>
                                </a>
                              </div>
                            </div>
                            </div>
                          </div>
                        </a-tooltip>
                      </div>
                      <!-- <div class="chat-msg-time">
                          <p>
                            {{ $moment(item.created_at).format("MMM DD YYYY") }}
                            <span class="_1mess_fri_time">
                              {{ $moment(item.created_at).format("hh:mm a") }}
                            </span>
                          </p>
                        </div> -->
                    </div>

                    <div class="chat-msg-img">
                      <img
                        v-if="
                          (chat_index < getLastChats.length - 1 &&
                            getLastChats[chat_index + 1].message_sender !=
                              authInfo.id) ||
                          chat_index == getLastChats.length - 1
                        "
                        :src="authInfo.image"
                        alt="self"
                      />
                    </div>
                  </div>
                  <!-- own message  -->
                </div>
              </template>
              <template v-else>
                <!-- <p>No message with your agent</p> -->
                <div class="no-data-box">
                  <div class="no-data-thumb">
                    <img src="/notFound.png" alt />
                  </div>
                  <p class="no-data-text">No message !</p>
                </div>
              </template>
            </template>
          </div>
        </div>

        <div class="cn-box-details p-20">
          <div class="progress-content progress-content-2">
            <div class="chat-message-sender full-width">
              <!-- attachments -->
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
                      class="chat-message-file-item chat-message-file-img"
                    >
                      <img :src="item.response.url" alt />
                      <div
                        @click="handleRemove(item, index)"
                        class="chat-file-remove"
                      >
                        <Icon type="md-close" />
                      </div>
                    </div>
                    <div
                      v-else
                      class="chat-message-file-item chat-message-file-doc"
                    >
                      <div class="chat-message-doc-logo">
                        <i class="appify-docs"></i>
                      </div>
                      <div class="chat-message-doc-text">
                        <h4>{{ item.response.extension | toUpperCase }}</h4>
                        <p>{{ item.response.fileName.substring(0, 20) }}</p>
                      </div>
                      <div
                        @click="handleRemove(item, index)"
                        class="chat-file-remove"
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
              <!-- attachments -->

              <!-- message box  -->
              <div v-if="chatList.length > 0" class="chat-message-sender-input">
                <div class="chat-message-input">
                  <div class="chat-message-attach hover-tooltip-com">
                    <input type="file" />
                    <button>
                      <Upload
                        ref="upload"
                        :show-upload-list="false"
                        :format="[
                          'jpg',
                          'jpeg',
                          'png',
                          'pdf',
                          'doc',
                          'docx',
                          'gif',
                          'mp4',
                          'flv',
                          'avi',
                          'mov',
                          'wmv',
                          'mkv',
                        ]"
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
                        <Icon type="md-attach" />
                      </Upload>
                    </button>
                    <p class="hover-tooltip">Attach Files</p>
                  </div>

                  <!-- textarea  -->
                  <textarea
                    v-model="form.message"
                    @keyup.enter="insertChat()"
                    placeholder="Start typing your message.."
                  ></textarea>
                  <!-- textarea  -->
                  <button >
                    <Icon type="md-paper-plane" />
                  </button>
                </div>
              </div>
              <!-- message box  -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import moment from "moment";
export default {
  computed: {
    ...mapGetters({
      getLastChats: "messenger/getLastChats",
      chatLoadig: "messenger/chatLoading",
      activePerson: "messenger/getActivePerson",
      chatList: "messenger/getChatList",
    }),
  },

  data() {
    return {
      form: {
        message: "",
        receiver: "",
        files: [],
      },
      isLoading: false,
      isShowPrevious: false,
      previousId: false,
      firstId: -1,
      search: "",
      isLastMessage: false,
      isPreviousLoading: false,
      isEmo: false,
      uploadList: [],
    };
  },

  methods: {
    onClickAudio(isVideo) {
      let id = this.activePerson.id;

      window.open(
        `/videocall?peer_id=${id}&audio_only=${!isVideo}&type=first`,
        "myWindow",
        "width=1080,height=700"
      );
    },

    checkLastMessageDistance(firstTime, secondTime) {},

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
      let tid =
        this.getLastChats.length > 0
          ? this.getLastChats[this.getLastChats.length - 1].id + 1
          : 0;
      let obj = {
        id: tid,
        message_sender: this.authInfo.id,
        message_receiver: this.authInfo.id == 1 ? 2 : 1,
        conversation_id: Number(this.$route.query.conversation_id),
        message: this.form.message,
        seen: 0,
        deleted: 0,
        sending_status: "sending",
        files: this.form.files,
      };

      // this.getLastChats.push(obj);
      this.$store.commit("messenger/pushIntoLastChats", obj);

      this.form.receiver = receiver;
      this.form.receiver = receiver;

      let msgObj = _.clone(this.form);
      this.form.message = "";

      const res = await this.callApi(
        "post",
        "/sales/messenger/chat/add",
        msgObj
      );

      if (res.status == 200) {
        this.$store.commit("messenger/setLastPushedIdOfChats", {
          id: res.data.id,
        });
        // this.getLastChats[this.getLastChats.length - 1].id = res.data.id;
        this.form.message = "";
      } else {
        if (res.data.message) {
          this.e(res.data.message);
          let length = this.getLastChats.length;
          this.getLastChats.splice(this.getChatBoxUsersChats.length - 1, 1);
        }
      }

      this.clearData();
    },

    async getPreviousChats() {
      if (this.getLastChats[0].id == this.getActiveChatFirstId) {
        return;
      }
      this.isLoading = true;

      const res = await this.callApi(
        "get",

        `/sales/messenger/conversation/previous-chat/${this.getLastChats[0].conversation_id}/${this.getLastChats[0].id}`
      );
      if (res.status == 200) {
        if (res.data.chats.length == 0) {
          this.isLastMessage = true;
          return;
        }
        res.data.chats = res.data.chats.reverse();
        this.previousId = res.data.chats[0].id;
        this.isShowPrevious = true;

        for (let i of res.data.chats) {
          this.getLastChats.unshift(i);
        }
      } else {
        if (res.data.message) this.e(res.data.message);
      }
      this.isLoading = false;
      //   this.$router.push(`/messenger?conversation_id=${id}`);
    },

    handleSuccess(res, file) {
      // this.uploadList.push(res);
    },

    handleProgress(event, file, fileList) {
      console.log("filelist", fileList);
      this.uploadList = fileList;
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

    handleRemove(index) {
      this.uploadList.splice(index, 1);
    },
    clearData() {
      this.form = {
        message: "",
        receiver: "",
        files: [],
      };
      this.isEmo = false;
      this.uploadList = [];
      this.$refs.upload.clearFiles();
    },
  },
  mounted() {
    this.isShowPrevious = false;
  },

  watch: {
    getLastChats() {
      this.$nextTick(function () {
        let length = this.getLastChats.length;
        if (length > 0) {
          if (this.isShowPrevious && this.previousId) {
            let id = this.getLastChats[15].id;
            let element = document.getElementById("m-" + id);
            if (element) {
              element.scrollIntoViewIfNeeded(true);
            }
          } else {
            let id = this.getLastChats[length - 1].id;
            let element = document.getElementById("m-" + id);
            if (element) {
              element.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }
          }
        }
      });
    },
  },

  filters: {
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
};
</script>

<style >
.chat_loading_center {
  width: fit-content;
  margin: 0 auto;
}
</style>