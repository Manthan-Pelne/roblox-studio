"use server"
import { connectDB } from "@/lib/db";
import Card from "../models/card";

export async function getCards() {
  await connectDB();
  
  // .populate('category') replaces the ID with the actual Category object
  const cards = await Card.find({})
    .populate('category') 
    .sort({ createdAt: -1 })
    .lean();

  return JSON.parse(JSON.stringify(cards));
}