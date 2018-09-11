module.exports = {
  template: require("./createSwitchBoard.html"),
  controller: CreateRoomController
};
/** @ngInject */
function CreateRoomController($log, MyRoomService, MyDataService, $state) {
  var vm = this;
  vm.ActiveRoom = MyRoomService.getActiveRoom();
  var activeSwitchBoard;

  if (!MyRoomService.ValidateNavigation()){
    $state.go('homeAutoApp.AllRooms');
  }
  if (MyRoomService.getActiveSwitchBoard()) {
    activeSwitchBoard = MyRoomService.getActiveSwitchBoard();
    vm.SBName = activeSwitchBoard.name;
    vm.IPAdd = activeSwitchBoard.ip;
    vm.editMode = true;
  }
  var _handleAddBtnClick = function () {
    if (!vm.SBName || !vm.IPAdd)
      alert('Switchboard Name and IP address are mandatory...');
    else {
      if (!MyRoomService.createSwitchBoard(vm.SBName)) {
        $state.go('homeAutoApp.AllSwitchBoards');
      }
      $log.log('Switch Board Name:' + vm.SBName);
      alert('Switch Board added sucessfully');
      $state.go('homeAutoApp.AllSwitchBoards');
    }
  };
  var _handleSaveBtnClick = function () {
    if (!vm.SBName || !vm.IPAdd)
      alert('Switchboard Name and IP address are mandatory...');
    else {
      if (!MyRoomService.updateSwitchBoard(activeSwitchBoard, vm.SBName, vm.IPAdd)) {
        $state.go('homeAutoApp.AllSwitchBoards');
      }
      $log.log('Switch Board Name:' + vm.SBName);
      alert('Switch Board details updated sucessfully');
      $state.go('homeAutoApp.AllSwitchBoards');
    }
  };

  this.handleAddBtnClick = _handleAddBtnClick;
  this.handleSaveBtnClick = _handleSaveBtnClick;
}
