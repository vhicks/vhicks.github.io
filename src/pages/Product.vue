<template>
  <div>
    <div class="page-header clear-filter" filter-color="white">
      <parallax
        class="page-header-image"
      >
      </parallax>
      <div class="container">
        <div class="photo-container">
          <img v-bind:src="currentProductValue.image" alt="" />
        </div>
        <h3 class="title">{{ currentProductValue.name }}</h3>
        <p class="category">{{ currentVendor.name }}</p>
        <div class="content">
          <slider v-model="sliders.simple"> </slider>
          <div class="social-description">
            <h2>{{sliders.simple}}</h2>
            <p>Quantity</p>
          </div>
          <div class="social-description">
            <h2>${{ currentProductValue.price }}</h2>
            <p>Price</p>
          </div>
        </div>
      </div>
      <div class="container">
      <div class="button-container">
        <a href="#button" class="btn btn-primary btn-round btn-lg">Order</a>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
import { Tabs, TabPane, Slider } from '@/components';
import database from '@/services/database'
export default {
  name: 'product',
  bodyClass: 'product-page',
  components: {
    Tabs,
    TabPane,
    slider: Slider
  },
  data() {
    return {
      prodObj: {},
      vendorObj: {},
      sliders: {
        simple: 1
      }
    };
  },
  computed: {
    currentProduct() {
      return this.$store.state.currentProduct || ''
    },
    currentProductValue() {
      return this.$store.state.currentProdValue || ''
    },
    currentVendor() {
      return this.$store.state.currentVendor || ''
    },
    productLoaded() {
      var loaded = this.$store.state.currentProdValue ? true : false
      return loaded
    }
  },
  methods: {
    getProductId() {
      var GET = {};
      var query = window.location.href.substring(1).split("?");
      var keyId = "psittacuserithacus";
      for (var i = 0, max = query.length; i < max; i++)
      {
          if (query[i] === "") // check for trailing & with no param
              continue;

          var param = query[i].split("=");
          GET[decodeURIComponent(param[0])] = decodeURIComponent(param[1] || "");
      }
      return GET[keyId];
    },
    async getProduct() {
      const productId = this.getProductId();
      //TODO if product id does not exist error page
      if(productId) {
        await database.setCurrentProduct(productId)
      }
    },
    async getVendor() {
      await database.getVendor()
    },
    async clearProduct() {
      await database.clearCurrentProduct()
    }
  },
  created: function() {
    this.getProduct()
    this.getVendor()
    console.log('product loaded on created')
    console.log(this.productLoaded)
  },
  destroyed: function() {
    this.clearProduct()
    console.log('product loaded on destroy')
    console.log(this.productLoaded)

  }
};

</script>
<style></style>
