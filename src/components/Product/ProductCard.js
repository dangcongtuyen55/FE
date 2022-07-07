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
      <div className="product-card w-[200px] h-[320px]  rounded-lg p-3 bg-slate-200 text-black">
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
              className="w-full  object-cover rounded-lg mb-5"
            />
          </Link>

          <h3 className=" text-sm font-bold mb-3 text-ellipsis overflow-hidden whitespace-nowrap">
            {product.name}
          </h3>
          <div className="flex items-center justify-between text-sm opacity-50 mb-2 text-black">
            {product.price}
          </div>
          <div className="flex items-center justify-between text-sm opacity-50  text-black">
            <ReactStars {...options} />
          </div>

          {/* <button className="py-3 px-6 rounded-lg capitalize bg-black text-white w-full">
            <Link to={`/product/${product._id}`}>Mua ngay</Link>
          </button> */}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
