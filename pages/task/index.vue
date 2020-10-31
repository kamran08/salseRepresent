<template>
	<div>
		<div class="_main_content">
			<div class="row">
                <div class="col-12 col-md-12 col-lg-12 _mar_b20">
					<div class="_1card">
						<div class="_1card_top">
							<div class="_1card_top_left">
								<p class="_1card_top_title">Task List</p>
								<div class="_1card_top_search">
                                    <Input search enter-button="Search" placeholder="Enter something..." v-model="searchFilter"  @on-search="searchTask" />
                                    <!-- <input type="text" v-model="searchFilter" placeholder="Search..">
                                <p class="btn1 search_btn_icon" @click="searchTask"><span><i class="fas fa-search"></i></span></p> -->
								</div>
							</div>
						</div>
                        <div class="_1card_body">  
                            <div class="_table_responsive">
                            <Tabs :animated="false" @on-click="tabClick" v-model="tabType" class="overflow_visible tab_margin_zero">
                            <TabPane label="My Tasks" name="all">
                                <Table  :columns="columns" :data="taskData" :loading="loading" :no-data-text="no_data_text" class="iview_data_table">
                                    <template slot-scope="{row }" slot="projectName">
                                       <h3 class="_3table_title" v-if="row.project">{{row.project.name}}</h3>
                                    </template>
                                    <template slot-scope="{row }" slot="description">
                                        <p class="descrip">{{row.description}}</p>
                                    </template>
                                    <template slot-scope="{row }" slot="duration">
                                        {{row.duration}}hrs
                                    </template>
                                    <template slot-scope="{row }" slot="clientName">
                                        <h3 class="_3table_title">
                                                    <span v-if="row.user">{{row.user.firstname}} {{row.user.lastname}}</span>
                                                </h3>
                                    </template>
                                    <template slot-scope="{row }" slot="status">
                                        
                                        <span type="submit"  :class="row.status=='Pending'? 'self-status status-danger' : 'self-status status-danger'" ><i class="fas fa-pencil-alt"></i> {{row.status}}</span> 
                                    </template>
                                    <template slot-scope="{row }" slot="action">
                                    <ul class="action_list">
                                            <li>
                                                <span class="btn3 table-btn" @click="viewModalOn(row)">VIEW</span>
                                            </li>
                                        </ul>
                                    </template>
                                </Table>
                                <div class="_pagination _padd_t20">
                                    <Page :current="parseInt(pagination.page)" :total="pagination.total" @on-change="getpaginate"  :page-size="parseInt(pagination.perPage)" show-sizer show-total :page-size-opts="pageOption" @on-page-size-change="getSizeChange" />
                                </div>
                            </TabPane>
                            <TabPane label="Current Tasks" name="Processing">
                                <Table  :columns="columns" :data="taskData" :loading="loading" :no-data-text="no_data_text" class="iview_data_table">
                                    <template slot-scope="{row }" slot="projectName">
                                       <h3 class="_3table_title" v-if="row.project">{{row.project.name}}</h3>
                                    </template>
                                    <template slot-scope="{row }" slot="description">
                                        <p class="descrip">{{row.description}}</p>
                                    </template>
                                    <template slot-scope="{row }" slot="duration">
                                        {{row.duration}}hrs
                                    </template>
                                    <template slot-scope="{row }" slot="clientName">
                                        <h3 class="_3table_title">
                                                    <span v-if="row.user">{{row.user.firstname}} {{row.user.lastname}}</span>
                                                </h3>
                                    </template>
                                    <template slot-scope="{row }" slot="status">
                                        
                                        <span  type="submit"  :class="row.status=='Pending'? 'self-status status-danger' : 'self-status status-danger'" ><i class="fas fa-pencil-alt"></i> {{row.status}}</span> 
                                    </template>
                                    <template slot-scope="{row }" slot="action">
                                    <ul class="action_list">
                                            <li>
                                                <span class="btn3 table-btn" @click="viewModalOn(row)">VIEW</span>
                                            </li>
                                        </ul>
                                    </template>
                                </Table>
                                <div class="_pagination _padd_t20">
                                    <Page :current="parseInt(pagination.page)" :total="pagination.total" @on-change="getpaginate"  :page-size="parseInt(pagination.perPage)" show-sizer show-total :page-size-opts="pageOption" @on-page-size-change="getSizeChange" />
                                </div>
                            </TabPane>
                            <TabPane label="Pending Tasks" name="Pending">
                                <Table  :columns="columns" :data="taskData" :loading="loading" :no-data-text="no_data_text" class="iview_data_table">
                                    <template slot-scope="{row }" slot="projectName">
                                         <h3 class="_3table_title" v-if="row.project">{{row.project.name}}</h3>
                                    </template>
                                    <template slot-scope="{row }" slot="description">
                                        <p class="descrip">{{row.description}}</p>
                                    </template>
                                    <template slot-scope="{row }" slot="duration">
                                        {{row.duration}}hrs
                                    </template>
                                    <template slot-scope="{row }" slot="clientName">
                                        <h3 class="_3table_title">
                                            <span v-if="row.user">{{row.user.firstname}} {{row.user.lastname}}</span>
                                        </h3>
                                    </template>
                                    <template slot-scope="{row }" slot="status">
                                        
                                        <span  type="submit"  :class="row.status=='Pending'? 'self-status status-danger' : 'self-status status-danger'" ><i class="fas fa-pencil-alt"></i> {{row.status}}</span> 
                                    </template>
                                    <template slot-scope="{row }" slot="action">
                                    <ul class="action_list">
                                            <li>
                                                <span class="btn3 table-btn" @click="viewModalOn(row)">VIEW</span>
                                            </li>
                                        </ul>
                                    </template>
                                </Table>
                                <div class="_pagination _padd_t20">
                                    <Page :current="parseInt(pagination.page)" :total="pagination.total" @on-change="getpaginate"  :page-size="parseInt(pagination.perPage)" show-sizer show-total :page-size-opts="pageOption" @on-page-size-change="getSizeChange" />
                                </div>
                            </TabPane>
                        </Tabs>

                        <Modal
                            v-model="viewModal"
                            title="Task Details"
                            :loading="loading"
                            @on-ok="viewModal=false">
                            <div class="modal-dialogue-body">
                                <ul class="modal-body-details">
                                    <li><span>Project Name:</span> <h5 v-if="taskDetails.project">{{taskDetails.project.name}}</h5></li>
                                    <li><span>Description:</span> <p>{{taskDetails.description}}</p></li>
                                    <li><span>Duration:</span> <p>{{taskDetails.duration}}hrs</p></li>
                                    <li><span>Client Name:</span> <h5 v-if="taskDetails.user">{{taskDetails.user.firstname}}</h5></li>
                                    <li><span>Status:</span> <h5 v-if="taskDetails.user">{{taskDetails.status}}</h5></li>
                                </ul>
                                <div class="profile-edit-group full-width">
                                    <div class="profile-edit-group-item col-md-12 col-sm-12 no-padding">
                                        <div class="profile-edit-input">
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div slot="footer">
                                <Button type="primary" @click="viewModal=false">Close</Button>
                            </div>
                        </Modal>
                            </div>
                        </div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import moment from "moment";
