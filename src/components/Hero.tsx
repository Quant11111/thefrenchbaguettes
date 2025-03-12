"use client";

import { Box, Container, Typography, Button, Grid, Paper } from "@mui/material";
import Logo from "./Logo";

export default function Hero() {
  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "primary.main",
        color: "white",
        pt: { xs: 8, md: 12 },
        pb: { xs: 12, md: 16 },
        overflow: "hidden",
      }}
    >
      {/* Éléments décoratifs */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(212,175,55,0.2) 0%, rgba(212,175,55,0) 70%)",
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0) 70%)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: "inline-block", mb: 3 }}>
                <Logo variant="text" size="large" color="light" />
              </Box>
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  lineHeight: 1.2,
                  textTransform: "uppercase",
                  letterSpacing: "0.02em",
                }}
              >
                Software{" "}
                <Box component="span" sx={{ color: "secondary.main" }}>
                  Agency
                </Box>
              </Typography>
            </Box>

            <Typography
              variant="h5"
              paragraph
              sx={{
                mb: 4,
                fontWeight: 400,
                opacity: 0.9,
                maxWidth: "500px",
              }}
            >
              Experts en développement Web2 et Web3, nous créons des expériences
              numériques sur mesure pour répondre à vos besoins spécifiques.
            </Typography>

            <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                href="#services"
                sx={{
                  px: 4,
                  py: 1.5,
                  color: "primary.main",
                  fontWeight: 600,
                }}
              >
                Découvrir nos services
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                size="large"
                href="#contact"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderWidth: 2,
                  fontWeight: 600,
                  "&:hover": {
                    borderWidth: 2,
                  },
                }}
              >
                Nous contacter
              </Button>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              sx={{
                position: "relative",
                width: { xs: "100%", md: "90%" },
                height: { xs: 300, md: 400 },
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  position: "absolute",
                  top: "10%",
                  left: "10%",
                  width: "80%",
                  height: "80%",
                  bgcolor: "secondary.main",
                  border: "1px solid rgba(255,255,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1,
                }}
              >
                <Box sx={{ p: 4 }}>
                  <Logo variant="icon" size="large" color="dark" />
                </Box>
              </Paper>

              <Paper
                elevation={0}
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "80%",
                  height: "80%",
                  bgcolor: "transparent",
                  border: "2px solid rgba(212,175,55,0.5)",
                  zIndex: 0,
                }}
              />

              <Paper
                elevation={0}
                sx={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: "80%",
                  height: "80%",
                  bgcolor: "transparent",
                  border: "2px solid rgba(212,175,55,0.5)",
                  zIndex: 0,
                }}
              />
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: { xs: 8, md: 12 },
            pt: 4,
            borderTop: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Typography variant="subtitle1" sx={{ opacity: 0.7 }}>
            Ils nous font confiance:
          </Typography>
          <Box sx={{ display: "flex", gap: 6, flexWrap: "wrap", opacity: 0.7 }}>
            {/* Placeholder pour les logos clients */}
            <Box
              sx={{
                width: 100,
                height: 30,
                bgcolor: "rgba(255,255,255,0.1)",
                borderRadius: 0,
              }}
            />
            <Box
              sx={{
                width: 100,
                height: 30,
                bgcolor: "rgba(255,255,255,0.1)",
                borderRadius: 0,
              }}
            />
            <Box
              sx={{
                width: 100,
                height: 30,
                bgcolor: "rgba(255,255,255,0.1)",
                borderRadius: 0,
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
