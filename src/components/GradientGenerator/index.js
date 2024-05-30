import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {MainContainer} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    activeGradientDirection: gradientDirectionsList[0].value,
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onChangeDirection = directionId => {
    this.setState({activeGradientDirection: directionId})
  }

  onChangeColor1 = event => {
    this.setState({firstColor: event.target.value})
  }

  onChangeColor2 = event => {
    this.setState({secondColor: event.target.value})
  }

  onGenerating = () => {
    const {firstColor, secondColor, activeGradientDirection} = this.state
    this.setState({
      gradientValue: `to ${activeGradientDirection}, ${firstColor}, ${secondColor}`,
    })
  }

  render() {
    const {
      firstColor,
      secondColor,
      activeGradientDirection,
      gradientValue,
    } = this.state
    return (
      <MainContainer
        gradientValue={gradientValue}
        data-testid="gradientGenerator"
      >
        <div>
          <h1>Generate a CSS Color Gradient</h1>
          <p>Choose Direction</p>
          <ul>
            {gradientDirectionsList.map(each => (
              <GradientDirectionItem
                detail={each}
                key={each.directionId}
                onChangeDirection={this.onChangeDirection}
                active={activeGradientDirection}
              />
            ))}
          </ul>
          <p>Pick the Colors</p>
          <p>{firstColor}</p>
          <input
            type="color"
            id="color1"
            onChange={this.onChangeColor1}
            value={firstColor}
          />
          <p>{secondColor}</p>
          <input
            type="color"
            id="color2"
            onChange={this.onChangeColor2}
            value={secondColor}
          />
          <button type="button" onClick={this.onGenerating}>
            Generate
          </button>
        </div>
      </MainContainer>
    )
  }
}

export default GradientGenerator
