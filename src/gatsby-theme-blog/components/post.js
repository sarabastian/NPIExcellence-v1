import * as React from 'react';
import { getSrc } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from './layout';
import SEO from './seo';
import PostTitle from './post-title';
import PostDate from './post-date';
import PostFooter from './post-footer';
import { Link } from 'gatsby';

const Post = ({
  data: {
    post,
    site: {
      siteMetadata: { title },
    },
  },
  location,
  previous,
  next,
}) => {
  return (
    <Layout location={location} title={title}>
      <SEO
        title={post.title}
        description={post.excerpt}
        imageSource={post.socialImage ? getSrc(post.socialImage) : getSrc(post.image)}
        imageAlt={post.imageAlt}
      />
      <main className="container w-full md:max-w-3xl mx-auto pt-20">
        <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
          <div className="font-sans">
            <p className="text-base md:text-sm text-blue-500 font-bold">
              &lt;{' '}
              <Link
                to="/blog"
                className="text-base md:text-sm text-blue-500 font-bold no-underline hover:underline"
              >
                BROWSE ALL BLOGS
              </Link>
            </p>
            <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
              <PostTitle>{post.title}</PostTitle>
            </h1>
            <p className="text-sm md:text-base font-normal text-gray-600">
              <PostDate>Published {post.date}</PostDate>
            </p>
          </div>

          {/* <PostHero post={post} /> */}

          <p class="py-6">
            <MDXRenderer className="">{post.body}</MDXRenderer>
          </p>
        </div>
      </main>
      <PostFooter {...{ previous, next }} />
    </Layout>
  );
};

export default Post;
