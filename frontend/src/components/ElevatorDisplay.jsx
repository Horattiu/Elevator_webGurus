import React from "react";

const ElevatorDisplay = ({ elevator }) => {
  return (
    <div className=" bg-slate-700 rounded-lg  w-full h-full flex flex-col justify-between">
      <div className="flex justify-between bg-sky-300  ">
        <h3 className="text-base font-bold ml-2">
          {elevator.isIdle() ? "Idle" : `${elevator.direction}`}
        </h3>
        <h2 className="text-xl mr-2">{elevator.currentFloor}</h2>
      </div>
      <div className="grid grid-cols-3 gap-1 m-1">
        {[6, 5, 4, 3, 2, 1, 0].map((floor) => (
          <button
            key={floor}
            className="w-full h-3 bg-blue-500 text-white rounded text-sm flex items-center justify-center"
            onClick={() => elevator.assignTarget(floor)}
          >
            {floor}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ElevatorDisplay;
