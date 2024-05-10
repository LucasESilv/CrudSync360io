import { useState, useEffect, useContext } from "react";
import { getUsers } from "../services/api";
import { AppContext } from "../components/AppContextProvider";

export const useUsers = () => {
  const {users, setUsers} = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const getUsersData = async () => {
    setIsLoading(true);
    try {
      const fetchedUsers = await getUsers();
      setUsers(fetchedUsers.sort((a, b) => (a.name > b.name ? 1 : -1)));
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getUsersData();
  }, []);
  const refetchUsers = () => {
    getUsersData();
  };
  return { users, isLoading, error, refetchUsers, setUsers  };
};
