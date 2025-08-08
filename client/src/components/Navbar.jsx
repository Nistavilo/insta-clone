import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { Avatar } from "@mui/material";

 const Navbar = () => {
  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-5xl mx-auto flex items-center justify-between py-2 px-4">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="logo"
            className="h-8 w-auto"
          />
        </Link>

        {/* Search (md ve üzeri görünür) */}
        <div className="relative hidden md:block">
          <div className="flex items-center bg-gray-100 rounded-md px-3 py-1">
            <SearchIcon className="text-gray-500 text-sm" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-sm px-2 w-48"
            />
          </div>
        </div>

        {/* Iconlar */}
        <div className="flex items-center gap-4 text-gray-800">
          <Link to="/" className="hover:text-gray-600 transition-colors">
            <HomeOutlinedIcon className="cursor-pointer" />
          </Link>
          <Link to="/messenger" className="hover:text-gray-600 transition-colors">
            <ChatOutlinedIcon className="cursor-pointer" />
          </Link>
          <button className="cursor-pointer hover:text-gray-600 transition-colors">
            <AddBoxOutlinedIcon />
          </button>
          <Link to="/profile/username" className="hover:opacity-80 transition-opacity">
            <Avatar
              alt="User"
              src="https://via.placeholder.com/150"
              sx={{ width: 28, height: 28 }}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;