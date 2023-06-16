import { HeaderNav, StyledHeader } from "./Header.styled";
import {
  authNavOptions,
  commonNavOptions,
  userNavOptions,
} from "./data/headerNavOptions";

import { Button } from "../../shared/components";
import { Button as ButtonMui } from "@mui/material";
import Container from "../../shared/components/Container/Container";
import HeaderNavItems from "./components/HeaderNavItems/HeaderNavItems";
import { actions } from "../../redux/auth/authSlice";
import { useDispatch } from "react-redux";
import { useUserStatus } from "../../hooks/useUserStatus";

const Header = () => {
  const dispatch = useDispatch();
  const { isAuth } = useUserStatus();
  return (
    <StyledHeader>
      <Container>
        <HeaderNav>
          <HeaderNavItems options={commonNavOptions} />
          {isAuth ? (
            <HeaderNavItems options={userNavOptions} />
          ) : (
            <HeaderNavItems options={authNavOptions} />
          )}
        </HeaderNav>
        {isAuth && (
          <>
            <Button
              outline
              variant="warning"
              type="button"
              title={"Logout"}
              onClick={() => dispatch(actions.logout())}
            />
            <ButtonMui variant="contained">Hello World</ButtonMui>
          </>
        )}
      </Container>
    </StyledHeader>
  );
};

export default Header;
