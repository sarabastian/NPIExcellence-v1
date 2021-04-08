import React from 'react';
import Card from './Card';

const ServiceCard = ({ service }) => (
  <Card className="mb-8">
    <div className="flex items-center mt-8">
      {service.customerImage}
      {/* <img className="object-center rounded-full" src={service.customerImage} /> */}
    </div>
    <p className="text-xl font-semibold">{service.title}</p>
    <p className="mt-6">{service.content}</p>
  </Card>
);

export default ServiceCard;
