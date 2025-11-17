import heroImage from "../assets/image.png"
import Interface from "./Interfaces";

function Hero() {
    return ( 
        <div className="grid place-items-center space-y-64 lg:space-y-44 xl:space-y-0">
            <div className="w-full flex flex-col items-center space-y-7 h-[80vh]">
                <Interface></Interface>
                <div className="text-center">
                    <h1 className="font-extrabold leading-20 md:text-6xl text-5xl mx-10 md:mx-20">
                        Build beautiful interfaces without the complexity
                    </h1>
                </div>
                <div className="text-center">
                    <p className="leading-8 text-brand font-medium">A Minimalist Design System for User Interfaces. <br />
                    Ideal for Web and SaaS Apps.</p>
                </div>
                <div className="flex gap-4">
                    <button className="cursor-pointer text-black font-medium bg-white rounded-md py-3 px-4 hover:bg-blue-50">Get it now</button>
                    <button className="cursor-pointer border font-medium border-accent px-6 py-3 rounded-md hover:bg-accent">Preview</button>
                </div>
            </div>
            <div className="block">
                <img src={heroImage} className=" rounded-2xl border-brand border-3 " />
            </div>
        </div>
     );
}

export default Hero;