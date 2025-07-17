import React, { useEffect } from "react";
import Mainroutes from "./routes/Mainroutes";
import Navbar from "./components/Navbar";
import { asyncCurrentUser } from "./store/actions/userActions";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncCurrentUser());
  }, [])
  

  return (
    <div className="px-[9%] w-screen h-screen bg-gray-900 text-white font-thin">
      <Navbar />
      <Mainroutes />
    </div>
  );
};

export default App;
