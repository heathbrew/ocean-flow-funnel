
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import './PackageCard.css';

interface PackageCardProps {
  title: string;
  subtitle?: string;
  price: string;
  priceNote?: string;
  features: string[];
  isPopular?: boolean;
  ctaLink: string;
}

const PackageCard: React.FC<PackageCardProps> = ({
  title,
  subtitle,
  price,
  priceNote = '',
  features,
  isPopular = false,
  ctaLink,
}) => {
  return (
    <div className={`package-card ${isPopular ? 'package-card-popular' : ''}`}>
      <div className={`package-card-header ${isPopular ? 'package-card-header-popular' : ''}`}>
        {title}
      </div>
      
      <div className="package-card-body">
        <div className="package-card-pricing">
          <p className="package-card-subtitle">{subtitle}</p>
          <h3 className="package-card-price">
            ${price}{priceNote && <span className="package-card-price-note">{priceNote}</span>}
          </h3>
        </div>
        
        <div className="package-card-features">
          {features.map((feature, index) => (
            <div key={index} className="package-card-feature">
              <Check className="feature-icon" />
              <span className="feature-text">{feature}</span>
            </div>
          ))}
        </div>
        
        <Link to={ctaLink}>
          <Button 
            className={`package-card-button ${isPopular ? 'package-card-button-popular' : ''}`}
          >
            Get now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PackageCard;
