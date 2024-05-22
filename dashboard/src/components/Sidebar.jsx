"use client";
import { useState } from "react";
import imagen from "@/public/logo-muni.png";
import documento from "@/public/documento.svg";
import solicitud from "@/public/solicitud.svg";
import user from "@/public/user.svg";
import Link from "next/link";

function SideBar() {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div
        className={`${
          open ? "w-72" : "w-20"
        } duration-300 h-screen bg-dark-purple relative p-5 pt-8`}
      >
        <img
          src={imagen}
          alt=""
          className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-dark-purple ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={imagen}
            alt=""
            className={`cursor-pointer duration-500 w-20`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-300 ${
              !open && "scale-0"
            }`}
          >
            Municipalidad
          </h1>
        </div>
        <ul className="pt-6">
          <li className="">
            <Link
             href={"/"}
              className="flex text-gray-300 text-sm items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md"
            >
              <img className="w-8 h-8" src={documento} alt="" />
              <span
                className={` ${!open && "hidden"} origin-left duration-200`}
              >
                Document
              </span>
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="flex text-gray-300 text-sm items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md"
            >
              <img className="w-8 h-8 " src={solicitud} alt="" />
              <span
                className={` ${!open && "hidden"} origin-left duration-200`}
              >
                Solicitudes
              </span>
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="flex text-gray-300 text-sm items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md"
            >
              <img className="w-8 h-8" src={user} alt="" />
              <span
                className={` ${!open && "hidden"} origin-left duration-200`}
              >
                Usuarios
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SideBar;
