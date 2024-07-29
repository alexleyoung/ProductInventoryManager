"use server";

import { Product } from "@/lib/types";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebase";

// Add a new product to the database; returns true if there's an error
export const addItem = async (item: Product) => {
  try {
    await addDoc(collection(db, "items"), item);
  } catch (error) {
    console.error("Error adding product: ", error);
    return true;
  }
};
