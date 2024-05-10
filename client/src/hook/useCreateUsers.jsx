import { useState } from "react";
import { createUser } from "../services/api";

export const useCreateUsers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const createUserHandler = async (userData) => {
    setIsLoading(true);
    try {
      await createUser(userData);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, createUserHandler };
};
