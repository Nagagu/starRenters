// import React from "react";
// import { Container, Grid, Paper, Typography, Box } from "@mui/material";
// import AddReviewForm from "../Components/ReviewForm/AddReviewForm";
// import { ReviewsList } from "../Components/ReviewsList";
// import { TenantManager } from "../Components/TenantManager";

// export const Dashboard = () => (
//   <Container style={{ marginTop: "2rem" }}>
//     <Typography variant="h4" gutterBottom>
//       Panel de Propietarios
//     </Typography>
//     <Grid container spacing={3}>
//       {/* Columna de Instrucciones */}
//       <Grid item xs={12} md={6}>
//         <Paper style={{ padding: "1rem", height: "100%" }}>
//           <Typography variant="h5" gutterBottom>
//             Instrucciones para buscar un inquilino
//           </Typography>
//           <Typography variant="body1" gutterBottom>
//             Para buscar un inquilino, utiliza las iniciales de su nombre y
//             apellido, seguidas de los últimos 5 dígitos de su DNI (sin letra).
//           </Typography>
//           <Typography variant="body2" gutterBottom color="text.secondary">
//             Ejemplo:
//           </Typography>
//           <Box sx={{ paddingLeft: 2 }}>
//             <Typography variant="body2" gutterBottom>
//               Nombre: Juan Pérez
//             </Typography>
//             <Typography variant="body2" gutterBottom>
//               DNI: 12345678A
//             </Typography>
//             <Typography variant="body2" gutterBottom>
//               ID Inquilino: <strong>JP5678</strong>
//             </Typography>
//           </Box>
//         </Paper>
//       </Grid>

//       {/* Columna de Buscador */}
//       <Grid item xs={12} md={6}>
//         <Paper style={{ padding: "1rem" }}>
//           <TenantManager />
//         </Paper>
//       </Grid>
//     </Grid>
//   </Container>
// );
import React from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  TextField,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { TenantManager } from "../Components/TenantManager";

export const Dashboard = () => (
  <Box
    sx={{
      minHeight: "97vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: `url('/img/pillowfight.jpg')`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      color: "#fff",
    }}
  >
    <Container maxWidth="sm">
      <Paper
        elevation={10}
        sx={{
          padding: "2rem",
          borderRadius: "15px",
          background: "rgba(255, 255, 255, 0.9)",
          maxHeight: "84vh",
          overflow: "auto",
          overflowX: "hidden",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ textAlign: "center", color: "#1e3c72", fontWeight: "bold" }}
        >
          Descubre si tu inquilino es de confianza
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          sx={{
            textAlign: "center",
            marginBottom: "1.5rem",
            color: "#555",
          }}
        >
          Introduce las iniciales de su nombre y apellido, seguidas de los
          últimos 5 dígitos de su DNI.
        </Typography>

        <Box sx={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <Typography variant="body2" color="text.secondary">
            Ejemplo:
          </Typography>
          <Box
            sx={{
              background: "#f5f5f5",
              padding: "0.5rem 1rem",
              borderRadius: "8px",
              display: "inline-block",
              textAlign: "left",
              color: "#333",
              marginTop: "15px",
            }}
          >
            <Typography variant="body2">Nombre: Juan Pérez</Typography>
            <Typography sx={{ p: 1 }} variant="body2">
              DNI: 12345678A
            </Typography>
            <Typography variant="body2">
              ID Inquilino: <strong>JP5678</strong>
            </Typography>
          </Box>
        </Box>

        {/* Input y Botón de búsqueda */}
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
          }}
        >
          <TenantManager />
        </Box>
      </Paper>
    </Container>
  </Box>
);
