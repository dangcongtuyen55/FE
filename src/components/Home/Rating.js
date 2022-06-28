import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Rating({ value, text }) {
  return (
    <div className="rating bg-white">
      <i
        className={
          value >= 3
            ? "fa-solid fa-star"
            : value >= 2.5
            ? "fa-solid fa-star-sharp-half"
            : "fa-solid fa-star"
        }
      ></i>
      <i
        className={
          value >= 2
            ? "fa-solid fa-star"
            : value >= 1.5
            ? "fa-solid fa-star-sharp-half"
            : "fa-solid fa-star"
        }
      ></i>

      {/* <i
        className={
          value >= 1 ? (
            <FontAwesomeIcon icon="fa-solid fa-star" />
          ) : value >= 0.5 ? (
            <FontAwesomeIcon icon="fa-solid fa-star-sharp-half" />
          ) : (
            <FontAwesomeIcon icon="fa-solid fa-star" />
          )
        }
      ></i>
      <i
        className={
          value >= 2 ? (
            <FontAwesomeIcon icon="fa-solid fa-star" />
          ) : value >= 1.5 ? (
            <FontAwesomeIcon icon="fa-solid fa-star-sharp-half" />
          ) : (
            <FontAwesomeIcon icon="fa-solid fa-star" />
          )
        }
      ></i>
      <i
        className={
          value >= 3 ? (
            <FontAwesomeIcon icon="fa-solid fa-star" />
          ) : value >= 2.5 ? (
            <FontAwesomeIcon icon="fa-solid fa-star-sharp-half" />
          ) : (
            <FontAwesomeIcon icon="fa-solid fa-star" />
          )
        }
      ></i>
      <i
        className={
          value >= 4 ? (
            <FontAwesomeIcon icon="fa-solid fa-star" />
          ) : value >= 3.5 ? (
            <FontAwesomeIcon icon="fa-solid fa-star-sharp-half" />
          ) : (
            <FontAwesomeIcon icon="fa-solid fa-star" />
          )
        }
      ></i>
      <i
        className={
          value >= 5 ? (
            <FontAwesomeIcon icon="fa-solid fa-star" />
          ) : value >= 4.5 ? (
            <FontAwesomeIcon icon="fa-solid fa-star-sharp-half" />
          ) : (
            <FontAwesomeIcon icon="fa-solid fa-star" />
          )
        }
      ></i> */}
      <span>{text && text}</span>
    </div>
  );
}
