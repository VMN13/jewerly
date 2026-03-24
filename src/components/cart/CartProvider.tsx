"use client";

import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import { products } from "@/data/products";

type CartItem = {
  productId: number;
  quantity: number;
};

type CartProduct = {
  productId: number;
  quantity: number;
  name: string;
  image: string;
  description: string;
};

type CartContextValue = {
  items: CartItem[];
  cartProducts: CartProduct[];
  totalItems: number;
  totalUniqueItems: number;
  addToCart: (productId: number) => void;
  removeFromCart: (productId: number) => void;
  decreaseFromCart: (productId: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "goldjewerly-cart";

function readStoredCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];

  try {
    const parsed = JSON.parse(raw) as CartItem[];
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (item) =>
        typeof item?.productId === "number" &&
        typeof item?.quantity === "number" &&
        item.quantity > 0,
    );
  } catch {
    return [];
  }
}

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [items, setItems] = useState<CartItem[]>([]);
  const hasHydratedRef = useRef(false);

  useEffect(() => {
    Promise.resolve().then(() => {
      setItems(readStoredCart());
      hasHydratedRef.current = true;
    });
  }, []);

  useEffect(() => {
    if (!hasHydratedRef.current) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addToCart = (productId: number) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.productId === productId);
      if (existing) {
        return prev.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { productId, quantity: 1 }];
    });
  };

  const decreaseFromCart = (productId: number) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.productId === productId
            ? { ...item, quantity: Math.max(0, item.quantity - 1) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeFromCart = (productId: number) => {
    setItems((prev) => prev.filter((item) => item.productId !== productId));
  };

  const clearCart = () => setItems([]);

  const cartProducts = useMemo(() => {
    return items
      .map((item) => {
        const product = products.find((p) => p.id === item.productId);
        if (!product) return null;
        return {
          productId: item.productId,
          quantity: item.quantity,
          name: product.name,
          image: product.image,
          description: product.description,
        };
      })
      .filter((item): item is CartProduct => item !== null);
  }, [items]);

  const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  );

  const totalUniqueItems = useMemo(() => items.length, [items]);

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      cartProducts,
      totalItems,
      totalUniqueItems,
      addToCart,
      removeFromCart,
      decreaseFromCart,
      clearCart,
    }),
    [items, cartProducts, totalItems, totalUniqueItems],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
