import React, { useEffect } from "react";
import Mainroutes from "./routes/Mainroutes";
import Navbar from "./components/Navbar";
import { asyncCurrentUser } from "./store/actions/userActions";
import { useDispatch } from "react-redux";
import { asyncLoadProducts } from "./store/actions/productActions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncCurrentUser());
    dispatch(asyncLoadProducts());
  }, [])
  

  return (
    <div className="overflow-auto px-[9%] pb-9 w-screen h-screen bg-gray-900 text-white font-thin">
      <Navbar />
      <Mainroutes />
    </div>
  );
};

export default App;
