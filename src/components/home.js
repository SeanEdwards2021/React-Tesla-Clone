import React from 'react'
import styled from 'styled-components'
import Section from './section'

function home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        
      />
      <Section
        
      />
      <Section
      
      />
    </Container>
  )
}

export default home

const Container = styled.div`
  height: 100vh;
`;