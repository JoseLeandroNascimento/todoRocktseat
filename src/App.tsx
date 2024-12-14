import "./global.css";
import { Header } from './components/Header';
import { PlusCircle } from "@phosphor-icons/react"
import styles from "./App.module.css";
import { TaskCard } from "./components/TaskCard";
import { Task } from "./models/Task";
import { useState } from "react";

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

  function taskConcluidas() {
    return tasks.filter(task => task.checked).length
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

      <form className={styles.taskForm}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
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
              />)
            })
          }

        </section>

      </main>
    </div>
  )
}

export default App
