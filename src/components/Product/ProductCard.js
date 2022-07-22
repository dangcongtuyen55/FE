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
      {/* <div className="product-card w-[200px] h-[320px]  rounded-lg p-3 bg-slate-200 text-black">
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

          
        </div>
      </div> */}
      <div
        key={product.id}
        className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden"
      >
        <div className="mt-3 aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none">
          <Link
            to={{
              pathname: `/product/${product._id}`,
              state: product,
            }}
          >
            <img
              src={product.product_url}
              alt=""
              className="w-full  object-cover "
            />
          </Link>
        </div>
        <div className="flex-1 p-4 space-y-2 flex flex-col">
          <h3 className="text-sm font-medium text-gray-900 text-ellipsis overflow-hidden whitespace-nowrap">
            {/* <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      
                    </a> */}
            {product.name}
          </h3>

          <div className="flex-1 flex flex-col justify-end">
            <p className="text-xs italic text-gray-500">
              <ReactStars {...options} />
            </p>
            <div className="flex items-center justify-between text-sm opacity-50  text-black">
              <p className="text-sm font-medium text-gray-900">
                {`${product.price.toLocaleString()} ₫`}
              </p>
              <p>({product.numOfReviews} nhận xét)</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
