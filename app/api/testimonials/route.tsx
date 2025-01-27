import connect from "@/utils/config/dbConnection";
import Testimonial from "@/utils/models/Testimonial";
import { NextResponse } from "next/server";

export async function GET() {
  await connect();

  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    return NextResponse.json({ testimonials }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch testimonials", details: error }, { status: 500 });
  }
}

export async function POST(req: Request) {
  await connect();

  try {
    const { name, feedback, images, location } = await req.json();

    if (!name || !feedback || !images || images.length === 0 || !location) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const newTestimonial = await Testimonial.create({
      name,
      feedback,
      images,
      location,
    });

    return NextResponse.json({ message: "Testimonial added", testimonial: newTestimonial }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to add testimonial", details: error }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  await connect();

  try {
    const { id, name, feedback, images, location } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "Testimonial ID is required" }, { status: 400 });
    }

    const updatedTestimonial = await Testimonial.findByIdAndUpdate(
      id,
      { name, feedback, images, location },
      { new: true }
    );

    if (!updatedTestimonial) {
      return NextResponse.json({ error: "Testimonial not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Testimonial updated", testimonial: updatedTestimonial }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update testimonial", details: error }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  await connect();

  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "Testimonial ID is required" }, { status: 400 });
    }

    const deletedTestimonial = await Testimonial.findByIdAndDelete(id);

    if (!deletedTestimonial) {
      return NextResponse.json({ error: "Testimonial not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Testimonial deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete testimonial", details: error }, { status: 500 });
  }
}
