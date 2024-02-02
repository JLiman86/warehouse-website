import { ctaData } from "../data";

const TrySection = () => {
  const { title, subtitle, btnText1, btnText2 } = ctaData;
  return (
    <section data-aos="fade-up" data-aos-offset="500"
    data-aos-delay='300' className="section pb-20">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 justify-between items-center">
          <div className="text-center lg:text-left">
            <h2 className="h2">{title}</h2>
            <p className="mt-3">{subtitle}</p>
          </div>
          <div className="flex flex-col lg:flex-row gap-5">
            <button className="btn btn-secondary">{btnText1}</button>
            <button className="btn btn-quaternary">{btnText2}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrySection;
