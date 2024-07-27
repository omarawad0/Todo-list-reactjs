import React, { useState } from 'react'
import { Logo, NavLinks, NavbarContainer, HamburgerMenu } from './Navbar.styled'
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
        <NavLinks isExpanded={isExpanded}>
        <a href="/">Local ToDoList</a>
        <a href="/about">Server toDoList</a>
        <a href="/services">Form</a>
        <a href="/contact">Optimized Component</a>
      </NavLinks>
    </NavbarContainer>
  )
}

export default Navbar