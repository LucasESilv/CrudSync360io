import { useState } from "react";
import { deleteUser } from "../services/api";

export const useDeleteUsers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteUserById = async (id, onSuccess = () => {}) => {
    setIsLoading(true);
    try {
      await deleteUser(id);
      onSuccess();
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { deleteUserById, isLoading, error };
};
