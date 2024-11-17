import React, { useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { Filter } from 'lucide-react';
import { Product } from '../types';

// Mock products data
const allProducts: Product[] = [
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
  },
  {
    id: '3',
    name: 'Premium Buffalo Milk',
    price: 80,
    quantity: 1,
    location: 'Palakkad, Kerala',
    farmerId: '3',
    category: 'milk',
    image: 'https://images.unsplash.com/photo-1523473827533-2a64d0d36748?auto=format&fit=crop&q=80&w=800',
    description: 'Rich and creamy buffalo milk'
  }
];

export const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">Browse Products</h1>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full md:w-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="relative inline-flex">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
              >
                <option value="all">All Categories</option>
                <option value="milk">Milk</option>
                <option value="fodder">Fodder</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};