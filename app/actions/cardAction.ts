'use server'

import { connectDB } from "@/lib/db";
import Card from "../models/card";
import Category from "../models/category";
 // Must import to register the schema

export async function GetHomePageData(page: number = 1) {
  await connectDB();
  const limit = 6;
  const skip = (page - 1) * limit;

  // Promise.all runs these in parallel (faster than your original sequential awaits)
  const [cards, trending, categories, totalCards, mostdownloads] = await Promise.all([
    Card.find().skip(skip).limit(limit).sort({ _id: -1 }).populate("category").lean(),
    Card.find().limit(12).populate("category").lean(),
    Category.find().lean(),
    Card.countDocuments(),
    Card.find().sort({ downloadcount: -1, _id: -1 }).limit(16).populate("category").lean()
  ]);

  // Helper for your specific category sections (T-shirts, Shirts, etc.)
  const getAggregatedCategory = async (title: string) => {
    return await Card.aggregate([
      { $lookup: { from: "categories", localField: "category", foreignField: "_id", as: "category" } },
      { $unwind: "$category" },
      { $match: { "category.title": { $regex: new RegExp(title, "i") } } },
      { $sort: { _id: -1 } },
      { $limit: 12 }
    ]);
  };

  const [tshirt, shirt, pant] = await Promise.all([
    getAggregatedCategory("t-shirts"),
    getAggregatedCategory("shirts"),
    getAggregatedCategory("Pant")
  ]);

  return {
    cards: JSON.parse(JSON.stringify(cards)),
    trending: JSON.parse(JSON.stringify(trending)),
    categories: JSON.parse(JSON.stringify(categories)),
    tshirt: JSON.parse(JSON.stringify(tshirt)),
    shirt: JSON.parse(JSON.stringify(shirt)),
    pant: JSON.parse(JSON.stringify(pant)),
    mostdownloads: JSON.parse(JSON.stringify(mostdownloads)),
    totalPages: Math.ceil(totalCards / limit),
    currentPage: page
  };
}


//single card for product details 

export async function getSingleCard(slug: string) {
  await connectDB();
  
  const card = await Card.findOne({ slug }).populate("category").lean();
  if (!card) return null;

  // Increment views (equivalent to your FindByIdAndUpdate)
  await Card.findByIdAndUpdate(card._id, { $inc: { viewcount: 1 } });

  const relatedCards = await Card.find({ category: card.category?._id }).limit(10).lean();

  return {
    template: JSON.parse(JSON.stringify(card)),
    relatedCards: JSON.parse(JSON.stringify(relatedCards))
  };
}