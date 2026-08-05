import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const payroll = await request.json();

  const updatedPayroll = {
    ...payroll,
    id: Number(id),
  };

  return NextResponse.json(updatedPayroll);
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
