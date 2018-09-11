// @ts-check
var MySwitch = require("./Switch.js");
class SwitchBoard {
  constructor(id, name, ip, switches) {
    // SwitchBoard.TOTAL++;
    SwitchBoard.TOTAL++;
    this.id = id ? id : SwitchBoard.TOTAL;
    this.name = name;
    this.ip = ip;
    if (switches) {
      this.switches = Object.values(switches).map(function (sw) {
        return new MySwitch(sw.id, sw.name, sw.type, sw.state);
      });
    }
    else
      this.switches = [];
  }
  getSwitches() {
    return this.switches;
  }
}
SwitchBoard.TOTAL = 0;
module.exports = SwitchBoard;
