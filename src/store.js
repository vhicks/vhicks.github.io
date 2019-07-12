import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        currentUser: null,
        currentProduct: null,
        currentProdValue: null,
        currentVendor: null
    },
    mutations:{
        setCurrentUser (state, payload) {
            state.currentUser = payload
        },
        setCurrentProduct (state, payload) {
            state.currentProduct = payload
        },
        setCurrentProdValue (state, payload) {
            state.currentProdValue = payload
        },
        setCurrentVendor (state, payload) {
            state.currentVendor = payload
        },
    },
    actions:{

    }
})
