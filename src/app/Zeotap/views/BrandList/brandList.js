// @ts-check
const BrandService = require('../../services/application.service');

/** @ngInject */
function brandList(BrandService, $log, $filter) {
    var vm = this;
    vm.showListHeader = false;
    vm.showListBody = false;
    BrandService.init().then(function(res) {
        vm.brandList = res;
        vm.advertiserList = getAdvertiserList();
        vm.showListHeader = true;
    });

    vm.updateBrandList = function(selection){
        vm.selection = selection;
        vm.filteredList = applyFilters(selection);
        vm.showListBody = true;
    }
    function getAdvertiserList() {
        let list = [];
        vm.brandList.map(function(brand) {
            if(list.indexOf(brand.advertiser_name)<0)
                list.push(brand.advertiser_name);
        });
        return list;
    }
    function applyFilters(selection) {
        let filterConditions = {
            advertiser_name: selection.advertiser
        }
        let filteredList = $filter('filter')(vm.brandList, filterConditions);
        filteredList = $filter('dateFilter')(filteredList, selection.timeline);
        return filteredList;
    }

    
}

module.exports = {
    // @ts-ignore
    template: require('./brandList.html'),
    controller: brandList
};