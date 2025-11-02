import { SiCssdesignawards } from "react-icons/si";

function Navbar() {
    return ( 
        <nav className="flex justify-between px-4 pt-6 pb-3">
            <div className="flex items-center gap-2">
                <span className="text-4xl">
                    <SiCssdesignawards />
                </span>
                <span className="font-bold text-2xl">
                    Interfaces DS
                </span>
            </div>
            <div className="flex items-center gap-4 font-medium">
                <ul className="flex gap-12">
                    <li>Home</li>
                    <li>Pricings</li>
                    <li>Articles</li>
                    <li>Contact</li>
                </ul>
                <div className="space-x-4 ">
                    <button className="border border-gray-700 px-6 py-3 rounded-md hover:text-black hover:bg-gray-100">Preview</button>
                    <button className="text-black bg-white rounded-md py-3 px-4 hover:bg-blue-50">Get it now</button>
                </div>
            </div>
        </nav>
     );
}

export default Navbar;