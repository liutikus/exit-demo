import type { Product } from "./types";

export interface CartItem {
  id: number;
  product: Product;
  quantity: number;
  selectedColor?: {
    id: number;
    name: string;
    hex_code: string;
  };
   selectedMemory?: MemoryOption;
}

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number, colorId?: number, memoryValue?: string) => void;
  updateQuantity: (id: number, quantity: number, colorId?: number, memoryValue?: string) => void;
  clearCart: () => void;
  total: number;
  totalItems: number;
}