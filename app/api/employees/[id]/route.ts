import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const employee = await request.json();

  const updatedEmployee = {
    ...employee,
    id: Number(id),
  };

  return NextResponse.json(updatedEmployee);
}