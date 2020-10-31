<template>
    <div>
        <div class="_login">
            <div class="_login_left">
                <div class="_login_overlay"></div>
                <div class="authentic_nav_logo">
                    <a href="" class="authentic_nav_logo_a">
                        <img src="/img/homboltwhite.png" alt="" title="" style="width: 50%;" > 
                    </a>
                </div>
                <p class="_login_left_text">Advanced Technology For Less!</p>
                <a href="https://hombolttech.com" target="_blank" rel="noopener noreferrer"><Button type="primary">Learn More</Button></a>
            </div>

            <div class="_login_right">
                <div class="_login_main">
                    <div class="_login_top _1border_color">
                          <p class="_login_top_text" v-if="reset1">Recover Password</p>
                              <p class="_login_top_text" v-if="reset2">Get a verification code</p>
                              <p class="_login_top_text" v-if="reset3">Reset Your Password</p>
                    </div>

                    <div class="_login_form" v-if="reset1">
                       <a-alert v-if="wrongMsg" :message="wrongMsg" type="error" />
                        <Form>
                            <div class="row">
                                <div class="col-12 col-md-12 col-lg-12">
                                    <FormItem :error="error.email">
                                        <Input v-model="form_data.email" style="margin-bottom: 10px;"  placeholder="Email"  />
                                    </FormItem>
                                </div>
                           
                            </div>
                            
                            <div class="col-12 col-md-12 col-lg-12">
                                <FormItem>
                                   <Button type="primary" class="_log_btn"  :loading="isLoading" :disabled="loading"  @click="forget_password">
                                          <span v-if="!isLoading">Send code</span>
                                          <span v-else>Please wait...</span>
                                        </Button>
                                </FormItem>
                            </div>
                        </Form>
                    </div>
                    <div class="_login_form" v-if="reset2">
                        <a-alert v-if="wrongMsg" :message="wrongMsg" type="error" />
                        <Form>
                            <div class="row">
                                <div class="col-12 col-md-12 col-lg-12">
                                    <FormItem :error="error.code">
                                        <Input v-model="form.code" style="margin-bottom: 10px;" placeholder="Reset Code"  />
                                    </FormItem>
                                </div>
                           
                           
                            </div>
                            
                            <div class="col-12 col-md-12 col-lg-12">
                                <FormItem>
                                   <Button
                                   class="_log_btn" 
                                    v-if="isLoading"
                                    disabled

                                  >please wait...</Button>
                                  <Button
                                  class="_log_btn" 
                                    v-else
                                    @click="check_code"
                                  >Check Code</Button>

                                </FormItem>
                            </div>
                        </Form>
                    </div>
                    <div class="_login_form" v-if="reset3">
                        <a-alert v-if="wrongMsg" :message="wrongMsg" type="error" />
                        <Form>
                            <div class="row">
                                <div class="col-12 col-md-12 col-lg-12">
                                    <FormItem :error="error.r2password">
                                        <Input v-model="form2.password" style="margin-bottom: 10px;" type="password"  placeholder="Enter New Password"  />
                                    </FormItem>
                                </div>
                                <div class="col-12 col-md-12 col-lg-12">
                                    <FormItem :error="error.rpassword">
                                        <Input v-model="passwordcheck" style="margin-bottom: 10px;" type="password" placeholder="Enter Password Again"   />
                                    </FormItem>
                                </div>
                           
                           
                            </div>
                            
                            <div class="col-12 col-md-12 col-lg-12">
                                <FormItem>
                                  <Button
                                    v-if="isLoading"
                                    disabled
                                    class="_log_btn" 
                                  >please wait...</Button>
                                  <Button
                                    v-else
                                    @click="change_pasword"
                                    class="_log_btn" 
                                  >Change Password</Button>
                                    <!-- <button class="_log_btn">Sign up</button> -->
                                </FormItem>
                            </div>
                        </Form>
                    </div>

                    <div class="_login_bottom">
                        <p class="_login_do">Do you have a Account?  <router-link class="_3link _mar_l5" to="/login">Login</router-link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  middleware: "guest",
  data() {
    return {
      reset1: true,
      reset2: false,
      loading: false,
      reset3: false,
      form: {
        code: '',
        email: '',
      },
      form2: {
        email: '',
        password: '',
      },
      form_data: {
        email: "",
        password: "",
      },
      error: {
        email: '',
        password: '',
        rpassword: '',
        r2password: '',
        code: '',
      },
      passwordcheck: null,

      isLoading: false,
      errorText: "",
      wrongMsg: "",
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
    };
  },
  methods: {
    async forget_password() {
      this.clearData();
      if (this.form_data.email.trim() == "") {
        // return this.e("Email is required!")
        this.error.email = "Email can not be empty!";
        this.errorText = "Email can not be empty!";
        return;
      }

      if (!this.reg.test(this.form_data.email)) {
        this.error.email = "Email is invalid!";
        this.errorText = "Email is invalid!";
        return;
        // return this.e("Use a valid email please!")
      }

      this.isLoading = true;
      const response = await this.callApi(
        "post",
        "forgetPassword",
        this.form_data
      );
      if (response.status == 200) {
        this.s("Password reset code is sent to your email");
        this.form.email = response.data.email;
        this.reset1 = false;
        this.reset2 = true;
        this.reset3 = false;

        //window.location = "/";
        // location.reload()
      } else if (response.status == 401) {
        // this.wrongMsg = response.data.message
        this.error.email = response.data.message
        // this.e(response.data.message);
      } else this.swr();

      this.isLoading = false;
    },

    async check_code() {
      this.clearData();
      if(this.form.code ==null || this.form.code=='') {
        this.errorText = "Code required!";
        this.error.code = "Code required!";
        return
      }
      this.isLoading = true;
      const response = await this.callApi("post", "checkCode", this.form);
      if (response.status == 200) {
        this.s("Set a new password now");
        this.form2.email = response.data.email
        this.reset1 = false;
        this.reset2 = false;
        this.reset3 = true;

        //window.location = "/";
        // location.reload()
      } else if (response.status == 401) {
        // this.wrongMsg = response.data.message
        this.error.code = response.data.message
         this.errorText = response.data.message
        // this.e(response.data.message);
      } else this.swr();

      this.isLoading = false;
    },
    async change_pasword() {
      this.clearData();
      if(this.form2.password ==null) {
        this.errorText = "Password required!";
        this.error.r2password = "Password required!";
        return
      }
      else if(this.form2.password != this.passwordcheck) {
        this.errorText = "Password Does Not Match!";
        this.error.rpassword = "Password Does Not Match!";
        return
      }

      this.isLoading = true;
      const response = await this.callApi("post", "changePassword", this.form2);
      if (response.status == 200) {
        this.s("A new password is set");
        this.$router.push(`/login`)
      } else if (response.status == 401) {
        this.error.rpassword = response.data.message
        // this.wrongMsg = response.data.message
        // this.e(response.data.message);
      } else this.swr();

      this.isLoading = false;
    },

    clearData() {
      (this.error = {
        email: '',
        password: '',
        rpassword: '',
        r2password: '',
        code: '',
      }),
        (this.errorText = "");
    },
  },
  created() {},
};
</script>
<style scoped>
.btn-disabled {
  background: #a9cdeb;
  border-color: #a9cdeb;
  cursor: not-allowed;
}
</style>
