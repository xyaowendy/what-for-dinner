export async function fetchRecipes() {
  const response = await fetch("/api/recipes");
  if (!response.ok) throw new Error("Failed to fetch recipes");
  return response.json();
}
