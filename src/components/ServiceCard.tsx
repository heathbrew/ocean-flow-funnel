
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  link,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg border border-gray-100">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <Link to={link}>
        <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
          Learn More
        </Button>
      </Link>
    </div>
  );
};

export default ServiceCard;
