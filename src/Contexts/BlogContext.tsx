import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  content: string;
}

interface BlogContextProps {
  blogPosts: BlogPost[];
}

const BlogContext = createContext<BlogContextProps>({ blogPosts: [] });

export const BlogProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [blogPosts] = useState<BlogPost[]>([
    {
      id: '1',
      title: 'Welcome to My Blog',
      author: 'Alice Johnson',
      date: 'Jan 3, 2025',
      excerpt: 'An introduction to my new blog...',
      imageUrl: 'https://picsum.photos/400/300?random=1',
      content: 'Full blog content for "Welcome to My Blog"...'
    },
    {
      id: '2',
      title: 'React Context Simplified',
      author: 'Bob Smith',
      date: 'Jan 4, 2025',
      excerpt: 'Today, let’s talk about React Context and how it replaces prop drilling...',
      imageUrl: 'https://picsum.photos/400/300?random=2',
      content: 'Full blog content for "React Context Simplified"...'
    }
  ]);

  return (
    <BlogContext.Provider value={{ blogPosts }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogs = () => {
  return useContext(BlogContext);
};
