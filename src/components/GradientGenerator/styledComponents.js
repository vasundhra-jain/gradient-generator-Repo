// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-image: linear-gradient(${props => props.gradientValue});
  height: 100vh;
  display: flex;
  flex-direction: column;
`
