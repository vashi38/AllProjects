/** @ngInject */
function myDataService($http, $log) {
    const URL = 'http://starlord.hackerearth.com/movieslisting';
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