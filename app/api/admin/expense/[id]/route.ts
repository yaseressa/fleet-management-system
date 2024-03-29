import { NextRequest, NextResponse } from "next/server";
import models from "../../../../../models";
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;
    const result = await models.Expense.findOne({
      where: { id },
      include: { model: models.Vehicle },
    });
    return NextResponse.json(result);
  } catch (e) {
    return NextResponse.json({ message: e.message }, { status: 400 });
  }
}
export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;
    const data = await req.json();
    const result = await models.Expense.create({
      id,
      ...data,
    });
    return NextResponse.json({ result: result, message: "Created" });
  } catch (e) {
    return NextResponse.json({ message: e.message }, { status: 400 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;
    const deleted = await models.Expense.destroy({
      where: {
        id,
      },
    });
    return NextResponse.json({ message: `Expense ${id} was deleted.` });
  } catch (e) {
    return NextResponse.json({ message: e.message }, { status: 400 });
  }
}
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;
    const data = await req.json();
    const updated = await models.Expense.update(
      { ...data },
      {
        where: { id },
      }
    );
    return NextResponse.json({ message: `Expense ${id} was updated.` });
  } catch (e) {
    return NextResponse.json({ message: e.message }, { status: 400 });
  }
}
