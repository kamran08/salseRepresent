<template>
    <div>
        <div class="_login">
            <div class="_login_left">
                <div class="_login_overlay"></div>

                <div class="authentic_nav_logo">
                    <a href="" class="authentic_nav_logo_a">
                       <img src="/img/homboltwhite.png" alt="" title="" style="width: 50%;" > 
                        <!-- <img src="/img/main-logo.png" alt="" title="" class="_navbar_logo_img"> 
                        <img src="/img/header.png" alt="" title="" class="_navbar_logo_img_text"> -->
                    </a>
                </div>

                <p class="_login_left_text">Advanced Technology For Less!</p>

                  <a href="https://hombolttech.com" target="_blank" rel="noopener noreferrer"><Button type="primary">Learn More</Button></a>
                
            </div>

            <div class="_login_right">
                <div class="_login_main">
                    <div class="_login_top _1border_color">
                        <p class="_login_top_text">AGENT LOGIN</p>
                    </div>

                    <div class="_login_form">
                       <Alert closable v-if="errorMsg !=''" type="error">{{errorMsg}}</Alert>
                        <Form >
                            <FormItem :error="error.email">
                                <Input  size="large" type="text" v-model="formInline.email" placeholder="Email">
                                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                                </Input>
                            </FormItem>
                            <FormItem :error="error.password">
                                <Input size="large" type="password" v-model="formInline.password" placeholder="Password">
                                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                                </Input>
                            </FormItem>
                                <p class="_forget">
                                  <nuxt-link class="_1link" to="/forgetpassword">Forget Password?</nuxt-link>
                                </p>
                            <FormItem>
                                <Button class="_log_btn" :disabled="isLoading" :loading="isLoading" @click="submit_login">
                                  <span v-if="!isLoading">Sign in</span>
                                  <span v-else>Please wait...</span>
                                  
                                </Button>
                            </FormItem>
                        </Form>
                    </div>

                    <!-- <div class="_login_bottom">
                        <p class="_login_do">
                          Don't have Account?  <nuxt-link  class="_3link _mar_l5" to="/registration">Create account</nuxt-link></p>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  middleware: "guest",
  data(){
    return{
      formInline: {
        email: "",
        password: "",
      },
      error: {
        email: '',
        password: '',
      },
      errorMsg:'',
      isLoading: false,
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
    }
  },

  methods:{
    async submit_login() {
      this.clearData();
      let flag = false;
      if (this.formInline.email.trim() == "") {
        this.error.email = "Email can not be empty!";
        flag = true;
      }

      if (!this.reg.test(this.formInline.email)) {
        this.error.email = "Email format is invalid!";
        flag = true;
      }
      if (this.formInline.password.toString() == "") {
        this.error.password = "Password can not be empty!";
        flag = true;
      }
      if(flag) return;
      this.isLoading = true;
      const response = await this.callApi("post","/sales/login",this.formInline);
      if (response.status == 200) {
        this.s("You're successfully Logged in");
        window.location = "/";
      } else if (response.status == 401) {
        this.errorMsg = response.data.message
        // this.e(response.data.message);
      } else if (response.status == 403) {
        await this.callApi('get','/logout')
        this.errorMsg = 'Please try again!';
      } else this.swr();

      this.isLoading = false;
    },
    clearData() {
      this.error = {
        email: '',
        password: '',
      }
      this.errorMsg = '';
        
    },
  }
}
</script>