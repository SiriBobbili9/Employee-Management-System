import { NextRequest, NextResponse } from "next/server";

// UPDATE Department
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const department = await request.json();

  const updatedDepartment = {
    ...department,
    id: Number(id),
  };

  return NextResponse.json(updatedDepartment);
}

// DELETE Department
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  return NextResponse.json({
  department: {
    id: Number(id),
  },
});
}