import React, { useState } from 'react';
import styled from 'styled-components';

const NavContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0b0909;
    height: auto;
    padding: 10px 0;
    flex-wrap: wrap;
    width: 100%; 
    position: relative; 
    box-sizing: border-box;
`;

const NavItem = styled.a`
    margin: 0 15px;
    font-size: 16px;
    text-decoration: none;
    color: #d4d4d4;
    transition: color 0.3s;

    &:hover {
        color: #777;
    }

    box-sizing: border-box;

    @media (max-width: 768px) {
        display: none;  // Hide the nav items on mobile
    }
`;

const Logo = styled.img`
    height: 30px;
    margin: 0 50px;
    box-sizing: border-box;
`;

const MobileMenuButton = styled.button`
    display: none;
    background: transparent;
    border: none;
    font-size: 24px;
    cursor: pointer;
    z-index: 2;

    @media (max-width: 768px) {
        display: block; // Display the menu button on mobile
    }
`;

const DropdownMenu = styled.div`
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #fff;
    width: 100%;
    box-sizing: border-box;
    z-index: 1;

    @media (max-width: 768px) {
        ${props => props.isOpen ? 'display: flex;' : 'display: none;'} // Conditional rendering based on the isOpen prop
    }
`;

const DropdownNavItem = styled(NavItem)`
    display: block; // Override the desktop style to always display the dropdown items
    margin: 5px 0;
    color: #0b0909;
`;

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <NavContainer>
            <NavItem href="#">HOME</NavItem>
            <NavItem href="#">ABOUT</NavItem>
            <Logo src="/lockup white.svg" alt="RELAND Logo" />
            <MobileMenuButton onClick={() => setMenuOpen(!isMenuOpen)}>
                ☰
            </MobileMenuButton>
            <DropdownMenu isOpen={isMenuOpen}>
                <DropdownNavItem href="#">HOME</DropdownNavItem>
                <DropdownNavItem href="#">ABOUT</DropdownNavItem>
                <DropdownNavItem href="#">PROJECTS</DropdownNavItem>
                <DropdownNavItem href="#">CONTACTS</DropdownNavItem>
            </DropdownMenu>
            <NavItem href="#">PROJECTS</NavItem>
            <NavItem href="#">CONTACTS</NavItem>
        </NavContainer>
    );
};

export default Navbar;
