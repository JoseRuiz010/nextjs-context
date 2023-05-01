"use client"
import { createContext, useContext } from "react"


export const TaskContext = createContext()

export const useTasks = () => {
    const tasks = useContext(TaskContext);
    if (!tasks) {
        throw ("Debe ser usado dentro de un context")
    } else {
        return tasks
    }
}

export const TasksProvider = ({ children }) => {
    const tasks = [
        {
            id: 1,
            title: "My first Tasks",
            description: "Some tasks"
        },
        {
            id: 2,
            title: "My second Tasks",
            description: "Some tasks"
        },
        {
            id: 3,
            title: "My third Tasks",
            description: "Some tasks"
        },

    ]

    return <TaskContext.Provider value={{ tasks }}>
        {children}
    </TaskContext.Provider>
}