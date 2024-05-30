// Write your code here
import {CustomButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {detail, onChangeDirection, active} = props
  const {value, displayText} = detail

  const changeDirection = () => {
    onChangeDirection(value)
  }
  const req = active === value
  console.log(active, value, req)

  return (
    <li>
      <CustomButton type="button" onClick={changeDirection} check={req}>
        {displayText}
      </CustomButton>
    </li>
  )
}

export default GradientDirectionItem
