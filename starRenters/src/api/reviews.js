// api/reviews.js
import axios from "axios";

// URL base de la API
const API_URL = "https://localhost:7147/api/review"; // Reemplaza con tu URL real de la API

// Obtener todas las reseñas
export const getReviews = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // Devuelve el array de reseñas
  } catch (error) {
    console.error("Error al obtener las reseñas", error);
    throw error; // Lanza el error para manejarlo en el componente
  }
};

// Obtener una reseña por ID
export const getReviewById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data; // Devuelve la reseña encontrada
  } catch (error) {
    console.error("Error al obtener la reseña", error);
    throw error;
  }
};

// Crear una nueva reseña
export const createReview = async (review) => {
  try {
    const response = await axios.post(API_URL, review);
    return response.data; // Devuelve la reseña creada
  } catch (error) {
    console.error("Error al crear la reseña", error);
    throw error;
  }
};

// Actualizar una reseña existente
export const updateReview = async (id, review) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, review);
    return response.data; // Devuelve la reseña actualizada
  } catch (error) {
    console.error("Error al actualizar la reseña", error);
    throw error;
  }
};

// Eliminar una reseña
export const deleteReview = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    return id; // Devuelve el ID de la reseña eliminada
  } catch (error) {
    console.error("Error al eliminar la reseña", error);
    throw error;
  }
};
