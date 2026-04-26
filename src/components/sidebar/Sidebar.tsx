import styles from './Sidebar.module.css'

export default function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <h2>Sidebar</h2>
            <p>This is the sidebar content.</p>
        </aside>
    );
}