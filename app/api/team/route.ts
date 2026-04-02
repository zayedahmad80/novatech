import dbConnect from '@/lib/mongodb';
import Team from '@/models/Team';
import { NextResponse } from 'next/server';

// GET all team members
export async function GET() {
  try {
    await dbConnect();
    const team = await Team.find({}).sort({ order: 1 });
    return NextResponse.json(team);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch team' }, { status: 500 });
  }
}

// POST create new team member
export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();
    const team = await Team.create(body);
    return NextResponse.json(team, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create team member' }, { status: 500 });
  }
}