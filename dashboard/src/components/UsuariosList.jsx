import React from 'react'
import CeldaTabla from './ui/CeldaTabla'

function UsuariosList({usuario}) {
  return (
    <tr>
    <CeldaTabla>{usuario.codigo}</CeldaTabla>
    <CeldaTabla>{usuario.usuario}</CeldaTabla>
    <CeldaTabla>{usuario.apellidos}</CeldaTabla>
    <CeldaTabla>{usuario.nombres}</CeldaTabla>
    <CeldaTabla>{usuario.telefono}</CeldaTabla>
    <CeldaTabla>{usuario.direccion}</CeldaTabla>
  </tr>
  )
}

export default UsuariosList
