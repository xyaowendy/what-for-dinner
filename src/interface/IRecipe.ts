import { Document, ObjectId } from "mongodb";

export interface IRecipe extends Document {
  _id: ObjectId;
  name: string;
  ingredients: Ingredient[];
  category?: string[];
  instructions?: string;
}

interface Ingredient {
  name: string;
  quantity?: number;
  unit?: "kg" | "pc";
}
