import React from "react";

function Login() {
  return (
    <section
      class="text-gray-600 body-font bg-[url('https://github.com/Josemeza123/municipalidad/blob/main/dashboard/public/portada-login.jpeg')]"
    >
      <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
        {/* <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 class="title-font font-medium text-3xl text-gray-900">
            Slow-carb next level shoindcgoitch ethical authentic, poko scenester
          </h1>
          <p class="leading-relaxed mt-4">
            Poke slow-carb mixtape knausgaard, typewriter street art gentrify
            hammock starladder roathse. Craies vegan tousled etsy austin.
          </p>
        </div> */}
        <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
            Iniciar Sesión
          </h2>
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
            />
          </div>
          <div class="relative mb-4">
            <label for="contraseña" class="leading-7 text-sm text-gray-600">
              Contraseña
            </label>
            <input
              type="password"
              id="contraseña"
              name="contraseña"
              placeholder="*********"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Button
          </button>
        </div>
      </div>
    </section>
  );
}

export default Login;
