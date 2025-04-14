
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  imageUrl?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  content,
  rating,
  imageUrl,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex space-x-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>
      <p className="text-gray-700 mb-4">{content}</p>
      <div className="flex items-center">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-10 h-10 rounded-full mr-3"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mr-3">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
