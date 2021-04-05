import React, { useState } from 'react';

import Flip from 'react-reveal/Flip';

import TextLoop from 'react-text-loop';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default () => {
  const [isFlipped, setFlip] = useState(false);
  const handleClick = () => {
    setFlip(!isFlipped);
  };

  return (
    <Layout>
      <section className="pt-20 md:pt-40">
        <div className="container mx-auto px-8 lg:flex">
          <div className="text-center lg:text-left lg:w-1/2">
            {/* <Transition
              items={items}
              keys={item => item.key}
              from={{ transform: 'translate3d(0,-40px,0)' }}
              enter={{ transform: 'translate3d(0,0px,0)' }}
              leave={{ transform: 'translate3d(0,-40px,0)' }}
            >
              {item => props => <div style={props}>{item.text}</div>}
            </Transition> */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
              <TextLoop>
                <span>Ideate</span>
                <span>Create</span>
                <span>Launch</span>
                <span>Win</span>
              </TextLoop>{' '}
            </h1>

            <p className="text-xl lg:text-2xl mt-6 font-light">
              Free landing page template to promote your business startup and generate leads for the
              offered services
            </p>
            <p className="mt-8 md:mt-12">
              <i class="fas fa-arrow-down"></i>
            </p>
            <p className="mt-4 text-gray-600">Sed fermentum felis ut cursu</p>
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
                {isFlipped ? (
                  <Flip left isFlipped={isFlipped} flipDirection="vertical">
                    <Card className="mb-8">
                      <p className="font-semibold text-xl">
                        Including: fire suppression, semiconductor materials, industrial gases,
                        supply chain operations.
                      </p>
                      <p className="mt-4"></p>
                      <button onClick={handleClick}>Click to flip</button>
                    </Card>
                  </Flip>
                ) : (
                  <Card onClick={handleClick} className="mb-8">
                    <Flip left isFlipped={isFlipped} flipDirection="vertical">
                      <p className="font-semibold text-xl">
                        Variety of NPI Experience across Several Industries
                      </p>
                      <p className="mt-4"></p>
                      <button onClick={handleClick}>Click to flip</button>
                    </Flip>
                  </Card>
                )}
              </Pulse>
            </div>
            <div className="flex-1 px-3">
              <Pulse>
                <Card className="mb-8">
                  <p className="font-semibold text-xl">
                    New products across a broad range of spectrum of offerings
                  </p>
                </Card>
              </Pulse>
            </div>
            <div className="flex-1 px-3">
              <Pulse>
                <Card className="mb-8">
                  <p className="font-semibold text-xl">Real World Product Management Experience</p>
                </Card>
              </Pulse>
            </div>
            <div className="flex-1 px-3">
              <Pulse>
                <Card className="mb-8">
                  <p className="font-semibold text-xl">
                    Experience Integrating New Product Development Plans
                  </p>
                </Card>
              </Pulse>
            </div>
          </div>
        </div>
      </section>
      <SplitSection
        id="services"
        primarySlot={
          <div className="lg:pr-32 xl:pr-48">
            <h3 className="text-3xl font-semibold leading-tight">Market Analysis</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Our team of enthusiastic marketers will analyse and evaluate how your company stacks
              against the closest competitors
            </p>
          </div>
        }
        secondarySlot={<SvgCharts />}
      />
      <SplitSection
        reverseOrder
        primarySlot={
          <div className="lg:pl-32 xl:pl-48">
            <h3 className="text-3xl font-semibold leading-tight">
              Design And Plan Your Business Growth Steps
            </h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Once the market analysis process is completed our staff will search for opportunities
              that are in reach
            </p>
          </div>
        }
        secondarySlot={<SvgCharts />}
      />
      <SplitSection
        primarySlot={
          <div className="lg:pr-32 xl:pr-48">
            <h3 className="text-3xl font-semibold leading-tight">
              Search For Performance Optimization
            </h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              With all the information in place you will be presented with an action plan that your
              company needs to follow
            </p>
          </div>
        }
        secondarySlot={<SvgCharts />}
      />
      <section id="stats" className="py-20 lg:pt-32">
        <div className="container mx-auto text-center">
          <LabelText className="text-gray-600">Our customers get results</LabelText>
          <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
            <div className="w-full sm:w-1/3">
              <StatsBox primaryText="+100%" secondaryText="Stats Information" />
            </div>
            <div className="w-full sm:w-1/3">
              <StatsBox primaryText="+100%" secondaryText="Stats Information" />
            </div>
            <div className="w-full sm:w-1/3">
              <StatsBox primaryText="+100%" secondaryText="Stats Information" />
            </div>
          </div>
        </div>
      </section>
      <section id="testimonials" className="py-20 lg:py-40">
        <div className="container mx-auto">
          <LabelText className="mb-8 text-gray-600 text-center">
            What customers are saying
          </LabelText>
          <div className="flex flex-col md:flex-row md:-mx-3">
            {customerData.map(customer => (
              <div key={customer.customerName} className="flex-1 px-3">
                <CustomerCard customer={customer} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
        <h3 className="text-5xl font-semibold">Ready to grow your business?</h3>
        <p className="mt-8 text-xl font-light">
          Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque fermentum dui faucibus
          in.
        </p>
        <p className="mt-8">
          <Button size="xl">Get Started Now</Button>
        </p>
      </section>
    </Layout>
  );
};
