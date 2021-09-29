import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
      <Section
        title="Model 3"
        description="1% Company Car Tax. Learn More"
        leftBtnText="Custom Order"
        rightBtnText="Available Inventory"
        testDriveText = "Schedule a Touchless Test Drive"
        backgroundImg="model-3.jpg"
      />
      <Section
        title="Model S"
        description="1% Company Car Tax. Learn More"
        leftBtnText="Custom Order"
        rightBtnText="Available Inventory"
        testDriveText = ""
        backgroundImg="model-s.jpg"
      />
      <Section
        title="Solar and Powerwall"
        description="Power Everything"
        leftBtnText="Learn more"
        rightBtnText=""
        testDriveText = ""
        backgroundImg="solar-panel.jpg"
      />
      <Section
        title="Model X"
        description="1% Company Car Tax. Learn More"
        leftBtnText="Custom Order"
        rightBtnText="Available Inventory"
        testDriveText = ""
        backgroundImg="model-x.jpg"
      />
      <Section
        title="Model Y"
        description=""
        leftBtnText="Learn More"
        rightBtnText=""
        testDriveText = ""
        backgroundImg="model-y.jpg"
      />
      <Section
        title="Solar for New Roofs"
        description="Solar Roof Cost Less Than a New Roof Plus Solar Panels"
        leftBtnText="Order now"
        rightBtnText="Learn more"
        testDriveText = ""
        backgroundImg="solar-roof.jpg"
      />
      <Section
        title="Accessories"
        description=""
        leftBtnText="Shop Now"
        rightBtnText=""
        testDriveText = ""
        backgroundImg="accessories.jpg"
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
  height: 100vh;
`;