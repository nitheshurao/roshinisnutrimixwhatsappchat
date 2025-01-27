import mongoose, { Schema, Document, Model } from "mongoose";

interface ITestimonial extends Document {
  name: string;
  feedback: string;
  images: string[];
  location: string;
  productId: mongoose.Types.ObjectId; // Reference to the product
}

const TestimonialSchema: Schema<ITestimonial> = new Schema(
  {
    name: { type: String, required: true },
    feedback: { type: String, required: true },
    images: { type: [String], required: true },
    location: { type: String, required: true },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      }, // Reference field
  },
  { timestamps: true }
);

const Testimonial: Model<ITestimonial> =
  mongoose.models.Testimonial || mongoose.model<ITestimonial>("Testimonial", TestimonialSchema);

export default Testimonial;
