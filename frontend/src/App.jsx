import React, { useEffect } from "react";
import Mainroutes from "./routes/Mainroutes";
import Navbar from "./components/Navbar";
import { asyncCurrentUser } from "./store/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoadProducts } from "./store/actions/productActions";

const App = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.userReducer.userData);
  const products = useSelector((state) => state.productReducer.productData);

  useEffect(() => {
    // If no user data, fetch current user
    // Advantage:
    // This line ensures that if there is no user data in the Redux state (for example, after a page reload), the app will automatically try to fetch the current user from localStorage (or another persistent source) and update the Redux state.
    !users && dispatch(asyncCurrentUser());
  }, [users]); //Rerenders when users data changes

  useEffect(() => {
    // If no products data, fetch products
    // Advantage:
    // This line ensures that if there are no products loaded in the Redux state (for example, after a page reload or on the first visit), the app will automatically dispatch an action to fetch the products from the backend or API and update the Redux state.
    products.length == 0 && dispatch(asyncLoadProducts());
  }, [products]); //Rerenders when products data changes

  return (
    <div className="px-[9%] pb-9 bg-gray-900 text-white font-thin">
      <Navbar />
      <Mainroutes />
    </div>
  );
};

export default App;
