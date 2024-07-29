// src/types/Product.ts
export type Product = {
  id?: string; // Optional because Firestore will generate it
  name: string;
  price?: number;
  description: string;
  quantity: number;
};
