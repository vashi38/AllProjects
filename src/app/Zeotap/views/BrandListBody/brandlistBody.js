// @ts-check
const TableData = require('../../classes/TableData');
/** @ngInject */
function brandlistBody( $log, $scope) {
    var vm = this;
    vm.sortBy = {
        value:'',
        dir: false
    }
    vm.showTable = false;
    $scope.$watch('$ctrl.filteredbrands', function(newValue, oldValue) {
        if(vm.selectedfilter && vm.selectedfilter.advertiser != ''){
            vm.tableDataList = createTableData(newValue);
            vm.showTable = true;
        }
    });
       
    function createTableData(list) {
        // @ts-ignore
        let tableList = Object.values(list).map(function(item) {
            return new TableData(item);
        })
        return tableList;
    }
    vm.updateSortBy = function(name) {
        vm.sortBy.value = name;
        if(vm.sortBy.dir)
            vm.sortBy.dir = false;
        else
            vm.sortBy.dir = true;
    }
}

module.exports = {
    // @ts-ignore
    template: require('./brandlistBody.html'),
    controller: brandlistBody,
    bindings:{
        selectedfilter: "=",
        filteredbrands: "="
    }
};