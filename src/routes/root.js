import { Container } from "react-bootstrap"
import styled from "styled-components"

import Logo from "../assets/img/ngmusic.webp"
import SearchForm from "../components/SearchForm"

const StyledRoot = styled.div`
  background: linear-gradient(153deg, #712bda, #a45deb 100%);
  padding: 0 30px;
`
const StyledContainer = styled(Container)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  padding-top: 26px;
  padding-bottom: 26px;
`

const StyledLogo = styled.img`
  width: 73px;
  height: 85px;
  margin-bottom: 220px;
`

export default function Root() {
  return (
    <StyledRoot>
      <StyledContainer>
        <StyledLogo src={Logo} alt="ngmusic logo" />

        <SearchForm />
      </StyledContainer>
    </StyledRoot>
  )
}
