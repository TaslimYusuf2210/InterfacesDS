import { SiCssdesignawards } from "react-icons/si";
import { NavLink } from "react-router-dom";
import GetandPreview from "./GetandPreview";

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
                <GetandPreview></GetandPreview>
            </div>
        </nav>
     );
}

export default Navbar;