import * as React from 'react';
import PostLink from './post-link';
import Fade from 'react-reveal/Fade';

const PostList = ({ posts }) => (
  <Fade down>
    <div className="divide-y divide-light-blue-400 grid-rows-3 gap-4">
      {posts.map((node) => (
        <PostLink key={node.slug} {...node} />
      ))}
    </div>
  </Fade>
);

export default PostList;
