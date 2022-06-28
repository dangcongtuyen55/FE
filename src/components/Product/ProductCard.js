import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const ProductCard = ({ product }) => {
  const options = {
    edit: false,
    color: "rgba(168, 168, 168)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    value: product.rating,
    isHalf: true,
  };
  return (
    <>
      <div className="product-card w-[200px]  rounded-lg p-3 bg-gray-700 text-black">
        <div>
          <Link
            to={{
              pathname: `/product/${product._id}`,
              state: product,
            }}
          >
            <img
              src={product.product_url}
              alt=""
              className="w-full h-[200px] object-cover rounded-lg mb-5"
            />
          </Link>

          <h3 className=" text-xl font-bold mb-3 text-ellipsis overflow-hidden whitespace-nowrap">
            {product.name}
          </h3>
          <div className="flex items-center justify-between text-sm opacity-50 mb-5 text-light">
            {product.price }
          </div>
          <div className="flex items-center justify-between text-sm opacity-50 mb-5 text-light">
            <ReactStars {...options} />
          </div>

          <button className="py-3 px-6 rounded-lg capitalize bg-black text-white w-full">
            <Link to={`/product/${product._id}`}>Mua ngay</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
