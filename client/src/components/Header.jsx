import { Button, Container } from "react-bootstrap";

import { useContext, useState } from "react";
import { AppContext } from "./AppContextProvider";
import { FormsModal } from "./FormsAdd.jsx";
import { TableUsers } from "./Tables.jsx";

export const HeaderComponent = () => {
  const { setShowModalForm } = useContext(AppContext);
  const [users, setUsers] = useState([]);
  const openModalForm = () => setShowModalForm(true);

  return (
    <>
      <Container className="d-flex flex-column justify-content-center ">
        <Button variant="primary" onClick={openModalForm}>
          Open Modal
        </Button>
        <FormsModal />
        <TableUsers users={users} setUsers={setUsers} />
      </Container>
    </>
  );
};
