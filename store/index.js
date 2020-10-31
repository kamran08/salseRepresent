//import Vuex from 'vuex'
//import axios from 'axios'
export const strict = false
export const state = () => ({
  authInfo: false,
  unseenNotification: 0,
  apiUrl: process.env.VUE_APP_BASE_URL,
  wsUrl: process.env.VUE_APP_WS_URL,
  isSliderLoading: false,
  isSidebar: false,
  controlValue: {
    showLayout: true,
    floatLayout: true,
    enableDownload: false,
    previewModal: true,
    paginateElementsByHeight: 1100,
    manualPagination: true,
    filename: 'New Doc',
    pdfQuality: 2,
    pdfFormat: 'a4',
    pdfOrientation: 'portrait',
    pdfContentWidth: '800px'
  },
  pdfFour:false,
  pdfFive:false,
  pdfSix:false,
})
// common getters
export const getters = {
  getPdfFour(state){
    return state.pdfFour;
  },
  getPdfFive(state){
    return state.pdfFive;
  },
  getPdfSix(state){
    return state.pdfSix;
  },
  controlValue(state){
    return state.controlValue;
  },
  getIsLoggedIn(state) {
    return !!state.authInfo;
  },
  getAuthInfo(state) {
    return state.authInfo;
  },
  getApiUrl(state) {
    return state.apiUrl;
  },
  getWsUrl(state) {
    return state.wsUrl;
  },
  getUnseenNotification(state) {
    return state.unseenNotification;
  },
  getSliderLoading(state) {
    return state.isSliderLoading;
  },
  getSidebar(state) {
    return state.isSidebar;
  },

}
//mutations for changing data from action
export const mutations = {
  setPdfFour(state, data){
    state.pdfFour = data;
  },
  setPdfFive(state, data){
    state.pdfFive = data;
  },
  setPdfSix(state, data){
    state.pdfSix = data;
  },
  controlValue(state, data){
    state.controlValue = data;
  },
  setAuthInfo(state, data) {
    state.authInfo = data;
  },
  SetNotification(state, data) {
    state.unseenNotification = data;
  },
  IncreaseNotification(state, data) {
    state.unseenNotification += 1;
  },
  setSliderLoading(state, data) {
    state.isSliderLoading = data;
  },
  setSidebar(state, data) {
    state.isSidebar = data;
  }
}
// actionns for commiting mutations
export const actions = {
  async nuxtServerInit({ commit }, { $axios }) {
    //  console.log('I am running as nuxt server init')
    //console.log('session is ', request.session)
    try {
      // get the initial data
      let { data } = await $axios.get('/sales/initdata')
      commit('setAuthInfo', data.user)
      // console.log(data)

    } catch (e) {
      console.log('nuxt server error ', e)
    }
  },
}
