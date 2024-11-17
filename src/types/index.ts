export type User = {
  id: string;
  name: string;
  email: string;
  role: 'farmer' | 'consumer';
};

export type Product = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  location: string;
  description?: string;
  farmerId: string;
  category: 'milk' | 'fodder' | 'other';
  image: string;
};

export type CartItem = {
  productId: string;
  quantity: number;
};

export type NewsArticle = {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
};