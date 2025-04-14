
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import './PricingCard.css';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: number;
  features: PricingFeature[];
  isPopular?: boolean;
  ctaText?: string;
  ctaLink: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  features,
  isPopular = false,
  ctaText = "Select Package",
  ctaLink,
}) => {
  return (
    <div className={`pricing-card ${isPopular ? 'pricing-card-popular' : ''}`}>
      {isPopular && (
        <div className="pricing-card-badge">
          MOST POPULAR
        </div>
      )}
      
      <div className="pricing-card-content">
        <h3 className="pricing-card-title">{title}</h3>
        
        <div className="pricing-card-price">
          <span>${price}</span>
        </div>
        
        <div className="pricing-card-features">
          {features.map((feature, index) => (
            <div key={index} className="pricing-feature">
              {feature.included ? (
                <Check className="pricing-feature-check" />
              ) : (
                <div className="pricing-feature-dot"></div>
              )}
              <span className={feature.included ? 'pricing-feature-included' : 'pricing-feature-excluded'}>
                {feature.text}
              </span>
            </div>
          ))}
        </div>
        
        <Link to={ctaLink}>
          <Button 
            className={`pricing-card-button ${isPopular ? 'pricing-card-button-popular' : ''}`}
          >
            {ctaText}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PricingCard;
