"use server"
import { connectDB } from "@/lib/db";
import Category from "../models/category";
import Card from "../models/card";

export async function getCategories() {
  await connectDB();
  // We convert to plain objects because Next.js can't pass MongoDB BSON directly to Client Components
  const categories = await Category.find({}).lean();
  return JSON.parse(JSON.stringify(categories));
}



export async function getCategoryBySlug(slug: string) {
  try {
    await connectDB();
    
    // Find one category matching the slug
    // We use a case-insensitive regex to be safe with URL casing
    const category = await Category.findOne({ 
      slug: { $regex: new RegExp(`^${slug}$`, "i") } 
    }).lean();

    if (!category) return null;

    // Convert BSON to plain JSON object
    return JSON.parse(JSON.stringify(category));
  } catch (error) {
    console.error("Error fetching category:", error);
    return null;
  }
}



//

export async function getProductsByCategory(categoryName: string) {
  await connectDB();
  
  // Find the category first to get its ID
  // Using a regex for case-insensitive matching (e.g., 'shirts' vs 'Shirts')
  const category = await Category.findOne({ 
    title: { $regex: new RegExp(`^${categoryName}$`, 'i') } 
  });

  if (!category) return [];

  const products = await Card.find({ category: category._id })
    .populate("category")
    .lean();

  return JSON.parse(JSON.stringify(products));
}