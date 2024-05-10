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
    const imageUrl = await fetchRandomImage();
    setShowUserImage(imageUrl);
    setShowModalForm(true);
  };

  const fetchRandomImage = async () => {
    const response = await fetch(
      "https://source.unsplash.com/random/800x600?people"
    );
    const imageUrl = response.url;
    return imageUrl;
  };

  return (
    <>
      <Container className="d-flex flex-column justify-content-center align-items-start">
        <div className="d-flex justify-content-end w-100 mb-3">
          <Button variant="primary" onClick={openModalForm} className="ms-3">
            Open Modal
          </Button>
        </div>
        <FormsModal showUserImage={showUserImage} />
        <TableUsers users={users} setUsers={setUsers} />
      </Container>
    </>
  );
};
