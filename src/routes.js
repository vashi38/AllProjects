export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/zeotapApp');

  $stateProvider
    .state('MovieApp', {
      url: '/MovieApp',
      component: 'movieApp'
    })
    .state('ImageApp', {
      url: '/ImageApp',
      component: 'showImages'
    })
    .state('homeAutoApp', {
      url: '/homeAutoApp',
      component: 'homeAutoApp'
    })
    .state('zeotapApp', {
      url: '/zeotapApp',
      component: 'zeotapApp'
    })
    
    ;
}
