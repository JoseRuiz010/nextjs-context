"use client"
import { useTasks } from '@/context/Tasks';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const New = () => {
  const [task, settask] = useState({});
  const { tasks, newTask } = useTasks()

  const router = useRouter()
  const onSubmit = (e) => {
    e.preventDefault()
    newTask({ ...task });
    console.log(newTask);
    router.push("/")
  }

  const onChange = ({ target }) => {
    settask({ ...task, [target.name]: target.value })
  }
  return (
    <div className="border border-solid m-3  p-3">
      <h1 className="text-3xl text-center">Nuevo</h1>
      <form onSubmit={onSubmit} className="flex flex-col">
        <div className="">
          <span className="label label-text font-bold">Titulo</span>
          <input className="input bg-gray-200   w-full" type="text" name="title"
            onChange={onChange}
          />
        </div>
        <div className="">
          <span className="label label-text font-bold">Descripcion</span>
          <textarea className="textarea bg-gray-200 w-full" type="text" name="description"
            onChange={onChange}
          />
        </div>
        <button className="btn mt-3">Guardar</button>
      </form>
      {
        JSON.stringify(task)
      }
      <hr />
      <br /><br />
      {
        JSON.stringify(tasks,null,2)
      }
    </div>
  )
}

export default New