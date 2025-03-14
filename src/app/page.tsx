"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Fade,
  Grow,
  Slide,
  useTheme,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

// Données de démonstration pour les projets récents
const recentProjects = [
  {
    id: 1,
    title: 'Clip Musical - "Horizons"',
    category: "Clip Musical",
    thumbnail:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: 'Publicité - "Évasion Parfumée"',
    category: "Publicité",
    thumbnail:
      "https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 3,
    title: 'Court-métrage - "Échos"',
    category: "Court-métrage",
    thumbnail:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

export default function Home() {
  const theme = useTheme();
  const [loaded, setLoaded] = useState(false);

  // Effet pour déclencher les animations après le chargement de la page
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {/* Section Hero avec animation d'entrée */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "80vh", md: "90vh" },
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          backgroundColor: "background.paper",
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2000)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container maxWidth="lg">
          <Fade in={loaded} timeout={1000}>
            <Box sx={{ maxWidth: 800 }}>
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontWeight: 700,
                  color: "common.white",
                  mb: 2,
                  fontSize: { xs: "2.5rem", md: "4rem" },
                }}
              >
                HARRY LN
              </Typography>
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontWeight: 500,
                  color: "common.white",
                  mb: 4,
                  fontSize: { xs: "1.5rem", md: "2.5rem" },
                }}
              >
                Monteur Vidéo Professionnel
              </Typography>
              <Slide direction="up" in={loaded} timeout={1200}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "common.white",
                    mb: 4,
                    maxWidth: 600,
                  }}
                >
                  Je transforme vos idées en récits visuels captivants.
                  Spécialisé dans les clips musicaux, publicités et
                  courts-métrages.
                </Typography>
              </Slide>
              <Slide direction="up" in={loaded} timeout={1400}>
                <Box>
                  <Button
                    component={Link}
                    href="/portfolio"
                    variant="contained"
                    color="secondary"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    sx={{ mr: 2, mb: { xs: 2, sm: 0 } }}
                  >
                    Voir mon portfolio
                  </Button>
                  <Button
                    component={Link}
                    href="/contact"
                    variant="outlined"
                    size="large"
                    sx={{
                      color: "common.white",
                      borderColor: "common.white",
                      "&:hover": {
                        borderColor: "common.white",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      },
                    }}
                  >
                    Me contacter
                  </Button>
                </Box>
              </Slide>
            </Box>
          </Fade>
        </Container>
      </Box>

      {/* Section Projets Récents */}
      <Box sx={{ py: 8, backgroundColor: "background.default" }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" align="center" sx={{ mb: 6 }}>
            Projets Récents
          </Typography>

          <Grid container spacing={4}>
            {recentProjects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={project.id}>
                <Grow
                  in={loaded}
                  timeout={1000 + index * 300}
                  style={{ transformOrigin: "0 0 0" }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition:
                        "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow:
                          theme.palette.mode === "dark"
                            ? "0 12px 20px rgba(0, 0, 0, 0.5)"
                            : "0 12px 20px rgba(0, 0, 0, 0.15)",
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="240"
                      image={project.thumbnail}
                      alt={project.title}
                      sx={{ objectFit: "cover" }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="overline" color="text.secondary">
                        {project.category}
                      </Typography>
                      <Typography variant="h5" component="h3" gutterBottom>
                        {project.title}
                      </Typography>
                      <Button
                        component={Link}
                        href={`/portfolio/${project.id}`}
                        endIcon={<ArrowForwardIcon />}
                        sx={{ mt: 2 }}
                      >
                        Voir le projet
                      </Button>
                    </CardContent>
                  </Card>
                </Grow>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: "center", mt: 6 }}>
            <Button
              component={Link}
              href="/portfolio"
              variant="contained"
              color="primary"
              size="large"
              endIcon={<ArrowForwardIcon />}
            >
              Voir tous les projets
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Section À Propos */}
      <Box
        sx={{
          py: 8,
          backgroundColor:
            theme.palette.mode === "dark"
              ? "background.paper"
              : theme.palette.grey[100],
        }}
      >
        <Container maxWidth="md">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Fade in={loaded} timeout={1500}>
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
            <Grid item xs={12} md={6}>
              <Slide direction="left" in={loaded} timeout={1500}>
                <Box>
                  <Typography variant="h3" component="h2" gutterBottom>
                    À Propos de Moi
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Passionné par l&apos;art du montage vidéo depuis plus de 10
                    ans, je m&apos;efforce de créer des expériences visuelles
                    uniques qui captivent et émeuvent.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Spécialisé dans les clips musicaux, publicités et
                    courts-métrages, je combine créativité et expertise
                    technique pour donner vie à vos projets.
                  </Typography>
                  <Button
                    component={Link}
                    href="/about"
                    variant="outlined"
                    color="primary"
                    endIcon={<ArrowForwardIcon />}
                    sx={{ mt: 2 }}
                  >
                    En savoir plus
                  </Button>
                </Box>
              </Slide>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
