import React from 'react';
import SplitSection from '../components/SplitSection';
import SvgCharts from '../svg/SvgCharts';
import Footer from '../components/layout/Footer';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Logo from '../NPIExcellence.png';

const Services = () => {
  const [open, setMenu] = React.useState(false);
  const handleMenu = () => {
    setMenu(!open);
  };
  return (
    <>
      <header className="sticky top-0 bg-white ">
        <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
          <div className="flex items-center text-2xl">
            <div className="mr-20">
              <AnchorLink href="#">
                <img src={Logo} alt="NPI Excellence" className="logo" />
              </AnchorLink>
            </div>
          </div>
          <div className="flex mt-4 sm:mt-0">
            {open ? (
              <div class="relative inline-block text-left">
                <div>
                  <button
                    onClick={handleMenu}
                    type="button"
                    class=" hover:bg-gray-100 inline-flex justify-center w-full px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
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
                    <AnchorLink
                      href="#features"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      About
                    </AnchorLink>
                    <AnchorLink
                      href="#services"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Philosophy
                    </AnchorLink>
                  </div>
                </div>
              </div>
            ) : (
              <div class="relative inline-block text-left">
                <div>
                  <button
                    onClick={handleMenu}
                    type="button"
                    class="hover:bg-gray-100 inline-flex justify-center w-full px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
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

            <AnchorLink
              className="font-sans block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              href="#services"
            >
              Services
            </AnchorLink>
            <AnchorLink
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              href="#stats"
            >
              Contact
            </AnchorLink>
            <AnchorLink
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              href="#testimonials"
            >
              Blog
            </AnchorLink>
          </div>

          {/*         
        // <div className="hidden md:block">
        //   <Button className="text-sm">Contact</Button>
        // </div> */}
        </div>
      </header>
      <SplitSection
        primarySlot={
          <div className="lg:pr-32 xl:pr-48">
            <h3 className="text-3xl font-semibold leading-tight">
              Multi-Generational Product Planning
            </h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Processes and tools to drive a strategic and market led approach to new product
              development that aligns to your business strategy. Life cycle management of your
              products.
            </p>
          </div>
        }
        secondarySlot={<SvgCharts />}
      />
      <Footer />
    </>
  );
};

export default Services;
