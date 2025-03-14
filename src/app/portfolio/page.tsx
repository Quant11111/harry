"use client";

import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  useTheme,
  Grow,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

// Données de démonstration pour les projets
const projects = [
  {
    id: 1,
    title: 'Clip Musical - "Horizons"',
    category: "Clip Musical",
    thumbnail:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description:
      'Clip musical pour le single "Horizons" du groupe Skyline. Ambiance nocturne et urbaine avec des effets visuels dynamiques.',
    client: "Skyline Music",
    year: 2023,
  },
  {
    id: 2,
    title: 'Publicité - "Évasion Parfumée"',
    category: "Publicité",
    thumbnail:
      "https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description:
      'Publicité pour le nouveau parfum "Évasion" de la marque Luxe. Montage élégant avec transitions fluides et étalonnage soigné.',
    client: "Luxe Parfums",
    year: 2023,
  },
  {
    id: 3,
    title: 'Court-métrage - "Échos"',
    category: "Court-métrage",
    thumbnail:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description:
      "Court-métrage dramatique explorant les thèmes de la mémoire et du temps. Montage non-linéaire avec une narration complexe.",
    client: "Festival du Film Indépendant",
    year: 2022,
  },
  {
    id: 4,
    title: 'Clip Musical - "Nébuleuse"',
    category: "Clip Musical",
    thumbnail:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description:
      'Clip expérimental avec des effets visuels abstraits et des transitions innovantes pour le morceau "Nébuleuse".',
    client: "Artiste Électro",
    year: 2022,
  },
  {
    id: 5,
    title: 'Publicité - "Voyage Culinaire"',
    category: "Publicité",
    thumbnail:
      "https://images.unsplash.com/photo-1576402187878-974f70c890a5?q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description:
      "Publicité pour une chaîne de restaurants mettant en valeur les plats avec des ralentis et un montage dynamique.",
    client: "Restaurants Saveurs du Monde",
    year: 2023,
  },
  {
    id: 6,
    title: 'Documentaire - "Artisans du Futur"',
    category: "Documentaire",
    thumbnail:
      "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description:
      "Documentaire sur les artisans qui utilisent des technologies innovantes. Montage narratif avec interviews et séquences de démonstration.",
    client: "Chaîne TV Culturelle",
    year: 2021,
  },
];

// Liste des catégories uniques
const categories = [
  "Tous",
  ...Array.from(new Set(projects.map((project) => project.category))),
];

export default function Portfolio() {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  // Filtrer les projets par catégorie
  const filteredProjects =
    selectedCategory === "Tous"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  // Gérer l'ouverture du dialogue de prévisualisation
  const handleOpenDialog = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
    setOpenDialog(true);
  };

  // Gérer la fermeture du dialogue
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Box
        sx={{
          py: 8,
          backgroundColor: "background.default",
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" align="center" gutterBottom>
            Portfolio
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            align="center"
            color="text.secondary"
            sx={{ mb: 6 }}
          >
            Découvrez mes réalisations en montage vidéo
          </Typography>

          {/* Filtres par catégorie */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 1,
              mb: 6,
            }}
          >
            {categories.map((category) => (
              <Chip
                key={category}
                label={category}
                onClick={() => setSelectedCategory(category)}
                color={selectedCategory === category ? "primary" : "default"}
                variant={selectedCategory === category ? "filled" : "outlined"}
                sx={{ m: 0.5 }}
              />
            ))}
          </Box>

          {/* Grille de projets */}
          <Grid container spacing={4}>
            {filteredProjects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={project.id}>
                <Grow in={true} timeout={300 + index * 100}>
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
                    <Box sx={{ position: "relative" }}>
                      <CardMedia
                        component="img"
                        height="240"
                        image={project.thumbnail}
                        alt={project.title}
                        sx={{ objectFit: "cover" }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          backgroundColor: "rgba(0, 0, 0, 0.4)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          opacity: 0,
                          transition: "opacity 0.3s ease-in-out",
                          "&:hover": {
                            opacity: 1,
                          },
                        }}
                      >
                        <IconButton
                          onClick={() => handleOpenDialog(project)}
                          sx={{
                            color: "white",
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                            "&:hover": {
                              backgroundColor: "rgba(0, 0, 0, 0.7)",
                            },
                          }}
                          size="large"
                        >
                          <PlayArrowIcon fontSize="large" />
                        </IconButton>
                      </Box>
                    </Box>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="overline" color="text.secondary">
                        {project.category}
                      </Typography>
                      <Typography variant="h5" component="h3" gutterBottom>
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        paragraph
                      >
                        {project.description.substring(0, 100)}...
                      </Typography>
                      <Typography
                        variant="caption"
                        display="block"
                        sx={{ mb: 2 }}
                      >
                        Client: {project.client} | {project.year}
                      </Typography>
                      <Button
                        variant="outlined"
                        onClick={() => handleOpenDialog(project)}
                        startIcon={<PlayArrowIcon />}
                      >
                        Voir le projet
                      </Button>
                    </CardContent>
                  </Card>
                </Grow>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Dialogue de prévisualisation vidéo */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
      >
        {selectedProject && (
          <>
            <DialogTitle>
              {selectedProject.title}
              <IconButton
                aria-label="close"
                onClick={handleCloseDialog}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <Box
                sx={{
                  position: "relative",
                  paddingTop: "56.25%",
                  width: "100%",
                  mb: 2,
                }}
              >
                <iframe
                  src={selectedProject.videoUrl}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "none",
                  }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={selectedProject.title}
                />
              </Box>
              <Typography variant="h6" gutterBottom>
                Description
              </Typography>
              <Typography variant="body1" paragraph>
                {selectedProject.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Client: {selectedProject.client} | {selectedProject.year}
              </Typography>
            </DialogContent>
          </>
        )}
      </Dialog>
    </>
  );
}
