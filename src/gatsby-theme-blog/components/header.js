import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Logo from '../../assets/images/NPIExcellence.png';
import '../../css/app.css';
import { Link } from 'gatsby';

const header = () => {
  const [open, setMenu] = React.useState(false);
  const handleMenu = () => {
    setMenu(!open);
  };

  return (
    <header className="sticky top-0 bg-white z-10">
      <div className="container sm:flex flex-row flex justify-end md:justify-between md:items-center lg:justify-between lg:items-center mx-auto py-4 px-8">
        <div className="flex items-center text-2xl">
          <div className="">
            <Link to="/">
              <img src={Logo} alt="NPI Excellence" className="m-0" />
            </Link>
          </div>
        </div>
        <div className="flex mt-4 sm:mt-0">
          {open ? (
            <div class="relative inline-block text-left">
              <div>
                <button
                  onClick={handleMenu}
                  type="button"
                  class=" hover:bg-gray-100 inline-flex justify-center w-full px-4 py-2 bg-white text-xs md:text-sm lg:text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                  id="options-menu"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  Who We Are
                  <svg
                    class="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              <div
                class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <div class="py-1" role="none">
                  <Link
                    to="/#features"
                    class="block px-4 py-2 text-xs md:text-sm lg:text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 "
                    role="menuitem"
                  >
                    About
                  </Link>
                  <Link
                    to="/#philosophy"
                    class="block px-4 py-2 text-xs md:text-sm lg:text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Philosophy
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div class="relative inline-block text-left">
              <div>
                <button
                  onClick={handleMenu}
                  type="button"
                  class="font-sans hover:bg-gray-100 inline-flex justify-center w-full px-4 py-2 bg-white text-xs md:text-sm lg:text-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                  id="options-menu"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  Who We Are
                  <svg
                    class="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}

          <Link
            className="font-sans block px-4 py-2 text-xs md:text-sm lg:text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            to="/services"
          >
            Services
          </Link>
          <Link
            className="font-sans block px-4 py-2 text-xs md:text-sm lg:text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            to="/blog"
          >
            Blog
          </Link>
          <Link
            className="block px-4 py-2 text-xs md:text-sm lg:text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            to="/#contact"
          >
            Contact
          </Link>
        </div>

        {/*         
        // <div className="hidden md:block">
        //   <Button className="text-sm">Contact</Button>
        // </div> */}
      </div>
    </header>
  );
};

export default header;
