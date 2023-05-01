"use client"
import {
  createContext,
  useContext,
  useState
} from "react"
import {
  v4 as uuid
} from 'uuid'

export const TaskContext = createContext()

export const useTasks = () => {
  const tasks = useContext(TaskContext);
  if (!tasks) {
    throw ("Debe ser usado dentro de un context")
  } else {
    return tasks
  }
}

export const TasksProvider = ({
  children
}) => {
  const [tasks, settasks] = useState([{
      id: uuid(),
      title: "My first Tasks",
      description: "Some tasks"
    },
    {
      id: uuid(),
      title: "My second Tasks",
      description: "Some tasks"
    },
    {
      id: uuid(),
      title: "My third Tasks",
      description: "Some tasks"
    },

  ])
  
  const getTasks = (id) => tasks.filter(t => t.id == id)[0]
  const deleteTask = (id) =>settasks([...tasks.filter(t=> t.id!== id)])
  const newTask = ({
    title,
    description
  }) => settasks([...tasks, {
    id: uuid(),
    title,
    description
  }])

  return <TaskContext.Provider value = {
      {
        tasks,
        getTasks,
        newTask,
        deleteTask
      }
    } > {
      children
    }
     </TaskContext.Provider>
}