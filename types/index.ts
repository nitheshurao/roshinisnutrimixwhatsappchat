// types.ts

// types/next-auth.d.ts
import NextAuth from "next-auth";
export interface CartItem {
  _id: string;
  name: string;
  quantity: number;
  prices: number;
}

export interface CheckoutData {
  name: string;
  email: string;
  city: string;
  postalCode: string;
  streetAddress: string;
  country: string;
  cartItems: Array<{ id: string; quantity: number; price: number }>;
  totalPrice: number;
  user: string | undefined;
}
export interface CartItem {
    images: any;
    material: string;
    _id: string;
    name: string;
    prices: number;
    quantity: number;
  }
  
  export interface CartState {
    items: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (itemId: string) => void;
    updateItemQuantity: (itemId: string, quantity: number) => void;
    clearCart: () => void;
    getTotalItems: () => number;
    getTotalPrice: () => number;
  }

export interface User {
    _id: string;
    name: string;
    email: string;
    admin: boolean;
    profileImage: string;
    notificationPreferences: {
      orderUpdates: boolean;
      promotions: boolean;
    };
  }
  
  export interface Product {
    _id: string;
    name: string;
    description: string;
    images: string[];
    prices: number;
    originalPrice: number;
    quantity: number;
    condition: string;
    user: User;
    reviews: any[]; // Add specific types if reviews have structure
    averageRating: number;
    numReviews: number;
    featured: boolean;
    createdAt: string;
    updatedAt: string;
  }
  