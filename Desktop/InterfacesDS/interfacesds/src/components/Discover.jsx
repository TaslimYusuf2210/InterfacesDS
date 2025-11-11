import Interface from "./Interfaces";
import GetandPreview from "./GetandPreview";
import Carousel from "./carousel";

function Discover() {
    return ( 
        <div className="flex px-16 my-24">
            <div className=" text-left space-y-8 w-full">
                <Interface/>
                <h1 className="text-5xl leading-16 font-bold">
                    Discover the power <br />
                    of Minimalist Design
                </h1>
                <p className="mb-16 font-medium text-brand text-lg">
                    The Interfaces Design System streamlines your design process with a
                    <br /> focus on simplicity and efficiency. Elevate your projects with our
                    <br /> intuitive components and cohesive style.
                </p>
                <div className="space-y-6 mb-16">
                    <div className="space-y-3 p-6 border border-accent rounded-xl w-[470px] pr-8">
                        <h5 className="font-semibold text-2xl">Minimal Modular Design</h5>
                        <p className="text-brand font-medium text-lg">
                            Emphasizes “less is more” with a clean grid system <br />
                            and flexible style combinations, enabling rapid <br />
                            creation of elegant interfaces.
                        </p>
                    </div>
                    <div className="space-y-3 p-6 border border-accent rounded-xl w-[470px] pr-8">
                        <h5 className="font-semibold text-2xl">DataVis-Centric Design</h5>
                        <p className="text-brand font-medium text-lg">
                            Lightweight, customizable data viz components <br />
                            (charts, dashboards, cards) for clear data display.
                        </p>
                    </div>
                </div>
            <GetandPreview></GetandPreview>
            </div>
            <div className="w-full py-28">
                <Carousel/>
            </div>
        </div>
     );
}

export default Discover;