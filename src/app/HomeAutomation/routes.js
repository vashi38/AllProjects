module.exports = routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/AllRooms');

  $stateProvider
    .state('homeAutoApp.AllRooms', {
      url: '/AllRooms',
      component: 'allRooms'
    })
    .state('homeAutoApp.AllSwitchBoards', {
      url: '/AllSwitchBoards',
      component: 'allSwitchBoards'
    })
    .state('homeAutoApp.AllSwitches', {
      url: '/AllSwitches',
      component: 'allSwitches'
    })
    .state('homeAutoApp.CreateRoom', {
      url: '/CreateRoom',
      component: 'createRoom'
    })
    .state('homeAutoApp.CreateSB', {
      url: '/CreateSB',
      component: 'createSB'
    })
    ;
}
