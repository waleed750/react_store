// File: src/services/api.ts
import type { Product } from '../types/Product';

export const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch('https://fakestoreapi.com/products');
  return res.json();
};
