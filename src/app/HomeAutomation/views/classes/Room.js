// @ts-check
var MySwitchBoard = require('./SwitchBoard.js');
class Room {
  constructor(id, name, switchBoards) {  
    Room.TOTAL++;
    this.id = id ? id : Room.TOTAL;
    this.name = name;
    if (switchBoards) {
      this.switchBoards = Object.values(switchBoards).map(function (board) {
        return new MySwitchBoard(board.id, board.name, board.ip, board.switches);
      });
    }
    else
      this.switchBoards = [];
    // this.switchBoards = SwitchBoards;
  }
  getRoomCount() {
    return Room.TOTAL;
  }
  getSwitchBoards() {
    return this.switchBoards;
  }
  addSwitchBoard(name, ip) {
    this.switchBoards.push(new MySwitchBoard(null, name, ip, null));
    // return this;
  }
  deleteSwitchBoard(id) {
    this.switchBoards = Object.values(this.switchBoards).filter(function (sb) {
      if(sb.id === id){
        return false;
      }
      return true;
    });
    return this.switchBoards;
  }
}

Room.TOTAL = 0;

module.exports = Room;
