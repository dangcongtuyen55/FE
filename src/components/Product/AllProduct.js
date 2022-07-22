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
import AddIcon from "@mui/icons-material/Add";
import { listCategory } from "../../Redux/Action/CategoryAction";
// import { categories } from "../../utils/constants";

// const categories = [
//   "Truyện",
//   "Tiểu thuyết",
//   "Laptops",
//   "Sach",
//   "Appliances",
//   "Home",
// ];
export const AllProduct = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const location = useLocation();
  // const categoryList = useSelector((state) => state.categoryList);
  // const categories = categoryList;
  const categoryList = useSelector((state) => state.categoryList);
  const { categories } = categoryList;
  console.log("TCL: AllProduct -> categories", categories);
  console.log("categoriesID", categories._id);

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, resultPerPage, productsCount } =
    productList;
  useEffect(() => {
    dispatch(listCategory());
  }, [dispatch]);
  const keyword = params.keyword;
  const [currentPage, setCurrentPage] = useState(1);

  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState(0);
  const [categoryToggle, setCategoryToggle] = useState(true);
  const [ratingsToggle, setRatingsToggle] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  useEffect(() => {
    dispatch(listProduct(keyword, currentPage, category));
  }, [dispatch, keyword, currentPage, category]);

  return (
    // <div class="max-w-2xl mx-auto  sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 bg-white">
    //   <div className="flex">
    //     {/* Sidebar */}
    //     <div className="flex flex-col gap-2 py-3 text-sm overflow-hidden">
    //       {/* category filter */}
    //       <div className="flex flex-col border-b px-4">
    //         <div
    //           className="flex justify-between cursor-pointer py-2 pb-4 items-center"
    //           onClick={() => setCategoryToggle(!categoryToggle)}
    //         >
    //           <p className="font-medium text-xs uppercase">Category</p>
    //           {categoryToggle ? (
    //             <ExpandLessIcon sx={{ fontSize: "20px" }} />
    //           ) : (
    //             <ExpandMoreIcon sx={{ fontSize: "20px" }} />
    //           )}
    //         </div>
    //         <div className="flex flex-col border-b px-4">
    //           <div
    //             className="flex justify-between cursor-pointer py-2 pb-4 items-center"
    //             onClick={() => setCategoryToggle(!categoryToggle)}
    //           >
    //             <p className="font-medium text-xs uppercase">Category</p>
    //             {categoryToggle ? (
    //               <ExpandLessIcon sx={{ fontSize: "20px" }} />
    //             ) : (
    //               <ExpandMoreIcon sx={{ fontSize: "20px" }} />
    //             )}
    //           </div>
    //           {categoryToggle && (
    //             <div className="flex flex-col pb-1">
    //               <FormControl>
    //                 <RadioGroup
    //                   aria-labelledby="category-radio-buttons-group"
    //                   onChange={(e) => setCategory(e.target.value)}
    //                   name="category-radio-buttons"
    //                   value={category}
    //                 >
    //                   {categories.map((item) => (
    //                     <FormControlLabel
    //                       value={item._id}
    //                       control={<Radio size="small" />}
    //                       label={
    //                         <span className="text-sm" key={item._id}>
    //                           {item.name}
    //                         </span>
    //                       }
    //                     />
    //                   ))}
    //                 </RadioGroup>
    //               </FormControl>
    //             </div>
    //           )}
    //         </div>

    //       </div>
    //       {/* category filter */}

    //       {/* ratings filter */}
    //       <div className="flex flex-col border-b px-4">
    //         <div
    //           className="flex justify-between cursor-pointer py-2 pb-4 items-center"
    //           onClick={() => setRatingsToggle(!ratingsToggle)}
    //         >
    //           <p className="font-medium text-xs uppercase">ratings</p>
    //           {ratingsToggle ? (
    //             <ExpandLessIcon sx={{ fontSize: "20px" }} />
    //           ) : (
    //             <ExpandMoreIcon sx={{ fontSize: "20px" }} />
    //           )}
    //         </div>

    //         {ratingsToggle && (
    //           <div className="flex flex-col pb-1">
    //             <FormControl>
    //               <RadioGroup
    //                 aria-labelledby="ratings-radio-buttons-group"
    //                 onChange={(e) => setRatings(e.target.value)}
    //                 value={ratings}
    //                 name="ratings-radio-buttons"
    //               >
    //                 {[4, 3, 2, 1].map((el, i) => (
    //                   <FormControlLabel
    //                     value={el}
    //                     key={i}
    //                     control={<Radio size="small" />}
    //                     label={
    //                       <span className="flex items-center text-sm">
    //                         {el}
    //                         <StarIcon sx={{ fontSize: "12px", mr: 0.5 }} /> &
    //                         above
    //                       </span>
    //                     }
    //                   />
    //                 ))}
    //               </RadioGroup>
    //             </FormControl>
    //           </div>
    //         )}
    //       </div>
    //       {/* ratings filter */}
    //     </div>

    //     {/* List Product */}
    //     <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
    //       {products.map((product) => (
    //         <ProductCard product={product} key={product._id} />
    //       ))}
    //     </div>
    //   </div>

    //   {!loading && products.length === 0 && (
    //     <div className="flex flex-col items-center justify-center gap-3 bg-white shadow-sm rounded-sm p-6 sm:p-16">
    //       <img
    //         draggable="false"
    //         className="w-1/2 h-44 object-contain"
    //         src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/error-no-search-results_2353c5.png"
    //         alt="Search Not Found"
    //       />
    //       <h1 className="text-2xl font-medium text-gray-900">
    //         Xin lỗi, không có kết quả nào được tìm thấy!
    //       </h1>
    //       <p className="text-xl text-center text-primary-grey">
    //         Vui lòng kiểm tra chính tả hoặc thử tìm kiếm thứ gì đó khác
    //       </p>
    //     </div>
    //   )}
    //   <div className="flex justify-center mt-5">
    //     {productsCount > resultPerPage && (
    //       <Pagination
    //         count={Number(((productsCount + 6) / resultPerPage).toFixed())}
    //         page={currentPage}
    //         onChange={(e, val) => setCurrentPage(val)}
    //         color="primary"
    //         variant="outlined"
    //         shape="rounded"
    //       />
    //     )}
    //   </div>
    // </div>

    <main className="max-w-2xl mx-auto px-4 lg:max-w-7xl lg:px-8">
      {/* <div className="border-b border-gray-200 pt-24 pb-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
          New Arrivals
        </h1>
        <p className="mt-4 text-base text-gray-500">
          Checkout out the latest release of Basic Tees, new and improved with
          four openings!
        </p>
      </div> */}

      <div className="pt-12 pb-24 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
        <aside>
          <h2 className="sr-only">Filters</h2>

          <button
            type="button"
            className="inline-flex items-center lg:hidden"
            onClick={() => setMobileFiltersOpen(true)}
          >
            <span className="text-sm font-medium text-gray-700">Filters</span>
            <AddIcon
              className="flex-shrink-0 ml-1 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </button>

          <div className="hidden lg:block">
            <form className="divide-y divide-gray-200 space-y-10">
              {categoryToggle && (
                <div className="flex flex-col pb-1">
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="category-radio-buttons-group"
                      onChange={(e) => setCategory(e.target.value)}
                      name="category-radio-buttons"
                      value={category}
                    >
                      {categories.map((item) => (
                        <FormControlLabel
                          value={item._id}
                          control={<Radio size="small" />}
                          label={
                            <span className="text-sm" key={item._id}>
                              {item.name}
                            </span>
                          }
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                </div>
              )}
            </form>
          </div>
        </aside>

        <section
          aria-labelledby="product-heading"
          className="mt-6 lg:mt-0 lg:col-span-2 xl:col-span-3"
        >
          <h2 id="product-heading" className="sr-only">
            Products
          </h2>

          <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard product={product} />
            ))}

            {!loading && products.length === 0 && (
              <div className="mt-6 lg:mt-0 lg:col-span-2 xl:col-span-3 text-center">
                <img
                  draggable="false"
                  className="w-full h-44 object-contain "
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
          </div>
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
        </section>
      </div>
    </main>
  );
};
