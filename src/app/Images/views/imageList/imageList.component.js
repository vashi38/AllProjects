// @ts-check
const imageApplService = require('../../services/application.service');
/** @ngInject */
function imageListComponentCtrl( imageApplService, $window) {
    var vm = this;
    console.log('Welcome Shivannad');
    function getImages() {
        imageApplService.init().then(function(response) {
            // console.log(response);
            vm.imageList = response;
        });    
    }
    
    $window.onscroll = function(ev) {
		if (($window.innerHeight + $window.scrollY) >= document.body.scrollHeight) {
		//    console.log("Yes");
		   getImages();
        }
    }

    getImages();
}

module.exports = {
    // @ts-ignore
    template: require('./imageList.html'),
    controller: imageListComponentCtrl
};