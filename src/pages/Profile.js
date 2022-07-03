import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetail } from "../Redux/Action/UserAction";
import { Link } from "react-router-dom";
import { SidebarProfile } from "./SidebarProfile";
import EditIcon from "@mui/icons-material/Edit";

const Profile = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { order } = useSelector((state) => state.orderDetails);
  const { user } = userLogin;

  useEffect(() => {
    dispatch(getUserDetail("profile"));
  }, [dispatch]);

  return (
    <>
      {/* <MetaData title="My Profile" /> */}

      <main className="w-full mt-12 sm:mt-0">
        {/* <!-- row --> */}
        <div className="flex gap-3.5 sm:w-11/12 sm:mt-4 m-auto mb-7">
          {/* <Sidebar activeTab={"profile"} /> */}
          <SidebarProfile activeTab={"profile"} />
          {/* <!-- details column --> */}
          <div className="flex-1 overflow-hidden shadow bg-white">
            {/* <!-- edit info container --> */}
            <div className="flex flex-col gap-12 m-4 sm:mx-8 sm:my-6">
              {/* <!-- personal info --> */}
              <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
                <div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-[150px]">
                  <p className="text-lg  font-bold leading-none uppercase mt-2 ml-2">
                    Thông tin cá nhân &#160;
                    <Link to="">
                      <EditIcon />
                    </Link>
                  </p>
                  <p className="text-sm  leading-3 text-gray-800 mt-2 ml-2">
                    {user.userName}
                  </p>
                  <p className="text-sm  leading-3 text-gray-800 mt-2 ml-2">
                    {user.email}
                  </p>
                </div>

                <div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-[150px]">
                  <p className="text-lg  font-bold leading-none uppercase mt-2 ml-2">
                    Thông tin địa chỉ&#160;
                    <Link to="">
                      <EditIcon />
                    </Link>
                  </p>
                  <p className="text-sm  leading-3 text-gray-800 mt-2 ml-2">
                    {shippingInfo.address}
                  </p>
                  <p className="text-sm  leading-3 text-gray-800 mt-2 ml-2">
                    {shippingInfo.phone}
                  </p>
                </div>

                <div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-[150px]" />
              </div>
            </div>
            {/* <!-- edit info container --> */}

            <img
              draggable="false"
              className="w-full object-contain"
              src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/myProfileFooter_4e9fe2.png"
              alt="footer"
            />
          </div>
          {/* <!-- details column --> */}
        </div>
      </main>
    </>
  );
};

export default Profile;
