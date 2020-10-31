<template>
	<div>
		<div class="_main_content">
			<div class="row">
                <div class="col-12 col-md-12 col-lg-12">
					<div class="_1card">
						<div class="_1card_top">
							<div class="_1card_top_left">
								<p class="_1card_top_title">My Policies</p> 
								<div class="_1card_top_search">
                                    <Input search enter-button="Search" placeholder="Enter something..." v-model="searchFilter"  @on-search="searchProject" @on-clear="searchProject"/>
								</div>
							</div>
							<div class="_1card_top_right">
								<ul class="_1card_top_right_list">
									<li><Button type="primary" @click="addProjectModal = !addProjectModal">Add Policy</Button></li>
								</ul>
							</div>
						</div>
                        <div class="_1card_body">           
                            <div class="">
                                <Tabs :animated="false"  @on-click="tabClick" v-model="tabType" class="overflow_visible tab_margin_zero project_table">
                                    <TabPane label="ALL Policies" name="all">
                                        <Table  :columns="columns" :data="projectData" :loading="loading" :no-data-text="no_data_text" class="iview_data_table ">
                                            <template slot-scope="{row }" slot="projectName">
                                                <div class="td-logo">
                                                    <div class="td-logo-text">
                                                        <h3 class="color-focus weight-600">{{row.name}}</h3>
                                                    </div>
                                                </div>
                                            </template>
                                            <!-- <template slot-scope="{row ,index}" slot="addendam">
                                                    <template v-if="row.addendum && row.addendum.name">
                                                    {{row.addendum.name}}
                                                </template>
                                                <template v-else>
                                                    <Button @click="openAddundumModal(row,index)">Add Addendum</Button>
                                                </template>
                                            </template> -->
                                            <template slot-scope="{row ,index}" slot="startDate">
                                                <template v-if="index==isEffective">

                                                <DatePicker @on-change="changeEffectiveDate" type="date" placeholder="Select date" style="width: 200px" v-model="effectiveDate"></DatePicker>
                                                <span @click="isEffective=-1" class="cursor_pointer">Cancel</span>
                                                </template>
                                                <template v-else>
                                                    <div class="self-status status-success btn_width">
                                                        <span v-if="row.effectiveDate">{{isDate(row.effectiveDate)}}</span>
                                                        <Icon @click="isEffective=index" type="md-create" />
                                                    </div>
                                                </template>
                                            </template>
                                            <!-- <template slot-scope="{row }" slot="progress">
                                                    <div class="d_card_bottom_left" >
                                                    <i-circle :percent="row | projectProgress">
                                                        <span class="demo-Circle-inner">{{ row |projectProgress}}%</span>
                                                    </i-circle>
                                                </div>
                                            </template> -->
                                            <template slot-scope="{row }" slot="hour">
                                                    {{row.hour}}hrs
                                            </template>
                                            <!-- <template slot-scope="{row }" slot="clientName">
                                                <div class="td-logo">
                                                    <h3 class="color-focus weight-600 client_name">
                                                        <span v-if="row.user">{{row.user.id}} - {{row.user.firstname}} {{row.user.lastname}}</span>
                                                    </h3>
                                                </div>
                                            </template> -->
                                            <template slot-scope="{row,index}" slot="status">
                                                    <Select v-if="statusOn && index == editIndex" v-model="row.status"  @on-change="statusChange" :placeholder="row.status" > 
                                                    <Option value="In-Force">In-Force</Option>  
                                                    <Option value="Terminated">Terminated</Option>  
                                                    <Option value="Pending">Pending</Option>  
                                                </Select> 
                                                <span v-else type="submit" @click="clickStatusOn(index)" :class="row.status=='Pending'? 'self-status status-danger' : 'self-status status-danger'" ><i class="fas fa-pencil-alt"></i> {{row.status}}</span>
                                            </template>
                                            <template slot-scope="{row,index }" slot="paymentStatus">
                                                    <template v-if="index==isDarft">

                                                <DatePicker @on-change="changeDarftDate" type="date" placeholder="Select date" style="width: 200px" v-model="draftDate"></DatePicker>
                                                <span @click="isDarft=-1" class="cursor_pointer">Cancel</span>
                                                </template>
                                                <template v-else>
                                                    <div class="self-status status-success btn_width">
                                                        <span v-if="row.draftDate">{{isDate(row.draftDate)}}</span>
                                                        <Icon @click="isDarft=index" type="md-create" />
                                                    </div>
                                                </template>
                                            </template>
                                            <template slot-scope="{row,index}" slot="action">

                                                <Button type="primary" @click="$router.push(`/project/${row.id}`)">VIEW</Button>
                                                <Button type="primary" @click="projectEditOn(row,index)">EDIT PRICE</Button>
                                                <!-- <Button type="primary" @click="$router.push()"></Button> -->
                                          
                                            </template>
                                        </Table>
                                        <div class="_mar_t30">
                                            <Page :current="parseInt(pagination.page)" :total="pagination.total" @on-change="getpaginate"  :page-size="parseInt(pagination.perPage)" show-sizer show-total :page-size-opts="pageOption" @on-page-size-change="getSizeChange" />
                                        </div>
                                    </TabPane>
                                    <TabPane label="In-Force Policies" name="In-Force">
                                        <Table  :columns="columns" :data="projectData" :loading="loading" :no-data-text="no_data_text" class="iview_data_table ">
                                            <template slot-scope="{row}" slot="projectName">
                                                <div class="td-logo">
                                                    <div class="td-logo-text">
                                                        <h3 class="color-focus weight-600">{{row.name}}</h3>
                                                    </div>
                                                </div>
                                            </template>
                                                <!-- <template slot-scope="{row ,index}" slot="addendam">
                                                    <template v-if="row.addendum && row.addendum.name">
                                                    {{row.addendum.name}}
                                                </template>
                                                <template v-else>
                                                    <Button @click="openAddundumModal(row,index)">Add Addendum</Button>
                                                </template>
                                            </template> -->
                                            <template slot-scope="{row,index }" slot="startDate">
                                                <template v-if="index==isEffective">

                                                <DatePicker @on-change="changeEffectiveDate" type="date" placeholder="Select date" style="width: 200px" v-model="effectiveDate"></DatePicker>
                                                <span @click="isEffective=-1" class="cursor_pointer">Cancel</span>
                                                </template>
                                                <template v-else>
                                                    <div class="self-status status-success btn_width">
                                                        <span v-if="row.effectiveDate">{{isDate(row.effectiveDate)}}</span>
                                                        <Icon @click="isEffective=index" type="md-create" />
                                                    </div>
                                                </template>
                                            </template>
                                            <!-- <template slot-scope="{row }" slot="progress">
                                                    <div class="d_card_bottom_left" >
                                                    <i-circle :percent="row | projectProgress">
                                                        <span class="demo-Circle-inner">{{ row |projectProgress}}%</span>
                                                    </i-circle>
                                                </div>
                                            </template> -->
                                            <template slot-scope="{row }" slot="hour">
                                                    {{row.hour}}hrs
                                            </template>
                                            <!-- <template slot-scope="{row }" slot="clientName">
                                                <div class="td-logo">
                                                    <h3 class="color-focus weight-600 client_name">
                                                        <span v-if="row.user">{{row.user.id}} - {{row.user.firstname}} {{row.user.lastname}}</span>
                                                    </h3>
                                                </div>
                                            </template> -->
                                            <template slot-scope="{row,index}" slot="status">
                                                    <Select v-if="statusOn && index == editIndex" v-model="row.status"  @on-change="statusChange" :placeholder="row.status" > 
                                                    <Option value="In-Force">In-Force</Option>  
                                                    <Option value="Terminated">Terminated</Option>  
                                                    <Option value="Pending">Pending</Option>   
                                                </Select> 
                                                <span v-else type="submit" @click="clickStatusOn(index)" :class="row.status=='Pending'? 'self-status status-danger' : 'self-status status-danger'" ><i class="fas fa-pencil-alt"></i> {{row.status}}</span>
                                            </template>
                                            <template slot-scope="{row,index }" slot="paymentStatus">

                                                    <template v-if="index==isDarft">

                                                <DatePicker @on-change="changeDarftDate" type="date" placeholder="Select date" style="width: 200px" v-model="draftDate"></DatePicker>
                                                <span @click="isDarft=-1" class="cursor_pointer">Cancel</span>
                                                </template>
                                                <template v-else>
                                                    <div class="self-status status-success btn_width">
                                                        <span v-if="row.draftDate">{{isDate(row.draftDate)}}</span>
                                                        <Icon @click="isDarft=index" type="md-create" />
                                                    </div>
                                                </template>
                                            </template>
                                            <template slot-scope="{row,index}" slot="action">
                                              <Button type="primary" @click="$router.push(`/project/${row.id}`)">VIEW</Button>
                                                <Button type="primary" @click="projectEditOn(row,index)">EDIT PRICE</Button>
                                            </template>
                                        </Table>
                                        <div class="_mar_t30">
                                            <Page :current="parseInt(pagination.page)" :total="pagination.total" @on-change="getpaginate"  :page-size="parseInt(pagination.perPage)" show-sizer show-total :page-size-opts="pageOption" @on-page-size-change="getSizeChange" />
                                        </div>
                                    </TabPane>
                                    <TabPane label="Pending Policies" name="Pending">
                                        <Table  :columns="columns" :data="projectData" :loading="loading" :no-data-text="no_data_text" class="iview_data_table ">
                                            <template slot-scope="{row }" slot="projectName">
                                                <div class="td-logo">
                                                    <div class="td-logo-text">
                                                        <h3 class="color-focus weight-600">{{row.name}}</h3>
                                                    </div>
                                                </div>
                                            </template>
                                                <!-- <template slot-scope="{row ,index}" slot="addendam">
                                                    <template v-if="row.addendum && row.addendum.name">
                                                    {{row.addendum.name}}
                                                </template>
                                                <template v-else>
                                                    <Button @click="openAddundumModal(row,index)">Add Addendum</Button>
                                                </template>
                                            </template> -->
                                            <template slot-scope="{row ,index}" slot="startDate">
                                                <template v-if="index==isEffective">

                                                <DatePicker @on-change="changeEffectiveDate" type="date" placeholder="Select date" style="width: 200px" v-model="effectiveDate"></DatePicker>
                                                <span @click="isEffective=-1" class="cursor_pointer">Cancel</span>
                                                </template>
                                                <template v-else>
                                                    <div class="self-status status-success btn_width">
                                                        <span v-if="row.effectiveDate">{{isDate(row.effectiveDate)}}</span>
                                                        <Icon @click="isEffective=index" type="md-create" />
                                                    </div>
                                                </template>
                                            </template>
                                            <!-- <template slot-scope="{row }" slot="progress">
                                                    <div class="d_card_bottom_left" >
                                                    <i-circle :percent="row | projectProgress">
                                                        <span class="demo-Circle-inner">{{ row |projectProgress}}%</span>
                                                    </i-circle>
                                                </div>
                                            </template> -->
                                            <!-- <template slot-scope="{row }" slot="clientName">
                                                <div class="td-logo">
                                                    <h3 class="color-focus weight-600 client_name">
                                                        <span v-if="row.user">{{row.user.id}} - {{row.user.firstname}} {{row.user.lastname}}</span>
                                                    </h3>
                                                </div>
                                            </template> -->
                                            <template slot-scope="{row,index}" slot="status">
                                                    <Select v-if="statusOn && index == editIndex" v-model="row.status"  @on-change="statusChange" :placeholder="row.status" > 
                                                    <Option value="In-Force">In-Force</Option>  
                                                    <Option value="Terminated">Terminated</Option>  
                                                    <Option value="Pending">Pending</Option> 
                                                </Select> 
                                                <span v-else type="submit" @click="clickStatusOn(index)" :class="row.status=='Pending'? 'self-status status-danger' : 'self-status status-danger'" ><i class="fas fa-pencil-alt"></i> {{row.status}}</span>
                                            </template>
                                            <template slot-scope="{row ,index}" slot="paymentStatus">
                                                    <template v-if="index==isDarft">

                                                <DatePicker @on-change="changeDarftDate" type="date" placeholder="Select date" style="width: 200px" v-model="draftDate"></DatePicker>
                                                <span @click="isDarft=-1" class="cursor_pointer">Cancel</span>
                                                </template>
                                                <template v-else>
                                                    <div class="self-status status-success btn_width">
                                                        <span v-if="row.draftDate">{{isDate(row.draftDate)}}</span>
                                                        <Icon @click="isDarft=index" type="md-create" />
                                                    </div>
                                                </template>
                                            </template>
                                            <template slot-scope="{row,index}" slot="action">
                                                <Button type="primary" @click="$router.push(`/project/${row.id}`)">VIEW</Button>
                                                <Button type="primary" @click="projectEditOn(row,index)">EDIT PRICE</Button>
                                            </template>
                                        </Table>
                                        <div class="_mar_t30">
                                            <Page :current="parseInt(pagination.page)" :total="pagination.total" @on-change="getpaginate"  :page-size="parseInt(pagination.perPage)" show-sizer show-total :page-size-opts="pageOption" @on-page-size-change="getSizeChange" />
                                        </div>
                                    </TabPane>
                                    <TabPane label="Terminated Policies" name="Terminated">
                                        <Table  :columns="columns" :data="projectData" :loading="loading" :no-data-text="no_data_text" class="iview_data_table ">
                                            <template slot-scope="{row }" slot="projectName">
                                                <div class="td-logo">
                                                    <div class="td-logo-text">
                                                        <h3 class="color-focus weight-600">{{row.name}}</h3>
                                                    </div>
                                                </div>
                                            </template>
                                                <!-- <template slot-scope="{row ,index}" slot="addendam">
                                                    <template v-if="row.addendum && row.addendum.name">
                                                    {{row.addendum.name}}
                                                </template>
                                                <template v-else>
                                                    <Button @click="openAddundumModal(row,index)">Add Addendum</Button>
                                                </template>
                                            </template> -->
                                            <template slot-scope="{row,index }" slot="startDate">
                                                <template v-if="index==isEffective">

                                                <DatePicker @on-change="changeEffectiveDate" type="date" placeholder="Select date" style="width: 200px" v-model="effectiveDate"></DatePicker>
                                                <span @click="isEffective=-1" class="cursor_pointer">Cancel</span>
                                                </template>
                                                <template v-else>
                                                    <span v-if="row.effectiveDate">{{isDate(row.effectiveDate)}}</span>
                                                    <Icon @click="isEffective=index" type="md-create" />
                                                </template>
                                                    <!-- <span v-if="row.startDate">{{isDate(row.startDate)}}</span> -->
                                            </template>
                                            <!-- <template slot-scope="{row }" slot="progress">
                                                    <div class="d_card_bottom_left" >
                                                    <i-circle :percent="row | projectProgress">
                                                        <span class="demo-Circle-inner">{{ row |projectProgress}}%</span>
                                                    </i-circle>
                                                </div>
                                            </template> -->
                                            <template slot-scope="{row }" slot="hour">
                                                    {{row.hour}}hrs
                                            </template>
                                            <!-- <template slot-scope="{row }" slot="clientName">
                                                <div class="td-logo">
                                                    <h3 class="color-focus weight-600 client_name">
                                                        <span v-if="row.user">{{row.user.id}} - {{row.user.firstname}} {{row.user.lastname}}</span>
                                                    </h3>
                                                </div>
                                            </template> -->
                                            <template slot-scope="{row,index}" slot="status">
                                                    <Select v-if="statusOn && index == editIndex" v-model="row.status"  @on-change="statusChange" :placeholder="row.status" > 
                                                    <Option value="In-Force">In-Force</Option>  
                                                    <Option value="Terminated">Terminated</Option>  
                                                    <Option value="Pending">Pending</Option> 
                                                </Select> 
                                                <span v-else type="submit" @click="clickStatusOn(index)" :class="row.status=='Pending'? 'self-status status-danger' : 'self-status status-danger'" ><i class="fas fa-pencil-alt"></i> {{row.status}}</span>
                                            </template>
                                            <template slot-scope="{row ,index}" slot="paymentStatus">
                                                <template v-if="index==isDarft">

                                                <DatePicker @on-change="changeDarftDate" type="date" placeholder="Select date" style="width: 200px" v-model="draftDate"></DatePicker>
                                                <span @click="isDarft=-1" class="cursor_pointer">Cancel</span>
                                                </template>
                                                <template v-else>
                                                    <div class="self-status status-success btn_width">
                                                        <span v-if="row.draftDate">{{isDate(row.draftDate)}}</span>
                                                        <Icon @click="isDarft=index" type="md-create" />
                                                    </div>
                                                </template>
                                            </template>
                                            <template slot-scope="{row,index}" slot="action">
                                               <Button type="primary" @click="$router.push(`/project/${row.id}`)">VIEW</Button>
                                                <Button type="primary" @click="projectEditOn(row,index)">EDIT PRICE</Button>
                                            </template>
                                        </Table>
                                        <div class="_mar_t30">
                                            <Page :current="parseInt(pagination.page)" :total="pagination.total" @on-change="getpaginate"  :page-size="parseInt(pagination.perPage)" show-sizer show-total :page-size-opts="pageOption" @on-page-size-change="getSizeChange" />
                                        </div>
                                    </TabPane>
                                </Tabs>
                            </div>
                         </div>
				    </div>
                </div>

               <Modal v-model="EditModal" title="Edit Policie" >
                    <Form  label-position="top" class="iview_submit_form">
                        <FormItem   label="Sales Price($)" :error="error.sales">
                            <Input  v-model="editItem.sales_price"></Input>
                        </FormItem>
                        
                    </Form> 
                    <div slot="footer">
                        <Button  @click="EditModal=false">Close</Button>
                        <Button type="primary" :disabled="loading"   :loading="loading" @click="update_project_tech">{{loading==true?'Please Wait' : "Update"}}</Button>
                    </div>
                </Modal>
                <Modal v-model="addundamModal" title="Add Addendum To The Policie">
                    <Form  label-position="top" class="iview_submit_form">
                        <FormItem   label="Carrier Name:">
                            <Input disabled  v-model="neform.name"></Input>
                        </FormItem>
                        <FormItem   label="Addendum" :error="error.addendum_id" >
                            <Select v-model="neform.addandumId" filterable >
                                <Option :value="it.id" v-for="(it, i) in allAddandum" :key="i" :label="it.name">{{it.name}}</Option>
                            </Select>
                        </FormItem>
                    </Form>
                    <div slot="footer">
                            <Button  @click="addundamModal=false">Close</Button>
                        <Button type="primary" :disabled="loading"   :loading="loading" @click="assignAddundamtotheProject">{{loading==true?'Please Wait' : "Update"}}</Button>
                    </div>
                </Modal>
                    <Modal v-model="addProjectModal" :closable="false" title="Add Policy" :mask-closable="false" width="800">
                    <Form  label-position="top" class="iview_submit_form">
                        <FormItem   label="Client Name" :error="errorProject.user_id">
                            <Select v-model="singleProject.user_id"  placeholder="Client name" filterable clearable remote :remote-method="getClientList"   >
                                <Option v-for="(item) in clientList" :key="item.id" :value="item.client_id"  >{{item.client_id}} : {{item.client.firstname}} {{item.client.lastname}}</Option>
                            </Select>
                        </FormItem>
                        <FormItem   label="Carrier Name:" :error="errorProject.name">
                            <Input   v-model="singleProject.name"></Input>
                        </FormItem>
                        <FormItem   label="Police Number:" :error="errorProject.policeNumber">
                            <Input   v-model="singleProject.policeNumber"></Input>
                        </FormItem>
                        <FormItem   label="Policie Description:" :error="errorProject.description">
                            <Input   v-model="singleProject.description" type="textarea" :autosize="true"></Input>
                        </FormItem>
                        <!-- <FormItem   label="Addendum" :error="errorProject.addendum_id" >
                            <Select v-model="singleProject.addendum_id" filterable >
                                <Option :value="it.id" v-for="(it, i) in allAddandum" :key="i" :label="it.name">{{it.name}}</Option>
                            </Select>
                        </FormItem> -->
                        <template >
                            <!-- <FormItem   label="Tech Price:" :error="errorProject.tech_price">
                                <Input type="number"  v-model="singleProject.tech_price" @on-change="changeClientPrice"></Input>
                            </FormItem>
                            <FormItem   label="Minimum Price:" >
                                <Input type="number"  disabled  v-model="singleProject.client_price"></Input>
                            </FormItem> -->
                            <FormItem   label="Price:" :error="errorProject.sales_price">
                                <Input type="number"   v-model="singleProject.sales_price"></Input>
                            </FormItem>
                        </template>
                        <FormItem   label="Attachment" :error="errorProject.files" >
                            <div class="demo-upload-list" v-for="(item, index) in uploadlist" :key="index">
                                    <template v-if="item.status === 'finished'">
                                    <img v-if="item.response.extension == 'doc'" :src="item.response.url" />
                                    <img v-if="item.response.extension == 'docx'" :src="item.response.url" />
                                    <img v-if="item.response.extension == 'pdf'" :src="item.response.url" />
                                    <img v-else :src="item.response.url" />
                                    <div class="demo-upload-list-cover">
                                        <Icon type="ios-trash-outline" @click.native="handleRemove(item, index)"></Icon>
                                    </div>
                                    </template>
                                    <template v-else>
                                    <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
                                    </template>
                                </div>
                                <Upload
                                    ref="upload"
                                    :show-upload-list="false"
                                    :format="['jpg','jpeg','png', 'pdf', 'doc', 'docx', 'gif', 'txt']"
                                    :max-size="20480"
                                    :on-success="handleSuccess"
                                    :on-format-error="handleFormatError"
                                    :on-exceeded-size="handleMaxSize"
                                    :before-upload="handleBeforeUpload"
                                    :on-progress="handleProgress"
                                    multiple
                                    type="drag"
                                    action="https://api.hombolttech.net/client/project/upload/attachment"
                                    style="width: 100% !important"
                                    >
                                    <div style="padding: 20px 0">
                                        <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                                        <p>Click or drag files here to upload</p>
                                    </div>
                                    <!-- <i class="fas fa-images"></i> attachement -->
                                </Upload>
                        </FormItem>
                        
                        
                    </Form>
                    <div slot="footer">
                        <Button  @click="closeAddModal">Close</Button>
                        <Button type="primary" :disabled="isLoading"   :loading="isLoading" @click="addProjectRequest">{{isLoading==true?'Please Wait' : "Create"}}</Button>
                    </div>
                </Modal>
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
            draftDate:'',
            effectiveDate:'',
            isEffective:-1,
            isDarft:-1,
        pageOption:[5,10,15,20],
        loading:false,
        isLoading:false,
        editIndex:-1,
        statusOn:true,
        statusValue:'',
        EditModal:false,
        editItem:{
            sales_price:'',
            id:'',
         },
         error:{
            sales:'',
            addendum_id:''
         },
        str:'',
        addProjectModal: false,
        singleProject: {
            user_id: "",
            name: "",
            policeNumber: "",
            description: "",
            addendum_id:'',
            tech_price:0,
            client_price:0,
            sales_price:0,
            status:'Processing',
            files: [],
        },
        errorProject: {
            name: "",
            policeNumber: "",
            user_id: "",
            description: "",
            addendum_id:'',
            tech_price:'',
            client_price:'',
            sales_price:'',
            files: '',
        },
        clientList:[],
        projectEditIndex:-1,
        searchFilter:'',
        tabType:'',
        neform:{
             name:'',
             projectId:"",
             addendum_id:'',
         },
         newEdit:-1,
         error2:" ",
         addundamModal:false,
         allAddandum:[],
         no_data_text:'No Data Found !!!',
        uploadlist: [],
        isUploadError: false,
        uploadErrorText: "",
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
            //  {
            //     title: 'Client',
            //     slot: 'clientName',
            //     width:200
            // },
            {
                title: 'Carrier Name',
                slot: 'projectName',
                width:200
            },
            {
                title: 'Police Number',
                key: 'policeNumber',
                width:200
            },
           
            {
                title: 'Effective Date',
                slot: 'startDate',
                width:300
            },
            // {
            //     title: 'Effective Date',
            //     slot: 'progress',
            //     width:200
            // },
         
           
            {
                title: 'Status',
                slot: 'status',
                width:200
            },
           
            {
                title: 'Price',
                key: 'sales_price',
                width:200
            },
            {
                title: 'Draft Date',
                slot: 'paymentStatus',
                width:200
            },
            
            {
                title: 'Actions',
                slot: 'action',
                    width:420 
            }
        ],
        }
        
	},

	methods : {
        async changeEffectiveDate(e){
            this.effectiveDate = e
            
            let ob = {
                effectiveDate:'',
                id:''
            }
            ob.effectiveDate = this.effectiveDate
            ob.id = this.projectData[this.isEffective].id
            console.log(ob)
            
            const res = await this.callApi('post', '/sales/updateInsuranceEffectiveDateOrDarftDate',ob)
            if(res.status==200){
                this.projectData[this.isEffective].effectiveDate = this.effectiveDate
                this.isEffective = -1
                this.effectiveDate = ''
                this.s("Effective date has been updated!!")
            }
            else if(res.status==401 || res.status==403){
                this.e(res.data.message)
            }
            else{
                this.swr()
            }
        },
        async changeDarftDate(e){
            this.draftDate = e
            
            let ob = {
                draftDate:'',
                id:''
            }
            ob.draftDate = this.draftDate
            ob.id = this.projectData[this.isDarft].id
            console.log(ob)
            
            const res = await this.callApi('post', '/sales/updateInsuranceEffectiveDateOrDarftDate',ob)
            if(res.status==200){
                this.projectData[this.isDarft].draftDate = this.draftDate
                this.isDarft = -1
                this.draftDate = ''
                this.s("Draft date has been updated!!")
            }
            else if(res.status==401 || res.status==403){
                this.e(res.data.message)
            }
            else{
                this.swr()
            }
        },
        async getClientList(query){ 
            const res = await this.callApi('get',`/sales/clientList?str=${query}`)
            if( res.status == 200){
                this.clientList = res.data.data.data
            } 
        },
        changeClientPrice(){ 
            if(this.singleProject.tech_price < 0) return
            let aIndex = this.allAddandum.findIndex(d => d.id == this.singleProject.addendum_id);
            let p = this.allAddandum[aIndex].senior_management;
            this.singleProject.client_price = (parseFloat(this.singleProject.tech_price)/parseFloat(p/100)).toFixed(2)
            
        },
        closeAddModal() {
            this.errorProject = {
               name: "",
               policeNumber: "",
                user_id: "",
                description: "",
                addendum_id:'',
                tech_price:'',
                client_price:'',
                sales_price:'',
                files: '',
            };
            this.addProjectModal = false;
        },
        handleProgress(event, file, fileList) {
            this.isUploadError = false;
            this.uploadErrorText = "";
            this.uploadlist = fileList;
        },
        handleBeforeUpload() {
            const check = this.uploadlist.length < 10;
            if (!check) {
                this.$Notice.warning({
                title: "Up to 10 files can be uploaded.",
                });
            }
            return check;
        },
        handleRemove(index, type) {
            this.uploadlist.splice(index, 1);
        },

        handleFormatError(file) {
            this.isUploadError = true;
            this.uploadErrorText =
                "Supported files types: .JPG .PNG .JPEG .GIF .doc .docx .pdf";
        },

        handleMaxSize(file) {
            if (file) {
                this.$Notice.warning({
                title: "Exceeding file size limit",
                desc: "File  " + file.name + " is too large, no more than 20Mb.",
                });
            }
        },
        handleSuccess(res, file) {
            // this.singleProject.files.push(res.id);
        },
        async addProjectRequest() {
            let check = this.projectRequestSubmitValidation()
            if (!check) return;
            

            for (let i of this.uploadlist) {
                this.singleProject.files.push(i.response);
            }
            let d = new Date();
            let monthNumber = d.getMonth() + 1;
            monthNumber = ("0" + monthNumber).slice(-2);
            let dayNumber = d.getDate();
            dayNumber = ("0" + dayNumber).slice(-2);
            let today = `${d.getFullYear()}-${monthNumber}-${dayNumber}`
            
            this.singleProject.startDate = today

            this.isLoading = true;
            const res = await this.callApi("post","/sales/addProjectRequest",this.singleProject );
            if (res.status == 200) {
                this.projectData.unshift(res.data);
                this.s("Policy has been added!")
            } else if (res.data.message) {
                this.e(res.data.message);
            } else {
                this.swr();
            }
            this.isLoading = false;
            this.closeAddModal();
        },
        projectRequestSubmitValidation() {
            this.clearErrorData();
            let check = true;
            if (this.singleProject.user_id == "" || this.singleProject.user_id == null ) {
                this.errorProject.user_id = "Client is required!";
                check = false;
            }
            if (this.singleProject.sales_price == "" || this.singleProject.sales_price == null ) {
                this.errorProject.sales_price = "Price is required!";
                check = false;
            }
           
            if (this.singleProject.name.trim() == "" || this.singleProject.name == null ) {
                this.errorProject.name = "Name is required!";
                check = false;
            }
            if (this.singleProject.policeNumber.trim() == "" || this.singleProject.policeNumber == null ) {
                this.errorProject.policeNumber = "Police Number is required!";
                check = false;
            }
            if (this.singleProject.description.trim() == "" || this.singleProject.description == null) {
                this.errorProject.description = "Description is required!";
                check = false;
            }
            if (this.singleProject.description.trim() == "" || this.singleProject.description == null) {
                this.errorProject.description = "Description is required!";
                check = false;
            }

            // if (this.uploadlist.length == 0) {
            //     this.errorProject.files = "At least one attachment is needed!";
            //     check = false;
            // }

            return check;
        },
        clearErrorData() {
            this.errorProject = {
                name: "",
                policeNumber: "",
                description: "",
                user_id:'',
                addendum_id:'',
                tech_price:'',
                client_price:'',
                sales_price:'',
                files: '',
            };
        },
        async getallAddundum(){
            const res1 = await this.callApi('get',`/sales/getAllAddandum`)
               if(res1.status==200){
                    this.allAddandum = res1.data
                }
        },
        async assignAddundamtotheProject(){
           let flag = 1;
           console.log('this..neform.addandumId');
           console.log(this.neform.addandumId);
            if(this.neform.addandumId == '' || this.neform.addandumId == null ){
                this.error.addendum_id = " Addendum can not be null";
                flag = 0
               
            } else this.error.addendum_id = "";
            if(flag == 0) return
            this.loading=true
            const res = await this.callApi('post', '/sales/assignAddundamtotheProject', this.neform)
            if(res.status==200){
                this.s("Addendum has been added!!")
                
                
                this.projectData[this.newEdit].addendum = {}
                this.projectData[this.newEdit].addendum.name = res.data.name
                this.addundamModal = false
            }
            else if(res.status==403){
                return this.e(res.data.message)
            }
              else if(res.status==401){
                this.e(res.data.message)
            }
            
            else{
                this.swr()
            }

            this.loading=false


        },
        openAddundumModal(item,index){
            this.newEdit = index
            this.neform={
                 name:'',
                 projectId:'',
                 addendum_id:'',
            }
            this.error2 = " "
            this.neform.name = item.name 
            this.neform.projectId = item.id 
            this.addundamModal = true

        },
        async tabClick(value){
            this.tabType = value
            history.pushState({}, null, `/project?tab=${value}`);
            if(value){
                const res  = await this.callApi('get',`/sales/all_project_tech?page=${this.page}&pageSize=${this.pageSize}&status=${value}`)
                if(res.status == 200){
                    this.projectData= res.data.data
                    this.pagination = res.data
                    this.statusValue=value
                }
                else{
                    this.swr()
                }
            }
        },
        clickStatusOn(index){
			this.statusOn = true
			this.editIndex=index
		},
		async statusChange(value){
            let ob = {
                status : value,
                id:this.projectData[this.editIndex].id
            };
			const res = await this.callApi("post", `/sales/projectStatus`, ob);
			if (res.status == 200) {
                this.projectData[this.editIndex] = res.data;
                this.$set(this.projectData,this.editIndex,res.data);
                this.statusOn = false
            } 
            else this.swr();
			
		},
		async getpaginate(page){
            this.page = page
			const res  = await this.callApi('get',`/sales/all_project_tech?page=${page}&pageSize=${this.pageSize}&status=${this.statusValue}`)
			if(res.status == 200){
				this.projectData= res.data.data
                this.pagination = res.data
			}
			else{
				this.swr()
			}
        },
        getSizeChange(e){
            this.pageSize =e
            this.getpaginate(1)
        },
        isDate(date) {
            return moment(date).format("DD-MM-YYYY");
        },
        projectEditOn(item,index){
            this.EditModal=true
            this.editItem.sales_price=item.sales_price
            this.editItem.id=item.id
            this.projectEditIndex=index
        },
        async update_project_tech(){
            let flag = 1;
            if(this.editItem.sales_price == '' || this.editItem.sales_price == null ){
                this.error.sales = "Price can not be null";
                flag = 0
               
            } else this.error.sales = "";
            if(flag == 0) return
            this.loading=true
            const res = await this.callApi("post",'/sales/update_project_tech', this.editItem);
			if (res.status == 200) {
                this.EditModal=false
                this.s('Policy successfully updated!')
                this.projectData[this.projectEditIndex].sales_price=this.editItem.sales_price
                this.editItem={}
            } 
            else{
                this.swr();
            }
            this.loading=false
			
        },
        //Delete

        //Search
        async searchProject(){
        if(this.searchFilter){
            const res = await this.callApi('get',`/sales/all_project_tech?page=${this.page}&pageSize=${this.pageSize}&searchFilter=${this.searchFilter}&status=${this.statusValue}`)
            if(res.status == 200){
                this.projectData =  res.data.data;
                // delete res.data.data
                this.pagination = res.data;
            }
            else{
               this.swr();
            }
        }
         else {
      
         }
        },
    }, 
     filters:{
        projectProgress(item){
            let percentage = 0
            if(item.task.length>0 && item.task[0].sum!=0 && item.task_complete.length>0) 
            percentage = Math.floor((item.task_complete[0].com_sum*100)/item.task[0].sum);
            return percentage;
        }
     },

    
    async asyncData({ app, store, redirect, params,query }) {
        try {
            var tabType = query.tab? query.tab : 'all';
            var project_id = query.project_id? query.project_id : '';
            var page = 1;
            var pageSize = 5;
            const res = await app.$axios.get(`/sales/all_project_tech?page=${page}&pageSize=${pageSize}&project_id=${project_id}`); 

            var projectData;
            var pagination;
            
            if(res.status==200){
                projectData= res.data.data
                pagination = res.data	
            }
            return {
                projectData:projectData,
                pagination:pagination,
                tabType:tabType,
                project_id:project_id,
                page:page,
                pageSize:pageSize,
            };
        } catch (error) {
            console.log(error)
        // return redirect('/404')
        }
    },
	async created(){
        this.getallAddundum()
	}, 
	
}
</script>
<style >
.demo-upload-list {
  display: inline-block;
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  border: 1px solid transparent;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  position: relative;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  margin-right: 4px;
  margin-bottom: 10px;
}
.demo-upload-list img {
  width: 100%;
  height: 100%;
}
.demo-upload-list-cover {
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
}
.demo-upload-list:hover .demo-upload-list-cover {
  display: block;
}
.demo-upload-list-cover i {
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  margin: 0 2px;
}
.loading_gif {
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  height: 300px;
}
.mar_t10 {
  margin-top: 10px;
}
</style>




