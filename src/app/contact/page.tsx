"use client";

import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  MenuItem,
  IconButton,
  Snackbar,
  Alert,
  Fade,
  Divider,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import fr from "date-fns/locale/fr";
import SendIcon from "@mui/icons-material/Send";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

// Types de projets pour le formulaire
const projectTypes = [
  "Clip Musical",
  "Publicité",
  "Court-métrage",
  "Documentaire",
  "Contenu pour Réseaux Sociaux",
  "Événement",
  "Autre",
];

export default function Contact() {
  // État pour le formulaire
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  // État pour la date de rendez-vous
  const [appointmentDate, setAppointmentDate] = useState<Date | null>(null);

  // État pour les alertes
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );

  // Gérer les changements dans le formulaire
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Gérer la soumission du formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Vérification basique des champs requis
    if (!formData.name || !formData.email || !formData.message) {
      setSnackbarMessage("Veuillez remplir tous les champs obligatoires.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
      return;
    }

    // Simulation d'envoi réussi (à remplacer par l'appel API réel)
    console.log("Formulaire soumis:", { ...formData, appointmentDate });
    setSnackbarMessage(
      "Votre message a été envoyé avec succès! Je vous contacterai bientôt."
    );
    setSnackbarSeverity("success");
    setOpenSnackbar(true);

    // Réinitialiser le formulaire
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      message: "",
    });
    setAppointmentDate(null);
  };

  // Fermer la notification
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={fr}>
      <Box sx={{ py: 8, backgroundColor: "background.default" }}>
        <Container maxWidth="lg">
          <Fade in={true} timeout={800}>
            <Box>
              <Typography
                variant="h2"
                component="h1"
                align="center"
                gutterBottom
              >
                Contact
              </Typography>
              <Typography
                variant="h5"
                component="h2"
                align="center"
                color="text.secondary"
                sx={{ mb: 6 }}
              >
                Discutons de votre projet de montage vidéo
              </Typography>
            </Box>
          </Fade>

          <Grid container spacing={6}>
            {/* Formulaire de contact */}
            <Grid item xs={12} md={8}>
              <Fade in={true} timeout={1000}>
                <Paper elevation={3} sx={{ p: 4 }}>
                  <Typography variant="h4" component="h2" gutterBottom>
                    Envoyez-moi un message
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    Parlez-moi de votre projet et je vous répondrai dans les
                    plus brefs délais.
                  </Typography>

                  <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{ mt: 3 }}
                  >
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          fullWidth
                          label="Nom"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          fullWidth
                          label="Email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
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
                          select
                          fullWidth
                          label="Type de projet"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          variant="outlined"
                        >
                          {projectTypes.map((option) => (
                            <MenuItem key={option} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                      <Grid item xs={12}>
                        <DatePicker
                          label="Prendre rendez-vous (optionnel)"
                          value={appointmentDate}
                          onChange={(newValue: Date | null) =>
                            setAppointmentDate(newValue)
                          }
                          slotProps={{
                            textField: {
                              fullWidth: true,
                              variant: "outlined",
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          label="Votre message"
                          name="message"
                          multiline
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          size="large"
                          endIcon={<SendIcon />}
                          sx={{ mt: 2 }}
                        >
                          Envoyer
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </Paper>
              </Fade>
            </Grid>

            {/* Informations de contact */}
            <Grid item xs={12} md={4}>
              <Fade in={true} timeout={1200}>
                <Paper elevation={3} sx={{ p: 4, height: "100%" }}>
                  <Typography variant="h4" component="h2" gutterBottom>
                    Informations
                  </Typography>

                  <Box sx={{ mt: 4 }}>
                    <Box sx={{ display: "flex", mb: 3 }}>
                      <LocationOnIcon
                        color="primary"
                        sx={{ mr: 2, fontSize: 24 }}
                      />
                      <Box>
                        <Typography variant="h6" gutterBottom>
                          Adresse
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Paris, France
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: "flex", mb: 3 }}>
                      <EmailIcon color="primary" sx={{ mr: 2, fontSize: 24 }} />
                      <Box>
                        <Typography variant="h6" gutterBottom>
                          Email
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          contact@harryln.com
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: "flex", mb: 4 }}>
                      <PhoneIcon color="primary" sx={{ mr: 2, fontSize: 24 }} />
                      <Box>
                        <Typography variant="h6" gutterBottom>
                          Téléphone
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          +33 6 XX XX XX XX
                        </Typography>
                      </Box>
                    </Box>

                    <Divider sx={{ my: 3 }} />

                    <Typography variant="h6" gutterBottom>
                      Réseaux Sociaux
                    </Typography>
                    <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
                      <IconButton
                        color="primary"
                        aria-label="Instagram"
                        component="a"
                        href="https://instagram.com/"
                        target="_blank"
                      >
                        <InstagramIcon />
                      </IconButton>
                      <IconButton
                        color="primary"
                        aria-label="YouTube"
                        component="a"
                        href="https://youtube.com/"
                        target="_blank"
                      >
                        <YouTubeIcon />
                      </IconButton>
                      <IconButton
                        color="primary"
                        aria-label="LinkedIn"
                        component="a"
                        href="https://linkedin.com/"
                        target="_blank"
                      >
                        <LinkedInIcon />
                      </IconButton>
                      <IconButton
                        color="primary"
                        aria-label="Twitter"
                        component="a"
                        href="https://twitter.com/"
                        target="_blank"
                      >
                        <TwitterIcon />
                      </IconButton>
                    </Box>
                  </Box>
                </Paper>
              </Fade>
            </Grid>
          </Grid>

          {/* Carte Google Maps (à remplacer par une vraie intégration) */}
          <Fade in={true} timeout={1400}>
            <Paper elevation={3} sx={{ mt: 6, p: 0, overflow: "hidden" }}>
              <Box
                component="iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.76457410133!2d2.2769947739402456!3d48.85894658138306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sfr!2sfr!4v1656876545010!5m2!1sfr!2sfr"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              />
            </Paper>
          </Fade>
        </Container>
      </Box>

      {/* Notification de succès/erreur */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </LocalizationProvider>
  );
}
