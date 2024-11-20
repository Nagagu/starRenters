import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { Dashboard } from "./Pages/Dashboard";
import { Home } from "./Pages/Home";

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
          <Button color="white" component={Link} to="/">
            Home
          </Button>
          <Button color="secondary" component={Link} to="/dashboard">
            Dashboard
          </Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
