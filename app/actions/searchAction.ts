'use server'
import { connectDB } from "@/lib/db";
import Card from "../models/card";

export async function searchCards(query: string) {
  if (!query || query.length < 2) return [];
  try {
    await connectDB();
    const filteredCards = await Card.find({
      $or: [
        { name: { $regex: query, $options: 'i' } },
        { description: { $regex: query, $options: 'i' } },
      ]
    })
    .populate('category')
    .limit(10) // Limit for dropdown performance
    .lean();

    return JSON.parse(JSON.stringify(filteredCards));
  } catch (e) {
    return [];
  }
}