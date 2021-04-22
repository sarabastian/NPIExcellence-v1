import * as React from 'react';
import PostLink from './post-link';
import Fade from 'react-reveal/Fade';

const PostList = ({ posts }) => (
  <Fade down>
    <h1 className="font-bold text-5xl lg:text-10xl container w-full lg:max-w-5xl mx-auto p-12">
      All Posts
    </h1>
    <div className="divide-y divide-light-blue-400 grid-rows-3 gap-1">
      {posts.map((node) => (
        <PostLink key={node.slug} {...node} />
      ))}
    </div>
  </Fade>
);

export default PostList;
