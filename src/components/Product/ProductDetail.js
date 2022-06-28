import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { litsProductDetail } from "../../Redux/Action/ProductAction";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { useNavigate } from "react-router";
import ReactStars from "react-rating-stars-component";

import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/navigation";
import "./product-slide.scss";
import { addToCart } from "../../Redux/Action/CartAction";

export const ProductDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = useSelector(
    (state) => state.productDetails
  );
  const options = {
    edit: false,
    color: "rgba(168, 168, 168)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    value: product.rating,
    isHalf: true,
  };
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => {
    if (product.quantity <= quantity) return;
    const qty = quantity + 1;
    setQuantity(qty);
  };
  const decreaseQuantity = () => {
    if (1 >= quantity) return;
    const qty = quantity - 1;
    setQuantity(qty);
  };
  const AddToCardHandle = () => {
    // e.preventDefault();
    // navigate(`/cart/${id}?qty=${qty}`);
    dispatch(addToCart(id, quantity));
    console.log("add to cart success");
  };

  console.log(id);
  useEffect(() => {
    dispatch(litsProductDetail(id));
    console.log(id);
  }, [dispatch, id]);
  const isQuantity = product.stock;

  // console.log(this.state);
  return (
    <>
      {loading ? (
        <span>loading</span>
      ) : (
        <div class="flex font-sans">
          <div class="flex-none w-[350px]  relative ml-5 mt-5">
            <Swiper
              loop={true}
              spaceBetween={10}
              modules={[FreeMode, Navigation, Thumbs]}
              className="h-[400px] border-2 border-gray-400 rounded-lg"
            >
              <SwiperSlide>
                <img
                  src={product.product_url}
                  alt=""
                  className="rounded-lg h-[380px] w-[330px] ml-2 mt-2"
                />
              </SwiperSlide>
            </Swiper>
            <Swiper
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              navigation={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="border-2 border-gray-400 mt-2 h-[105px] rounded-lg"
            >
              <SwiperSlide className="mt-1 ml-5 ">
                <img src={product.product_url} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div class="flex-auto p-6">
            <div class="flex flex-wrap">
              <h1 class="flex-auto text-4xl font-semibold text-light">
                {product.name}
              </h1>
            </div>
            <div class="flex flex-wrap">
              <ReactStars {...options} />
              <span>({product.numOfReviews} Reviews)</span>
            </div>
            <div class="text-lg font-semibold text-light">
              {/* kiểm tra nếu isQuantity có số lượng thì render ra số lượng còn không có số lượng thì = Hết hàng */}
              Số lượng: {isQuantity ? product.stock : "Hết hàng"}
            </div>
            <div class="flex-auto flex space-x-4 items-center  text-light">
              <div className="">
                {product.price}
              </div>
             
            </div>

            <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
              <div className="group-input flex ">
                <button
                  onClick={decreaseQuantity}
                  className="btn-minus border border-gray bg-white hover:bg-slate-100 rounded-l-lg  text-center"
                >
                  <MinusOutlined
                    style={{
                      width: "20px",
                      height: "20px",
                      marginBottom: "5px",
                    }}
                  />
                </button>
                <input
                  className="input w-[30px] text-center "
                  readOnly
                  type="number"
                  value={quantity}
                />

                <button
                  onClick={increaseQuantity}
                  className="btn-plus border border-gray bg-white hover:bg-slate-100 rounded-r-lg  text-center"
                >
                  <PlusOutlined
                    style={{
                      width: "20px",
                      height: "20px",
                      marginBottom: "5px",
                    }}
                  />
                </button>
              </div>
            </div>
            {product.stock ? (
              <div class="flex space-x-4 mb-6 text-sm font-medium">
                <div class="flex-auto flex space-x-4">
                  <button
                    onClick={AddToCardHandle}
                    class="h-10 px-6 font-semibold rounded-md bg-black text-white"
                    type="submit"
                  >
                    Chọn mua
                  </button>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      )}
    </>
  );
};
