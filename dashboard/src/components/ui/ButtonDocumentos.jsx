"use client";

import Link from "next/link";

function ButtonDocumentos() {
  return (
    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-3">
      <Link href="/nuevodocumento">Nuevo Documento</Link>
    </button>
  );
}

export default ButtonDocumentos;
