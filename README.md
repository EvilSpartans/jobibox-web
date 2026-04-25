# JobiBox – Application Web Qwik.js ⚡️

Application web officielle **JobiBox** développée avec **Qwik.js** et **Qwik City**.  
Objectif : une expérience ultra-fluide (SSR + reprise progressive), rapide et optimisée sur tous les appareils.

## 🧰 Stack
- **Qwik.js** + **Qwik City** (routing par dossiers, layouts, endpoints)
- **Vite** (dev server & build)
- **TypeScript**
- **SCSS** (styles par composant)

## 📂 Structure du projet

├─ public/ # Assets statiques
└─ src/
├─ assets/ # Images, icônes, polices…
├─ components/ # UI réutilisable (pattern: index.tsx + index.scss)
├─ forms/ # Formulaires & logique associée
├─ models/ # Types/interfaces métier
├─ pages/ # Vues page-level (si utilisées)
├─ routes/ # Pages Qwik City / endpoints / layouts
├─ services/ # API, data fetching, logique d’accès
└─ utils/ # Helpers, constantes, outils


> Convention composant : chaque composant possède **`index.tsx`** et **`index.scss`** dans son dossier.

## 🚀 Scripts
```bash
# Développement (SSR)
npm start

# Build production (client + server)
npm run build

# Preview du build prod (serveur local)
npm run preview

🌐 À propos

JobiBox facilite la création de CV vidéo et la mise en relation candidats ↔ recruteurs.
Ce site présente la solution, ses fonctionnalités et cas d’usage, avec des performances au plus haut niveau grâce à Qwik.

## CI/CD GitHub -> PlanetHoster (FTPS)

Le repo inclut maintenant deux workflows:

- `.github/workflows/ci.yml`
  - Exécute le lint (`lint`)
  - Exécute les tests (`test`, actuellement basé sur le typecheck)
  - Compile le site (`build`)
  - Lance un audit sécurité runtime (`npm audit --omit=dev --audit-level=high`)
- `.github/workflows/deploy.yml`
  - Se déclenche uniquement si `CI` est vert
  - Déploie automatiquement sur `master`
  - Upload le dossier `dist/` en FTPS vers PlanetHoster

### Secrets requis (GitHub Actions)

- `FTP_HOST`
- `FTP_USERNAME`
- `FTP_PASSWORD`
- `FTP_PORT`
- `FTP_TARGET_DIR` (ex: `/public_html/`)

### Activation recommandée

1. Aller dans `Settings -> Branches` et protéger `master`.
2. Exiger les checks de `CI` avant merge.
3. Pousser une PR test pour valider le pipeline.