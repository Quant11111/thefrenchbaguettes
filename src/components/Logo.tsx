"use client";

import { Box, Typography } from "@mui/material";
import Link from "next/link";

interface LogoProps {
  variant?: "full" | "icon" | "text";
  size?: "small" | "medium" | "large";
  color?: "light" | "dark";
}

export default function Logo({
  variant = "full",
  size = "medium",
  color = "dark",
}: LogoProps) {
  // Définir les tailles en fonction du paramètre size
  const sizeValues = {
    small: {
      height: variant === "icon" ? 32 : 24,
      fontSize: "1.2rem",
      iconSize: 24,
    },
    medium: {
      height: variant === "icon" ? 40 : 32,
      fontSize: "1.5rem",
      iconSize: 32,
    },
    large: {
      height: variant === "icon" ? 56 : 48,
      fontSize: "2rem",
      iconSize: 48,
    },
  };

  // Définir les couleurs en fonction du paramètre color
  const colorValues = {
    light: {
      primary: "#FFFFFF",
      secondary: "#D4AF37",
    },
    dark: {
      primary: "#1A2A4A",
      secondary: "#D4AF37",
    },
  };

  // Icône de baguette stylisée
  const BaguetteIcon = () => (
    <Box
      sx={{
        position: "relative",
        width: sizeValues[size].iconSize,
        height: sizeValues[size].iconSize,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        mr: variant === "full" ? 1 : 0,
      }}
    >
      <Box
        sx={{
          width: "60%",
          height: "90%",
          bgcolor: colorValues[color].secondary,
          position: "relative",
          transform: "rotate(15deg)",
          "&::before": {
            content: '""',
            position: "absolute",
            top: "10%",
            left: "30%",
            width: "20%",
            height: "80%",
            bgcolor: "#FFFFFF",
            opacity: 0.7,
            transform: "rotate(-5deg)",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            top: "5%",
            left: "60%",
            width: "10%",
            height: "90%",
            bgcolor: "#FFFFFF",
            opacity: 0.5,
            transform: "rotate(-5deg)",
          },
        }}
      />
    </Box>
  );

  if (variant === "icon") {
    return (
      <Link href="/" style={{ textDecoration: "none" }}>
        <Box
          sx={{
            width: sizeValues[size].iconSize,
            height: sizeValues[size].iconSize,
            bgcolor: colorValues[color].primary,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            border: `2px solid ${colorValues[color].secondary}`,
          }}
        >
          <BaguetteIcon />
        </Box>
      </Link>
    );
  }

  if (variant === "text") {
    return (
      <Link href="/" style={{ textDecoration: "none" }}>
        <Typography
          variant="h6"
          component="span"
          sx={{
            fontWeight: 700,
            fontSize: sizeValues[size].fontSize,
            letterSpacing: "0.05em",
            color: colorValues[color].primary,
            textTransform: "uppercase",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box component="span" sx={{ color: colorValues[color].secondary }}>
            The
          </Box>
          &nbsp;French&nbsp;
          <Box component="span" sx={{ color: colorValues[color].secondary }}>
            Baguettes
          </Box>
        </Typography>
      </Link>
    );
  }

  return (
    <Link href="/" style={{ textDecoration: "none" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <BaguetteIcon />
        <Typography
          variant="h6"
          component="span"
          sx={{
            fontWeight: 700,
            fontSize: sizeValues[size].fontSize,
            letterSpacing: "0.05em",
            color: colorValues[color].primary,
            textTransform: "uppercase",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box component="span" sx={{ color: colorValues[color].secondary }}>
            The
          </Box>
          &nbsp;French&nbsp;
          <Box component="span" sx={{ color: colorValues[color].secondary }}>
            Baguettes
          </Box>
        </Typography>
      </Box>
    </Link>
  );
}
