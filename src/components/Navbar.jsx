"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

export const Navbar = () => {

  const router = useRouter()

  return (
    <nav className='bg-slate-700  p-4 shadow-xl mb-14' >
      <div className='flex flex-row justify-between w-11/12 xl:w-9/12 mx-auto'>

        <h1 className='cursor-pointer text-white font-bold text-2xl' onClick={() => router.push("/")}>LAB</h1>
        <ul className='flex flex-row justify-around w-1/4'>
          <li className='my-auto  hover:text-gray-500 cursor-pointer font-bold text-white' onClick={() => router.push("/")}>Tareas</li>
          <li className='my-auto  hover:text-gray-500 cursor-pointer font-bold text-white' onClick={() => router.push("/new")}>Nueva Tarea</li>
        </ul>
      </div>
    </nav>
  )
}
