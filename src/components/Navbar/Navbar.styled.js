import styled from "styled-components";

const MAX_WIDTH = "768px";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 0 20px;
  min-height: 60px;
  background-color: #333;
  color: #fff;
  @media (max-width: ${MAX_WIDTH}) {
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
  @media (max-width: ${MAX_WIDTH}) {
    display: ${(props) => (props.$isExpanded ? "flex" : "none")};
  }
`;

export const HamburgerMenu = styled.div`
  display: none;

  @media (max-width: ${MAX_WIDTH}) {
    display: block;
    cursor: pointer;
  }
`;
