import React from "react";
import rightIcon from "./up-arrow.png";

// const Floor = ({ floor, callElevator, canGoUp, canGoDown }) => {
//   return (
//     <div className="flex flex-col items-center w-full">
//       <h4 className="text-lg text-center">Floor {floor}</h4>
//       <div className="flex gap-2">
//         {canGoUp && (
//           <button
//             // className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition"
//             className="mt-2   text-white rounded  transition"
//             onClick={() => callElevator(floor, "up")}
//           >
//             <img src={rightIcon} className=" w-6 " alt="Right Icon" />
//           </button>
//         )}
//         {canGoDown && (
//           <button
//             className="mt-2  text-white rounded  transition"
//             onClick={() => callElevator(floor, "down")}
//           >
//             <img src={rightIcon} className="rotate-180 w-6 " alt="Right Icon" />
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Floor;

const Floor = ({
  floor,
  elevatorA,
  elevatorB,
  canGoUp,
  canGoDown,
  callElevator,
}) => {
  const getDirectionIndicator = (elevator) => {
    if (elevator.currentFloor === floor) {
      return elevator.direction === "up"
        ? "↑"
        : elevator.direction === "down"
        ? "↓"
        : "";
    } else if (elevator.direction === "up" && elevator.currentFloor < floor) {
      return "↑";
    } else if (elevator.direction === "down" && elevator.currentFloor > floor) {
      return "↓";
    }
    return "";
  };

  return (
    <div className="flex flex-col items-center w-full">
      <h4 className="text-lg text-center">Floor {floor}</h4>
      <div className="flex gap-2">
        {canGoUp && (
          <button
            className="mt-2 text-white rounded transition"
            onClick={() => callElevator(floor, "up")}
          >
            <img src={rightIcon} className="w-6" alt="Right Icon" />
          </button>
        )}
        {canGoDown && (
          <button
            className="mt-2 text-white rounded transition"
            onClick={() => callElevator(floor, "down")}
          >
            <img src={rightIcon} className="rotate-180 w-6" alt="Right Icon" />
          </button>
        )}
      </div>
      <div className="flex gap-2 mt-2">
        <span>{getDirectionIndicator(elevatorA)}</span>
        <span>{getDirectionIndicator(elevatorB)}</span>
      </div>
    </div>
  );
};

export default Floor;
