<template>
  <div class="scan-page">
    <div class="section text-center">
      <h3>Create your next awesome website</h3>
    </div>
    <div class="container">
        <video id="preview"></video>
    </div>
  </div>
</template>
<script>
export default {
  name: 'scan',
  methods: {
        callAjax(url, callback){
            var xmlhttp;
            // compatible with IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function(){
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
                    callback(xmlhttp.responseText);
                }
            }
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
        }
    },
  mounted() {
        this.callAjax('https://rawgit.com/schmich/instascan-builds/master/instascan.min.js', function() {
            let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
            scanner.addListener('scan', function (content) {
                console.log(content);
            });
            Instascan.Camera.getCameras().then(function (cameras) {
                if (cameras.length > 0) {
                scanner.start(cameras[0]);
                } else {
                console.error('No cameras found.');
                }
            }).catch(function (e) {
                console.error(e);
            });
        });
    }
};
</script>
<style>
.scan-page {
  min-height: calc(100vh - 95px);
}
</style>