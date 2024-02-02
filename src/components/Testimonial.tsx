import TestimonialSlider from "./TestimonialSlider";

const Testimonial = () => {
  return (
    <section data-aos="fade-up" data-aos-delay="300" data-aos-offset="500" className="section">
      <div className="container mx-auto">
        <div className="bg-accent-primary py-12 rounded-[50px] px-2">
          <h2 className="h2 text-white text-center mb-[80px]">Testimonials</h2>

          <TestimonialSlider />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
