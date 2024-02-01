import { aboutData } from "../data";

const About = () => {
  const { image, title, subtitle } = aboutData;
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="bg-accent-secondary/20 grid grid-col lg:grid-cols-2 rounded-3xl">
          <div className="flex justify-center items-center">
            <img src={image} alt="" />
          </div>
          <div className="flex flex-col justify-center gap-8 p-10">
            <h3 className="h2">{title}</h3>
            <p>{subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
