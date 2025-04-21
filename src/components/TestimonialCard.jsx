
import React from 'react';
import { Star } from 'lucide-react';
import './TestimonialCard.css';

const TestimonialCard = ({
  name,
  role,
  content,
  rating,
  imageUrl,
}) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-rating">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={i < rating ? 'star-filled' : 'star-empty'}
          />
        ))}
      </div>
      <p className="testimonial-content">{content}</p>
      <div className="testimonial-author">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={name} 
            className="testimonial-avatar"
          />
        ) : (
          <div className="testimonial-avatar-fallback">
            {name.charAt(0)}
          </div>
        )}
        <div className="testimonial-author-info">
          <h4 className="testimonial-author-name">{name}</h4>
          <p className="testimonial-author-role">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
