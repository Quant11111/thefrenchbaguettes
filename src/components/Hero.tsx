"use client";

import { Box, Container, Typography, Button, Grid, Paper } from "@mui/material";

export default function Hero() {
  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "background.paper",
        pt: { xs: 4, md: 8 },
        pb: { xs: 8, md: 12 },
        overflow: "hidden",
      }}
    >
      {/* Background gradient */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle at 20% 20%, rgba(30, 58, 138, 0.05) 0%, rgba(255, 255, 255, 0) 50%)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              component="h1"
              variant="h2"
              color="text.primary"
              gutterBottom
              sx={{
                fontWeight: 800,
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                lineHeight: 1.2,
              }}
            >
              Solutions Web{" "}
              <Box component="span" sx={{ color: "primary.main" }}>
                innovantes
              </Box>{" "}
              et{" "}
              <Box component="span" sx={{ color: "secondary.main" }}>
                performantes
              </Box>
            </Typography>

            <Typography
              variant="h5"
              color="text.secondary"
              paragraph
              sx={{ mb: 4, fontWeight: 400 }}
            >
              Experts en développement Web2 et Web3, nous créons des expériences
              numériques sur mesure pour répondre à vos besoins spécifiques.
            </Typography>

            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                href="#services"
                sx={{
                  borderRadius: "28px",
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                }}
              >
                Découvrir nos services
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                href="#contact"
                sx={{
                  borderRadius: "28px",
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                }}
              >
                Nous contacter
              </Button>
            </Box>

            <Box
              sx={{
                mt: 6,
                display: "flex",
                flexWrap: "wrap",
                gap: 4,
                alignItems: "center",
              }}
            >
              <Typography variant="subtitle2" color="text.secondary">
                Ils nous font confiance:
              </Typography>
              <Box
                sx={{ display: "flex", gap: 4, flexWrap: "wrap", opacity: 0.7 }}
              >
                {/* Placeholder for client logos */}
                <Box
                  sx={{
                    width: 100,
                    height: 30,
                    bgcolor: "grey.300",
                    borderRadius: 1,
                  }}
                />
                <Box
                  sx={{
                    width: 100,
                    height: 30,
                    bgcolor: "grey.300",
                    borderRadius: 1,
                  }}
                />
                <Box
                  sx={{
                    width: 100,
                    height: 30,
                    bgcolor: "grey.300",
                    borderRadius: 1,
                  }}
                />
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Paper
              elevation={6}
              sx={{
                borderRadius: 4,
                overflow: "hidden",
                position: "relative",
                width: { xs: "100%", md: "90%" },
                height: { xs: 300, md: 400 },
                transform: { md: "rotate(2deg)" },
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: { md: "rotate(0deg) scale(1.02)" },
                },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", textAlign: "center", px: 2 }}
                >
                  TheFrenchBaguettes
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
