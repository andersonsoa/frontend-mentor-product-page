import { createContext, useContext, useState } from "react";

type Item = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

interface CartContext {
  cart: Item[];
  addToCart: (item: Item) => void;
  removeFromCart: (id: string) => void;
}

interface CartProviderProps {
  children: React.ReactNode;
}

const CartContext = createContext({} as CartContext);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<Item[]>([]);

  const addToCart = (item: Item) => setCart([...cart, item]);

  const removeFromCart = (id: string) =>
    setCart(cart.filter((item) => item.id !== id));

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
