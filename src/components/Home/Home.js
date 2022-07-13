import React from "react";
import BannerLayout from "../Banner/BannerLayout";

import ProductLayout from "../Product/ProductLayout";
import { useParams, Link } from "react-router-dom";
import { AllProduct } from "../Product/AllProduct";
import { Sidebar } from "../Sidebar/Sidebar";
import { SliderProduct } from "../Product/SliderProduct";
import { LayoutSilder } from "../Product/LayoutSilder";

const Home = () => {
  const keyword = useParams();
  return (
    <div>
      <BannerLayout />
      {/* <ProductLayout /> */}
      <LayoutSilder />
      {/* <SliderProduct /> */}
      {/* <AllProduct keyword={keyword} /> */}
    </div>
  );
};

export default Home;
