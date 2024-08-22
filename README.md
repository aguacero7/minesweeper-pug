# 🐾 Pug Garden Minesweeper

Bienvenue dans **Pug Garden Minesweeper** ! Un jeu de démineur classique avec une touche de fantaisie et un thème inspiré par les pugs et les jardins. Aidez notre pug à éviter les dangers cachés sous les cases du jardin.

## 🌟 Fonctionnalités

- **Grille de jeu personnalisable** : Grille responsive et parfaitement carrée pour une expérience de jeu fluide sur tous les appareils.
- **Thème Animalier** : Les mines sont représentées par des empreintes de pattes et la première case cliquée affiche une adorable patte de chien.
- **Mise en place de mines intelligente** : Les mines sont placées après le premier clic pour garantir que la première case cliquée est toujours sûre.
- **Gestion de drapeaux** : Marquez les cases que vous suspectez de contenir une mine.
- **Timer intégré** : Gardez un œil sur le temps écoulé pour améliorer votre performance à chaque partie.
- **Design moderne** : Interface utilisateur épurée avec des couleurs douces et des transitions fluides.

## 🚀 Comment démarrer

### Prérequis

Assurez-vous d'avoir installé [Node.js](https://nodejs.org/) sur votre machine.

### Installation

1. Clonez ce dépôt :

    ```bash
    git clone https://github.com/yourusername/pug-garden-minesweeper.git
    cd pug-garden-minesweeper
    ```

2. Installez les dépendances :

    ```bash
    npm install
    ```

3. Lancez le serveur :

    ```bash
    node app.js
    ```

4. Ouvrez votre navigateur à l'adresse suivante : [http://localhost:3000](http://localhost:3000)

## 🎮 Instructions de jeu

1. **Commencer le jeu** : Cliquez sur une case pour commencer. La première case cliquée est toujours sûre.
2. **Marquer une case** : Effectuez un clic droit sur une case pour la marquer avec un drapeau.
3. **Revelez une case** : Cliquez sur une case non marquée pour la révéler. Si la case contient une mine, la partie est terminée.
4. **Gagnez la partie** : Révélez toutes les cases qui ne contiennent pas de mines pour gagner.

## 🖼️ Thème et Design

- **Couleurs** : Inspirées par la nature et les jardins, avec des tons verts et bleus pour une ambiance calme et naturelle.
- **Images** : Utilisation d'une image de patte pour le premier clic, et de jolies icônes pour les mines et les drapeaux.

## 📂 Structure du projet

- `public/`: Contient les fichiers statiques comme les styles CSS, les images, et les scripts JavaScript.
- `views/`: Fichiers Pug (templates) pour le rendu du HTML.
- `app.js`: Point d'entrée principal de l'application Node.js.
- `script.js`: Logique principale du jeu, gestion des clics, des mines, et du timer.

## ✨ Personnalisation

Vous pouvez facilement personnaliser le thème et les icônes en remplaçant les images dans le dossier `public/images` et en ajustant les styles dans `styles.css`.

## 🛠️ Technologies utilisées

- **Node.js** : Serveur pour gérer les requêtes et servir l'application.
- **Express** : Framework minimaliste pour Node.js.
- **Pug** : Moteur de templates pour générer le HTML dynamiquement.
- **CSS Grid** : Utilisé pour construire une grille responsive.

## 📜 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

**Amusez-vous bien et aidez notre pug à traverser le jardin en toute sécurité ! 🐾**
