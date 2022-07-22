import { Button } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { ItemFavorite } from "./ItemFavorite";

export const Favorites = () => {
  const { favoriteItems } = useSelector((state) => state.favorite);

  return (
    <main className="w-full mt-12 sm:mt-0">
      <div className="flex gap-3.5 sm:w-11/12 sm:mt-4 m-auto mb-7">
        <div className="flex-1 shadow bg-white">
          {/* <!-- wishlist container --> */}
          <div className="flex flex-col">
            <span className="font-medium text-lg px-4 sm:px-8 py-4 border-b">
              Danh sách yêu thích ({favoriteItems.length})
            </span>

            {favoriteItems.length === 0 && (
              <div className="flex items-center flex-col gap-2 m-6">
                <FavoriteBorderIcon style={{ fontSize: "50px" }} />
                <span className="text-lg font-medium mt-6">
                  Chưa có danh mục yêu thích
                </span>
                <p>Thêm sản phẩm vào danh sách yêu thích để hiển thị ở đây.</p>
                <Link to={"/"}>
                  <Button hover={true} variant="outlined" size="large">
                    <AddShoppingCartIcon /> Tiếp tục mua sắm
                  </Button>
                </Link>
              </div>
            )}

            {favoriteItems.map((item, index) => (
              <ItemFavorite item={item} />
            ))}
          </div>
          {/* <!-- wishlist container --> */}
        </div>
      </div>
    </main>
  );
};
