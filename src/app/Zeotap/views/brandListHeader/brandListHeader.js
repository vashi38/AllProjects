// @ts-check
/** @ngInject */
function brandlistHeader( $log, $timeout, $filter) {
    var vm = this;
    let selection = {
        advertiser: '',
        timeline: null
    }
    vm.timelineList = [
        {
        value: "Today",
        from: new Date()
    },
    {
        value: "last 7 days",
        from: get_date(-7)
    },
    {
        value: "last quarter",
        from: get_start_of_quarter()
    },
    {
        value: "last month",
        from: get_last_month()
    },
    {
        value: "last year",
        from: get_last_year()
    }]
    
    function get_date(val) {
        var d = new Date();
        d.setDate(d.getDate() - val);
        return d;
    }
    function get_start_of_quarter() {
        var d = new Date();
        var quarterMonth = (Math.floor((d.getMonth()-1)/3)*3)+1;
        d.setDate(1);
        d.setMonth(quarterMonth-1);
        return d;
    }
    function get_last_month() {
        var d = new Date;
        d.setDate(1);
        d.setMonth(d.getMonth()-1);
        return d;
    }
    function get_last_year() {
        var d = new Date;
        d.setDate(1);
        d.setFullYear(d.getFullYear()-1);
        d.setMonth(0);
        return d;
    }
    
    vm.update_advertiserList = function() {
        let advertiserList = vm.list;
        // vm.advertiserList = advertiserList.filter(function (advertiser) {
        //     if(advertiser.indexOf(vm.advertiserSerach)<0)
        //         return false;
        //     else    
        //         return true;
        // })
        vm.advertiserList = $filter('filter')(advertiserList, vm.advertiserSerach);
        vm.isAdvertiserSearchFocused = true;
    }
    vm.onBlurAdvertiserSearch = function(event) {
        $timeout(function() {
            vm.isAdvertiserSearchFocused = false;
        }, 100);
        
    }
    vm.selectAdvertiser = function(advertiser) {
        vm.advertiserSerach = advertiser;
        vm.isAdvertiserSearchFocused = false;
        selection.advertiser = advertiser;
        vm.callback(selection);
    }
    vm.update_timeline = function () {
        selection.timeline = vm.timeline;
        vm.callback(selection);
    }
}

module.exports = {
    // @ts-ignore
    template: require('./brandListHeader.html'),
    controller: brandlistHeader,
    bindings:{
        list: "=",
        callback: "<"
    }
};