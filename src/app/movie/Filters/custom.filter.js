/** @ngInject */

function createPG($log) {
    return function (item, from, to) { 
        if(item === undefined || item.length == 0)
            return item;
        var id = 0; 
        var list = Object.values(item).map(function(i) {
            i.id = id++;
            return i;
        })
        return Object.values(list).filter(function(item) {
           
            if(item.id >= from && item.id < to){
                // $log.log(item);
                return true;
            }
            return false;
        })
    }
}

module.exports = createPG;