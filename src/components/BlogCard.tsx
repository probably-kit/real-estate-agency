import React from 'react';
import './BlogCard.css';

type BlogCardProps = {
    id: string; 
    title: string;
    author: string;
    date: string;
    excerpt: string;
    imageUrl: string;
    onClick?: () => void;
  };
  

const BlogCard: React.FC<BlogCardProps> = ({
    id,
    title,
    author,
    date,
    excerpt,
    imageUrl,
    onClick
  }) => {
    return (
      <div
        className="blog-card"
        onClick={onClick}
        role="button"
        data-blog-id={id} // Use it as a data attribute, for instance
      >
        <div className="blog-image">
          <img src={imageUrl} alt={title} className="blog-thumbnail" />
        </div>
        <div className="blog-details">
          <h3 className="blog-title">{title}</h3>
          <p className="blog-author">
            {author} - {date}
          </p>
          <p className="blog-excerpt">{excerpt}</p>
        </div>
      </div>
    );
  };
  
export default BlogCard;