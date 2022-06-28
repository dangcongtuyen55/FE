import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetail } from "../Redux/Action/UserAction";

const Profile = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { user } = userLogin;

  useEffect(() => {
    dispatch(getUserDetail("profile"));
  }, [dispatch]);

  return (
    <div class="flex font-sans">
      {/* <div class="flex-none w-[150px] h-[150px] relative mt-5 ml-5">
        <div className="avatar ">
          <img
            src="https://scontent-nrt1-1.xx.fbcdn.net/v/t39.30808-6/273504835_3046072845710496_7903040882535119182_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dtrScFqQ8XAAX-Gg-GV&_nc_ht=scontent-nrt1-1.xx&oh=00_AT_J2kaJNjz92vYQLN_GliCcH6YyHTlcUuVeGcngYUYyCQ&oe=62B0EAF7"
            alt=""
            class="absolute inset-0 w-full h-full object-cover  rounded-full"
            loading="lazy"
          />
        </div>
      </div>
      <form class="flex-auto p-6">
        <div className="info w-[300px]">
          <label class="block">
            <span class=" text-sm font-medium text-slate-700">Họ và tên</span>
            <input
              type="text"
              name="name"
              class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Họ và tên"
            />
          </label>
          <label class="block">
            <span class=" text-sm font-medium text-slate-700">Nickname</span>
            <input
              type="text"
              name="nickname"
              class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Nickname"
            />
          </label>
          <label class="block">
            <span class=" text-sm font-medium text-slate-700">Địa chỉ</span>
            <input
              type="text"
              name="nickname"
              class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Địa chỉ"
            />
          </label>
          <label class="block">
            <span class=" text-sm font-medium text-slate-700">Ngày sinh</span>
            <div className="grid grid-cols-3 space-x-4">
              <select className="px-3 py-2 rounded-sm">
                <option>Ngày</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              <select className="px-3 py-2 rounded-sm">
                <option>Ngày</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              <select className="px-3 py-2 rounded-sm">
                <option>Năm</option>
                <option>1999</option>
                <option>2000</option>
                <option>2001</option>
                <option>2002</option>
                <option>2003</option>
              </select>
            </div>
          </label>
        </div>
        <div class="flex space-x-4">
          <div class="form-check form-check-inline">
            <input
              class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
            />
            <label
              class="form-check-label inline-block text-gray-800"
              for="inlineRadio10"
            >
              Name
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
            />
            <label
              class="form-check-label inline-block text-gray-800"
              for="inlineRadio20"
            >
              Nữ
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio3"
              value="option3"
            />
            <label class="form-check-label inline-block" for="inlineRadio30">
              Khác
            </label>
          </div>
        </div>
      </form> */}
      <h1>{user.name}</h1>
    </div>
  );
};

export default Profile;
