import { NextResponse } from "next/server";
import { conn } from "../../libs/mysql";

export async function GET() {
  try {
    const result = await conn.query("SELECT * FROM solicitudes");
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const {
      codigo,
      fecha_registro,
      interesado,
      tipo_doc,
      oficina_destino,
      ubicacion,
    } = await request.json();
    const result = await conn.query("INSERT INTO solicitudes SET ?", {
      codigo,
      fecha_registro,
      interesado,
      tipo_doc,
      oficina_destino,
      ubicacion,
    });
    return NextResponse.json({ id: result.insertId });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
