// @ts-check
/** @ngInject */
function imageComponentCtrl( $log, $scope, $filter) {
    var vm = this;
    $log.log(this.image);
    vm.showBigImg = function (item) {
        // $log.log('in show big image fun');
        item.showBigImg =true;
        item.style = {
            'opacity': 1
        };
    }
}

module.exports = {
    // @ts-ignore
    template: require('./image_component.html'),
    controller: imageComponentCtrl,
    bindings: {
        image: "="
    }
};