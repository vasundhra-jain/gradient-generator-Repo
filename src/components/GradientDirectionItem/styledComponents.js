// Style your elements here
import styled from 'styled-components'

export const CustomButton = styled.div`
  opacity: ${props => (props.check ? 1 : 0.5)};
  background-color: #ffffff;
`
