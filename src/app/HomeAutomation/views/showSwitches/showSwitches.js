module.exports = {
  template: require("./showSwitches.html"),
  controller: showSwitchesController
};

/** @ngInject */
function showSwitchesController($log, MyRoomService, MyDataService, $state) {
  var vm = this;
  vm.handleSwitchClick = _handleSwitchClick;
  _init();

  function _init() {
    // $log.log(MyRoomService.getActiveSwitchBoard());
    vm.ActiveSwitchBoard = MyRoomService.getActiveSwitchBoard();
    vm.ActiveRoom = MyRoomService.getActiveRoom();
    if(!vm.ActiveSwitchBoard)
      $state.go('homeAutoApp.AllSwitchBoards');
  vm.allSwitches = MyRoomService.getActiveSwitchBoard().getSwitches();
    
  }

  function _handleSwitchClick(sw) {
    sw.toggle();
    MyDataService.sendUpdate(sw.id);
  }
}
