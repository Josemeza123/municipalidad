import React from 'react'

function SolicitudForm() {
  return (
    <div className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
      
      <form action="" className="mt-8 grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label className="block text-sm font-medium text-gray-700" for="">Código</label>
          <input type="text" className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label className="block text-sm font-medium text-gray-700" for="">Fecha de Registro</label>
          <input type="text" className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label className="block text-sm font-medium text-gray-700" for="">Interesado</label>
          <input type="text" className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label className="block text-sm font-medium text-gray-700" for="">Tipo de Documento</label>
          <input type="text" className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label className="block text-sm font-medium text-gray-700" for="">Oficina de Destino</label>
          <input type="text" className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label className="block text-sm font-medium text-gray-700" for="">Ubicación</label>
          <input type="text" className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
        </div>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-3">Guardar</button>
      </form>
    </div>
  )
}

export default SolicitudForm
