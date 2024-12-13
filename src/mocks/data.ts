import { IRecipe } from "@/interface/IRecipe";
import { Document, ObjectId } from "mongodb";

export const mockRecipes: IRecipe[] = [
  {
    _id: new ObjectId(),
    name: "Kung Pao Chicken",
    ingredients: [
      { name: "Chicken breast", quantity: 0.5, unit: "kg" },
      { name: "Dried red chilies", quantity: 10, unit: "pc" },
      { name: "Peanuts", quantity: 0.1, unit: "kg" },
      { name: "Green bell pepper", quantity: 1, unit: "pc" },
      { name: "Garlic cloves", quantity: 3, unit: "pc" },
      { name: "Ginger", quantity: 0.05, unit: "kg" },
      { name: "Soy sauce", quantity: 0.05, unit: "kg" },
      { name: "Rice vinegar", quantity: 0.02, unit: "kg" },
      { name: "Sugar", quantity: 0.02, unit: "kg" },
      { name: "Cornstarch", quantity: 0.01, unit: "kg" },
      { name: "Sesame oil", quantity: 0.01, unit: "kg" },
      { name: "Salt", quantity: 0.005, unit: "kg" },
      { name: "Sichuan peppercorns", quantity: 0.005, unit: "kg" },
    ],
    category: ["Chinese", "Spicy"],
    instructions:
      "1. Cut the chicken into bite-sized pieces and marinate with soy sauce, rice vinegar, sugar, cornstarch, and salt.\n2. Heat oil in a wok, stir-fry Sichuan peppercorns and dried red chilies until fragrant.\n3. Add garlic and ginger, then the marinated chicken, and stir-fry until cooked through.\n4. Add bell pepper and peanuts, stir-fry briefly.\n5. Drizzle with sesame oil and serve hot.",
  },
  {
    _id: new ObjectId(),
    name: "Mapo Tofu",
    ingredients: [
      { name: "Soft tofu", quantity: 0.4, unit: "kg" },
      { name: "Ground pork", quantity: 0.2, unit: "kg" },
      { name: "Doubanjiang (spicy bean paste)", quantity: 0.03, unit: "kg" },
      { name: "Garlic cloves", quantity: 2, unit: "pc" },
      { name: "Ginger", quantity: 0.02, unit: "kg" },
      { name: "Green onions", quantity: 2, unit: "pc" },
      { name: "Soy sauce", quantity: 0.02, unit: "kg" },
      { name: "Chicken broth", quantity: 0.2, unit: "kg" },
      { name: "Cornstarch", quantity: 0.01, unit: "kg" },
      { name: "Water", quantity: 0.05, unit: "kg" },
      { name: "Sichuan peppercorns", quantity: 0.005, unit: "kg" },
      { name: "Vegetable oil", quantity: 0.02, unit: "kg" },
    ],
    category: ["Chinese", "Spicy", "Tofu"],
    instructions:
      "1. Cut tofu into cubes and blanch in salted water.\n2. Stir-fry Sichuan peppercorns in oil until fragrant, then remove them.\n3. Add doubanjiang, garlic, and ginger; stir-fry until aromatic.\n4. Add ground pork and cook until browned.\n5. Pour in chicken broth and soy sauce; bring to a boil.\n6. Add tofu cubes and simmer to absorb flavors.\n7. Thicken the sauce with cornstarch slurry.\n8. Garnish with chopped green onions and serve hot.",
  },
];
