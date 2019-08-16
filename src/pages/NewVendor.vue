<template>
    <div>
        <div class="section section-contact-us text-center">
            <div class="container">
                <h2 class="title">Want to work with us?</h2>
                <p class="description">We would love to discuss boosting your retention and delivery efficiency.</p>
                <div class="row">
                <div class="col-lg-6 text-center ml-auto mr-auto col-md-8">
                    <fg-input
                    class="input-lg"
                    placeholder="Company"
                    v-model="form.company"
                    addon-left-icon="now-ui-icons shopping_shop"
                    >
                    </fg-input>
                    <fg-input
                    class="input-lg"
                    placeholder="Your Name..."
                    v-model="form.employeeName"
                    addon-left-icon="now-ui-icons users_circle-08"
                    >
                    </fg-input>
                    <fg-input
                    class="input-lg"
                    placeholder="Email Here..."
                    v-model="form.email"
                    addon-left-icon="now-ui-icons ui-1_email-85"
                    >
                    </fg-input>
                    <div class="textarea-container">
                    <textarea
                        class="form-control"
                        name="name"
                        rows="4"
                        cols="80"
                        v-model="form.message"
                        placeholder="Type a message..."
                    ></textarea>
                    </div>
                    <div class="send-button">
                    <n-button type="primary" round block size="lg"
                        >Send Message</n-button
                    >
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div class="section section-vendor-login text-center">
            <div class="container">
                <h2 class="title">Existing Partners</h2>
                 <h6>
                <router-link to="/landing" class="link">Portal Login</router-link>
                </h6>
            </div>
        </div>
    </div>
</template>
<script>
    import { Button, FormGroupInput } from '@/components';
    import MainFooter from '@/layout/MainFooter';  
    export default {
        name: 'newvendor',
        bodyClass: 'newvendor-page',
        components: {
            MainFooter,
            [Button.name]: Button,
            [FormGroupInput.name]: FormGroupInput
        },
        data() {
            return {
                error: '',
                form: {
                    company: '',
                    employeeName: '',
                    email: '',
                    message: ''
                }
            };
        }
    }
</script>
<style>

</style>
