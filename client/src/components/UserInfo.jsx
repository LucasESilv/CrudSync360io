import React, { useContext } from "react";
import { ModalComponent } from "./ModalComponent";
import { AppContext } from "./AppContextProvider";

export const ViewUserModal = () => {
  const { showModalViewUser } = useContext(AppContext);
  return (
    <>
      <ModalComponent
        show={showModalViewUser}
        titleModal={"Visualizar Usuário"}
      >
        <h2>teste</h2>
      </ModalComponent>
    </>
  );
};

export default ViewUserModal;
