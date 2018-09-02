
const myDataService = require('../services/data.service');
const Movie = require('../class/Movie');
/** @ngInject */
function movieService(myDataService, $log) {
    function _init() {
        return myDataService.getMovieList().then(function (response) {
            $log.log(response);
            let movieList = Object.values(response.data).map(function(ele) {
                return new Movie(ele);
            });            
            return movieList;
        }).then(function (data) {
            $log.log(data);
            return data;
        })
    }
    return {
        init: _init
    }
} 

module.exports = movieService;