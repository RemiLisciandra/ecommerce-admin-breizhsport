# Étape 1: Installer les dépendances et générer le client Prisma
FROM node:alpine as deps
WORKDIR /app
COPY package.json .
RUN npm install
COPY prisma ./prisma
RUN npx prisma generate

# Étape 2: Construire votre application Next.js
FROM node:alpine as builder
WORKDIR /app
COPY .env ./
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Étape 3: Exécuter l'application
FROM node:alpine
WORKDIR /app
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

CMD ["npm", "start"]