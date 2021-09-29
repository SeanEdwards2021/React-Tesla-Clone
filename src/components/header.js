import React from 'react'
import styled from 'styled-components'

function header() {
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
        <a href="#">Menu</a>
      </RightMenu>
    </Container>
  )
}

export default header

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
  font-size: 12px
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
    text-transform: uppercase;
    padding: 0 20px;
    flex-wrap: nowrap;
  }

  @media(max-width: 768px) {
    display:none;
  }
`

const RightMenu = styled.div`
  display: flex:
  align-items: center;
  width: 33.3vh;

  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 20px
  }
`

