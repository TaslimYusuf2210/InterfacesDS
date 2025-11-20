import { useState } from "react";


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
    return ( 
        <div className="bg-brand">
            <div>
                <div className="relative top-2 left-2">
                    Cover
                </div>
                <div className="bg-accent rounded-xl">
                    <li>Rufai</li>
                    <li>Ahmad</li>
                    <li>Olayemi</li>
                </div>
                di
            </div>
        </div>
     );
}

export default PreviewPage;