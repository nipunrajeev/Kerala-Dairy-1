import React, { useState } from 'react';
import { Plus, Edit2, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { useAuth } from '../context/AuthContext';

// Mock farmer's products
const farmerProducts: Product[] = [
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
    farmerId: '1',
    category: 'fodder',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800',
    description: 'High quality organic fodder'
  }
];

export const FarmerDashboard: React.FC = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState(farmerProducts);

  const handleDeleteProduct = (productId: string) => {
    setProducts(products.filter(product => product.id !== productId));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Farmer Dashboard</h1>
            <p className="mt-2 text-gray-600">Welcome back, {user?.name}</p>
          </div>
          <Link
            to="/farmer/add-product"
            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            <Plus className="h-5 w-5 mr-2" />
            Add New Product
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Your Products</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {products.map((product) => (
              <div key={product.id} className="px-4 py-4 sm:px-6 flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-16 w-16 rounded-lg object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">{product.name}</h4>
                    <p className="text-gray-500">₹{product.price} • {product.quantity} units</p>
                    <p className="text-sm text-gray-500">{product.location}</p>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <Link
                    to={`/farmer/edit-product/${product.id}`}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Edit2 className="h-5 w-5" />
                  </Link>
                  <button
                    onClick={() => handleDeleteProduct(product.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};