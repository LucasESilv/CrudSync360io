import { createContext, useState } from "react";
export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const [showModalForm, setShowModalForm] = useState(false);
  const [showModalViewUser, setShowModalViewUser] = useState(false);
  const [showModalEditUser, setShowModalEditUser] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [showUserImage, setShowUserImage] = useState("");
  return (
    <AppContext.Provider
      value={{
        showModalForm,
        setShowModalForm,
        showModalViewUser,
        setShowModalViewUser,
        showModalEditUser,
        setShowModalEditUser,
        editingUser,
        setEditingUser,
        showUserImage,
        setShowUserImage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
