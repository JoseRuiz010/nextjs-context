"use client"
import { useTasks } from "@/context/Tasks"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Page = ({ params }) => {

  const router = useRouter()
  const [task, settask] = useState({
    title: "",
    description: ""
  })

  const { getTasks, editTask } = useTasks();
  const data = getTasks(params.id)


  useEffect(() => {
    settask({ ...task, ...data })
  }, [])


  const onChange = (e) => {
    settask({ ...task, [e.target.name]: e.target.value })

  }

  const actualizar = (e) => {
    e.preventDefault()
    editTask(params.id, task)
    router.push("/");
  }

  return (
    <div className="border border-solid m-3  max-w-lg mx-auto  p-3">
      <h1 className="text-3xl text-center">Editar</h1>
      <form onSubmit={actualizar} className="flex flex-col">
        <div className="">
          <span className="label label-text font-bold">Titulo</span>
          <input onChange={onChange} className="input bg-gray-200   w-full" type="text" name="title" value={task.title} />
        </div>
        <div className="">
          <span className="label label-text font-bold">Descripcion</span>
          <textarea onChange={onChange} className="textarea bg-gray-200 w-full" type="text" name="description" value={task.description} />
        </div>
        <button className="btn mt-3">Guardar</button>
      </form>

    </div>
  )
}

export default Page