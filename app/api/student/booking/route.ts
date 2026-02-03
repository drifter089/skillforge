import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { status, email, grade, classSize } = body;

    if (!["pending", "booked", "completed"].includes(status)) {
      return NextResponse.json(
        { error: "Invalid booking status" },
        { status: 400 }
      );
    }

    // Upsert student with all data in one call
    const student = await prisma.student.upsert({
      where: { clerkUserId: userId },
      update: {
        bookingStatus: status,
        bookedAt: status === "booked" ? new Date() : undefined,
        ...(email && { email }),
        ...(grade && { grade }),
        ...(classSize && { classSize }),
      },
      create: {
        clerkUserId: userId,
        bookingStatus: status,
        bookedAt: status === "booked" ? new Date() : undefined,
        email: email || null,
        grade: grade || null,
        classSize: classSize || null,
      },
    });

    return NextResponse.json({ student });
  } catch (error) {
    console.error("Error updating booking status:", error);
    return NextResponse.json(
      { error: "Failed to update booking status" },
      { status: 500 }
    );
  }
}
