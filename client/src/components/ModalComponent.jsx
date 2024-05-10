import { useContext } from "react";
import { AppContext } from "./AppContextProvider";
import { Button, Modal } from "react-bootstrap";

export const ModalComponent = ({
  children,
  saveInfo,
  titleModal,
  show,
  onSave,
}) => {
  const { setShowModalForm, setShowModalViewUser, setShowModalEditUser } =
    useContext(AppContext);
  const closeModal = () => {
    setShowModalForm(false);
    setShowModalViewUser(false);
    setShowModalEditUser(false);
  };

  return (
    <>
      <Modal show={show} onHide={closeModal}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>{titleModal}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{children}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
            {saveInfo && (
              <Button variant="primary" onClick={onSave}>
                {saveInfo}
              </Button>
            )}
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </>
  );
};
