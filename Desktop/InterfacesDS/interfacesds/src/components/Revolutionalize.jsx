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
      <p className="mb-16 font-medium text-brand">
        Our design system streamlines your workflow, ensuring consistency and
        efficiency across all
        <br /> projects. With a minimalist approach, you can focus on creativity
        without the clutter.
      </p>
      <div className="flex gap-4 lg:flex-row flex-col">
        <div className="space-y-8 w-full rounded-xl h-fit border border-accent p-6">
          <img src={node} />
          <h6 className="text-xl font-semibold">
            Tailored Customizable System <br />
            for Unique Branding
          </h6>
          <hr className="text-accent" />
          <p >
            Utilizes Figma Variables and Tailwind’s class-switching logic for
            seamless shifts between light/dark modes, brand colors, or custom
            themes.
          </p>
        </div>
        <div className="space-y-8 w-full rounded-xl border border-accent p-6">
          <img src={node} />
          <h6 className="text-xl font-semibold">
            Dynamic, Highly Flexible <br />
            Tweaking System
          </h6>
          <hr className="text-accent" />
          <p>
            Leverages Tailwind’s atomic approach and Figma Variables’ dynamic
            adjustments for precise control over spacing, colors, typography,
            and more, with full system consistency.
          </p>
        </div>
        <div className="space-y-8 w-full h-fit rounded-xl border border-accent p-6">
          <img src={node} />
          <h6 className="text-xl font-semibold">
            Fluid, Seamless Design-to-Code Transition
          </h6>
          <hr className="text-accent" />
          <p >
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
