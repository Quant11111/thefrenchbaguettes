"use client";

import { createTheme } from "@mui/material/styles";

// Création d'un thème personnalisé
export const theme = createTheme({
  palette: {
    primary: {
      main: "#1e3a8a", // Bleu foncé
    },
    secondary: {
      main: "#c2410c", // Orange foncé
    },
    background: {
      default: "#f8fafc",
    },
  },
  typography: {
    fontFamily: "var(--font-geist-sans)",
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 500,
        },
      },
    },
  },
});
