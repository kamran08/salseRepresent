<template>
    <div>
         <!-- dashboard content -->
        <div >

            <div class="header-page-breadcrumb header-bg">
                <div class="header-page-left">
                    <div class="header-page-left-item header-page-left-text">
                        <h3>Receive Task</h3>
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
                <!-- <div class="header-page-right">
                    <div class="new-header-quick">
                        <ul>
                            <li class="full-width blue-bg dropdown-btn quick-blue">
                                <a href="#">Add Project</a>
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
                </div> -->
            </div>

            <!-- main content -->
            <div class="main-content box-pad pb-40">

                <!-- project list -->
                <div class="box mb-20">
                    <div class="box-title select-box-title">
                        <h3 class="color1">Project list</h3>
                        <div class="box-title-icon flex-wrap justify-flex-end">
                            <div class="box-title-select">
                                <div class="box-title-select-content">
                                    <p>Sort By:</p>
                                    <div class="box-title-select-option dropdown-btn">
                                        <h4>Status</h4>
                                        <p><i class="fas fa-chevron-down"></i></p>
                                        <div class="box-select-dropdown dropdown-action">
                                            <ul>
                                                <li>Pending</li>
                                                <li>Delivered</li>
                                                <li>Canceled</li>
                                                <li>Success</li>
                                                <li>Info</li>
                                                <li>Danger</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="cn-box-details">
                        <div class="recent-order-box">
                            <div class="recent-order-table billing-order-table">
                                <table>
                                    <thead>
                                        <tr>
                                            <!-- <th class="check-input"><input type="checkbox" id="check1"
                                                    class="check-all"><label for="check1"></label></th> -->
                                            <th>Task Name</th>
                                            <th>Status</th>
                                            <th>Date of Issue</th>
                                            <th>Sender Area</th>
                                            <th>Sender Name</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <!-- <td class="check-input"><input type="checkbox" id="check2"
                                                    class="check-item"><label for="check2"></label></td> -->
                                            <td>
                                                <div class="td-logo">
                                                    <div class="td-name-t blue-bg">M</div>
                                                    <div class="td-logo-text">
                                                        <h3 class="color-focus weight-600">Messenger</h3>
                                                        <!-- <p>Angular, React</p> -->
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span class="self-status status-danger">Processing</span></td>
                                            <td>2/04/2020</td>
                                            <td>Admin</td>
                                            <td>
                                                <div class="td-logo">
                                                    <div class="td-name-t blue-bg">M</div>
                                                    <div class="td-logo-text">
                                                        <h3 class="color-focus weight-600">Mark Robert</h3>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <a href="task-details.html" class="btn3 table-btn">VIEW</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <!-- <td class="check-input"><input type="checkbox" id="check2"
                                                    class="check-item"><label for="check2"></label></td> -->
                                            <td>
                                                <div class="td-logo">
                                                    <div class="td-name-t blue-bg"><img src="/images/img-1.png" alt="logo"></div>
                                                    <div class="td-logo-text">
                                                        <h3 class="color-focus weight-600">John Due</h3>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span class="self-status status-warning">Running</span></td>
                                            <td>2/04/2020</td>
                                            <td>Technitions</td>
                                            <td>
                                                <div class="td-logo">
                                                    <div class="td-name-t blue-bg">M</div>
                                                    <div class="td-logo-text">
                                                        <h3 class="color-focus weight-600">Mark Robert</h3>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <a href="task-details.html" class="btn3 table-btn">VIEW</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="box-pagination">
                                <div class="box-pagination-item box-pagination-left">
                                    <div class="box-pagination-number">
                                        <ul>
                                            <li class="pagi-disable pagi-arrow"><a href="#" title="First"><span><i
                                                            class="appify-angle-double-left"></i></span></a></li>
                                            <li class="pagi-disable pagi-arrow"><a href="#" title="Prev"><span><i
                                                            class="appify-left-open"></i></span></a></li>
                                            <li><a href="#" title="1"><span>1</span></a></li>
                                            <li><a href="#" title="2"><span>2</span></a></li>
                                            <li><a href="#" title="3"><span>3</span></a></li>
                                            <li><a href="#" title="4"><span>4</span></a></li>
                                            <li><a href="#" title="5"><span>5</span></a></li>
                                            <li class="pagi-arrow"><a href="#" title="Next"><span><i
                                                            class="appify-right-open"></i></span></a></li>
                                            <li class="pagi-arrow"><a href="#" title="Last"><span><i
                                                            class="appify-angle-double-right"></i></span></a></li>
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
        </div>
    </div>
</template>