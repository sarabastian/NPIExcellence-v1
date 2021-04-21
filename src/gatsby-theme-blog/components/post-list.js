import * as React from 'react';
import PostLink from './post-link';
import Fade from 'react-reveal/Fade';

const PostList = ({ posts }) => (
  <Fade down>
    <div className="lg:grid grid-cols-3 grid-rows-3 gap-5">
      {posts.map((node) => (
        <PostLink key={node.slug} {...node} />
      ))}
    </div>
  </Fade>
);

export default PostList;
