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
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta
            name="description"
            content="New product introductions are the life blood of a fast growth, high margin business. NPI
  Excellence can enable your company to beat the competition and delight customers,
  achieving your business objectives"
          />
        </Helmet>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
