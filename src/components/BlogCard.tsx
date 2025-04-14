
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

interface BlogCardProps {
  title: string;
  image: string;
  date: string;
  link: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  image,
  date,
  link,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <Link to={link} className="block">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <div className="w-12 h-1 bg-secondary mb-4"></div>
          <h3 className="text-lg font-semibold text-primary hover:text-secondary mb-3 line-clamp-2">
            {title}
          </h3>
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar className="h-4 w-4 mr-1" />
            {date}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
