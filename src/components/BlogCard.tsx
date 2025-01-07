import React from 'react';
import './BlogCard.css';

type BlogCardProps = {
  title: string;
  author: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  onClick?: () => void;
};

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  author,
  date,
  excerpt,
  imageUrl,
  onClick
}) => {
  return (
    <div className="blog-card" onClick={onClick} role="button">
      <div className="blog-image">
        <img src={imageUrl} alt={title} className="blog-thumbnail" />
      </div>
      <div className="blog-details">
        <h3 className="blog-title">{title}</h3>
        <p className="blog-author">By {author} - {date}</p>
        <p className="blog-excerpt">{excerpt}</p>
      </div>
    </div>
  );
};

export default BlogCard;
