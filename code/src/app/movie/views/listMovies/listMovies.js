// @ts-check
const movieService = require('../../services/application.service');
/** @ngInject */
function listMovies (movieService, $log, $filter) {
    var vm = this;
    
    vm.page = {
        from: 0,
        to: 5,
        perPg: 5,
        total:0,
        total_pgs: 0 ,
        page_no:0,
        list:[]
    };
    vm.perPg = vm.page.perPg;
    vm.sortBy = '';
    function reset_page_navigation() {
        vm.page.total_pgs = Math.ceil(vm.page.total/vm.page.perPg);
        vm.page.page_no = Math.ceil(vm.page.from/vm.page.perPg) +1;
    }
    movieService.init().then(function(movieList) {
        $log.log(movieList);
        vm.movieList = movieList;
        vm.backup = movieList;
        vm.page.list = vm.movieList.slice(vm.page.from, vm.page.to);
        vm.page.total = movieList.length;
        reset_page_navigation();
        
        $log.log(vm.page);
    });

    vm.next = function () {
        if(vm.page.from === Math.floor(vm.page.total/vm.page.perPg)*vm.page.perPg)
            vm.page.from = 0;
        else
            vm.page.from = vm.page.from + vm.page.perPg;
        vm.page.to = vm.page.from + vm.page.perPg;
        vm.page.list = vm.movieList.slice(vm.page.from, vm.page.to);
        reset_page_navigation();
        $log.log(vm.page);
        
    }
    vm.back = function() {
        if(vm.page.from <= 0)
            vm.page.from = Math.floor(vm.page.total/vm.page.perPg)*vm.page.perPg;
        else
            vm.page.from = vm.page.from - vm.page.perPg;
        vm.page.to = vm.page.from + vm.page.perPg;
        vm.page.list = vm.movieList.slice(vm.page.from, vm.page.to);
        reset_page_navigation();
        $log.log(vm.page);
        
    }
    vm.updatePerPg = function() {
        $log.log(vm.perPg);
        vm.page.perPg = vm.perPg;
        vm.page.from = 0;
        vm.page.to = vm.page.from + vm.page.perPg;
        vm.page.list = vm.movieList.slice(vm.page.from, vm.page.to);
        reset_page_navigation();
        $log.log(vm.page)
        
    }
    vm.filterList = function() {
        if(vm.searchText !== '')
            vm.movieList = $filter('filter')(vm.backup, vm.searchText);
        else
            vm.movieList = vm.backup;
        vm.page.from = 0;
        vm.page.to = vm.page.from + vm.page.perPg;
        vm.page.list = vm.movieList.slice(vm.page.from, vm.page.to);
        vm.page.total = vm.movieList.length;
        reset_page_navigation();
    }
    vm.sortAction = function () {
        if(vm.sortBy === 'ASC')
            vm.movieList = $filter('orderBy')(vm.backup, 'name');
        else if(vm.sortBy === 'DESC')  
            vm.movieList = $filter('orderBy')(vm.backup, 'name', true);
        else    
            vm.movieList = vm.backup;
        vm.page.from = 0;
        vm.page.to = vm.page.from + vm.page.perPg;
        vm.page.list = vm.movieList.slice(vm.page.from, vm.page.to);
        reset_page_navigation();
    }
}

module.exports = {
    template: require('./listMovies.html'),
    controller: listMovies
  };