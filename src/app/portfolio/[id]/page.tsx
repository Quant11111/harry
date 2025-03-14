"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  Chip,
  Divider,
  Fade,
  Breadcrumbs,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

// Données de démonstration pour les projets (à remplacer par une API ou un CMS)
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
    fullDescription: `
      Ce clip musical pour le single "Horizons" du groupe Skyline a été réalisé avec une approche cinématographique mettant en valeur l'ambiance nocturne et urbaine de la chanson.
      
      Le montage a été conçu pour créer un rythme dynamique qui suit parfaitement les nuances de la musique, avec des transitions fluides et des effets visuels qui renforcent l'atmosphère onirique souhaitée par les artistes.
      
      Techniques utilisées:
      - Étalonnage colorimétrique avec dominante bleue/cyan
      - Transitions synchronisées avec le rythme
      - Effets de distorsion et de glitch pour les moments clés
      - Montage non-linéaire alternant entre performance et narration
    `,
    duration: "4:32",
    tools: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve"],
    additionalImages: [
      "https://images.unsplash.com/photo-1574717024453-354056afd6fc?q=80&w=1000",
      "https://images.unsplash.com/photo-1569701813229-33284b643e3c?q=80&w=1000",
      "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=1000",
    ],
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
    fullDescription: `
      Cette publicité pour le nouveau parfum "Évasion" de la marque Luxe a été conçue pour évoquer l'élégance et le raffinement.
      
      Le montage met l'accent sur des transitions douces et des ralentis élégants qui capturent les mouvements subtils et les expressions du modèle, créant ainsi une atmosphère de luxe et de sensualité.
      
      L'étalonnage colorimétrique a été soigneusement travaillé pour obtenir des tons chauds et dorés qui évoquent les notes olfactives du parfum.
      
      Techniques utilisées:
      - Ralentis fluides à 120 fps
      - Transitions par morphing et dissolves
      - Étalonnage colorimétrique doré/ambré
      - Sound design immersif
    `,
    duration: "0:30",
    tools: ["Adobe Premiere Pro", "DaVinci Resolve", "Adobe Audition"],
    additionalImages: [
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1000",
      "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?q=80&w=1000",
    ],
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
    fullDescription: `
      "Échos" est un court-métrage dramatique qui explore les thèmes de la mémoire, du temps et des relations humaines à travers une narration non-linéaire.
      
      Le montage a été conçu pour créer une structure narrative complexe où passé et présent s'entremêlent, reflétant l'état mental du protagoniste. Les transitions entre les différentes temporalités ont été soigneusement élaborées pour maintenir la cohérence narrative tout en créant une expérience immersive.
      
      Ce projet a remporté le prix du meilleur montage au Festival du Film Indépendant 2022.
      
      Techniques utilisées:
      - Montage non-linéaire avec structure en puzzle
      - Transitions thématiques entre les scènes
      - Étalonnage différencié pour les temporalités
      - Sound design élaboré pour renforcer l'immersion
    `,
    duration: "15:47",
    tools: ["Adobe Premiere Pro", "DaVinci Resolve", "Adobe Audition"],
    additionalImages: [
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1000",
      "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?q=80&w=1000",
      "https://images.unsplash.com/photo-1601944179066-29b8f7e29c3a?q=80&w=1000",
      "https://images.unsplash.com/photo-1611532736597-8bc68d6e4ca4?q=80&w=1000",
    ],
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
    fullDescription: `
      Ce clip expérimental pour le morceau "Nébuleuse" d'un artiste électro a été l'occasion d'explorer des techniques de montage innovantes et des effets visuels abstraits.
      
      Le montage synchronisé avec la musique crée une expérience visuelle immersive où chaque beat et chaque élément sonore trouve son équivalent visuel. Les transitions utilisent des techniques de data moshing et de glitch art pour créer une esthétique unique.
      
      Techniques utilisées:
      - Synchronisation audio/vidéo avancée
      - Data moshing et glitch art
      - Animation de particules génératives
      - Transitions par déformation et pixellisation
    `,
    duration: "3:45",
    tools: ["Adobe Premiere Pro", "After Effects", "Trapcode Suite"],
    additionalImages: [
      "https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=1000",
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000",
    ],
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
    fullDescription: `
      Cette publicité pour la chaîne de restaurants "Saveurs du Monde" met en valeur la diversité et la qualité des plats proposés à travers un montage dynamique et appétissant.
      
      Les séquences de préparation des plats et les plans rapprochés des ingrédients ont été montés avec des ralentis à 120 fps pour capturer tous les détails et créer une expérience visuelle gourmande.
      
      L'étalonnage a été travaillé pour renforcer les couleurs naturelles des aliments et créer une ambiance chaleureuse et accueillante.
      
      Techniques utilisées:
      - Ralentis à 120 fps pour les séquences culinaires
      - Transitions dynamiques entre les plats
      - Étalonnage renforçant les couleurs naturelles
      - Montage rythmé synchronisé avec la musique
    `,
    duration: "0:45",
    tools: ["Adobe Premiere Pro", "DaVinci Resolve"],
    additionalImages: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1000",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000",
    ],
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
    fullDescription: `
      "Artisans du Futur" est un documentaire qui explore comment les artisans traditionnels intègrent les technologies modernes dans leur pratique.
      
      Le montage alterne entre interviews, séquences de démonstration et contexte historique pour créer une narration riche et informative. La structure a été conçue pour mettre en valeur le contraste entre tradition et innovation.
      
      Ce documentaire a été diffusé sur une chaîne TV culturelle nationale et a reçu des critiques positives pour son approche équilibrée et son montage fluide.
      
      Techniques utilisées:
      - Structure narrative en trois actes
      - Montage alterné entre interviews et démonstrations
      - Intégration d'archives et de séquences historiques
      - Sound design immersif pour les séquences de démonstration
    `,
    duration: "26:18",
    tools: ["Adobe Premiere Pro", "After Effects", "Adobe Audition"],
    additionalImages: [
      "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?q=80&w=1000",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1000",
    ],
  },
];

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState<(typeof projects)[0] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simuler un chargement de données
    setLoading(true);

    // Trouver le projet correspondant à l'ID
    const projectId = Number(params.id);
    const foundProject = projects.find((p) => p.id === projectId);

    if (foundProject) {
      setProject(foundProject);
    } else {
      // Rediriger vers la page portfolio si le projet n'existe pas
      router.push("/portfolio");
    }

    setLoading(false);
  }, [params.id, router]);

  if (loading || !project) {
    return (
      <Box sx={{ py: 8, textAlign: "center" }}>
        <Container>
          <Typography>Chargement...</Typography>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ py: 8, backgroundColor: "background.default" }}>
      <Container maxWidth="lg">
        {/* Fil d'Ariane */}
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
          sx={{ mb: 4 }}
        >
          <Link
            href="/"
            passHref
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Accueil
          </Link>
          <Link
            href="/portfolio"
            passHref
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Portfolio
          </Link>
          <Typography color="text.primary">{project.title}</Typography>
        </Breadcrumbs>

        <Button
          component={Link}
          href="/portfolio"
          startIcon={<ArrowBackIcon />}
          sx={{ mb: 4 }}
        >
          Retour au portfolio
        </Button>

        <Fade in={true} timeout={800}>
          <Grid container spacing={6}>
            {/* Vidéo principale */}
            <Grid item xs={12}>
              <Paper elevation={3} sx={{ p: 0, overflow: "hidden" }}>
                <Box
                  sx={{
                    position: "relative",
                    paddingTop: "56.25%",
                    width: "100%",
                  }}
                >
                  <iframe
                    src={project.videoUrl}
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
                    title={project.title}
                  />
                </Box>
              </Paper>
            </Grid>

            {/* Informations du projet */}
            <Grid item xs={12} md={8}>
              <Typography variant="h3" component="h1" gutterBottom>
                {project.title}
              </Typography>

              <Box sx={{ display: "flex", gap: 1, mb: 3 }}>
                <Chip label={project.category} color="primary" />
                <Chip label={`${project.year}`} />
                <Chip label={`Durée: ${project.duration}`} />
              </Box>

              <Typography
                variant="body1"
                paragraph
                sx={{ whiteSpace: "pre-line" }}
              >
                {project.fullDescription}
              </Typography>

              <Divider sx={{ my: 4 }} />

              <Typography variant="h5" gutterBottom>
                Outils utilisés
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 4 }}>
                {project.tools.map((tool, index) => (
                  <Chip key={index} label={tool} variant="outlined" />
                ))}
              </Box>
            </Grid>

            {/* Informations client */}
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
                <Typography variant="h5" gutterBottom>
                  Informations
                </Typography>
                <Divider sx={{ mb: 2 }} />

                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle2" color="text.secondary">
                    Client
                  </Typography>
                  <Typography variant="body1">{project.client}</Typography>
                </Box>

                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle2" color="text.secondary">
                    Année
                  </Typography>
                  <Typography variant="body1">{project.year}</Typography>
                </Box>

                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle2" color="text.secondary">
                    Catégorie
                  </Typography>
                  <Typography variant="body1">{project.category}</Typography>
                </Box>

                <Box>
                  <Typography variant="subtitle2" color="text.secondary">
                    Durée
                  </Typography>
                  <Typography variant="body1">{project.duration}</Typography>
                </Box>
              </Paper>

              <Button
                variant="contained"
                color="primary"
                fullWidth
                component={Link}
                href="/contact"
                sx={{ mb: 2 }}
              >
                Discuter d&apos;un projet similaire
              </Button>

              <Button
                variant="outlined"
                fullWidth
                component={Link}
                href="/portfolio"
              >
                Voir d&apos;autres projets
              </Button>
            </Grid>

            {/* Images supplémentaires */}
            {project.additionalImages &&
              project.additionalImages.length > 0 && (
                <Grid item xs={12}>
                  <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
                    Images du projet
                  </Typography>
                  <Grid container spacing={2}>
                    {project.additionalImages.map((image, index) => (
                      <Grid item xs={12} sm={6} md={4} key={index}>
                        <Paper
                          elevation={3}
                          sx={{
                            overflow: "hidden",
                            transition: "transform 0.3s ease-in-out",
                            "&:hover": {
                              transform: "scale(1.02)",
                            },
                          }}
                        >
                          <Box
                            component="img"
                            src={image}
                            alt={`${project.title} - Image ${index + 1}`}
                            sx={{
                              width: "100%",
                              height: 200,
                              objectFit: "cover",
                            }}
                          />
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              )}
          </Grid>
        </Fade>
      </Container>
    </Box>
  );
}
