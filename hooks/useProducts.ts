import { useState, useEffect } from "react";
import { Product } from "../types";
import { coffeeProducts } from "../data/products";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Giả lập loading
    const timer = setTimeout(() => {
      setProducts(coffeeProducts);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return {
    products,
    loading,
    error: null,
    refetch: () => {},
  };
};
