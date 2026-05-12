import { gemstoneProducts, rudrakshaProducts, braceletProducts, Product } from '../constants/data';

const ALL_PRODUCTS = [...gemstoneProducts, ...rudrakshaProducts, ...braceletProducts];

export const productService = {
  getProducts: async (): Promise<Product[]> => {
    await new Promise(resolve => setTimeout(resolve, 800));
    return ALL_PRODUCTS;
  },
  getProductsByCategory: async (category: string): Promise<Product[]> => {
    await new Promise(resolve => setTimeout(resolve, 600));
    return ALL_PRODUCTS.filter(p => p.category === category);
  },
  getProductById: async (id: number): Promise<Product | undefined> => {
    await new Promise(resolve => setTimeout(resolve, 400));
    return ALL_PRODUCTS.find(p => p.id === id);
  }
};
