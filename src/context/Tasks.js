"use client"
import {
    createContext,
    useContext,
    useEffect,
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
const initialState = [{
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

]
export const TasksProvider = ({ children }) => {
    const [tasks, settasks] = useState([])

    useEffect(() => {

        if (!localStorage.getItem("tasks")) {
            localStorage.setItem("tasks", JSON.stringify([]))
        } else {
            if (JSON.parse(localStorage.getItem("tasks")).length == 0) {
                settasks(initialState)
            } else {
                settasks(JSON.parse(localStorage.getItem("tasks")))
            }
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])


    const editTask = (id, { title, description }) => settasks(tasks.map(t => {
        if (t.id == id) {
            return { id: t.id, title, description }
        }
        return t
    }))
    const getTasks = (id) => tasks.filter(t => t.id == id)[0]
    const deleteTask = (id) => settasks([...tasks.filter(t => t.id !== id)])
    const newTask = ({
        title,
        description
    }) => settasks([...tasks, {
        id: uuid(),
        title,
        description
    }])

    return <TaskContext.Provider value={
        {
            tasks,
            getTasks,
            newTask,
            deleteTask,
            editTask
        }
    } > {
            children
        }
    </TaskContext.Provider>
}