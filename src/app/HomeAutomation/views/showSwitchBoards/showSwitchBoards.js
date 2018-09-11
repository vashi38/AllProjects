module.exports = {
  template: require("./showSwitchBoards.html"),
  controller: showSwitchBoardsController
};
/** @ngInject */
function showSwitchBoardsController(
  $log,
  MyRoomService,
  MyDataService,
  $state
) {
  var vm = this;
  var allRooms;

  var _init = function () {
    vm.editMode = false;
    MyRoomService.setActiveSwitchBoard(null);
    // allRooms = MyRoomService.getAllRooms();
    // $log.log(MyRoomService.getActiveRoom().getSwitchBoards());
    vm.ActiveRoom = MyRoomService.getActiveRoom();
    $log.log(vm.ActiveRoom);
    if (vm.ActiveRoom == null) 
      $state.go("homeAutoApp.AllRooms");
    // vm.allSwitchBoards = vm.ActiveRoom.getSwitchBoards(); 
  };
  
  _init();

  vm.handleSwitchBoardClick = function (selectedSwitchBoard, event) {
    if(event.target.nodeName === 'SPAN') return;
    MyRoomService.setActiveSwitchBoard(selectedSwitchBoard.id);
    if (!vm.editMode) {
      $state.go("homeAutoApp.AllSwitches");
    } else {
      $state.go("homeAutoApp.CreateSB");
    }
  };
  vm.handleAddSBBtnClick = function () {
    $state.go("homeAutoApp.CreateSB");
  };
  vm.handleEditBtnClick = function () {
    vm.editMode = !vm.editMode;
  };
  vm.handleSaveBtnClick = function () {
    vm.editMode = !vm.editMode;
    MyRoomService.sbSaveChanges();
  };
  vm.handleCancelBtnClick = function () {
    vm.editMode = !vm.editMode;
    vm.ActiveRoom = MyRoomService.sbCancelChanges();
    $log.log(vm.ActiveRoom.getSwitchBoards());
  };
  vm.handleDeleteBtn = function (sb, event) {
    event.stopPropagation();
    $log.log(vm.ActiveRoom);
    // vm.allSwitchBoards = Object.values(vm.allSwitchBoards).filter(function (r) {
    //   if (r.id === sb.id) return false;
    //   return true;
    // });
    vm.ActiveRoom.deleteSwitchBoard(sb.id);
    // vm.ActiveRoom.switchBoards = vm.allSwitchBoards;
    $log.log(vm.ActiveRoom);
  };
}
