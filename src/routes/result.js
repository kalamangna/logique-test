import axios from "axios"
import { Col, Container, Row, Spinner } from "react-bootstrap"
import styled from "styled-components"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import NgNavbar from "../components/Navbar"
import ResultCard from "../components/ResultCard"

const StyledResult = styled.div`
  background: #f8fafc;
`
const StyledContainer = styled(Container)`
  /* 26px + 56px (navbar height) */
  padding-top: 82px;
  padding-bottom: 26px;
`

const StyledTitle = styled.h1`
  font-size: 14px;
  text-align: center;
  margin-bottom: 36px;
  color: #334155;

  span {
    font-size: 18px;
    color: #7b34dd;
    font-weight: bold;
  }
`

export default function Result() {
  const params = useParams()

  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const response = await axios(
        `https://itunes.apple.com/search?entity=musicTrack&term=${params.id}`
      )

      setResults(response.data.results)
      setLoading(false)
    }

    fetchData()
  }, [params.id])

  return (
    <StyledResult>
      <NgNavbar />

      <StyledContainer>
        <StyledTitle>
          Search result for : <span>{params.id}</span>
        </StyledTitle>

        {loading ? (
          <div className="d-flex align-items-center justify-content-center">
            <Spinner animation="grow" size="sm" />
            <Spinner animation="grow" className="mx-2" />
            <Spinner animation="grow" size="sm" />
          </div>
        ) : (
          <Row className="g-4">
            {results.map((res) => (
              <Col xs={12} md={6} lg={4} key={res.trackId}>
                <ResultCard res={res} />
              </Col>
            ))}
          </Row>
        )}
      </StyledContainer>
    </StyledResult>
  )
}
