import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { useParams } from "react-router-dom";
import { Autoplay } from "swiper";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { listProduct } from "../../Redux/Action/ProductAction";
import { listCategory } from "../../Redux/Action/CategoryAction";
import { ItemCard } from "./ItemCard";
import ProductCard from "./ProductCard";
export const SliderProduct = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const categoryList = useSelector((state) => state.categoryList);
  const { categories } = categoryList;
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  console.log("TCL: SliderProduct -> products", products && products.name);

  const keyword = params.keyword;
  const [currentPage, setCurrentPage] = useState(1);

  const [category, setCategory] = useState("");
  useEffect(() => {
    dispatch(listCategory());
  }, [dispatch]);
  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);
  return (
    <div className="product-list">
      {categories.map((data) => (
        <>
          <span className="bg-red-600">{data.name}</span>

          <Swiper
            grabCursor={"true"}
            spaceBetween={-40}
            slidesPerView={"auto"}
            navigation={true}
            // autoplay={{
            //   delay: 1500,
            //   disableOnInteraction: false,
            // }}
            modules={[Autoplay, Navigation]}
          >
            {products.map((item) => {
              if (item.category._id === data._id) {
                return (
                  <SwiperSlide>
                    <ItemCard item={item} key={item._id} />
                  </SwiperSlide>
                );
              }
            })}
          </Swiper>

          {/* {products.map((product) => {
        <ProductCard product={product} key={product._id} />;
      })} */}
        </>
      ))}
    </div>
  );
};
