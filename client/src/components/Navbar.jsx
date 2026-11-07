import { useState } from "react";
import { GiAirplaneDeparture } from "react-icons/gi";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [selectDropdown, setSelectDropdown] = useState(false);

  return (
    <header className="bg-secondary text-white">
      <nav className="mx-auto max-w-screen-2xl py-4 md:px-8 px-2 flex items-center justify-between">
        {/* Left section: logo and icons */}
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center">
            <GiAirplaneDeparture size={30} className="mr-2" />
            <p className="text-lg font-bold font-secondary sm:block hidden">
              SkyFreight
            </p>
          </Link>
        </div>

        {/* Right section: links, user, and contact */}
        <div className="flex items-center gap-3 sm:gap-8">
          {/* Links */}
          <ul className=" gap-4 sm:gap-8 hidden sm:flex">
            <li>
              <Link to="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-primary">
                Services
              </Link>
            </li>
            <li>
              <Link to="/track" className="hover:text-primary">
                Track
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary">
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden text-xl"
            onClick={() => setSelectDropdown(!selectDropdown)}>
            {selectDropdown ? "X" : "☰"}
          </button>

          {/* Dropdown for Mobile */}
          {selectDropdown && (
            <div className="absolute top-16 right-0 w-48 bg-white shadow-md z-20 sm:hidden">
              <ul>
                <li>
                  <Link
                    to="/"
                    onClick={() => setSelectDropdown(false)}
                    className="block px-4 py-2 hover:bg-gray-200">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    onClick={() => setSelectDropdown(false)}
                    className="block px-4 py-2 hover:bg-gray-200">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    onClick={() => setSelectDropdown(false)}
                    className="block px-4 py-2 hover:bg-gray-200">
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/track"
                    onClick={() => setSelectDropdown(false)}
                    className="block px-4 py-2 hover:bg-gray-200">
                    Track
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    onClick={() => setSelectDropdown(false)}
                    className="block px-4 py-2 hover:bg-gray-200">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
