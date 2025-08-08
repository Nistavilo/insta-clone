import React from "react";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        alt="logo"
        className="h-8 w-auto"
      />
    </Link>
  );
};
