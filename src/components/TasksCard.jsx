import { useRouter } from 'next/navigation'
import React from 'react'

const TasksCard = ({ id, title, description }) => {
    const router = useRouter()
    return (
        <div className='shadow-xl  p-5 m-3 rounded-lg flex justify-between'>
            <div>
                <h1 className='font-bold hover:underline cursor-pointer'
                    onClick={() => router.push(`/edit/${id}`)}
                >
                    {id}- {title}
                </h1>
                <p className=' ml-5 text-gray-500 italic'>{description}</p>
            </div>
            <button className='btn bg-red-500 rounded-md p-2 text-white'>Delete</button>
        </div>
    )
}

export default TasksCard