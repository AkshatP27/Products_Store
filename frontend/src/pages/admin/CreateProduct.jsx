import { nanoid } from "nanoid";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncCreateProduct } from "../../store/actions/productActions";

const CreateProduct = () => {
  const { register, reset, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const CreateProductHandler = (product) => {
    product.id = nanoid();
    // console.log(product); 
    dispatch(asyncCreateProduct(product));
    navigate("/products");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(CreateProductHandler)}
        className="flex flex-col items-start w-1/2"
      >
        <input
          {...register("title")}
          className="mb-7 outline-0 border-b p-5 text-4xl"
          type="text"
          placeholder="Product Title"
        />
        <input
          {...register("image")}
          className="mb-7 outline-0 border-b p-5 text-4xl"
          type="url"
          placeholder="Product Image URL"
        />
        <input
          {...register("price")}
          className="mb-7 outline-0 border-b p-5 text-4xl"
          type="decimal"
          placeholder="Product Price : 199.99"
        />
        <textarea
          {...register("description")}
          className="mb-7 outline-0 border-b p-5 text-4xl"
          type="text"
          placeholder="Product Description"
        ></textarea>
        <input
          {...register("category")}
          className="mb-7 outline-0 border-b p-5 text-4xl"
          type="text"
          placeholder="Product Category"
        />
        <button className="mt-7 bg-gray-200 text-gray-900 py-3 px-5 font-bold text-lg rounded-md">
          Create Product
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
