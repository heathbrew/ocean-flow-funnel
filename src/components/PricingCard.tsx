
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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
    <div className={`relative bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${isPopular ? 'border-2 border-secondary transform scale-105 md:scale-110 z-10' : 'border border-gray-200'}`}>
      {isPopular && (
        <div className="absolute top-0 right-0 bg-secondary text-white px-4 py-1 text-xs font-semibold">
          MOST POPULAR
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-center mb-4">{title}</h3>
        
        <div className="text-center mb-6">
          <span className="text-3xl font-bold">${price}</span>
        </div>
        
        <div className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              {feature.included ? (
                <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              ) : (
                <div className="w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                </div>
              )}
              <span className={feature.included ? 'text-gray-800' : 'text-gray-500'}>
                {feature.text}
              </span>
            </div>
          ))}
        </div>
        
        <Link to={ctaLink}>
          <Button 
            className={`w-full ${isPopular ? 'bg-secondary hover:bg-secondary/90' : 'bg-primary hover:bg-primary/90'}`}
          >
            {ctaText}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PricingCard;
