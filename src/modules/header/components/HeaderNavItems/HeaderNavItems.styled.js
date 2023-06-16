import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

export const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 12px 24px;
  font-size: 20px;
  border: 1px solid yellow;
  border-radius: 4px;
  color: #fff;

  &.active {
    border: 1px solid blue;
    color: blue;
    background-color: yellow;
  }
`;
