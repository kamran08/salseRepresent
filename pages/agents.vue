<template>
	<div>
		<div class="_main_content">
			<div class="row">
                <div class="col-12 col-md-12 col-lg-12">
					<div class="_1card">
						<div class="_1card_top">
							<div class="_1card_top_left">
								<p class="_1card_top_title">My Agents</p>

								<div class="_1card_top_search">
									<Input search enter-button="Search" placeholder="Enter something..." v-model="str"  @on-search="paginateDataInfo(1)" @on-clear="paginateDataInfo(1)"/>
								</div>
                                <div style="margin-left: 25px;">
                                     <Page :current="parseInt(pagination.page)"  :total="pagination.total" @on-change="paginateDataInfo"  :page-size="parseInt(pagination.perPage)"  show-sizer show-total :page-size-opts="pageOption" @on-page-size-change="getSizeChange" />
                                </div>
							</div>
							<!-- <div class="_1card_top_right">
								<ul class="_1card_top_right_list">
    							    <li><Button type="primary"  @click="$router.push('/addSalse')">Add New</Button></li>
								</ul>
							</div> -->
						</div>
                         <div class="_1card_body">
                            <div class="_table_responsive">
                                <Table class="_table1900" border :columns="columns1" :data="agentData"  :no-data-text="no_data_text" @on-sort-change="sortData">
                                    
                                    <template slot-scope="{row }" slot="name">
                                        <div class="td-logo" @click="$router.push('/agentOverview?id='+item.id)">
                                            <h3 class="_3table_title">{{row.firstname}} {{row.lastname}}</h3>
                                            <p class="_3table_title" v-if="row.user && row.user.userType && row.user.userType.name"> {{row.user.userType.name}}</p>
                                        </div>
                                    </template>
                                    <template slot-scope="{ row }" slot="joinDate">

                                        {{ row.created_at | dateFixed}}

                                    </template>
                                    <template slot-scope="{ row ,index}" slot="agentType1">
                                            <template v-if="index == editIndex">
                                                <Select  v-model="agetNewType"  @on-change="statusChange(item)" :placeholder="row.agent_type" > 
                                                        <Option value="Senior Management">Senior Management</Option>
                                                        <Option value="Sales Director">Sales Director</Option>
                                                        <Option value="Technician Sales agent">Technician Sales agent</Option>
                                                </Select> 
                                                    <Icon @click="editIndex=-1" type="ios-close-circle" />
                                            </template>
                                            <template v-else>

                                            <span  type="submit" @click="clickStatusOn(index,row.agent_type)" :class="row.agent_type? 'self-status status-danger' : 'self-status status-danger'" ><i class="fas fa-pencil-alt"></i> {{row.agent_type}}</span>
                                                
                                            </template>
                                    </template>
                                    <template slot-scope="{row}" slot="action">
                                        <ul class="action_list">
                                            <li>
                                                <Button @click="emailChangeModalOpen(row.id)">Change Email</Button>
                                            </li>
                                        </ul>
                                    </template>
                                </Table>
                                 <!-- <div class="_pagination _padd_t20">
                                    <Page :current="parseInt(pagination.page)"  :total="pagination.total" @on-change="paginateDataInfo"  :page-size="parseInt(pagination.perPage)"  show-sizer show-total :page-size-opts="pageOption" @on-page-size-change="getSizeChange" />
                                 </div> -->
                            </div>
                         </div>
					</div>
                </div>
                 <Modal
                    v-model="emailChangeModal"
                    title="Change Email"
                    :closable="false"
                    :mask-closable="false"
                >
                <div>
                    <Form label-position="top">
                    <div class="row">
                        <div class="col-12 col-md-6 col-lg-6">
                        <FormItem :error="error.old_email" label="Old Email">
                            <Input v-model="form_email.old_email" />
                        </FormItem>
                        </div>
                        <div class="col-12 col-md-6 col-lg-6">
                        <FormItem :error="error.email" label="New Email">
                            <Input v-model="form_email.email" />
                        </FormItem>
                        </div>
                    </div>
                    </Form>
                </div>
                
                <div slot="footer">
                    <Button  @click="emailChangeModalClose()">Close</Button>
                    <Button type="primary" :disabled="isLoading"   :isLoading="isLoading" @click="sendEmailChangeRequest">{{isLoading==true?'Please Wait' : "Change Email"}}</Button>
                </div>
            </Modal>

                
			</div>
        </div>
    </div>
</template>

