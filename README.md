# Task Board - Greg & Clawd

Un tableau de bord de tâches collaboratif local pour suivre le travail entre Grégoire et Clawd.

## 🚀 Stack Technique

- **Frontend**: Next.js 15 + TypeScript + Tailwind CSS
- **Backend**: PocketBase (base de données SQLite locale avec temps réel)
- **Temps réel**: SSE (Server-Sent Events) via PocketBase

## ✨ Fonctionnalités

- 📋 4 colonnes Kanban : À faire / En cours / En revue / Terminé
- 👥 Assignation des tâches (Grégoire ou Clawd)
- 🏷️ Priorités (Basse / Moyenne / Haute)
- 🏷️ Tags personnalisés
- ⚡ Mises à jour en temps réel (pas besoin de refresh)
- 🎨 Interface dark mode moderne
- 💾 100% local - aucune donnée sur le cloud

## 🛠️ Installation

1. **Cloner le repo**
```bash
git clone https://github.com/clawdgtko/task-board.git
cd task-board
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Lancer PocketBase (terminal 1)**
```bash
./pocketbase serve
```

4. **Configurer la collection**
   - Ouvre http://127.0.0.1:8090/_/ (admin)
   - Crée un compte admin
   - Importe le schéma : `pb_schema.json`
   - Ou crée manuellement la collection "tasks" avec les champs :
     - `title` (text, required)
     - `description` (text)
     - `status` (select: todo, in-progress, review, done)
     - `priority` (select: low, medium, high)
     - `assignee` (select: gregoire, clawd)
     - `tags` (json)

5. **Lancer le frontend (terminal 2)**
```bash
npm run dev
```

6. **Ouvrir dans le navigateur**
```
http://localhost:3000
```

## 📁 Structure du Projet

```
task-board/
├── app/                 # Routes Next.js
├── components/          # Composants React
│   ├── TaskBoard.tsx   # Tableau principal
│   ├── TaskCard.tsx    # Carte de tâche
│   └── TaskModal.tsx   # Modal création/édition
├── hooks/              # React hooks
│   └── useTasks.ts     # Hook temps réel PocketBase
├── lib/                # Utilitaires
│   └── pocketbase.ts   # Client PB
├── types/              # Types TypeScript
├── pb_schema.json      # Schéma PocketBase
├── pocketbase          # Binaire PocketBase
└── pb_data/            # Données SQLite (auto-généré)
```

## 🔧 Développement

### Créer une tâche

Clique sur "+ Nouvelle tâche" et remplis :
- Titre (obligatoire)
- Description (optionnelle)
- Assigné (Grégoire ou Clawd)
- Priorité (Basse/Moyenne/Haute)
- Tags (optionnels, séparés par des virgules)

### Modifier le statut

Clique sur la flèche "→" d'une carte pour avancer :
À faire → En cours → En revue → Terminé → À faire

### Modifier une tâche

Clique sur n'importe quelle carte pour l'éditer.

### Temps réel

Ouvre le board dans 2 navigateurs différents. Quand tu crées/modifies/supprimes une tâche dans l'un, l'autre se met à jour automatiquement.

## 📝 Notes

- Les données sont stockées dans `pb_data/` (SQLite)
- Pas besoin d'internet une fois configuré
- Backup : copie le dossier `pb_data/`

## 🚀 Mise à jour de PocketBase

```bash
./pocketbase update
```

---

Fait avec ❤️ par Clawd pour Grégoire
