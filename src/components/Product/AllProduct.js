import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { listProduct } from "../../Redux/Action/ProductAction";
import ProductCard from "./ProductCard";
import Pagination from "@mui/material/Pagination";
import { Sidebar } from "../Sidebar/Sidebar";
import { MinCatagory } from "../Layout/MinCatagory";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Slider from "@mui/material/Slider";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import StarIcon from "@mui/icons-material/Star";
// import { categories } from "../../utils/constants";

const categories = [
  "Sách hay",
  "Sách kỹ năng sống",
  "Laptops",
  "Sach",
  "Appliances",
  "Home",
];
export const AllProduct = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const location = useLocation();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, resultPerPage, productsCount } =
    productList;
  const keyword = params.keyword;
  const [currentPage, setCurrentPage] = useState(1);

  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState(0);
  const [categoryToggle, setCategoryToggle] = useState(true);
  const [ratingsToggle, setRatingsToggle] = useState(true);

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  useEffect(() => {
    dispatch(listProduct(keyword, currentPage, category));
  }, [dispatch, keyword, currentPage, category]);

  return (
    <div class="max-w-2xl mx-auto  sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 bg-white">
      <MinCatagory />

      <div className="flex">
        {/* Sidebar */}
        <div className="flex flex-col gap-2 py-3 text-sm overflow-hidden">
          {/* category filter */}
          <div className="flex flex-col border-b px-4">
            <div
              className="flex justify-between cursor-pointer py-2 pb-4 items-center"
              onClick={() => setCategoryToggle(!categoryToggle)}
            >
              <p className="font-medium text-xs uppercase">Category</p>
              {categoryToggle ? (
                <ExpandLessIcon sx={{ fontSize: "20px" }} />
              ) : (
                <ExpandMoreIcon sx={{ fontSize: "20px" }} />
              )}
            </div>

            {categoryToggle && (
              <div className="flex flex-col pb-1">
                <FormControl>
                  <RadioGroup
                    aria-labelledby="category-radio-buttons-group"
                    onChange={(e) => setCategory(e.target.value)}
                    name="category-radio-buttons"
                    value={category}
                  >
                    {categories.map((el, i) => (
                      <FormControlLabel
                        value={el}
                        control={<Radio size="small" />}
                        label={
                          <span className="text-sm" key={i}>
                            {el}
                          </span>
                        }
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </div>
            )}
            {/* <ul className="categoryBox">
              {categories.map((category) => (
                // <li
                //   className="category-link"
                //   key={category}
                //   onClick={() => setCategory(category)}
                //   type="checkbox"
                // >
                //   {category}
                // </li>
                <div className="flex flex-col pb-1">
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="category-radio-buttons-group"
                      onChange={(e) => setCategory(e.target.value)}
                      name="category-radio-buttons"
                      value={category}
                    >
                      {categories.map((el, i) => (
                        <FormControlLabel
                          value={el}
                          control={<Radio size="small" />}
                          label={
                            <span className="text-sm" key={i}>
                              {el}
                            </span>
                          }
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                </div>
              ))}
            </ul> */}
          </div>
          {/* category filter */}

          {/* ratings filter */}
          <div className="flex flex-col border-b px-4">
            <div
              className="flex justify-between cursor-pointer py-2 pb-4 items-center"
              onClick={() => setRatingsToggle(!ratingsToggle)}
            >
              <p className="font-medium text-xs uppercase">ratings</p>
              {ratingsToggle ? (
                <ExpandLessIcon sx={{ fontSize: "20px" }} />
              ) : (
                <ExpandMoreIcon sx={{ fontSize: "20px" }} />
              )}
            </div>

            {ratingsToggle && (
              <div className="flex flex-col pb-1">
                <FormControl>
                  <RadioGroup
                    aria-labelledby="ratings-radio-buttons-group"
                    onChange={(e) => setRatings(e.target.value)}
                    value={ratings}
                    name="ratings-radio-buttons"
                  >
                    {[4, 3, 2, 1].map((el, i) => (
                      <FormControlLabel
                        value={el}
                        key={i}
                        control={<Radio size="small" />}
                        label={
                          <span className="flex items-center text-sm">
                            {el}
                            <StarIcon sx={{ fontSize: "12px", mr: 0.5 }} /> &
                            above
                          </span>
                        }
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </div>
            )}
          </div>
          {/* ratings filter */}
        </div>

        {/* List Product */}
        <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
      </div>

      {!loading && products.length === 0 && (
        <div className="flex flex-col items-center justify-center gap-3 bg-white shadow-sm rounded-sm p-6 sm:p-16">
          <img
            draggable="false"
            className="w-1/2 h-44 object-contain"
            src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/error-no-search-results_2353c5.png"
            alt="Search Not Found"
          />
          <h1 className="text-2xl font-medium text-gray-900">
            Xin lỗi, không có kết quả nào được tìm thấy!
          </h1>
          <p className="text-xl text-center text-primary-grey">
            Vui lòng kiểm tra chính tả hoặc thử tìm kiếm thứ gì đó khác
          </p>
        </div>
      )}
      <div className="flex justify-center mt-5">
        {productsCount > resultPerPage && (
          <Pagination
            count={Number(((productsCount + 6) / resultPerPage).toFixed())}
            page={currentPage}
            onChange={(e, val) => setCurrentPage(val)}
            color="primary"
            variant="outlined"
            shape="rounded"
          />
        )}
      </div>
    </div>
  );
};
