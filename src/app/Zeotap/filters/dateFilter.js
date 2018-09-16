/** @ngInject */

function dateFilter($log) {
    return function (input_item, timeline) { 
        // $log.log(item);
        var item = angular.copy(input_item);
        if(item === undefined || timeline === null ||item.length == 0)
            return item;
            // $log.log(timeline.from);
        return Object.values(item).map(function(item) {
            item.campaigns = Object.values(item.campaigns).filter(function(campaign) {
                if(campaign.get_start_date() >= timeline.from)
                    return true;
                else
                    return false;
            })
            return item;
        })
    }
}

module.exports = dateFilter;