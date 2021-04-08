import React from 'react';
import customerData from '../data/customer-data';
import LabelText from '../components/LabelText';
import CustomerCard from '../components/CustomerCard';
import Footer from '../components/layout/Footer';
import SecondPageHeader from '../components/layout/SecondPageHeader';
// import AnchorLink from 'react-anchor-link-smooth-scroll';
// import { AnchorLink } from 'gatsby-plugin-anchor-links';

// import { HashLink as Link } from 'react-router-hash-link';

const Services = () => {
  return (
    <>
      <SecondPageHeader />
      <section id="testimonials" className="py-20 lg:py-40">
        <div className="container mx-auto">
          <LabelText className="mb-8 text-gray-600 text-center">
            What customers are saying
          </LabelText>
          <div className="flex flex-col md:flex-row md:-mx-3">
            {customerData.map(customer => (
              <div key={customer.customerName} className="flex-1 px-3">
                <CustomerCard customer={customer} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Services;