export default {
    middleware: 'authenticated',
	data(){
		return {
            taskData:[],
            page:1,
            pagination: {},
            pageSize:10,
            pageOption:[5,10,15,20],
            loading:false,
            tabCont:false,
            viewModal:false,
            taskDetails:{},
            searchFilter:'',
            project_id:'',
            tabType:'',
            no_data_text:'No Data Found !!!',
            columns: [
                {
                    title: '#',
                    width: 100,
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            
                            h('strong', ((params.index)+1)+(((this.pagination.page-1)*this.pagination.perPage)))
                        ]);
                    }
                },
                {
                    title: 'ID',
                    key: 'id',
                    width:100
                },
                {
                    title: 'Project Name',
                    slot: 'projectName',
                    width:200
                },
                {
                    title: 'Description',
                    slot: 'description',
                    width:300
                },
                {
                    title: 'Duration',
                    slot: 'duration',
                    width:150
                },
                {
                    title: 'Client',
                    slot: 'clientName',
                    width:200
                },
                {
                    title: 'Status',
                    slot: 'status',
                    width:200
                },
                {
                    title: 'Actions',
                    slot: 'action',
                     width:300
                }
            ],
            
        }
	},

	methods : {
        async tabClick(value){
            this.tabType = value
            history.pushState({}, null, `/task?tab=${value}`);
            if(value){
                const res  = await this.callApi('get',`/sales/all_task_tech?page=${this.page}&pageSize=${this.pageSize}&status=${value}`)
                if(res.status == 200){
                    this.taskData= res.data.data
                    this.pagination = res.data
                    this.statusValue=value
                }
                else{
                    this.swr()
                }
            }
        },
        
		async getpaginate(page = 1){
			const res  = await this.callApi('get',`/sales/all_task_tech?page=${page}&pageSize=${this.pageSize}&status=${this.statusValue}`)
			if(res.status == 200){
				 this.taskData= res.data.data
                 this.pagination = res.data	
			}
			else{
				this.swr()
			}
        },
        getSizeChange(e){
            this.pageSize =e
            this.getpaginate(this.page)
        },
        isDate(date) {
            return moment(date).format("DD-MM-YYYY");
        },
        viewModalOn(item){
            this.taskDetails=item
            this.viewModal=true
        },
       
         //Search
        async searchTask(){
            if(this.searchFilter){
                const res = await this.callApi('get',`/sales/all_task_tech?page=${this.page}&pageSize=${this.pageSize}&searchFilter=${this.searchFilter}&status=${this.statusValue}`)
                if(res.status == 200){
                    this.taskData =  res.data.data;
                    this.pagination = res.data;
                }
                else{
                this.swr();
                }
            }
            else this.swr()
        },
        
        
        
       
        closeModal(){
            this.taskItem={}
            this.taskAddModel=false
        }
	}, 

	async created(){
         this.tabType = this.$route.query.tab? this.$route.query.tab : 'all';
        this.project_id=this.$route.query.project_id ? this.$route.query.project_id : ' '
        this.loading = true
         const [res1] = await Promise.all([ 
			this.callApi('get',`/sales/all_task_tech?page=${this.page}&pageSize=${this.pageSize}&project_id=${this.project_id}`),
			// this.callApi('get','/tech/all_request_type_tech')
        ])
		if(res1.status == 200) {
            this.taskData= res1.data.data
            this.pagination = res1.data	
		}
		else{
			this.swr()
		}
		this.loading = false
	}, 
	
}
</script>




