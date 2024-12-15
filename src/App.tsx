import "./global.css";
import { Header } from './components/Header';
import { PlusCircle } from "@phosphor-icons/react"
import styles from "./App.module.css";
import { TaskCard } from "./components/TaskCard";
import { Task } from "./models/Task";
import { FormEvent, useState } from "react";

const dadosTasks: Task[] = [
  {
    id: 1,
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo quidem aliquam voluptate. Numquam animi sed, consequatur enim praesentium, eveniet explicabo excepturi officiis fuga illo, autem et nihil voluptate molestias ex.",
    checked: false
  },
  {
    id: 2,
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo quidem aliquam voluptate. Numquam animi sed, consequatur enim praesentium, eveniet explicabo excepturi officiis fuga illo, autem et nihil voluptate molestias ex.",
    checked: false
  },
  {
    id: 3,
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo quidem aliquam voluptate. Numquam animi sed, consequatur enim praesentium, eveniet explicabo excepturi officiis fuga illo, autem et nihil voluptate molestias ex.",
    checked: false
  },
  {
    id: 4,
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo quidem aliquam voluptate. Numquam animi sed, consequatur enim praesentium, eveniet explicabo excepturi officiis fuga illo, autem et nihil voluptate molestias ex.",
    checked: false
  },
  {
    id: 5,
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo quidem aliquam voluptate. Numquam animi sed, consequatur enim praesentium, eveniet explicabo excepturi officiis fuga illo, autem et nihil voluptate molestias ex.",
    checked: false
  },

]


function App() {

  const [tasks, setTasks] = useState(dadosTasks)
  const [descriptionNewTask, setDescriptionNewTask] = useState("")

  function taskConcluidas() {
    return tasks.filter(task => task.checked).length
  }

  function addTask(event: FormEvent) {

    event.preventDefault()

    const newTask: Task = {
      checked: false,
      description: descriptionNewTask,
      id: tasks.length + 1,
    }
    setTasks(tasks => {
      return [...tasks, newTask]
    })

    setDescriptionNewTask(() => "")
  }

  function handleDescricaoTask(event: FormEvent<HTMLInputElement>) {


    const value = event.target.value.trim()

    setDescriptionNewTask(value)

  }

  function deleteTask(id: number) {

    setTasks(tasks => {
      return tasks.filter(item => item.id !== id)
    })
  }


  function changeCheckedTask(id: number) {

    setTasks(items => {
      return items.map(task => {
        const newTask: Task = {
          ...task
        }
        if (task.id === id) {

          newTask.checked = !task.checked


        }
        return newTask
      })
    })

  }


  const taskConluidas: number = taskConcluidas()
  const totalTasks: number = tasks.length

  return (
    <div>
      <Header />

      <form className={styles.taskForm} onSubmit={addTask}>
        <input type="text" placeholder="Adicione uma nova tarefa" required value={descriptionNewTask} onChange={handleDescricaoTask} />
        <button type="submit">
          Criar
          <PlusCircle size={24} />
        </button>
      </form>

      <main>
        <header>
          <div className={styles.labelTaskCreate}>
            <strong >Tarefas criadas</strong>
            <span className={styles.tip}>{totalTasks}</span>
          </div>
          <div className={styles.labelTaskChecked}>
            <strong>Concluídas</strong>
            <span className={styles.tip}>{taskConluidas}</span>
          </div>
        </header>
        <section className={styles.tasks}>
          {
            tasks.map(task => {

              return (<TaskCard
                key={task.id}
                description={task.description}
                checked={task.checked}
                id={task.id}
                checkedTaskUpdate={changeCheckedTask}
                deleteTask={ deleteTask}
              />)
            })
          }

        </section>

      </main>
    </div>
  )
}

export default App
