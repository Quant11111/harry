"use client";

import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MuiLink,
  IconButton,
  Divider,
} from "@mui/material";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.background.paper,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Harry LN
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Monteur vidéo professionnel spécialisé dans les clips musicaux,
              publicités et courts-métrages.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Liens Rapides
            </Typography>
            <Box component="nav">
              <MuiLink
                component={Link}
                href="/"
                color="inherit"
                sx={{ display: "block", mb: 1 }}
              >
                Accueil
              </MuiLink>
              <MuiLink
                component={Link}
                href="/portfolio"
                color="inherit"
                sx={{ display: "block", mb: 1 }}
              >
                Portfolio
              </MuiLink>
              <MuiLink
                component={Link}
                href="/about"
                color="inherit"
                sx={{ display: "block", mb: 1 }}
              >
                À Propos
              </MuiLink>
              <MuiLink
                component={Link}
                href="/contact"
                color="inherit"
                sx={{ display: "block", mb: 1 }}
              >
                Contact
              </MuiLink>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <EmailIcon fontSize="small" sx={{ mr: 1 }} />
              <MuiLink href="mailto:contact@harryln.com" color="inherit">
                contact@harryln.com
              </MuiLink>
            </Box>
            <Box sx={{ mt: 2 }}>
              <IconButton
                color="inherit"
                aria-label="Instagram"
                component="a"
                href="https://instagram.com/"
                target="_blank"
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="YouTube"
                component="a"
                href="https://youtube.com/"
                target="_blank"
              >
                <YouTubeIcon />
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="LinkedIn"
                component="a"
                href="https://linkedin.com/"
                target="_blank"
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="Twitter"
                component="a"
                href="https://twitter.com/"
                target="_blank"
              >
                <TwitterIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary" align="center">
          © {currentYear} Harry LN. Tous droits réservés.
        </Typography>
      </Container>
    </Box>
  );
}
