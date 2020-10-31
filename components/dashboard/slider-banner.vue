<template>
  <div class="box mb-20">
    <div class="box-title">
      <!-- <h3 class="color1">Slider Banner</h3> -->
      <div class="box-title-nav">
        <!-- <div class="box-title-nav-item">
          <button class="author-nav-left">
            <span>
              <i class="appify-left-open"></i>
            </span>
          </button>
        </div>
        <div class="box-title-nav-item">
          <button class="author-nav-right">
            <span>
              <i class="appify-right-open"></i>
            </span>
          </button>
        </div>-->
      </div>
    </div>
    <div class="cn-box-details p-20">
      <div class="progress-content">
        <div class="author-slider">
          <template v-if="isLoading">
            <div class="loading_gif_slider">
              <img src="/loading.gif" alt />
            </div>
          </template>
          <template v-else-if="!isLoading">
            <template v-if=" allSliderData.length > 0 ">
              <div class="author-slider-item item">
                <hooper :autoPlay="true" :playSpeed="5000">
                  <slide v-for="(item, index) in allSliderData" :key="index">
                    <div class="author-slider-item-inner">
                      <div class="author-slider-item item">
                        <div v-if="item.url && item.link" style="width: 100%; cursor:pointer">
                          <a :href="item.link" target="_blank">
                            <img :src="item.url" alt />

                          <!-- <div class="header-carousel-caption">
                            <div class="header-caption-text">
                              <h3>{{ item.header }}</h3>
                            </div>
                            <div class="header-caption-button">
                              
                                <button class="btn1 btn-focus">Visit Site</button>
                              
                            </div>
                          </div> -->
                          </a>
                        </div>
                      </div>
                    </div>
                  </slide>
                  <hooper-navigation slot="hooper-addons"></hooper-navigation>
                  <hooper-pagination slot="hooper-addons"></hooper-pagination>
                </hooper>
              </div>
            </template>
            <template v-else>
              <not-found :text="`No Data Found!`" />
            </template>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import {
  Hooper,
  Slide,
  Pagination as HooperPagination,
  Navigation as HooperNavigation,
} from "hooper";
import NotFound from "~/components/notFound/notFound.vue";
export default {
  computed: {
    ...mapGetters({
      isLoading: "getSliderLoading",
    }),
  },
  components: {
    NotFound,
    Hooper,
    Slide,
    HooperPagination,
    HooperNavigation,
  },

  data() {
    return {
      allSliderData: [],
    };
  },

  beforeCreate() {},

  async mounted() {
    const res = await this.callApi("get", "/sales/get/banner");
    if (res.status == 200) {
      this.allSliderData = res.data;
    } else {
      this.swr();
    }

    this.$store.commit("setSliderLoading", false);
  },
};
</script>
<style scoped>
.loading_gif_slider {
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>