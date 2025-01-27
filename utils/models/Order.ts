// src/models/orderModel.ts
import mongoose, { Schema, Document, Model, models, model } from 'mongoose';

export interface IOrder extends Document {
  user: mongoose.Types.ObjectId;
  name: string;
  email: string;
  orderItems: Array<{
    productId: mongoose.Types.ObjectId;
    name: string;
    quantity: number;
    price: number;
  }>;
  total: number;
  totalPrice:number

  paymentStatus: 'pending' | 'completed';
  orderStatus: 'processing' | 'pending' | 'shipped' | 'delivered' | 'cancelled' | 'payment_failed';
  status: 'processing' | 'pending' | 'shipped' | 'delivered' | 'cancelled' | 'payment_failed';
 
  createdAt?: Date;
  updatedAt?: Date;
  razorpayOrderId:string
  address: mongoose.Types.ObjectId;
}

const OrderSchema: Schema<IOrder> = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide customer's name"],
    },
    email: {
      type: String,
      required: [true, "Please provide customer's email"],
    },
   
    orderItems: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
      },
    ],
    
    total: {
      type: Number,
      required: [true, "Must have a total number"],
    },
    totalPrice: {
      type: Number,
      required: [true, "Must have a total number"],
    },
    status: {
      type: String,
      enum: ["processing", "pending", "shipped", "delivered", "cancelled", "payment_failed"],
      default: "pending",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    address:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
    },
    razorpayOrderId: { type: String },
    paymentStatus: { type: String, default: 'pending' },
    orderStatus: { type: String, default: 'processing' },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Check if the model already exists to avoid overwriting issues in development
const Order: Model<IOrder> = models.Order || model<IOrder>("Order", OrderSchema);

export default Order;
