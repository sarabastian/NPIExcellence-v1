import React from 'react';
import Card from './Card';
import { animations } from 'react-animation';

const ServiceCard = ({ service }) => {
  const style = {
    animation: animations.fadeInUp,
  };
  return (
    <Card className="mb-8">
      <div style={style} className="flex justify-center  md:my-9">
        {service.customerImage}
        {/* <img className="object-center rounded-full" src={service.customerImage} /> */}
      </div>

      <p className="mt-8 text-xl text-center font-semibold">{service.title}</p>
      <p className="text-center mt-6">{service.content}</p>
    </Card>
  );
};

export default ServiceCard;
