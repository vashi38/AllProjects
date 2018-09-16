/** @ngInject */
function myDataService($http, $log) {
    const URL = './app/Zeotap/response.json';
    function _getBrandList() {
        return $http({
            method: 'GET',
            url: URL,
            "Accept":"application/json",
            crossDomain : true,
            "Access-Control-Allow-Origin:": "*",
            "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
            "Access-Control-Allow-Headers": "X-ACCESS_TOKEN, Access-Control-Allow-Origin, Authorization, Origin, x-requested-with, Content-Type, Content-Range, Content-Disposition, Content-Description"
        }).then(function(response) {
            return response.data;
        });
    }

    return {
        getBrandList: _getBrandList
    };
};

module.exports = myDataService;