import styles from './Header.module.css';
import logoImg from "../assets/todo_logo.svg";

export function Header(){

    return (
        <header className={styles.header}>
            <img src={logoImg} alt="logo foguete" />
            <h1><span>to</span><span>do</span></h1>
        </header>
    )
}