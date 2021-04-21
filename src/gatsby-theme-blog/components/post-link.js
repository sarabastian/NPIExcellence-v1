import { jsx } from 'theme-ui';
import { Link } from 'gatsby';

const PostLink = ({ title, slug, date, excerpt }) => (
  <div class="container my-12 mx-auto px-4 md:px-12">
    <article
      className="p-12 rounded-lg border border-solid border-gray-200 mt-4"
      style={{
        boxShadow: '0 10px 28px rgba(0,0,0,.08)',
      }}
    >
      <header>
        <h2
          sx={{
            mb: 1,
          }}
        >
          <Link
            className="uppercase tracking-wide text-sm text-indigo-500 font-semibold hover:underline"
            sx={{
              textDecoration: `none`,
            }}
            to={slug}
          >
            {title || slug}
          </Link>
        </h2>
        <small>{date}</small>
      </header>
      <section className="mt-5">
        <p>{excerpt}</p>
      </section>
    </article>
  </div>
);

export default PostLink;
