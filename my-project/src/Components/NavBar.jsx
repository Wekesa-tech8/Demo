import React from 'react';
import { IoMdMenu } from 'react-icons/io'; // Ensure you have react-icons installed

const NavBarMenu = []; // Fixed invalid variable declaration

const NavBar = () => {
  return (
    <nav>
      <div className="container py-10 flex justify-between items-center">
        {/* Logo section */}
        <div>
          <h1 className="font-bold text-2xl">The Coding Journey</h1>
        </div>

        {/* Menu section */}
        <div className="hidden lg:block">
          {/* Add menu items dynamically if needed */}
        </div>

        {/* Mobile Hamburger menu section */}
        <div className="lg:hidden">
          <IoMdMenu className="text-4xl" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
