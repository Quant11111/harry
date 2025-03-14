"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Avatar,
  useTheme,
  Fade,
} from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import { useState, useEffect } from "react";

// Données pour les compétences techniques
const technicalSkills = [
  { name: "Adobe Premiere Pro", level: 95 },
  { name: "Adobe After Effects", level: 90 },
  { name: "DaVinci Resolve", level: 85 },
  { name: "Final Cut Pro", level: 80 },
  { name: "Cinema 4D", level: 70 },
  { name: "Adobe Audition", level: 75 },
];

// Données pour les expériences professionnelles
const experiences = [
  {
    period: "2020 - Présent",
    title: "Monteur Vidéo Indépendant",
    description:
      "Montage de clips musicaux, publicités et courts-métrages pour divers clients. Collaboration avec des agences de publicité et des producteurs indépendants.",
  },
  {
    period: "2018 - 2020",
    title: "Monteur Vidéo Senior - Agence Créative Visuelle",
    description:
      "Responsable du montage et de la post-production pour des campagnes publicitaires nationales. Supervision d&apos;une équipe de monteurs juniors.",
  },
  {
    period: "2015 - 2018",
    title: "Monteur Vidéo - Studio de Production",
    description:
      "Montage de vidéos promotionnelles, documentaires et contenus pour les réseaux sociaux. Collaboration étroite avec les réalisateurs et directeurs artistiques.",
  },
];

// Données pour la formation
const education = [
  {
    period: "2013 - 2015",
    title: "Master en Cinéma et Audiovisuel",
    institution: "École Supérieure d&apos;Audiovisuel",
    description:
      "Spécialisation en montage et post-production. Projet de fin d&apos;études: court-métrage primé dans plusieurs festivals.",
  },
  {
    period: "2010 - 2013",
    title: "Licence en Arts du Spectacle",
    institution: "Université des Arts",
    description:
      "Formation aux techniques audiovisuelles et à l&apos;histoire du cinéma.",
  },
];

