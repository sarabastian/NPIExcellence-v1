import React from 'react';
import Card from './Card';
import Fade from 'react-reveal/Fade';
const ServiceCard = ({ service }) => {
  return (
    <Card className="mb-8">
      <Fade up>
        <div className="flex justify-center  md:my-9">
          {service.customerImage}
          {/* <img className="object-center rounded-full" src={service.customerImage} /> */}
        </div>
      </Fade>
      <p className="mt-8 text-xl text-center font-semibold">{service.title}</p>
      <p className="text-center mt-6">{service.content}</p>
    </Card>
  );
};

export default ServiceCard;
