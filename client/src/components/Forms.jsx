import React, { useContext, useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { ModalComponent } from "./ModalComponent";
import { AppContext } from "./AppContextProvider";

function FormsModal(user, props) {
  const { showModalForm, setShowModalForm, showModalEditUser, setShowModalEditUser } = useContext(AppContext);
  const nameRef = useRef(null);
  const b_dateRef = useRef(null);
  const ageRef = useRef(null);
  const stateRef = useRef(null);
  const cityRef = useRef(null);
  const neighborhoodRef = useRef(null);
  const roadRef = useRef(null);
  const biographyRef = useRef(null);
  const formRef = useRef(null);

  const handleDateChange = (e) => {
    const birthDate = new Date(e.target.value);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    ageRef.current.value = age;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowModalForm(false);
    setShowModalEditUser(false);
    formRef.current.reset();
  };


  return (
    <>
      {showModalForm && (
        <ModalComponent
          show={showModalForm}
          titleModal={"Adicionar Usuário"}
          saveInfo={"Salvar informações"}
        >
          <Form onSubmit={handleSubmit} ref={formRef}>
            <Form.Group controlId="formName">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                ref={nameRef}
                type="text"
                name="name"
                placeholder="Digite seu nome"
              />
            </Form.Group>
            <Form.Group controlId="formBDate">
              <Form.Label>Data de Nascimento</Form.Label>
              <Form.Control
                ref={b_dateRef}
                type="date"
                name="b_date"
                placeholder="Selecione sua data de nascimento"
                onChange={handleDateChange}
              />
            </Form.Group>
            <Form.Group controlId="formAge">
              <Form.Label>Idade</Form.Label>
              <Form.Control
                ref={ageRef}
                type="number"
                name="age"
                placeholder="Sua idade"
                readOnly
              />
            </Form.Group>
            <Form.Group controlId="formState">
              <Form.Label>Estado</Form.Label>
              <Form.Control
                ref={stateRef}
                type="text"
                name="state"
                placeholder="Digite seu estado"
              />
            </Form.Group>
            <Form.Group controlId="formCity">
              <Form.Label>Cidade</Form.Label>
              <Form.Control
                ref={cityRef}
                type="text"
                name="city"
                placeholder="Digite sua cidade"
              />
            </Form.Group>
            <Form.Group controlId="formNeighborhood">
              <Form.Label>Bairro</Form.Label>
              <Form.Control
                ref={neighborhoodRef}
                type="text"
                name="neighborhood"
                placeholder="Digite seu bairro"
              />
            </Form.Group>
            <Form.Group controlId="formRoad">
              <Form.Label>Rua</Form.Label>
              <Form.Control
                ref={roadRef}
                type="text"
                name="road"
                placeholder="Digite sua rua"
              />
            </Form.Group>
            <Form.Group controlId="formBiography">
              <Form.Label>Biografia</Form.Label>
              <Form.Control
                ref={biographyRef}
                as="textarea"
                name="biography"
                rows={3}
                placeholder="Digite sua biografia"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Salvar Alterações
            </Button>
          </Form>
        </ModalComponent>
      )}
      {showModalEditUser && (
        <ModalComponent
          show={showModalEditUser}
          titleModal={"Editar usuário"}
          saveInfo={"Salvar informações"}
        >
          <Form onSubmit={handleSubmit} ref={formRef} >
            <Form.Group controlId="formName">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                ref={nameRef}
                type="text"
                name="name"
                placeholder="Digite seu nome"
              />
            </Form.Group>
            <Form.Group controlId="formBDate">
              <Form.Label>Data de Nascimento</Form.Label>
              <Form.Control
                ref={b_dateRef}
                type="date"
                name="b_date"
                placeholder="Selecione sua data de nascimento"
                onChange={handleDateChange}
              />
            </Form.Group>
            <Form.Group controlId="formAge">
              <Form.Label>Idade</Form.Label>
              <Form.Control
                ref={ageRef}
                type="number"
                name="age"
                placeholder="Sua idade"
                readOnly
              />
            </Form.Group>
            <Form.Group controlId="formState">
              <Form.Label>Estado</Form.Label>
              <Form.Control
                ref={stateRef}
                type="text"
                name="state"
                placeholder="Digite seu estado"
              />
            </Form.Group>
            <Form.Group controlId="formCity">
              <Form.Label>Cidade</Form.Label>
              <Form.Control
                ref={cityRef}
                type="text"
                name="city"
                placeholder="Digite sua cidade"
              />
            </Form.Group>
            <Form.Group controlId="formNeighborhood">
              <Form.Label>Bairro</Form.Label>
              <Form.Control
                ref={neighborhoodRef}
                type="text"
                name="neighborhood"
                placeholder="Digite seu bairro"
              />
            </Form.Group>
            <Form.Group controlId="formRoad">
              <Form.Label>Rua</Form.Label>
              <Form.Control
                ref={roadRef}
                type="text"
                name="road"
                placeholder="Digite sua rua"
              />
            </Form.Group>
            <Form.Group controlId="formBiography">
              <Form.Label>Biografia</Form.Label>
              <Form.Control
                ref={biographyRef}
                as="textarea"
                name="biography"
                rows={3}
                placeholder="Digite sua biografia"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Salvar Alterações
            </Button>
          </Form>
        </ModalComponent>
      )}
    </>
  );
}

export default FormsModal;
