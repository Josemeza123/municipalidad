import React from "react";
import CeldaTabla from "./ui/CeldaTabla";

function DocumentosList({ documento }) {
  return (
    <tr>
      <CeldaTabla>{documento.codigo}</CeldaTabla>
      <CeldaTabla>{documento.fecha_registro}</CeldaTabla>
      <CeldaTabla>{documento.dni}</CeldaTabla>
      <CeldaTabla>{documento.tipo_doc}</CeldaTabla>
      <CeldaTabla>{documento.num_doc}</CeldaTabla>
      <CeldaTabla>{documento.num_folios}</CeldaTabla>
      <CeldaTabla>{documento.oficina_destino}</CeldaTabla>
      <CeldaTabla>{documento.descripcion}</CeldaTabla>
      <CeldaTabla>{documento.ubicacion}</CeldaTabla>
    </tr>
  );
}

export default DocumentosList;
