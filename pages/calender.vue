<template>
    <div>
        <!-- dashboard content -->
        <div >
            <div class="header-page-breadcrumb header-bg"> 
                <div class="header-page-left">
                    <div class="header-page-left-item header-page-left-text">
                        <h3>My AppointMents</h3>
                    </div>
                    <div class="header-page-left-item header-page-left-search">
                        <Input clearable  search enter-button placeholder="Enter something..."  v-model="str"  @on-search="getpaginate(1)" @on-clear="getpaginate(1)" />
                    </div>
                </div>
                <div class="new-header-quick">
                    <ul>
                        <li class="full-width quick-blue">
                            <a @click="isAddModal=true" class=""><i class="appify-plus-1"></i>&nbsp;&nbsp;Book Appointment</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- main content -->
            <div class="main-content box-pad pb-40">
                <div class="box mb-20">
                    <div class="cn-box-details">
                        <div class="recent-order-box">
                            <div class="recent-order-table billing-order-table">
                                <Tabs :animated="false"  @on-click="tabClick"  v-model="tabType" class="overflow_visible">
                                    <TabPane label="All Appoinments" name="all">
                                        <Table  :columns="columns" :data="data.data" :loading="loading" :no-data-text="no_data_text">
                                            <template slot-scope="{row }" slot="date">
                                                {{row.date | dateFixed}}
                                            </template>
                                            <template slot-scope="{row,index }" slot="status">
                                                <template  v-if="isStatusEdit==true && isStatusIndex == index">
                                                    <Select v-model="editData.status" @on-change="editStatus">
                                                        <Option value="Pending">Pending</Option>
                                                        <Option value="Approved">Approved</Option>
                                                        <Option value="Completed">Completed</Option>
                                                    </Select>
                                                </template>
                                                <template  v-else>
                                                    <span v-if="row.status == 'Pending'" @click="editStatusOn(index)" class="self-status status-focus" style="cursor: pointer;">{{row.status}} <i class="fas fa-edit"></i></span>
                                                    <span v-else-if="row.status == 'Completed'" class="self-status status-success">{{row.status}}</span>
                                                    <span v-else class="self-status status-danger">{{row.status}}</span>
                                                </template>
                                            </template>
                                            <template slot-scope="{row }" slot="action">
                                                    <nuxt-link :to="`/project-details/${row.project_id}`" ><button class="btn3 table-btn">DETAILS</button></nuxt-link>
                                            </template>
                                        </Table>
                                    </TabPane>
                                    <TabPane label="Received Appointments" name="receiver">
                                        <Table  :columns="columns" :data="data.data" :loading="loading" :no-data-text="no_data_text">
                                            <template slot-scope="{row }" slot="date">
                                                {{row.date | dateFixed}}
                                            </template>
                                            <template slot-scope="{row , index}" slot="status">
                                                <template  v-if="isStatusEdit==true && isStatusIndex == index">
                                                    <Select v-model="editData.status" @on-change="editStatus">
                                                        <Option value="Pending">Pending</Option>
                                                        <Option value="Approved">Approved</Option>
                                                        <Option value="Completed">Completed</Option>
                                                    </Select>
                                                </template>
                                                <template  v-else> 
                                                    <span v-if="row.status == 'Pending'" @click="editStatusOn(index)" class="self-status status-focus" style="cursor: pointer;">{{row.status}} <i class="fas fa-edit"></i></span>
                                                    <span v-else-if="row.status == 'Completed'" class="self-status status-success">{{row.status}}</span>
                                                    <span v-else class="self-status status-danger">{{row.status}}</span>
                                                </template>
                                            </template>
                                            <template slot-scope="{row }" slot="action">
                                                    <nuxt-link :to="`/project-details/${row.project_id}`" ><button class="btn3 table-btn">DETAILS</button></nuxt-link>
                                            </template>
                                        </Table>
                                    </TabPane>
                                    <TabPane label="Sent Appointments" name="sender">
                                        <Table  :columns="columns" :data="data.data" :loading="loading" :no-data-text="no_data_text">
                                            <template slot-scope="{row }" slot="date">
                                                    {{row.date | dateFixed}}
                                            </template>
                                            <template slot-scope="{row ,index }" slot="status">
                                                <template  v-if="isStatusEdit==true && isStatusIndex == index">
                                                    <Select v-model="editData.status" @on-change="editStatus">
                                                        <Option value="Pending">Pending</Option>
                                                        <Option value="Approved">Approved</Option>
                                                        <Option value="Completed">Completed</Option>
                                                    </Select>
                                                </template>
                                                <template  v-else>
                                                    <span v-if="row.status == 'Pending'" @click="editStatusOn(index)" class="self-status status-focus" style="cursor: pointer;">{{row.status}} <i class="fas fa-edit"></i></span>
                                                    <span v-else-if="row.status == 'Completed'" class="self-status status-success">{{row.status}}</span>
                                                    <span v-else class="self-status status-danger">{{row.status}}</span>
                                                </template>
                                            </template>
                                            <template slot-scope="{row }" slot="action">
                                                    <nuxt-link :to="`/project-details/${row.project_id}`" ><button class="btn3 table-btn">DETAILS</button></nuxt-link>
                                            </template>
                                        </Table>
                                    </TabPane>
                                </Tabs>
                            </div>
                            <div class="box-pagination">
                                <Page :current="parseInt(data.page)" :total="data.total" @on-change="getpaginate"  :page-size="parseInt(data.perPage)" show-sizer show-total :page-size-opts="pageOption" @on-page-size-change="getSizeChange" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Modal v-model="isAddModal" title="Book an Appointment" >
            <Form ref="formValidate"  :model="formData" :rules="ruleCustom" label-position="top" >
                <FormItem prop="project_id"   label="Project Name">
                    <Select v-model="formData.project_id"  placeholder="Project name" filterable clearable remote :remote-method="getProjectList" @on-change="projectChangeOnSelect"   >
                        <Option v-for="(item) in projectList" :key="item.id" :value="item.id"  >{{item.id}} : {{item.name}} - {{item.firstname}} {{item.lastname}}</Option>
                    </Select>
                </FormItem>
                <FormItem   label="Client Name">
                    <Select v-model="formData.receiver_id"   disabled   >
                        <Option v-for="(item) in userList" :key="item.id" :value="item.id"  >{{item.firstname}}  {{item.lastname}}</Option>
                    </Select>
                 </FormItem>
               <FormItem  prop="reason" label="Reason">
                   <!-- <p>Kemon Ache Ache</p> -->
                    <Input v-model="formData.reason" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter ..." />
                </FormItem>
               <FormItem  prop="date" label="Date">
                    <DatePicker format="yyyy-MM-dd" v-model="formData.date"  @on-change="selectDate" type="date" placeholder="Select date" ></DatePicker>
                </FormItem>
               <FormItem  prop="time" label="Time">
                    <TimePicker format="HH:mm" v-model="formData.time" placeholder="Select time" ></TimePicker>
                </FormItem>
               <FormItem  prop="duration" label="Duration (in Minutes)">
                    <Input type="number" v-model="formData.duration"  placeholder="Duration" />
                </FormItem>
            </Form>
            <div slot="footer">
                <Button    @click="isAddModal=false">Close</Button>
                <Button type="primary" :disabled="loading"   :loading="loading" @click="handleSubmit('formValidate')">{{loading==true?'Please Wait' : "Submit Request"}}</Button>
            </div>
        </Modal>
    </div>
