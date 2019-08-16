<template>
  <div
    class="section section-signup"
    style="min-height: 700px;"
  >
    <div class="container">
        <tabs type="default" tabContentClasses="tab-subcategories col-10 margin-zero"
        square centered class="row">
            <tab-pane>
            <span slot="label">
            <i class="now-ui-icons business_money-coins"></i>Bank
            </span>
             <div class="col-md-6 text-center ml-auto mr-auto col-md-8">
                <fg-input
                class="no-border dark-background"
                placeholder="Name on Account"
                >
                </fg-input>

                <fg-input
                class="no-border dark-background"
                placeholder="Bank Routing Number"
                >
                </fg-input>

                <fg-input
                class="no-border dark-background"
                placeholder="Checking Account Number"
                >
                </fg-input>

                <fg-input
                class="no-border dark-background"
                placeholder="Re-enter Account Number"
                >
                </fg-input>
             </div>
            </tab-pane>
            <tab-pane>
            <span slot="label">
            <i class="now-ui-icons shopping_credit-card"></i>Credit
            </span>
            <div class="col-md-6 text-center ml-auto mr-auto col-md-8">
                <fg-input
                class="no-border dark-background"
                placeholder="Name on card"
                >
                </fg-input>

                <fg-input
                class="no-border dark-background"
                placeholder="Card number"
                >
                </fg-input>

                <fg-input
                class="no-border dark-background"
                placeholder="Expiration"
                >
                </fg-input>
             </div>
            </tab-pane>
        </tabs>
    </div>
  </div>
</template>
<script>
import { Button, Card, DropDown, FormGroupInput, Tabs, TabPane } from '@/components';

export default {
    data() {
      return {
        tabText: {
          p11: "...",
          p12: "...",
          p21: "...",
          p22: "...",
        }
      }
    },
  components: {
    Card,
    DropDown,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    Tabs,
    TabPane
  }
};
</script>
<style></style>
