import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  color: #1e293b;
  font-weight: 500;
  font-size: 34px;
`

export const ButtonsContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
`

export const Button = styled.button`
  border-color: #db1c48;
  color: ${props => (props.active ? '#ffffff' : '#db1c48')};
  background-color: ${props => (props.active ? '#db1c48' : ' #ffffff')};
  border-radius: 6px;
  margin: 10px;
  padding: 5px;
  cursor: pointer;
`
export const Image = styled.img`
  height: 70vh;
  width: 50vh;
`
