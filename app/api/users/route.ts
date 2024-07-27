// app/api/users/route.ts
import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongoose";
import User from "@/models/user";

export async function GET() {
  try {
    await connectToDatabase();
    const users = await User.find({});
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.error();
  }
}

export async function POST(request: Request) {
  try {
    await connectToDatabase();
    const { name, email } = await request.json();
    const newUser = await User.create({ name, email });
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    return NextResponse.error();
  }
}
