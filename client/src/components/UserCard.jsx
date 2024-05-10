import React, { useContext } from "react";
import { ModalComponent } from "./ModalComponent";
import { AppContext } from "./AppContextProvider";
import { Card } from "react-bootstrap";

export const ViewUserModal = () => {
  const { showModalViewUser, setShowModalViewUser, viewingUser } =
    useContext(AppContext);

  if (!viewingUser) return null;

  return (
    <>
      <ModalComponent
        show={showModalViewUser}
        titleModal={"Visualizar Usuário"}
        onClose={() => setShowModalViewUser(false)}
      >
        <Card>
          <Card.Body>
            <Card.Title>{viewingUser.name}</Card.Title>
            <Card.Text>
              <img
                src={viewingUser?.image_url} // Ajuste aqui para usar image_url
                alt="Imagem do Usuário"
                style={{ width: "100px", height: "100px" }}
                className="justify-content-center"
              />
              <br />
              <strong>Idade:</strong> {viewingUser.age} anos <br />
              <strong>Data de Nascimento:</strong> {viewingUser.b_date} <br />
              <strong>Estado:</strong> {viewingUser.state} <br />
              <strong>Cidade:</strong> {viewingUser.city} <br />
              <strong>Bairro:</strong> {viewingUser.neighborhood} <br />
              <strong>Rua:</strong> {viewingUser.road} <br />
              <strong>Biografia:</strong> {viewingUser.biography}
            </Card.Text>
          </Card.Body>
        </Card>
      </ModalComponent>
    </>
  );
};
