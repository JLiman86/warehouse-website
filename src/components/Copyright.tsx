import { copyrightData } from "../data";

const Copyright = () => {
  return (
    <div className="pt-20 lg:pt-32">
      <div className="container mx-auto">
        <div className="flex flex-col text-center gap-8 lg:flex-row lg:text-left justify-between items-center">
          <p className="text-sm max-w-[350px] order-2 lg:order-1">{copyrightData.text}</p>
          <a href="#" className="text-accent-primary text-2xl p-3 rounded-full bg-accent-primary/20 order-1">{copyrightData.icon}</a>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
