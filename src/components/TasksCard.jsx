"use client"
import { useTasks } from '@/context/Tasks'
import { useRouter } from 'next/navigation'
import React from 'react'

const TasksCard = ({ id, title, description, index }) => {
  const router = useRouter()
  const { tasks,deleteTask} = useTasks()
  return (
    <div className='shadow-xl max-w-md mx-auto p-5 m-3 mb-8 rounded-lg flex justify-between'>
      <div>
        <h1 className='font-bold hover:underline cursor-pointer'
          onClick={() => router.push(`/edit/${id}`)}
        >
          {index + 1}- {title}
        </h1>
        <p className=' ml-5 text-gray-500 italic'>{description}</p>
      </div>
      <button className='btn bg-red-500 rounded-md p-2 text-white'
      onClick={()=>deleteTask(id)}
      >Delete</button>
    </div>
  )
}

export default TasksCard