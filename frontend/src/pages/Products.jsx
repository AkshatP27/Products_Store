import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Products = () => {
  const products = useSelector((state) => state.productReducer.productData);
  // console.log(products);

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
          <p>{product.price}</p>
          <button>Add to Cart</button>
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
