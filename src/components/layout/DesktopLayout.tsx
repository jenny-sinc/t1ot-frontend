import styles from './Layout.module.css'
import Header from '../header/Header'
import Map from '../map/Map'
import Sidebar from '../sidebar/Sidebar'
import Footer from '../footer/Footer'
import { useState } from 'react'

type LayoutProps = {
};

export default function Layout({ }: LayoutProps) {

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Header />
            </header>
            <aside className={styles.side}>
                <Sidebar />
            </aside>
            <main className={styles.map}>
                <Map />
            </main>
            <footer className={styles.footer}>
                <Footer />
            </footer>
        </div>
    )
}