</template>
<script>
export default {
    middleware:'authenticated',
    data () {
        return {
            
            pageOption:[5,10,20,50,100],
            no_data_text:'No Data Found !!!',
            total:10,
            projectList:[],
            userList:[],
            loading:false,
            str:'',
            isStatusEdit:false,
            isStatusIndex:-1,
            editData:{},
            isAddModal:false,
            formData:{
                receiver_id:'',
                project_id:'',
                duration:0,
                reason:'',
                date:'',
                time:'',
            },
            columns: [ 
                {
                    title: '#',
                    width: 100,
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
                    width:100
                },
                {
                    title: 'Sender',
                    key: 'sender_firstname',
                    width:200,
                    render: (h, params) => {
                        return h('div', [
                            h('strong', `${params.row.user_id} - ${params.row.sender_firstname}  ${params.row.sender_lastname}`)
                        ]);
                    }
                },
                {
                    title: 'Receiver',
                    key: 'sender_firstname',
                    width:200,
                    render: (h, params) => {
                        return h('div', [
                            h('strong', `${params.row.user_id} - ${params.row.receiver_firstname}  ${params.row.receiver_lastname}`)
                        ]);
                    }
                },
                {
                    title: 'Project',
                    key: 'project_name',
                    width:200,
                    render: (h, params) => {
                        return h('div', [
                            h('strong', `${params.row.project_id} - ${params.row.project_name}`)
                        ]);
                    }
                },
                {
                    title: 'Reason',
                    key: 'reason',
                    width:200
                },
                {
                    title: 'Date',
                    slot:'date',
                    width:200,
                   
                },
                {
                    title: 'Time',
                    key: 'time',
                    width:200
                },
                {
                    title: 'Duration',
                    key: 'duration',
                    width:200
                },
                {
                    title: 'Status',
                    slot: 'status',
                    width:200
                },
                
                // {
                //     title: 'Actions',
                //     slot: 'action'
                // }
            ],
            ruleCustom: {
                project_id: [
                    { required: true, message: 'Project cannot be empty',  },
                ],  
                receiver_id: [
                    { required: true, message: 'Client cannot be empty', trigger: 'change' },
                ], 
                duration: [
                    { required: true, message: 'Duration cannot be empty', trigger: 'blur' }
                ],
                reason: [
                    { required: true, message: 'Reason cannot be empty', trigger: 'blur' },
                ],  
                time: [
                    { required: true, message: 'Time cannot be empty', trigger: 'blur' },
                ],  
                date: [
                    { required: true, message: 'Date cannot be empty', trigger: 'blur' },
                ],  
            }

            
        }
    },
    methods: {
        async tabClick(value){
            if(value){
                console.log("TabType")
                this.tabType = value
                console.log(this.tabType)
                history.pushState({}, null, `/calender?tab=${value}`);
                this.getpaginate(1)
            }
        },
        selectDate(date){
		    this.formData.date = date 
        },
        async getProjectList(query){ 
            const res = await this.callApi('get',`/sales/getClientList?str=${query}`)
            if( res.status == 200){
                 this.projectList = res.data.data
            } 
        },
        async projectChangeOnSelect(data){ 
            console.log(data)
            console.log('data');
            if(  data === undefined) return
            let index = this.projectList.findIndex(d => d.id == data);
            let ob = {
                id:this.projectList[index].user_id,
                firstname:this.projectList[index].firstname,
                lastname:this.projectList[index].lastname,
            };
            this.userList = [];
            this.userList.push(ob);
            this.formData.receiver_id = ob.id

        },
        async getpaginate(page){ 
            console.log('str')
            console.log(this.str)
            this.loading = true
            const res = await this.callApi('get',`/sales/appintments?page=${page}&str=${this.str}&total=${this.total}&type=${this.tabType}`)
            if( res.status == 200){
                this.data = res.data.data
            } else {
                this.swr()
            }
            this.loading = false
        },
        
        async getSizeChange(size){ 
            this.total = size
            this.getpaginate(1)
        },
        handleSubmit (name) {
            this.loading = true;
            this.$refs[name].validate((valid) => {
                if (valid) {
                    // 
                    this.addAppointment()
                } else {
                    this.loading = false;
                    this.$Message.error('Validation Failed!');
                }
            })
        },
        editStatusOn(index){
            this.editData = {}
            this.editData.status = this.data.data[index].status 
            this.editData.id = this.data.data[index].id 
            this.editData.receiver_id = this.data.data[index].receiver_id 
            this.editData.project_id = this.data.data[index].project_id 
            this.isStatusEdit = true
            this.isStatusIndex = index
        },
        async editStatus(){ 
            this.loading = true
            const res = await this.callApi('post',`/sales/appintments/editStatus`,this.editData)
            if( res.status == 200){
                this.data.data[this.isStatusIndex].status = this.editData.status
                this.isStatusEdit = false
                this.isStatusIndex = -1
                this.editData = {}
            } else {
                this.swr()
            }
            this.loading = false
        },
        async addAppointment(){ 
            this.loading = true
            const res = await this.callApi('post',`/sales/appintments/add`,this.formData)
            if( res.status == 200){
                if(this.tabType != 'receiver') this.data.data.push(res.data.data);
                this.s("Request submitted for appointment")
                this.isAddModal = false
                this.formData = {
                    receiver_id:'',
                    project_id:'',
                    duration:0,
                    reason:'',
                    date:'',
                    time:'',
                }
            } else {
                this.swr()
            }
            this.loading = false
        },
    },
    
    async asyncData({ app, store, redirect, params,query }) {
        try {
            let tabType = query.tab? query.tab : 'all';
            const res = await app.$axios.get(`/sales/appintments?type=${tabType}`); 
            var data;
            if(res.status==200){
                data = res.data.data
            }
            return {
                data:data,
                tabType:tabType,
            };
        } catch (error) {
            console.log(error)
        // return redirect('/404')
        }
    },
   
}
</script>

<style scoped>

</style>