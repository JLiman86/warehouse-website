import { footerData } from "../data";
import Copyright from "./Copyright";

const Footer = () => {
  const { logo, address, email, phone, list1, list2, socialList } = footerData;
  return (
    <footer
      data-aos="fade-up"
      data-aos-offset="800"
      data-aos-delay="500"
      className="section"
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-10">
          <div className="text-center lg:text-left">
            <a href="#">
              <img src={logo} alt="" />
            </a>
            <p className="font-bold mt-8 mb-5">{address}</p>

            <p>{email}</p>
            <p>{phone}</p>
          </div>
          <div className="text-center lg:text-left">
            <h3 className="font-bold lg:ml-16">About</h3>
            <ul className="mt-7 space-y-2 lg:ml-16">
              {list1.map((item, idx) => {
                return (
                  <li key={idx}>
                    <a href={item.href}>{item.name}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="text-center lg:text-left">
            <h3 className="font-bold lg:ml-16">Help</h3>
            <ul className="mt-7 space-y-2 lg:ml-16">
              {list2.map((item, idx) => {
                return (
                  <li key={idx}>
                    <a href={item.href}>{item.name}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="text-center lg:text-left">
            <h3 className="font-bold lg:ml-16">Social Media</h3>
            <ul className=" flex items-center justify-center lg:justify-start  gap-3 mt-5 lg:ml-16">
              {socialList.map((item, idx) => {
                return (
                  <li key={idx} className="">
                    <a href={item.href}>
                      <div className="text-white flex items-center justify-center p-3 text-xl rounded-full bg-slate-400 transition-all hover:bg-accent-primary_hover ">
                        {item.icon}
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
