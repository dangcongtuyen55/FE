import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { useSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { MinCatagory } from "../Layout/MinCatagory";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import StarIcon from "@mui/icons-material/Star";
import { Slider } from "@mui/material";
// import { categories } from "../../utils/constants";

export const Sidebar = () => {
  const dispatch = useDispatch();
  //   const { enqueueSnackbar } = useSnackbar();
  const params = useParams();
  const location = useLocation();
  const [price, setPrice] = useState([0, 200000]);
  const [category, setCategory] = useState(
    location.search ? location.search.split("=")[1] : ""
  );
  const [ratings, setRatings] = useState(0);

  const priceHandler = (e, newPrice) => {
    setPrice(newPrice);
  };

  const [categoryToggle, setCategoryToggle] = useState(true);
  const [ratingsToggle, setRatingsToggle] = useState(true);
  return (
    <div className="flex flex-col gap-2 py-3 text-sm overflow-hidden">
      {/* price slider filter */}
      <div className="flex flex-col gap-2 border-b px-4">
        <span className="font-medium text-xs">PRICE</span>

        <Slider
          value={price}
          onChange={priceHandler}
          valueLabelDisplay="auto"
          getAriaLabel={() => "Price range slider"}
          min={0}
          max={200000}
        />

        <div className="flex gap-3 items-center justify-between mb-2 min-w-full">
          <span className="flex-1 border px-4 py-1 rounded-sm text-gray-800 bg-gray-50">
            ₹{price[0].toLocaleString()}
          </span>
          <span className="font-medium text-gray-400">to</span>
          <span className="flex-1 border px-4 py-1 rounded-sm text-gray-800 bg-gray-50">
            ₹{price[1].toLocaleString()}
          </span>
        </div>
      </div>
      {/* price slider filter */}

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
                {/* {categories.map((el, i) => (
                  <FormControlLabel
                    value={el}
                    control={<Radio size="small" />}
                    label={
                      <span className="text-sm" key={i}>
                        {el}
                      </span>
                    }
                  />
                ))} */}
              </RadioGroup>
            </FormControl>
          </div>
        )}
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
                        <StarIcon sx={{ fontSize: "12px", mr: 0.5 }} /> & above
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
  );
};
