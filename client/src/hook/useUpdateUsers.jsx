import { useState } from "react";
import { updateUser } from "../services/api";
import { useUsers } from "./useUsers";

export const useUpdateUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { refetchUsers } = useUsers();

  const updateUserHandler = async (id, userData) => {
    setIsLoading(true);
    try {
      await updateUser(userData, id);
      refetchUsers();
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  return { isLoading, error, updateUserHandler };
};
