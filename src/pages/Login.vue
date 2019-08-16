<template>
  <div class="page-header clear-filter" filter-color="white">
    <div
      class="page-header-image"
    ></div>
    <div class="content" style="min-height: 100vh; margin-bottom:-63px;">
      <div class="container">
        <div class="col-md-5 ml-auto mr-auto">
          <div class="card card-plain card-login">
            <div class="card-header">
              <div class="logo-container">
                <img v-lazy="'img/parrolink.png'" alt="" />
              </div>
            </div>
            <div class="card-body">
              <div class="form-group no-border input-lg form-control input-group">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <i class="input-group-text now-ui-icons ui-1_email-85"></i>
                  </div>
                  <input @blur="form.email = $event.target.value" aria-describedby="addon-right addon-left" placeholder="email" type="email" class="form-control">
                </div>
              </div>
              <div class="form-group no-border input-lg form-control input-group">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <i class="input-group-text now-ui-icons ui-1_lock-circle-open"></i>
                  </div>
                  <input @blur="form.password = $event.target.value"  aria-describedby="addon-right addon-left" placeholder="password" type="password" class="form-control">
                </div>
              </div>
            </div>
            <div class="card-footer text-center">
              <div class="message is-danger text-center" v-if="error">
                <div class="message-body">{{ error }}</div>
              </div>
              <button
                class="btn btn-primary btn-round btn-lg btn-block"
                @click="login"
                >Login</button
              >
            </div>
            <div class="pull-left">
              <h6>
                <router-link to="/signup" class="link footer-link" >Create Account</router-link>
              </h6>
            </div>
            <div class="pull-right">
              <h6>
                <router-link to="/landing" class="link footer-link" >More Info</router-link>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    <main-footer></main-footer>
  </div>
</template>
<script>
import database from '@/services/database';
import { Card, Button, FormGroupInput } from '@/components';
import MainFooter from '@/layout/MainFooter';
export default {
  name: 'login-page',
  bodyClass: 'login-page',
  props:['email','password'],
  components: {
    Card,
    MainFooter,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  data() {
    return {
      error: '',
      form: {
        email: '',
        password:''
      }
    };
  },
  methods: {
    async login () {
        let result = await database.signIn(this.form.email, this.form.password)

        if(result.message){
          this.error = result.message
        } else {
          console.log('User has logged in!')
          this.$router.push('/product')
        }
    }
  }
};
</script>
<style></style>
