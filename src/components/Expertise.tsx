"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  LinearProgress,
  Divider,
} from "@mui/material";

const expertiseAreas = [
  {
    category: "Frontend",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "Vue.js / Nuxt.js", level: 90 },
      { name: "TypeScript", level: 92 },
      { name: "HTML5 / CSS3 / SASS", level: 95 },
      { name: "Material UI / Tailwind", level: 90 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js / Express", level: 90 },
      { name: "Python / Django / Flask", level: 85 },
      { name: "PHP / Laravel", level: 80 },
      { name: "GraphQL / REST API", level: 88 },
      { name: "SQL / NoSQL", level: 85 },
    ],
  },
  {
    category: "Web3 / Blockchain",
    skills: [
      { name: "Solidity / Smart Contracts", level: 90 },
      { name: "Ethereum / EVM", level: 85 },
      { name: "Web3.js / Ethers.js", level: 88 },
      { name: "IPFS / Filecoin", level: 80 },
      { name: "NFT / DeFi / DAO", level: 85 },
    ],
  },
];

export default function Expertise() {
  return (
    <Box
      id="expertise"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "background.paper",
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
            NOTRE EXPERTISE
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
            Des compétences techniques de pointe
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{
              maxWidth: "700px",
              mx: "auto",
            }}
          >
            Notre équipe maîtrise les technologies les plus récentes pour
            développer des solutions innovantes et performantes.
          </Typography>
        </Box>

        <Grid container spacing={6}>
          {expertiseAreas.map((area, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  height: "100%",
                  borderRadius: 3,
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  sx={{
                    fontWeight: 600,
                    pb: 1,
                    position: "relative",
                    "&:after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "40px",
                      height: "3px",
                      bgcolor:
                        index === 0
                          ? "primary.main"
                          : index === 1
                          ? "secondary.main"
                          : "#4f46e5",
                    },
                  }}
                >
                  {area.category}
                </Typography>

                <Box sx={{ mt: 3 }}>
                  {area.skills.map((skill, skillIndex) => (
                    <Box key={skillIndex} sx={{ mb: 2.5 }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mb: 0.5,
                        }}
                      >
                        <Typography variant="body2" fontWeight={500}>
                          {skill.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {skill.level}%
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={skill.level}
                        sx={{
                          height: 6,
                          borderRadius: 3,
                          bgcolor: "grey.200",
                          "& .MuiLinearProgress-bar": {
                            bgcolor:
                              index === 0
                                ? "primary.main"
                                : index === 1
                                ? "secondary.main"
                                : "#4f46e5",
                          },
                        }}
                      />
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 10 }}>
          <Divider sx={{ mb: 6 }} />
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                component="h3"
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                Pourquoi choisir TheFrenchBaguettes ?
              </Typography>
              <Typography variant="body1" paragraph>
                Notre équipe d&apos;ingénieurs français combine expertise
                technique et créativité pour concevoir des solutions numériques
                sur mesure qui répondent parfaitement à vos besoins.
              </Typography>
              <Box component="ul" sx={{ pl: 2 }}>
                <Typography component="li" variant="body1" paragraph>
                  <strong>Expertise technique</strong> : Maîtrise des dernières
                  technologies web et blockchain
                </Typography>
                <Typography component="li" variant="body1" paragraph>
                  <strong>Approche sur mesure</strong> : Solutions adaptées à
                  vos besoins spécifiques
                </Typography>
                <Typography component="li" variant="body1" paragraph>
                  <strong>Qualité et performance</strong> : Code optimisé et
                  applications performantes
                </Typography>
                <Typography component="li" variant="body1" paragraph>
                  <strong>Support continu</strong> : Accompagnement tout au long
                  de votre projet
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  bgcolor: "background.default",
                  p: 4,
                  borderRadius: 3,
                  border: "1px solid",
                  borderColor: "divider",
                }}
              >
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Notre processus de développement
                </Typography>
                <Box sx={{ mt: 3 }}>
                  {[
                    "Analyse des besoins",
                    "Conception",
                    "Développement",
                    "Tests",
                    "Déploiement",
                    "Maintenance",
                  ].map((step, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 2,
                      }}
                    >
                      <Box
                        sx={{
                          width: 30,
                          height: 30,
                          borderRadius: "50%",
                          bgcolor: "primary.main",
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: "bold",
                          mr: 2,
                        }}
                      >
                        {index + 1}
                      </Box>
                      <Typography variant="body1">{step}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
