import dbConnect from '@/lib/mongodb';
import Review from '@/models/Review';
import { NextResponse } from 'next/server';

// GET all reviews
export async function GET() {
  try {
    await dbConnect();
    const reviews = await Review.find({ featured: true }).sort({ order: 1 });
    return NextResponse.json(reviews);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 500 });
  }
}

// POST create new review
export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();
    const review = await Review.create(body);
    return NextResponse.json(review, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create review' }, { status: 500 });
  }
}