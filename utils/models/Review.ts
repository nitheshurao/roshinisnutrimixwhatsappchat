// src/models/reviewModel.ts
import mongoose, { Schema, Document, Model, models, model } from 'mongoose';

export interface IReview extends Document {
  user: mongoose.Types.ObjectId;
  product: mongoose.Types.ObjectId;
  rating: number;
  comment: string;
  createdAt?: Date;
}

// Define the Review schema
const ReviewSchema: Schema<IReview> = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: false, // No need for updatedAt since reviews are not typically updated
  }
);

// Check if the model already exists to avoid overwriting issues in development
const Review: Model<IReview> = models.Review || model<IReview>("Review", ReviewSchema);

export default Review;
