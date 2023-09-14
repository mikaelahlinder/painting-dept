import styled from '@emotion/styled'
import welcome from './welcome.jpg'
import ig from './instagram-logo.png'

const Container = styled.div`
  background-color: #eeede9;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 100px;
  padding-top: 40px;
  height: 100vh;
  font-family: 'Baskervville', serif;
  font-weight: normal;
  @media (max-width: 420px) {
    padding: 0 50px;
    padding-top: 40px;
  }
`

const Logo = styled.h1`
  font-family: impact;
  padding: 0;
  margin: 0;
  padding-bottom: 10px;
  text-align: center;
  letter-spacing: 6px;
  font-size: 1.2rem;
  border-bottom: 2px solid #000;
`

const Image = styled.div`
  max-width: 800px;
  min-height: 750px;
  margin: 0 auto;
  margin-top: 20px;
  background-image: url(${welcome});
  @media (max-width: 420px) {
    min-height: 370px;
    background-size: 500px;
  }
`

const Heading2 = styled.h2`
  color: #fff;
  font-weight: normal;
  font-size: 40px;
  margin: 0;
  padding: 0;
  padding-top: 50px;
  margin-left: 20px;
  @media (max-width: 420px) {
    font-size: 30px;
    margin-left: 10px;
  }
`
const Heading3 = styled.h3`
  background-color: #fff;
  margin: 0;
  font-weight: normal;
  display: inline-block;
  padding-right: 40px;
  padding-left: 10px;
  margin-left: 20px;
  @media (max-width: 420px) {
    margin-left: 10px;
  }
`

const Info = styled.div`
  text-align: center;
  font-size: 18px;
  padding-top: 20px;
  @media (max-width: 420px) {
    font-size: 14px;
  }
`

const Paragraph = styled.p`
  margin: 10px 0;
  @media (max-width: 420px) {
    margin: 8px 0;
  }
`

function App() {
  return (
    <Container>
      <Logo>PAINTING DEPT.</Logo>
      <Image>
        <Heading2>Rich, textured art</Heading2>
        <Heading3>Launching November</Heading3>
      </Image>
      <Info>
        <Paragraph>Stay informed about new available artwork</Paragraph>

        <Paragraph>Inspiration and the creative process:</Paragraph>
        <a
          href="https://www.instagram.com/paintingdept/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={ig} alt="" width={30} />
        </a>
      </Info>
    </Container>
  )
}

export default App
