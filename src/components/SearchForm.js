import { Button, Form } from "react-bootstrap"
import styled from "styled-components"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

const StyledForm = styled(Form.Control)`
  border-radius: 20px;
  text-align: center;
`

const StyledButton = styled(Button)`
  margin-top: 15px;
  border-radius: 20px;
  background: ${(props) =>
    props.isModal
      ? "linear-gradient(98deg, #712bda, #a45deb)"
      : "rgba(255, 255, 255, 0.2)"};
  border: none;

  &:hover,
  &:active {
    background: ${(props) =>
      props.isModal
        ? "linear-gradient(98deg, #712bda, #a45deb)"
        : "rgba(255, 255, 255, 0.2)"};
  }
`

export default function SearchForm({ handleCloseModal, isModal }) {
  const [value, setValue] = useState("")

  const handleValue = (e) => {
    setValue(e.target.value)
  }

  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()

    if (value) {
      navigate(`/result/${value}`)
    }

    if (isModal) {
      handleCloseModal()
    }
  }

  return (
    <Form onSubmit={handleSearch} style={{ width: "100%" }}>
      <Form.Group controlId="formBasicSearch">
        <StyledForm
          type="text"
          placeholder="Artist / Album / Title"
          value={value}
          onChange={handleValue}
        />
      </Form.Group>

      <div className="d-grid">
        <StyledButton isModal={isModal} type="submit">
          Search
        </StyledButton>
      </div>
    </Form>
  )
}
