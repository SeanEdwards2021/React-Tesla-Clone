import React, {useState} from 'react'
import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa';



function Header() {

  const [sideMenuStatus, setSideMenuStatus] = useState(false);

  return (
    <Container>
      <NavIcon>
        <a>
          <img src="/images/logo.svg" alt="Tesla Logo" />
        </a>
      </NavIcon>
      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
        <a href="#">Powerwall</a>
        <a href="#">Charging</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <SideMenuButton>
          <a onClick={()=>setSideMenuStatus(true)} href="#">Menu</a>
        </SideMenuButton>
      </RightMenu>
      <SideMenuNav show={sideMenuStatus}>
        <CloseWrapper>
          <CustomClose onClick={()=>setSideMenuStatus(false)}/>
        </CloseWrapper>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-In</a></li>
        <li><a href="#">Test Drive</a></li>
        <li><a href="#">Fleet and Business</a></li>
        <li><a href="#">Cybertruck</a></li>
        <li><a href="#">Roadster</a></li>
        <li><a href="#">Charging</a></li>
        <li><a href="#">Semi</a></li>
        <li><a href="#">Commercial Energy</a></li>
        <li><a href="#">Energy</a></li>
        <li><a href="#">Charging</a></li>
        <li><a href="#">Find Us</a></li>
        <li><a href="#">Events</a></li>
        <li><a href="#">Support</a></li>
        <li><a href="#">Investor Relations</a></li>
      </SideMenuNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  font-size: 16px
  z-index: 1;
`
const NavIcon = styled.div`
  width: 33.3vh;
`

const Menu = styled.div`
  display: flex;
  align-items:center;
  justify-content: center;
  flex: 1;
  width: 33.3vh;

  a {
    font-weight: 600;
    padding: 0 20px;
    flex-wrap: nowrap;
  }

  @media(max-width: 768px) {
    display:none;
  }
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  width: 33.3vh;

  a {
    font-weight: 600;
    margin-right: 20px;
  }
`
const SideMenuNav = styled.div `
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 10;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
  transition: transform 0.2s ease-in-out;

  li {
    padding: 10px 20px;

    a{
      font-weight: 600;
    }
  }
`
const SideMenuButton = styled.div `

`

const CustomClose = styled(FaTimes)`
  cursor: pointer;
`

const CloseWrapper = styled.div`
  display: flex;
  Justify-content: flex-end;
`