export default function About() {
  const theme = useTheme();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Box sx={{ py: 8, backgroundColor: "background.default" }}>
      <Container maxWidth="lg">
        <Fade in={loaded} timeout={800}>
          <Box>
            <Typography variant="h2" component="h1" align="center" gutterBottom>
              À Propos de Moi
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              align="center"
              color="text.secondary"
              sx={{ mb: 6 }}
            >
              Monteur vidéo passionné par la narration visuelle
            </Typography>
          </Box>
        </Fade>

        {/* Section Présentation */}
        <Grid container spacing={6} sx={{ mb: 8 }}>
          <Grid item xs={12} md={5}>
            <Fade in={loaded} timeout={1000}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000"
                alt="Harry LN"
                sx={{
                  width: "100%",
                  borderRadius: 2,
                  boxShadow:
                    theme.palette.mode === "dark"
                      ? "0 8px 16px rgba(0, 0, 0, 0.4)"
                      : "0 8px 16px rgba(0, 0, 0, 0.1)",
                }}
              />
            </Fade>
          </Grid>
          <Grid item xs={12} md={7}>
            <Fade in={loaded} timeout={1200}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography variant="h4" component="h2" gutterBottom>
                  Mon Parcours
                </Typography>
                <Typography variant="body1" paragraph>
                  Passionné par l&apos;art du montage vidéo depuis plus de 10
                  ans, j&apos;ai développé une expertise dans la création de
                  récits visuels captivants qui transmettent des émotions et
                  racontent des histoires mémorables.
                </Typography>
                <Typography variant="body1" paragraph>
                  Après avoir obtenu mon Master en Cinéma et Audiovisuel,
                  j&apos;ai travaillé pour plusieurs studios de production et
                  agences créatives avant de me lancer en tant que monteur
                  indépendant. Cette expérience variée m&apos;a permis de
                  développer une polyvalence et une adaptabilité essentielles
                  dans ce métier en constante évolution.
                </Typography>
                <Typography variant="body1">
                  Aujourd&apos;hui, je collabore avec des artistes, des marques
                  et des producteurs pour donner vie à leurs visions à travers
                  un montage soigné et créatif. Chaque projet est une nouvelle
                  opportunité de repousser les limites de la narration visuelle.
                </Typography>
              </Paper>
            </Fade>
          </Grid>
        </Grid>

        {/* Section Compétences Techniques */}
        <Fade in={loaded} timeout={1400}>
          <Paper elevation={3} sx={{ p: 4, mb: 6 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <MovieIcon color="primary" sx={{ fontSize: 30, mr: 2 }} />
              <Typography variant="h4" component="h2">
                Compétences Techniques
              </Typography>
            </Box>
            <Divider sx={{ mb: 4 }} />

            <Grid container spacing={3}>
              {technicalSkills.map((skill) => (
                <Grid item xs={12} sm={6} md={4} key={skill.name}>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      {skill.name}
                    </Typography>
                    <Box
                      sx={{
                        height: 8,
                        bgcolor:
                          theme.palette.mode === "dark"
                            ? "rgba(255, 255, 255, 0.1)"
                            : "rgba(0, 0, 0, 0.1)",
                        borderRadius: 4,
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          height: "100%",
                          width: `${skill.level}%`,
                          bgcolor: "primary.main",
                          borderRadius: 4,
                        }}
                      />
                    </Box>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      align="right"
                    >
                      {skill.level}%
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>

            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" gutterBottom>
                Spécialisations
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                <Chip label="Montage de clips musicaux" color="primary" />
                <Chip label="Étalonnage colorimétrique" />
                <Chip label="Motion design" />
                <Chip label="Montage narratif" color="primary" />
                <Chip label="Effets visuels" />
                <Chip label="Sound design" />
                <Chip label="Montage publicitaire" color="primary" />
              </Box>
            </Box>
          </Paper>
        </Fade>

        {/* Section Philosophie de Travail */}
        <Fade in={loaded} timeout={1600}>
          <Paper elevation={3} sx={{ p: 4, mb: 6 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <LightbulbIcon color="primary" sx={{ fontSize: 30, mr: 2 }} />
              <Typography variant="h4" component="h2">
                Ma Philosophie de Travail
              </Typography>
            </Box>
            <Divider sx={{ mb: 4 }} />

            <Typography variant="body1" paragraph>
              Je crois fermement que le montage est bien plus qu&apos;une simple
              juxtaposition d&apos;images - c&apos;est l&apos;art de créer du
              sens et de l&apos;émotion à travers le rythme, la composition et
              la narration visuelle.
            </Typography>

            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="secondary" />
                </ListItemIcon>
                <ListItemText
                  primary="Approche Collaborative"
                  secondary="Je travaille en étroite collaboration avec mes clients pour comprendre leur vision et la traduire en images percutantes."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="secondary" />
                </ListItemIcon>
                <ListItemText
                  primary="Attention aux Détails"
                  secondary="Chaque coupe, transition et effet est soigneusement pensé pour servir l'histoire et créer une expérience visuelle cohérente."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="secondary" />
                </ListItemIcon>
                <ListItemText
                  primary="Innovation Constante"
                  secondary="Je me tiens constamment informé des dernières tendances et techniques pour offrir un travail à la pointe de la créativité."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="secondary" />
                </ListItemIcon>
                <ListItemText
                  primary="Respect des Délais"
                  secondary="La ponctualité et la fiabilité sont essentielles dans mon processus de travail, garantissant une collaboration sereine."
                />
              </ListItem>
            </List>
          </Paper>
        </Fade>

        {/* Section Expérience Professionnelle */}
        <Fade in={loaded} timeout={1800}>
          <Paper elevation={3} sx={{ p: 4, mb: 6 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <WorkIcon color="primary" sx={{ fontSize: 30, mr: 2 }} />
              <Typography variant="h4" component="h2">
                Expérience Professionnelle
              </Typography>
            </Box>
            <Divider sx={{ mb: 4 }} />

            <Box sx={{ position: "relative" }}>
              {/* Ligne verticale pour la timeline */}
              <Box
                sx={{
                  position: "absolute",
                  left: { xs: 14, sm: 20 },
                  top: 0,
                  bottom: 0,
                  width: 2,
                  bgcolor: "divider",
                }}
              />

              {experiences.map((exp, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    mb: index < experiences.length - 1 ? 4 : 0,
                    position: "relative",
                  }}
                >
                  {/* Point sur la timeline */}
                  <Avatar
                    sx={{
                      bgcolor: "primary.main",
                      width: 30,
                      height: 30,
                      mr: { xs: 2, sm: 3 },
                      zIndex: 1,
                    }}
                  >
                    <WorkIcon fontSize="small" />
                  </Avatar>

                  <Box>
                    <Typography variant="h6" gutterBottom>
                      {exp.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="primary"
                      gutterBottom
                    >
                      {exp.period}
                    </Typography>
                    <Typography variant="body1">{exp.description}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Paper>
        </Fade>

        {/* Section Formation */}
        <Fade in={loaded} timeout={2000}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <SchoolIcon color="primary" sx={{ fontSize: 30, mr: 2 }} />
              <Typography variant="h4" component="h2">
                Formation
              </Typography>
            </Box>
            <Divider sx={{ mb: 4 }} />

            <Box sx={{ position: "relative" }}>
              {/* Ligne verticale pour la timeline */}
              <Box
                sx={{
                  position: "absolute",
                  left: { xs: 14, sm: 20 },
                  top: 0,
                  bottom: 0,
                  width: 2,
                  bgcolor: "divider",
                }}
              />

              {education.map((edu, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    mb: index < education.length - 1 ? 4 : 0,
                    position: "relative",
                  }}
                >
                  {/* Point sur la timeline */}
                  <Avatar
                    sx={{
                      bgcolor: "secondary.main",
                      width: 30,
                      height: 30,
                      mr: { xs: 2, sm: 3 },
                      zIndex: 1,
                    }}
                  >
                    <SchoolIcon fontSize="small" />
                  </Avatar>

                  <Box>
                    <Typography variant="h6" gutterBottom>
                      {edu.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="secondary"
                      gutterBottom
                    >
                      {edu.institution} | {edu.period}
                    </Typography>
                    <Typography variant="body1">{edu.description}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Paper>
        </Fade>
      </Container>
    </Box>
  );
}
