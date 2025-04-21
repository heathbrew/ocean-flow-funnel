
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import './BlogCard.css';

const BlogCard = ({
  title,
  image,
  date,
  link,
}) => {
  return (
    <div className="blog-card">
      <Link to={link} className="blog-card-link">
        <img 
          src={image} 
          alt={title} 
          className="blog-card-image"
        />
        <div className="blog-card-content">
          <div className="blog-card-divider"></div>
          <h3 className="blog-card-title">
            {title}
          </h3>
          <div className="blog-card-date">
            <Calendar className="date-icon" />
            {date}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
