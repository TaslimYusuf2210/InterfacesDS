import { SiCssdesignawards } from "react-icons/si";
import { NavLink } from "react-router-dom";

function Navbar() {
    return ( 
        <nav className="flex justify-between px-4 pt-6 pb-6 border-b-accent border-b">
            <div className="flex items-center gap-2">
                <span className="text-4xl">
                    <SiCssdesignawards />
                </span>
                <span className="font-bold text-2xl">
                    Interfaces DS
                </span>
            </div>
            <div className="flex items-center gap-4 font-medium">
                <div className="flex gap-12">
                    <NavLink
                    to="/"
                    end
                    className={({isActive}) => isActive ? "text-red" : ""}
                    >Home</NavLink>
                    <NavLink
                    to="/pricing"
                    className={({isActive}) => isActive ? "text-red" : ""}
                    >Pricings</NavLink>
                    <NavLink
                    to="/articles"
                    className={({isActive}) => isActive ? "text-red" : ""}
                    >Articles</NavLink>
                    <NavLink>Contact</NavLink>
                </div>
                <div className="space-x-4 ">
                    <NavLink className="border border-accent px-6 py-3 rounded-md hover:text-black hover:bg-gray-100">Preview</NavLink>
                    <NavLink className="text-black bg-white rounded-md py-3 px-4 hover:bg-blue-50">Get it now</NavLink>
                </div>
            </div>
        </nav>
     );
}

export default Navbar;