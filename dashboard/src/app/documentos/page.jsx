import DocumentosList from "@/src/components/DocumentosList";
import SideBar from "@/src/components/Sidebar";
import ButtonDocumentos from "@/src/components/ui/ButtonDocumentos";
import axios from "axios";

async function loadDocumentos() {
  const { data } = await axios.get("http://localhost:3000/api/documentos");
  return data;
}

async function DocumentosPage() {
  const documentos = await loadDocumentos();
  return (
    <div className="flex w-screen h-screen">
      <div className="w-auto">
        <SideBar />
      </div>

      <div className="p-8 w-full">
        <ButtonDocumentos />

        <table className="w-full auto border-collapse border-slate-500">
          <thead>
            <tr>
              <th>Código</th>
              <th>Fecha de Registro</th>
              <th>DNI</th>
              <th>Tipo de Documento</th>
              <th>Número de Documento</th>
              <th>Número de Folio</th>
              <th>Oficina Destinataria</th>
              <th>Descripción</th>
              <th>Ubicación</th>
            </tr>
          </thead>
          <tbody>
            {documentos.map((documento) => (
              <DocumentosList key={documento.id} documento={documento} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DocumentosPage;
