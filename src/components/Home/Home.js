import React from "react";
import BannerLayout from "../Banner/BannerLayout";

import ProductLayout from "../Product/ProductLayout";
import { useParams, Link } from "react-router-dom";
import { AllProduct } from "../Product/AllProduct";
import { Sidebar } from "../Sidebar/Sidebar";

const Home = () => {
  const keyword = useParams();
  return (
    <div>
      <BannerLayout />
      <ProductLayout />

      <AllProduct keyword={keyword} />
    </div>
  );
};

export default Home;
