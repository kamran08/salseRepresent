<template>
	<div>
		<div class="_main_content">
			<div class="row">
          <div class="col-12 col-md-12 col-lg-12">
            <div class="_1card">
              <div class="_1card_top">
                <div class="_1card_top_left">
                  <p class="_1card_top_title">Video Instructions</p>
                </div>
              </div>

              <div class="_1card_body">
                <div class="_table_responsive">
                  <Table class="_table700" border :columns="columns" :data="videos.data" :loading="isLoading" :no-data-text="no_data_text">
                      <template slot-scope="{row }" slot="video">
                        <Button @click="openVideoModal(row.url)"> Watch</Button>
                    </template>
                    <template slot-scope="{ row }" slot="descriptions">
                        <Button @click="openDetails(row.description)"> Show</Button>
                    </template>
                  </Table>
                </div>

                <div class="_pagination _padd_t20">
                  <Page
                      :current="parseInt(page)"
                      :total="videos.total"
                      @on-change="paginateDataInfo"
                      :page-size="parseInt(videos.perPage)"
                      show-sizer
                      show-total
                      :page-size-opts="pageOption"
                      @on-page-size-change="getSizeChange"
                    />
                </div>
              </div>
            </div>
        </div>
			</div>
		</div>

    <Modal
        v-model="videoModal"
        :mask-closable="false"
        title="Video"
        width= "600px"
        class="video_modal">
        <div slot="close">
          <Icon @click="videoClose" :size="20" type="md-close" />
        </div>
        <p class="_1text" v-html="video"></p>
        <div slot="footer">
          <Button @click="videoClose" >Close</Button>
        </div>
    </Modal>
    <Modal
        v-model="ditailsModal"
        title="Details"
        >
        <p class="_1text">{{details}}</p>
        <div slot="footer">
          <Button @click="ditailsModal=false" >Close</Button>
        </div>
    </Modal>
	</div>
</template>

<script>
export default {
  async asyncData({ app, store, redirect, params, query }) {
    try {
      let { data } = await app.$axios.get(`/sales/showInstructionTutorials`);
      return {
        videos: data,
      };
    } catch (error) {
      return error;
    }
  },
  data() {
    return {
      page: 1,
      pageSize: 10,
      pageOption:[5,10,15,20],
      no_data_text:'No Data Found !!!',
      isLoading: false,
      videos: [],
      video:'',
      details:'',
      videoModal:false,
      ditailsModal:false,
        columns: [
            {
                title: '#',
                width: 100,
                align: 'center',
                render: (h, params) => {
                    return h('div', [
                        
                        h('strong', ((params.index)+1)+(((this.videos.page-1)*this.videos.perPage)))
                    ]);
                }
            },
            // {
            //     title: 'ID',
            //     key: 'id'
            // },
            {
                title: 'Title',
                key: 'title'
            },
            // {
            //     title: 'Category Name',
            //     slot: 'categoryName',
            //     width:200
            // },
            {
                title: 'Video',
                slot: 'video'
            },
            {
                title: 'Descriptions',
                slot: 'descriptions'
            },
        ],
      videos: {
        data:[],
      },
    };
  },

  methods: {
    async paginateDataInfo(event) {
      this.isLoading = true;
      this.page = event;

      const res = await this.callApi(
        "get",
        `/sales/showInstructionTutorials?page=${this.page}&pageSize=${this.pageSize}`
      );

      if (res.status == 200) {
        this.videos = res.data;

        this.$router.push(`?page=${this.page}&pageSize=${this.pageSize}`);
      } else {
        this.swr();
      }
       this.isLoading = false
    },
     openVideoModal(video){
          this.video =video
          this.videoModal=true
      },
      openDetails(description){
          this.details =description
          this.ditailsModal=true
      },

    getSizeChange(e) {
      this.pageSize = e;
      this.paginateDataInfo(this.page);
    },
    videoClose(){
      this.videoModal=false;
      this.video=""
    },
  },

  mounted() {
    if (this.$route.query.page) {
      this.page = Number(this.$route.query.page);
    }
    if (this.$route.query.pageSize) {
      this.pageSize = Number(this.$route.query.pageSize);
    }
  },
};
</script>