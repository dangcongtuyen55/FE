import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import axios from "axios";
import AppContext from "../AppContext/AppContext";
import BannerCard from "./BannerCard";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/navigation";
import "./banner.scss";
import { listBanner } from "./../../Redux/Action/BannerAction";

const BannerList = () => {
  // const { state, dispatch } = useContext(AppContext);
  // const { banners } = state;
  // const getAllBanners = useCallback(async () => {
  //   try {
  //     const options = {
  //       method: "GET",
  //       url: "/api/v1/banner",
  //     };
  //     const response = await axios(options);
  //     const banners = response.data.data.banners;

  //     dispatch({ type: "GET_ALL_BANNERS", payload: banners });
  //   } catch (error) {
  //     // console.log(error);
  //   }
  // }, [dispatch]);
  // useEffect(() => {
  //   getAllBanners();
  // }, [getAllBanners]);
  const dispatch = useDispatch();

  const bannerList = useSelector((state) => state.bannerList);
  const { loading, error, banners } = bannerList;

  useEffect(() => {
    dispatch(listBanner());
  }, [dispatch]);

  return (
    <Swiper
      grabCursor={"true"}
      spaceBetween={20}
      slidesPerView={"auto"}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      {banners.map((banner) => {
        console.log(banners);
        return (
          <SwiperSlide>
            <BannerCard banner={banner} key={banner._id} />
          </SwiperSlide>
        );
      })}
      {/* <SwiperSlide>
        <BannerCard />
      </SwiperSlide> */}
    </Swiper>
  );
};

export default BannerList;
