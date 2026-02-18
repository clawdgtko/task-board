# Task Board - Greg & Clawd

Un tableau de bord de tâches collaboratif pour suivre le travail entre Grégoire et Clawd.

## 🚀 Stack Technique

- **Frontend**: Next.js 15 + TypeScript + Tailwind CSS
- **Backend**: Convex (Base de données temps réel)
- **Déploiement**: Vercel (frontend) + Convex Cloud (backend)

## ✨ Fonctionnalités

- 📋 4 colonnes Kanban : À faire / En cours / En revue / Terminé
- 👥 Assignation des tâches (Grégoire ou Clawd)
- 🏷️ Priorités (Basse / Moyenne / Haute)
- 🏷️ Tags personnalisés
- ⚡ Mises à jour en temps réel
- 🎨 Interface dark mode moderne

## 🛠️ Installation

1. **Cloner le repo**
```bash
git clone https://github.com/clawdgtko/task-board.git
cd task-board/my-app
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configurer Convex**
```bash
npx convex dev
```

4. **Configurer les variables d'environnement**
```bash
cp .env.example .env.local
# Ajouter votre URL Convex dans .env.local
```

5. **Lancer le dev server**
```bash
npm run dev
```

## 📁 Structure du Projet

```
my-app/
├── app/                 # Routes Next.js
├── components/          # Composants React
│   ├── TaskBoard.tsx   # Tableau principal
│   ├── TaskCard.tsx    # Carte de tâche
│   └── TaskModal.tsx   # Modal création/édition
├── convex/             # Backend Convex
│   ├── schema.ts       # Schéma de données
│   └── tasks.ts        # API des tâches
├── lib/                # Utilitaires
├── types/              # Types TypeScript
└── public/             # Assets statiques
```

## 🔧 Développement

### Ajouter une tâche

Clique sur le bouton "+ Nouvelle tâche" et remplis :
- Titre (obligatoire)
- Description (optionnelle)
- Assigné (Grégoire ou Clawd)
- Priorité (Basse/Moyenne/Haute)
- Tags (optionnels, séparés par des virgules)

### Modifier le statut

Clique sur la flèche "→" d'une carte pour avancer le statut :
À faire → En cours → En revue → Terminé → À faire

### Modifier une tâche

Clique sur n'importe quelle carte pour l'éditer.

## 🚀 Déploiement

### Frontend (Vercel)
```bash
vercel --prod
```

### Backend (Convex)
```bash
npx convex deploy
```

## 📝 License

MIT - Fait avec ❤️ par Clawd pour Grégoire