<script>
export default {
    middleware: 'authenticated',
    data(){
        return{
            editIndex:-1,
            emailChangeModal:false,
            no_data_text:'No Data Found !!!',
            columns1: [
               { title: '#',
                    width:100,
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            
                        h('strong', ((params.index)+1)+(((this.pagination.page-1)*this.pagination.perPage)))
                        ]);
                    }
                },
                {
                    title: 'User ID',
                    sortable: true,
                    key: 'id',
                },
                {
                    title: 'User',
                    sortable: true,
                    key: 'firstname',
                    slot: 'name',
                },
                {
                    title: 'Email',
                     sortable: true,
                    key: 'email',
                },
                {
                    title: 'Joining Date',
                     sortable: true,
                     key: 'created_at',
                    slot: 'joinDate',
                },
                {
                    title: 'Contact',
                     sortable: true,
                    key: 'phone',
                },
                {
                    title: 'Address',
                     sortable: true,
                    key: 'address',
                },
                {
                    title: 'Post Code',
                     sortable: true,
                    key: 'postcode',
                },
                {
                    title: 'City',
                    sortable: true,
                    key: 'city',
                },
                {
                    title: 'Country',
                     sortable: true,
                    key: 'country',
                },
                {
                    title: 'Agent Type',
                     sortable: true,
                     key: 'agent_type',
                    slot: 'agentType1',
                },
                {
                    title: 'Reference',
                     sortable: true,
                    key: 'reference',
                },
                {
                    title: 'Action',
                    slot: 'action',
                },

                
            ],
            sort:{
                col:'',
                order:'',
            },
            isLoading:false,
            pageSize:10,
            pageOption:[5,10,15,20],
            str:'',
            form_email:{
               old_email:'', 
               email:'', 
               id:'', 
            },
            error:{
               old_email:'',
               email:'',
            },
            
            reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
           

        }
    },
    methods:{
         sortData(value){
            this.sort.col = value.key;
            this.sort.order = value.order == 'normal' ? '' : value.order
            this.paginateDataInfo(1);
        },

        async paginateDataInfo(page){
            this.isLoading = true
             const res  = await this.callApi("get", `/sales/getAllSalseRepresentative?page=${page}&pageSize=${this.pageSize}&str=${this.str}&col=${this.sort.col}&order=${this.sort.order}`)
            if(res.status==200){
                this.agentData = res.data.data
                this.pagination = res.data
               
            }
            else if(res.status==403){
                this.e(res.data.message)
            }
            else{
                this.e('please check your network')

            }
            this.isLoading = false
        },
         getSizeChange(e){
            this.pageSize =e
             this.isLoading = true
             this.page = this.page?this.page:1
            this.paginateDataInfo(this.page)
            //  this.isLoading = false
        },
   
         async deleteAgent(item, index){

            this.export2 =-1
         
        },  
        emailChangeModalOpen(id){
            this.emailChangeModal=true
            this.form_email.id=id
        },
        emailChangeModalClose(){
            this.emailChangeModal=false
        },
        async sendEmailChangeRequest(){
              let flag = 1;
                if (
                    !this.form_email.old_email ||
                    this.form_email.old_email.trim() == "" ||
                    this.form_email.old_email == null
                ) {
                    this.error.old_email = "Old email Can not be empty!!";
                    flag = 0;
                }
                if (!/(.+)@(.+){2,}\.(.+){2,}/.test(this.form_email.old_email)) {
                    this.error.old_email = "Wrong email format!";
                    flag = 0;
                }

                if (
                    !this.form_email.email ||
                    this.form_email.email.trim() == "" ||
                    this.form_email.email == null
                ) {
                    this.error.email = "Email Can not be empty!";
                    flag = 0;
                }
                if (!/(.+)@(.+){2,}\.(.+){2,}/.test(this.form_email.email)) {
                    this.error.email = "Wrong email format!";
                    flag = 0;
                }
                if (flag == 0) return;
             const res = await this.callApi("post", "/sales/updateAgentEmail", this.form_email);
            if (res.status == 200) {
                this.s(
                "Email Successfully Updated"
                );
                this.form_email={}
                 this.emailChangeModal=false
            } 
            else {
                this.swr();
            }
        }
    },
    
    async asyncData({app,query,redirect}){ 
        try {
            var agentId = query.agentId ? query.agentId : ''
            const res = await  app.$axios.get(`/sales/getAllSalseRepresentative?agenId=${agentId}`)
            if(res.status == 200) {

                return{
                    agentData:res.data.data,
                    pagination:res.data,
                    agentId:agentId
                }
            }
            else redirect('/')
            
        } catch (error) {
            console.log(error)
        }
    },


    
}
</script>
<style >
.quick-full-btn .span1{
    padding: 13px;
    font-size: medium;
    color: white;
    cursor: pointer;
}
</style>