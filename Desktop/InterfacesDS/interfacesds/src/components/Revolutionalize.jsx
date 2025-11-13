import Interface from "./Interfaces";
import node from "../assets/node.svg";
import GetandPreview from "./GetandPreview";
// import { ReactComponent as NodeIcon } from "../assets/node.svg"

function Revolutionalize() {
  return (
    <div className="place-items-center text-center space-y-8">
      <Interface></Interface>
      <h1 className="text-5xl leading-16 font-bold">
        Revolutionize Your Design <br />
        Workflow Effortlessly
      </h1>
      <p className="mb-16 font-medium text-brand text-lg">
        Our design system streamlines your workflow, ensuring consistency and
        efficiency across all
        <br /> projects. With a minimalist approach, you can focus on creativity
        without the clutter.
      </p>
      <div className="flex gap-4">
        <div className="space-y-8 w-1/3 rounded-xl h-fit border border-accent p-6">
          <img src={node} />
          <h6 className="text-xl font-semibold">
            Tailored Customizable System <br />
            for Unique Branding
          </h6>
          <hr className="text-accent" />
          <p className=" text-lg">
            Utilizes Figma Variables and Tailwind’s class-switching logic for
            seamless shifts between light/dark modes, brand colors, or custom
            themes.
          </p>
        </div>
        <div className="space-y-8 w-1/3 rounded-xl border border-accent p-6">
          <img src={node} />
          <h6 className="text-xl font-semibold">
            Dynamic, Highly Flexible <br />
            Tweaking System
          </h6>
          <hr className="text-accent" />
          <p className=" text-lg">
            Leverages Tailwind’s atomic approach and Figma Variables’ dynamic
            adjustments for precise control over spacing, colors, typography,
            and more, with full system consistency.
          </p>
        </div>
        <div className="space-y-8 w-1/3 h-fit rounded-xl border border-accent p-6">
          <img src={node} />
          <h6 className="text-xl font-semibold">
            Fluid, Seamless Design-to-Code Transition
          </h6>
          <hr className="text-accent" />
          <p className=" text-lg">
            Integrates Figma Variables and Tailwind CSS deeply, converting
            design system styles into ready-to-use code, reducing developer
            adjustments.
          </p>
        </div>
      </div>
      <div className="mt-12">
        <GetandPreview></GetandPreview>
      </div>
    </div>
  );
}

export default Revolutionalize;
