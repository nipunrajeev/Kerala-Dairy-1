import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { Products } from './pages/Products';
import { Cart } from './pages/Cart';
import { FarmerDashboard } from './pages/FarmerDashboard';
import { AddProduct } from './pages/AddProduct';
import { useAuth } from './context/AuthContext';

// Protected Route component
const ProtectedRoute: React.FC<{
  children: React.ReactNode;
  allowedRole?: 'farmer' | 'consumer';
}> = ({ children, allowedRole }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRole && user.role !== allowedRole) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/products" element={<Products />} />
              <Route
                path="/cart"
                element={
                  <ProtectedRoute allowedRole="consumer">
                    <Cart />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/farmer/dashboard"
                element={
                  <ProtectedRoute allowedRole="farmer">
                    <FarmerDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/farmer/add-product"
                element={
                  <ProtectedRoute allowedRole="farmer">
                    <AddProduct />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;