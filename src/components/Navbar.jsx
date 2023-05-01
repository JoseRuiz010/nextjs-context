"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

export const Navbar = () => {

   const router= useRouter()

  return (
    <nav className='bg-slate-400  p-4 shadow-xl' >
        <div className='flex flex-row justify-between w-11/12 mx-auto'>

        <h1 className='cursor-pointer' onClick={()=>router.push("/")}>LAB</h1>
        <ul className='flex flex-row '>
            <li className='my-auto ml-3 hover:text-gray-500 cursor-pointer' onClick={()=>router.push("/new")}>Nuevo</li>
            <li className='my-auto ml-3 hover:text-gray-500 cursor-pointer'>About</li>
        </ul>
        </div>
    </nav>
  )
}
