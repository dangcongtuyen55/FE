import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/Action/CartAction";

export default function CartItems({ item, deleteItemFromCart }) {
  const dispatch = useDispatch();

  const increaseQuantity = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (stock <= quantity) {
      return;
    }
    dispatch(addToCart(id, newQty));
  };

  const decreaseQuantity = (id, quantity) => {
    const newQty = quantity - 1;
    if (1 >= quantity) {
      return;
    }
    dispatch(addToCart(id, newQty));
  };
  // const total_no_promotion = item.original_price * item.quantity;
  // const total_have_promotion = item.current_price * item.quantity;
  return (
    <div className="flex w-2/5">
      <div className="w-20">
        <img className="h-24" src={item.product_url} alt="" />
      </div>
      <div className="flex flex-col justify-between ml-4 flex-grow">
        <span className="font-bold text-sm">{item.name}</span>
        <span className="text-red-500 text-xs">
          {/* {item.current_price ? item.current_price : item.original_price} */}
        </span>

        <button onClick={() => deleteItemFromCart(item.product)}>Remove</button>
      </div>
    </div>
  );
}
