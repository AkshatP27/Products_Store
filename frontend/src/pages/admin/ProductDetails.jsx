import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  asyncDeleteProduct,
  asyncUpdateProduct,
} from "../../store/actions/productActions";

const ProductDetails = () => {
  const { id } = useParams();
  // console.log(id);
  const {
    productReducer: { productData },
    userReducer: { userData },
  } = useSelector((state) => state);
  const product = productData?.find((product) => product.id == id);
  // console.log(product, userData);

  const { register, reset, handleSubmit } = useForm({
    defaultValues: {
      image: product?.image,
      title: product?.title,
      price: product?.price,
      description: product?.description,
      category: product?.category,
    },
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const UpdateProductHandler = (product) => {
    // console.log(product);
    dispatch(asyncUpdateProduct(id, product));
  };

  const DeleteHandler = () => {
    dispatch(asyncDeleteProduct(id));
    navigate("/productData");
  };

  return product ? (
    <>
      {/* For both Admin as well as User/Customer */}
      <div className="w-full flex gap-7 mb-18">
        <img className="w-1/2 h-1/2 object-cover" src={product.image} alt="" />
        <div className="w-1/2 h-1/2 px-3">
          <h1 className="text-7xl font-medium mb-7">{product.title}</h1>
          <h2 className="mb-10 text-5xl font-normal text-green-500">
            &#8377;{product.price}
          </h2>
          <p className="mb-10 text-2xl">{product.description}</p>
          <button className="bg-blue-500 px-5 py-3 font-medium text-lg mt-5">
            Add to Cart
          </button>
        </div>
      </div>

      <hr />

      {/* For Admin only */}
      {userData && userData?.isAdmin && (
        <form
          onSubmit={handleSubmit(UpdateProductHandler)}
          className="flex flex-col items-start mt-18"
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
            Update Product Details
          </button>
          <button
            type="button"
            onClick={DeleteHandler}
            className="mt-7 bg-red-500 text-gray-900 py-3 px-5 font-bold text-lg rounded-md"
          >
            Delete Product
          </button>
        </form>
      )}
    </>
  ) : (
    "Loading..."
  );
};

export default ProductDetails;
