import { NavLink } from "react-router-dom";

const menu = () => {
    return (
      <ol>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/services">services</NavLink>
        </li>
      </ol>
    );
};

export default menu;