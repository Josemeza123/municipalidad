import React from 'react'
import imagen from "../../../public/portada-login.jpeg";
import SideBar from '@/src/components/Sidebar';
import Image from 'next/image';

function Inicio() {
  return (
    <div className="flex w-screen h-screen">
      <div className="w-auto">
        <SideBar />
      </div>
      <div className="p-8 w-full">
        <Image src={imagen} alt="Logo" className='w-full h-full p-3'  />
      </div>
    </div>
  )
}

export default Inicio
