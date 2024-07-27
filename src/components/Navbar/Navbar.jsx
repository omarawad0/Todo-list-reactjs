import React, { useState } from "react";
import {
  Logo,
  NavLinks,
  NavbarContainer,
  HamburgerMenu,
} from "./Navbar.styled";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-right: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <NavbarContainer>
      <Logo>MyApp</Logo>
      <HamburgerMenu onClick={toggle}>
        <div>☰</div>
      </HamburgerMenu>
      <NavLinks $isExpanded={isExpanded}>
        <NavLink to="/">Local ToDoList</NavLink>
        <NavLink to="/serverTdo">Server toDoList</NavLink>
        <NavLink to="/form">Form</NavLink>
        <NavLink to="/optimizedComponent">Optimized Component</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
