import _ from 'lodash';
import Vue from 'vue';
import { mapGetters } from 'vuex';
import VueLocalStorage from 'vue-localstorage';

// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';
// Vue.use(Antd);

Vue.use(VueLocalStorage, {
  name: 'ls',
  bind: true //created computed members from your variable declarations
})
Vue.mixin({
  // directives: {
  //     onClickaway: onClickaway,
  // },
  methods: {
    // async callApi (method, url, dataObj) {
    //   try {
    //     let data = await this.$axios({
    //       method: method,
    //       headers: {'Authorization': "bearer " + this.token}, 
    //       url: url,
    //       data: dataObj
    //     })
    //     return data
    //   } catch (e) {
    //     return e.response
    //   }
    // },
      getToday(){
        let d = new Date();
        let monthNumber = d.getMonth() + 1;
        monthNumber = ("0" + monthNumber).slice(-2);
        let dayNumber = d.getDate();
        dayNumber = ("0" + dayNumber).slice(-2);
        let today = `${d.getFullYear()}-${monthNumber}-${dayNumber}`
        return today;
      },
  },
  filters: {
    toFixedNum(num) {
      return num.toFixed(2);
    },
    totalEntities(data) {
      let d = Math.ceil(data.total / data.perPage);
      return d;
    },
    fastAndLast(user) {
      let s = user.firstname.substring(0, 1) + user.lastname.substring(0, 1);
      return s.toUpperCase();
    },

    dateFixed(cd) {
      let d = new Date(cd);
      let monthNumber = d.getMonth() + 1;
      monthNumber = ("0" + monthNumber).slice(-2);
      let dayNumber = d.getDate();
      dayNumber = ("0" + dayNumber).slice(-2);
      let today = `${dayNumber}-${monthNumber}-${d.getFullYear()}`
      return today;
    }
  },

  computed: {
    ...mapGetters({
      authInfo: 'getAuthInfo',
      isLoggedIn: 'getIsLoggedIn',
      apiUrl: 'getApiUrl',
      wsUrl: 'getWsUrl',
      unseenNotification:'getUnseenNotification',
      isSidebar: 'getSidebar',
      unseenConversation: "messenger/unseenConversation",
      getPdfFour: 'getPdfFour',
      getPdfFive: 'getPdfFive',
      getPdfSix: 'getPdfSix',
    }),
  }
})