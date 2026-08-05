import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function GET() {
  const employees = await prisma.employees.findMany();

  return NextResponse.json(employees);
}