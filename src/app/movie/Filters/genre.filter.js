/** @ngInject */

function genreFilter($log){
    return function(list, selectedGenre) {
        // $log.log(list );
       
        if(selectedGenre === undefined || selectedGenre.length == 0){
            // $log.log(selectedGenre);
            return list;
        }
        
        return Object.values(list).filter(function(item) {
            var found = false;
            for (let i = 0; i < selectedGenre.length; i++) {
                if(item.genres.indexOf(selectedGenre[i]) >= 0){
                    found = true;
                    break;
                }
            }
            return found;
        })
    }
}

module.exports = genreFilter;