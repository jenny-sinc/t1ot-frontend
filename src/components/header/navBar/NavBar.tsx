import styles from './NavBar.module.css'

export default function NavBar() {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contribute">Contribute</a></li>
            </ul>
        </nav>
    );
}