import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress,
  Divider,
  List,
  ListItem,
  ListItemText,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddReviewForm from "./ReviewForm/AddReviewForm";
import { ReviewsList } from "./ReviewsList";
import { getReviewByName } from "../api/Reviews";

export const TenantManager = () => {
  const [tenantId, setTenantId] = useState("");
  const [tenant, setTenant] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [creating, setCreating] = useState(false);

  // Buscar inquilino por ID
  const handleSearch = async () => {
    if (!tenantId) return;

    setLoading(true);
    setError(null);

    try {
      const tenantResponse = await getReviewByName(tenantId);
      setTenant(tenantResponse);
      setReviews(tenantResponse.reviews || []);
    } catch (err) {
      if (err.response?.status === 404) {
        setTenant(null);
        setReviews([]);
      } else {
        setError("Error al buscar inquilino. Intente nuevamente.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: "0 auto",
        textAlign: "center",
        padding: 3,
      }}
    >
      {/* Formulario de búsqueda */}
      <Box
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "center",
          marginBottom: 3,
        }}
      >
        <TextField
          label="ID del Inquilino"
          variant="outlined"
          value={tenantId}
          onChange={(e) => setTenantId(e.target.value)}
          fullWidth
          sx={{
            background: "#fff",
            borderRadius: "8px",
          }}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{
            padding: "0.8rem 2rem",
            background: "#1e3c72",
            "&:hover": { background: "#2a5298" },
          }}
          startIcon={<SearchIcon />}
        >
          Buscar
        </Button>
      </Box>

      {/* Indicador de carga */}
      {loading && <CircularProgress sx={{ color: "#1e3c72" }} />}

      {/* Mensajes de error */}
      {error && (
        <Typography color="error" sx={{ marginTop: 2 }}>
          {error}
        </Typography>
      )}

      {/* Resultados de búsqueda */}
      {!loading && tenant && (
        <Box sx={{ textAlign: "left", marginTop: 3 }}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ color: "#1e3c72", fontWeight: "bold" }}
          >
            Datos del Inquilino
          </Typography>
          <Typography>
            <strong>ID:</strong> {tenant.id}
          </Typography>
          <Typography>
            <strong>Nombre:</strong> {tenant.name}
          </Typography>
          <Divider sx={{ marginY: 2 }} />
          <Typography
            variant="h6"
            gutterBottom
            sx={{ color: "#1e3c72", fontWeight: "bold" }}
          >
            Reseñas
          </Typography>
          {reviews.length === 0 ? (
            <Typography>No hay reseñas para este inquilino.</Typography>
          ) : (
            <ReviewsList reviews={reviews} loading={loading} />
          )}
        </Box>
      )}

      {/* Si no se encuentra el inquilino */}
      {!loading && !tenant && tenantId && (
        <Box>
          <Typography sx={{ color: "#777", marginTop: 2 }}>
            No se encontró el inquilino.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              marginTop: 2,
              background: "#e57373",
              "&:hover": { background: "#f44336" },
            }}
            onClick={() => setCreating(true)}
          >
            Crear Nueva Reseña
          </Button>
        </Box>
      )}

      {/* Dialogo para crear inquilino */}
      <Dialog open={creating} onClose={() => setCreating(false)}>
        <DialogTitle>Crear Nuevo Inquilino</DialogTitle>
        <DialogContent>
          <AddReviewForm />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setCreating(false)}>Cancelar</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
