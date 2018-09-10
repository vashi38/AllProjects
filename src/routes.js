export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/MovieApp');

  $stateProvider
    .state('MovieApp', {
      url: '/MovieApp',
      component: 'movieApp'
    })
    .state('ImageApp', {
      url: '/ImageApp',
      component: 'showImages'
    });
}
