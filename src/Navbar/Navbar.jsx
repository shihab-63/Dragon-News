import { NavLink } from "react-router";
import user from "../assets/user.png";
const Navbar = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Career", path: "/career" },
  ];
  const activeColor = ({ isActive }) =>
    isActive ? "bg-red-100 rounded px-3 py-1.5" : "bg-transparent px-3 py-1.5";
  const navLink = links.map((link, index) => (
    <li key={index}>
      <NavLink className={activeColor} to={link.path}>
        {link.name}
      </NavLink>
    </li>
  ));
  return (
    <div className="flex  items-center justify-between">
      <div></div>
      <ul className="flex text-lg font-semibold items-center gap-8">
        {navLink}
      </ul>
      <div className="flex items-center gap-3">
        <img src={user} alt="User Image" />
        <button className="btn bg-gray-700 text-white text-lg px-8">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
