import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  background: ${(props) => props.theme.palette.background.red};
  display: grid;
  grid-template-areas: '. image info';
  grid-template-columns: repeat(3, 1fr);
`

export const ImageSection = styled.div`
  grid-area: image;
  justify-self: center;
`

export const InfoSection = styled.div`
  grid-area: info;
`

export const ChapterNumberSection = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.2) 0 0);
  border-bottom-left-radius: 4.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 60%;
  width: 100%;
  padding-left: 2rem;
  margin-bottom: 2rem;
`

export const ChapterNumber = styled.h3`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: 6rem;
`

export const Text = styled.p`
  font-size: 2rem;
`
