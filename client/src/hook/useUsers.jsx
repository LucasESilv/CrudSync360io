import { useState, useEffect } from "react";
import { getUsers } from "../services/api";

export const useUsers = () => {
  const [users, setUsers] = useState([]);
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
