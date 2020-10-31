<template>
    <div>
                <div class="box mb-20">
                    <div class="header-page-breadcrumb header-bg box-title select-box-title" >
                        
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
                                                <li @click="sortBy('created_at',order),export6=!export6"><a href="" onclick="return false;"><span><i class="fas fa-file-word"></i></span>Date</a></li>
                                                <li @click="sortBy('userName',order),export6=!export6"><a href="" onclick="return false;"><span><i class="fas fa-file-word"></i></span>Client Name</a></li>
                                                
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
                       
                    </div>

                    <div class="box-title select-box-title">
                        <h3 class="color1">Campaign Subscriber List</h3>
                        <div class="box-title-icon flex-wrap justify-flex-end">
                            <div class="box-title-select">
                            </div>
                        </div>
                    </div>
                    <div class="cn-box-details">
                        <div class="recent-order-box">
                            <div class="recent-order-table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Client</th>
                                            <th>Date</th>
                                            <th>Campaign Name</th>
                                            <th>Campaign Budget</th>
                                            <th>Campaign Duration</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                          <tr v-if="isLoading">
                                           
                                                <td>
                                                    <div class="td-logo">
                                                        <div class="td-name-t shimmer"></div>
                                                        
                                                        <div class="td-logo-text">
                                                            <div class="shimmer line"></div>
                                                            <!-- <h3 class="color-focus weight-600">John Due</h3> -->
                                                        </div>
                                                    </div>
                                                </td>
                                                <!-- <td>xyz@email.com</td> -->
                                                <td><div class="shimmer line"></div></td>
                                                <td><div class="shimmer line"></div></td>
                                                <td><div class="shimmer line"></div></td>
                                                <td><div class="shimmer line"></div></td>
                                                <td><div class="shimmer line"></div></td>
                                           
                                            </tr>
                                        <tr v-for="(item,index) in alldata" :key="index" v-else> 
                                            <td>
                                                <div class="td-name-icon" v-if="item.user">
                                                    <div class="td-name-t blue-bg">
                                                        <img src="/images/100_9.jpg" alt="logo">
                                                        </div>
                                                    <div class="td-logo-text">
                                                        <h3><a href="#">{{item.user.firstname}} {{item.user.lastname}}</a></h3>
                                                        <!-- <p>Client</p> -->
                                                    </div>
                                                </div>
                                            </td>
                                            <td >{{item.created_at | formateDate}}</td>
                                            <td><span class="self-status " v-if="item.campaign">{{item.campaign.campaignName}}</span></td>
                                            <td><span class="self-status " v-if="item.campaign">{{item.campaign.campaignBudget}}</span></td>
                                            <td><span class="self-status status-success">{{(parseInt(item.campaign.campaignDuration)>1)?item.campaign.campaignDuration+' hours':item.campaign.campaignDuration+' hour'}}</span></td>
                                            <!-- <td style="cursor: pointer;"><span class="self-status status-success" @click="openDetails(item.description)">show</span></td> -->
                                            <td>
                                                <div class="td-dropdown-icon dropdown-btn">
                                                    <span class="icon-img" @click="openExport(item,index)"><i class="fas fa-ellipsis-h"></i></span>
                                                    <div class="export-notification dropdown-action" v-show="export2==index" >
                                                        <ul>
                                                            <!-- <li><a href="" onclick="return false;"><span><i
                                                                            class="appify-object-group"></i></span>View</a>
                                                            </li> -->
                                                            <li @click="deleteproject(item,index)"><a href="" onclick="return false;" ><span><i
                                                                            class="appify-trash-empty"></i></span>Delete</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                        
     
                           
                    
                                       
                                    </tbody>
                                </table>
                            </div>
                               <div class="box-pagination" v-if="pagination.data">
                                  
                                  <Page :current="parseInt(pagination.page)" :total="pagination.total" @on-change="paginateDataInfo"  :page-size="parseInt(pagination.perPage)" show-sizer show-total :page-size-opts="pageOption" @on-page-size-change="getSizeChange" />
                            </div>
                            
                        </div>
                    </div>
                </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            alldata:[],
            export2:-1,
            export3:-1,
            export1:false,
            export6:false,
            export7:false,
            ditailsModal:false,
            details:'',
            page:1,
            pageSize:10,
            pageOption:[5,10,15,20],
            str:'',
            editIndex:-1,
            colName:'',
            order:'',
            isLoading:false,
        }
    },
    methods:{
         async paginateDataInfo(e){
            this.isLoading = true
             this.page = e
             const res  = await this.callApi("get", `/sales/getAllCampaignSubscriber?campaignId=${this.id}&colName=${this.colName}&order=${this.order}&page=${this.page}&pageSize=${this.pageSize}&str=${this.str}`)
            if(res.status==200){
                this.alldata = res.data.data
                this.pagination = res.data
                this.isLoading = false
            }
            else if(res.status==403){
                this.e(res.data.message)
            }
            else if(res.status==401){
                this.e(res.data.message)
            }
            else{
                this.e('please check your network')

            }
            this.isLoading = false
        },
        async sortBy(colName,orderBy){
           this.colName = colName
           this.order = orderBy
           this.searchByKey()
       },
       async searchByKey(){
             this.isLoading = true
             this.page = 1
             const res  = await this.callApi("get", `/sales/getAllCampaignSubscriber?campaignId=${this.id}&colName=${this.colName}&order=${this.order}&page=1&pageSize=${this.pageSize}&str=${this.str}`)
            if(res.status==200){
                this.alldata = res.data.data
                this.pagination = res.data
                this.isLoading = false
            }
            else if(res.status==403){
                this.e(res.data.message)
            }
            else if(res.status==401){
                this.e(res.data.message)
            }
            else{
                this.e('please check your network')

            }
            this.isLoading = false
        },
          getSizeChange(e){
            this.pageSize =e
            this.paginateDataInfo(this.page)
        },
       
        openExport(item,index){
          
            if(this.export2==index)
               return this.export2 =-1
            this.export2 = index
        },
   
       async deleteproject(item,index){
           if(!confirm("Are you sure to delete this project")){
                return;
            }

            const res = await this.callApi('post','/sales/deleteSubcriber',{id:item.id})
            if(res.status==200){
                this.s("project has been deleted!!")
                this.export2 =-1
                this.alldata.splice(index,1)
            }
            else if(res.status==403){
                this.e(res.data.message)
            }
            else{
                this.e("plase check your network !!")
            }
          
        }
    },


     async asyncData({ app, store, redirect, params,query }) {
        

    try {
        const res = await app.$axios.get(`/sales/getAllCampaignSubscriber?campaignId=${params.id}`)

        var alldata
        var pagination
        var id


    if(res.status==200)
      alldata = res.data.data
      pagination = res.data
      id = params.id
     return {
         alldata:alldata,
         pagination:pagination,
         id:id,
         
      };
    } catch (error) {
      //return redirect('/404')
    }
  },
}
</script>