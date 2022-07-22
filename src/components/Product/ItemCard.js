import { useSnackbar } from "notistack";
import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "pure-react-carousel/dist/react-carousel.es.css";
import {
  addFavoriteItemsToCart,
  deleteFavoriteItemsToCart,
} from "../../Redux/Action/FavoriteAction";

export const ItemCard = ({ item }) => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const options = {
    edit: false,
    color: "rgba(168, 168, 168)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    value: item.rating,
    isHalf: true,
  };

  const { favoriteItems } = useSelector((state) => state.favorite);

  // const { id } = useParams();
  const productId = item._id;
  console.log("TCL: ItemCard -> productId", productId);
  const itemFavorite = favoriteItems.some((i) => i.product === productId);
  const addToWishlistHandler = () => {
    if (itemFavorite) {
      dispatch(deleteFavoriteItemsToCart(productId));
      enqueueSnackbar("Đã xóa sản phẩm khỏi danh sách yêu thích", {
        variant: "success",
      });
      // toast.success("Đã xóa khỏi danh sách yêu thích");
    } else {
      dispatch(addFavoriteItemsToCart(productId));
      enqueueSnackbar("Đã thêm sản phẩm vào danh sách yêu thích", {
        variant: "success",
      });
      // toast.success("Đã thêm vào danh sách yêu thích");
    }
  };
  return (
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
            {`${item.price?.toLocaleString()} ₫`}
            <span
              onClick={addToWishlistHandler}
              className={`${
                itemFavorite
                  ? "text-red-500"
                  : "hover:text-red-500 text-gray-300"
              } cursor-pointer`}
            >
              <FavoriteIcon sx={{ fontSize: "18px" }} />
            </span>
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
