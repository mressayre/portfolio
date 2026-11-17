import { Outlet } from 'react-router-dom';
import NavBar from '../components/Navbar';
import './MainLayout.css';

export default function Main() {
    return (
        <div className="main-layout">
            <header className="header">
                <h1>Portfolio.</h1>
                <NavBar />
            </header>
            <main className="main-content">
                <Outlet />
            </main>
        </div>
    );
}