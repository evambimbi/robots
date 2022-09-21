import Allrobot from "./components/Allrobot";
import Onerobot from "./components/Onerobot";
import Robot from "./components/Robot";
import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="container container-fluid">
      <Robot />
      <Routes>
        <Route path="/" element={<Allrobot />} />
        <Route path="/detail/:id" element={<Onerobot />} />
      </Routes>
    </div>
  );
};

export default App;
