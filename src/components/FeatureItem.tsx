type FeatureItemProps = {
  image: string;
  bgImage: string;
  title: string;
  description: string;
  linkText: string;
  delay: string;
};

import { BsArrowRight } from "react-icons/bs";

const FeatureItem = ({
  image,
  bgImage,
  title,
  description,
  linkText,
  delay,
}: FeatureItemProps) => {
  return (
    <div className="relative flex gap-10 p-10 items-center">
      <div className="-z-10 absolute top-0 left-0 w-full h-full">
        <img className="w-full h-full" src={bgImage} alt="" />
      </div>

      <img className="w-[100px] lg:w-[130px]" src={image} alt="" />

      <div>
        <h3 className="h3 font-medium">{title}</h3>
        <p className="mt-4 mb-8">{description}</p>
        <div className="flex items-center gap-1">
          <a href="#">{linkText}</a> <BsArrowRight />
        </div>
      </div>
    </div>
  );
};

export default FeatureItem;
