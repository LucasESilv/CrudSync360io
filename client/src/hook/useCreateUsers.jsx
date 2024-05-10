import { useState } from "react";
import { createUser } from "../services/api";
import { useUsers } from "./useUsers";

export const useCreateUsers = () => {
  const { refetchUsers } = useUsers();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const createUserHandler = async (userData) => {
    setIsLoading(true);
    try {
      await createUser(userData);
      refetchUsers();
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, createUserHandler };
};
