"use client";

import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

function DocumentForm() {
  const [documento, setDocumento] = useState({
    fecha_registro: "",
    codigo: "",
    dni: "",
    tipo_doc: "",
    num_doc: "",
    num_folios: "",
    oficina_destino: "",
    descripcion: "",
    ubicacion: "",
  });

  const router = useRouter();
  const form = useRef(null);
  const params = useParams();

  const handleChange = (e) => {
    setDocumento({ ...documento, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (params.id) {
      axios.get(`/api/documentos/${params.id}`).then((res) => {
        setDocumento({
          codigo: res.data.codigo,
          fecha_registro: res.data.fecha_registro,
          dni: res.data.dni,
          tipo_documento: res.data.tipo_documento,
          numero_documento: res.data.numero_documento,
          numero_folio: res.data.numero_folio,
          oficina_destinataria: res.data.oficina_destinataria,
          descripcion: res.data.descripcion,
          ubicacion: res.data.ubicacion,
        });
      });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!params.id) {
      const res = await axios.post("/api/documentos", documento);
    } else {
      const res = await axios.put("/api/documentos/" + params.id, documento);
    }
    form.current.reset();
    router.refresh();
    router.push("/documentos");
  };

  return (
    <div>
      <form ref={form} onSubmit={handleSubmit}>
        <input
          type="text"
          id="fecha_registro"
          name="fecha_registro"
          value={documento.fecha_registro}
          onChange={handleChange}
          placeholder="Fecha de Registro"
        />
        <input
          type="text"
          id="codigo"
          name="codigo"
          value={documento.codigo}
          onChange={handleChange}
          placeholder="codigo"
        />

        <input
          type="text"
          id="dni"
          name="dni"
          value={documento.dni}
          onChange={handleChange}
          placeholder="DNI"
        />
        <input
          type="text"
          id="tipo_documento"
          name="tipo_documento"
          value={documento.tipo_documento}
          onChange={handleChange}
          placeholder="Tipo de Documento"
        />
        <input
          type="text"
          id="numero_documento"
          name="numero_documento"
          value={documento.numero_documento}
          onChange={handleChange}
          placeholder="Número de Documento"
        />
        <input
          type="text"
          id="numero_folio"
          name="numero_folio"
          value={documento.numero_folio}
          onChange={handleChange}
          placeholder="Número de Folio"
        />
        <input
          type="text"
          id="oficina_destinataria"
          name="oficina_destinataria"
          value={documento.oficina_destinataria}
          onChange={handleChange}
          placeholder="Oficina Destinataria"
        />
        <input
          type="text"
          id="descripcion"
          name="descripcion"
          value={documento.descripcion}
          onChange={handleChange}
          placeholder="Descripción"
        />
        <input
          type="text"
          id="ubicacion"
          name="ubicacion"
          value={documento.ubicacion}
          onChange={handleChange}
          placeholder="Ubicación"
        />
        <button>Guardar</button>
      </form>
    </div>
  );
}

export default DocumentForm;
