<template>
    <div class="main">
        <div class="content">
            <div class="section section-info text-center" style="margin-top:60px;">
                <div class="container">
                    <h3 class="card-title title-up">Access your favorite products</h3>
                    <p class="description" style="color:black;">Sign up for free</p>
                    <div class="row">
                    <div class="col-lg-6 text-center ml-auto mr-auto col-md-8">
                        <fg-input
                        class="input-lg"
                        placeholder="First Name..."
                        v-model="form.firstName"
                        addon-left-icon="now-ui-icons text_align-left"
                        >
                        </fg-input>
                        <fg-input
                        class="input-lg"
                        placeholder="Last Name..."
                        v-model="form.lastName"
                        addon-left-icon="now-ui-icons text_align-left"
                        >
                        </fg-input>
                        <fg-input
                        class="input-lg"
                        placeholder="Email Here..."
                        v-model="form.email"
                        addon-left-icon="now-ui-icons ui-1_email-85"
                        >
                        </fg-input>
                        <fg-input
                        class="input-lg"
                        placeholder="Create Password"
                        v-model="form.password"
                        type="password"
                        addon-left-icon="now-ui-icons ui-1_lock-circle-open"
                        >
                        </fg-input>
                    </div>
                    </div>
                </div>
                <div class="arrow bounce">
              <a class="fa fa-arrow-down fa-2x" href="#example"></a>
            </div>
            </div>
            <parallax
              class="page-header-image"
            > <img src="img/croppedShop.jpg"/>
            </parallax>
            <payment-form></payment-form>
            <div id="example"></div>
            <div class="message is-danger text-center" v-if="error">
              <div class="message-body">{{ error }}</div>
            </div>
            <div class="send-button text-center col-8 margin-zero">
              <n-button @click="signUp" type="primary" round block size="lg">Create Account</n-button>
            </div>
        </div>
  </div>
</template>
<script>
import database from '@/services/database'
import { Button, FormGroupInput } from '@/components';
import PaymentForm from './components/PaymentForm';
import MainFooter from '@/layout/MainFooter';
export default {
  name: 'signup',
  bodyClass: 'signup-page',
  components: {
    MainFooter,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    PaymentForm
  },
  data() {
    return {
      error: '',
      form: {
        firstName: '',
        email: '',
        lastName: '',
        password:''
      }
    };
  },
  methods: {
    async signUp () {
        let result = await database.signUp(this.form.email, this.form.password)

        if(result.message){
          this.error = result.message
        } else {
          console.log('User is created!')
        }
    }
  }
};
</script>
<style>

</style>

