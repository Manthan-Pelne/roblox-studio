'use server'

import { connectDB } from "@/lib/db";
import Card from "../models/card";


export async function incrementDownload(cardId: string) {
  await connectDB();
  await Card.findByIdAndUpdate(cardId, { $inc: { downloadcount: 1 } });
}