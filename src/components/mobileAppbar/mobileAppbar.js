import React from 'react';
import styled from "styled-components";
import ResponsiveImg from "../responsiveImg/responsiveImg";
import logo from "../../assets/logo/logo svg-19.svg";
import menuIcon from "../../assets/icons/menu.svg";
import SideMenu from "./sideMenu/sideMenu";

const StickyContainer = styled.div`
  position: sticky;
  visibility: visible;
  width: 100%;
  z-index: 5;
  background-color: white;
  height: 45px;
  transition: all 300ms ease-in;
  top: 0;
  display: none;
  
  @media (max-width: 700px) {
    display: block;
  }
`;

const StyledLogo = styled(ResponsiveImg)`
  height: 40px;
  width: auto;
`;

const MenuButton = styled.div`
  width: auto;
  height: 100%;
  display: inline-block;
  padding: 0.5rem;

  img {
    margin: 0 auto;
  }
`;

class MobileAppbar extends React.Component {

    state = {
        showNavbar: false
    };

    toggleNavbar = () => {
        this.setState((prevState) => ({
            showNavbar: !prevState.showNavbar
        }))
    };

    render() {
        return (
            <StickyContainer>
                <SideMenu open={this.state.showNavbar} onClick={this.toggleNavbar}/>
                <MenuButton onClick={this.toggleNavbar}>
                    <ResponsiveImg src={menuIcon}/>
                </MenuButton>
                <StyledLogo src={logo}/>

            </StickyContainer>
        );
    }
}

export default MobileAppbar;
