"use client";

import React, { useState } from "react";
import imagen from "../../../public/portada-login.jpeg";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Login() {
    const router=useRouter();
  const usuarios = [
    {
      usuario: "usuario",
      contraseña: "123456",
    },
  ];
  const [usuario, setUsuario] = useState({
    usuario: "",
    contraseña: "",
  });
  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const usuarioEncontrado = usuarios.find(
      (u) =>
        u.usuario === usuario.usuario && u.contraseña === usuario.contraseña
    );
    if (usuarioEncontrado) {
      alert("Bienvenido");
router.push("/inicio");
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };
  return (
    <section class="text-gray-600 body-font w-screen h-screen">
      <div>
        <Image
          src={imagen}
          alt="Imagen de portada "
          className="w-screen h-screen"
        />
        <div class="container px-5 py-24 mx-auto flex flex-wrap items-center z-10 absolute right-12 top-20">
          <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 ">
            <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
              Iniciar Sesión
            </h2>
            <form action="" onSubmit={handleSubmit}>
              <div class="relative mb-4">
                <label for="usuario" class="leading-7 text-sm text-gray-600">
                  Usuario
                </label>
                <input
                  type="text"
                  id="usuario"
                  name="usuario"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  spellcheck="false"
                  data-ms-editor="true"
                  onChange={handleChange}
                />
              </div>
              <div class="relative mb-4">
                <label for="contraseña" class="leading-7 text-sm text-gray-600">
                  Contraseña
                </label>
                <input
                  type="password"
                  onChange={handleChange}
                  id="contraseña"
                  name="contraseña"
                  placeholder="*********"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Iniciar Sesión
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
