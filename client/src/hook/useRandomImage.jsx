import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const API_URL = "https://source.unsplash.com/random/800x600?people";

export const useRandomImage = () => {
  const [imageUrl, setImageUrl] = useState(null);

  const fetchRandomImage = async () => {
    try {
      const response = await axios.get(API_URL);
      setImageUrl(response.data.url);
    } catch (error) {
      console.error("Error fetching image:", error);
      toast.error("Erro ao buscar a imagem aleatória.");
    }
  };

  useEffect(() => {
    fetchRandomImage();
  }, []);

  return imageUrl;
};
