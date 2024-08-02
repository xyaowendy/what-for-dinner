import { NextResponse } from "next/server";
import { getRecipes } from "@/lib/recipes";

export async function GET() {
  try {
    await getRecipes();
  } catch (e) {
    console.error(e);
    return NextResponse.error();
  }
}
