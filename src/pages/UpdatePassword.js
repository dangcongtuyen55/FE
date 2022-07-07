import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePassword } from "../Redux/Action/UserAction";

export const UpdatePassword = () => {
  const dispatch = useDispatch();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const updatePasswordSubmit = (e) => {
    e.preventDefault();
  };

  const myForm = new FormData();

  myForm.set("oldPassword", oldPassword);
  myForm.set("newPassword", newPassword);

  dispatch(updatePassword(myForm));

  return <div>UpdatePassword</div>;
};
