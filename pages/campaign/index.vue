<template>
    <div>
        <div class="header-page-breadcrumb header-bg">
                <div class="header-page-left">
                    <div class="header-page-left-item header-page-left-text">
                        <h3>Lead</h3>
                    </div>
                    <div class="header-page-left-item header-page-left-search">
                        
                    </div>
                </div>
            </div>
        <div class="main-content p-20 pb-100">
        <!-- recent orders -->
            <!-- <div class="header-page-breadcrumb header-bg">
                <div class="app-input-group">
                    <input v-model="str" @keyup="searchByKey" type="text" placeholder="Search..">
                    <button @click="searchByKey" class="btn1" disabled><span><i class="fas fa-search"></i></span></button>
                </div>
                <div class="header-page-right">
                    <div class="new-header-quick">
                        <ul>
                        
                            <li class="quick-full-btn quick-button-grp">
                                <ul class="quick-button-grp-dropdown">
                                    <li><button>Sorty By</button></li>
                                    <li class="dropdown-btn"><button class="save-icon-btn" @click="export6=!export6"><span><i
                                                    class="fas fa-chevron-down"></i></span></button>
                                        <div class="export-notification notification-md dropdown-action" v-show="export6">
                                            <ul>
                                                <li @click="sortBy('id',order),export6=!export6"><a href="" onclick="return false;"><span><i class="fas fa-file-word"></i></span>Id</a></li>
                                                <li @click="sortBy('campaignName',order),export6=!export6"><a href="" onclick="return false;"><span><i class="fas fa-file-word"></i></span>Campaign Name</a></li>
                                                <li @click="sortBy('campaignDuration',order),export6=!export6"><a href="" onclick="return false;"><span><i class="fas fa-file-word"></i></span>Campaign Duration</a></li>
                                                <li @click="sortBy('campaignBudget',order),export6=!export6"><a href="" onclick="return false;"><span><i class="fas fa-file-word"></i></span>Campaign Budget</a></li>
                                                
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="dropdown-btn"><button class="save-icon-btn" @click="export7=!export7"><span><i
                                                    class="fas fa-chevron-down"></i></span></button>
                                        <div class="export-notification notification-md dropdown-action" v-show="export7">
                                            <ul>
                                                <li @click="sortBy(colName,'asc'),export7=!export7"><a href="#" onclick="return false;"><span><i class="fas fa-file-word"></i></span>a-z/ A-Z/ ASC
                                                        
                                                        </a></li>
                                                <li @click="sortBy(colName,'desc'),export7=!export7"><a href="#" onclick="return false;"><span><i class="fas fa-file-word"></i></span>z-a/ Z-A/ DESC
                                                        
                                                        </a></li>
                                            
                                            
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div> 
                </div>
            </div> -->
            <div class="box mb-20">
                <Tabs :animated="false"  @on-click="tabClick" v-model="tabType" class="overflow_visible">
                    <TabPane label="All Campaign" name="1">
                        <!-- <div class="box-title select-box-title">
                            <h3 class="color1">Campaign List</h3>
                        </div> -->
                                
                        <div class="cn-box-details">
                            <div class="recent-order-box">
                                <div class="recent-order-table">
                                     <Table  :columns="columns" :data="data.data" :loading="isLoading" :no-data-text="no_data_text">
                                        <template slot-scope="{row }" slot="details">
                                            <Button type="primary" @click="openDetails(row.campaignDetails)">Show</Button>
                                        </template>
                                        <template slot-scope="{row,index }" slot="action">
                                            <div v-if="row.__meta__">
                                                <Button type="primary" v-if="row.__meta__.subscriber_count==0" @click="subscribeCampaigne(row,index)" >Subscribe</Button>
                                                <Button type="success" v-else >Subscribed</Button>

                                            </div>
                                            
                                        </template>
                                    </Table>
                                </div>
                                <div class="box-pagination" v-if="data.data.length>0">
                                    <Page :current="parseInt(data.page)" :total="data.total" @on-change="getpaginate"  :page-size="parseInt(data.perPage)" show-sizer show-total :page-size-opts="pageOption" @on-page-size-change="getSizeChange" />
                                </div>
                                
                            </div>
                        </div>
                    </TabPane>
                    <TabPane label="My Campaign" name="2">
                        <!-- <div class="box-title select-box-title">
                            <h3 class="color1">Campaign List</h3>
                        </div> -->
                                
                        <div class="cn-box-details">
                            <div class="recent-order-box">
                                <div class="recent-order-table">
                                    <Table  :columns="columns1" :data="data.data" :loading="isLoading" :no-data-text="no_data_text">
                                        <template slot-scope="{row }" slot="details">
                                            <Button type="primary" @click="openDetails(row.campaignDetails)">Show</Button>
                                        </template>
                                    </Table>
                                </div>
                                <div class="box-pagination" v-if="data.data.length>0">
                                    <Page :current="parseInt(data.page)" :total="data.total" @on-change="getpaginate"  :page-size="parseInt(data.perPage)" show-sizer show-total :page-size-opts="pageOption" @on-page-size-change="getSizeChange" />
                                </div>
                                
                            </div>
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        </div>
        <Modal v-model="ditailsModal" title="Details">
            <p>{{details}}</p>
              <div slot="footer">
                <Button   @click="ditailsModal=false" >Close</Button>
            </div>
        </Modal>
    </div>
