import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { useParams } from "react-router-dom";
import { Autoplay } from "swiper";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { listProduct } from "../../Redux/Action/ProductAction";
import { listCategory } from "../../Redux/Action/CategoryAction";
import { ItemCard } from "./ItemCard";
import ProductCard from "./ProductCard";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

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
    // <div className="product-list">
    //   {categories.map((data) => (
    //     <>
    //       <span className="bg-red-600">{data.name}</span>

    //       <Swiper
    //         // grabCursor={"true"}
    //         // spaceBetween={2}
    //         // slidesPerView={"auto"}
    //         // autoplay={{
    //         //   delay: 1500,
    //         //   disableOnInteraction: false,
    //         // }}
    //         // modules={[Autoplay]}
    //         slidesPerView={10}
    //         spaceBetween={30}
    //         freeMode={true}
    //         pagination={{
    //           clickable: true,
    //         }}
    //         modules={[FreeMode, Pagination]}
    //         className="mySwiper"
    //       >
    //         {products.map((item) => {
    //           return (
    //             <SwiperSlide>
    //               {item.category._id === data._id ? (
    //                 <>
    //                   {/* <span>{item.name}</span>
    //                       <img src={item.product_url} alt="" /> */}
    //                   {/* <ItemCard product={data} /> */}
    //                   <ItemCard item={item} key={item._id} />
    //                 </>
    //               ) : (
    //                 <></>
    //               )}
    //             </SwiperSlide>
    //           );
    //         })}
    //       </Swiper>

    //       {/* {products.map((product) => {
    //     <ProductCard product={product} key={product._id} />;
    //   })} */}
    //     </>
    //   ))}
    // </div>
    <>
      {categories.map((data) => (
        <>
          <span className="bg-red-600">{data.name}</span>
          <div className="container mx-auto">
            <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
              {/* Carousel for desktop and large size devices */}
              <CarouselProvider
                className="lg:block hidden"
                naturalSlideWidth={100}
                isIntrinsicHeight={true}
                totalSlides={12}
                visibleSlides={4}
                step={1}
                infinite={true}
              >
                <div className="w-full relative flex items-center justify-center">
                  <ButtonBack
                    role="button"
                    aria-label="slide backward"
                    className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                    id="prev"
                  >
                    <svg
                      width={8}
                      height={14}
                      viewBox="0 0 8 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 1L1 7L7 13"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </ButtonBack>
                  <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                    <Slider>
                      <div
                        id="slider"
                        className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                      >
                        {products.map((item) => (
                          <Slide>
                            {item.category._id === data._id ? (
                              <>
                                {/* <span>{item.name}</span>
                          <img src={item.product_url} alt="" /> */}
                                {/* <ItemCard product={data} /> */}
                                <ItemCard item={item} key={item._id} />
                              </>
                            ) : (
                              <></>
                            )}
                          </Slide>
                        ))}
                      </div>
                    </Slider>
                  </div>
                  <ButtonNext
                    role="button"
                    aria-label="slide forward"
                    className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                    id="next"
                  >
                    <svg
                      width={8}
                      height={14}
                      viewBox="0 0 8 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L7 7L1 13"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </ButtonNext>
                </div>
              </CarouselProvider>

              {/* Carousel for tablet and medium size devices */}
            </div>
          </div>
        </>
      ))}
    </>
  );
};
