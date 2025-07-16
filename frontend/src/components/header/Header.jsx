import React, { useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toggleShowSearch } from "../../features/ProductSlice";
import SideBar from "./SideBar";
import { useDispatch } from "react-redux";
const Header = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="w-full flex justify-between items-center py-5 font-medium">
      <div
        onClick={() => {
          navigate("/home");
        }}
      >
        <img src={assets.logo} alt="" className="w-36" />
      </div>

      <ul className="hidden text-gray-700 gap-5 sm:flex">
        <NavLink to="/home" className="flex gap-1 items-center flex-col ">
          <p className="text-[16px]">HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collections" className="flex items-center gap-1 flex-col">
          <p className="text-[16px]">COLLECTIONS</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex items-center gap-1 flex-col ">
          <p className="text-[16px]">CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex items-center gap-1 flex-col">
          <p className="text-[16px]">ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img
          src={assets.search_icon}
          alt="search-icon"
          className="w-5 cursor-pointer"
          onClick={() => {
            dispatch(toggleShowSearch());
          }}
        />
        <div className="group relative">
          <img
            src={assets.profile_icon}
            alt="profile-icon"
            className="w-5 cursor-pointer"
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded-xl">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">LogOut</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            alt="cart-icon"
            className="w-5 cursor-pointer"
          />
          <p className="absolute -top-2 -right-2 w-4 h-4 bg-black text-white text-[8px] rounded-full flex items-center justify-center">
            10
          </p>
        </Link>
        <img
          onClick={() => {
            setVisible(true);
          }}
          src={assets.menu_icon}
          alt=""
          className="sm:hidden w-5"
        />
      </div>

      {visible && <SideBar setVisible={setVisible} />}
    </div>
  );
};

export default Header;
