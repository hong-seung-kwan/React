import React from 'react'
import styled from 'styled-components'

const AboutDiv = styled.div`
  background-color: pink;
  padding: 10px;
  margin-top: 5px;
`

const About = () => {
  return (
    <AboutDiv>
      <h1>About</h1>
      About page...
    </AboutDiv>
  )
}

export default About