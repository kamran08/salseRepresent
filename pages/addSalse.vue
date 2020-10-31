<template>
	<div>
		<div class="_main_content">
			<div class="row">
                <div class="col-12 col-md-12 col-lg-12">
					<div class="_1card">
						<div class="_1card_top">
							<div>
								<p class="_1card_top_title _mar_b10">New  User</p>
                                 <p class="_mar_b20">Enter user details and submit</p>
							</div>
						</div>

                        <div class="_1card_body">
                             <div class="row justify-content-center">
                                 <div class="col-12 col-md-12 col-lg-12">
                                    <Form :model="form" label-position="top">
                                        <div class="row">
                                            <div class="col-12 col-md-6 col-lg-6">
                                                <FormItem prop="firstname" :error="error.firstname"    label="First Name">
                                                    <Input v-model="form.firstname" />
                                                </FormItem>
                                            </div>
                                            <div class="col-12 col-md-6 col-lg-6">
                                                <FormItem  prop="lastname" :error="error.lastname" label="Last Name">
                                                    <Input  v-model="form.lastname"  />
                                                </FormItem>    
                                            </div>
                                            <div class="col-12 col-md-6 col-lg-6">
                                                <FormItem  prop="email" :error="error.email" label="Email">
                                                    <Input  v-model="form.email"  />
                                                </FormItem>
                                            </div>
                                            <div class="col-12 col-md-6 col-lg-6">
                                                <FormItem  prop="password" :error="error.password" label="Password">
                                                    <Input  v-model="form.password"  />
                                                </FormItem>
                                            </div>
                                            <div class="col-12 col-md-6 col-lg-6">
                                                <FormItem  prop="city" :error="error.city" label="City">
                                                    <Input  v-model="form.city"  />
                                                </FormItem>
                                            </div>
                                            <div class="col-12 col-md-6 col-lg-6">
                                                <FormItem  prop="country" :error="error.country" label="Country">
                                                    <Select class="profile-input" v-model="form.country" filterable placeholder="Select Country">
                                                        <Option value="United States">United States</Option>
                                                    </Select>
                                                </FormItem>
                                            </div>
                                            <div class="col-12 col-md-6 col-lg-6">
                                                <FormItem  prop="postcode" :error="error.postcode" label="Zip Code">
                                                    <Input  v-model="form.postcode"  />
                                                </FormItem>
                                            </div>
                                            <div class="col-12 col-md-6 col-lg-6">
                                                <FormItem prop="agent_type" :error="error.agent_type" label="Agent Type">
                                                    <Select  v-model="form.agent_type" >
                                                        <Option v-for="(item,index) in agentOption " :key="index"  :value="item.value">{{item.title}}</Option>
                                                    </Select >
                                                </FormItem>
                                            </div>
                                            <div class="col-12 col-md-12 col-lg-12">
                                                <FormItem :error="error.phone" label="Contact"> 
                                                    <Input  v-model="form.phone"  />
                                                </FormItem>
                                            </div>
                                            <div class="col-12 col-md-12 col-lg-12">
                                                <FormItem :error="error.address" label="Address">
                                                    <Input v-model="form.address" type="textarea" :autosize="{minRows: 5,maxRows: 7}"/>
                                                </FormItem>
                                            </div>
                                        </div>

                                        <!-- <FormItem   prop="bossId" :error="error.bossId" label="Add Reference Boss">
                                            <Button @click="BossModal=true"  v-if="!form.bossId && !name">
                                                Add
                                            </Button>
                                            <P v-if="form.bossId && name">{{name}} <span style="cursor:pointer;" ><Icon  v-if="form.bossId && name" @click="name='',form.bossId='',error.bossId='Please Reference Boss'" type="md-trash" /></span></P>
                                        </FormItem> -->
                                    </Form>

                                    <Button type="primary" :loading="loading" :disabled="loading" @click="storeData" >{{loading? 'Please wait' : 'Create'}}</Button>
                                 </div>
                             </div>
                        </div>

                        <!-- Modal -->
                        <Modal v-model="BossModal" title="Assign Agent">
                            <Form>
                                <FormItem :error="error.rrs" label="Refference">
                                    <Input v-model="rrs"  />
                                </FormItem>
                            </Form>

                            <div slot="footer">
                                <Button  @click="BossModal=false">Close</Button>
                                <Button type="primary" :disabled="isRLoading" :loading="isRLoading" @click="checkIsReferanceExist">{{isRLoading==true?'Please Wait' : "Add"}}</Button>
                            </div>
                        </Modal>
                        <!-- Modal -->
					</div>
                </div>
			</div>
	    </div>
    </div>
