import React from 'react';
import { useParams } from 'react-router-dom';
import { useBlogs } from '../Contexts/BlogContext'; 
import BlogList from './BlogList'; 
import './BlogPost.css';       

const BlogPostPage: React.FC = () => {
  const { id } = useParams();                   
  const { blogPosts } = useBlogs();             
  const post = blogPosts.find((p) => p.id === id); 

  if (!post) {
    return <div>Blog post not found.</div>;
  }

  return (
    <div className="blog-post-page">
      <div className="blog-post-image">
        <img src={post.imageUrl} alt={post.title} />
      </div>
      <div className="blog-post-content">
        <h1>{post.title}</h1>
        <p className="blog-post-author">
          By {post.author} - {post.date}
        </p>
        <div className="blog-post-text">
          {post.content}
        </div>
      </div>
      <div className="blog-post-list">
        <h2>Check out other articles</h2>
        <BlogList />
      </div>
    </div>
  );
};

export default BlogPostPage;
