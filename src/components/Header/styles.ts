import styled from 'styled-components'

export const Container = styled.section`
  background: ${(props) => props.theme.palette.background.secondary};
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 6rem;
`
export const Menu = styled.nav`
  @media screen and (max-width: 480px) {
    display: none;
  }
`

export const MenuLink = styled.a`
  font-size: 2rem;
  padding: 0 1rem;
  cursor: pointer;
`
