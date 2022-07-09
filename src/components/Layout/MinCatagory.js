import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { listCategory } from "../../Redux/Action/CategoryAction";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

export const MinCatagory = () => {
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categoryList);
  const categories = categoryList;
  console.log("TCL: MinCatagory -> categories", categories);
  const [categoryToggle, setCategoryToggle] = useState(true);
  const [category, setCategory] = useState("");
  useEffect(() => {
    dispatch(listCategory());
  }, [dispatch]);
  return (
    <section className="hidden sm:block bg-white w-full px-2 sm:px-12 overflow-hidden border-b mt-14">
      <div className="flex items-center justify-between p-0.5">
        {categoryToggle && (
          <div className="flex flex-col pb-1">
            <FormControl>
              <RadioGroup
                aria-labelledby="category-radio-buttons-group"
                onChange={(e) => setCategory(e.target.value)}
                name="category-radio-buttons"
                value={category}
              >
                <FormControlLabel
                  value={category}
                  control={<Radio size="small" />}
                  label={
                    <span className="text-sm" key={categories._id}>
                      {categories.name}
                    </span>
                  }
                />
              </RadioGroup>
            </FormControl>
          </div>
        )}
      </div>
    </section>
  );
};
