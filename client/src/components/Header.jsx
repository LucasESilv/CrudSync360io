import { Button, Container } from "react-bootstrap";
import FormsModal from "./Forms";
import TableUsers from "./Tables";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { AppContext } from "./AppContextProvider";

export const HeaderComponent = () => {
  const { setShowModalForm } = useContext(AppContext);
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

  const openModalForm = () => setShowModalForm(true);

  return (
    <>
      <Container className="d-flex flex-column justify-content-center ">
        <Button variant="primary" onClick={openModalForm}>
          Open Modal
        </Button>
        <FormsModal />
        <TableUsers setOnEdit={setOnEdit} users={users} setUsers={setUsers} />
      </Container>
    </>
  );
};
