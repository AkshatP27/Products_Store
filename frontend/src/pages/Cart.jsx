import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncUpdateUser } from "../store/actions/userActions";

const Cart = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.userReducer.userData);
  const products = useSelector((state) => state.productReducer.productData);

  const IncreaseQuantityHandler = (index, product) => {
    // Make a deep copy of the user and their cart
    const copyusers = {
      ...users,
      cart: users.cart.map((item) => ({
        product: { ...item.product },
        quantity: item.quantity,
      })),
    };

    copyusers.cart[index].quantity += 1;

    // console.log(copyusers);

    dispatch(asyncUpdateUser(copyusers.id, copyusers));
  };
  const DecreaseQuantityHandler = (index, product) => {
    // Make a deep copy of the user and their cart
    const copyusers = {
      ...users,
      cart: users.cart.map((item) => ({
        product: { ...item.product },
        quantity: item.quantity,
      })),
    };


    if (copyusers.cart[index].quantity > 1) {
      copyusers.cart[index].quantity -= 1;
    } else {
      // Remove the item from cart if quantity is 1 and user clicks '-'
      copyusers.cart.splice(index, 1);
    }

    // console.log(copyusers);

    dispatch(asyncUpdateUser(copyusers.id, copyusers));
  };

  const cartItems = users.cart.map((c, index) => (
    <li
      className="flex items-center bg-gray-700 rounded-lg mb-9 p-4 justify-between"
      key={c.product.id}
    >
      <img
        className="w-[10vmax] h-[10vmax] object-cover rounded-lg"
        src={c.product.image}
        alt=""
      />
      <p className="w-[36%]">{c.product.title}</p>
      <p>${c.product.price}</p>
      <p>
        <button
          onClick={() => DecreaseQuantityHandler(index, c)}
          className="text-xl"
        >
          -
        </button>
        <span className="text-xl mx-3 bg-gray-950 p-1 rounded">
          {" "}
          {c.quantity}{" "}
        </span>
        <button
          onClick={() => IncreaseQuantityHandler(index, c)}
          className="text-xl"
        >
          +
        </button>
      </p>
    </li>
  ));

  return (
    <div>
      {users.cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>{cartItems}</ul>
      )}
    </div>
  );
};

export default Cart;
