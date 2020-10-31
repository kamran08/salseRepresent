<template>
  <div>
    <div>room {{ roomActiveUser }}</div>
    <div id="meet"></div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      checkRoom: "messenger/getChatRoom",
      roomActiveUser: "messenger/getRoomUser",
    }),
  },

  methods: {
    initCall(room, user) {
      let isOnlyAudio = false;

      if (this.$route.query.audio_only) {
        isOnlyAudio = this.$route.query.audio_only;
      }
      const domain = "meet.jit.si";
      const options = {
        roomName: `${room}`,
        width: `100%`,
        height: `100%`,
        parentNode: document.querySelector("#meet"),
        userInfo: {
          displayName: `${this.authInfo.firstname} ${this.authInfo.lastname}`,
        },
        configOverwrite: {
          enableClosePage: false,
          chromeExtensionBanner: {},
          enableClosePage: true,
        },
        startAudioOnly: isOnlyAudio,
        interfaceConfigOverwrite: {
          TOOLBAR_BUTTONS: [
            "microphone",
            "camera",
            "fullscreen",
            "hangup",
            "videoquality",
            "videobackgroundblur",
            "mute-everyone",
          ],
          SHOW_PROMOTIONAL_CLOSE_PAGE: false,
        },
      };
      const api = new JitsiMeetExternalAPI(domain, options);
    },
  },
  async mounted() {
    let room = this.$ls.get("chatroom");
    let user = JSON.parse(this.$ls.get("roomUser"));

    console.log(room, user);
    // return;

    if (!this.$route.query.peer_id) {
      return;
    }

    if (room && user) {
      this.initCall(room, user);
      return;
    }

    let id = Number(this.$route.query.peer_id);
    const res = await this.callApi(
      "post",
      "/app/client/conference/verify/participants",
      { receiver: id, u_type: "agent", r_type: "client" }
    );

    if (res.status == 200) {
      this.initCall(res.data.room, res.data.agent);
    }
  },
};
</script>
<style scoped>
#meet {
  height: 100vh;
}
</style>