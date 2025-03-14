"use client";

import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { createContext, useState, useMemo, useContext, ReactNode } from "react";

// Définition du type pour le contexte du thème
type ColorMode = "light" | "dark";
type ColorModeContextType = {
  toggleColorMode: () => void;
  mode: ColorMode;
};

// Création du contexte pour le mode de couleur
export const ColorModeContext = createContext<ColorModeContextType>({
  toggleColorMode: () => {},
  mode: "dark",
});

// Hook personnalisé pour utiliser le contexte du mode de couleur
export const useColorMode = () => useContext(ColorModeContext);

// Composant principal ThemeRegistry
export default function ThemeRegistry({ children }: { children: ReactNode }) {
  // État pour gérer le mode de couleur (sombre/clair)
  const [mode, setMode] = useState<ColorMode>("dark");

  // Fonction pour basculer entre les modes
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
      mode,
    }),
    [mode]
  );

  // Création du thème en fonction du mode
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                // Palette pour le mode clair
                primary: {
                  main: "#1976d2",
                  dark: "#115293",
                  light: "#4791db",
                },
                secondary: {
                  main: "#e91e63",
                  dark: "#c2185b",
                  light: "#ed4b82",
                },
                background: {
                  default: "#f5f5f5",
                  paper: "#ffffff",
                },
              }
            : {
                // Palette pour le mode sombre avec des accents vifs
                primary: {
                  main: "#90caf9",
                  dark: "#648dae",
                  light: "#a6d4fa",
                },
                secondary: {
                  main: "#f48fb1",
                  dark: "#aa647b",
                  light: "#f6a5c0",
                },
                background: {
                  default: "#121212",
                  paper: "#1e1e1e",
                },
              }),
        },
        typography: {
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          h1: {
            fontWeight: 700,
            fontSize: "3.5rem",
          },
          h2: {
            fontWeight: 600,
            fontSize: "2.75rem",
          },
          h3: {
            fontWeight: 600,
            fontSize: "2.25rem",
          },
          h4: {
            fontWeight: 500,
            fontSize: "1.75rem",
          },
          h5: {
            fontWeight: 500,
            fontSize: "1.5rem",
          },
          h6: {
            fontWeight: 500,
            fontSize: "1.25rem",
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 8,
                textTransform: "none",
                fontWeight: 500,
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: 12,
                boxShadow:
                  mode === "dark"
                    ? "0 8px 16px rgba(0, 0, 0, 0.4)"
                    : "0 8px 16px rgba(0, 0, 0, 0.1)",
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
