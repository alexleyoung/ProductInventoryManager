"use server";

import { Product } from "@/lib/types";
import {
  doc,
  collection,
  setDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
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
export const updateItem = async (item: Product) => {
  try {
    const itemRef = doc(collection(db, "items"), item.name);
    await updateDoc(itemRef, item);
  } catch (error) {
    console.error("Error updating product: ", error);
    return true;
  }
};

// Delete a product from the database; returns true if there's an error
export const deleteItem = async (item: Product) => {
  try {
    await deleteDoc(doc(collection(db, "items"), item.name));
  } catch (error) {
    console.error("Error deleting product: ", error);
    return true;
  }
};
