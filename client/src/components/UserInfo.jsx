import React, { useContext } from "react";
import { ModalComponent } from "./ModalComponent";
import { AppContext } from "./AppContextProvider";
import { Card } from "react-bootstrap";

export const ViewUserModal = () => {
  const { showModalViewUser, setShowModalViewUser, viewingUser } =
    useContext(AppContext);

  return (
    <>
      <ModalComponent
        show={showModalViewUser}
        titleModal={"Visualizar Usuário"}
      >
        <Card>
          <Card.Body>
            <Card.Title>{viewingUser.name}</Card.Title>
            <Card.Text>
              <strong>Idade:</strong> {viewingUser.age} anos <br />
              <strong>Data de Nascimento:</strong> {viewingUser.b_date} <br />
              <strong>Estado:</strong> {viewingUser.state}
            </Card.Text>
          </Card.Body>
        </Card>
      </ModalComponent>
    </>
  );
};
