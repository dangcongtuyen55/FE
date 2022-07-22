import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import DeleteIcon from "@mui/icons-material/Delete";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { deleteFavoriteItemsToCart } from "../../Redux/Action/FavoriteAction";
import { addToCart } from "../../Redux/Action/CartAction";

export const ItemFavorite = ({ item }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const AddToCardHandle = () => {
    // e.preventDefault();
    // navigate(`/cart/${id}?qty=${qty}`);
    // const existItem = cartItems.find((x) => x._id === product._id);
    dispatch(addToCart(item.product, { quantity, isUpdate: true }));
  };
  const deleteHandler = () => {
    dispatch(deleteFavoriteItemsToCart(item.product));
  };
  return (
    <div className="flex gap-4 border-b p-4 sm:pb-8 w-full group overflow-hidden">
      <div className="w-1/6 h-28 flex-shrink-0">
        <Link to={`/product/${item.product}`}>
          <img
            draggable="false"
            className="h-full w-full object-contain"
            src={item.product_url}
            alt=""
          />
        </Link>
      </div>

      {/* <!-- description --> */}
      <div className="flex flex-col gap-5 w-full p-1">
        {/* <!-- product title --> */}
        <div className="flex justify-between items-start sm:pr-5">
          <Link
            to={`/product/${item.product}`}
            className="flex flex-col gap-0.5"
          >
            <p className="group-hover:text-primary-blue w-56 sm:w-full truncate">
              {item.name}
            </p>
            {/* <!-- rating badge --> */}
            <span className="text-sm text-gray-500 font-medium flex gap-2 items-center">
              <span className="text-xs px-1.5 py-0.5 bg-green-700 rounded-sm text-white flex items-center gap-0.5">
                {item.rating} <StarIcon sx={{ fontSize: "14px" }} />
              </span>
              <span>({item.numOfReviews})</span>
            </span>
            {/* <!-- rating badge --> */}
          </Link>
          <div className="flex flex-col gap-5">
            <button
              onClick={deleteHandler}
              className="text-gray-400 hover:text-red-500"
            >
              <span>
                <DeleteIcon />
              </span>
            </button>
            <span>
              <button
                onClick={AddToCardHandle}
                className="text-gray-400 hover:text-sky-500"
              >
                <span>
                  <AddShoppingCartIcon />
                </span>
              </button>
            </span>
          </div>
        </div>
        {/* <!-- product title --> */}

        {/* <!-- price desc --> */}
        <div className="flex items-center gap-2 text-2xl font-medium">
          <span>{`₫${item.price}`}</span>
        </div>
        {/* <!-- price desc --> */}
      </div>
      {/* <!-- description --> */}
    </div>
  );
};
