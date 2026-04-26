import styles from './Drawer.module.css';

type DrawerProps = {
    drawerOpen: boolean;
    onDrawerToggle: () => void;
};

export default function Drawer({ drawerOpen, onDrawerToggle }: DrawerProps) {
    return (
        <div>
            <h2>Drawer</h2>
            <button onClick={onDrawerToggle}>
                {drawerOpen ? 'Close' : 'Open'} Drawer
            </button>
        </div>
    );
}