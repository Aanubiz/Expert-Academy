export type ProductType = 'course' | 'software' | 'api' | 'service';

export interface Product {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  price: number;
  type: ProductType;
  category: string;
  tags: string[];
  features?: string[];
  image?: string;
  duration?: string; // Pour les cours
  level?: 'beginner' | 'intermediate' | 'advanced';
  softwareType?: 'desktop' | 'web' | 'mobile'; // Pour logiciels
  subscriptionType?: 'monthly' | 'yearly' | 'lifetime'; // Pour APIs
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  purchasedCourses: string[];
  orders: Order[];
}

export interface Order {
  id: string;
  date: Date;
  total: number;
  items: CartItem[];
  status: 'pending' | 'completed' | 'cancelled';
}