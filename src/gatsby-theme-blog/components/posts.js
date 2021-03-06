import * as React from 'react';
import Layout from './layout';
import SEO from './seo';
import Footer from './home-footer';
import PostList from './post-list';

const Posts = ({ location, posts, siteTitle, socialLinks }) => (
  <Layout location={location} title={siteTitle}>
    <SEO title="Home" />
    <main className="">
      <PostList posts={posts} />
    </main>
    <Footer socialLinks={socialLinks} />
  </Layout>
);

export default Posts;
