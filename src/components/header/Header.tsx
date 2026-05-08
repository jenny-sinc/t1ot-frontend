import { useSelector } from 'react-redux';
import Logo from "./logo/Logo";
import { RootState } from '../../store';
import NavBar from './navBar/NavBar';

export default function Header() {
    const screenSize = useSelector((state: RootState) => state.ui.screenSize);
    return (
        <div>
            {/* <Logo /> */}
            <NavBar />
        </div>
    );
}
