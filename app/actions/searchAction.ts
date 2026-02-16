'use server'

import { connectDB } from "@/lib/db";
import Card from "../models/card";


export async function searchCards(query: string) {
  if (!query) return [];
  await connectDB();

  const filteredcards = await Card.find({
    $or: [
      { name: { $regex: query, $options: 'i' } },
      { description: { $regex: query, $options: 'i' } },
    ]
  })
  .populate('category')
  .limit(30)
  .lean();

  return JSON.parse(JSON.stringify(filteredcards));
}