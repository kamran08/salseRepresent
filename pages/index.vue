<template>
	<div>
		<div class="_main_content">
			<div class="row">
				<!-- <div class="col-12 col-md-6 col-lg-3 _mar_b20">
					<div class="_box _b_radious3">
						<div class="_dash_card">
							<div class="_dash_card_icon">
								<Icon type="md-cash" />
							</div>
							<div class="_dash_card_details">
								<p class="_dash_card_amm">${{totalBalance? totalBalance: 0}}</p>
								<p class="_dash_card_title">Current balance</p>
							</div>
						</div>
					</div>
				</div>

				<div class="col-12 col-md-6 col-lg-3 _mar_b20">
					<div class="_box _b_radious3">
						<div class="_dash_card">
							<div class="_dash_card_icon">
								<Icon type="ios-cart" />
							</div>
							<div class="_dash_card_details">
								<p class="_dash_card_amm">{{totalClients? totalClients : 0}}</p>
								<p class="_dash_card_title">Total Clients</p>
							</div>
						</div>
					</div>
				</div>

				<div class="col-12 col-md-6 col-lg-3 _mar_b20">
					<div class="_box _b_radious3">
						<div class="_dash_card">
							<div class="_dash_card_icon">
								<Icon type="ios-link" />
							</div>
							<div class="_dash_card_details">
								<p class="_dash_card_amm">{{newProjects ? newProjects : 0}}</p>
								<p class="_dash_card_title">New projects</p>
							</div>
						</div>
					</div>
				</div>

				<div class="col-12 col-md-6 col-lg-3 _mar_b20">
					<div class="_box _b_radious3">
						<div class="_dash_card">
							<div class="_dash_card_icon">
								<Icon type="md-stopwatch" />
							</div>
							<div class="_dash_card_details">
								<p class="_dash_card_amm">{{runningProjects ? runningProjects : 0}}</p>
								<p class="_dash_card_title">Running projects</p>
							</div>
						</div>
					</div>
				</div>

				<div class="col-12 col-md-6 col-lg-3 _mar_b20">
					<div class="_box _b_radious3">
						<div class="_dash_card">
							<div class="_dash_card_icon">
								<Icon type="ios-cart" />
							</div>
							<div class="_dash_card_details">
								<p class="_dash_card_amm">{{comProjects ? comProjects : 0}}</p>
								<p class="_dash_card_title">Completed projects</p>
							</div>
						</div>
					</div>
				</div>

				<div class="col-12 col-md-6 col-lg-3 _mar_b20">
					<div class="_box _b_radious3">
						<div class="_dash_card">
							<div class="_dash_card_icon">
								<Icon type="ios-link" />
							</div>
							<div class="_dash_card_details">
								<p class="_dash_card_amm">{{totalProjects? totalProjects : 0}}</p>
								<p class="_dash_card_title">Total projects</p>
							</div>
						</div>
					</div>
				</div> -->
				<!-- <div class="col-12 col-md-12 col-lg-12">
					<div class="small">
						<line-chart :chart-data="datacollection"></line-chart>
						<button @click="fillData()">Randomize</button>
					</div>
				</div> -->
                <div class="col-12 col-md-12 col-lg-12 _mar_b20">
					<div class="_1card">
						<div class="_1card_top">
							<div class="_1card_top_left">
								<p class="_1card_top_title">Clients</p>
							</div>
						</div>
                        <div class="_1card_body">
                            <div class="_table_responsive">
                                <Table class="_table700" border :columns="clientColumns" :data="clients">
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
				<div class="col-12 col-md-12 col-lg-12 _mar_b20">
					<div class="_1card">
						<div class="_1card_top">
							<div class="_1card_top_left">
								<p class="_1card_top_title">Policies </p>
							</div>
						</div>
                        <div class="_1card_body">
                            <div class="_table_responsive">
                                <Table class="_table1300" border :columns="columns" :data="projects">
                                   <template slot-scope="{row }" slot="projectName">
                                            <div class="td-logo">
                                                <div class="td-name-t blue-bg">{{row.name.charAt(0)}}</div>
                                                <div class="td-logo-text">
                                                    <h3 class="color-focus weight-600">{{row.name}}</h3>
                                                </div>
                                            </div>
                                        </template>
                                        <template slot-scope="{row }" slot="startDate">
                                            <span  class="self-status status-success btn_width" v-if="row.effectiveDate">{{isDate(row.effectiveDate)}}</span>
                                        </template>
                                        <template slot-scope="{row}" slot="status">
                                        <span class="self-status status-danger">{{row.status}}</span>
                                        </template>
                                        <template slot-scope="{row}" slot="sales_price">
                                        <span>${{row.sales_price}}</span>
                                        </template>
                                        <template slot-scope="{row}" slot="paymentStatus">
                                            <span  class="self-status status-success btn_width" v-if="row.draftDate">{{isDate(row.draftDate)}}</span>
                                        </template>
                                        <template slot-scope="{row}" slot="action">
                                            
                                                    <nuxt-link :to="`/project/${row.id}`"  class="btn3 table-btn">
                                                       <Button type="primary"> VIEW </Button>
                                                    </nuxt-link>
                                              
                                        </template> 
                                </Table>
                            </div>
						</div>
					</div>
				</div>

                 <div class="col-12 col-md-12 col-lg-12">
					<div class="_1card">
                        <div class="_1card">
                            <div class="_1card_top">
                                <div class="_1card_top_left">
                                    <p class="_1card_top_title">Slider Banner</p>
                                </div>
                            </div>
                        </div>
                          <div class="_1card_body">
                            <div class="_table_responsive">
                                <SliderBanner />
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
	// import LineChart from './LineChart.js'
    // import { Line, mixins } from 'vue-chartjs'
    import SliderBanner from "~/components/dashboard/slider-banner";
    import "hooper/dist/hooper.css";
	export default {
        middleware: "authenticated",
		components: {
			// LineChart
			SliderBanner
		},
        data () {
            return {
				  datacollection: null,
                     clientColumns: [
                        {
                            title: 'ID',
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
                                
                    ],
     columns: [
          {
              title: 'ID', 
              key: 'id',
              width:50
          },
      //     {
      //         title: 'Client',
      //         slot: 'clientName',
      //         width:200
      //     },
          {
              title: 'Carrier Name',
              slot: 'projectName',
              width:200
            },
            {
                title: 'Police Number',
                key: 'policeNumber',
            },
           
            {
                title: 'Effective Date',
                slot: 'startDate',
            },
      
            {
                title: 'Status',
                slot: 'status',
            },
            {
                title: 'Price',
                slot: 'sales_price',
            },
            {
                title: 'Draft Date',
                slot: 'paymentStatus',
            },
            
            {
                title: 'Actions',
                slot: 'action',
            }
        
          
              ],
            }
		},
		
		methods: {
			fillData () {
				this.datacollection = {
				labels: [this.getRandomInt(), this.getRandomInt()],
				datasets: [
					{
					label: 'Data One',
					backgroundColor: '#f87979',
					data: [this.getRandomInt(), this.getRandomInt()]
					}, {
					label: 'Data One',
					backgroundColor: '#f87979',
					data: [this.getRandomInt(), this.getRandomInt()]
					}
				]
				}
			},
			getRandomInt () {
				return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      },
      async login() {
          const res = await this.callApi("get", "api/login");
          if (res.status == 200) {
            console.log(res.data);
          }
        },
        async register() {
          const res = await this.callApi("post", "api/register", this.userData);
          if (res.status == 200) {
            console.log(res.data);
          }
        },
        async getUser() {
          const res = await this.callApi("post", "post", {});
          console.log(res.data);
        },
        isDate(date) {
          return moment(date).format("DD-MM-YYYY");
        },
    },
    filters:{
      projectProgress(item){
            let percentage = 0;
            if (
              item.task.length > 0 &&
              item.task[0].sum != 0 &&
              item.task_complete.length > 0
            )
            percentage = Math.floor(
              (item.task_complete[0].com_sum * 100) / item.task[0].sum
            );
          return percentage;
      }
    },

		mounted () {
			  this.fillData()
    },
  async asyncData({ app, store, redirect, params,query }) {
    try {
      const [ res] = await Promise.all([
          app.$axios.get(`/sales/dashboardOverview`)
      ]) 

      var totalClients;
      var clients;
      var totalProjects;
      var runningProjects;
      var comProjects;
      var newProjects;
      var projects;
      var totalBalance;


      if(res.status==200){
        totalBalance = res.data.totalBalance ? res.data.totalBalance : 0
        totalClients = res.data.totalClients
        clients = res.data.clients
        totalProjects = res.data.totalProjects
        runningProjects = res.data.runningProjects
        comProjects = res.data.comProjects
        newProjects = res.data.newProjects
        projects = res.data.projects
      }
      // console.log(res.data);
      return {
        totalClients: totalClients,
        clients: clients,
        totalProjects: totalProjects,
        runningProjects: runningProjects,
        projects: projects,
        newProjects: newProjects,
        comProjects: comProjects,
        totalBalance: totalBalance,
          
      };
    } catch (error) {
      console.log('error')
      console.log(error)
      //return redirect('/404')
    }
  },
    }
</script>