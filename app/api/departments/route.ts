import { NextRequest, NextResponse } from "next/server";
import { departments } from "../../constants/departments";

export async function GET() {
  return NextResponse.json(departments);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const newDepartment = {
    id:
      departments.length > 0
        ? Math.max(...departments.map((d) => d.id)) + 1
        : 1,
    ...body,
  };

  departments.push(newDepartment);

  return NextResponse.json(newDepartment, { status: 201 });
}