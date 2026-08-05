import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const leave = await request.json();

  const updatedLeave = {
    ...leave,
    id: Number(id),
  };

  return NextResponse.json(updatedLeave);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  return NextResponse.json({
    id: Number(id),
  });
}
