"use client";

import React, { useEffect, useState } from "react";
import { IRecipe } from "@/interface/IRecipe";
import { fetchRecipes } from "@/api/recipes";
import RecipeList from "@/app/recipes/components/RecipeList";

const RecipesPage = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRecipes()
      .then((data) => setRecipes(data))
      .catch((error) => setError(error));
  }, []);

  if (error) return <p>Error: {error}</p>;

  return <RecipeList recipes={recipes} />;
};

export default RecipesPage;
