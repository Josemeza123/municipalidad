import SideBar from "@/src/components/Sidebar";
import SolicitudesList from "@/src/components/SolicitudesList";
import ButtonSolicitudes from "@/src/components/ui/ButtonSolicitudes";
import axios from "axios";

async function loadSolicitudes() {
  const { data } = await axios.get("http://localhost:3000/api/solicitudes");
  return data;
}
async function SolicitudesPage() {
  const solicitudes = await loadSolicitudes();
  return (
    <div className="flex w-screen h-screen">
      <div className="w-auto">
        <SideBar />
      </div>
      <div className="p-8 w-full">
        <ButtonSolicitudes />
        <table className="w-full auto border-collapse border-slate-500">
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
    </div>
  );
}

export default SolicitudesPage;
