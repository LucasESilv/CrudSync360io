import axios from "axios";
import { toast } from "react-toastify";
const API_URL = "http://localhost:8800";

//Get all user
export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/`);
    return response.data;
  } catch (error) {
    toast.error(error);
    throw error;
  }
};

//Delete Users
export const deleteUser = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    toast.error(error);
    throw error;
  }
};

//Create Users
export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/create-users`, userData);
    return response.data;
  } catch (error) {
    toast.error(error);
    throw error;
  }
};

//Update Users
export const updateUser = async (userData, id) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, userData);
    return response.data;
  } catch (error) {
    toast.error(error);
    throw error;
  }
};

export const getImgUser = async (imageUrl) => {
  try {
    const response = await axios.get(imageUrl);
    return response.data;
  } catch (error) {
    toast.error("Erro ao obter imagem do usuário");
    throw error;
  }
};
