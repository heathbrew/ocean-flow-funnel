
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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
    <div className="border rounded-lg overflow-hidden shadow-sm">
      <div className={`p-4 text-center font-bold ${isPopular ? 'bg-secondary text-white' : 'bg-secondary/30 text-primary'}`}>
        {title}
      </div>
      
      <div className="p-6 bg-white">
        <div className="text-center mb-4">
          <p className="text-gray-600">{subtitle}</p>
          <h3 className="text-3xl font-bold text-primary my-4">
            ${price}{priceNote && <span className="text-sm">{priceNote}</span>}
          </h3>
        </div>
        
        <div className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
              <span className="text-gray-600">{feature}</span>
            </div>
          ))}
        </div>
        
        <Link to={ctaLink}>
          <Button 
            className={`w-full ${isPopular ? 'bg-secondary hover:bg-secondary/90' : 'bg-primary hover:bg-primary/90'}`}
          >
            Get now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PackageCard;
