import React, { Fragment } from 'react';
import { Styled } from 'theme-ui';

export default function BioContent() {
  return (
    <Fragment>
      Words by <Styled.a href="http://example.com/">Kevin Michaelis</Styled.a>.
      <br />
      Change me. This is all quite default.
    </Fragment>
  );
}
