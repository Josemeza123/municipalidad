import CeldaTabla from "./ui/CeldaTabla";

function SolicitudesList({ solicitud }) {
  return (
    <tr>
      <CeldaTabla>{solicitud.codigo}</CeldaTabla>
      <CeldaTabla>{solicitud.fecha_registro}</CeldaTabla>
      <CeldaTabla>{solicitud.interesado}</CeldaTabla>
      <CeldaTabla>{solicitud.tipo_doc}</CeldaTabla>
      <CeldaTabla>{solicitud.oficina_destino}</CeldaTabla>
      <CeldaTabla>{solicitud.ubicacion}</CeldaTabla>
    </tr>
  );
}

export default SolicitudesList;
