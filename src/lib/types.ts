// src/types/Product.ts
export type Product = {
  name: string;
  description: string;
  price: number;
  quantity: number;
  unit: "unit" | "g" | "kg" | "oz" | "lb" | "ml" | "l" | "fl oz" | "gal";
};
