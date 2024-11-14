# Utiliser une image Node officielle
FROM node:16

# Créer un répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code de l'application
COPY ./src ./src
COPY .env .


# Définir des variables d'environnement directement
ENV PORT=3000
ENV DB_HOST=your_database_host
ENV DB_USER=your_database_user
ENV DB_PASS=your_database_password


# Exposer le port sur lequel l'application va tourner
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["node", "src/app.js"]
