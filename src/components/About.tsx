import { aboutData } from "../data";

const About = () => {
  const { image, title, subtitle } = aboutData;
  return (
    <section  data-aos="fade-up" data-aos-offset="400"
    data-aos-delay="400" className="section">
      <div className="container mx-auto">
        <div className="bg-accent-secondary/20 grid grid-col lg:grid-cols-2 rounded-3xl">
          <div  data-aos="zoom-in-left"
               className="flex justify-center items-center">
            <img src={image} alt="" />
          </div>
          <div className="flex flex-col justify-center gap-8 p-10 text-center lg:text-left">
            <h2  data-aos="fade-up"
              data-aos-delay="400" className="h2">{title}</h2>
            <p  data-aos="fade-up"
              data-aos-delay="400">{subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
