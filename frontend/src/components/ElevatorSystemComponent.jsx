// import React, { useState, useEffect } from "react";
// import ElevatorSystem from "./ElevatorSystem";
// import Floor from "./Floor";
// import ElevatorDisplay from "./ElevatorDisplay";

// const ElevatorSystemComponent = () => {
//   const [system] = useState(new ElevatorSystem());
//   const [elevators, setElevators] = useState(system.elevators);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       system.update();
//       setElevators([...system.elevators]);
//     }, 1000);
//     return () => clearInterval(interval);
//   }, [system]);

//   const callElevator = (floor, direction) => {
//     system.requestElevator(floor, direction);
//     setElevators([...system.elevators]);
//   };

//   const selectFloor = (elevatorId, floor) => {
//     const elevator = system.elevators.find((e) => e.id === elevatorId);
//     elevator.assignTarget(floor);
//     setElevators([...system.elevators]);
//   };

//   return (
//     <div className="flex justify-center items-center bg-slate-800 ">
//       <div className="grid grid-cols-3  gap-1 bg-slate-200 p-4 rounded-lg shadow-lg max-w-full">
//         {/* Left Elevator Column */}
//         <div className="flex flex-col items-center ">
//           {[6, 5, 4, 3, 2, 1, 0].map((floor) => (
//             <div
//               key={floor}
//               className="flex items-center justify-center w-32 h-20 rounded-md bg-white border border-gray-300"
//             >
//               {elevators[0].currentFloor === floor && (
//                 <ElevatorDisplay
//                   elevator={elevators[0]}
//                   selectFloor={selectFloor}
//                 />
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Floors Column */}
//         <div className="flex flex-col items-center ">
//           {[6, 5, 4, 3, 2, 1, 0].map((floor) => (
//             <div
//               key={floor}
//               className="flex items-center justify-center w-32 h-20 rounded-md bg-white border border-gray-300"
//             >
//               <Floor
//                 floor={floor}
//                 elevatorA={elevators[0]}
//                 elevatorB={elevators[1]}
//                 canGoUp={floor < 6}
//                 canGoDown={floor > 0}
//                 callElevator={callElevator}
//               />
//             </div>
//           ))}
//         </div>

//         {/* Right Elevator Column */}
//         <div className="flex flex-col items-center ">
//           {[6, 5, 4, 3, 2, 1, 0].map((floor) => (
//             <div
//               key={floor}
//               className="flex items-center justify-center w-32 h-20 rounded-md bg-white border border-gray-300"
//             >
//               {elevators[1].currentFloor === floor && (
//                 <ElevatorDisplay
//                   elevator={elevators[1]}
//                   selectFloor={selectFloor}
//                 />
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ElevatorSystemComponent;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import ElevatorSystem from "./ElevatorSystem";
import Floor from "./Floor";
import ElevatorDisplay from "./ElevatorDisplay";

const ElevatorSystemComponent = () => {
  const [system] = useState(new ElevatorSystem());
  const [elevators, setElevators] = useState(system.elevators);
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      system.update();
      setElevators([...system.elevators]);
    }, 1000);
    return () => clearInterval(interval);
  }, [system]);

  const callElevator = (floor, direction) => {
    system.requestElevator(floor, direction);
    setElevators([...system.elevators]);
  };

  const selectFloor = (elevatorId, floor) => {
    const elevator = system.elevators.find((e) => e.id === elevatorId);
    elevator.assignTarget(floor);
    setElevators([...system.elevators]);
  };

  const navigateToDiagram = () => {
    navigate("/diagram");
  };

  return (
    <div className="flex flex-col justify-center bg-slate-800 w-full items-center ">
      <div className="grid grid-cols-3  gap-1 bg-slate-200 p-4 rounded-lg shadow-lg max-w-full">
        <div className="flex flex-col items-center">
          {[6, 5, 4, 3, 2, 1, 0].map((floor) => (
            <div
              key={floor}
              className="flex items-center justify-center w-32 h-20 rounded-md bg-white border border-gray-300"
            >
              {elevators[0].currentFloor === floor && (
                <ElevatorDisplay
                  elevator={elevators[0]}
                  selectFloor={selectFloor}
                />
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center">
          {[6, 5, 4, 3, 2, 1, 0].map((floor) => (
            <div
              key={floor}
              className="flex items-center justify-center w-32 h-20 rounded-md bg-white border border-gray-300"
            >
              <Floor
                floor={floor}
                elevatorA={elevators[0]}
                elevatorB={elevators[1]}
                canGoUp={floor < 6}
                canGoDown={floor > 0}
                callElevator={callElevator}
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center">
          {[6, 5, 4, 3, 2, 1, 0].map((floor) => (
            <div
              key={floor}
              className="flex items-center justify-center w-32 h-20 rounded-md bg-white border border-gray-300"
            >
              {elevators[1].currentFloor === floor && (
                <ElevatorDisplay
                  elevator={elevators[1]}
                  selectFloor={selectFloor}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="fixed right-20 top-1/2 transform -translate-y-1/2 flex items-center">
        <img src="/right-down.png" className="w-20 mr-4" alt="" />
        <button
          className="px-4 py-2 mt-12 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
          onClick={navigateToDiagram}
        >
          View Diagram
        </button>
      </div>
    </div>
  );
};

export default ElevatorSystemComponent;
