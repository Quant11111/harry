"use client";

import { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Button,
  useScrollTrigger,
  Slide,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useColorMode } from "./ThemeRegistry";

// Pages de navigation
const pages = [
  { title: "Accueil", path: "/" },
  { title: "Portfolio", path: "/portfolio" },
  { title: "À Propos", path: "/about" },
  { title: "Contact", path: "/contact" },
];

// Fonction pour masquer la barre de navigation lors du défilement
function HideOnScroll({ children }: { children: React.ReactElement }) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Navigation() {
  const pathname = usePathname();
  const { mode, toggleColorMode } = useColorMode();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  // Contenu du drawer pour mobile
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Harry LN
      </Typography>
      <Divider />
      <List>
        {pages.map((page) => (
          <ListItem key={page.title} disablePadding>
            <ListItemButton
              component={Link}
              href={page.path}
              sx={{
                textAlign: "center",
                bgcolor:
                  pathname === page.path ? "action.selected" : "transparent",
              }}
            >
              <ListItemText primary={page.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar position="fixed" color="default" elevation={1}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              {/* Logo et titre pour desktop */}
              <Typography
                variant="h6"
                noWrap
                component={Link}
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                HARRY LN
              </Typography>

              {/* Menu mobile */}
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="menu"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleDrawerToggle}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
              </Box>

              {/* Logo et titre pour mobile */}
              <Typography
                variant="h6"
                noWrap
                component={Link}
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                HARRY LN
              </Typography>

              {/* Menu desktop */}
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  justifyContent: "center",
                }}
              >
                {pages.map((page) => (
                  <Button
                    key={page.title}
                    component={Link}
                    href={page.path}
                    sx={{
                      my: 2,
                      mx: 1,
                      color: "inherit",
                      display: "block",
                      position: "relative",
                      "&::after":
                        pathname === page.path
                          ? {
                              content: '""',
                              position: "absolute",
                              bottom: 0,
                              left: "50%",
                              transform: "translateX(-50%)",
                              width: "30%",
                              height: "2px",
                              bgcolor: "secondary.main",
                            }
                          : {},
                    }}
                  >
                    {page.title}
                  </Button>
                ))}
              </Box>

              {/* Bouton de basculement du thème */}
              <Box sx={{ flexGrow: 0 }}>
                <IconButton onClick={toggleColorMode} color="inherit">
                  {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      {/* Drawer pour mobile */}
      <Drawer
        variant="temporary"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Meilleure performance sur mobile
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>

      {/* Espace pour compenser la hauteur de la barre de navigation */}
      <Toolbar />
    </>
  );
}
