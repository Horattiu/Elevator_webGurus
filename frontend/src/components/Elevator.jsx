class Elevator {
  constructor(id, initialFloor) {
    this.id = id;
    this.currentFloor = initialFloor;
    this.targetFloor = null;
    this.direction = null;
  }

  move() {
    if (this.targetFloor === null) return;

    if (this.currentFloor < this.targetFloor) {
      this.currentFloor++;
      this.direction = "up";
    } else if (this.currentFloor > this.targetFloor) {
      this.currentFloor--;
      this.direction = "down";
    } else {
      this.direction = "idle";
      this.targetFloor = null;
    }
  }

  assignTarget(floor) {
    this.targetFloor = floor;
    this.direction = this.currentFloor < floor ? "up" : "down";
  }

  isIdle() {
    return this.targetFloor === null;
  }

  distanceFrom(floor) {
    return Math.abs(this.currentFloor - floor);
  }
}

export default Elevator;
