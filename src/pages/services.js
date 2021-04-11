import React from 'react';
import customerData from '../data/services-data';
import Zoom from 'react-reveal/Zoom';
import ServiceCard from '../components/ServiceCard';
import Footer from '../components/layout/Footer';
import SecondPageHeader from '../components/layout/SecondPageHeader';
// import AnchorLink from 'react-anchor-link-smooth-scroll';
// import { AnchorLink } from 'gatsby-plugin-anchor-links';

// import { HashLink as Link } from 'react-router-hash-link';

const Services = () => {
  return (
    <>
      <SecondPageHeader />

      <div class="container my-12 mx-auto px-4 md:px-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-semibold mb-8">What We Offer</h2>
        </div>

        <div class="grid grid-flow-col grid-cols-3 grid-rows-3 gap-4">
          {customerData.map((service, index) => (
            <div key={index} className="flex-1 px-3">
              <Zoom>
                <ServiceCard service={service} />
              </Zoom>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Services;
