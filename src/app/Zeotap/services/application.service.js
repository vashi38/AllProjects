
const myDataService = require('../services/data.service');
const Brand = require('../classes/Brand');

/** @ngInject */
function BrandService(myDataService, $log) {
    function _init() {
        return myDataService.getBrandList().then(function (response) {
            let brandList = Object.values(response).map(function(brand) {
                return new Brand(brand);
            })
            return brandList;
        });
    }
    return {
        init: _init
    }
} 

module.exports = BrandService;