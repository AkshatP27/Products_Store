import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { asyncUpdateUser } from "../store/actions/userActions";

const Products = () => {
  // const products = useSelector((state) => state.productReducer.products);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const users = useSelector((state) => state.userReducer.userData);
  const products = useSelector((state) => state.productReducer.productData);
  // console.log(products);

  const AddToCartHandler = (product) => {
    // Make a deep copy of the user and their cart
    const copyusers = {
      ...users,
      cart: users.cart.map((item) => ({
        product: { ...item.product },
        quantity: item.quantity
      })),
    };
    
    // Check if the product is already in the cart (by product.id)
    const x = copyusers.cart.findIndex((c) => c?.product?.id === product.id);
    if (x === -1) {
      // If not in cart, push the whole product object with quantity
      copyusers.cart.push({ product: { ...product }, quantity: 1 });
    } else {
      // If already in cart, just increase the quantity
      copyusers.cart[x].quantity += 1;
    }
    dispatch(asyncUpdateUser(copyusers.id, copyusers));
    
    navigate("/cart")
  };

  const renderProduct = products.map((product) => {
    return (
      <div
        key={product.id}
        className="w-[25%] mr-3 mb-3 border rounded-2xl shadow p-2"
      >
        <img
          className="w-full h-[27vh] object-cover rounded-xl"
          src={product.image}
          alt=""
        />
        <h1>{product.title}</h1>
        <small>{product.description.slice(0, 100)}...</small>
        <div className="mt-3 p-3 flex items-center justify-between">
          <p>${product.price}</p>
          <button onClick={() => AddToCartHandler(product)}>
            Add to Cart
          </button>
        </div>
        <Link to={`/products/${product.id}`}>More Info...</Link>
      </div>
    );
  });

  return products.length > 0 ? (
    <div className="overflow-auto flex flex-wrap">{renderProduct}</div>
  ) : (
    "Loading..."
  );
};

export default Products;
