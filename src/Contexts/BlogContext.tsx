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
      title: '5 Tips for First-Time Homebuyers',
      author: 'Juliana Werner',
      date: 'Jan 5, 2025',
      excerpt: 'Navigating the real estate market for the first time? These essential tips will help you make informed decisions and find your dream home.',
      imageUrl: 'https://picsum.photos/400/300?random=1',
      content: `
        Buying your first home is an exciting milestone, but it can also feel overwhelming. Here are five essential tips: 
        understand your budget, get pre-approved, research neighborhoods, hire a trusted agent, and take your time.
      `
    },
    {
      id: '2',
      title: 'Top Real Estate Trends in 2025',
      author: 'Juliana Werner',
      date: 'Jan 10, 2025',
      excerpt: 'Discover the biggest trends shaping the real estate market this year, from smart homes to sustainability.',
      imageUrl: 'https://picsum.photos/400/300?random=2',
      content: `
        The real estate industry is evolving rapidly. In 2025, key trends include the rise of sustainable housing,
        the growing popularity of remote work-friendly properties, and the increasing adoption of smart home technologies.
      `
    },
    {
      id: '3',
      title: 'How to Stage Your Home for Sale',
      author: 'Juliana Werner',
      date: 'Jan 12, 2025',
      excerpt: 'A well-staged home can attract buyers and increase its value. Learn the secrets to effective home staging.',
      imageUrl: 'https://picsum.photos/400/300?random=3',
      content: `
        Staging your home is one of the best ways to make it stand out in the market. Declutter, depersonalize, and highlight
        key features to create a welcoming space that potential buyers can imagine living in.
      `
    },
    {
      id: '4',
      title: 'Is Now the Right Time to Invest in Real Estate?',
      author: 'Juliana Werner',
      date: 'Jan 15, 2025',
      excerpt: 'With the market fluctuating, many are wondering if now is a good time to invest. Let’s break it down.',
      imageUrl: 'https://picsum.photos/400/300?random=4',
      content: `
        Real estate investing can be a profitable venture, but timing is everything. Analyze market trends,
        consider long-term potential, and weigh the risks before making your decision.
      `
    },
    {
      id: '5',
      title: 'Understanding Real Estate Contracts',
      author: 'Juliana Werner',
      date: 'Jan 18, 2025',
      excerpt: 'Buying or selling property? Learn the key elements of real estate contracts to protect your interests.',
      imageUrl: 'https://picsum.photos/400/300?random=5',
      content: `
        Real estate contracts are legally binding agreements. Familiarize yourself with terms like contingencies,
        earnest money, and closing dates to ensure you’re well-informed during your transaction.
      `
    },
    {
      id: '6',
      title: 'The Benefits of Renting vs. Buying',
      author: 'Juliana Werner',
      date: 'Jan 20, 2025',
      excerpt: 'Debating whether to rent or buy? This guide explores the pros and cons of each option to help you decide.',
      imageUrl: 'https://picsum.photos/400/300?random=6',
      content: `
        Renting offers flexibility and lower upfront costs, while buying provides stability and the opportunity
        to build equity. Your decision should depend on your financial situation, lifestyle, and long-term goals.
      `
    }
  ]
  );

  return (
    <BlogContext.Provider value={{ blogPosts }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogs = () => {
  return useContext(BlogContext);
};
