import styled from "styled-components";
import { config } from "../../config/appConfig";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 0 20px;
  min-height: 60px;
  background-color: #333;
  color: #fff;
  @media (${config.MediaQueryList.md}) {
    flex-direction: column;
    padding: 20px;
    gap: 10px;
  }
`;

export const Logo = styled.div`
  font-size: 1.5rem;
`;

export const NavLinks = styled.div`
  a {
    color: white;
    text-decoration: none;
    margin-right: 1rem;
    &:hover {
      text-decoration: underline;
    }
  }
  @media (${config.MediaQueryList.md}) {
    display: ${(props) => (props.$isExpanded ? "flex" : "none")};
  }
`;

export const HamburgerMenu = styled.div`
  display: none;

  @media (${config.MediaQueryList.md}) {
    display: block;
    cursor: pointer;
  }
`;
