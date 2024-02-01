import { navigationData } from "../data";

const Nav = () => {
  return (
    <nav>
      <ul className="flex items-center gap-7">
        {navigationData.map((item, idx) => {
          return (
            <li key={idx}>
              <a href={item.href}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
