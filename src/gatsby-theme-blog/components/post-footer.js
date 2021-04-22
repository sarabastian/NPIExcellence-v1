import * as React from 'react';
import { Link } from 'gatsby';
import { css, Themed, Flex } from 'theme-ui';
import BioContent from './bio-content';
import Avatar from '../../assets/images/profile.jpg';

const PostFooter = ({ previous, next }) => (
  <footer className="my-56">
    <hr className="border-b-2 border-gray-400 mb-8 mx-4" />

    <div className="flex w-full items-center font-sans px-4 py-12">
      <img className="w-10 h-10 rounded-full mr-4" src={Avatar} alt="Avatar of Author" />
      <div className="flex-1 px-2">
        <div className="s9-widget-wrapper">Share Story</div>
        <p className="text-base font-bold text-base md:text-xl leading-none mb-2">
          Kevin Michaelis
        </p>
        <p className="text-gray-600 text-xs md:text-base">Founder of NPI Excellence</p>
        <BioContent />
      </div>
      <div className="justify-end">
        <Link to="/blog">
          <button className="bg-transparent border border-gray-500 hover:border-green-500 text-xs text-gray-500 hover:text-green-500 font-bold py-2 px-4 rounded-full">
            Read More
          </button>
        </Link>
      </div>
    </div>
    <hr className="border-b-2 border-gray-400 mb-8 mx-4" />

    {(previous || next) && (
      <Flex
        as="ul"
        css={css({
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
        })}
      >
        <li>
          {previous && (
            <Link to={previous.slug} rel="prev">
              ← {previous.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.slug} rel="next">
              {next.title} →
            </Link>
          )}
        </li>
      </Flex>
    )}
  </footer>
);

export default PostFooter;
