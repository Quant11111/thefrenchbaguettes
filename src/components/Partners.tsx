"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
} from "@mui/material";

// Données fictives des partenaires
const partners = [
  {
    name: "Jean Dupont",
    role: "Développeur Frontend",
    specialty: ["React", "Vue.js", "UI/UX"],
    description:
      "Expert en interfaces utilisateur modernes et réactives avec 8 ans d'expérience.",
    avatar: "/avatars/partner1.jpg", // Image à ajouter plus tard
  },
  {
    name: "Marie Laurent",
    role: "Designer UX/UI",
    specialty: ["Figma", "Adobe XD", "Webflow"],
    description:
      "Créatrice d'expériences utilisateur intuitives et esthétiques pour applications web et mobiles.",
    avatar: "/avatars/partner2.jpg", // Image à ajouter plus tard
  },
  {
    name: "Thomas Moreau",
    role: "Développeur Backend",
    specialty: ["Node.js", "Python", "AWS"],
    description:
      "Spécialiste des architectures serveur robustes et évolutives pour applications complexes.",
    avatar: "/avatars/partner3.jpg", // Image à ajouter plus tard
  },
  {
    name: "Sophie Blanc",
    role: "Experte Blockchain",
    specialty: ["Solidity", "Web3", "DeFi"],
    description:
      "Développeuse de smart contracts et applications décentralisées avec une solide expérience en finance.",
    avatar: "/avatars/partner4.jpg", // Image à ajouter plus tard
  },
  {
    name: "Lucas Martin",
    role: "Monteur Vidéo",
    specialty: ["After Effects", "Premiere Pro", "Motion Design"],
    description:
      "Créateur de contenu vidéo captivant pour présenter vos produits et services de manière professionnelle.",
    avatar: "/avatars/partner5.jpg", // Image à ajouter plus tard
  },
  {
    name: "Emma Petit",
    role: "Développeuse Mobile",
    specialty: ["React Native", "Flutter", "iOS/Android"],
    description:
      "Experte en développement d'applications mobiles cross-platform performantes et intuitives.",
    avatar: "/avatars/partner6.jpg", // Image à ajouter plus tard
  },
];

export default function Partners() {
  return (
    <Box
      id="partenaires"
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
            NOS PARTENAIRES
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
            Une équipe de talents à votre service
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{
              maxWidth: "700px",
              mx: "auto",
            }}
          >
            Nous collaborons avec des experts de confiance pour offrir des
            solutions complètes et de haute qualité à nos clients.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {partners.map((partner, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 3,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: 10,
                  },
                }}
                elevation={2}
              >
                <Box
                  sx={{
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    src={partner.avatar}
                    alt={partner.name}
                    sx={{
                      width: 100,
                      height: 100,
                      mb: 2,
                      bgcolor: "primary.main",
                    }}
                  >
                    {partner.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </Avatar>
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{ fontWeight: 600, textAlign: "center" }}
                  >
                    {partner.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="primary"
                    gutterBottom
                    sx={{ textAlign: "center" }}
                  >
                    {partner.role}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 0.5,
                      justifyContent: "center",
                      mb: 2,
                    }}
                  >
                    {partner.specialty.map((skill, i) => (
                      <Chip
                        key={i}
                        label={skill}
                        size="small"
                        sx={{
                          bgcolor: "background.paper",
                          border: "1px solid",
                          borderColor: "divider",
                        }}
                      />
                    ))}
                  </Box>
                </Box>
                <CardContent sx={{ flexGrow: 1, pt: 0 }}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="center"
                  >
                    {partner.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: "center", mt: 8 }}>
          <Typography variant="h6" gutterBottom>
            Vous êtes un expert et souhaitez rejoindre notre réseau de
            partenaires ?
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary">
            Contactez-nous pour discuter des opportunités de collaboration.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
