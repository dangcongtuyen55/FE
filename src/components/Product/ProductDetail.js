import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createOrderDetails,
  litsProductDetail,
} from "../../Redux/Action/ProductAction";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { useNavigate } from "react-router";
import ReactStars from "react-rating-stars-component";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/navigation";
import "./product-slide.scss";
import { addToCart } from "../../Redux/Action/CartAction";
import { PRODUCT_CREATE_REVIEW_RESET } from "../../Redux/Constants/ProductConstant";
import { ReviewCard } from "./ReviewCard";
import { Alert } from "@mui/material";
import {
  addFavoriteItemsToCart,
  deleteFavoriteItemsToCart,
} from "../../Redux/Action/FavoriteAction";

export const ProductDetail = () => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const productDetails = useSelector((state) => state.productDetails);
  const { cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.userLogin);
  const { loading, error, product } = useSelector(
    (state) => state.productDetails
  );
  const {
    createReview,
    loading: loadingReview,
    success: successReview,
    error: errorReview,
  } = useSelector((state) => state.createReview);

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
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("0");

  const handleDialogClose = () => {
    if (user) {
      setOpen(!open);
    } else {
      enqueueSnackbar("Bạn phải đăng nhập để đánh giá", {
        variant: "error",
      });
    }
  };

  const reviewSubmitHandler = () => {
    if (rating === 0 || !comment.trim()) {
      <Alert severity="error">This is an error alert — check it out!</Alert>;
      return;
    }
    // const formData = new FormData();
    // formData.set("rating", rating);
    // formData.set("comment", comment);
    // formData.set("productId", id);
    dispatch(createOrderDetails(id, { rating, comment }));
    setOpen(false);
  };

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
    // const existItem = cartItems.find((x) => x._id === product._id);
    dispatch(addToCart(id, { quantity, isUpdate: true }));
    enqueueSnackbar("Thêm vào giỏ hàng thành công", {
      variant: "success",
    });
  };
  const addToFavouriteHandler = () => {
    dispatch(addFavoriteItemsToCart(id, { quantity }));
    // toast.success("Product Added to Favourites");
    // alert("like success");
  };
  const { favoriteItems } = useSelector((state) => state.favorite);
  const itemFavorite = favoriteItems.some((i) => i.product === id);
  const addToWishlistHandler = () => {
    if (itemFavorite) {
      dispatch(deleteFavoriteItemsToCart(id));
      enqueueSnackbar("Đã xóa sản phẩm khỏi danh sách yêu thích", {
        variant: "success",
      });
      // toast.success("Đã xóa khỏi danh sách yêu thích");
    } else {
      dispatch(addFavoriteItemsToCart(id));
      enqueueSnackbar("Đã thêm sản phẩm vào danh sách yêu thích", {
        variant: "success",
      });
      // toast.success("Đã thêm vào danh sách yêu thích");
    }
  };
  useEffect(() => {
    if (successReview) {
      setRating(0);
      setComment("");
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }
    dispatch(litsProductDetail(id));
    console.log(id);
  }, [dispatch, id, successReview]);
  // const isQuantity = product.stock;

  // console.log(this.state);
  return (
    <>
      {loading ? (
        <span>loading</span>
      ) : (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
          <div className="flex justify-center items-center lg:flex-row flex-col gap-8">
            {/* <!-- Description Div --> */}

            <div className="  w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
              <div className="flex flex-row justify-between  mt-5">
                <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4">
                  {product.name}
                </h2>
                <span
                  onClick={addToWishlistHandler}
                  className={`${
                    itemFavorite
                      ? "text-red-500"
                      : "hover:text-red-500 text-gray-300"
                  } cursor-pointer; mt-6`}
                >
                  <FavoriteIcon sx={{ fontSize: "30px" }} />
                </span>
              </div>

              <div className=" flex flex-row justify-between  mt-5">
                <div className=" flex flex-row space-x-3">
                  <ReactStars {...options} />
                </div>
                <p className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-700 hover:underline hover:text-gray-800 duration-100 cursor-pointer">
                  {product.numOfReviews} Đánh giá
                </p>
              </div>

              <p className=" font-normal text-base leading-6 text-gray-600 mt-7">
                {product.description}
              </p>
              <p className=" font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 ">
                {`${product.price?.toLocaleString()} ₫`}
              </p>

              <div className="lg:mt-11 mt-10">
                <div className="flex flex-row justify-between">
                  <p className=" font-medium text-base leading-4 text-gray-600">
                    Chọn số lượng
                  </p>
                  <div className="flex">
                    <span
                      onClick={decreaseQuantity}
                      className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-r-0 w-7 h-7 flex items-center justify-center pb-1"
                    >
                      -
                    </span>
                    <input
                      id="counter"
                      aria-label="input"
                      className="border border-gray-300 h-[28px] text-center w-14 pb-1 "
                      type="text"
                      value={quantity}
                      onChange={(e) => e.target.value}
                    />
                    <span
                      onClick={increaseQuantity}
                      className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-l-0 w-7 h-7 flex items-center justify-center pb-1 "
                    >
                      +
                    </span>
                  </div>
                </div>
                <hr className=" bg-gray-200 w-full my-2" />
                {/* <div className=" flex flex-row justify-between items-center mt-4">
                            <p className="font-medium text-base leading-4 text-gray-600">Dimensions</p>
                            <svg onClick={() => setRotate(!rotate)} id="rotateSVG" className={"focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer transform " + (rotate ? "rotate-180" : "rotate-0")} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div> */}
                {/* <div
                  className="wishlist"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    padding: "15px 5px",
                  }}
                  onClick={addToWishlistHandler}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-heart"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
                  </svg>
                  <span
                    className="cartBtn"
                    style={{ opacity: 0.7, padding: "0px 5px" }}
                  >
                    Add to wishlist
                  </span>
                </div> */}

                {/* <hr className=" bg-gray-200 w-full mt-4" /> */}
              </div>

              <button
                onClick={AddToCardHandle}
                type="submit"
                className="focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 lg:mt-12 mt-6"
              >
                Giỏ hàng
              </button>
            </div>

            {/* <!-- Preview Images Div For larger Screen--> */}

            <div className=" w-full sm:w-96 md:w-8/12  lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
              <div className=" w-full lg:w-8/12 bg-gray-100 flex justify-center items-center">
                <img src={product.product_url} alt="Wooden Chair Previw" />
              </div>
              <div className=" w-full lg:w-4/12 grid lg:grid-cols-1 sm:grid-cols-4 grid-cols-2 gap-6">
                <div className="bg-gray-100 flex justify-center items-center py-4">
                  <img
                    src={product.product_url1}
                    alt="Wooden chair - preview 1"
                  />
                </div>
                <div className="bg-gray-100 flex justify-center items-center py-4">
                  <img
                    src={product.product_url2}
                    alt="Wooden chair - preview 2"
                  />
                </div>
                <div className="bg-gray-100 flex justify-center items-center py-4">
                  <img
                    src={product.product_url3}
                    alt="Wooden chair- preview 3"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center border-b px-6 py-4">
              <h1 className="text-2xl font-medium">Đánh giá & Nhận xét</h1>
              <button
                onClick={handleDialogClose}
                className="shadow bg-black text-white px-4 py-2 rounded-sm hover:bg-orange-400"
              >
                Đánh giá
              </button>
            </div>
            <div>
              <Dialog
                aria-labelledby="review-dialog"
                open={open}
                onClose={handleDialogClose}
              >
                <DialogTitle className="border-b">
                  Xác nhận đánh giá
                </DialogTitle>
                <DialogContent className="flex flex-col m-1 gap-4">
                  <Rating
                    onChange={(e) => setRating(e.target.value)}
                    value={rating}
                    size="large"
                    precision={0.5}
                  />
                  <TextField
                    label="Nhận xét"
                    multiline
                    rows={3}
                    sx={{ width: 400 }}
                    size="small"
                    variant="outlined"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </DialogContent>
                <DialogActions>
                  <button
                    onClick={handleDialogClose}
                    className="py-2 px-6 rounded shadow bg-white border border-red-500 hover:bg-red-100 text-red-600 uppercase"
                  >
                    Hủy
                  </button>
                  <button
                    onClick={reviewSubmitHandler}
                    className="py-2 px-6 rounded bg-green-600 hover:bg-green-700 text-white shadow uppercase"
                  >
                    Xác nhận
                  </button>
                </DialogActions>
              </Dialog>
            </div>
          </div>
          {product.reviews && product.reviews[0] ? (
            <div className="reviews">
              {product.reviews &&
                product.reviews.map((review) => (
                  <ReviewCard key={review._id} review={review} />
                ))}
            </div>
          ) : (
            <div className="w-80">
              <Alert severity="error">Chưa có đánh giá</Alert>
            </div>
          )}
        </div>
      )}
    </>
  );
};
