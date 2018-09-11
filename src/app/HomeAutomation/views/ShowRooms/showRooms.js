
module.exports = {
  template: require('./showRooms.html'),
  controller: ShowRoomsController
};
/** @ngInject */
function ShowRoomsController($log, MyRoomService, MyDataService, $state) {
  var vm = this;
  vm.editMode = false;
  MyRoomService.setActiveRoom(null);
  MyRoomService.getRooms().then(function (response) {
    vm.allRooms = response;
    // $log.log(vm.allRooms);
  });
  vm.handleRoomClick = function (selectedRoom) {
    MyRoomService.setActiveRoom(selectedRoom.id);
    // $log.log(selectedRoom);
    if (!vm.editMode) {
      $state.go('homeAutoApp.AllSwitchBoards');
    }
    else {
      $state.go('homeAutoApp.CreateRoom');
    }
  };
  vm.handleEditBtnClick = function () {
    vm.editMode = !vm.editMode;
  };
  vm.handleAddRoomBtnClick = function () {
    $state.go('homeAutoApp.CreateRoom');
  };
  vm.handleSaveBtnClick = function () {
    vm.editMode = !vm.editMode;
    MyRoomService.roomSaveChanges();
    // MyDataService.storeToLS(vm.allRooms);
  };
  vm.handleCancelBtnClick = function () {
    vm.editMode = !vm.editMode;
    vm.allRooms = MyRoomService.roomCancelChanges();
    // vm.allRooms = MyDataService.getFromLS();
  };
  vm.handleDeleteBtn = function (room) {
    $log.log(vm.allRooms);
    vm.allRooms = Object.values(vm.allRooms).filter(function (r) {
      if(r.id === room.id)
        return false;
      return true;
    });
    MyRoomService.updateRoomsList(vm.allRooms);
    $log.log(vm.allRooms);
  };
  vm.handleClrDataBtnClick = function () {
    localStorage.setItem('HomeAutomationLS', JSON.stringify({}));
  };
}
