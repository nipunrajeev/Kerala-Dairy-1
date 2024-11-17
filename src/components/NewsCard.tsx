import React from 'react';
import { NewsArticle } from '../types';

type NewsCardProps = {
  article: NewsArticle;
};

export const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <span className="text-sm text-gray-500">{article.date}</span>
        <h3 className="mt-2 text-xl font-semibold text-gray-900">
          {article.title}
        </h3>
        <p className="mt-2 text-gray-600 line-clamp-3">{article.description}</p>
        <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
          Read More →
        </button>
      </div>
    </div>
  );
};