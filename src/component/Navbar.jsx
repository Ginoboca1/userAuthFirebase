import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

export const Header = () => {
  return (
    <header className = "header">
        <h1>React Firebase Auth </h1>
        <nav>
            <NavLink to='/userAuthFirebase/register'>Register</NavLink>
            <NavLink to='/userAuthFirebase'>Login</NavLink>
            <NavLink to='/userAuthFirebase/about'>about me</NavLink>
        </nav>
    </header>
  )
}
