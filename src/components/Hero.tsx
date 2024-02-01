import { heroData } from "../data";

const Hero = () => {
  const { title, subtitle, btnText, image } = heroData;
  return (
    <section className="section xl:h-[calc(100vh-80px)]">
      <div className="container mx-auto h-full">
        <div className="grid grid-cols-1 xl:grid-cols-2 h-full gap-20 xl:gap-0">
          <div className="text-center xl:text-left flex flex-col justify-center ">
            <h1 className="h1 xl:max-w-[700px]">{title}</h1>
            <p className="xl:max-w-[380px] mt-6 mb-12 xl:mt-20 xl:mb-10">{subtitle}</p>
            <button className="btn btn-primary self-start mx-auto xl:mx-0">
              {btnText}
            </button>
          </div>
          <div className="relative flex justify-center">
            <div className="xl:absolute bottom-20 -left-48">
              <img src={image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
