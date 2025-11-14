# Task Manager - Gestionnaire de tâches

Application de gestion de tâches développée avec React, Vite et Tailwind CSS v4.

## 👤 Informations

- **Nom :** FERREIRA TORRES
- **Prénom :** Telma
- **Formation :** Master DevOps - Normandie Web School
- **Projet :** TP Intégration Tailwind CSS par Framework

## 🚀 Technologies utilisées

- **React** - Bibliothèque JavaScript pour l'interface utilisateur
- **Vite** - Outil de build rapide
- **Tailwind CSS v4** - Framework CSS utility-first
- **JavaScript ES6+** - Langage de programmation

## 📋 Fonctionnalités implémentées

### Fonctionnalités principales
- ✅ Ajout de tâches avec description et catégorie
- ✅ Modification de tâches existantes
- ✅ Suppression de tâches
- ✅ Catégories : Travail, Personnel, Urgent
- ✅ Badges colorés par catégorie (bleu, vert, rouge)
- ✅ Message "Aucune tâche à afficher" quand la liste est vide
- ✅ Design responsive avec Tailwind
- ✅ Interface moderne avec dégradés et ombres

## 📋 Fonctionnalités implémentées

### Fonctionnalités principales
- ✅ Ajout de tâches avec description et catégorie
- ✅ Modification de tâches existantes
- ✅ Suppression de tâches
- ✅ Catégories : Travail, Personnel, Urgent
- ✅ Badges colorés par catégorie (bleu, vert, rouge)
- ✅ Message "Aucune tâche à afficher" quand la liste est vide
- ✅ Design responsive avec Tailwind
- ✅ Interface moderne avec dégradés et ombres

### Bonus implémentés
- ✅ **Persistance des données** : localStorage pour sauvegarder les tâches (refresh-proof)
- ✅ **Filtrage par catégorie** : Boutons interactifs pour filtrer Tout/Travail/Personnel/Urgent
- ✅ **Animations fluides** : 
  - Apparition des tâches avec fade-in et slide-in
  - Effet hover sur les cartes (scale + shadow)
  - Effet "press" sur les boutons
- ✅ **Bouton "Tout supprimer"** : Suppression de toutes les tâches avec confirmation

### Architecture
- **App.jsx** : Composant principal gérant l'état global (tâches, filtrage, édition)
- **TaskForm.jsx** : Formulaire d'ajout/modification avec useEffect pour le mode édition
- **TaskList.jsx** : Affichage dynamique de la liste avec map() et animations

## 💻 Installation et lancement

### Prérequis
- Node.js (version 18 ou supérieure)
- npm ou yarn

### Installation

1. Cloner le dépôt :
```bash
git clone https://github.com/telmaferreiratorres/task-manager.git
cd task-manager
```

2. Installer les dépendances :
```bash
npm install
```

### Lancement

**Mode développement :**
```bash
npm run dev
```
L'application sera accessible sur `http://localhost:5173`

**Build de production :**
```bash
npm run build
```

**Prévisualiser le build :**
```bash
npm run preview
```

## 📁 Structure du projet
```
task-manager/
├── src/
│   ├── components/
│   │   ├── TaskForm.jsx      # Formulaire d'ajout/modification
│   │   └── TaskList.jsx      # Liste des tâches
│   ├── App.jsx               # Composant principal
│   ├── main.jsx              # Point d'entrée
│   └── index.css             # Styles Tailwind
├── public/                   # Fichiers statiques
├── index.html                # Template HTML
├── vite.config.js            # Configuration Vite
├── tailwind.config.js        # Configuration Tailwind
├── postcss.config.js         # Configuration PostCSS
└── package.json              # Dépendances du projet
```

## 🎨 Tailwind CSS v4

Ce projet utilise Tailwind CSS v4 avec le plugin Vite officiel `@tailwindcss/vite`.

Configuration dans `vite.config.js` :
```javascript
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

## 📝 Fonctionnalités non implémentées

Aucune - Toutes les fonctionnalités demandées ont été réalisées.

## 📦 Dépendances principales
```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "@tailwindcss/vite": "^4.0.0-beta.7",
  "vite": "^6.0.1"
}
```

## 📄 Licence

Projet réalisé dans le cadre d'un TP académique - Normandie Web School 2024-2025