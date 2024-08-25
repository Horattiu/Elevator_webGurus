// import React from "react";
// import ElevatorSystemComponent from "./components/ElevatorSystemComponent";

// function App() {
//   return (
//     <div className="App   flex justify-center items-center min-h-screen bg-slate-800">
//       <ElevatorSystemComponent />
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ElevatorSystemComponent from "./components/ElevatorSystemComponent";
import DiagramPage from "./components/DiagramPage";

function App() {
  return (
    <Router>
      <div className="App flex bg-slate-800 justify-center items-center min-h-screen ">
        <Routes>
          <Route path="/" element={<ElevatorSystemComponent />} />
          <Route path="/diagram" element={<DiagramPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
