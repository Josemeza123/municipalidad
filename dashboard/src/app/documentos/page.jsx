import DocumentosList from "@/src/components/DocumentosList";
import axios from "axios";

async function loadDocumentos() {
  const { data } = await axios.get("http://localhost:3000/api/documentos");
  return data;
}

async function DocumentosPage() {
  const documentos = await loadDocumentos();
  return (
    <div>
      <table>
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
  );
}

export default DocumentosPage;
