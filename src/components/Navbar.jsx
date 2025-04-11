import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/rtr-logo.png";

const Nav = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 20px;
background-color: #1a2639;
color: white;
height: 120px;
border-bottom: 2px solid #4a4e69;
`;

const LeftSection = styled.div`
display: flex;
align-items: center;
margin-left: -40px;
`;

const Logo = styled.img`
height: 120px;
margin-right: 05px;
margin-left: 30px;
`;

const Title = styled(Link)`
font-size: 72px;
margin: 0;
color: white;
text-decoration: none;
transition: color 0.3s ease;

&:hover {
    color: #ff568e;
}
`;

const RightSection = styled.div`
display: flex;
gap: 15px;
`;

const NavButton = styled(Link)`
background: white;
color: #7f2032;
padding: 8px 12px;
border-radius: 6px;
text-decoration: none;
font-weight: bold;
transition: 0.3s;


&:hover {
    background-color: #7f2032;
    color: #fefae0;
    font-weight: bold;
}
`;

const Navbar = () => {
return (
    <Nav>
    <LeftSection>
        <Logo src={logo} alt="RC Logo" />
        <Title to="/">ROTARACT</Title>
    </LeftSection>
    <RightSection>
        <NavButton to="/contact">Contact Us</NavButton>
        <NavButton to="/about">About Us</NavButton>
    </RightSection>
    </Nav>
);
};

export default Navbar;
