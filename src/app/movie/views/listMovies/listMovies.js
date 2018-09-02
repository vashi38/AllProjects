// @ts-check
const movieService = require('../../services/application.service');
/** @ngInject */
function listMovies(movieService, $log, $scope, $filter) {
    var vm = this;

    vm.page = {
        from: 0,
        to: 5,
        perPg: 5,
        total: 0,
        total_pgs: 0,
        page_no: 0

    };
    vm.perPg = vm.page.perPg;
    vm.showGenreList = false;
    vm.sortBy = { show: '', val: false, text: '' };
    vm.showNav = false;
    function reset_page_navigation() {
        vm.page.total_pgs = Math.ceil(vm.page.total / vm.page.perPg);
        vm.page.page_no = Math.ceil(vm.page.from / vm.page.perPg) + 1;
    }
    movieService.init().then(function (movieList) {
        vm.movieList = movieList;
        vm.page.total = movieList.length;
        vm.showNav = true;
        reset_page_navigation();
        cal_genres();
    });

    vm.next = function () {
        if (vm.page.from === Math.floor(vm.page.total / vm.page.perPg) * vm.page.perPg)
            vm.page.from = 0;
        else
            vm.page.from = vm.page.from + vm.page.perPg;
        vm.page.to = vm.page.from + vm.page.perPg;
        reset_page_navigation();

    }
    vm.back = function () {
        if (vm.page.from <= 0)
            vm.page.from = Math.floor(vm.page.total / vm.page.perPg) * vm.page.perPg;
        else
            vm.page.from = vm.page.from - vm.page.perPg;
        vm.page.to = vm.page.from + vm.page.perPg;
        reset_page_navigation();

    }
    vm.updatePerPg = function () {
        $log.log(vm.perPg);
        vm.page.perPg = vm.perPg;
        vm.page.from = 0;
        vm.page.to = vm.page.from + vm.page.perPg;

        reset_page_navigation();

    }
    function cal_genres() {
        var list = [];
        for (let i = 0; i < vm.movieList.length; i++) {
            for (let j = 0; j < vm.movieList[i].genres.length; j++) {
                if(list.indexOf(vm.movieList[i].genres[j])<0)
                    list.push(vm.movieList[i].genres[j])
            }
        }
        vm.genres_list = list;
        // $log.log(list);
    }

    $scope.$watch('$ctrl.checkedGenre', function(newValue, oldValue) {
        if(newValue !== undefined)
            vm.update_navigator();
    })
   vm.update_navigator = function() {
        var list = $filter('orderBy')(vm.movieList, vm.sortBy.text ,vm.sortBy.val);
        list = $filter('filter')(list, vm.searchText);
        vm.page.total  = $filter('genreFilter')(list, vm.checkedGenre).length;
        vm.page.from = 0;
        vm.page.to = vm.page.from + vm.page.perPg;
        reset_page_navigation();
        $log.log(vm.page);
    }


}

module.exports = {
    // @ts-ignore
    template: require('./listMovies.html'),
    controller: listMovies
};