/** @ngInject */
function myDataService($http, $log) {
    const URL = './movieslisting.json';
    function _getMovieList() {
        return $http({
            method: 'GET',
            url: URL
        });
    }

    return {
        getMovieList: _getMovieList
    };
};

module.exports = myDataService;