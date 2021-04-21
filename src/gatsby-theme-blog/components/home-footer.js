import React, { Fragment } from 'react';
import { css } from 'theme-ui';

const Footer = ({ socialLinks }) => (
  <footer
    css={css({
      mt: 4,
      pt: 3,
    })}
  >
    © {new Date().getFullYear()}, Powered by
    {` `}
    <a href="">NPI Excellence</a>
    {` `}&bull;{` `}
    {socialLinks
      ? socialLinks.map((platform, i, arr) => (
          <Fragment key={platform.url}>
            <a href={platform.url} target="_blank" rel="noopener noreferrer">
              {platform.name}
            </a>
            {arr.length - 1 !== i && (
              <Fragment>
                {` `}&bull;{` `}
              </Fragment>
            )}
          </Fragment>
        ))
      : null}
  </footer>
);
export default Footer;
