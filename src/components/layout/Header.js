import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Logo from '../../public/NPIExcellence.png';
import Button from '../Button';
import '../../css/app.css';

const Header = () => (
  <header className="sticky top-0 bg-white ">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="mr-20">
          <img src={Logo} alt="NPI Excellence" className="logo" />
        </div>
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#features">
          Who We Are
        </AnchorLink>
        <AnchorLink className="px-4" href="#services">
          Services
        </AnchorLink>
        <AnchorLink className="px-4" href="#stats">
          Contact
        </AnchorLink>
        <AnchorLink className="px-4" href="#testimonials">
          Blog
        </AnchorLink>
      </div>
      {/* <div className="hidden md:block">
        <Button className="text-sm">Start Free Trial</Button>
      </div> */}
    </div>
  </header>
);

export default Header;
