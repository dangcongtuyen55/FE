import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { listCategory } from "../../Redux/Action/CategoryAction";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

export const MinCatagory = () => {
  const dispatch = useDispatch();
  // const categoryList = useSelector((state) => state.categoryList);
  // const categories = categoryList;
  const categoryList = useSelector((state) => state.categoryList);
  const { loading, error, categories } = categoryList;

  const [categoryToggle, setCategoryToggle] = useState(true);
  const [category, setCategory] = useState("");
  useEffect(() => {
    dispatch(listCategory());
  }, [dispatch, category]);
  console.log(category);
  return (
    <section className="hidden sm:block bg-white w-full px-2 sm:px-12 overflow-hidden border-b mt-14">
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
                {categories.map((item) => (
                  <FormControlLabel
                    value={item.name}
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
      </div>
    </section>
  );
};
