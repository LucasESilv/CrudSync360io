import React, { useContext, useRef } from "react";
import { Form } from "react-bootstrap";
import { ModalComponent } from "./ModalComponent";
import { AppContext } from "./AppContextProvider";
import { useCreateUsers } from "../hook/useCreateUsers";
import { useUsers } from "../hook/useUsers";

export const  FormsModal   = ({user, props}) =>{
  const { showModalForm, setShowModalForm } = useContext(AppContext);
  const nameRef = useRef(null);
  const b_dateRef = useRef(null);
  const ageRef = useRef(null);
  const stateRef = useRef(null);
  const cityRef = useRef(null);
  const neighborhoodRef = useRef(null);
  const roadRef = useRef(null);
  const biographyRef = useRef(null);
  const formRef = useRef(null);

  const { refetchUsers } = useUsers();
  const {
    isLoading: createLoading,
    error: createError,
    createUserHandler,
  } = useCreateUsers();
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    setShowModalForm(false);
    const userData = extractUserData();
    await createUserHandler(userData);
    formRef.current?.reset();
    refetchUsers();
  };

  const extractUserData = () => {
    const userData = {
      name: nameRef.current.value,
      b_date: b_dateRef.current.value,
      age: ageRef.current.value,
      state: stateRef.current.value,
      city: cityRef.current.value,
      neighborhood: neighborhoodRef.current.value,
      road: roadRef.current.value,
      biography: biographyRef.current.value,
    };
    return userData;
  };

  if (createLoading) return <div>Loading...</div>;
  if (createError) return <div>Error: {createError.message}</div>;

  return (
    <>
      <ModalComponent
        show={showModalForm}
        titleModal={"Adicionar Usuário"}
        saveInfo={"Salvar informações"}
        onSave={handleSubmit}
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
        </Form>
      </ModalComponent>
    </>
  );
}