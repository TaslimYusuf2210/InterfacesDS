import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const listOfItems = [
    {
        id: 1,
        state: "Ahmad",
        value: "Ahmad is working"
    },
    {
        id: 2,
        state: "Rufai",
        value: "Rufai is working"
    },
    {
        id: 3,
        state: "Olayemi",
        value: "Olayemi is working"
    },
]

function PreviewPage() {
    const [currentImage, setCurrentImage] = useState(listOfItems[0].state)

    function handleImageRender() {
        
    }
    return ( 
        <div className="bg-brand">
            <div className="bg-accent w-fit relative top-2 left-2 rounded-lg">
                <div className="bg-accent items-center px-2 py-1 flex gap-3 ">
                    <span>Cover</span> 
                    <IoIosArrowDown />
                </div>
                <div className="bg-accent rounded-xl list-none">
                    <li>Rufai</li>
                    <li>Ahmad</li>
                    <li>Olayemi</li>
                </div>
                
            </div>
        </div>
     );
}

export default PreviewPage;