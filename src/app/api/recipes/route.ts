import { NextResponse } from "next/server";
import { addRecipe, getAllRecipes } from "@/lib/recipes";

export async function GET() {
  try {
    const recipes = await getAllRecipes();
    return NextResponse.json(recipes);
  } catch (e) {
    console.error(e);
    return NextResponse.error();
  }
}

export async function POST(req: Request) {
  const newRecipe = await req.json();
  const result = await addRecipe(newRecipe);
  return NextResponse.json(result);
}
