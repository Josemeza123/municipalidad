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
          tipo_doc: res.data.tipo_documento,
          num_doc: res.data.numero_documento,
          num_folios: res.data.numero_folio,
          oficina_destino: res.data.oficina_destinataria,
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
    <div className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="mt-8 grid grid-cols-6 gap-6"
      >
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="fecha_registro"
            className="block text-sm font-medium text-gray-700"
          >
            Fecha de Registro
          </label>
          <input
            type="text"
            id="fecha_registro"
            name="fecha_registro"
            value={documento.fecha_registro}
            onChange={handleChange}
            placeholder="Fecha de Registro"
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="codigo"
            className="block text-sm font-medium text-gray-700"
          >
            Código
          </label>
          <input
            type="text"
            id="codigo"
            name="codigo"
            value={documento.codigo}
            onChange={handleChange}
            placeholder="codigo"
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="dni"
            className="block text-sm font-medium text-gray-700"
          >
            DNI
          </label>
          <input
            type="text"
            id="dni"
            name="dni"
            value={documento.dni}
            onChange={handleChange}
            placeholder="DNI"
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="tipo_doc"
            className="block text-sm font-medium text-gray-700"
          >
            Tipo de Documento
          </label>
          <input
            type="text"
            id="tipo_doc"
            name="tipo_doc"
            value={documento.tipo_documento}
            onChange={handleChange}
            placeholder="Tipo de Documento"
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="num_doc"
            className="block text-sm font-medium text-gray-700"
          >
            Número de Documento
          </label>
          <input
            type="text"
            id="num_doc"
            name="num_doc"
            value={documento.numero_documento}
            onChange={handleChange}
            placeholder="Número de Documento"
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="num_folios"
            className="block text-sm font-medium text-gray-700"
          >
            Número de Folio
          </label>
          <input
            type="text"
            id="num_folios"
            name="num_folios"
            value={documento.numero_folio}
            onChange={handleChange}
            placeholder="Número de Folio"
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="oficina_destino"
            className="block text-sm font-medium text-gray-700"
          >
            Oficina Destinataria
          </label>
          <input
            type="text"
            id="oficina_destino"
            name="oficina_destino"
            value={documento.oficina_destinataria}
            onChange={handleChange}
            placeholder="Oficina Destinataria"
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="descripcion"
            className="block text-sm font-medium text-gray-700"
          >
            Descripción
          </label>
          <input
            type="text"
            id="descripcion"
            name="descripcion"
            value={documento.descripcion}
            onChange={handleChange}
            placeholder="Descripción"
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="ubicacion"
            className="block text-sm font-medium text-gray-700"
          >
            Ubicación
          </label>
          <input
            type="text"
            id="ubicacion"
            name="ubicacion"
            value={documento.ubicacion}
            onChange={handleChange}
            placeholder="Ubicación"
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          />
        </div>

        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-3">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default DocumentForm;
