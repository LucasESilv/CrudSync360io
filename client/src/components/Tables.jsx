import React, { useContext } from "react";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenSquare,
  faTrash,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "./AppContextProvider.jsx";
import { useUsers } from "../hook/useUsers.jsx";
import { useDeleteUsers } from "../hook/useDeleteUsers.jsx";
import { FormsEditUsers } from "./FormsEditUser.jsx";
import { ViewUserModal } from "./UserCard.jsx";

export const TableUsers = () => {
  const {
    setShowModalViewUser,
    setViewingUser,
    setShowModalEditUser,
    showModalEditUser,
    setEditingUser,
    editingUser,
    users,
    setUsers,
    viewingUser,
  } = useContext(AppContext);

  const { isLoading: usersLoading, error: usersError } = useUsers();
  const {
    deleteUserById,
    isLoading: deleteLoading,
    error: deleteError,
  } = useDeleteUsers();

  const openEditModal = (item) => {
    setEditingUser(item);
    setShowModalEditUser(true);
  };

  const openViewUser = (item) => {
    setViewingUser(item);
    setShowModalViewUser(true);
  };
  
  const handleDelete = (id) => {
    deleteUserById(id, () => {
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
      if (editingUser && editingUser.id === id) {
        setEditingUser(null);
        setShowModalEditUser(false);
      }
      if (viewingUser && viewingUser.id === id) {
        setViewingUser(null);
        setShowModalViewUser(false);
      }
    });
  };

  if (usersLoading) return <div>Loading...</div>;
  if (usersError) return <div>Error: {usersError.message}</div>;
  if (!users || users.length === 0) return <div>Usuários não encontrados.</div>;
  if (deleteLoading) return <div>Deletando usuário...</div>;
  if (deleteError) return <div>Error: {deleteError.message}</div>;

  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Estado</th>
            <th align="center">Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.state}</td>
              <td className="p-1">
                <FontAwesomeIcon
                  className="ms-1 me-1"
                  icon={faUser}
                  onClick={() => openViewUser(item)}
                  style={{ cursor: "pointer" }}
                />
                <FontAwesomeIcon
                  className="ms-1 me-1"
                  icon={faPenSquare}
                  onClick={() => openEditModal(item)}
                  style={{ cursor: "pointer" }}
                />
                <FontAwesomeIcon
                  className="ms-1 me-1"
                  icon={faTrash}
                  onClick={() => handleDelete(item.id)}
                  style={{ cursor: "pointer" }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <FormsEditUsers show={showModalEditUser} editingUser={editingUser} />
      <ViewUserModal show={setShowModalViewUser} />
    </div>
  );
};
