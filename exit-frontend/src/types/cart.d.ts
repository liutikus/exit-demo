import type { Product } from "./types";

export interface CartItem {
    id:number
  product: Product;
  quantity:number
}

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  total: number;
  totalItems: number;
}