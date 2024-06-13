import SideBar from "@/src/components/Sidebar";
import UsuariosList from "@/src/components/UsuariosList";
import axios from "axios";

async function loadUsuarios() {
  const { data } = await axios.get("http://localhost:3000/api/usuarios");
  return data;
}

async function UsuariosPage() {
  const usuarios = await loadUsuarios();

  return (
    <div className="flex w-screen h-screen">
      <div className="w-auto">
        <SideBar />
      </div>
      <div className="p-8 w-full">
        <table className="w-full auto border-collapse border-slate-500 ">
          <thead>
            <tr>
              <th>Código</th>
              <th>Usuario</th>
              <th>Apellidos</th>
              <th>Nombres</th>
              <th>Telefono</th>
              <th>Direccion</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <UsuariosList key={usuario.id} usuario={usuario} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UsuariosPage;
