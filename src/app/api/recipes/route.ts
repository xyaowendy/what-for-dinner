import { NextResponse } from "next/server";
import { getRecipes } from "@/lib/recipes";

export async function GET() {
  try {
    const recipes = await getRecipes();
    return NextResponse.json(recipes);
  } catch (e) {
    console.error(e);
    return NextResponse.error();
  }
}
