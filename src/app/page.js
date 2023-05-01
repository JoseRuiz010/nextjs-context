"use client"
import TasksCard from '@/components/TasksCard';
import { useTasks } from '@/context/Tasks'


export default function Home() {

  const { tasks } = useTasks()
  return (
    <div className=''>
      <h1 className='text-center font-bold text-2xl mt-5 '>Tasks</h1>
      <div className=''>

        {
          tasks.map((t, i) => <TasksCard key={t.id} {...t} index={i} />)
        }
      </div>
    </div>
  )
}
