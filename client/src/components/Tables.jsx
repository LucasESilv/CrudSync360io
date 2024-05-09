import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenSquare,
  faTrash,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import FormsModal from "./Forms.jsx";
import ViewUserModal from "./UserInfo.jsx";

function TableUsers({ users, setUsers, setOnEdit }) {
  const [showModal, setShowModal] = useState(false);
  const openEditModal = (item) => {
    setOnEdit(item);
    setShowModal(true);
  };
  const closeEditModal = () => {
    setShowModal(false);
  };
  const openViewUser = (item) => {
    setShowModal(true);
  };
  const closeViewUser = () => {
    setShowModal(false);
  };
  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:8800/" + id)
      .then(({ data }) => {
        const newArray = users.filter((user) => user.id !== id);
        setUsers(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));
    setOnEdit(null);
  };
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
      <FormsModal show={showModal} onHide={closeEditModal} />
      <ViewUserModal show={showModal} onHide={closeViewUser} />
    </div>
  );
}

export default TableUsers;
