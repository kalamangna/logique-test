import { Button, Container, Modal, Navbar } from "react-bootstrap"
import styled from "styled-components"

import { useState } from "react"
import { Link } from "react-router-dom"

import Menuicon from "../assets/icon/menu.svg"
import SearchIcon from "../assets/icon/search.svg"
import Logo from "../assets/img/ngmusic-small.webp"

import SearchForm from "./SearchForm"

const StyledNavbar = styled(Navbar)`
  box-shadow: 0 0 6px 0 rgba(148, 77, 230, 0.75);
  background: linear-gradient(100deg, #712bda, #a45deb 100%);
`

const StyledButton = styled(Button)`
  background: transparent;
  border: none;

  &:hover,
  &:active {
    background: transparent !important;
  }
`

export default function NgNavbar() {
  const [showModal, setShowModal] = useState(false)

  const handleShowModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <StyledNavbar bg="dark" variant="dark" fixed="top" expand={false}>
      <Container>
        <StyledButton>
          <img src={Menuicon} alt="menu icon" />
        </StyledButton>

        <Link to="/">
          <img src={Logo} alt="ngmusic logo" width={73} height={16} />
        </Link>

        <StyledButton onClick={handleShowModal}>
          <img src={SearchIcon} alt="search icon" />
        </StyledButton>
      </Container>

      <Modal
        size="lg"
        aria-labelledby="contained-search-modal"
        centered
        show={showModal}
        onHide={handleCloseModal}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-search-modal">Search</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <SearchForm isModal={true} handleCloseModal={handleCloseModal} />
        </Modal.Body>
      </Modal>
    </StyledNavbar>
  )
}
