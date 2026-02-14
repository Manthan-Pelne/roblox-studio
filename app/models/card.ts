import mongoose, { Schema, model, models } from "mongoose";
import slugify from "slugify";

// We don't need to import Category here, but we reference the name "Category"
const AllCardSchema = new Schema({
  name: { 
    type: String, 
    required: [true, "Name is required"],
    trim: true 
  },
  slug: { 
    type: String,
    lowercase: true 
  },
  code: { type: String },
  image: { 
    url: String, 
    public_id: String // Better to define sub-fields if using Cloudinary/S3
  },
  downloadcount: { type: Number, default: 0 },
  viewcount: { type: Number, default: 0 },
  category: { 
    type: Schema.Types.ObjectId, 
    ref: "Category", // This must match the string in model("Category", ...)
    required: true 
  },
}, { timestamps: true });

// Auto-generate slug
AllCardSchema.pre("save", function (next) {
  if (this.isModified("name") || !this.slug) {
    this.slug = slugify(this.name, { lower: true, strict: true });
  }
  next();
});

// The "models.card ||" prevents the OverwriteModelError
const Card = models.card || model("card", AllCardSchema);
export default Card;