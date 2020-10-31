<template>
    <div>

        <!-- dashboard content -->
        <div >

            <div class="header-page-breadcrumb header-bg">
                <div class="header-page-left">
                    <div class="header-page-left-item header-page-left-text">
                        <h3>Leads</h3>
                    </div>
                    <div class="header-page-left-item header-page-left-search">
                        <p>10 Total</p>
                        <form>
                            <div class="app-input-group">
                                <input type="text" placeholder="Search..">
                                <button class="btn1"><span><i class="fas fa-search"></i></span></button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="header-page-right">
                    <div class="new-header-quick">
                        <ul>
                            <li class="full-width blue-bg dropdown-btn quick-blue">
                                <a href="#">Add Lead</a>
                            </li>
                            <li class="dropdown-btn">
                                <a href="#"><i class="appify-plus-1"></i></a>
                                <div class="export-notification notification-lg dropdown-action">
                                    <ul>
                                        <li><a href="#"><span><i class="appify-doc"></i></span>Document</a></li>
                                        <li><a href="#"><span><i class="appify-mail"></i></span>Message</a></li>
                                        <li><a href="#"><span><i class="appify-basket"></i></span>Product</a></li>
                                        <li><a href="#"><span><i class="appify-file-pdf"></i></span>Report <span
                                                    class="ex-badge badge-danger">pdf</span></a></li>
                                        <li><a href="#"><span><i class="appify-comment"></i></span>Post</a></li>
                                        <li><a href="#"><span><i class="appify-users-outline"></i></span>Customer</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- main content -->
            <div class="main-content box-pad pb-40">

                <!-- lead -->
                <div class="box mb-20">
                    <div class="cn-box-details">
                        <div class="recent-order-box">
                            <div class="recent-order-table billing-order-table">
                                <table id="example" width="100%" class="">
                                    <thead>
                                        <tr class="table-row">
                                            <th >#</th>
                                            <!-- <th class="check-input"><input type="checkbox" id="check1" class="check-all"><label for="check1"></label></th> -->
                                            <th>Lead Name</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Project</th>
                                            <th>Assigned Staff</th>
                                            <th>Status</th>
                                            <th>Created</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="table-row">
                                            <td>1</td>
                                            <!-- <td class="check-input"><input type="checkbox" id="check2" class="check-item"><label for="check2"></label></td> -->
                                            <td class="nowrap">
                                                <div class="td-name-icon">
                                                    <div class="td-name-t danger-bg">L</div>
                                                    <div class="td-logo-text">
                                                        <h3><a href="#">Laryssa Carl</a></h3>
                                                        <p>Designer</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="nowrap"><span class="cell-ellipsis">lgerlts0@huffingtonpost.com</span></td>
                                            <td class="nowrap">+880-1781610033</td>
                                            <td class="nowrap">
                                                <div class="td-logo">
                                                    <div class="td-name-t blue-bg">M</div>
                                                    <div class="td-logo-text">
                                                        <h3 class="color-focus weight-600">Messenger</h3>
                                                        <!-- <p>Angular, React</p> -->
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="nowrap">
                                                <div class="td-logo">
                                                    <div class="td-name-t danger-bg"><img src="/images/100_8.jpg" alt="logo"></div>
                                                    <div class="td-logo-text">
                                                        <h3><a href="#">John Due</a></h3>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span class="table-status status-focus">Pending</span></td>
                                            <td>2/20/2018</td>
                                            <td class="table-action-btn">
                                                <button class="color-success"><span><i class="appify-pencil"></i></span></button>
                                                <button class="color-danger"><span><i class="appify-trash-empty"></i></span></button>
                                            </td>
                                        </tr>
                                        <tr class="table-row">
                                            <td>2</td>
                                            <!-- <td class="check-input"><input type="checkbox" id="check2" class="check-item"><label for="check2"></label></td> -->
                                            <td class="nowrap">
                                                <div class="td-name-icon">
                                                    <div class="td-name-t success-bg"><img src="/images/100_6.jpg" alt="img"></div>
                                                    <div class="td-logo-text">
                                                        <h3><a href="#">John Due</a></h3>
                                                        <p>Manager</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="nowrap"><span class="cell-ellipsis">lgerlts0@huffingtonpost.com</span></td>
                                            <td class="nowrap">+880-1781610033</td>
                                            <td class="nowrap">
                                                <div class="td-logo">
                                                    <div class="td-name-t blue-bg">C</div>
                                                    <div class="td-logo-text">
                                                        <h3 class="color-focus weight-600">Calender</h3>
                                                        <!-- <p>Angular, React</p> -->
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="nowrap">
                                                <div class="td-logo">
                                                    <div class="td-name-t danger-bg"><img src="/images/100_8.jpg" alt="logo"></div>
                                                    <div class="td-logo-text">
                                                        <h3><a href="#">John Due</a></h3>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span class="table-status status-focus">Pending</span></td>
                                            <td>2/20/2018</td>
                                            <td class="table-action-btn">
                                                <button class="color-success"><span><i class="appify-pencil"></i></span></button>
                                                <button class="color-danger"><span><i class="appify-trash-empty"></i></span></button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="box-pagination">
                                <div class="box-pagination-item box-pagination-left">
                                    <div class="box-pagination-number">
                                        <ul>
                                            <li class="pagi-disable pagi-arrow"><a href="#" title="First"><span><i class="fas fa-angle-double-left"></i></span></a></li>
                                            <li class="pagi-disable pagi-arrow"><a href="#" title="Prev"><span><i class="fas fa-angle-left"></i></span></a></li>
                                            <li><a href="#" title="1"><span>1</span></a></li>
                                            <li><a href="#" title="2"><span>2</span></a></li>
                                            <li><a href="#" title="3"><span>3</span></a></li>
                                            <li><a href="#" title="4"><span>4</span></a></li>
                                            <li><a href="#" title="5"><span>5</span></a></li>
                                            <li class="pagi-arrow"><a href="#" title="Next"><span><i class="fas fa-angle-right"></i></span></a></li>
                                            <li class="pagi-arrow"><a href="#" title="Last"><span><i class="fas fa-angle-double-right"></i></span></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="box-pagination-item box-pagination-right">
                                    <div class="box-pagination-result">
                                        <div class="box-pagination-result-page">
                                            <div class="box-pagination-page-number dropdown-btn">
                                                <button>
                                                    <h3>10</h3>
                                                    <span><i class="fas fa-chevron-up"></i></span>
                                                </button>
                                                <div class="pagination-dropdown dropdown-action">
                                                    <ul>
                                                        <li>5</li>
                                                        <li class="active">10</li>
                                                        <li>20</li>
                                                        <li>30</li>
                                                        <li>50</li>
                                                        <li>100</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="box-pagination-page-reuslt">
                                                <p>Showing 1 - 10 of 200</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal-full-area mb-20">
                <div class="modal-dialogue-box modal-dialogue-box-lg ">
                    <div class="modal-dialogue-inner">
                        <div class="modal-dialogue-header pb-20">
                            <h2 class="modal-header-text">Add New Lead</h2>
                            <p class="modal-header-close modal-close"><span class="modal-header-close-icon"><i class="fas fa-times"></i></span></p>
                        </div>
                        <div class="full-separation full-separation-fit "></div>
                        <form action="">
                            <div class="modal-dialogue-body">
                                <div class="profile-edit-group full-width">
                                    <div class="col-md-6 col-sm-12 mb-20">
                                        <div class="profile-edit-group-item col-md-12 col-sm-12 no-padding">
                                            <label class="profile-edit-name profile-edit-name-left color2">Name</label>
                                        </div>
                                        <div class="profile-edit-group-item col-md-12 col-sm-12 no-padding">
                                            <div class="profile-edit-input">
                                                <input type="text" class="profile-input" placeholder="Name">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-12 mb-20">
                                        <div class="profile-edit-group-item col-md-12 col-sm-12 no-padding">
                                            <label class="profile-edit-name profile-edit-name-left color2">Job Title</label>
                                        </div>
                                        <div class="profile-edit-group-item col-md-12 col-sm-12 no-padding">
                                            <div class="profile-edit-input">
                                                <input type="text" class="profile-input"  placeholder="Manager">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-12 mb-20">
                                        <div class="profile-edit-group-item col-md-12 col-sm-12 no-padding">
                                            <label class="profile-edit-name profile-edit-name-left color2">Email</label>
                                        </div>
                                        <div class="profile-edit-group-item col-md-12 col-sm-12 no-padding">
                                            <div class="profile-edit-input">
                                                <input type="text" class="profile-input"  placeholder="Email">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-12 mb-20">
                                        <div class="profile-edit-group-item col-md-12 col-sm-12 no-padding">
                                            <label class="profile-edit-name profile-edit-name-left color2">Phone</label>
                                        </div>
                                        <div class="profile-edit-group-item col-md-12 col-sm-12 no-padding">
                                            <div class="profile-edit-input">
                                                <input type="text" class="profile-input"  placeholder="Phone">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-12 mb-20">
                                        <div class="profile-edit-group-item col-md-12 col-sm-12 no-padding">
                                            <label class="profile-edit-name profile-edit-name-left color2">Project Name</label>
                                        </div>
                                        <div class="profile-edit-group-item col-md-12 col-sm-12 no-padding">
                                            <div class="profile-edit-input">
                                                <input type="text" class="profile-input"  placeholder="Project name">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-12 mb-20">
                                        <div class="profile-edit-group-item col-md-12 col-sm-12 no-padding">
                                            <label class="profile-edit-name profile-edit-name-left color2">Assigned Staff</label>
                                        </div>
                                        <div class="profile-edit-group-item col-md-12 col-sm-12 no-padding">
                                            <div class="profile-edit-input">
                                                <input type="text" class="profile-input"  placeholder="Assigned staff">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-12 mb-20">
                                        <div class="profile-edit-group-item col-md-12 col-sm-12 no-padding">
                                            <label class="profile-edit-name profile-edit-name-left color2">Status</label>
                                        </div>
                                        <div class="profile-edit-group-item col-md-12 col-sm-12 no-padding">
                                            <div class="profile-edit-input">
                                                <select class="profile-input">
                                                    <option value="0">Choose one</option>
                                                    <option value="1">Pending</option>
                                                    <option value="2">Progressing</option>
                                                    <option value="2">Warning</option>
                                                    <option value="2">Focus</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-12 mb-20">
                                        <div class="profile-edit-group-item col-md-12 col-sm-12 no-padding">
                                            <label class="profile-edit-name profile-edit-name-left color2">Priority</label>
                                        </div>
                                        <div class="profile-edit-group-item col-md-12 col-sm-12 no-padding">
                                            <div class="profile-edit-input">
                                                <select class="profile-input">
                                                    <option value="0">Choose one</option>
                                                    <option value="1">Focus</option>
                                                    <option value="2">Success</option>
                                                    <option value="2">Warning</option>
                                                    <option value="2">Danger</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-sm-12 mb-20">
                                        <div class="profile-edit-group-item col-md-12 col-sm-12 no-padding">
                                            <label class="profile-edit-name profile-edit-name-left color2">Description</label>
                                        </div>
                                        <div class="profile-edit-group-item col-md-12 col-sm-12 no-padding">
                                            <div class="profile-edit-input">
                                                <textarea rows="5" class="profile-input" placeholder="Type here"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="full-separation full-separation-fit "></div>
                            <div class="modal-dialogue-action">
                                <button class="btn2 btn-focus modal-close">Add Lead</button>
                                <button class="btn2 btn-hover-focus modal-close">Close</button>
                            </div>
                        </form>
                        <!-- <div class="modal-dialogue-footer">
                            <p class="modal-footer-text"><a href="#">Login?</a></p>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
      data () {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                user:{
                    id:1
                },
                transactions:[],
                totalPage:0
                
            }
        },
        methods: {
           
            async login(){
                if(this.formInline.user.trim()==""){
                    return this.e("Please fill user name")
                }
                if(this.formInline.password.trim()==""){
                    return this.e("Please fill password")
                }
               

                const res = await this.callApi('post','/app/login',this.formInline)
                if(res.status == 200){
                    this.s("Login added!")
                   
                }else this.swr()
                // let res = await this.callApi
                // return this.s("Everything is good")
            }

        },
        async created(){
            const res = await this.callApi('post','/sales/payroll',this.user)
            // console.log(res)
            if(res.status == 200){
             this.s(res.message)
             this.transactions = res.data.transactions
             this.totalPage = res.data.transactions.length
            //  console.log(res)
             console.log(this.transactions)
                
            }else this.swr()
        }
    }
</script>
