import React from "react";

function DocumentosList({ documento }) {
  return (
    <tr>
      <td>{documento.codigo}</td>
      <td>{documento.fecha_registro}</td>
      <td>{documento.dni}</td>
      <td>{documento.tipo_doc}</td>
      <td>{documento.num_doc}</td>
      <td>{documento.num_folios}</td>
      <td>{documento.oficina_destino}</td>
      <td>{documento.descripcion}</td>
      <td>{documento.ubicacion}</td>
    </tr>
  );
}

export default DocumentosList;
