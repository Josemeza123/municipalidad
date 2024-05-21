import { NextResponse } from "next/server";
import { conn } from "../../libs/mysql";

export async function GET() {
  try {
    const result = await conn.query("SELECT * FROM documentos");
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
      dni,
      tipo_doc,
      num_doc,
      num_folios,
      oficina_destino,
      descripcion,
      ubicacion,
    } = await request.json();
    const result = await conn.query("INSERT INTO documentos SET ?", {
      codigo,
      fecha_registro,
      dni,
      tipo_doc,
      num_doc,
      num_folios,
      oficina_destino,
      descripcion,
      ubicacion,
    });
    return NextResponse.json({ id: result.insertId });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
