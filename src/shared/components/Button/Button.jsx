import { NavLink } from "react-router-dom";
import clsx from "clsx";
import s from "./Button.module.scss";

export const Button = ({
  title,
  iconPath,
  outline = false,
  variant,
  href,
  ...props
}) => {
  if (href) {
    return (
      <NavLink
        className={clsx(s.button, outline && s.ouline, variant && s[variant])}
        to={href}
      >
        {title}
      </NavLink>
    );
  }
  return (
    <button
      {...props}
      className={clsx(s.button, outline && s.ouline, variant && s[variant])}
    >
      {title
        ? title
        : iconPath(
            <svg className={s.icon}>
              <use href={iconPath}></use>
            </svg>
          )}
    </button>
  );
};
