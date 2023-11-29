import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

const renderLI = ({url, child}) => {
  const activeStyle = " border-hospital-green text-hospital-green";

  return (
    <li>
      <NavLink
        to={url}
        className={({ isActive }) => {
          let style = "border py-1 px-2 rounded-md"
          isActive ? style += " " + activeStyle : undefined;
          return style;
        }}>
          {child}
      </NavLink>
    </li>
  )
}

const Navbar = () => {
  const context = useContext(ShoppingCartContext);
  return (
    <nav className="flex justify-between items-center z-10 w-full h-54 py-5 px-8 fixed top-0 bg-white">
      <ul className="flex items-center text-gray-600 gap-4 font-light">
        <li className="border py-1 px-2">
          <NavLink
            to="/">
            FakeStore 
          </NavLink>
        </li>
        {renderLI({url: "/", child: "All"})}
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
        <li 
          className="flex items-center gap-1 z-20 font-bold" 
          onClick={()=>{context.openShoppingCart()}}>
          <ShoppingBagIcon className="text-hospital-green w-6"/> 
          {context.cartProducts.length}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;