
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

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
    <div className="service-card">
      <div className="service-card-icon">{icon}</div>
      <h3 className="service-card-title">{title}</h3>
      <p className="service-card-description">{description}</p>
      <Link to={link}>
        <Button variant="outline" className="service-card-button">
          Learn More
        </Button>
      </Link>
    </div>
  );
};

export default ServiceCard;
