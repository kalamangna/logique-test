import Logo from "../assets/img/ngmusic.webp"
import { Button, Form } from "react-bootstrap"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function SearchForm() {
  const [value, setValue] = useState("")

  const handleValue = (e) => {
    setValue(e.target.value)
  }

  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()

    console.log(value)
    if (value) {
      navigate(`/result/${value}`)
    }
  }

  return (
    <div>
      <img src={Logo} alt="ngmusic logo" />

      <Form onSubmit={handleSearch}>
        <Form.Group className="mb-3" controlId="formBasicSearch">
          <Form.Control
            type="text"
            placeholder="Artist / Album / Title"
            value={value}
            onChange={handleValue}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
    </div>
  )
}
