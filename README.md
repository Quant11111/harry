# Harry LN - Portfolio de Monteur Vidéo Professionnel

Ce projet est un site vitrine pour Harry LN, monteur vidéo professionnel, présentant son portfolio, ses compétences et permettant aux clients potentiels de le contacter.

## Technologies utilisées

- **Next.js 15** - Framework React avec App Router pour le routage et le rendu côté serveur
- **React 19** - Bibliothèque JavaScript pour construire des interfaces utilisateur
- **Material UI 6** - Bibliothèque de composants React pour un design moderne et responsive
- **TypeScript** - Superset JavaScript typé pour une meilleure qualité de code

## Fonctionnalités

- **Design responsive** - S'adapte à tous les appareils (mobile, tablette, desktop)
- **Mode sombre/clair** - Possibilité de basculer entre les thèmes
- **Portfolio filtrable** - Présentation des projets avec filtrage par catégorie
- **Lecteur vidéo intégré** - Prévisualisation des projets dans une modal
- **Formulaire de contact** - Avec validation et sélecteur de date pour rendez-vous
- **Animations fluides** - Transitions et animations pour une expérience utilisateur agréable

## Structure du projet

```
/src
  /app                  # Pages de l'application (App Router)
    /page.tsx           # Page d'accueil
    /portfolio          # Page portfolio
    /about              # Page à propos
    /contact            # Page contact
  /components           # Composants réutilisables
    /ThemeRegistry.tsx  # Configuration du thème Material UI
    /Navigation.tsx     # Barre de navigation
    /Footer.tsx         # Pied de page
    /Layout.tsx         # Layout principal
/public                 # Fichiers statiques
  /images               # Images du site
```

## Installation et démarrage

1. Cloner le dépôt
2. Installer les dépendances : `npm install`
3. Démarrer le serveur de développement : `npm run dev`
4. Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur

## Déploiement

Le site peut être déployé sur n'importe quelle plateforme supportant Next.js, comme Vercel ou Netlify.

Pour construire le site pour la production :

```bash
npm run build
```

## Personnalisation

- Les couleurs et le thème peuvent être modifiés dans `src/components/ThemeRegistry.tsx`
- Les projets du portfolio sont définis dans `src/app/portfolio/page.tsx`
- Les informations de contact sont dans `src/app/contact/page.tsx`

## Licence

Tous droits réservés © Harry LN

## Made by

Quant11111
