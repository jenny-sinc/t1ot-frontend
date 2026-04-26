import styles from './Layout.module.css'
import Header from '../header/Header'
import Map from '../map/Map'
import Footer from '../footer/Footer'
import { useState } from 'react'
import Drawer from '../drawer/Drawer'

type LayoutProps = {
    onDrawerToggle?: (isOpen: boolean) => void;
};

export default function Layout({ onDrawerToggle }: LayoutProps) {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        const newState = !drawerOpen;
        setDrawerOpen(newState);
        onDrawerToggle?.(newState);
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Header />
            </header>

            <main className={styles.map}>
                <Map />
            </main>

            <aside className={`${styles.drawer} ${drawerOpen ? styles.drawerOpen : ''}`}>
                <Drawer
                    drawerOpen={drawerOpen}
                    onDrawerToggle={handleDrawerToggle}
                />
            </aside>

            <footer className={styles.footer}>
                <Footer />
            </footer>
        </div>
    )
}