import { NavLink } from "react-router-dom"

const renderLI = ({url, child}) => {
  const activeStyle = "border py-1 px-2 border-hospital-green text-hospital-green"

  return (
    <li>
      <NavLink
        to={url}
        className={({ isActive }) => isActive ? activeStyle : undefined}>
          {child}
      </NavLink>
    </li>
  )
}

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center fixed top-0 z-10 w-full h-54 py-5 px-8">
      <ul className="flex items-center text-gray-600 gap-4 font-light">
        <li className="border py-1 px-2">
          <NavLink
            to="/">
            FakeStore 
          </NavLink>
        </li>
        {renderLI({url: "/all", child: "All"})}
        {renderLI({url: "/clothes", child: "Clothes"})}
        {renderLI({url: "/electronics", child: "Electronics"})}
        {renderLI({url: "/furnitures", child: "Furnitures"})}
        {renderLI({url: "/toys", child: "Toys"})}
        {renderLI({url: "/others", child: "Others"})}
      </ul>
      <ul className="flex items-center font-light">
        <li>
          joseperata2910@gmail.com -
        </li>
        <ul className="hidden">
          <li>
            <NavLink
              to="/my-orders">
                My orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-account">
                My account
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sign-in">
                Sign in
            </NavLink>
          </li>
        </ul>
        <li>
        </li>
        <li>
          🛒 0
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;