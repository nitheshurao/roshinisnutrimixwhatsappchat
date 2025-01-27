// src/models/productModel.ts
import mongoose, { Schema, Document, Model, models, model } from 'mongoose';

// Define the TypeScript interface for the Product model
export interface IProduct extends Document {
  name: string;
  description: string;
  images: string[];
  prices: number;
  originalPrice?: number;
  quantity: number;
  condition: 'new' | 'used' | 'refurbished';
  user: mongoose.Types.ObjectId;
  reviews: mongoose.Types.ObjectId[];
  averageRating?: number;
  numReviews?: number;
  featured: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  hasUserPurchased(userId: mongoose.Types.ObjectId): Promise<boolean>;
}

// Define the Product schema
const ProductSchema: Schema<IProduct> = new Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    images: [
      {
        type: String,
        required: [true, "At least one image is required"],
      },
    ],
    prices: {
      type: Number,
      required: [true, "Price is required"],
    },
    originalPrice: {
      type: Number,
    },
    quantity: {
      type: Number,
      // required: [true, "Quantity is required"],
      min: [0, "Quantity cannot be less than 0"],
    },
    condition: {
      type: String,
      enum: ["new", "used", "refurbished"], // Possible values for condition
      default: "new",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
    averageRating: {
      type: Number,
      default: 0,
      min: [0, "Rating must be at least 0"],
      max: [5, "Rating cannot exceed 5"],
    },
    numReviews: {
      type: Number,
      default: 0,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // Automatically manages createdAt and updatedAt fields
  }
);

// Custom method to check if the user has purchased the product
ProductSchema.methods.hasUserPurchased = async function (userId: mongoose.Types.ObjectId): Promise<boolean> {
  const Order = this.model('Order');
  const order = await Order.findOne({
    user: userId,
    cartproducts: this._id,
  });
  return !!order; // Returns true if an order is found, false otherwise
};

// Check if the model already exists to avoid overwrite issues in development
const Product: Model<IProduct> = models.Product || model<IProduct>("Product", ProductSchema);

export default Product;
