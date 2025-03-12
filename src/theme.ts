"use client";

import { createTheme } from "@mui/material/styles";

// Création d'un thème personnalisé selon la nouvelle direction artistique
export const theme = createTheme({
  palette: {
    primary: {
      main: "#1A2A4A", // Bleu marine foncé
      light: "#2A3A5A",
      dark: "#0A1A3A",
    },
    secondary: {
      main: "#D4AF37", // Or/doré
      light: "#E4BF47",
      dark: "#C49F27",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F8F9FA",
    },
    text: {
      primary: "#1A2A4A",
      secondary: "#4A5A7A",
    },
  },
  typography: {
    fontFamily: "var(--font-geist-sans)",
    h1: {
      fontWeight: 700,
      letterSpacing: "0.02em",
    },
    h2: {
      fontWeight: 700,
      letterSpacing: "0.02em",
    },
    h3: {
      fontWeight: 600,
      letterSpacing: "0.02em",
    },
    h4: {
      fontWeight: 600,
      letterSpacing: "0.01em",
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      fontWeight: 600,
      letterSpacing: "0.05em",
      textTransform: "uppercase",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          textTransform: "uppercase",
          fontWeight: 600,
          padding: "10px 24px",
        },
        contained: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
        outlined: {
          borderWidth: 2,
          "&:hover": {
            borderWidth: 2,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: "none",
          border: "1px solid #E0E0E0",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
        elevation1: {
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderBottom: "1px solid #E0E0E0",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "#E0E0E0",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
  },
});
