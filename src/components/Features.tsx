import { featuresData } from "../data";


import FeatureItem from "./FeatureItem";

const Features = () => {
  const { title, subtitle, list } = featuresData;
  return (
    <section className="section">
      <div className="container mx-auto">
        <div>
          <h2 className="h2 text-center">{title}</h2>
          <p className="text-center mt-10 mb-16 max-w-[500px] mx-auto">
            {subtitle}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {list.map((item, idx) => {
              const { image, bgImage, title, description, linkText, delay } =
                item;
              return (
                <FeatureItem
                  key={idx}
                  image={image}
                  bgImage={bgImage}
                  title={title}
                  description={description}
                  linkText={linkText}
                  delay={delay}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
