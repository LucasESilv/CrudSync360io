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
  } = useContext(AppContext);

  const {
    isLoading: usersLoading,
    error: usersError,
  } = useUsers();

  const {
    deleteUserById,
    isLoading: deleteLoading,
    error: deleteError,
  } = useDeleteUsers();

  const openEditModal = (item) => {
    setEditingUser(item);
    setShowModalEditUser(true);
    console.log(item);
  };

  const openViewUser = (item) => {
    setViewingUser(item);
    setShowModalViewUser(true);
    console.log(item);
  };

  const handleDelete = (id) => {
    deleteUserById(id)
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
            <th>Data de Nascimento</th>
            <th>Estado</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, i) => (
            <tr key={i}>
              <td align="center">{item.name}</td>
              <td align="center">{item.age}</td>
              <td align="center">{item.b_date}</td>
              <td align="center">{item.state}</td>
              <td align="center">
                <FontAwesomeIcon
                  icon={faUser}
                  onClick={() => openViewUser(item)}
                />
              </td>
              <td align="center">
                <FontAwesomeIcon
                  icon={faPenSquare}
                  onClick={() => openEditModal(item)}
                />
              </td>
              <td align="center">
                <FontAwesomeIcon
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
