import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Helmet } from 'react-helmet';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="text-gray-900">
        <Helmet>
          <html lang="en" />
          <title>NPI Excellence</title>
          <description>
            New product introductions are the life blood of a fast growth, high margin business. NPI
            Excellence, LLC can enable your company to beat the competition and delight customers,
            achieving your business objectives.
          </description>
        </Helmet>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
