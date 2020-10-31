<template>
	<div>
		<div class="_main_content">
			<div class="row">
                <div class="col-12 col-md-12 col-lg-12">
					<div class="_1card">
						<div class="_1card_top">
							<div class="_1card_top_left">
								<p class="_1card_top_title">My Clients</p>

								<div class="_1card_top_search">
									<Input search enter-button="Search" placeholder="Enter something..." v-model="str"  @on-search="getpaginate(1)" @on-clear="getpaginate(1)"/>
								</div>
							</div>
							<div class="_1card_top_right">
								<ul class="_1card_top_right_list">
    							    <li><nuxt-link to="/addSalse" class=""><Button type="primary">Add Client</Button></nuxt-link></li>
								</ul>
							</div>
						</div>
                         <div class="_1card_body">
                            <div class="_table_responsive">
                                <Table class="_table1000" border :columns="columns" :data="data.data" @on-sort-change="sortData">
                                    <template slot-scope="{row }" slot="action">
                                            <nuxt-link :to="`/project?${row.client.id}`" ><Button>Projects</Button></nuxt-link>
                                    </template>
                                </Table>
                            </div>
                             <div class="_pagination _padd_t20">
                                <Page :current="parseInt(data.page)"  :total="data.total" @on-change="getpaginate"  :page-size="parseInt(data.perPage)"  show-sizer show-total :page-size-opts="pageOption" @on-page-size-change="getSizeChange" />
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
    middleware:'authenticated',
    data () {
        return {
            sort:{
                col:'',
                order:'',
            },
            pageOption:[2,10,20,50,100],
            loading:false,
            str:'',
            no_data_text:'No Data Found !!!',
            columns: [
                {
                    title: '#',
                    align: 'center',
                    width:100,
                    render: (h, params) => {
                        return h('div', [
                            
                            h('strong', ((params.index)+1)+(((this.data.page-1)*this.data.perPage)))
                        ]);
                    }
                },
                {
                    title: 'ID',
                    sortable: true,
                    width:100,
                    align: 'center',
                    key:'client_id',
                    render: (h, params) => {
                        return h('div', [
                          
                            h('strong',params.row.client.id),

                        ]);
                    }
                },
                {
                    title: 'Client Name',
                    render: (h, params) => {
                        return h('div', [
                            h('strong',`${params.row.client.firstname} ${params.row.client.lastname}`),
                        ]);
                    }
                },
                {
                    title: 'Email',
                    render: (h, params) => {
                        return h('div', [
                            h('strong',`${params.row.client.email}`),
                        ]);
                    }
                },
                {
                    title: 'Phone',
                    render: (h, params) => {
                        return h('div', [
                            h('strong',`${params.row.client.phone}`),
                        ]);
                    }
                },
                {
                    title: 'Actions',
                    slot: 'action',
                }
            ],
            
        }
    },
    methods: {
        async getpaginate(page){
            this.loading = true
            const res = await this.callApi('get',`/sales/clientList?page=${page}&str=${this.str}&total=${this.total}&col=${this.sort.col}&order=${this.sort.order}`)
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
        sortData(value){
            this.sort.col = value.key;
            this.sort.order = value.order == 'normal' ? '' : value.order
            this.getpaginate(1);
        }
        
        
        

    },
    async asyncData({app,store,redirect,params,query}){
        try {
            var total = 10;
            const res = await app.$axios.get(`/sales/clientList?total=${total}`); 
            var data = res.data.data
            return {
                data:data,
                total:total,
            };
        } catch (error) {
            console.log(error)
        }

    },
    
}
</script>