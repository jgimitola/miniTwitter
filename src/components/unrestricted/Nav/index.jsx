import { Link } from "react-router-dom";

import routes from "../../../lib/routes";

const Nav = () => {
  const { unrestricted, restricted } = routes;

  return (
    <nav>
      <ul>
        {restricted.map(({ path, text }) => (
          <li>
            <Link to={path}>{text}</Link>
          </li>
        ))}
        {unrestricted.map(({ path, text }) => (
          <li>
            <Link to={path}>{text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
