import { useState } from "react"

type TaskType = {
    id: number,
    title: string,
    isCompleted: boolean,
}


export function TaskDemo() {

    const initialTasks: TaskType[] = [
        {
            id: 1,
            title: 'приготовить кашу',
            isCompleted: true
        },
        {
            id: 2,
            title: 'приготовить яичницу',
            isCompleted: true,
        },
        {
            id: 3,
            title: 'приготовить обед',
            isCompleted: false,
        }
    ]

    const [tasks, setTasks] = useState(initialTasks)


    function addTask() {
        const newTask =
        {
            id: 4,
            title: 'поспать',
            isCompleted: false,
        }
        setTasks(tasks => [...tasks, newTask])
        console.log(tasks)
    }

    function deleteTask(id: number) {
        setTasks(tasks => tasks.filter(task => task.id !== id))
    }

    function toggleTask(id: number) {
        setTasks(tasks => tasks.map(task => {
            if (task.id === id) {
                return { ...task, isCompleted: !task.isCompleted }
            }
            return task
        }))
    }

    return (
        <div>
            <div>
                {tasks.length === 0 ? (
                    <div>Книг нет</div>
                ) : (
                    tasks.map(task => (
                        <div key={task.id}>
                            <span>{task.title}</span>
                            <span>{task.isCompleted ? 'Готово' : 'Не готово'}</span>

                            <button onClick={() => toggleTask(task.id)}>Изменить статус</button>
                            <button onClick={() => deleteTask(task.id)}>Удалить задачу</button>
                        </div>
                    ))
                )}


                <button onClick={() => addTask()}>Добавить</button>

            </div>

        </div>

    )
}