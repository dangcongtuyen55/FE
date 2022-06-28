import React, { useContext } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import AppContext from "../AppContext/AppContext";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/Action/UserAction";

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { cartItems } = useSelector((state) => state.cart);

  const { user } = userLogin;
  console.log(user);
  const signOut = () => {
    dispatch(logout());
  };
  return (
    <header className="header flex items-center justify-center gap-x-5 text-light font-bold py-10 bg-dark ">
      <Link to={"/"}>
        <span className="text-primary">Home</span>
      </Link>
      <Link to={"/catagories"}>Catagory</Link>
      <Link to={"/list-product"}>Product</Link>
      <Link to={"/profile"}>Thông tin của bạn</Link>
      <Link to={"/cart"}>{cartItems.length}giỏ hàng</Link>

      <>
        {user ? (
          <>
            <span>Xin chào, {user.userName}</span>

            <span onClick={() => signOut()}>signout</span>
          </>
        ) : (
          <>
            <Link to={"/login"}>Đăng nhập</Link>
            <Link to={"/register"}>Đăng ký</Link>
          </>
        )}
      </>
    </header>
  );
};

export default Header;
