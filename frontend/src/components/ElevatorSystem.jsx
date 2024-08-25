import Elevator from "./Elevator";

class ElevatorSystem {
  constructor() {
    this.elevators = [new Elevator("A", 0), new Elevator("B", 6)];
  }

  requestElevator(floor) {
    let closestElevator = null;
    let minDistance = Infinity;

    this.elevators.forEach((elevator) => {
      const distance = elevator.distanceFrom(floor);
      if (
        distance < minDistance ||
        (distance === minDistance && elevator.currentFloor < floor)
      ) {
        closestElevator = elevator;
        minDistance = distance;
      }
    });

    closestElevator.assignTarget(floor);
    return closestElevator;
  }

  update() {
    this.elevators.forEach((elevator) => elevator.move());
  }
}

export default ElevatorSystem;
