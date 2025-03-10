"use client";

import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Snackbar,
  Alert,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    projectType: "web",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous implémenteriez la logique d'envoi du formulaire
    // Pour l'exemple, nous simulons simplement un succès
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        projectType: "web",
      });
    } else {
      setError(true);
    }
  };

  const handleCloseSnackbar = () => {
    setSubmitted(false);
    setError(false);
  };

  return (
    <Box
      id="contact"
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
            CONTACTEZ-NOUS
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
            Discutons de votre projet
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{
              maxWidth: "700px",
              mx: "auto",
            }}
          >
            Vous avez un projet en tête ? Contactez-nous pour en discuter et
            découvrir comment nous pouvons vous aider à le concrétiser.
          </Typography>
        </Box>

        <Grid container spacing={6}>
          <Grid item xs={12} md={5}>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                Informations de contact
              </Typography>
              <Typography variant="body1" paragraph color="text.secondary">
                N&apos;hésitez pas à nous contacter directement ou à utiliser le
                formulaire pour nous envoyer un message.
              </Typography>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    bgcolor: "primary.main",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <EmailIcon />
                </Box>
                <Box>
                  <Typography variant="subtitle1" fontWeight={600}>
                    Email
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    contact@thefrenchbaguettes.com
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    bgcolor: "primary.main",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <PhoneIcon />
                </Box>
                <Box>
                  <Typography variant="subtitle1" fontWeight={600}>
                    Téléphone
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    +33 1 23 45 67 89
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    bgcolor: "primary.main",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <LocationOnIcon />
                </Box>
                <Box>
                  <Typography variant="subtitle1" fontWeight={600}>
                    Adresse
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Paris, France
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                mt: 6,
                p: 3,
                bgcolor: "background.default",
                borderRadius: 3,
                border: "1px solid",
                borderColor: "divider",
              }}
            >
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Horaires de disponibilité
              </Typography>
              <Typography variant="body2" paragraph>
                <strong>Lundi - Vendredi:</strong> 9h00 - 18h00
              </Typography>
              <Typography variant="body2">
                <strong>Weekend:</strong> Fermé
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={7}>
            <Paper
              elevation={3}
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: 3,
                height: "100%",
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                Envoyez-nous un message
              </Typography>
              <Typography variant="body2" paragraph color="text.secondary">
                Remplissez le formulaire ci-dessous et nous vous répondrons dans
                les plus brefs délais.
              </Typography>

              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Nom complet"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Téléphone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Sujet"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl component="fieldset" sx={{ mb: 2 }}>
                      <Typography variant="subtitle2" gutterBottom>
                        Type de projet
                      </Typography>
                      <RadioGroup
                        row
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                      >
                        <FormControlLabel
                          value="web"
                          control={<Radio />}
                          label="Site Web"
                        />
                        <FormControlLabel
                          value="mobile"
                          control={<Radio />}
                          label="App Mobile"
                        />
                        <FormControlLabel
                          value="web3"
                          control={<Radio />}
                          label="Web3/Blockchain"
                        />
                        <FormControlLabel
                          value="other"
                          control={<Radio />}
                          label="Autre"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                      sx={{
                        mt: 2,
                        py: 1.5,
                        px: 4,
                        borderRadius: "28px",
                        fontWeight: 600,
                        width: { xs: "100%", md: "auto" },
                      }}
                    >
                      Envoyer le message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={submitted}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Votre message a été envoyé avec succès ! Nous vous répondrons dans les
          plus brefs délais.
        </Alert>
      </Snackbar>

      <Snackbar
        open={error}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="error"
          sx={{ width: "100%" }}
        >
          Veuillez remplir tous les champs obligatoires.
        </Alert>
      </Snackbar>
    </Box>
  );
}
