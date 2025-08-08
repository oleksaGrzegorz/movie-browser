import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/movies">Movies</NavLink>
      <NavLink to="/people">People</NavLink>
    </nav>
  );
};

export default Navigation;
