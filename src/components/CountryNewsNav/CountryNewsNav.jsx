import { NavLink, useLocation } from "react-router-dom";

import clsx from "clsx";
import s from "./CountryNewsNav.module.scss";

const getActiveStyles = ({ isActive }) => clsx(s.link, isActive && s.active);

const CountryNewsNav = () => {
  const location = useLocation();
  const prevLocation = location.state;
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <NavLink className={getActiveStyles} to={"ua"} state={prevLocation}>
          UA
        </NavLink>
      </li>
      <li className={s.item}>
        <NavLink className={getActiveStyles} to={"pl"} state={prevLocation}>
          PL
        </NavLink>
      </li>
      <li className={s.item}>
        <NavLink className={getActiveStyles} to={"us"} state={prevLocation}>
          US
        </NavLink>
      </li>
      <li className={s.item}>
        <NavLink className={getActiveStyles} to={"fr"} state={prevLocation}>
          FR
        </NavLink>
      </li>
    </ul>
  );
};

export default CountryNewsNav;
