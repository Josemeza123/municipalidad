import Link from 'next/link'
import React from 'react'

function ButtonSolicitudes() {
  return (
    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-3">
      <Link href="/nuevasolicitud">Nueva Solicitud</Link>
    </button>
  )
}

export default ButtonSolicitudes
