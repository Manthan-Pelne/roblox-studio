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