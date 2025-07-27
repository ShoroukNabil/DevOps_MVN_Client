# Stage 1: Build Angular app
FROM node:18-alpine AS build
WORKDIR /app

# Copy package files separately for caching dependencies
COPY package*.json ./
RUN npm install

# Copy remaining files & build
COPY . .
RUN npm run build --prod

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Remove default Nginx static assets and add Angular build output
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist/angularclient /usr/share/nginx/html

# Copy custom Nginx config if you have one (optional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# Default Nginx start command
CMD ["nginx", "-g", "daemon off;"]
