import Vue from 'vue';
import App from './App.vue';
// You can change this import to `import router from './starterRouter'` to quickly start development from a blank layout.
import router from './router';
import store from './store';
import NowUiKit from './plugins/now-ui-kit';
import firebase from 'firebase'

Vue.config.productionTip = false;
// console.log(config);
// firebase.initializeApp(config);
// const auth = firebase.auth();
// const db = firebase.firestore();
// const settings = { /* your settings... */ timestampsInSnapshots: true };
// db.settings(settings);

Vue.use(NowUiKit);

let app
const initialize = () => {
  if(!app) {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app');
  }
}


firebase.auth().onAuthStateChanged(user => {
  if(user) {
    store.commit('setCurrentUser', user)
  } else {
    store.commit('setCurrentUser', null)
  }

  initialize()
})