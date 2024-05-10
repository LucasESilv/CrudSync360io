import { Button, Container } from "react-bootstrap";

import { useContext, useState } from "react";
import { AppContext } from "./AppContextProvider";
import { FormsModal } from "./FormsAdd.jsx";
import { TableUsers } from "./Tables.jsx";

export const HeaderComponent = () => {
  const { setShowModalForm, showUserImage, setShowUserImage } =
    useContext(AppContext);
  const [users, setUsers] = useState([]);
  const openModalForm = async () => {
    const imageUrl = await fetchRandomImage(); // Gera a imagem localmente
    setShowUserImage(imageUrl); // Atualiza o estado local com a URL da imagem
    setShowModalForm(true);
  };

  const fetchRandomImage = async () => {
    const response = await fetch(
      "https://source.unsplash.com/random/800x600?people"
    );
    const imageUrl = response.url;
    console.log(imageUrl);
    return imageUrl;
  };

  return (
    <>
      <Container className="d-flex flex-column justify-content-center ">
        <Button variant="primary" onClick={openModalForm}>
          Open Modal
        </Button>
        <FormsModal showUserImage={showUserImage} />
        <TableUsers users={users} setUsers={setUsers} />
      </Container>
    </>
  );
};
