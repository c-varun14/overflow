import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={`${styles.navbar}`}>
      <NavLink
        to="/"
        style={({ isActive, isPending }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "black" : "white",
            backgroundColor: isActive ? "#55f4ff" : "var(--grey)",
          };
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/Dashboard"
        style={({ isActive, isPending }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "black" : "white",
            backgroundColor: isActive ? "#55f4ff" : "var(--grey)",
          };
        }}
      >
        Dashboard
      </NavLink>

      <NavLink
        to="/auth/signin"
        style={({ isActive, isPending }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "black" : "white",
            backgroundColor: isActive ? "#55f4ff" : "var(--grey)",
          };
        }}
      >
        Sign in
      </NavLink>
    </nav>
  );
};

export default Navbar;
