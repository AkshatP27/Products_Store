import React from "react";
import Mainroutes from "./routes/Mainroutes";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="px-[9%] w-screen h-screen bg-gray-900 text-white font-thin">
      <Navbar />
      <Mainroutes />
    </div>
  );
};

export default App;
