import { conn } from "@/src/app/libs/mysql";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const result = await conn.query("SELECT * FROM documentos WHERE id=?", [
      params.id,
    ]);
    if (result.length === 0) {
      return NextResponse.json(
        { message: "No se encontró el documento" },
        { status: 404 }
      );
    }
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    const data = await request.json();
    const result = await conn.query("UPDATE documentos SET ? WHERE id=?", [
      data,
      params.id,
    ]);
    if (result.affectedRows === 0) {
      return NextResponse.json(
        { message: "No se encontró el documento" },
        { status: 404 }
      );
    }
    const updatedDocumento = await conn.query(
      "SELECT * FROM documentos WHERE id=?",
      [params.id]
    );
    return NextResponse.json(updatedDocumento[0]);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const result = await conn.query("DELETE FROM documentos WHERE id=?", [
      params.id,
    ]);
    if (result.affectedRows === 0) {
      return NextResponse.json(
        { message: "No se encontró el documento" },
        { status: 404 }
      );
    }
    return new Response(null, { status: 204 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
