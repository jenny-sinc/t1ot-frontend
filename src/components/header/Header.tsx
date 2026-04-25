import styles from './Header.module.css'
import Logo from "./logo/Logo";
import NavBar from "./navBar/NavBar";

export default function Header() {
    return (
        <header className={styles.header}>
            <Logo device="desktop" />
            <NavBar />
        </header>
    );
}