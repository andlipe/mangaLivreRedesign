import styled from 'styled-components'

export const Container = styled.article`
  background-color: ${({ theme }) => theme.palette.common.white};
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.05);
  width: max-content;
  display: flex;
`

export const ImageContainer = styled.section``

export const InfoContainer = styled.section`
  color: ${({ theme }) => theme.palette.common.black};
  font-family: ${({ theme }) => theme.fonts.default};
  overflow-wrap: break-word;
  padding: 2rem 2rem 2rem 4rem;
  max-width: 280px;
  line-height: 3rem;
`

export const Category = styled.p`
  font-size: 1.5rem;
`

export const Title = styled.h3`
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 4rem;
`

export const Description = styled.p`
  font-size: 1.5rem;
  word-break: break-all;
  margin-top: 2rem;
  margin-bottom: 3rem;
`

export const SeeMore = styled.a`
  font-size: 1.6rem;
`
