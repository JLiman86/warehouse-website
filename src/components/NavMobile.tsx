import { navigationData } from "../data";

const NavMobile = () => {
  return (
    <nav className="bg-accent-tertiary">
      <ul className="">
        {navigationData.map((item, idx) => {
          return (
            <li key={idx} className="px-5 py-3">
              <a className="text-white" href={item.href}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMobile;
