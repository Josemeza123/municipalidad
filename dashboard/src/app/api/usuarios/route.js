import { NextResponse } from "next/server";
import { conn } from "../../libs/mysql";

export async function GET() {
  try {
    const result = await conn.query("SELECT * FROM usuarios");
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { codigo, usuario, apellidos, nombres, telefono, direccion } =
      await request.json();
    const result = await conn.query("INSERT INTO solicitudes SET ?", {
      codigo,
      usuario,
      apellidos,
      nombres,
      telefono,
      direccion,
    });
    return NextResponse.json({ id: result.insertId });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
