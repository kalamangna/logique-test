import axios from "axios"
import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom"

export default function Result() {
  const params = useParams()
  console.log(params.id)

  const [results, setResults] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await axios(
        `https://itunes.apple.com/search?term=${params.id}`
      )

      setResults(response.data.results)
    }

    fetchData()
  }, [params.id])

  return (
    <Container>
      <h1 className="text-center">Search result for : {params.id}</h1>

      <ul>
        {results.map((res) => (
          <li key={res.id}>{res.artistName}</li>
        ))}
      </ul>
    </Container>
  )
}
