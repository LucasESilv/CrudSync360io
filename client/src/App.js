import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
// import Modal from 'react-bootstrap/Modal';
import FormsModal from "./components/forms.js";
import TableUsers from "./components/tables.js";
import GlobalStyle from "./styles/global.js";
// import styled from "styled-components";
import Container from "./styles/containerStyles.js";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import axios from "axios";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);
  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setUsers(res.data.sort((a, b) => (a.name > b.name ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };
  useEffect(() => {
    getUsers();
  }, [setUsers]);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className="App">
      <>
        <Container>
          <Button variant="primary" onClick={openModal}>
            Open Modal
          </Button>
          <FormsModal onEdit={onEdit} show={showModal} onHide={closeModal} />
          <TableUsers setOnEdit={setOnEdit} users={users} setUsers={setUsers} />
        </Container>
        <GlobalStyle />
      </>
    </div>
  );
}

export default App;
