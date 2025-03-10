"use client";

import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MuiLink,
  IconButton,
  Divider,
  Stack,
} from "@mui/material";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

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
        bgcolor: "background.paper",
        py: 6,
        borderTop: 1,
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              color="primary"
              gutterBottom
              fontWeight="bold"
            >
              TheFrenchBaguettes
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Experts en solutions Web2 et Web3, nous créons des expériences
              numériques innovantes et performantes pour nos clients.
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton aria-label="facebook" color="primary" size="small">
                <FacebookIcon />
              </IconButton>
              <IconButton aria-label="twitter" color="primary" size="small">
                <TwitterIcon />
              </IconButton>
              <IconButton aria-label="linkedin" color="primary" size="small">
                <LinkedInIcon />
              </IconButton>
              <IconButton aria-label="github" color="primary" size="small">
                <GitHubIcon />
              </IconButton>
            </Stack>
          </Grid>

          {footerLinks.map((section) => (
            <Grid item xs={6} sm={4} md={2} key={section.title}>
              <Typography
                variant="subtitle1"
                color="text.primary"
                gutterBottom
                fontWeight="bold"
              >
                {section.title}
              </Typography>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {section.links.map((link) => (
                  <li key={link.name} style={{ marginBottom: "0.5rem" }}>
                    <MuiLink
                      component={Link}
                      href={link.href}
                      color="text.secondary"
                      underline="hover"
                      sx={{ fontSize: "0.875rem" }}
                    >
                      {link.name}
                    </MuiLink>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {currentYear} TheFrenchBaguettes. Tous droits réservés.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mt: { xs: 2, sm: 0 } }}>
            <MuiLink
              component={Link}
              href="/privacy"
              color="text.secondary"
              underline="hover"
              variant="body2"
            >
              Politique de confidentialité
            </MuiLink>
            <MuiLink
              component={Link}
              href="/terms"
              color="text.secondary"
              underline="hover"
              variant="body2"
            >
              Conditions d'utilisation
            </MuiLink>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
