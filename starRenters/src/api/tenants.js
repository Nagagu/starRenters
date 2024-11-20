// api/reviews.js
import axios from "axios";

// URL base de la API
const API_URL = "https://localhost:7147/api/tenant"; // Reemplaza con tu URL real de la API

// Obtener todas las reseñas
export const getTenantById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data; // Devuelve la reseña encontrada
  } catch (error) {
    console.error("Error al obtener la reseña", error);
    throw error;
  }
};
