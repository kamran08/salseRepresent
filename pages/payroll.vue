<template>
	<div>
		<div class="_main_content">
			<div class="row">
                <div class="col-12 col-md-12 col-lg-12">
					<div class="_1card">
						<div class="_1card_top">
							<div class="_1card_top_left">
								<p class="_1card_top_title">Balance</p>
								<div class="_1card_top_search">
									<Input search enter-button="Search" placeholder="Enter something..." v-model="str"  @on-search="paginateDataInfo(1)" @on-clear="paginateDataInfo(1)"/>
								</div>
							</div>
						</div>
                        <div class="_1card_body">
                            <div class="_table_responsive">
                                <Table class="_table800" border :columns="columns" :data="data.data" :loading="loading" :no-data-text="no_data_text">
                                    <template slot-scope="{row }" slot="projectName">
                                        <h3 class="_3table_title" v-if="row.project">{{row.project_id}}-{{row.project.name}}</h3>
                                    </template>
                                    <template slot-scope="{row }" slot="amount">
                                        <span> ${{row.amount}}</span>
                                    </template>
                                </Table>
                            </div>

                            <div class="_pagination _padd_t20">
                                <Page :current="parseInt(data.page)" :total="data.total" @on-change="paginateDataInfo"  :page-size="parseInt(data.perPage)" show-sizer show-total :page-size-opts="pageOption" @on-page-size-change="getSizeChange" />
                            </div>
                        </div>
					</div>
                </div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
    middleware: 'authenticated',
    data(){
        return{
            alldata:[],
            export2:-1,
            export6:false,
            export7:false,
            export3:-1,
            loading:false,
            isLoading:false,
            export1:false,
            details:'',
            page:1,
            pageSize:1,
            pageOption:[5,10,15,20],
            order:'desc',
            colName:'',
            str:'',
            totalBalance:0,
            no_data_text:'No Data Found !!!',
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
                },
                {
                    title: 'Project Name',
                    slot: 'projectName',
                },
                {
                    title: 'Type',
                    key: 'type',
                },
                {
                    title: 'Amount',
                    slot: 'amount',
                },
            ],
        }
    },
    methods:{
        async paginateDataInfo(page){
            this.isLoading = true
             const res  = await this.callApi("get", `/sales/allagentbalance?page=${page}&pageSize=${this.pageSize}&str=${this.str}`)
            if(res.status==200){
                this.data = res.data
                this.isLoading = false
            }
            else if(res.status==403){
                this.e(res.data.message)
            }
            else{
                this.swr()

            }
            this.isLoading = false
        },
        getSizeChange(e){
            // this.i(e)
            this.pageSize =e
            this.paginateDataInfo(1)
        },
        openExport(item,index){
          
            if(this.export2==index)
               return this.export2 =-1
            this.export2 = index
        },
        openExport2(item,index){
          
            if(this.export3==index)
               return this.export3 =-1
            this.export3 = index
        },
       
    },
     async asyncData({ app, store, redirect, params,query }) {
        

    try {
        
        const [ res, res2] = await Promise.all([
            
            app.$axios.get(`/sales/allagentbalance`),
            app.$axios.get(`/sales/getAgentBalance`)
        ]) 

        var data
        var totalBalance


    if(res.status==200)
      data = res.data
      totalBalance = res2.data
     return {
         data:data,
         totalBalance:totalBalance,
         
      };
    } catch (error) {
      //return redirect('/404')
    }
  },
}
</script>