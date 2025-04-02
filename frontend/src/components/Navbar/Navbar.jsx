import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="flex items-center gap-2 bg-purple-200 p-2">
        <li className="font-semibold text-lg hover:underline"><NavLink to="/">🚙🫰💸 DriveAuction</NavLink></li>
        <li className="hover:underline"><NavLink to="/create">Create auction</NavLink></li>
        <li className="hover:underline"><NavLink to="/login">Sign in</NavLink></li>
        <li className="hover:underline"><NavLink to="/register">Sign up</NavLink></li>
      </ul>
    </nav>
  )
}
export default Navbar