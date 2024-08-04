"use client";

import { generateText } from "@/actions/gemini";
import { Product } from "@/lib/types";
import { useEffect, useState } from "react";

const Recipes = ({ items }: { items: Product[] }) => {
  const [recipes, setRecipes] = useState("");

  //   const getRecipes = async () => {
  //     const recipes = await generateText(
  //       "What meals or baked goods can I make with eggs, milk, and flour and sugar?"
  //     );
  //     return setRecipes(recipes);
  //   };

  //   useEffect(() => {
  //     getRecipes();
  //   }),
  //     [];
  const test = () => {
    console.log(
      generateText(
        "What meals or baked goods can I make with eggs, milk, and flour and sugar?"
      )
    );
  };
  test();

  return <div>{recipes}</div>;
};

export default Recipes;
