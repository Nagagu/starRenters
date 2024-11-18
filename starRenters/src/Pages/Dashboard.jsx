import React from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";
import AddReviewForm from "../Components/ReviewForm/AddReviewForm";
import { ReviewsList } from "../Components/ReviewsList";

export const Dashboard = () => (
  <Container style={{ marginTop: "2rem" }}>
    <Typography variant="h4" gutterBottom>
      Panel de Propietarios
    </Typography>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <Paper style={{ padding: "1rem" }}>
          <ReviewsList />
          <Typography>Consulta y gestiona reseñas de inquilinos.</Typography>
        </Paper>
      </Grid>

      {/* Aquí agregamos el formulario para añadir reseñas */}
      <Grid item xs={12} sm={6} md={4}>
        <Paper style={{ padding: "1rem" }}>
          <AddReviewForm /> {/* Componente para agregar reseñas */}
        </Paper>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <Paper style={{ padding: "1rem" }}>
          <Typography variant="h6">Configuraciones</Typography>
          <Typography>Administra tu cuenta y preferencias.</Typography>
        </Paper>
      </Grid>
    </Grid>
  </Container>
);
