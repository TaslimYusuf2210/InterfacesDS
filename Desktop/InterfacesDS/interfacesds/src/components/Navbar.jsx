import { SiCssdesignawards } from "react-icons/si";
import { NavLink } from "react-router-dom";
import GetandPreview from "./GetandPreview";

function Navbar() {
    return ( 
        <nav className="bg-black flex justify-between px-4 pt-2 pb-2 border-b-accent border-b fixed w-full z-9999">
            <div className="flex items-center gap-2">
                <span className="text-4xl">
                    <SiCssdesignawards />
                </span>
                <span className="font-bold text-xl">
                    Interfaces DS
                </span>
            </div>
            <div className="flex items-center gap-4 font-medium">
                <div className="flex items-center gap-3">
                    <NavLink
                    to="/"
                    end
                    className={({isActive}) => 
                    `hover:bg-accent rounded-sm px-5 flex flex-col items-center gap-2 py-3 h-fit
                    ${isActive ? " pb-0 after:content-[''] after:w-16 after:block after:h-0.5 after:bg-white " : ""} `}
                    >Home</NavLink>
                    <NavLink
                    to="/pricing"
                    className={({isActive}) => 
                    `hover:bg-accent rounded-sm px-5 flex flex-col items-center gap-2 py-3 
                    ${isActive ? "pb-0 after:content-[''] after:w-16 after:block after:h-0.5 after:bg-white " : ""} `}
                    >Pricings</NavLink>
                    <NavLink
                    to="/articles"
                    className={({isActive}) => 
                    `hover:bg-accent rounded-sm px-5 flex flex-col items-center gap-2 py-3 
                    ${isActive ? "pb-0 after:content-[''] after:w-16 after:block after:h-0.5 after:bg-white " : ""} `}
                    >Articles</NavLink>
                    <NavLink>Contact</NavLink>
                </div>
                <GetandPreview
                nav={false}
                ></GetandPreview>
            </div>
        </nav>
     );
}

export default Navbar;