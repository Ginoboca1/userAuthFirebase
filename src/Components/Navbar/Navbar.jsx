import { NavLink } from "react-router-dom";
import "./navbar.css";

export const Header = () => {
  return (
    <header className="header">
      <h1>React Firebase Auth </h1>
      <nav>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/">Login</NavLink>
        <NavLink to="/about">about me</NavLink>
      </nav>
    </header>
  );
};
