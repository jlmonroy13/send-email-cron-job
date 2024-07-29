import connectMongoDB from "@/lib/mongoose";
import Test from "@/models/test";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    await connectMongoDB();
    const test = await Test.create({ name: 'Jorge testing' });
    return NextResponse.json(
      { message: "Test row created", test },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error adding data to test table", error },
      { status: 500 }
    );
  }
}
