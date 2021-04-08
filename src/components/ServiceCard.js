import React from 'react';
import Card from './Card';

const ServiceCard = ({ service }) => (
  <Card className="mb-8">
    <p className="text-xl font-semibold">{service.title}</p>
    <p className="mt-6">{service.content}</p>
    <div className="flex items-center mt-8">
      <img className="w-12 h-12 mr-4 rounded-full" src={service.customerImage} />
      <div>
        <p></p>
        <p className="text-sm text-gray-600"></p>
      </div>
    </div>
  </Card>
);

export default ServiceCard;
