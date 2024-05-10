import { Button, Container } from "react-bootstrap";

import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { AppContext } from "./AppContextProvider";
import { FormsModal } from "./FormsAdd.jsx";
import { TableUsers } from "./Tables.jsx";

export const HeaderComponent = () => {
  const { setShowModalForm } = useContext(AppContext);
  const [users, setUsers] = useState([]);
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
