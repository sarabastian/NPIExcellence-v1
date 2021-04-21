import { jsx } from 'theme-ui';
import { Link } from 'gatsby';

const PostLink = ({ title, slug, date, excerpt }) => (
  <div class="container w-full md:max-w-3xl mx-auto pt-20">
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
            className=" uppercase tracking-wide text-xl text-blue-500 font-semibold hover:underline"
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
      <section className="my-0">
        <Link to={slug} class=" text-xs lg:text-md uppercase text-gray-800 hover:text-black">
          <p>
            Continue Reading
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </p>
        </Link>
      </section>
    </article>
  </div>
);

export default PostLink;
