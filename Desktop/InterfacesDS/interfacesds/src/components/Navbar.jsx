import { SiCssdesignawards } from "react-icons/si";
import { NavLink } from "react-router-dom";
import GetandPreview from "./GetandPreview";
import Menu from "./menu";
import Close from "./Close";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation();
    const navigate = useNavigate();

    function handleIsOpen() {
        setIsOpen((prev) => !prev)
    }

    function goToContact() {
        if (location.pathname === "/") {
            // Already on homepage? Just scroll
            document.getElementById("connect")?.scrollIntoView({ behavior: "smooth"})
        } else {
            console.log("Not in homepage")
            navigate("/")
            // document.getElementById("connect")?.scrollIntoView({ behavior: "smooth"})
        }
    }

    return ( 
        <nav className="bg-black flex justify-between px-4 pt-2 pb-2 border-b-accent border-b fixed w-full z-9999">
            <div className="flex items-center gap-2 z-50">
                <span className="text-4xl">
                    <SiCssdesignawards />
                </span>
                <span className="font-bold text-xl">
                    Interfaces DS
                </span>
            </div>
            <div className="flex items-center gap-4 font-medium">
                <div className="lg:flex items-center gap-3 hidden">
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
                    <NavLink onClick={goToContact}>Contact</NavLink>
                </div>    
                <div className="lg:flex gap-2 p-2 hidden">
                    <NavLink to="/preview" 
                    className={({isActive}) => 
                    `cursor-pointer border font-medium border-accent px-6 py-3 rounded-md hover:bg-accent
                    ${isActive ? "after:relative after:top-3  after:content-[''] after:w-16 after:block after:h-0.5 after:bg-white" : ""}`}>
                    Preview</NavLink>
                    <NavLink to="/pricing" className={`cursor-pointer text-black font-medium bg-white rounded-md py-3 px-4 hover:bg-blue-50`}>Get it now</NavLink>
                </div>
                <button onClick={handleIsOpen} className="lg:hidden z-50" type="button">
                    <Menu
                    open={isOpen}
                    ></Menu>
                    <Close
                    open={isOpen}
                    ></Close>
                </button>

                {/* mobile  view dropdown menu content */}
                <div className={`
                absolute left-0 px-4 w-full top-16 bg-black text-white shadow-lg lg:hidden overflow-hidden z-50
                transition-all duration-300 flex flex-col space-y-3 ${isOpen ? "block h-fit" : "hidden"}
                `}>
                    <NavLink 
                    to="/"
                    onClick={() => setIsOpen(false)}
                    end
                    className={({isActive}) => 
                    `hover:bg-accent rounded-sm flex items-center gap-6 py-3 h-fit
                    ${isActive ? "before:content-[''] before:w-0.5 before:block before:h-5 before:bg-white ]" : "px-6"} `}>
                    Home
                    </NavLink>
                    <NavLink 
                    to="/pricing"
                    onClick={() => setIsOpen(false)}
                    className={({isActive}) => 
                    `hover:bg-accent rounded-sm flex items-center gap-6 py-3 h-fit
                    ${isActive ? "before:content-[''] before:w-0.5 before:block before:h-5 before:bg-white " : "px-6"} `}>
                    Pricings
                    </NavLink>
                    <NavLink 
                    to="/articles"
                    onClick={() => setIsOpen(false)}
                    className={({isActive}) => 
                    `hover:bg-accent rounded-sm flex items-center gap-6 py-3 h-fit
                    ${isActive ? "before:content-[''] before:w-0.5 before:block before:h-5 before:bg-white " : "px-6"} `}>
                    Articles
                    </NavLink>
                    <div 
                    className={
                    `hover:bg-accent rounded-sm flex items-center gap-6 px-6 py-3 h-fit
                     `}>
                    Contact
                    </div>
                    <NavLink 
                    to="/preview"
                    onClick={() => setIsOpen(false)}
                    className={({isActive}) => 
                    `hover:bg-accent rounded-sm flex items-center gap-6 py-3 h-fit border border-accent
                    ${isActive ? "before:content-[''] before:w-0.5 before:block before:h-5 before:bg-white " : "px-6"} `}>
                    Preview
                    </NavLink>
                    <NavLink 
                    to="/pricing"
                    onClick={() => setIsOpen(false)}
                    className={
                    `hover:bg-gray-200 rounded-sm flex items-center gap-6 px-6 py-3 h-fit bg-white text-black
                     `}>
                    Get it now
                    </NavLink>
                </div>

                {/* Background while dropdown navbar is open */}
                {isOpen && (
                <div className="fixed inset-0 bg-black z-40"
                onClick={() => setIsOpen(false)}
                >

                </div>
                )}
            </div>
        </nav>
     );
}

export default Navbar;