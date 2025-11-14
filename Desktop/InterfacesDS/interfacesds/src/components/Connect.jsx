import Interface from "./Interfaces";
import JoshuaGuo from "../assets/Joshua.png";

function Connect() {
  return (
    <div className="space-y-10">
      <div className="space-y-8 border-b border-b-accent pb-8">
        <Interface></Interface>
        <h1 className="text-4xl font-bold">Let's Connect</h1>
        <p className="font-medium text-brand">
          I'd love to hear from you! Whether you have questions about the
          Interfaces Design System or <br />
          want to discuss how it can benefit your projects, feel free to reach
          out.
        </p>
      </div>
      <div className="space-y-8">
        <div className="flex gap-4">
          <img
            className="size-12 rounded-full border border-accent"
            src={JoshuaGuo}
            alt=""
          />
          <div className="flex flex-col">
            <header className="font-medium">Joshua Guo</header>
            <p className="text-brand text-sm">Creator, Interfaces</p>
          </div>
        </div>
        <p className="font-medium text-brand">
            "Thank you for your interest in the Interfaces Design System. I'm dedicated to creating elegant, <br />
            functional design solutions that elevate your projects and streamline your workflow."
        </p>
        <div className="px-3 py-2 text-sm font-medium border border-accent w-fit">
            <span>
            hello@interfaces.supply
            </span>
        </div>
      </div>
    </div>
  );
}

export default Connect;
