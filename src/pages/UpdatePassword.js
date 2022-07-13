import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { updatePassword } from "../Redux/Action/UserAction";
import { UPDATE_PASSWORD_RESET } from "../Redux/Constants/UserConstant";

export const UpdatePassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, isUpdated, loading } = useSelector((state) => state.profile);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const updatePasswordSubmit = (e) => {
    e.preventDefault();

    // const myForm = new FormData();

    // myForm.set("oldPassword", oldPassword);
    // myForm.set("newPassword", newPassword);
    // myForm.set("confirmPassword", confirmPassword);

    dispatch(updatePassword(oldPassword, newPassword, confirmPassword));
  };

  useEffect(() => {
    if (error) {
      alert("lỗi");
    }

    if (isUpdated) {
      alert("Updated Password Successfully");
      navigate("/profile");
      // dispatch({
      //   type: UPDATE_PASSWORD_RESET,
      // });
    }
  }, [dispatch, error, navigate, isUpdated]);

  return (
    <div className="updatePasswordContainer">
      <div className="updatePasswordBox">
        <h2 className="updatePasswordHeading">Update Profile</h2>

        <form className="updatePasswordForm" onSubmit={updatePasswordSubmit}>
          <div className="loginPassword">
            <input
              type="password"
              placeholder="Old Password"
              required
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>

          <div className="loginPassword">
            <input
              type="password"
              placeholder="New Password"
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="loginPassword">
            <input
              type="password"
              placeholder="Confirm Password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <input type="submit" value="Change" className="updatePasswordBtn" />
        </form>
      </div>
    </div>
  );
};
