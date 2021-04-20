import React, { Fragment } from 'react';
import { Styled } from 'theme-ui';
import Linkedin from '../../svg/linkedin-original.svg';
import { Link } from 'gatsby';

const BioContent = () => (
  <Fragment>
    {/* Words by <Styled.a href="http://laurieontech.com/">Kevin Michaelis</Styled.a>. */}
    <Link to="https://www.linkedin.com/in/kevin-michaelis/">
      <Linkedin />
    </Link>
  </Fragment>
);

export default BioContent;
