import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import { Dashboard } from "./Pages/Dashboard";
import { Login } from "./Pages/Login";

// Si el logo está en la carpeta 'src/assets'
import logo from "/img/logowhite.png";

function App() {
  return (
    <Router>
      <AppBar
        position="fixed"
        color="#00000000"
        elevation={0}
        sx={{ marginTop: "2vh" }}
      >
        <Toolbar>
          {/* Logo a la izquierda */}
          {/* <img
            src={logo}
            alt="Logo"
            style={{ height: "80px", marginRight: "16px" }}
          /> */}

          {/* Botones de navegación */}
          <Box sx={{ ml: "auto" }}>
            <Button color="white" component={Link} to="/dashboard">
              Home
            </Button>
            <Button color="secondary" component={Link} to="/login">
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
