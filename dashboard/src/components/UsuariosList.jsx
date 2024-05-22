import React from 'react'

function UsuariosList({usuario}) {
  return (
    <tr>
    <td>{usuario.codigo}</td>
    <td>{usuario.usuario}</td>
    <td>{usuario.apellidos}</td>
    <td>{usuario.nombres}</td>
    <td>{usuario.telefono}</td>
    <td>{usuario.direccion}</td>
  </tr>
  )
}

export default UsuariosList
