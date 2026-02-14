import mongoose, { Schema, model, models } from 'mongoose';
import slugify from 'slugify';

const categorySchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true,
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true,
  },
  description: {
    type: String,
  },
}, { timestamps: true });

// Middleware to generate slug
categorySchema.pre('save', function (next) {
  if (this.isModified('title') || !this.slug) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});

// The "models.Category ||" bit is the most important part for Next.js
const Category = models.Category || model("Category", categorySchema);
export default Category;