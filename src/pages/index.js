import React, { useState } from 'react';

import Flip from 'react-reveal/Flip';

import TextLoop from 'react-text-loop';
import Button from '../components/Button';
import Card from '../components/Card';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';
import { motion } from 'framer-motion';
import Slide from 'react-reveal/Slide';
import { animations } from 'react-animation';

import AnchorLink from 'react-anchor-link-smooth-scroll';

import { Link } from 'gatsby';
import ScrollAnimation from 'react-animate-on-scroll';

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

  const styles = {
    animation: animations.fadeInUp,
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
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                    clipRule="evenodd"
                  />
                </svg>

                {/* New Products Drive Growth */}
              </p>
            </AnchorLink>
          </div>
          <div className="lg:w-1/2">
            <HeroImage />
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
                    <Card className="mb-8">
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
                  <Card className="mb-8 ">
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
                    <Card className="mb-8">
                      <button
                        onClick={handleClick2}
                        className="focus:outline-none font-light text-xl"
                      >
                        Product experience with components and systems, materials, chemicals,
                        industrial gases, equipment, services, IoT connected device digital
                        solutions and software.
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
                  <Card className="mb-8">
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
                    <Card className="mb-8">
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
                  <Card className="mb-8">
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
                    <Card className="mb-8">
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
                  <Card className="mb-8">
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
      <Zoom>
        <SplitSection
          id="services"
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
          secondarySlot={<SvgCharts />}
        />

        <SplitSection
          reverseOrder
          primarySlot={
            <div className="lg:pl-32 xl:pl-48">
              <h3 className="text-3xl font-semibold leading-tight">Portfolio Management Tools</h3>
              <p className="mt-8 text-xl font-light leading-relaxed">
                Tools to manage the portfolio of new products to insure the right mix of risk/reward
                and ability to execute.
              </p>
            </div>
          }
          secondarySlot={<SvgCharts />}
        />
        <SplitSection
          primarySlot={
            <div className="lg:pr-32 xl:pr-48">
              <h3 className="text-3xl font-semibold leading-tight">
                Multi-Generational Product Planning
              </h3>

              <p className="mt-8 text-xl font-light leading-relaxed">
                Processes and tools to drive a strategic and market led approach to new product
                development that aligns to your business strategy. Life cycle management of your
                products.
              </p>
            </div>
          }
          secondarySlot={<SvgCharts />}
        />
      </Zoom>
      <Link to="/services">
        <LabelText className="text-gray-600">
          <p
            style={styles}
            className="container mx-auto px-16 items-center flex flex-col lg:flex-row"
          >
            <button className="focus:outline-none mt-8 text-xl font-light leading-relaxed">
              See all our services
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </p>
        </LabelText>
      </Link>

      <section id="philosophy" className="py-20 lg:pt-32">
        <div className="container mx-auto text-center">
          <LabelText className="text-gray-600">Our Philosophy</LabelText>
          <h3 className="text-xl lg:text-2xl mt-6 font-light">
            NPI Excellence's passion is transforming business performance through strategic planning
            and new product introductions (NPIs)
          </h3>

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

      <section className="container mx-auto my-20 py-24 bg-gray-100 rounded-lg text-center">
        <h3 className="text-5xl font-semibold">
          {' '}
          NPI Excellence's passion is transforming business performance through strategic planning
          and new product introductions (NPIs)
        </h3>
      </section>

      <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
        <Slide left>
          <h3 className="text-5xl font-semibold">Ready to grow your business?</h3>
        </Slide>
        <p className="mt-8 text-xl font-light">
          Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque fermentum dui faucibus
          in.
        </p>
        <p className="mt-8" style={styles}>
          <Button size="xl">Get Started Now</Button>
        </p>
      </section>
    </Layout>
  );
}
