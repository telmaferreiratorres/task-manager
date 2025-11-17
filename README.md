# Task Manager - Gestionnaire de tâches

Application de gestion de tâches développée avec React, Vite, Tailwind CSS v4 et optimisée avec Lightning CSS.

## 👤 Informations

- **Nom :** FERREIRA TORRES
- **Prénom :** Telma
- **Formation :** Master DevOps - Normandie Web School
- **Projet :** TP2 - Intégration Lightning CSS par Framework (Édition 2)
- **Dépôt GitHub :** https://github.com/telmaferreiratorres/task-manager

## 🚀 Technologies utilisées

- **React 18.3.1** - Bibliothèque JavaScript pour l'interface utilisateur
- **Vite 7.2.2** - Outil de build ultra-rapide
- **Tailwind CSS v4** - Framework CSS utility-first
- **Lightning CSS** - Transformateur et optimiseur CSS haute performance
- **JavaScript ES6+** - Langage de programmation

## ⚡ Lightning CSS - Optimisations

### Fonctionnalités implémentées

✅ **Nesting CSS** - Styles imbriqués pour meilleure organisation  
✅ **Autoprefixing** - Préfixes navigateurs ajoutés automatiquement  
✅ **Minification** - CSS optimisé en production  
✅ **Propriétés logiques** - `padding-inline`, `margin-block-end` pour meilleure internationalisation  
✅ **Fonction clamp()** - Typographie responsive fluide  
✅ **Media queries modernes** - Syntaxe `(width >= 768px)`  

### Résultats

- **CSS avant Lightning CSS :** 26.62 kB
- **CSS après Lightning CSS :** 21.83 kB
- **Réduction :** ~4.8 kB (-18%)
- **Gzippé :** 4.61 kB

## 📋 Fonctionnalités de l'application

### Fonctionnalités principales
- ✅ Ajout de tâches avec description et catégorie
- ✅ Modification de tâches existantes
- ✅ Suppression de tâches
- ✅ Catégories : Travail, Personnel, Urgent
- ✅ Badges colorés par catégorie
- ✅ Design responsive avec animations

### Fonctionnalités bonus
- ✅ Persistance avec localStorage
- ✅ Système de filtrage par catégorie
- ✅ Animations fluides (fade-in, hover effects)
- ✅ Bouton "Tout supprimer" avec confirmation

### Architecture
- **App.jsx** - Composant principal gérant l'état global
- **TaskForm.jsx** - Formulaire d'ajout/modification
- **TaskList.jsx** - Affichage de la liste des tâches
- **custom.css** - Styles avec CSS Nesting

## 💻 Installation et lancement

### Prérequis
- Node.js (version 18 ou supérieure)
- npm ou yarn

### Installation
```bash
# Cloner le dépôt
git clone https://github.com/telmaferreiratorres/task-manager.git
cd task-manager

# Installer les dépendances
npm install
```

### Lancement

**Mode développement :**
```bash
npm run dev
```
→ Accessible sur `http://localhost:5173`

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
│   │   ├── TaskForm.jsx
│   │   └── TaskList.jsx
│   ├── styles/
│   │   └── custom.css        # CSS avec nesting
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── vite.config.js             # Configuration Vite + Lightning CSS
└── package.json
```

## 🔧 Configuration Lightning CSS

Le fichier `vite.config.js` intègre Lightning CSS via `vite-plugin-lightningcss` :
```javascript
import lightningcss from 'vite-plugin-lightningcss'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    lightningcss({
      browserslist: '>= 0.25%',
      drafts: {
        nesting: true,
      },
    })
  ],
  css: {
    transformer: 'lightningcss',
  },
  build: {
    cssMinify: 'lightningcss',
  }
})
```

## 📝 Commits Git

Le projet suit une bonne pratique Git avec des commits réguliers et explicites :
- Initial setup avec Vite + React + Tailwind
- Backup avant intégration Lightning CSS
- Configuration Lightning CSS
- Ajout des fonctionnalités avancées

## 🎓 Apprentissages

Ce projet m'a permis de :
1. Comprendre l'optimisation CSS avec Lightning CSS
2. Utiliser le CSS Nesting natif
3. Découvrir les propriétés logiques CSS
4. Maîtriser les fonctions CSS modernes (clamp)
5. Améliorer les performances du CSS en production

---

**Projet réalisé par Telma FERREIRA TORRES**  
**Master DevOps - Normandie Web School**  
**Novembre 2025**