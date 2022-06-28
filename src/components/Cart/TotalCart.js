import React from "react";

export default function TotalCart({ item }) {
  const total_no_promotion = item.original_price * item.quantity;
  const total_have_promotion = item.current_price * item.quantity;
  return (
    <>
      <span>
        {`₫${item.current_price ? total_have_promotion : total_no_promotion}`}
      </span>
    </>
  );
}
