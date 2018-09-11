import angular from 'angular';
import ngLoad from 'ng-load';

var routesConfig = require('./routes');
var MyDataService = require('./services/data.service');
var MyRoomService = require('./services/room.service');

var allRooms = require('./views/showRooms/showRooms');
var allSwitchBoards = require('./views/showSwitchBoards/showSwitchBoards');
var allSwitches = require('./views/showSwitches/showSwitches');
var createRoom = require('./views/showRooms/createRoom');
var createSB = require('./views/showSwitchBoards/createSwitchBoard');
var homeAutoApp = require('./views/homeAutoApp/homeAutoApp');

export const homeAutoModule = 'homeAuto';

require('./index.scss');
require('./views/showSwitches/style.scss');
require('./views/showRooms/showRoom.scss');
require('./views/showRooms/createRoom.scss');
require('./views/showSwitchBoards/showSwitchBoards.scss');
require('./views/showSwitchBoards/createSwitchBoard.scss');

angular
  .module(homeAutoModule, ['ngLoad', 'ui.router'])
  .component('allRooms', allRooms)
  .component('allSwitchBoards', allSwitchBoards)
  .component('allSwitches', allSwitches)
  .component('createRoom', createRoom)
  .component('createSB', createSB)
  .component('homeAutoApp', homeAutoApp)
  .factory('MyDataService', MyDataService)
  .factory('MyRoomService', MyRoomService)
  .config(routesConfig);;
  
  