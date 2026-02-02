import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const student = await prisma.student.findUnique({
      where: { clerkUserId: userId },
    });

    return NextResponse.json({ student });
  } catch (error) {
    console.error("Error fetching student:", error);
    return NextResponse.json(
      { error: "Failed to fetch student" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { email, grade, classSize } = body;

    const student = await prisma.student.upsert({
      where: { clerkUserId: userId },
      update: {
        email,
        grade,
        classSize,
      },
      create: {
        clerkUserId: userId,
        email,
        grade,
        classSize,
      },
    });

    return NextResponse.json({ student });
  } catch (error) {
    console.error("Error creating/updating student:", error);
    return NextResponse.json(
      { error: "Failed to save student data" },
      { status: 500 }
    );
  }
}
