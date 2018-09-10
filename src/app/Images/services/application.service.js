
const imageDataService = require('../services/data.service');
const Image = require('../class/image');
/** @ngInject */
function imageApplService(imageDataService, $log, $q) {
    let imageList = [];
    function _init() {
        var p = $q.defer();
         imageDataService.getImageList().then(function (response) {
            // $log.log(response);
            Object.values(response).map(function(item, index) {
                item.then(function(res) {
                    return new Image(res);
                }).then(function(data){
                    imageList.push(data);
                    if(index === response.length - 1)
                        p.resolve(imageList);
                });
            });
        });
        return p.promise;
    }
    return {
        init: _init
    }
} 

module.exports = imageApplService;