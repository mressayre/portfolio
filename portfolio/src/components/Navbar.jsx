import {NavLink} from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>       
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>About</NavLink>       
            <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Projects</NavLink>        
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Contact</NavLink>
        </nav>
    );
}