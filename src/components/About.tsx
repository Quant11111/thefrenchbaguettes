"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function About() {
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ position: "relative" }}>
              <Paper
                elevation={6}
                sx={{
                  borderRadius: 4,
                  overflow: "hidden",
                  height: { xs: 300, md: 450 },
                  width: "100%",
                  bgcolor: "primary.main",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <Typography
                  variant="h3"
                  sx={{ fontWeight: "bold", textAlign: "center", px: 2 }}
                >
                  TheFrenchBaguettes
                </Typography>
              </Paper>

              {/* Élément décoratif */}
              <Box
                sx={{
                  position: "absolute",
                  width: { xs: 150, md: 200 },
                  height: { xs: 150, md: 200 },
                  borderRadius: "50%",
                  bgcolor: "secondary.main",
                  opacity: 0.1,
                  bottom: -30,
                  left: -30,
                  zIndex: 0,
                }}
              />

              {/* Élément décoratif */}
              <Box
                sx={{
                  position: "absolute",
                  width: { xs: 100, md: 150 },
                  height: { xs: 100, md: 150 },
                  borderRadius: "50%",
                  bgcolor: "primary.main",
                  opacity: 0.1,
                  top: -20,
                  right: -20,
                  zIndex: 0,
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              variant="overline"
              component="div"
              color="primary"
              gutterBottom
              sx={{ fontWeight: 600, letterSpacing: 1.5 }}
            >
              À PROPOS DE NOUS
            </Typography>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 700,
                fontSize: { xs: "1.75rem", md: "2.5rem" },
                lineHeight: 1.2,
              }}
            >
              Des ingénieurs français passionnés par le numérique
            </Typography>

            <Typography variant="body1" paragraph color="text.secondary">
              TheFrenchBaguettes est une équipe d&apos;ingénieurs français
              spécialisés dans le développement de solutions web innovantes.
              Fondée par deux experts en technologies Web2 et Web3, notre
              entreprise s&apos;est entourée de partenaires de confiance pour
              offrir une gamme complète de services numériques.
            </Typography>

            <Typography variant="body1" paragraph color="text.secondary">
              Notre mission est de créer des expériences numériques
              exceptionnelles qui répondent parfaitement aux besoins de nos
              clients, en combinant expertise technique, créativité et rigueur.
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Nos valeurs
            </Typography>

            <List disablePadding>
              {[
                "Excellence technique et innovation",
                "Transparence et communication",
                "Engagement et fiabilité",
                "Adaptabilité et agilité",
              ].map((value, index) => (
                <ListItem key={index} disablePadding sx={{ py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 36, color: "primary.main" }}>
                    <CheckCircleOutlineIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={value}
                    primaryTypographyProps={{
                      variant: "body1",
                      fontWeight: 500,
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>

        <Box sx={{ mt: 10 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  height: "100%",
                  borderRadius: 3,
                  borderTop: "4px solid",
                  borderColor: "primary.main",
                }}
              >
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  sx={{ fontWeight: 600 }}
                >
                  Notre Vision
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Devenir un acteur de référence dans le développement de
                  solutions numériques innovantes, en combinant expertise
                  technique et créativité pour créer des expériences utilisateur
                  exceptionnelles.
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  height: "100%",
                  borderRadius: 3,
                  borderTop: "4px solid",
                  borderColor: "secondary.main",
                }}
              >
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  sx={{ fontWeight: 600 }}
                >
                  Notre Approche
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Nous privilégions une approche collaborative et agile, en
                  travaillant étroitement avec nos clients pour comprendre leurs
                  besoins et leur offrir des solutions sur mesure qui dépassent
                  leurs attentes.
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  height: "100%",
                  borderRadius: 3,
                  borderTop: "4px solid",
                  borderColor: "#4f46e5",
                }}
              >
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  sx={{ fontWeight: 600 }}
                >
                  Notre Engagement
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Nous nous engageons à fournir des solutions de haute qualité,
                  performantes et évolutives, en respectant les délais et les
                  budgets, et en assurant un support continu à nos clients.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
