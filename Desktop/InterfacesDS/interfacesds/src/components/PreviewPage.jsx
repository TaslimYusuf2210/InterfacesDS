import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Design1 from "../assets/Design 1.jpeg"
import Design2 from "../assets/Design 2.jpeg"
import Design3 from "../assets/Design 3.jpeg"
import Design4 from "../assets/Design 4.png"
import Design5 from "../assets/Design 5.png"
import Design6 from "../assets/Design 6.png"
import Design7 from "../assets/Design 7.png"

const listOfImages = [
    {
        id: 1,
        name: "Avatars",
        state: "design1",
        value: Design1
    },
    {
        id: 2,
        name: "Designers List",
        state: "design2",
        value: Design2
    },
    {
        id: 3,
        name: "Designer",
        state: "design3",
        value: Design3
    },
    {
        id: 4,
        name: "Design",
        state: "design4",
        value: Design4
    },
    {
        id: 5,
        name: "Innovate and Create",
        state: "design5",
        value: Design5
    },
    {
        id: 6,
        name: "Icons",
        state: "design6",
        value: Design6
    },
    {
        id: 7,
        name: "Teams",
        state: "design7",
        value: Design7
    },
]

function PreviewPage() {
    const [currentImage, setCurrentImage] = useState(listOfImages[0].value)
    const [dropdown, setDropdown] = useState(false)

    function handleDropdown() {
        setDropdown((prev)=> !prev)
    }
    return ( 
        <div className="bg-brand px-4 py-4">
            <div className="relative -top-3 -left-2">
                <div onClick={handleDropdown} className="bg-accent absolute cursor-pointer w-fit top-2 left-2 rounded-md items-center px-2 py-1 flex gap-3 ">
                    <span className="text-xs">Cover</span> 
                    <IoIosArrowDown />
                </div>
                <div className={` ${dropdown ? "block" : "hidden"} bg-accent absolute top-7 rounded-md list-none w-fit space-y-2 px-2 py-2 mt-2`}>
                    <ul>
                        {listOfImages.map((image) => (
                            <li onClick={() => setCurrentImage(image.value)} key={image.id} className={`text-xs cursor-pointer px-2 rounded-sm py-2 hover:bg-blue-500 ${currentImage === image.value ? "bg-blue-600 text-white" : ""}`}>{image.name}</li>
                        ))}
                    </ul>
                </div>
                
            </div>
            <div>
                <img src={currentImage} alt="" />
            </div>
        </div>
     );
}

export default PreviewPage;