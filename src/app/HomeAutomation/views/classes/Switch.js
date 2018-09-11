// @ts-check
class MySwitch {
  constructor(id, name, type, state) {
    this.id = id;
    this.name = name;
    this.type = type; // 2 types - 1.TOGGLE 2.KNOB
    this.state = state; // true/false  
  }

  toggle() {
    this.state.active = !this.state.active;
    return this.state;
  }

  handleKnobToggle(value, e) {
    e.stopPropagation();
    this.state.val = value;
    return this.state.val;
  }

}

module.exports = MySwitch;
