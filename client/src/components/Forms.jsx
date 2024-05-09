import React, { useContext, useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { ModalComponent } from "./ModalComponent";
import { AppContext } from "./AppContextProvider";

function FormsModal(user, props) {
  const { showModalForm, showModalEditUser } = useContext(AppContext);
  const [age, setAge] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    b_date: "",
    age: "",
    state: "",
    city: "",
    neighborhood: "",
    road: "",
    biography: "",
  });
  const [isModalClosed, setIsModalClosed] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

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
    setAge(age);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setAge("");
    setIsModalClosed(true);
    console.log(formData);
    props.onHide();
  };

  const resetFormFields = () => {
    setFormData({
      name: "",
      b_date: "",
      age: "",
      state: "",
      city: "",
      neighborhood: "",
      road: "",
      biography: "",
    });
    setAge("");
    setIsModalClosed(false);
  };

  return (
    <>
      {showModalForm && (
        <ModalComponent
          show={showModalForm}
          titleModal={"Adicionar Usuário"}
          saveInfo={"Salvar informações"}
        >
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Digite seu nome"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBDate">
              <Form.Label>Data de Nascimento</Form.Label>
              <Form.Control
                type="date"
                name="b_date"
                placeholder="Selecione sua data de nascimento"
                onChange={handleDateChange}
              />
            </Form.Group>
            <Form.Group controlId="formAge">
              <Form.Label>Idade</Form.Label>
              <Form.Control
                type="number"
                name="age"
                placeholder="Sua idade"
                value={age}
                readOnly
              />
            </Form.Group>
            <Form.Group controlId="formState">
              <Form.Label>Estado</Form.Label>
              <Form.Control
                type="text"
                name="state"
                placeholder="Digite seu estado"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formCity">
              <Form.Label>Cidade</Form.Label>
              <Form.Control
                type="text"
                name="city"
                placeholder="Digite sua cidade"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formNeighborhood">
              <Form.Label>Bairro</Form.Label>
              <Form.Control
                type="text"
                name="neighborhood"
                placeholder="Digite seu bairro"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formRoad">
              <Form.Label>Rua</Form.Label>
              <Form.Control
                type="text"
                name="road"
                placeholder="Digite sua rua"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBiography">
              <Form.Label>Biografia</Form.Label>
              <Form.Control
                as="textarea"
                name="biography"
                rows={3}
                placeholder="Digite sua biografia"
                onChange={handleChange}
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
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Digite seu nome"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBDate">
              <Form.Label>Data de Nascimento</Form.Label>
              <Form.Control
                type="date"
                name="b_date"
                placeholder="Selecione sua data de nascimento"
                onChange={handleDateChange}
              />
            </Form.Group>
            <Form.Group controlId="formAge">
              <Form.Label>Idade</Form.Label>
              <Form.Control
                type="number"
                name="age"
                placeholder="Sua idade"
                value={age}
                readOnly
              />
            </Form.Group>
            <Form.Group controlId="formState">
              <Form.Label>Estado</Form.Label>
              <Form.Control
                type="text"
                name="state"
                placeholder="Digite seu estado"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formCity">
              <Form.Label>Cidade</Form.Label>
              <Form.Control
                type="text"
                name="city"
                placeholder="Digite sua cidade"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formNeighborhood">
              <Form.Label>Bairro</Form.Label>
              <Form.Control
                type="text"
                name="neighborhood"
                placeholder="Digite seu bairro"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formRoad">
              <Form.Label>Rua</Form.Label>
              <Form.Control
                type="text"
                name="road"
                placeholder="Digite sua rua"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBiography">
              <Form.Label>Biografia</Form.Label>
              <Form.Control
                as="textarea"
                name="biography"
                rows={3}
                placeholder="Digite sua biografia"
                onChange={handleChange}
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
