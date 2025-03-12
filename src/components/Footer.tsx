"use client";

import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MuiLink,
  IconButton,
  Divider,
  Button,
} from "@mui/material";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Logo from "./Logo";

const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "Développement Web", href: "#services" },
      { name: "Solutions Web3", href: "#services" },
      { name: "Applications Mobiles", href: "#services" },
      { name: "Conseil Technique", href: "#services" },
    ],
  },
  {
    title: "Entreprise",
    links: [
      { name: "À propos", href: "#about" },
      { name: "Équipe", href: "#team" },
      { name: "Partenaires", href: "#partenaires" },
      { name: "Carrières", href: "#careers" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { name: "Blog", href: "#blog" },
      { name: "Documentation", href: "#docs" },
      { name: "FAQ", href: "#faq" },
      { name: "Support", href: "#support" },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.main",
        color: "white",
        py: 8,
        borderTop: 1,
        borderColor: "secondary.main",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 4 }}>
              <Logo variant="text" color="light" size="medium" />
            </Box>
            <Typography variant="body2" sx={{ opacity: 0.8 }} paragraph>
              Experts en solutions Web2 et Web3, nous créons des expériences
              numériques innovantes et performantes pour nos clients.
            </Typography>
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              component={Link}
              href="#contact"
              sx={{
                mt: 2,
                borderWidth: 2,
                "&:hover": {
                  borderWidth: 2,
                },
              }}
            >
              Nous contacter
            </Button>
          </Grid>

          <Grid item xs={12} md={8}>
            <Grid container spacing={4}>
              {footerLinks.map((section) => (
                <Grid item xs={6} sm={4} key={section.title}>
                  <Typography
                    variant="subtitle1"
                    color="secondary"
                    gutterBottom
                    fontWeight="bold"
                    sx={{ textTransform: "uppercase", letterSpacing: "0.05em" }}
                  >
                    {section.title}
                  </Typography>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {section.links.map((link) => (
                      <li key={link.name} style={{ marginBottom: "0.75rem" }}>
                        <MuiLink
                          component={Link}
                          href={link.href}
                          color="inherit"
                          underline="hover"
                          sx={{
                            fontSize: "0.875rem",
                            opacity: 0.8,
                            transition: "all 0.2s",
                            "&:hover": {
                              opacity: 1,
                              color: "secondary.main",
                            },
                          }}
                        >
                          {link.name}
                        </MuiLink>
                      </li>
                    ))}
                  </ul>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Divider sx={{ my: 6, borderColor: "rgba(255,255,255,0.1)" }} />

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            © {currentYear} TheFrenchBaguettes. Tous droits réservés.
          </Typography>

          <Box sx={{ display: "flex", gap: 1, my: { xs: 2, md: 0 } }}>
            <IconButton
              size="small"
              sx={{ color: "white", "&:hover": { color: "secondary.main" } }}
            >
              <FacebookIcon fontSize="small" />
            </IconButton>
            <IconButton
              size="small"
              sx={{ color: "white", "&:hover": { color: "secondary.main" } }}
            >
              <TwitterIcon fontSize="small" />
            </IconButton>
            <IconButton
              size="small"
              sx={{ color: "white", "&:hover": { color: "secondary.main" } }}
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>
            <IconButton
              size="small"
              sx={{ color: "white", "&:hover": { color: "secondary.main" } }}
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
          </Box>

          <Box sx={{ display: "flex", gap: 3, mt: { xs: 2, sm: 0 } }}>
            <MuiLink
              component={Link}
              href="/privacy"
              color="inherit"
              underline="hover"
              variant="body2"
              sx={{ opacity: 0.7 }}
            >
              Politique de confidentialité
            </MuiLink>
            <MuiLink
              component={Link}
              href="/terms"
              color="inherit"
              underline="hover"
              variant="body2"
              sx={{ opacity: 0.7 }}
            >
              Conditions d&apos;utilisation
            </MuiLink>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
