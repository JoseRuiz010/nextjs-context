"use client"
import TasksCard from '@/components/TasksCard';
import { useTasks } from '@/context/Tasks'


export default function Home() {



  const { tasks } = useTasks()
  console.log(tasks);
  return (
    <div>
      <h1 className='text-center font-bold text-2xl'>Tasks</h1>
      {
        tasks.map(t => <TasksCard key={t.id} {...t} />)
      }
    </div>
  )
}
