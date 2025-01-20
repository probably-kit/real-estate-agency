import React from 'react';
import { useTranslation } from 'react-i18next';
import { useBlogs } from '../Contexts/BlogContext';
import BlogCard from './BlogCard';
import { useNavigate } from 'react-router-dom';
import './BlogList.css';

const BlogList: React.FC = () => {
  const { t } = useTranslation();
  const { blogPosts } = useBlogs();
  const navigate = useNavigate();

  const handleBlogClick = (id: string) => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className="blog-list-container">
      <h1>{t('blogList.heading')}</h1>
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <BlogCard
            key={post.id}
            id={post.id}
            title={post.title}
            author={`${t('blogList.author')} ${post.author}`}
            date={`${t('blogList.date')} ${post.date}`}
            excerpt={post.excerpt}
            imageUrl={post.imageUrl}
            onClick={() => handleBlogClick(post.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
