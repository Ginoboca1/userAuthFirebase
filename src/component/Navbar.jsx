import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

export const Header = () => {
  return (
    <header className = "header">
        <h1>UserAuth with React</h1>
        <nav>
            <NavLink to='/register'>Register</NavLink>
            <NavLink to='/'>Login</NavLink>
            <NavLink to='/about'>about me</NavLink>
        </nav>
    </header>
  )
}
