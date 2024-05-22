import React from "react";

function SolicitudesList({ solicitud }) {
  return (
    <tr>
      <td>{solicitud.codigo}</td>
      <td>{solicitud.fecha_registro}</td>
      <td>{solicitud.interesado}</td>
      <td>{solicitud.tipo_doc}</td>
      <td>{solicitud.oficina_destino}</td>
      <td>{solicitud.ubicacion}</td>
    </tr>
  );
}

export default SolicitudesList;
