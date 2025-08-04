import {
  createContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
  type ReactNode,
} from "react";
import type { CartContextType, CartItem } from "../types/cart";
import { useToast } from "./ToastContext";

export const CartContext = createContext<CartContextType | undefined>(undefined);

const STORAGE_KEY = "cart_items";

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {

    const stored = localStorage.getItem(STORAGE_KEY);
    try {
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
const {showToast} = useToast()

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

const addToCart = useCallback((item: CartItem) => {
  setCartItems(prev => {
    const existing = prev.find(
      i =>
        i.id === item.id &&
        i.selectedColor?.id === item.selectedColor?.id &&
        i.selectedMemory?.memory_value === item.selectedMemory?.memory_value
    );

    if (existing) {
      return prev.map(i =>
        i.id === item.id &&
        i.selectedColor?.id === item.selectedColor?.id &&
        i.selectedMemory?.memory_value === item.selectedMemory?.memory_value
          ? { ...i, quantity: i.quantity + item.quantity }
          : i
      );
    }

    return [...prev, item];
  });
  showToast("Adăugat în coș");
}, [showToast]);

const removeFromCart = useCallback((id: number, colorId?: number, memoryValue?: string) => {
  setCartItems(prev =>
    prev.filter(item =>
      !(
        item.id === id &&
        item.selectedColor?.id === colorId &&
        item.selectedMemory?.memory_value === memoryValue
      )
    )
  );
}, []);

const updateQuantity = useCallback((id: number, quantity: number, colorId?: number, memoryValue?: string) => {
  setCartItems(prev =>
    prev.map(item =>
      item.id === id &&
      item.selectedColor?.id === colorId &&
      item.selectedMemory?.memory_value === memoryValue
        ? { ...item, quantity: Math.max(1, quantity) }
        : item
    )
  );
}, []);


  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const total = useMemo(
    () =>
      cartItems.reduce(
        (sum, item) => item.selectedMemory? sum+item.selectedMemory.price * item.quantity : sum + item.product.start_price * item.quantity,
        0
      ),
    [cartItems]
  );

  const totalItems = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems]
  );

  const value = useMemo(
    () => ({
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      total,
      totalItems,
    }),
    [
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      total,
      totalItems,
    ]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
