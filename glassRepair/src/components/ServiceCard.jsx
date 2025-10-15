import React from 'react';

const ServiceCard = ({ serviceName }) => {
  return (
    <div className="service-item">
      <span>&#9673;</span> {/* Pequeño círculo/viñeta */}
      <span className="service-name">{serviceName}</span>
    </div>
  );
};

export default ServiceCard;