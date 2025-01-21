import React, { createContext, useContext, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

export interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  content: string;
  imageUrl: string;
}

interface BlogContextProps {
  blogPosts: BlogPost[];
}

const BlogContext = createContext<BlogContextProps>({ blogPosts: [] });

export const BlogProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { t } = useTranslation();

  const blogPosts: BlogPost[] = t('blogPosts', { returnObjects: true }) as BlogPost[];

  return (
    <BlogContext.Provider value={{ blogPosts }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogs = () => {
  return useContext(BlogContext);
};
