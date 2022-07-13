import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export const ItemCard = ({ item }) => {
  const options = {
    edit: false,
    color: "rgba(168, 168, 168)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    value: item.rating,
    isHalf: true,
  };
  return (
    // <div className="flex flex-shrink-0 relative w-full sm:w-auto">
    //   <img
    //     src={item.product_url}
    //     alt="black chair and white table"
    //     className="object-cover object-center w-full"
    //   />
    //   <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
    //     <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
    //       {item.name}
    //     </h2>
    //     <div className="flex h-full items-end pb-6">
    //       <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
    //         {item.price}
    //       </h3>
    //     </div>
    //   </div>
    // </div>
    <>
      <div className="product-card w-[150px] h-[220px]  rounded-lg p-5 bg-slate-200 text-black">
        <div>
          <Link
            to={{
              pathname: `/product/${item._id}`,
              state: item,
            }}
          >
            <img
              src={item.product_url}
              alt=""
              className="w-full  object-cover rounded-lg "
            />
          </Link>

          <h3 className=" text-xs font-bold mb-3 text-ellipsis overflow-hidden whitespace-nowrap">
            {item.name}
          </h3>
          <div className="flex items-center justify-between text-xs opacity-50 mb-2 text-black">
            {item.price}
          </div>
          <div className="flex items-center justify-between text-xs opacity-50  text-black">
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
