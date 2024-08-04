"use client";

import chat from "@/actions/openrouter";
import { Product } from "@/lib/types";
import { useEffect, useState } from "react";

const Recipes = ({ items }: { items: Product[] }) => {
  const [recipes, setRecipes] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      if (items) {
        const prompt = `Given the following ingredients: ${items
          .map((item) => String(item.quantity + item.unit + item.name))
          .join(
            ", "
          )}, what are some recipes I can make? Please return a series of foods in a comma separated list.`;
        const response = await chat(prompt);
        if (!response || response.error) {
          console.log(response.error);
          setError(true);
          setLoading(false);
          return;
        }
        setRecipes(response.choices[0].message.content);
        setLoading(false);
      }
    })();
  }, [items]);

  return (
    <div className='w-full h-full border rounded-md border-accent'>
      {loading
        ? "..."
        : error
        ? "Sorry, there was an error with the AI api! (probably a rate limit)"
        : recipes}
    </div>
  );
};

export default Recipes;
