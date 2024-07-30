"use server";

import { Product } from "@/lib/types";
import { setDoc, collection, doc, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

// Add a new product to the database; returns true if there's an error
export const addItem = async (item: Product) => {
  try {
    const itemRef = doc(collection(db, "items"), item.name);
    await setDoc(itemRef, item);
  } catch (error) {
    console.error("Error adding product: ", error);
    return true;
  }
};

// Get all products from the database; returns an array of products
export const getItems = async () => {
  const items: Product[] = [];
  const querySnapshot = await getDocs(collection(db, "items"));

  querySnapshot.forEach((doc) => {
    items.push(doc.data() as Product);
  });

  return items;
};

// Update a product in the database; returns true if there's an error
export const updateItem = async (item: Product) => {};
