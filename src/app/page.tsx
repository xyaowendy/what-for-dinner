"use client";

import { useEffect, useState } from "react";
import { IRecipe } from "@/interface/IRecipe";
import { fetchRecipes } from "@/api/recipes";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState<IRecipe>();

  const getRandomRecipeName = (recipes: IRecipe[]) => {
    const totalCount = recipes?.length || 0;
    const random = Math.floor(Math.random() * totalCount);
    setSelectedRecipe(recipes[random]);
  };

  useEffect(() => {
    fetchRecipes()
      .then((data) => {
        setRecipes(data);
        getRandomRecipeName(data);
      })
      .catch((error) => setError(error));
  }, []);

  if (error) return <p>Error: {error}</p>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono lg:flex">
        <p className="text-2xl fixed left-0 top-0 flex w-full justify-center from-zinc-200 pb-6 pt-8 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          So dinner is...
        </p>
      </div>

      <h2 className="mb-3 text-5xl font-semibold">{selectedRecipe?.name}</h2>

      <div className="mb-32 text-center lg:mb-0 lg:w-full lg:max-w-5xl">
        <button
          className="border-2 border-amber-400 text-3xl rounded-lg py-3 px-7 hover:bg-amber-50 hover:text-black hover:border-2 hover:border-black"
          onClick={() => getRandomRecipeName(recipes)}
        >
          ROLL
        </button>
      </div>
    </main>
  );
}
