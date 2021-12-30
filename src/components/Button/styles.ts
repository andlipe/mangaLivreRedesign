import styled from 'styled-components'

export const Container = styled.button`
  padding: 1rem 3rem;
  background: ${(props) => props.theme.palette.background.blue};
  border-radius: ${(props) => props.theme.borderRadius};
  cursor: pointer;
  * {
    cursor: pointer;
  }
`
export const Label = styled.label`
  font-size: 2rem;
  color: ${(props) => props.theme.palette.common.white};
`
