# 🚀 Guide de Déploiement Task Board

## Étape 1: Authentification Convex

Dans le dossier du projet, run :
```bash
npx convex login
```

## Étape 2: Initialiser le projet Convex

```bash
npx convex dev --once --configure=new
```

Ça va créer un nouveau projet Convex et te donner une URL.

## Étape 3: Configurer l'URL

Copie l'URL affichée et crée le fichier `.env.local` :
```bash
echo "NEXT_PUBLIC_CONVEX_URL=https://ton-url.convex.cloud" > .env.local
```

## Étape 4: Lancer en local

```bash
npm run dev
```

Le board sera dispo sur http://localhost:3000

## Étape 5: Déployer sur Vercel

### Option A: CLI Vercel
```bash
vercel --prod
```

### Option B: GitHub Integration
1. Va sur https://vercel.com/dashboard
2. "Add New Project"
3. Importe depuis GitHub : `clawdgtko/task-board`
4. Ajoute la variable d'environnement `NEXT_PUBLIC_CONVEX_URL`
5. Deploy

## 📋 Récap des URLs

- **Repo GitHub**: https://github.com/clawdgtko/task-board
- **Dashboard Convex**: https://dashboard.convex.dev
- **Prod (après deploy)**: https://task-board-xyz.vercel.app

## 🎯 Prochaines étapes suggérées

1. Créer quelques tâches de test
2. Vérifier que les updates temps réel fonctionnent
3. Customiser les couleurs si besoin
4. Ajouter d'autres features (deadlines, commentaires...)

---

Tu veux que je te guide pour une étape en particulier ?
