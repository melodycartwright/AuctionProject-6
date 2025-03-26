import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar">
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/create">Create auction</NavLink></li>
            <li><NavLink to="/login">Sign in</NavLink></li>
            <li><NavLink to="/register">Sign up</NavLink></li>
        </ul>
    </nav>
  )
}
export default Navbar