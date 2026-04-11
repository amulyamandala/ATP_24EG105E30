import { NavLink } from "react-router"

function Header() {
  return (
    
        <nav className="p-6 bg-purple-100">
            <ul className="flex justify-end gap-6 text-2xl">
                <li>
                    <NavLink to='/' className={({isActive})=>isActive?"text-blue-600":"text-black"}>Home</NavLink>
                </li>
                <li>
                    <NavLink to='create-emp' className={({isActive})=>isActive?"text-pink-600":"text-black"}>Employee Details</NavLink>
                </li>
                <li>
                    <NavLink to='list' className={({isActive})=>isActive?"text-green-600":"text-black"}>List of Employees</NavLink>
                </li>
            </ul>
        </nav>
    
  )
}

export default Header