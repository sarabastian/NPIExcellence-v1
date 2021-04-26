import { jsx } from 'theme-ui';
import { Link } from 'gatsby';

const PostLink = ({ title, slug, date, excerpt }) => (
  <div class="container w-full  lg:max-w-5xl mx-auto pt-23">
    <article
      className="p-12 outline-none"
      //   style={{
      //     boxShadow: '0 10px 28px rgba(0,0,0,.08)',
      //   }}
    >
      <header>
        <h1
          sx={{
            mb: 1,
          }}
        >
          <Link
            className=" uppercase tracking-wide text-2xl lg:text-3xl xl:text-4xl text-blue-500 font-semibold hover:underline"
            sx={{
              textDecoration: `none`,
            }}
            to={slug}
          >
            {title || slug}
          </Link>
        </h1>
        <small className="text-sm lg:text-md xl:text-lg ">
          By <strong>Kevin Michaelis</strong>, published on {date}
        </small>
      </header>
      <section className="mb-6 mt-8 text-lg lg:text-xl xl:text-2xl">
        <em>{excerpt}</em>
      </section>
      <section className="my-0">
        <Link
          to={slug}
          class=" text-xs md:text-sm lg:text-md uppercase text-gray-800 hover:text-black"
        >
          <p>Continue Reading →</p>
        </Link>
      </section>
    </article>
  </div>
);

export default PostLink;
