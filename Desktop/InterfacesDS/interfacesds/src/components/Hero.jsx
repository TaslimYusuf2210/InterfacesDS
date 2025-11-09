function Hero() {
    return ( 
        <div className="py-20 grid place-items-center space-y-10">
            {/* <div className="flex flex-col "> */}
                <div className="px-3 py-2 font-medium border rounded-3xl border-accent">Interfaces Design System vO.1</div>
                <div className="w-[750px] text-center">
                    <h1 className="font-extrabold leading-20 text-6xl">
                        Build beautiful interfaces <br /> without the complexity
                    </h1>
                </div>
                <div className="text-center">
                    <p className="leading-8 text-brand font-medium">A Minimalist Design System for User Interfaces. <br />
                    Ideal for Web and SaaS Apps.</p>
                </div>
                <div className="flex gap-4">
                    <button className="cursor-pointer text-black font-medium bg-white rounded-md py-3 px-4 hover:bg-blue-50">Get it now</button>
                    <button className="cursor-pointer border font-medium border-accent px-6 py-3 rounded-md hover:text-black hover:bg-gray-100">Preview</button>
                </div>
            {/* </div> */}
        </div>
     );
}

export default Hero;