import store from '@/store'
import firebase from 'firebase'
import { async } from 'q';

 var config = {
    apiKey: "AIzaSyCXBROFDhoIemi117X-8WXHkUspMgxu18U",
    authDomain: "parogray.firebaseapp.com",
    databaseURL: "https://parogray.firebaseio.com",
    projectId: "parogray",
    storageBucket: "gs://parogray.appspot.com/",
    messagingSenderId: "10507925932",
    appId: "1:10507925932:web:60d09691c65907fa"
 }

 const database = firebase.initializeApp(config)

 database.setCurrentProduct = async (productId) => {
    try {
        const dbRefProduct = firebase.database().ref().child('product');
        const productRef = dbRefProduct.child(productId);

        store.commit('setCurrentProduct', productRef);
        try {
            productRef.on('value', function(snap) {
                store.commit('setCurrentProdValue', snap.val())
            })

            return true
        } catch (error) {
            store.commit('setCurrentProdValue', null)
            return error
        }
        
    } catch (error) {
        return error
    }
 }

 database.getVendor = async () => {
    
    if(store.state.currentProdValue) {
        const vendorId = store.state.currentProdValue.vendor
        const dbRefVendor = firebase.database().ref().child('vendor');
        const vendorRef = dbRefVendor.child(vendorId);
        try {
            vendorRef.on('value', function(snap) {
                store.commit('setCurrentVendor', snap.val())
            })

            return true
        } catch (error) {
            store.commit('setCurrentVendor', null)
            return error
        }
    } else {
        store.commit('setCurrentVendor', null)
    }
 }

 database.clearCurrentProduct = async() => {
    store.commit('setCurrentProduct', null)
    store.commit('setCurrentProdValue', null)
    store.commit('setCurrentVendor', null)
 }

 database.signUp = async (email, password) => {
     try {
         await firebase.auth().createUserWithEmailAndPassword(email,password)

         store.commit('setCurrentUser', firebase.auth().currentUser)

         return true
     } catch (error) {
         return error
     }
 }

 database.signIn = async (email, password) => {
    try {
        await firebase.auth().signInWithEmailAndPassword(email,password)

        store.commit('setCurrentUser', firebase.auth().currentUser)

        return true
    } catch (error) {
        return error
    }
 }

 database.signOut = async () => {
    try {
        await firebase.auth().signOut()

        store.commit('setCurrentUser', null)

        return true
    } catch (error) {
        return error
    }
 }

 export default database