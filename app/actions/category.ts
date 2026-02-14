"use server"
import { connectDB } from "@/lib/db";
import Category from "../models/category";

export async function getCategories() {
  await connectDB();
  // We convert to plain objects because Next.js can't pass MongoDB BSON directly to Client Components
  const categories = await Category.find({}).lean();
  return JSON.parse(JSON.stringify(categories));
}