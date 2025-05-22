# Stage 1: Build the Angular application
FROM node:latest AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --configuration=production

# Stage 2: Serve the application with Nginx
FROM nginx:stable
COPY --from=build /app/dist/us-map-svg/browser /usr/share/nginx/html
EXPOSE 80
