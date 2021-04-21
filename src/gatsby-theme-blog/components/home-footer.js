import React, { Fragment } from 'react';
import { css } from 'theme-ui';
import { Link } from 'gatsby';

const Footer = ({ socialLinks }) => (
  <footer
    css={css({
      mt: 4,
      pt: 3,
    })}
  >
    © {new Date().getFullYear()}, Powered by
    {` `}
    <a href="" className="text-blue-500">
      NPI Excellence
    </a>
    {` `}&bull;{` `}
    <Link to="https://www.linkedin.com/in/kevin-michaelis/" className="text-blue-500">
      Linkedin
    </Link>
  </footer>
);
export default Footer;
