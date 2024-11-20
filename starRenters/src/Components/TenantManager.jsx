import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress,
  Divider,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Rating,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddReviewForm from "./ReviewForm/AddReviewForm";
import { getReviewByName } from "../api/reviews";

export const TenantManager = () => {
  const [tenantId, setTenantId] = useState(null);
  const [tenants, setTenants] = useState([]);
  //   const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [creating, setCreating] = useState(false);
  const [noResults, setNoResults] = useState(false);

  const handleSearch = async () => {
    if (!tenantId) return;

    setLoading(true);
    setError(null);
    setNoResults(false); // Resetear para evitar mostrar el mensaje durante la búsqueda.

    try {
      const tenantResponse = await getReviewByName(tenantId);
      setTenants(tenantResponse);
      //   setReviews(tenantResponse[0].comments || []);
      if (!tenantResponse) {
        setNoResults(true);
      }
    } catch (err) {
      if (err.response?.status === 404) {
        setTenants(null);
        setNoResults(true);
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
        // onSubmit={(e) => {
        //   e.preventDefault();
        //   handleSearch();
        // }}
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
          onChange={(e) => setTenantId(e.target.value)} // Solo actualiza tenantId
          fullWidth
          sx={{
            background: "#fff",
            borderRadius: "8px",
          }}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{
            padding: "0.8rem 2rem",
            background: "#1e3c72",
            "&:hover": { background: "#2a5298" },
          }}
          onClick={handleSearch}
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
      {!loading && tenants && tenants.length > 0 && (
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            color: "#1e3c72",
            fontWeight: "bold",
            mt: 1,
            textAlign: "initial",
          }}
        >
          Coincidencias:
        </Typography>
      )}

      {!loading &&
        tenants &&
        tenants.map((tenant) => (
          <>
            <Box sx={{ textAlign: "left", marginTop: 3 }}>
              <Typography>ID: {tenant.tenantName}</Typography>

              {/* <Typography
            variant="h6"
            gutterBottom
            sx={{ color: "#1e3c72", fontWeight: "bold" }}
          >
            Reseñas
          </Typography> */}
              {tenant.comments.length === 0 ? (
                <Typography>No hay reseñas para este inquilino.</Typography>
              ) : (
                // <ReviewsList reviews={reviews} loading={loading} />
                <>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1 }}
                  >
                    Comentarios: {tenant.comments}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mr: 1 }}
                    >
                      Rating:
                    </Typography>
                    <Rating value={tenant.rating} readOnly precision={0.5} />
                  </Box>
                </>
              )}
              <Divider sx={{ marginY: 2 }} />
            </Box>
          </>
        ))}
      {noResults && (
        <Box>
          <Typography sx={{ color: "#777", marginTop: 2 }}>
            No se encontró el inquilino.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              marginTop: 2,
              background: "secondary",
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
