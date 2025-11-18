import heroImage from "../assets/image.png"
import heroImage2 from "../assets/heroImage2.png"
import Interface from "./Interfaces";

function Hero() {
    return ( 
        <div className="space-y-64 lg:space-y-44 xl:space-y-0">
            <div className="w-full flex flex-col justify-center items-center space-y-7 lg:h-[80vh]">
                <Interface></Interface>
                <div className="text-center">
                    <h1 className="font-extrabold md:leading-20 leading-15 md:text-6xl text-5xl md:mx-20">
                        Build beautiful interfaces without the complexity
                    </h1>
                </div>
                <div className="text-center w-full">
                    <p className="leading-8 w-full text-brand font-medium">A Minimalist Design System for User Interfaces.
                    Ideal for Web and SaaS Apps.</p>
                </div>
                <div className="flex gap-4">
                    <button className="cursor-pointer text-black font-medium bg-white rounded-md py-3 px-4 hover:bg-blue-50">Get it now</button>
                    <button className="cursor-pointer border font-medium border-accent px-6 py-3 rounded-md hover:bg-accent">Preview</button>
                </div>
            </div>
            
            <div className="grid place-items-center">
                <img src={heroImage} className=" rounded-2xl object-cover border-brand border-3 ml-32 md:ml-0 md:block md:transform-none transform-[perspective(3000px)_rotateX(30deg)_rotateY(10deg)_rotate(-10deg)_scale(1.5)_translateX(0px)]" />
            </div>
        </div>
     );
}

export default Hero;