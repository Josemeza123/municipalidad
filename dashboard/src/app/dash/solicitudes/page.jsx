import SolicitudesList from "@/src/components/SolicitudesList";
import axios from "axios";

async function loadSolicitudes() {
  const { data } = await axios.get("http://localhost:3000/api/solicitudes");
  return data;
}
async function SolicitudesPage() {
  const solicitudes = await loadSolicitudes();
  return (
    <div className="p-10">
      <table className="w-full h-full auto border-collapse border-slate-500">
        <thead>
          <tr>
            <th>Código</th>
            <th>Fecha de Registro</th>
            <th>Interesado</th>
            <th>Tipo de Documento</th>
            <th>Oficina Destinataria</th>
            <th>Ubicación</th>
          </tr>
        </thead>
        <tbody>
          {solicitudes.map((solicitud) => (
            <SolicitudesList key={solicitud.id} solicitud={solicitud} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SolicitudesPage;