</template>
<script>
export default {
    data(){
        return{
            data:{ 
                data:[],
                page:1,
                perPage:10
            },
           
            ditailsModal:false,
            details:'',
            page:1,
            total:10,
            pageOption:[5,10,20,50,100],
            str:'',
            editIndex:-1,
            colName:'id',
            order:'desc',
            campModal:false,
            editModal:false,
            isLoading:false,
            no_data_text:'No Data Found !!!',
            columns: [
                {
                    title: '#',
                    
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            
                            h('strong', ((params.index)+1)+(((this.data.page-1)*this.data.perPage)))
                        ]);
                    }
                },
                {
                    title: 'ID',
                    key: 'id',
                    
                },
                {
                    title: 'Campaign Name',
                    key: 'campaignName',
                    
                },
                {
                    title: 'Campaign Duration (days)',
                    key: 'campaignDuration',
                    
                },
                {
                    title: 'Campaign Budget',
                    key: 'campaignBudget',
                    
                },
                {
                    title: 'Campaign Details',
                    slot: 'details',
                    
                },
                {
                    title: 'Actions',
                    slot: 'action',
                    
                }
            ],
            columns1: [
                {
                    title: '#',
                    
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            
                            h('strong', ((params.index)+1)+(((this.data.page-1)*this.data.perPage)))
                        ]);
                    }
                },
                {
                    title: 'ID',
                    key: 'id',
                    
                },
                {
                    title: 'Campaign Name',
                    key: 'campaignName',
                    width:200
                },
                {
                    title: 'Campaign Duration (days)',
                    key: 'campaignDuration',
                    width:200
                },
                {
                    title: 'Campaign Budget',
                    key: 'campaignBudget',
                    width:200
                },
                {
                    title: 'Campaign Details',
                    slot: 'details',
                    width:200
                },
                
            ],

        }
    },
    methods:{
        async tabClick(value){
            if(value){
                console.log("TabType")
                console.log(this.tabType)
                this.tabType = value
                history.pushState({}, null, `/campaign?tab=${value}`);
                this.getpaginate(1)
            }
        },
        async getpaginate(page){ 
            this.isLoading = true
            const res = await this.callApi('get',`/sales/getALlCampaignSummary?page=${page}&str=${this.str}&total=${this.total}&type=${this.tabType}`)
            if( res.status == 200){
                this.data = res.data.campaign
            } else {
                this.swr()
            }
            this.isLoading = false
        },
        async subscribeCampaigne(item,index){
             this.$Modal.confirm({
                    title: 'Confirm Campaign',
                    content: '<p>Are You sure you want to Subscribe this campaign?</p>',
                    loading: true,
                    okText: 'Confirm',
                    onOk: () => {
                        this.subscribeCampaigneRequ(item,index)
                        this.$Modal.remove();
                        // setTimeout(() => {
                            
                        //     this.$Message.info('Asynchronously close the dialog box');
                        // }, 2000);
                    }
                });
        },
        async subscribeCampaigneRequ(item,index){
            const res = await this.callApi('post','/sales/addnewCampaignSubcriber',{campaign_id:item.id})
            if(res.status == 200){
                this.s("You have been subscribe to this campaign!")
                this.data.data[index].__meta__.subscriber_count = 1;
                
            }
            else{
                this.swr();
            }
        },
        async getSizeChange(size){ 
            this.total = size
            this.getpaginate(1)
        },
        async sortBy(colName,orderBy){
           this.colName = colName
           this.order = orderBy
           this.getpaginate(1)
        },
        openDetails(description){
            this.details =description
            this.ditailsModal=true
        },
    
    },

     async asyncData({ app, store, redirect, params,query }) {
        try {
            let tabType = query.tab? query.tab :'1';
            const res = await app.$axios.get(`/sales/getALlCampaignSummary?type=${tabType}`);

            var data;
            
            if(res.status==200){

                data = res.data.campaign
            }
            return {
                data:data,
                tabType:tabType,
            };
        } catch (error) {
        // return redirect('/404')
        }
    },
}
</script>