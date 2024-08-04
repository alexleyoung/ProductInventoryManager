"use client";

import RecipeCard from "@/components/dashboard/RecipeCard";
import { Skeleton } from "@/components/ui/skeleton";

import chat from "@/actions/openrouter";
import { Product, Recipe } from "@/lib/types";
import { useEffect, useState } from "react";

const Recipes = ({ items }: { items: Product[] }) => {
  const [recipes, setRecipes] = useState<Recipe[]>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      // If no items, don't request AI
      if (items.length === 0) {
        return;
      }

      // AI Prompt
      const prompt = `Given the following ingredients: ${items
        .map((item) => item.name)
        .join(
          ", "
        )}, list up to 10 recipes I can make. Not all ingredients need to be used. 
        Make the output a JSON with keys being the recipe name, and value the 
        recipe information as a nested object. Example output: {"recipe name": {description: "description", ingredients: ["ingredient1", "ingredient2"], steps: ["step1", "step2"]}}`;
      const response = await chat(prompt);

      // Handle error(s)
      if (!response || response.error) {
        console.log(response.error);
        setError(true);
        setLoading(false);
        return;
      }

      // Transform JSON response into an array of recipes
      const recipes = Object.entries(
        JSON.parse(response.choices[0].message.content)
      );
      console.log(recipes);

      // Update states
      setRecipes(recipes as Recipe[]);
      setLoading(false);
    })();
  }, [items]);

  return (
    <div className='w-full rounded-md border-accent grid gap-4 md:grid-cols-2'>
      {loading ? (
        <>
          <Skeleton className='size-full' />
          <Skeleton className='size-full' />
        </>
      ) : error ? (
        "Sorry, there was an error with the AI api! (probably a rate limit)"
      ) : (
        recipes?.map((recipe, i) => <RecipeCard key={i} item={recipe} />)
      )}
    </div>
  );
};

export default Recipes;
