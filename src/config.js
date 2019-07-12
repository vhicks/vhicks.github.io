let config;

// Your web app's Firebase configuration
// var firebaseConfig = {
//     apiKey: "AIzaSyCXBROFDhoIemi117X-8WXHkUspMgxu18U",
//     authDomain: "parogray.firebaseapp.com",
//     databaseURL: "https://parogray.firebaseio.com",
//     projectId: "parogray",
//     storageBucket: "gs://parogray.appspot.com/",
//     messagingSenderId: "10507925932",
//     appId: "1:10507925932:web:60d09691c65907fa"
//   };
  // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
  
  // Get a reference to the storage service, which is used to create references in your storage bucket
  // var storage = firebase.storage();

  // https://stackoverflow.com/questions/53057546/how-to-import-a-config-file-into-vue-jsvuex
if (process.env.NODE_ENV === "production") {
  config = {
    apiKey: "AIzaSyCXBROFDhoIemi117X-8WXHkUspMgxu18U",
    authDomain: "parogray.firebaseapp.com",
    databaseURL: "https://parogray.firebaseio.com",
    projectId: "parogray",
    storageBucket: "gs://parogray.appspot.com/",
    messagingSenderId: "10507925932",
    appId: "1:10507925932:web:60d09691c65907fa"
  };
} else {
  config = {
    apiKey: "AIzaSyCXBROFDhoIemi117X-8WXHkUspMgxu18U",
    authDomain: "parogray.firebaseapp.com",
    databaseURL: "https://parogray.firebaseio.com",
    projectId: "parogray",
    storageBucket: "gs://parogray.appspot.com/",
    messagingSenderId: "10507925932",
    appId: "1:10507925932:web:60d09691c65907fa"
  };
}

export default { config }