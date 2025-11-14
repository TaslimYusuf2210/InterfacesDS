import { SiCssdesignawards } from "react-icons/si";
import { NavLink } from "react-router-dom";
import GetandPreview from "./GetandPreview";

function Navbar() {
    return ( 
        <nav className="bg-black flex justify-between px-4 pt-3 pb-3 border-b-accent border-b fixed w-full z-9999">
            <div className="flex items-center gap-2">
                <span className="text-4xl">
                    <SiCssdesignawards />
                </span>
                <span className="font-bold text-xl">
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
                <GetandPreview></GetandPreview>
            </div>
        </nav>
     );
}

export default Navbar;