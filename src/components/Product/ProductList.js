import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppContext from "../AppContext/AppContext";
import { listProduct } from "./../../Redux/Action/ProductAction";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import ProductCard from "./ProductCard";
const ProductList = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);

  return (
    <div className="product-list">
      <Swiper
        grabCursor={"true"}
        spaceBetween={5}
        slidesPerView={"auto"}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {products.map((product) => {
          return (
            <SwiperSlide>
              <ProductCard product={product} key={product._id} />;
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* {products.map((product) => {
        <ProductCard product={product} key={product._id} />;
      })} */}
    </div>
  );
};

export default ProductList;
