import { Card, Col, Row } from "react-bootstrap"
import styled from "styled-components"

import CurrencyLogo from "../assets/icon/currency-dollar.svg"

const StyledCard = styled(Card)`
  padding: 12px 10px;
  border-radius: 10px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border: none;
`

const StyledImage = styled.img`
  width: 100%;
  border-radius: 10px;
`
const StyledArtist = styled.h3`
  font-size: 10px;
  font-weight: 500;
  color: #334155;
`

const StyledTrack = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #334155;
`

const StyledGenre = styled.div`
  padding: 4px 12px;
  border-radius: 10px;
  background-color: #10b981;
  font-size: 10px;
  color: #fff;
`

const StyledPrice = styled.div`
  color: #f5b014;
  font-size: 12px;
  font-weight: bold;
  margin-left: 6px;
`

export default function ResultCard({ res }) {
  return (
    <StyledCard>
      <Row className="g-2 align-items-center">
        <Col xs={4}>
          <StyledImage src={res.artworkUrl100} alt={res.trackName} />
        </Col>

        <Col xs={8}>
          <StyledArtist>{res.artistName}</StyledArtist>
          <StyledTrack>{res.trackName}</StyledTrack>

          <div className="d-flex justify-content-between align-items-center">
            <StyledGenre>{res.primaryGenreName}</StyledGenre>

            <div className="d-flex align-items-center">
              <img
                src={CurrencyLogo}
                alt="currency dollar"
                width={18}
                height={18}
              />
              <StyledPrice>{res.collectionPrice}</StyledPrice>
            </div>
          </div>
        </Col>
      </Row>
    </StyledCard>
  )
}
