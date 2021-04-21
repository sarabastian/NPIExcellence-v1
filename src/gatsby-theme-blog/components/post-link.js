import { jsx } from 'theme-ui';
import { Link } from 'gatsby';

const PostLink = ({ title, slug, date, excerpt }) => (
  <div class="container my-12 mx-auto px-4 md:px-12">
    <article
      className="p-12 outline-none mt-4"
      //   style={{
      //     boxShadow: '0 10px 28px rgba(0,0,0,.08)',
      //   }}
    >
      <header>
        <h2
          sx={{
            mb: 1,
          }}
        >
          <Link
            className=" uppercase tracking-wide text-md  lg:text-lg text-indigo-400 font-semibold hover:underline"
            sx={{
              textDecoration: `none`,
            }}
            to={slug}
          >
            {title || slug}
          </Link>
        </h2>
        <small>
          By <strong>Kevin Michaelis</strong>, published on {date}
        </small>
      </header>
      <section className="mb-6 mt-8">
        <p>{excerpt}</p>
      </section>
      <Link to={slug} class="text-xs lg:text-md uppercase text-gray-800 hover:text-black">
        <p>
          Continue Reading
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />{' '}
          </svg>
        </p>
      </Link>
    </article>
  </div>
);

export default PostLink;
