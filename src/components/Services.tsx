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
    color: "#1e3a8a",
  },
  {
    title: "Solutions Web3",
    description:
      "Développement de dApps, smart contracts et intégrations blockchain pour vos projets innovants.",
    icon: StorageIcon,
    color: "#c2410c",
  },
  {
    title: "Applications Mobiles",
    description:
      "Conception et développement d'applications mobiles natives et cross-platform pour iOS et Android.",
    icon: PhoneIphoneIcon,
    color: "#0e7490",
  },
  {
    title: "Design UX/UI",
    description:
      "Création d'interfaces utilisateur intuitives et esthétiques pour une expérience utilisateur optimale.",
    icon: DesignServicesIcon,
    color: "#4f46e5",
  },
  {
    title: "Sécurité & Audit",
    description:
      "Audit de sécurité de vos applications et smart contracts pour garantir la protection de vos données.",
    icon: SecurityIcon,
    color: "#7e22ce",
  },
  {
    title: "Support & Maintenance",
    description:
      "Services de support technique et maintenance continue pour assurer la pérennité de vos solutions.",
    icon: SupportAgentIcon,
    color: "#be123c",
  },
];

export default function Services() {
  return (
    <Box
      id="services"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="overline"
            component="div"
            color="primary"
            gutterBottom
            sx={{ fontWeight: 600, letterSpacing: 1.5 }}
          >
            NOS SERVICES
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: { xs: "2rem", md: "2.75rem" },
              maxWidth: "800px",
              mx: "auto",
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
                  borderRadius: 3,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: 10,
                  },
                }}
                elevation={2}
              >
                <Box
                  sx={{
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: `${service.color}15`,
                      color: service.color,
                    }}
                  >
                    <service.icon sx={{ fontSize: 30 }} />
                  </Box>
                </Box>
                <CardContent sx={{ flexGrow: 1, pt: 0 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h3"
                    sx={{ fontWeight: 600 }}
                  >
                    {service.title}
                  </Typography>
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
              borderRadius: "28px",
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
