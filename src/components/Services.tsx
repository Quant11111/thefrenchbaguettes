"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import SecurityIcon from "@mui/icons-material/Security";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const services = [
  {
    title: "Développement Web",
    description:
      "Création de sites web et d'applications web modernes, réactifs et performants avec les dernières technologies.",
    icon: CodeIcon,
    colorCode: "#D4AF37",
  },
  {
    title: "Solutions Web3",
    description:
      "Développement de dApps, smart contracts et intégrations blockchain pour vos projets innovants.",
    icon: StorageIcon,
    colorCode: "#D4AF37",
  },
  {
    title: "Applications Mobiles",
    description:
      "Conception et développement d'applications mobiles natives et cross-platform pour iOS et Android.",
    icon: PhoneIphoneIcon,
    colorCode: "#D4AF37",
  },
  {
    title: "Design UX/UI",
    description:
      "Création d'interfaces utilisateur intuitives et esthétiques pour une expérience utilisateur optimale.",
    icon: DesignServicesIcon,
    colorCode: "#D4AF37",
  },
  {
    title: "Sécurité & Audit",
    description:
      "Audit de sécurité de vos applications et smart contracts pour garantir la protection de vos données.",
    icon: SecurityIcon,
    colorCode: "#D4AF37",
  },
  {
    title: "Support & Maintenance",
    description:
      "Services de support technique et maintenance continue pour assurer la pérennité de vos solutions.",
    icon: SupportAgentIcon,
    colorCode: "#D4AF37",
  },
];

export default function Services() {
  return (
    <Box
      id="services"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "white",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="overline"
            component="div"
            color="secondary"
            gutterBottom
            sx={{
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Nos Services
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            color="primary"
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: { xs: "2rem", md: "2.75rem" },
              maxWidth: "800px",
              mx: "auto",
              textTransform: "uppercase",
              letterSpacing: "0.02em",
            }}
          >
            Des solutions complètes pour vos projets numériques
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{
              maxWidth: "700px",
              mx: "auto",
            }}
          >
            Notre équipe d&apos;experts propose une gamme complète de services
            pour répondre à tous vos besoins en développement web et blockchain.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: 4,
                  },
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "4px",
                    height: "100%",
                    bgcolor: "secondary.main",
                  },
                }}
                elevation={0}
              >
                <Box
                  sx={{
                    p: 3,
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "secondary.main",
                    }}
                  >
                    <service.icon sx={{ fontSize: 36 }} />
                  </Box>
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{ fontWeight: 600, color: "primary.main" }}
                  >
                    {service.title}
                  </Typography>
                </Box>
                <CardContent sx={{ flexGrow: 1, pt: 0, px: 3, pb: 3 }}>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: "center", mt: 8 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="#contact"
            sx={{
              px: 4,
              py: 1.5,
              fontWeight: 600,
            }}
          >
            Discuter de votre projet
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
