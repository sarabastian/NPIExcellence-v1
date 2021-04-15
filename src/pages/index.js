import React, { useState } from 'react';

import Flip from 'react-reveal/Flip';

import TextLoop from 'react-text-loop';
import Button from '../components/Button';
import Card from '../components/Card';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import Landing from '../svg/landing.svg';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';
import SVG1 from '../svg/mainpage1.svg';
import SVG2 from '../svg/mainpage2.svg';
import SVG3 from '../svg/mainpage3.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'gatsby';
import Profile from '../assets/images/profile.jpg';

export default function Home() {
  const [isFlipped1, setFlip1] = useState(false);
  const handleClick1 = () => {
    setFlip1(!isFlipped1);
  };

  const [isFlipped2, setFlip2] = useState(false);
  const handleClick2 = () => {
    setFlip2(!isFlipped2);
  };

  const [isFlipped3, setFlip3] = useState(false);
  const handleClick3 = () => {
    setFlip3(!isFlipped3);
  };

  const [isFlipped4, setFlip4] = useState(false);
  const handleClick4 = () => {
    setFlip4(!isFlipped4);
  };

  return (
    <Layout>
      <section className="pt-20 md:pt-40">
        <div className="container mx-auto px-8 lg:flex">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
              <TextLoop>
                <span>Ideate</span>
                <span>Create</span>
                <span>Launch</span>
                <span>Win</span>
              </TextLoop>{' '}
            </h1>

            <p className="text-xl lg:text-2xl mt-6 font-light">
              New product introductions are the life blood of a fast growth, high margin business.
              NPI Excellence, LLC can enable your company to beat the competition and delight
              customers, achieving your business objectives.
            </p>
            {/* <p className="mt-8 md:mt-12"> */}

            {/* </p> */}

            <AnchorLink className="px-4" href="#features">
              <p className="mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
                  />
                </svg>

                {/* New Products Drive Growth */}
              </p>
            </AnchorLink>
          </div>
          <div className="ml-24 lg:w-1/2">
            <Landing />
          </div>
        </div>
      </section>
      <section id="features" className="py-20 lg:pb-40 lg:pt-48">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-semibold">Why We're Different</h2>

          <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
            <div className="flex-1 px-3">
              <Pulse>
                {isFlipped1 ? (
                  <Flip left isFlipped1={isFlipped1} flipDirection="vertical">
                    <Card className="transition duration-500 ease-in-out hover transform hover:-translate-y-1 hover:scale-110 mb-8">
                      <button
                        onClick={handleClick1}
                        className="focus:outline-none font-light text-xl"
                      >
                        Spanning fire suppression, semiconductor materials, industrial gases, &
                        supply chain operations.
                      </button>

                      <p className="mt-4"></p>
                      <button onClick={handleClick1} className="focus:outline-none">
                        {' '}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 5l7 7-7 7M5 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                      {/* <button onClick={handleClick}>Click to flip</button> */}
                    </Card>
                  </Flip>
                ) : (
                  <Card className="transition duration-500 ease-in-out hover transform hover:-translate-y-1 hover:scale-110 mb-8 ">
                    <Flip left isFlipped1={isFlipped1} flipDirection="vertical">
                      <button
                        onClick={handleClick1}
                        className="focus:outline-none font-semibold text-xl"
                      >
                        Variety of NPI Experience across Several Industries
                      </button>
                      <p className="mt-4"></p>
                      <button onClick={handleClick1} className="focus:outline-none">
                        {' '}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 5l7 7-7 7M5 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </Flip>
                  </Card>
                )}
              </Pulse>
            </div>
            <div className="flex-1 px-3">
              <Pulse>
                {isFlipped2 ? (
                  <Flip left isFlipped2={isFlipped2} flipDirection="vertical">
                    <Card className="transition duration-500 ease-in-out hover transform hover:-translate-y-1 hover:scale-110 mb-8">
                      <button
                        onClick={handleClick2}
                        className="focus:outline-none font-light text-xl"
                      >
                        Product experience with{' '}
                        <em>
                          components and systems, materials, chemicals, industrial gases, equipment,
                          services, IoT connected device digital solutions{' '}
                        </em>
                        and <em> software.</em>
                      </button>
                      <p className="mt-4"></p>
                      <button onClick={handleClick2} className="focus:outline-none">
                        {' '}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 5l7 7-7 7M5 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </Card>
                  </Flip>
                ) : (
                  <Card className="transition duration-500 ease-in-out hover transform hover:-translate-y-1 hover:scale-110 mb-8">
                    <Flip left isFlipped2={isFlipped2} flipDirection="vertical">
                      <button
                        onClick={handleClick2}
                        className="focus:outline-none font-semibold text-xl"
                      >
                        New products across a broad range of spectrum of offerings
                      </button>
                      <p className="mt-4"></p>
                      <button onClick={handleClick2} className="focus:outline-none">
                        {' '}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 5l7 7-7 7M5 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </Flip>
                  </Card>
                )}
              </Pulse>
            </div>

            <div className="flex-1 px-3">
              <Pulse>
                {isFlipped3 ? (
                  <Flip left isFlipped3={isFlipped3} flipDirection="vertical">
                    <Card className="transition duration-500 ease-in-out hover transform hover:-translate-y-1 hover:scale-110 mb-8">
                      <button
                        onClick={handleClick3}
                        className="focus:outline-none font-light text-xl"
                      >
                        From a product manager/senior executive, not a consulting agency
                      </button>
                      <p className="mt-4"></p>
                      <button onClick={handleClick3} className="focus:outline-none">
                        {' '}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 5l7 7-7 7M5 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </Card>
                  </Flip>
                ) : (
                  <Card className="transition duration-500 ease-in-out hover transform hover:-translate-y-1 hover:scale-110 mb-8">
                    <Flip left isFlipped3={isFlipped3} flipDirection="vertical">
                      <button
                        onClick={handleClick3}
                        className="focus:outline-none font-semibold text-xl"
                      >
                        Real World Product Management Experience
                      </button>
                      <p className="mt-4"></p>
                      <button onClick={handleClick3} className="focus:outline-none">
                        {' '}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 5l7 7-7 7M5 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </Flip>
                  </Card>
                )}
              </Pulse>
            </div>
            <div className="flex-1 px-3">
              <Pulse>
                {isFlipped4 ? (
                  <Flip left isFlipped4={isFlipped4} flipDirection="vertical">
                    <Card className="transition duration-500 ease-in-out hover transform hover:-translate-y-1 hover:scale-110 mb-8">
                      <button
                        onClick={handleClick4}
                        className="focus:outline-none font-light text-xl"
                      >
                        Comply with various governmental and non-governmental codes and standards –
                        FAA, UL, FM Approvals
                      </button>
                      <p className="mt-4"></p>
                      <button onClick={handleClick4} className="focus:outline-none">
                        {' '}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className=" h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 5l7 7-7 7M5 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </Card>
                  </Flip>
                ) : (
                  <Card className="transition duration-500 ease-in-out hover transform hover:-translate-y-1 hover:scale-110 mb-8">
                    <Flip left isFlipped4={isFlipped4} flipDirection="vertical">
                      <button
                        onClick={handleClick4}
                        className="focus:outline-none font-semibold text-xl"
                      >
                        Experience Integrating New Product Development Plans
                      </button>
                      <p className="mt-4"></p>
                      <button onClick={handleClick4} className="focus:outline-none">
                        {' '}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 5l7 7-7 7M5 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </Flip>
                  </Card>
                )}
              </Pulse>
            </div>
          </div>
        </div>
      </section>
      <section id="services">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-semibold">What We Offer</h2>
        </div>
        <Zoom>
          <SplitSection
            primarySlot={
              <div className="lg:pr-32 xl:pr-48">
                <h3 className="text-3xl font-semibold leading-tight">
                  NPI Maturity Model Assessment
                </h3>
                <p className="mt-8 text-xl font-light leading-relaxed">
                  A 19 point assessment model to understand your current baseline and identify
                  improvement areas.
                </p>
              </div>
            }
            secondarySlot={<SVG1 />}
          />

          <SplitSection
            reverseOrder
            primarySlot={
              <div className="lg:pl-32 xl:pl-48">
                <h3 className="text-3xl font-semibold leading-tight">Portfolio Management Tools</h3>
                <p className="mt-8 text-xl font-light leading-relaxed">
                  Tools to manage the portfolio of new products to insure the right mix of
                  risk/reward and ability to execute.
                </p>
              </div>
            }
            secondarySlot={<SVG2 />}
          />
          <SplitSection
            primarySlot={
              <div className="lg:pr-32 xl:pr-48">
                <h3 className="text-3xl font-semibold leading-tight">
                  Multi-Generational Product Planning
                </h3>

                <p className="mt-8 text-xl font-light leading-relaxed">
                  Processes and tools to drive a strategic and market led approach to new product
                  development that aligns to your business strategy. Life-cycle management of your
                  products.
                </p>
              </div>
            }
            secondarySlot={<SVG3 />}
          />
        </Zoom>
        <Link to="/services">
          <LabelText className="text-gray-600">
            <p className="container mx-auto px-16 items-center flex flex-col lg:flex-row">
              <button className="focus:outline-none mt-8 text-xl font-light leading-relaxed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="animate-bounce h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
                See all our services
              </button>
            </p>
          </LabelText>
        </Link>
      </section>
      <section id="philosophy" className="py-20 lg:pt-32">
        <div className="container mx-auto text-center">
          <LabelText className="text-gray-600">Our Philosophy</LabelText>
          <div className="inline-flex space-x-10">
            <h2 className="flex-1 mt-20  text-xl lg:text-3xl font-light w-2/3">
              NPI Excellence's passion is transforming business performance through strategic
              planning and new product introductions (NPIs)
            </h2>
            <Fade>
              <div
                className="flex-1 mt-8 p-12 rounded-lg border border-solid border-gray-200 w-1/2"
                // className={`p-12 focus:outline-none ${className}`}
                style={{
                  boxShadow: '0 10px 28px rgba(0,0,0,.08)',
                }}
              >
                <div className="flex justify-right  ">
                  <img className="w-20 h-20 mr-4 rounded-full float left" src={Profile} />
                  {/* <img src={About} alt="NPI Excellence" className="logo" /> */}
                  <p className="justify-right">
                    As a professional Engineering Consultant dating back to 2000, I've led product
                    management teams across a variety of industries to achieve significant top and
                    bottom line growth, driven by NPIs. ​<br></br>
                    <br></br>
                  </p>
                </div>
                <div className="flex justify-right">
                  <p>
                    I believe in maintaining a positive mindset, creating partnerships with a
                    purpose, and always striving for significant outcomes. When you work with me,
                    you should expect a collaboration with transparency and consistency. Want to
                    learn more? Contact me today for an initial consultation. ​<br></br>
                    <br></br>
                    Kevin Michaelis
                  </p>
                </div>
              </div>
            </Fade>
          </div>
          {/* <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
            <div className="w-full sm:w-1/3">
              <StatsBox primaryText="+100%" secondaryText="Stats Information" />
            </div>
            <div className="w-full sm:w-1/3">
              <StatsBox primaryText="+100%" secondaryText="Stats Information" />
            </div>
            <div className="w-full sm:w-1/3">
              <StatsBox primaryText="+100%" secondaryText="Stats Information" />
            </div>
          </div> */}
        </div>
      </section>

      {/* <section className="container mx-auto my-20 py-24 bg-gray-100 rounded-lg text-center">
        <h3 className="text-5xl font-semibold">
          {' '}
          NPI Excellence's passion is transforming business performance through strategic planning
          and new product introductions (NPIs)
        </h3>
      </section> */}
      <Fade right>
        <section
          id="contact"
          className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center"
        >
          <h3 className="text-5xl font-semibold">New Products Drive Growth</h3>

          <p className="mt-8 text-xl font-light">
            Contact me today to set up a meeting and find out more about what I can do for your
            business.
          </p>
          <a href="mailto:michaekb1794@gmail.com">
            <p className="mt-8">
              <Button
                className="transition duration-500 ease-in-out hover transform hover:-translate-y-1 hover:scale-110"
                size="xl"
              >
                Get Started Now
              </Button>
            </p>
          </a>
        </section>
      </Fade>
    </Layout>
  );
}
