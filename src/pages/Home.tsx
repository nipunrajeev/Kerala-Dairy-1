import React from 'react';
import { ProductCard } from '../components/ProductCard';
import { NewsCard } from '../components/NewsCard';
import { Milk, Truck, Users } from 'lucide-react';

// Mock data
const featuredProducts = [
  {
    id: '1',
    name: 'Fresh Farm Milk',
    price: 60,
    quantity: 1,
    location: 'Kochi, Kerala',
    farmerId: '1',
    category: 'milk',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=800',
    description: 'Fresh farm milk delivered daily'
  },
  {
    id: '2',
    name: 'Organic Fodder',
    price: 400,
    quantity: 50,
    location: 'Thrissur, Kerala',
    farmerId: '2',
    category: 'fodder',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800',
    description: 'High quality organic fodder'
  }
];

const newsArticles = [
  {
    id: '1',
    title: 'Kerala Dairy Sector Shows Promising Growth',
    description: 'The dairy sector in Kerala has shown remarkable growth in the past year with increased production and farmer participation.',
    date: 'March 15, 2024',
    image: 'https://images.unsplash.com/photo-1516054575922-f0b8eeadec1a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'New Initiatives to Support Dairy Farmers',
    description: 'Government announces new support schemes for dairy farmers in Kerala to boost production and improve quality.',
    date: 'March 14, 2024',
    image: 'https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&q=80&w=800'
  }
];

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Connect with Kerala's Finest Dairy Farmers
          </h1>
          <p className="text-xl mb-8">
            Fresh dairy products directly from local farmers to your doorstep
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Started
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Milk className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
            <p className="text-gray-600">
              Fresh and high-quality dairy products from verified local farmers
            </p>
          </div>
          <div className="text-center p-6">
            <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Truck className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Quick Delivery</h3>
            <p className="text-gray-600">
              Same-day delivery to ensure freshness and convenience
            </p>
          </div>
          <div className="text-center p-6">
            <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Direct Connection</h3>
            <p className="text-gray-600">
              Connect directly with farmers for the best prices and quality
            </p>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Market News */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">Market News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsArticles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};