</template>
<script>
export default {
    // @keyup="assingData(1)"
    // v-if="error.email==''"
    middleware: 'agent',
    data(){
        return{
            rrs:'',
            BossModal:false,
            export2:false,
            name:'',
            addType:'',
            export2:false,
            str:'',
            bossData:'',
            isOk:false,
            isRLoading:false,
            loading:false,
            form:{
                firstname:'',
                lastname:'',
                email:'',
                address:'',
                phone:'',
                postcode:'',
                city:'',
                country:'United States',
                agent_type:'',
                password:'',
                bossId:''
            },
            error:{
                firstname:'',
                lastname:'',
                email:'',
                address:'',
                phone:'',
                postcode:'',
                city:'',
                country:'',
                agent_type:'',
                password:'',
                rrs:'',
            },
            agentOption:[],
            allUserType:[],
            reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
        
        }
    },
    methods:{
        async checkIsReferanceExist(){
            if(!this.rrs || this.rrs.trim()=='') return  this.error.rrs = 'Refference  is empty!'
            else this.error.rrs = ''
            this.isRLoading = true
            const res = await this.callApi('post', '/sales/checkRaferance',{reff:this.rrs})
            if(res.status==200){
                if(res.data.isOk){
                    this.s("referance hass been Added")
                    this.form.bossId = res.data.id
                    this.name = res.data.name
                    this.error.bossId=' '
                    this.BossModal = false

                }
                else{
                    this.e("Invalid raferance")
                }
        
            }
            else if(res.status==403){
                this.e(res.data.message)
            }
            else if(res.status==401){
                this.e(res.data.message)
            }
            else{
                this.swr()
            }
            this.isRLoading = false
        },
        async getBoss(query){
            const res = await this.callApi('get', `/getAgentByKey?str=${query}`)
            if(res.status==200){
                this.bossData = res.data
            }
            else if(res.status==403){
                this.e(res.data.message)
            }
            else if(res.status==401){
                this.e(res.data.message)
            }
            else{
                this.e("plase check your network !!")
            }
        },
        assingData(l) {
            if(l==1){
                if(!this.form.firstname )  return this.error.firstname =''
                this.error.firstname = this.form.firstname.trim();
            }
            if(l==2){
                if(!this.form.lastname)  return this.error.lastname =''
                this.error.lastname = this.form.lastname.trim();
              
            }
            if(l==3){
                if(!this.form.password)  return this.error.password =''
                this.error.password = this.form.password.trim();
                if(this.error.password.length<6) return this.error.password =''
        
              
            }
            if(l==4){
                if(!this.form.address)  return this.error.address =''
                this.error.address = this.form.address.trim();
            }
            if(l==5){
                if (this.reg.test(this.form.email)){
                this.error.email =this.form.email
                }
                else{
                this.error.email =''
                }
            }
            if(l==6){
                if(!this.form.city)  return this.error.city =''
                this.error.city = this.form.city.trim();
            }
            if(l==7){
                if(!this.form.postcode)  return this.error.postcode =''
                this.error.postcode = this.form.postcode.trim();
            }
            if(l==8){
                if(!this.form.agent_type || this.form.agent_type.trim()=='')  return this.error.agent_type =''
                this.error.agent_type = this.form.agent_type.trim()
            }
            if(l==9){
                if(!this.form.phone)  return this.error.phone =''
                this.error.phone = this.form.phone.trim();
            }
            if(l==10){
                if(!this.form.country)  return this.error.country =''
                this.error.country = this.form.country.trim();
            }
        },
        async storeData(){
            this.clearData();
              let flag = 1
               
                   
            
            if(!this.form.firstname  || this.form.firstname.trim()=='' || this.form.firstname==null){
                    this.error.firstname ='First Name Can not be empty!!'
                    flag = 0
            }  
            if(!this.form.lastname  || this.form.lastname.trim()=='' || this.form.lastname==null){
                    this.error.lastname ='Last Name Can not be empty!!'
                    flag = 0
            }  
            if(!this.form.password  || this.form.password.trim()=='' || this.form.password==null || this.form.password.trim()<6){
                    this.error.password ='Passwords must be at least 6 characters in length!!'
                    flag = 0
            }  
            if(!this.form.address  || this.form.address.trim()=='' || this.form.address==null){
                    this.error.address ='Address Can not be empty!!'
                    flag = 0
            }  
            if(!this.form.country  || this.form.country.trim()=='' || this.form.country==null ){
                    this.error.country ='Country Can not be empty!!'
                    flag = 0
            }  
            if(!this.form.phone  || this.form.phone.trim()=='' || this.form.phone==null ){
                    this.error.phone ='Contact Can not be empty!!'
                    flag = 0
            }  
           
            if (this.reg.test(this.form.email)){
                this.error.email =''
             }
            else{
                 this.error.email ='Please Provide Valid Email!!'
                flag = 0
            }
             if(!this.form.city  || this.form.city.trim()=='' || this.form.city==null){
                    this.error.city ='City Can not be empty!!'
                    flag = 0
            }  
             if(!this.form.city  || this.form.city.trim()=='' || this.form.city==null){
                    this.error.city ='Address Can not be empty!!'
                    flag = 0
            }  
             if(!this.form.postcode  || this.form.postcode.trim()=='' || this.form.postcode==null){
                    this.error.postcode ='Zip code Can not be empty!!'
                    flag = 0
            }  
             if(!this.form.agent_type  || this.form.agent_type=='' || this.form.agent_type==null){
                    this.error.agent_type ='Please Select a Agent Type!!'
                    flag = 0
            }  
            if(flag==0) return
            this.form.bossId = this.authInfo.id
            this.loading = true
            const res = await this.callApi('post','/sales/storeSalse', this.form)
            if(res.status==200){
                this.s("Agent has been created ")

                this.form={
                    firstname:'',
                    lastname:'',
                    email:'',
                    address:'',
                    phone:'',
                    postcode:'',
                    city:'',
                    country:'',
                    agent_type:'',
                    password:'',
                    bossId:''
                },
                this.error={
                    firstname:'',
                    lastname:'',
                    email:'',
                    address:'',
                    phone:'',
                    postcode:'',
                    city:'',
                    country:'',
                    agent_type:'',
                    password:'',
                }
            }
                else if(res.status==403){
                    this.e(res.data.message)
            }
            else if(res.status==401){
                this.e(res.data.message)
            }
            else{
                this.swr()
            }
            this.loading = false
        },
        clearData(){
             this.error={
                    firstname:'',
                    lastname:'',
                    email:'',
                    address:'',
                    phone:'',
                    postcode:'',
                    city:'',
                    country:'',
                    agent_type:'',
                    password:'',
                }
        }



    },
    created(){
        if(this.$route.query.str){
            this.addType =this.$route.query.str 
        }

        if(this.authInfo.agent_type == 'senior_management' ){
            this.agentOption = {};
            this.agentOption = [
                {value:'sales_director',title:"Sales Director"},
                {value:'tech_sales_agent',title:"Technician Sales agent"}
            ]
        }
        else if(this.authInfo.agent_type == 'sales_director' ){
            this.agentOption = {};
            this.agentOption = [
                {value:'tech_sales_agent',title:"Technician Sales agent"}
            ]
            // this.agentOption.push({value:'tech_sales_agent',title:"Technician Sales agent"})
        }
        

    }
}
</script>

<style scoped>
.client_add_sub{
    display: block;
    margin-top:10px;
}

</style>