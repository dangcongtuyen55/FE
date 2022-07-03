import React from "react";
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import "moment/locale/vi";

export const ReviewCard = ({ review }) => {
  const { product } = useSelector((state) => state.productDetails);
  const options = {
    value: review.rating,
    readOnly: true,
    precision: 0.5,
  };
  const date = new Date(review.createdAt);

  return (
    // <div className="reviewCard">
    //   {/* <img src={profilePng} alt="User" /> */}
    //   {/* <p>{review.name}</p>
    //   <ReactStars {...options} />
    //   <span className="reviewCardComment">{review.comment}</span> */}

    // </div>
    <div className="mt-5 flex flex-col w-full mx-auto divide-y rounded-md bg-white">
      <div className="flex justify-between p-4">
        <div className="flex space-x-4">
          {/* <div>
              <img
                src="https://source.unsplash.com/100x100/?portrait"
                alt=""
                className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
              />
            </div> */}
          <div>
            <span className="text-lg dark:text-gray-400">
              <ReactStars {...options} />
            </span>
            <span className="font-bold text-xs text-gray-500">
              by {review.name}
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-2 dark:text-yellow-500">
          <span className="text-xs font-bold">
            {/* {moment(review.createdAt).format("lll")} */}
            {`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}
          </span>
        </div>
      </div>
      <div className="ml-4 space-y-2 text-sm dark:text-gray-400">
        <p> {review.comment}</p>
      </div>
    </div>
  );
};
