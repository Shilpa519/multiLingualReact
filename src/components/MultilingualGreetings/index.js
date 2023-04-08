import {Component} from 'react'

import {
  MainContainer,
  Heading,
  ButtonsContainer,
  Button,
  Image,
} from './styledComponents'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class MultilingualGreetings extends Component {
  state = {
    activeTab1: true,
    activeTab2: false,
    activeTab3: false,
  }

  onClicked = id => {
    if (languageGreetingsList[0].id === id) {
      this.setState({
        activeTab1: true,
        activeTab2: false,
        activeTab3: false,
      })
    } else if (languageGreetingsList[1].id === id) {
      this.setState({
        activeTab1: false,
        activeTab2: true,
        activeTab3: false,
      })
    } else {
      this.setState({
        activeTab1: false,
        activeTab2: false,
        activeTab3: true,
      })
    }
  }

  render() {
    const {activeTab1, activeTab2, activeTab3} = this.state
    return (
      <MainContainer>
        <Heading>Multilingual Greetings</Heading>
        <ButtonsContainer>
          <li key={languageGreetingsList[0].id}>
            <Button
              type="button"
              active={activeTab1}
              onClick={() => this.onClicked(languageGreetingsList[0].id)}
            >
              {languageGreetingsList[0].buttonText}
            </Button>
          </li>
          <li key={languageGreetingsList[1].id}>
            <Button
              type="button"
              active={activeTab2}
              onClick={() => this.onClicked(languageGreetingsList[1].id)}
            >
              {languageGreetingsList[1].buttonText}
            </Button>
          </li>
          <li key={languageGreetingsList[2].id}>
            <Button
              type="button"
              active={activeTab3}
              onClick={() => this.onClicked(languageGreetingsList[2].id)}
            >
              {languageGreetingsList[2].buttonText}
            </Button>
          </li>
        </ButtonsContainer>
        <>
          {activeTab1 && (
            <Image
              src={languageGreetingsList[0].imageUrl}
              alt={languageGreetingsList[0].imageAltText}
            />
          )}
        </>
        <>
          {activeTab2 && (
            <Image
              src={languageGreetingsList[1].imageUrl}
              alt={languageGreetingsList[1].imageAltText}
            />
          )}
        </>
        <>
          {activeTab3 && (
            <Image
              src={languageGreetingsList[2].imageUrl}
              alt={languageGreetingsList[2].imageAltText}
            />
          )}
        </>
      </MainContainer>
    )
  }
}

export default MultilingualGreetings
