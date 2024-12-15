
import { Trash } from "@phosphor-icons/react";
import styles from "./TaskCard.module.css";

interface TaskProps{
    id: number,
    description:string,
    checked: boolean,
    checkedTaskUpdate:(id:number)=>void,
    deleteTask: (id:number)=>void
}
export function TaskCard(props: TaskProps) {

    function handleCheckedTask() {
        
        props.checkedTaskUpdate(props.id)

    }

    function handleDeleteTask(){

        props.deleteTask(props.id)
    }

    return (
        <div className={styles.contentTask}>
            <input id="task1" type="radio" checked={props.checked} onChange={() => { }} onClick={handleCheckedTask} />
            <p className={props.checked ? styles.descriptioChecked : ''}>
                {props.description}
            </p>
            <button title="delete task" onClick={handleDeleteTask}>
                <Trash size={24} />
            </button>
        </div>
    )
}