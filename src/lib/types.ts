// src/types/Product.ts
export type Product = {
  id?: string; // Optional because Firestore will generate it
  name: string;
  description: string;
  price?: number;
  quantity: number;
};
