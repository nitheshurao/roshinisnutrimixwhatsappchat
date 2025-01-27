// src/models/userModel.ts
import mongoose, { Schema, Document, Model, models, model } from 'mongoose';

// Define the TypeScript interface for the User model
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  admin: boolean;
  profileImage: string;
  wishlist: mongoose.Types.ObjectId[];
  notificationPreferences: {
    orderUpdates: boolean;
    promotions: boolean;
  };
  reviews: mongoose.Types.ObjectId[];
  createdAt?: Date;
  updatedAt?: Date;
  phoneNumber:any;
}

// Define the User schema
const UserSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    phoneNumber:{
      type:Number,
      required:[true,"Phone number is required"]
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      // required: [true, "Password is required"],
      minlength: 6,
    },
    admin: {
      type: Boolean,
      default: false,
    },
    profileImage: {
      type: String,
      default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },
    wishlist: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    notificationPreferences: {
      orderUpdates: { type: Boolean, default: true },
      promotions: { type: Boolean, default: false },
    },
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
  },
  {
    timestamps: true, // Automatically manages createdAt and updatedAt fields
  }
);

// Create the User model or use the existing one
const User: Model<IUser> = models.User || model<IUser>("User", UserSchema);

export default User;
