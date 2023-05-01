"use client"
import { useTasks } from "@/context/Tasks"
import { useRouter } from "next/navigation";
import { useState } from "react";

const Page = ({ params }) => {

 const router= useRouter()
  const [task, settask] = useState()

  const { getTasks } = useTasks();
  const { id, title, description } = getTasks(params.id)

  const onChange = () => {
    router.push("/")
  }

  const actualizar = (e) => {
    e.preventDefault()
    console.log({ title, description });
    router.push("/");
  }

  return (
    <div className="border border-solid m-3  p-3">
      <h1 className="text-3xl text-center">Editar</h1>
      <form onSubmit={actualizar} className="flex flex-col">
        <div className="">
          <span className="label label-text font-bold">Titulo</span>
          <input className="input bg-gray-200   w-full" type="text" name="title" value={title} />
        </div>
        <div className="">
          <span className="label label-text font-bold">Descripcion</span>
          <textarea className="textarea bg-gray-200 w-full" type="text" name="description"/>        
          </div>
        <button className="btn mt-3">Guardar</button>
      </form>

    </div>
  )
}

export default Page