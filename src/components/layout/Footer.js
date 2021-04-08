import React from 'react';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">About Us</h2>
        <p className="mt-5">
          Transforming business performance through strategic planning and new product introductions
          (NPIs).
        </p>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Important Links</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="">Terms &amp; Conditions</a>
          </li>
          <li>
            <a href="">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Get in Touch</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="mailto:michaekb1794@gmail.com">Email</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/kevin-michaelis/">Linkedin</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
