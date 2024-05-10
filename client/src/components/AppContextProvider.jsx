import { createContext, useState } from "react";
export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const [showModalForm, setShowModalForm] = useState(false);
  const [users, setUsers] = useState([]);
  const [showModalViewUser, setShowModalViewUser] = useState(false);
  const [showModalEditUser, setShowModalEditUser] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [showUserImage, setShowUserImage] = useState(null);
  const [viewingUser, setViewingUser] = useState(null); 
 
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
        viewingUser,
        setViewingUser,
        users,
        setUsers,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
