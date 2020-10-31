<template>
  <div>
    <Modal v-model="modal" title="Common Modal dialog box title">
      <p>{{ roomUser.firstname + " " + roomUser.lastName }} is calling</p>

      <button class="btn1">accept</button>
      <button class="btn1" style="background-color: red;">reject</button>
    </Modal>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      checkRoom: "messenger/getChatRoot",
      roomUser: "messenger/getRoomUser",
      isCalling: "messenger/getShowCallingModal",
    }),
    data() {
      return {
          modal: true
      };
    },
  },

};
</script>