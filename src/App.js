import { Fragment, useCallback, useEffect } from "react";
import "./App.css";
import "./index.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Error from "./pages/Error";
import { ProductDetail } from "./components/Product/ProductDetail";
import ProductList from "./components/Product/ProductList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import axios from "axios";
import { userCurrent } from "./Redux/Action/UserAction";
import Cart from "./components/Cart/Cart";
import { ProtectedRoute } from "./components/Route/ProtectedRoute";
import { Dashboard } from "./components/Admin/Dashboard";
import { Shipping } from "./components/Cart/Shipping";
import { Order } from "./components/Cart/Order";
import { RequireAuth } from "./config/RequireAuth";
import { Payment } from "./components/Cart/Payment";
import { Success } from "./components/Cart/Success";

const App = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, user } = userLogin;
  // console.log(user.role);

  return (
    // <AppContext.Provider value={{ state, dispatch }}>

    // </AppContext.Provider>
    <Router>
      <Header />
      <Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/list-product" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login/shipping" element={<Shipping />} />
          <Route path="/order" element={<Order />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/success" element={<Success />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </Fragment>
    </Router>
  );
};

export default App;
