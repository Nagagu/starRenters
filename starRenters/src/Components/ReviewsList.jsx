// src/components/ReviewList.js
import React, { useState, useEffect } from "react";
import { deleteReview, getReviews } from "../api/Reviews";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
  Box,
  CircularProgress,
  Rating,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export const ReviewsList = ({ reviews, setReviews, loading }) => {
  //   const [reviews, setReviews] = useState([]); // Estado para las reseñas
  //   const [loading, setLoading] = useState(true); // Estado para mostrar el cargando

  const handleDeleteReview = async (id) => {
    try {
      await deleteReview(id); // Eliminar reseña del backend
      setReviews((prevReviews) =>
        prevReviews.filter((review) => review.id !== id)
      ); // Filtrar localmente
    } catch (error) {
      console.error("Error al eliminar la reseña", error);
    }
  };

  //   useEffect(() => {
  //     const fetchReviews = async () => {
  //       try {
  //         const data = await getReviews(); // Llamada a la API
  //         setReviews(data); // Guardamos las reseñas en el estado
  //       } catch (error) {
  //         console.error("Error al cargar las reseñas", error);
  //       } finally {
  //         setLoading(false); // Terminamos de cargar las reseñas
  //       }
  //     };

  //     fetchReviews();
  //   }, []);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Lista de Reseñas
      </Typography>
      {reviews?.length === 0 ? (
        <Typography variant="body1" color="text.secondary">
          No hay reseñas disponibles.
        </Typography>
      ) : (
        <List>
          {reviews &&
            reviews?.map((review) => (
              <React.Fragment key={review.id}>
                <ListItem
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <ListItemText
                    primary={
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        {review.reviewerName}
                      </Typography>
                    }
                    secondary={
                      <>
                        <Typography variant="body1" color="text.primary">
                          Usuario: usuario
                        </Typography>
                        <Typography variant="body1" color="text.primary">
                          Inquilino: {review.tenantName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Comentarios: {review.comments}
                        </Typography>
                        <Box
                          sx={{ display: "flex", alignItems: "center", mt: 1 }}
                        >
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ mr: 1 }}
                          >
                            Rating:
                          </Typography>
                          <Rating
                            value={review.rating}
                            readOnly
                            precision={0.5}
                          />
                        </Box>
                      </>
                    }
                  />
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleDeleteReview(review.id)}
                    sx={{ mt: 1 }}
                  >
                    <DeleteIcon color="error" />
                  </IconButton>
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
        </List>
      )}
    </Box>
  );
};
