# Step 1: Build app with Node
FROM node:20 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Step 2: Serve with nginx
FROM nginx:alpine

# Slet default nginx-indhold
RUN rm -rf /usr/share/nginx/html/*

# Kopiér Vite-bygget app til nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Kopiér nginx config (valgfrit)
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
