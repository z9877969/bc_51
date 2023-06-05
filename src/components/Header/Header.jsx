import { Link, NavLink } from "react-router-dom";

import clsx from "clsx";
import s from "./Header.module.scss";
import styled from "@emotion/styled";

const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 16px 24px;
  font-size: 18px;
  border: 1px solid red;
  color: #fff;

  &.active {
    border: 1px solid blue;
    color: red;
    background-color: yellow;
  }
`;

const Header = () => {
  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <NavLink
          className={({ isActive }) => clsx(s.link, isActive && s.active)}
          //   style={({ isActive }) => (isActive ? { color: "red" } : {})}
          to={"/"}
        >
          Home
        </NavLink>
        <StyledNavLink to={"/counter"}>Counter</StyledNavLink>
        {/* <Link className={s.link} to={"/todo"}>Todo</Link> */}
        <NavLink
          className={({ isActive }) => clsx(s.link, isActive && s.active)}
          //   className={s.link}
          to={"/todo"}
        >
          Todo
        </NavLink>
        <StyledNavLink to={"/country-news"}>CountryNews</StyledNavLink>
      </nav>
    </header>
  );
};

export default Header;
