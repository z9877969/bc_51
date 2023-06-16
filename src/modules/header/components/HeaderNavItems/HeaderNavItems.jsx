import { Button } from "shared/components";
import { useUserStatus } from "hooks/useUserStatus";
// import { StyledNavLink } from "./HeaderNavItems.styled";

const HeaderNavItems = ({ options }) => {
  const { isAdmin, ...roles } = useUserStatus();
  return (
    <>
      {options.map(
        ({ to, title, roleMustHidden }) =>
          !roleMustHidden?.some((role) => roles[role]) && (
            <Button key={to} href={to} variant="error" outline title={title} />
          )
      )}
    </>
  );
};

export default HeaderNavItems;
