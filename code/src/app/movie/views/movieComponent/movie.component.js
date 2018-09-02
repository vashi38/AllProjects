// @ts-check
/** @ngInject */
function movieComponent ($log) {
    $log.log(this.movie);
}

module.exports = {
    template: require('./moviecomponent.html'),
    controller: movieComponent,
    bindings: {
        movie: "="
    }
  };